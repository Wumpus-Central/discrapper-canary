n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(563495),
    r = n(397927),
    a = n(65470),
    l = n(792656),
    o = n(652215),
    c = n(802316);
let d = function (e) {
    let { isVisible: t, subscriptionTier: n, isEligibleForBogoPromotion: d } = e,
        u = (0, r.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        _ = { section: o.JJy.MARKETING_FLOATING_CTA };
    return (0, i.jsx)(s.animated.div, {
        className: c.i,
        style: u,
        "data-mtctest-ignore": "true",
        children: (0, i.jsxs)("div", {
            className: c.U,
            children: [
                (0, i.jsx)(l.A, {
                    size: "md",
                    subscriptionTier: n,
                    hasActivePromotion: !!d,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: _,
                }),
                (0, i.jsx)(a.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
