n.d(t, { Z: () => b });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(108542),
    l = n(755721),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    m = n(736519),
    p = n(784238),
    g = n(474936),
    h = n(981631),
    f = n(993229);
let b = function (e) {
    var t, n;
    let { isVisible: r, subscriptionTier: b, isApplicationHome: x, isEligibleForBogoPromotion: _ } = e,
        j = null == (t = (0, u.N)()) ? void 0 : t.subscription_trial,
        E = (0, d.Ng)(),
        O = (0, d.Wp)(E, g.Si.TIER_2) ? g.Si.TIER_2 : void 0,
        C = (0, o.q_F)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        v = { section: h.jXE.MARKETING_FLOATING_CTA },
        S = (0, c.ZP)(),
        T = (0, o.wjy)(S);
    return (0, i.jsx)(a.animated.div, {
        className: s()(f.wrapper, {
            [f.fullscreenWrapper]: x,
            [f.invisible]: !r
        }),
        style: C,
        children: (0, i.jsxs)('div', {
            className: x ? f.innerWrapperApplicationHome : f.innerWrapper,
            children: [
                (0, i.jsx)(p.Z, {
                    color: T ? l.Tt.BRAND_INVERTED : void 0,
                    className: s()(f.button, { [f.subButton]: T }),
                    subscriptionTier: null != (n = null != b ? b : null == j ? void 0 : j.sku_id) ? n : O,
                    premiumModalAnalyticsLocation: v,
                    isPersistentCTA: !0,
                    hasActivePromotion: _,
                    shinyButtonClassName: T ? void 0 : f.tier2Gradient
                }),
                (0, i.jsx)(m.Z, {
                    className: f.button,
                    premiumModalAnalyticsLocation: v
                })
            ]
        })
    });
};
