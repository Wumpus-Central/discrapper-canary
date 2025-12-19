n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(620792),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(736519),
    d = n(784238),
    f = n(981631),
    p = n(861245);
let _ = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: i, isEligibleForBogoPromotion: _ } = e,
        m = (0, l.q_F)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        h = { section: f.jXE.MARKETING_FLOATING_CTA },
        g = (0, c.ZP)(),
        E = (0, l.wjy)(g);
    return (0, r.jsx)(o.animated.div, {
        className: a()(p.wrapper, {
            [p.fullscreenWrapper]: i,
            [p.invisible]: !t,
        }),
        style: m,
        children: (0, r.jsxs)("div", {
            className: i ? p.innerWrapperApplicationHome : p.innerWrapper,
            children: [
                (0, r.jsx)(d.Z, {
                    color: E ? s.Tt.BRAND_INVERTED : void 0,
                    className: a()(p.button, { [p.subButton]: E }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: h,
                    isPersistentCTA: !0,
                    hasActivePromotion: _,
                    shinyButtonClassName: E ? void 0 : p.tier2Gradient,
                }),
                (0, r.jsx)(u.Z, {
                    className: p.button,
                    premiumModalAnalyticsLocation: h,
                }),
            ],
        }),
    });
};
