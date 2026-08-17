n.d(t, { A: () => T, U: () => N });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(462887),
    l = n(862482),
    o = n(597770),
    u = n(736653),
    c = n(688810),
    d = n(788833),
    p = n(485140),
    b = n(202541),
    m = n(652215),
    f = n(375708),
    C = n(646132);
function N(e) {
    return e === b.pe.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6);
}
let T = function (e) {
    let {
            className: t,
            textOptions: n,
            color: i,
            look: b,
            hideIcon: f,
            subscriptionTier: T,
            premiumModalAnalyticsLocation: y,
            giftMessage: A,
            onClick: g,
        } = e,
        h = (0, u.Ay)(),
        j = N(T),
        { analyticsLocations: x } = (0, c.Ay)(),
        { openGiftModal: O } = (0, d.$)({
            giftRecipient: null,
            analyticsLocations: x,
            analyticsObject: { object: m.ZSU.BUTTON_CTA, objectType: m.AnalyticsObjectTypes.GIFT, ...y },
            giftMessage: A,
            subscriptionTier: T,
            location: "gift-button",
        }),
        _ = (0, p.Y)();
    return (0, r.jsxs)(l.$n, {
        "data-migration-pending": !0,
        innerClassName: C.Nq,
        color: i ?? ((0, a.M)(h) ? l.XD.WHITE : l.XD.BRAND),
        look: b ?? l.pR.OUTLINED,
        className: s()(t, C.xP),
        onClick: (e) =>
            _(() => {
                O(), g?.(e);
            }),
        children: [
            !f && (0, r.jsx)(o.GiftIcon, { size: "md", color: "currentColor", className: C.ez }),
            (0, r.jsx)("span", { className: s()(C._d, n?.textClassName), children: n?.textOverride ?? j }),
        ],
    });
};
