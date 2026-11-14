var s = n(477900);
n(582128);
var i = n(939249),
    l = n(403581),
    r = n(834730),
    a = n(61387),
    o = n(576761),
    u = n(321538),
    c = n(792996),
    d = n(41327);
n.d(
    t,
    {},
    {
        f: function (e) {
            let { onClick: t, questId: n, orbMultiplierEligibility: x } = e,
                m = (0, a.ZP)(n),
                E = (0, o.B9)(x);
            if (null == m) return null;
            let h = E
                ? c.intl.formatToPlainString(c.t.l2UfLG, { bonusOrbMultiplier: m })
                : c.intl.formatToPlainString(c.t["G+mKoo"], { bonusOrbMultiplier: m });
            return (0, s.jsx)(i.D, {
                onClick: function (e) {
                    null != m && (e.stopPropagation(), (0, u.gC)(m, x), t?.());
                },
                "aria-label": h,
                children: (0, s.jsxs)("div", {
                    className: d.k,
                    children: [
                        (0, s.jsx)(l.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                        (0, s.jsx)(r.E, {
                            variant: "body-sm/normal",
                            color: "currentColor",
                            className: d.Q,
                            children: h,
                        }),
                    ],
                }),
            });
        },
    },
);
