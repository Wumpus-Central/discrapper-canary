n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(42133),
    s = n(481060),
    a = n(117791),
    l = n(740594),
    o = n(70466),
    c = n(981631),
    d = n(700109);
let u = function (e) {
    let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: u } = e,
        m = (0, s.q_F)({
            transform: t ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        p = { section: c.jXE.MARKETING_FLOATING_CTA },
        { buttonText: g, marketingSubscriptionTierSkuId: h } = (0, o.G)({
            subscriptionTier: n,
            hasActivePromotion: !!u,
            isPersistentCTA: !0
        });
    return (0, i.jsx)(r.animated.div, {
        className: d.wrapper,
        style: m,
        children: (0, i.jsxs)('div', {
            className: d.buttonContainer,
            children: [
                (0, i.jsx)(l.Z, {
                    variant: 'expressive',
                    size: 'md',
                    buttonTextOverride: g,
                    subscriptionTier: h,
                    premiumModalAnalyticsLocation: p
                }),
                (0, i.jsx)(a.Z, {
                    variant: 'secondary',
                    size: 'md'
                })
            ]
        })
    });
};
