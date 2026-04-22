i.d(t, { A: () => T });
var s = i(627968),
    l = i(64700),
    a = i(517738),
    n = i(862482),
    r = i(717421),
    c = i(187322),
    o = i(834730),
    d = i(263063),
    u = i(721923),
    m = i(652215),
    g = i(672350);
let T = function (e) {
    let { closeLayer: t, guild: i, isVisible: T } = e,
        x = l.useRef(null),
        A = (0, r.z)({ transform: T ? "translateY(-100%)" : "translateY(0%)", config: { tension: 120, friction: 12 } });
    return (0, s.jsx)(a.animated.div, {
        className: g.iE,
        style: A,
        children: (0, s.jsx)("div", {
            ref: x,
            className: g.iJ,
            children: (0, s.jsxs)(c.xp, {
                containerRef: x,
                children: [
                    (0, s.jsxs)("div", {
                        className: g.OA,
                        children: [
                            (0, s.jsx)(d.Ay, { className: g.$f, guild: i, size: d.Ay.Sizes.SMALL }),
                            (0, s.jsx)(o.E, { className: g.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(u.A, {
                        className: g.lI,
                        guild: i,
                        analyticsLocation: {
                            page: m.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: m.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: m.ZSU.BUTTON_CTA,
                            objectType: m.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !T,
                        size: n.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
