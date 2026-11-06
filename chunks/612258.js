var l = n(477900),
    i = n(582128),
    s = n(620141),
    r = n(19309),
    a = n(224964),
    o = n(31408);
function u(e) {
    let { callTileRef: t, isFiring: n } = e,
        l = (0, a.A)();
    return (
        i.useEffect(() => {
            let e = t.current;
            if (n && null != e) {
                let t = (0, r.A)(e);
                null != t && l.fire(t.x + e.clientWidth / 2, t.y + e.clientHeight / 2, { countMultiplier: 4 });
            }
        }, [t, l, n]),
        null
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, l.jsx)(s.A, { confettiLocation: o.k.CALL_TILE, children: (0, l.jsx)(u, { ...e }) });
        },
    },
);
