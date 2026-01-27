n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(108531),
    l = n(397927),
    s = n(65470),
    a = n(792656),
    o = n(652215),
    c = n(802316);
let d = function (e) {
    let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: d } = e,
        u = (0, l.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        _ = {
            section: o.JJy.MARKETING_FLOATING_CTA,
        };
    return (0, r.jsx)(i.animated.div, {
        className: c.i,
        style: u,
        "data-mtctest-ignore": "true",
        children: (0, r.jsxs)("div", {
            className: c.U,
            children: [
                (0, r.jsx)(a.A, {
                    size: "md",
                    subscriptionTier: n,
                    hasActivePromotion: !!d,
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
