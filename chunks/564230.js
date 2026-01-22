n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(108531),
    a = n(397927),
    s = n(65470),
    o = n(792656),
    l = n(652215),
    c = n(802316);
let u = 120,
    d = 12,
    f = function (e) {
        let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: f } = e,
            p = (0, a.zhh)({
                transform: t ? "translateY(-100%)" : "translateY(0%)",
                opacity: +!!t,
                config: {
                    tension: u,
                    friction: d,
                },
            }),
            _ = {
                section: l.JJy.MARKETING_FLOATING_CTA,
            };
        return (0, r.jsx)(i.animated.div, {
            className: c.i,
            style: p,
            "data-mtctest-ignore": "true",
            children: (0, r.jsxs)("div", {
                className: c.U,
                children: [
                    (0, r.jsx)(o.A, {
                        size: "md",
                        subscriptionTier: n,
                        hasActivePromotion: !!f,
                        isPersistentCTA: !0,
                        premiumModalAnalyticsLocation: _,
                    }),
                    (0, r.jsx)(s.A, {
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
        });
    };
