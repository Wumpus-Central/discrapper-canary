var l = n(477900),
    i = n(582128),
    r = n(620141),
    a = n(19309),
    s = n(224964),
    o = n(31408);
function u(e) {
    let { callTileRef: t, isFiring: n } = e,
        l = (0, s.A)();
    return (
        i.useEffect(() => {
            let e = t.current;
            if (n && null != e) {
                let t = (0, a.A)(e);
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
            return (0, l.jsx)(r.A, { confettiLocation: o.k.CALL_TILE, children: (0, l.jsx)(u, { ...e }) });
        },
    },
);
