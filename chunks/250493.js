"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(419354),
    a = n(862482),
    o = n(717421),
    l = n(187322),
    u = n(834730),
    c = n(263063),
    d = n(721923),
    _ = n(652215),
    f = n(672350);
let p = function (e) {
    let { closeLayer: t, guild: n, isVisible: p } = e,
        h = i.useRef(null),
        E = (0, o.z)({ transform: p ? "translateY(-100%)" : "translateY(0%)", config: { tension: 120, friction: 12 } });
    return (0, r.jsx)(s.animated.div, {
        className: f.iE,
        style: E,
        children: (0, r.jsx)("div", {
            ref: h,
            className: f.iJ,
            children: (0, r.jsxs)(l.xp, {
                containerRef: h,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.OA,
                        children: [
                            (0, r.jsx)(c.Ay, { className: f.$f, guild: n, size: c.Ay.Sizes.SMALL }),
                            (0, r.jsx)(u.E, { className: f.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, r.jsx)(d.A, {
                        className: f.lI,
                        guild: n,
                        analyticsLocation: {
                            page: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: _.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: _.ZSU.BUTTON_CTA,
                            objectType: _.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !p,
                        size: a.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
