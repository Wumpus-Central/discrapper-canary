n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(620141),
    s = n(966598),
    r = n(224964),
    o = n(31408);
function c(e) {
    let { callTileRef: t, isFiring: n } = e,
        i = (0, r.A)(),
        a = (0, s.A)(t);
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
function d(e) {
    return (0, i.jsx)(a.A, { confettiLocation: o.k.CALL_TILE, children: (0, i.jsx)(c, { ...e }) });
}
