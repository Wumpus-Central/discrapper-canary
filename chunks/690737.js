n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(40153),
    r = n(421380),
    o = n(397927),
    c = n(736653),
    d = n(194509),
    u = n(396375),
    _ = n(652215),
    m = n(178501);
let A = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: s, isEligibleForBogoPromotion: A } = e,
        g = (0, o.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        h = { section: _.JJy.MARKETING_FLOATING_CTA },
        x = (0, c.Ay)(),
        p = (0, o.Mwr)(x);
    return (0, i.jsx)(l.animated.div, {
        className: a()(m.iE, { [m.H8]: s, [m.q4]: !t }),
        style: g,
        children: (0, i.jsxs)("div", {
            className: s ? m.zW : m.iJ,
            children: [
                (0, i.jsx)(u.A, {
                    color: p ? r.XD.BRAND_INVERTED : void 0,
                    className: a()(m.x6, { [m.Ph]: p }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: h,
                    isPersistentCTA: !0,
                    hasActivePromotion: A,
                    shinyButtonClassName: p ? void 0 : m.PJ,
                }),
                (0, i.jsx)(d.A, { className: m.x6, premiumModalAnalyticsLocation: h }),
            ],
        }),
    });
};
