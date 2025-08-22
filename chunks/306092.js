n.d(t, { e: () => c });
var r = n(951288),
    i = n(409116),
    a = n(755007),
    o = n(231338),
    s = n(453510);
function l(e) {
    let { price: t, isPremiumUser: n, discount: l, hasSufficientOrbs: c, discountOfferAmount: u } = e;
    return t.currency === o.pK.DISCORD_ORB
        ? (0, r.jsx)(a.Z, {
              orbAmount: t.amount,
              className: c ? void 0 : s.disabled,
          })
        : (0, r.jsx)(i.F, {
              price: t,
              discount: l,
              nitroIconType: n ? "default" : void 0,
              nitroIconSize: "md",
              discountOfferAmount: u,
          });
}
function c(e) {
    let { displayPrices: t, isPremiumUser: n, discount: i, hasSufficientOrbs: a, discountOfferAmount: o } = e;
    return (0, r.jsx)("div", {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, r.jsx)(
                l,
                {
                    price: e,
                    isPremiumUser: n,
                    discount: i,
                    hasSufficientOrbs: a,
                    discountOfferAmount: o,
                },
                t,
            ),
        ),
    });
}
