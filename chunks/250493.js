"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(687498),
    a = n(421380),
    o = n(397927),
    l = n(263063),
    u = n(721923),
    c = n(652215),
    d = n(399534);
let _ = function (e) {
    let { closeLayer: t, guild: n, isVisible: _ } = e,
        f = i.useRef(null),
        p = (0, o.zhh)({
            transform: _ ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(s.animated.div, {
        className: d.iE,
        style: p,
        children: (0, r.jsx)("div", {
            ref: f,
            className: d.iJ,
            children: (0, r.jsxs)(o.xpW, {
                containerRef: f,
                children: [
                    (0, r.jsxs)("div", {
                        className: d.OA,
                        children: [
                            (0, r.jsx)(l.Ay, { className: d.$f, guild: n, size: l.Ay.Sizes.SMALL }),
                            (0, r.jsx)(o.Text, { className: d.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, r.jsx)(u.A, {
                        className: d.lI,
                        guild: n,
                        analyticsLocation: {
                            page: c.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: c.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: c.ZSU.BUTTON_CTA,
                            objectType: c.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !_,
                        size: a.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
