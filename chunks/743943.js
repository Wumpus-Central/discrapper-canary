t.d(n, { A: () => c });
var l = t(477900),
    i = t(582128),
    a = t(296704),
    s = t(717421),
    r = t(781137),
    o = t(812597);
function c(e) {
    let { position: n, roomWidth: t } = e,
        [c, u] = (0, s.z)(() => ({ x: n.x, y: n.y, config: { clamp: !0, tension: 1200, friction: 40, mass: 0.4 } }));
    return (
        (0, i.useEffect)(() => {
            u({ x: n.x, y: n.y });
        }, [n.x, n.y, u]),
        (0, l.jsx)(a.animated.div, {
            "aria-hidden": !0,
            className: o.V,
            style: { left: c.x.to((e) => `${e}%`), top: c.y.to((e) => `${e}%`) },
            children: (0, l.jsx)(r.A, { roomWidth: t }),
        })
    );
}
