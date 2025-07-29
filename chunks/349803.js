n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(564854),
    l = n(755721),
    o = n(481060),
    c = n(410030),
    d = n(736519),
    u = n(784238),
    m = n(981631),
    p = n(993229);
let g = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: r, isEligibleForBogoPromotion: g } = e,
        h = (0, o.q_F)({
            transform: t ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        f = { section: m.jXE.MARKETING_FLOATING_CTA },
        b = (0, c.ZP)(),
        x = (0, o.wjy)(b);
    return (0, i.jsx)(a.animated.div, {
        className: s()(p.wrapper, {
            [p.fullscreenWrapper]: r,
            [p.invisible]: !t
        }),
        style: h,
        children: (0, i.jsxs)('div', {
            className: r ? p.innerWrapperApplicationHome : p.innerWrapper,
            children: [
                (0, i.jsx)(u.Z, {
                    color: x ? l.Tt.BRAND_INVERTED : void 0,
                    className: s()(p.button, { [p.subButton]: x }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: f,
                    isPersistentCTA: !0,
                    hasActivePromotion: g,
                    shinyButtonClassName: x ? void 0 : p.tier2Gradient
                }),
                (0, i.jsx)(d.Z, {
                    className: p.button,
                    premiumModalAnalyticsLocation: f
                })
            ]
        })
    });
};
