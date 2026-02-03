n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(92674),
    a = n(421380),
    o = n(397927),
    c = n(736653),
    d = n(194509),
    u = n(396375),
    _ = n(652215),
    p = n(41099);
let m = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: i, isEligibleForBogoPromotion: m } = e,
        g = (0, o.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        A = {
            section: _.JJy.MARKETING_FLOATING_CTA,
        },
        f = (0, c.Ay)(),
        b = (0, o.Mwr)(f);
    return (0, r.jsx)(s.animated.div, {
        className: l()(p.iE, {
            [p.H8]: i,
            [p.q4]: !t,
        }),
        style: g,
        children: (0, r.jsxs)("div", {
            className: i ? p.zW : p.iJ,
            children: [
                (0, r.jsx)(u.A, {
                    color: b ? a.XD.BRAND_INVERTED : void 0,
                    className: l()(p.x6, {
                        [p.Ph]: b,
                    }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: A,
                    isPersistentCTA: !0,
                    hasActivePromotion: m,
                    shinyButtonClassName: b ? void 0 : p.PJ,
                }),
                (0, r.jsx)(d.A, {
                    className: p.x6,
                    premiumModalAnalyticsLocation: A,
                }),
            ],
        }),
    });
};
