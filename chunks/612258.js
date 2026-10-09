n.d(t, { A: () => c });
var i = n(477900),
    l = n(582128),
    s = n(620141),
    r = n(19309),
    a = n(224964),
    o = n(31408);
function u(e) {
    let { callTileRef: t, isFiring: n } = e,
        i = (0, a.A)();
    return (
        l.useEffect(() => {
            let e = t.current;
            if (n && null != e) {
                let t = (0, r.A)(e);
                null != t && i.fire(t.x + e.clientWidth / 2, t.y + e.clientHeight / 2, { countMultiplier: 4 });
            }
        }, [t, i, n]),
        null
    );
}
function c(e) {
    return (0, i.jsx)(s.A, { confettiLocation: o.k.CALL_TILE, children: (0, i.jsx)(u, { ...e }) });
}
