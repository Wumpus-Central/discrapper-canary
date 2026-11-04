var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(462887),
    l = n(862482),
    u = n(597770),
    o = n(736653),
    c = n(688810),
    d = n(620301),
    p = n(485140),
    m = n(682901),
    b = n(652215),
    f = n(792996),
    C = n(50780);
function N(e) {
    return e === m.pe.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    className: t,
                    textOptions: n,
                    color: i,
                    look: m,
                    hideIcon: f,
                    subscriptionTier: T,
                    premiumModalAnalyticsLocation: g,
                    giftMessage: h,
                    onClick: x,
                } = e,
                A = (0, o.Ay)(),
                _ = N(T),
                { analyticsLocations: j } = (0, c.Ay)(),
                { openGiftModal: k } = (0, d.$)({
                    giftRecipient: null,
                    analyticsLocations: j,
                    analyticsObject: { object: b.ZSU.BUTTON_CTA, objectType: b.btD.GIFT, ...g },
                    giftMessage: h,
                    subscriptionTier: T,
                    location: "gift-button",
                }),
                O = (0, p.Y)();
            return (0, r.jsxs)(l.$n, {
                "data-migration-pending": !0,
                innerClassName: C.Nq,
                color: i ?? ((0, a.M)(A) ? l.XD.WHITE : l.XD.BRAND),
                look: m ?? l.pR.OUTLINED,
                className: s()(t, C.xP),
                onClick: (e) =>
                    O(() => {
                        (k(), x?.(e));
                    }),
                children: [
                    !f && (0, r.jsx)(u.GiftIcon, { size: "md", color: "currentColor", className: C.ez }),
                    (0, r.jsx)("span", { className: s()(C._d, n?.textClassName), children: n?.textOverride ?? _ }),
                ],
            });
        },
        U: N,
    },
);
