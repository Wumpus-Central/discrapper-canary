var i = n(477900),
    l = n(582128),
    a = n(736819),
    s = n(717421),
    r = n(781137),
    o = n(812597);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { position: t, roomWidth: n } = e,
                [d, c] = (0, s.z)(() => ({
                    x: t.x,
                    y: t.y,
                    config: { clamp: !0, tension: 1200, friction: 40, mass: 0.4 },
                }));
            return (
                (0, l.useEffect)(() => {
                    c({ x: t.x, y: t.y });
                }, [t.x, t.y, c]),
                (0, i.jsx)(a.animated.div, {
                    "aria-hidden": !0,
                    className: o.V,
                    style: { left: d.x.to((e) => `${e}%`), top: d.y.to((e) => `${e}%`) },
                    children: (0, i.jsx)(r.A, { roomWidth: n }),
                })
            );
        },
    },
);
