n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(524979),
    a = n(481060),
    o = n(410030),
    c = n(104494),
    d = n(639119),
    u = n(736519),
    m = n(784238),
    g = n(474936),
    p = n(981631),
    h = n(993229);
let f = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: f, subscriptionTier: b, isApplicationHome: _, isEligibleForBogoPromotion: x } = e,
        E = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        j = (0, c.Ng)(),
        C = (0, c.Wp)(j, g.Si.TIER_2) ? g.Si.TIER_2 : void 0,
        O = (0, a.q_F)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        S = { section: p.jXE.MARKETING_FLOATING_CTA },
        v = (0, o.ZP)(),
        T = (0, a.wjy)(v);
    return (0, i.jsx)(l.animated.div, {
        className: s()(h.wrapper, {
            [h.fullscreenWrapper]: f,
            [h.invisible]: !r
        }),
        style: O,
        children: (0, i.jsxs)('div', {
            className: _ ? h.innerWrapperApplicationHome : h.innerWrapper,
            children: [
                (0, i.jsx)(m.Z, {
                    color: T ? a.Ttl.BRAND_INVERTED : void 0,
                    className: s()(h.button, { [h.subButton]: T }),
                    subscriptionTier: null != (n = null != b ? b : null == E ? void 0 : E.sku_id) ? n : C,
                    premiumModalAnalyticsLocation: S,
                    isPersistentCTA: !0,
                    hasActivePromotion: x,
                    shinyButtonClassName: T ? void 0 : h.tier2Gradient
                }),
                (0, i.jsx)(u.Z, {
                    className: h.button,
                    premiumModalAnalyticsLocation: S
                })
            ]
        })
    });
};
