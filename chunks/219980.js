var t = l(477900),
    a = l(582128),
    i = l(855986),
    r = l(192308),
    c = l(265872),
    o = l(964486),
    s = l(786953),
    u = l(505274),
    d = l(533609);
l.d(
    n,
    {},
    {
        J: function (e) {
            let { pillRef: n, clickableRef: l, ...a } = e,
                { balancePillOverlay: r } = (0, i.cf)([u.A], () => ({ balancePillOverlay: u.A.balancePillOverlay })),
                o = (0, t.jsx)(d.Gy, { ref: n, clickableRef: l, ...a }),
                s = (0, t.jsx)(d.Gy, { ...a, isInModalOverlay: !0, disabled: !0 }),
                f = null != n.current ? n.current.offsetHeight : 36;
            return (0, t.jsx)(c.Y, {
                fixed: !0,
                autoInvert: !1,
                renderPopout: () => s,
                position: "bottom",
                align: "right",
                shouldShow: r,
                spacing: -f,
                animation: c.Y.Animation.NONE,
                targetElementRef: n,
                positionKey: `${a.balance}-${r}`,
                children: () => o,
            });
        },
        Y: function () {
            let e = (0, i.bG)([u.A], () => u.A.balancePillOverlay);
            return (
                (0, o.Ay)(() => {
                    e || (0, s.G7)(!0);
                }),
                (0, a.useEffect)(
                    () => () => {
                        !(0, r.ue)() && e && (0, s.G7)(!1);
                    },
                    [e],
                ),
                null
            );
        },
    },
);
