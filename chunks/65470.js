s.d(t, { A: () => u });
var l = s(627968);
s(64700);
var n = s(821609),
    i = s(597770),
    r = s(688810),
    a = s(751188),
    o = s(194509),
    c = s(485140),
    d = s(652215);
let u = function (e) {
    let {
            subscriptionTier: t,
            premiumModalAnalyticsLocation: s,
            giftMessage: u,
            onClick: x,
            buttonTextOverride: m,
            ...p
        } = e,
        { analyticsLocations: j } = (0, r.Ay)(),
        { openGiftModal: h } = (0, a.$)({
            giftRecipient: null,
            analyticsLocations: j,
            analyticsObject: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.GIFT, ...s },
            giftMessage: u,
            subscriptionTier: t,
            location: "premium-brand-refresh-gift-button",
        }),
        _ = (0, c.Y)(),
        f = m ?? (0, o.U)(t);
    return (0, l.jsx)(n.$, {
        onClick: (e) =>
            _(() => {
                h(), x?.(e);
            }),
        icon: i.o,
        ...p,
        text: f,
    });
};
