n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(421380),
    l = n(397927),
    c = n(736653),
    u = n(194509),
    d = n(396375),
    f = n(652215),
    p = n(41099);
let _ = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: i, isEligibleForBogoPromotion: _ } = e,
        h = (0, l.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        m = { section: f.JJy.MARKETING_FLOATING_CTA },
        g = (0, c.Ay)(),
        E = (0, l.Mwr)(g);
    return (0, r.jsx)(s.animated.div, {
        className: a()(p.iE, {
            [p.H8]: i,
            [p.q4]: !t,
        }),
        style: h,
        children: (0, r.jsxs)("div", {
            className: i ? p.zW : p.iJ,
            children: [
                (0, r.jsx)(d.A, {
                    color: E ? o.XD.BRAND_INVERTED : void 0,
                    className: a()(p.x6, { [p.Ph]: E }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: m,
                    isPersistentCTA: !0,
                    hasActivePromotion: _,
                    shinyButtonClassName: E ? void 0 : p.PJ,
                }),
                (0, r.jsx)(u.A, {
                    className: p.x6,
                    premiumModalAnalyticsLocation: m,
                }),
            ],
        }),
    });
};
