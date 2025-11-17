n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(636606),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(736519),
    d = n(784238),
    f = n(981631),
    _ = n(679865);
let p = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: i, isEligibleForBogoPromotion: p } = e,
        h = (0, l.q_F)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        m = { section: f.jXE.MARKETING_FLOATING_CTA },
        g = (0, c.ZP)(),
        E = (0, l.wjy)(g);
    return (0, r.jsx)(o.animated.div, {
        className: a()(_.wrapper, {
            [_.fullscreenWrapper]: i,
            [_.invisible]: !t,
        }),
        style: h,
        children: (0, r.jsxs)("div", {
            className: i ? _.innerWrapperApplicationHome : _.innerWrapper,
            children: [
                (0, r.jsx)(d.Z, {
                    color: E ? s.Tt.BRAND_INVERTED : void 0,
                    className: a()(_.button, { [_.subButton]: E }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: m,
                    isPersistentCTA: !0,
                    hasActivePromotion: p,
                    shinyButtonClassName: E ? void 0 : _.tier2Gradient,
                }),
                (0, r.jsx)(u.Z, {
                    className: _.button,
                    premiumModalAnalyticsLocation: m,
                }),
            ],
        }),
    });
};
