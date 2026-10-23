n.d(t, { A: () => r });
var i = n(582128),
    s = n(451988),
    l = n(444927);
function r(e, t) {
    let [n, r] = (0, i.useState)(e),
        a = (0, l.A)(() => new s.Ep());
    return (
        (0, i.useEffect)(() => () => a.stop(), [a]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    (r(n), n !== e && a.start(t, () => r(e)));
                },
                [t, e, a],
            ),
        ]
    );
}
