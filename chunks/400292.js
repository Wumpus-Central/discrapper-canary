s.d(t, { A: () => d });
var r = s(627968);
s(64700);
var a = s(419354),
    i = s(717421),
    n = s(65470),
    l = s(792656),
    o = s(652215),
    c = s(648027);
let d = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: d } = e,
        m = (0, i.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        u = { section: o.JJy.MARKETING_FLOATING_CTA };
    return (0, r.jsx)(a.animated.div, {
        className: c.i,
        style: m,
        "data-mtctest-ignore": "true",
        children: (0, r.jsxs)("div", {
            className: c.U,
            children: [
                (0, r.jsx)(l.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!d,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: u,
                }),
                (0, r.jsx)(n.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
