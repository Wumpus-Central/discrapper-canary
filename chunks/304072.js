n.d(t, { A: () => l });
var i = n(582128),
    s = n(451988),
    r = n(444927);
function l(e, t) {
    let [n, l] = (0, i.useState)(e),
        a = (0, r.A)(() => new s.Ep());
    return (
        (0, i.useEffect)(() => () => a.stop(), [a]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    (l(n), n !== e && a.start(t, () => l(e)));
                },
                [t, e, a],
            ),
        ]
    );
}
