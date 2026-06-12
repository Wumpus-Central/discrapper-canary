n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    s = n(620141),
    r = n(966598),
    a = n(224964),
    o = n(31408);
function u(e) {
    let { callTileRef: t, isFiring: n } = e,
        l = (0, a.A)(),
        s = (0, r.A)(t);
    return (
        i.useEffect(() => {
            n &&
                null != s &&
                null != t &&
                l.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, l, n, s]),
        null
    );
}
function c(e) {
    return (0, l.jsx)(s.A, { confettiLocation: o.k.CALL_TILE, children: (0, l.jsx)(u, { ...e }) });
}
