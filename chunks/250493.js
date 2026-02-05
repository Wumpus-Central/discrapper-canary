"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(563495),
    a = n(421380),
    s = n(397927),
    o = n(263063),
    l = n(721923),
    u = n(652215),
    c = n(12373);
let d = function (e) {
    let { closeLayer: t, guild: n, isVisible: d } = e,
        _ = (0, s.zhh)({
            transform: d ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(i.animated.div, {
        className: c.iE,
        style: _,
        children: (0, r.jsxs)("div", {
            className: c.iJ,
            children: [
                (0, r.jsxs)("div", {
                    className: c.OA,
                    children: [
                        (0, r.jsx)(o.A, { className: c.$f, guild: n, size: o.A.Sizes.SMALL }),
                        (0, r.jsx)(s.Text, { className: c.J5, variant: "text-md/semibold", children: n.name }),
                    ],
                }),
                (0, r.jsx)(l.A, {
                    className: c.lI,
                    guild: n,
                    analyticsLocation: {
                        page: u.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: u.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: u.ZSU.BUTTON_CTA,
                        objectType: u.AnalyticsObjectTypes.BUY,
                    },
                    closeLayer: t,
                    pauseAnimation: !d,
                    size: a.$n.Sizes.SMALL,
                    useExpressiveButton: !0,
                }),
            ],
        }),
    });
};
