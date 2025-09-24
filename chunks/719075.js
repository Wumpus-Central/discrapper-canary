n.d(t, { Z: () => E });
var r = n(951288),
    l = n(647438),
    a = n(399606),
    i = n(481060),
    s = n(825102),
    o = n(594174),
    c = n(74538),
    u = n(884697),
    d = n(290175),
    g = n(724994),
    p = n(390698),
    f = n(558060),
    h = n(306092),
    C = n(445794),
    _ = n(956472),
    m = n(388032),
    b = n(997033);
let E = (e) => {
    let { product: t, config: n } = e,
        E = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        S = c.ZP.canUseCollectibles(E),
        { isDisabled: x } = (0, d.G)(t.skuId),
        { isPurchased: v, isPartiallyOwnedBundle: O } = (0, g.L)(t),
        T = (0, u.G1)(t),
        { enabled: y } = (0, s.WX)({ location: "product_card_price" }),
        L = l.useMemo(() => (0, u.BH)(t, S), [t, S]),
        j = (0, C.Iw)(t),
        k = null != j,
        { displayPrices: I, hasSufficientOrbs: P } = (0, _.Ip)({
            product: t,
            isPremiumUser: S,
            tab: n.tab,
            hasDiscountOffer: k,
        });
    return x
        ? (0, r.jsx)(i.Text, {
              tag: "div",
              variant: "heading-md/semibold",
              color: "header-muted",
              className: b.priceTag,
              children: m.intl.string(m.t.wu4gyc),
          })
        : v || O
          ? (0, r.jsx)(p.U, {
                className: b.priceTag,
                isPartiallyPurchased: O,
            })
          : T
            ? (0, r.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  className: b.priceTag,
                  children: m.intl.string(m.t.rt69oq),
              })
            : y
              ? (0, r.jsx)(h.e, {
                    displayPrices: I,
                    isPremiumUser: S,
                    discount: L,
                    hasSufficientOrbs: P,
                    discountOfferAmount: j,
                })
              : (0, r.jsx)(f.Z, {
                    product: t,
                    discount: L,
                    isPremiumUser: S,
                    className: b.priceTag,
                    hideStrikethroughPrice: !0,
                    nitroIconType: "default",
                    nitroIconSize: "md",
                    discountOfferAmount: j,
                });
};
