n.d(e, { A: () => p });
var i = n(477900);
n(582128);
var l = n(821609),
    o = n(597770),
    a = n(688810),
    s = n(788833),
    r = n(194509),
    c = n(485140),
    d = n(652215);
let p = function (t) {
    let {
            subscriptionTier: e,
            premiumModalAnalyticsLocation: n,
            giftMessage: p,
            onClick: u,
            buttonTextOverride: m,
            ...x
        } = t,
        { analyticsLocations: h } = (0, a.Ay)(),
        { openGiftModal: b } = (0, s.$)({
            giftRecipient: null,
            analyticsLocations: h,
            analyticsObject: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.GIFT, ...n },
            giftMessage: p,
            subscriptionTier: e,
            location: "premium-brand-refresh-gift-button",
        }),
        g = (0, c.Y)(),
        A = m ?? (0, r.U)(e);
    return (0, i.jsx)(l.$, {
        onClick: (t) =>
            g(() => {
                (b(), u?.(t));
            }),
        icon: o.GiftIcon,
        ...x,
        text: A,
    });
};
