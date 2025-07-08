n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(264738),
    a = n(481060),
    o = n(410030),
    c = n(104494),
    d = n(639119),
    u = n(736519),
    m = n(784238),
    p = n(474936),
    g = n(981631),
    h = n(993229);
let f = function (e) {
    var t, n;
    let { isVisible: r, subscriptionTier: f, isApplicationHome: b, isEligibleForBogoPromotion: x } = e,
        _ = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        E = (0, c.Ng)(),
        j = (0, c.Wp)(E, p.Si.TIER_2) ? p.Si.TIER_2 : void 0,
        O = (0, a.q_F)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        C = { section: g.jXE.MARKETING_FLOATING_CTA },
        S = (0, o.ZP)(),
        v = (0, a.wjy)(S);
    return (0, i.jsx)(l.animated.div, {
        className: s()(h.wrapper, {
            [h.fullscreenWrapper]: b,
            [h.invisible]: !r
        }),
        style: O,
        children: (0, i.jsxs)('div', {
            className: b ? h.innerWrapperApplicationHome : h.innerWrapper,
            children: [
                (0, i.jsx)(m.Z, {
                    color: v ? a.Ttl.BRAND_INVERTED : void 0,
                    className: s()(h.button, { [h.subButton]: v }),
                    subscriptionTier: null != (n = null != f ? f : null == _ ? void 0 : _.sku_id) ? n : j,
                    premiumModalAnalyticsLocation: C,
                    isPersistentCTA: !0,
                    hasActivePromotion: x,
                    shinyButtonClassName: v ? void 0 : h.tier2Gradient
                }),
                (0, i.jsx)(u.Z, {
                    className: h.button,
                    premiumModalAnalyticsLocation: C
                })
            ]
        })
    });
};
