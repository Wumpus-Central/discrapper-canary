n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(620141),
    r = n(966598),
    s = n(224964),
    o = n(31408);
function d(e) {
    let { callTileRef: t, isFiring: n } = e,
        i = (0, s.A)(),
        a = (0, r.A)(t);
    return (
        l.useEffect(() => {
            n &&
                null != a &&
                null != t &&
                i.fire(a.x + t.clientWidth / 2, a.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, i, n, a]),
        null
    );
}
function c(e) {
    return (0, i.jsx)(a.A, { confettiLocation: o.k.CALL_TILE, children: (0, i.jsx)(d, { ...e }) });
}
