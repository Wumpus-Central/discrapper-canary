n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(855659),
    s = n(481060),
    a = n(117791),
    l = n(638212),
    o = n(981631),
    c = n(700109);
let d = function (e) {
    let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: d } = e,
        u = (0, s.q_F)({
            transform: t ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        m = { section: o.jXE.MARKETING_FLOATING_CTA };
    return (0, i.jsx)(r.animated.div, {
        className: c.wrapper,
        style: u,
        children: (0, i.jsxs)('div', {
            className: c.buttonContainer,
            children: [
                (0, i.jsx)(l.Z, {
                    size: 'md',
                    subscriptionTier: n,
                    hasActivePromotion: !!d,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: m
                }),
                (0, i.jsx)(a.Z, {
                    variant: 'secondary',
                    size: 'md'
                })
            ]
        })
    });
};
