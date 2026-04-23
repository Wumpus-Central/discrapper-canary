s.d(t, { A: () => p });
var r = s(627968);
s(64700);
var a = s(503698),
    i = s.n(a),
    n = s(419354),
    l = s(862482),
    o = s(717421),
    c = s(366010),
    d = s(736653),
    m = s(194509),
    u = s(396375),
    _ = s(652215),
    x = s(14238);
let p = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: a, isEligibleForBogoPromotion: p } = e,
        g = (0, o.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        h = { section: _.JJy.MARKETING_FLOATING_CTA },
        f = (0, d.Ay)(),
        C = (0, c.M)(f);
    return (0, r.jsx)(n.animated.div, {
        className: i()(x.iE, { [x.H8]: a, [x.q4]: !t }),
        style: g,
        children: (0, r.jsxs)("div", {
            className: a ? x.zW : x.iJ,
            children: [
                (0, r.jsx)(u.A, {
                    color: C ? l.XD.BRAND_INVERTED : void 0,
                    className: i()(x.x6, { [x.Ph]: C }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: h,
                    isPersistentCTA: !0,
                    hasActivePromotion: p,
                    shinyButtonClassName: C ? void 0 : x.PJ,
                }),
                (0, r.jsx)(m.A, { className: x.x6, premiumModalAnalyticsLocation: h }),
            ],
        }),
    });
};
