n.d(e, { A: () => u });
var i = n(477900);
n(582128);
var l = n(821609),
    o = n(597770),
    s = n(688810),
    a = n(788833),
    r = n(194509),
    c = n(485140),
    d = n(652215);
let u = function (t) {
    let {
            subscriptionTier: e,
            premiumModalAnalyticsLocation: n,
            giftMessage: u,
            onClick: p,
            buttonTextOverride: m,
            ...x
        } = t,
        { analyticsLocations: h } = (0, s.Ay)(),
        { openGiftModal: b } = (0, a.$)({
            giftRecipient: null,
            analyticsLocations: h,
            analyticsObject: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.GIFT, ...n },
            giftMessage: u,
            subscriptionTier: e,
            location: "premium-brand-refresh-gift-button",
        }),
        g = (0, c.Y)(),
        A = m ?? (0, r.U)(e);
    return (0, i.jsx)(l.$, {
        onClick: (t) =>
            g(() => {
                (b(), p?.(t));
            }),
        icon: o.GiftIcon,
        ...x,
        text: A,
    });
};
