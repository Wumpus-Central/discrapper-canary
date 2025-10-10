i.d(t, { e: () => d });
var l = i(951288),
    n = i(409116),
    r = i(755007),
    a = i(231338),
    s = i(453510);
function o(e) {
    let { price: t, isPremiumUser: i, discount: o, hasSufficientOrbs: d, discountOfferAmount: u } = e;
    return t.currency === a.pK.DISCORD_ORB
        ? (0, l.jsx)(r.Z, {
              orbAmount: t.amount,
              className: d ? void 0 : s.disabled,
          })
        : (0, l.jsx)(n.F, {
              price: t,
              discount: o,
              nitroIconType: i ? "default" : void 0,
              nitroIconSize: "md",
              discountOfferAmount: u,
          });
}
function d(e) {
    let { displayPrices: t, isPremiumUser: i, discount: n, hasSufficientOrbs: r, discountOfferAmount: a } = e;
    return (0, l.jsx)("div", {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, l.jsx)(
                o,
                {
                    price: e,
                    isPremiumUser: i,
                    discount: n,
                    hasSufficientOrbs: r,
                    discountOfferAmount: a,
                },
                t,
            ),
        ),
    });
}
