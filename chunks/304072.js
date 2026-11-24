var s = t(582128),
    i = t(451988),
    l = t(444927);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let [t, a] = (0, s.useState)(e),
                r = (0, l.A)(() => new i.Ep());
            return (
                (0, s.useEffect)(() => () => r.stop(), [r]),
                [
                    t,
                    (0, s.useCallback)(
                        (t) => {
                            (a(t), t !== e && r.start(n, () => a(e)));
                        },
                        [n, e, r],
                    ),
                ]
            );
        },
    },
);
