n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(81239),
    a = n(481060),
    o = n(117791),
    s = n(638212),
    l = n(981631),
    c = n(515249);
let u = 120,
    d = 12,
    f = function (e) {
        let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: f } = e,
            p = (0, a.q_F)({
                transform: t ? "translateY(-100%)" : "translateY(0%)",
                opacity: +!!t,
                config: {
                    tension: u,
                    friction: d,
                },
            }),
            _ = { section: l.jXE.MARKETING_FLOATING_CTA };
        return (0, r.jsx)(i.animated.div, {
            className: c.wrapper,
            style: p,
            "data-mtctest-ignore": "true",
            children: (0, r.jsxs)("div", {
                className: c.buttonContainer,
                children: [
                    (0, r.jsx)(s.Z, {
                        size: "md",
                        subscriptionTier: n,
                        hasActivePromotion: !!f,
                        isPersistentCTA: !0,
                        premiumModalAnalyticsLocation: _,
                    }),
                    (0, r.jsx)(o.Z, {
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
        });
    };
