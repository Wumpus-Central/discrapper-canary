n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(92674),
    l = n(421380),
    o = n(397927),
    c = n(736653),
    d = n(194509),
    u = n(396375),
    _ = n(652215),
    m = n(41099);
let A = function (e) {
    let { isVisible: t, subscriptionTier: n, isApplicationHome: s, isEligibleForBogoPromotion: A } = e,
        g = (0, o.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        E = { section: _.JJy.MARKETING_FLOATING_CTA },
        h = (0, c.Ay)(),
        p = (0, o.Mwr)(h);
    return (0, i.jsx)(a.animated.div, {
        className: r()(m.iE, { [m.H8]: s, [m.q4]: !t }),
        style: g,
        children: (0, i.jsxs)("div", {
            className: s ? m.zW : m.iJ,
            children: [
                (0, i.jsx)(u.A, {
                    color: p ? l.XD.BRAND_INVERTED : void 0,
                    className: r()(m.x6, { [m.Ph]: p }),
                    subscriptionTier: n,
                    premiumModalAnalyticsLocation: E,
                    isPersistentCTA: !0,
                    hasActivePromotion: A,
                    shinyButtonClassName: p ? void 0 : m.PJ,
                }),
                (0, i.jsx)(d.A, { className: m.x6, premiumModalAnalyticsLocation: E }),
            ],
        }),
    });
};
