n.d(t, { A: () => r });
var l = n(582128),
    i = n(451988),
    s = n(444927);
function r(e, t) {
    let [n, r] = (0, l.useState)(e),
        a = (0, s.A)(() => new i.Ep());
    return (
        (0, l.useEffect)(() => () => a.stop(), [a]),
        [
            n,
            (0, l.useCallback)(
                (n) => {
                    r(n), n !== e && a.start(t, () => r(e));
                },
                [t, e, a],
            ),
        ]
    );
}
