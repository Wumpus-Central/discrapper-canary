var l = t(582128),
    s = t(451988),
    a = t(444927);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let [t, i] = (0, l.useState)(e),
                r = (0, a.A)(() => new s.Ep());
            return (
                (0, l.useEffect)(() => () => r.stop(), [r]),
                [
                    t,
                    (0, l.useCallback)(
                        (t) => {
                            (i(t), t !== e && r.start(n, () => i(e)));
                        },
                        [n, e, r],
                    ),
                ]
            );
        },
    },
);
