n.d(t, { A: () => c });
var i = n(477900),
    l = n(582128),
    a = n(221877),
    s = n(717421),
    r = n(781137),
    o = n(812597);
function c(e) {
    let { position: t, roomWidth: n } = e,
        [c, d] = (0, s.z)(() => ({ x: t.x, y: t.y, config: { clamp: !0, tension: 1200, friction: 40, mass: 0.4 } }));
    return (
        (0, l.useEffect)(() => {
            d({ x: t.x, y: t.y });
        }, [t.x, t.y, d]),
        (0, i.jsx)(a.animated.div, {
            "aria-hidden": !0,
            className: o.V,
            style: { left: c.x.to((e) => `${e}%`), top: c.y.to((e) => `${e}%`) },
            children: (0, i.jsx)(r.A, { roomWidth: n }),
        })
    );
}
