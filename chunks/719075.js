n.d(t, { Z: () => S });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    s = n(825102),
    o = n(594174),
    c = n(74538),
    u = n(994587),
    d = n(884697),
    g = n(290175),
    p = n(724994),
    f = n(390698),
    h = n(558060),
    C = n(306092),
    _ = n(445794),
    m = n(956472),
    b = n(388032),
    E = n(997033);
let S = (e) => {
    let { product: t } = e,
        n = (0, u.Nd)(),
        S = null == n ? void 0 : n.tab,
        v = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        x = c.ZP.canUseCollectibles(v),
        { isDisabled: O } = (0, g.G)(t.skuId),
        { isPurchased: T, isPartiallyOwnedBundle: y } = (0, p.L)(t),
        L = (0, d.G1)(t),
        { enabled: j } = (0, s.WX)({ location: "product_card_price" }),
        k = l.useMemo(() => (0, d.BH)(t, x), [t, x]),
        I = (0, _.Iw)(t),
        P = null != I,
        { displayPrices: N, hasSufficientOrbs: A } = (0, m.Ip)({
            product: t,
            isPremiumUser: x,
            tab: S,
            hasDiscountOffer: P,
        });
    return O
        ? (0, r.jsx)(a.Text, {
              tag: "div",
              variant: "heading-md/semibold",
              color: "header-muted",
              className: E.priceTag,
              children: b.intl.string(b.t.wu4gyc),
          })
        : T || y
          ? (0, r.jsx)(f.U, {
                className: E.priceTag,
                isPartiallyPurchased: y,
            })
          : L
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  className: E.priceTag,
                  children: b.intl.string(b.t.rt69oq),
              })
            : j
              ? (0, r.jsx)(C.e, {
                    displayPrices: N,
                    isPremiumUser: x,
                    discount: k,
                    hasSufficientOrbs: A,
                    discountOfferAmount: I,
                })
              : (0, r.jsx)(h.Z, {
                    product: t,
                    discount: k,
                    isPremiumUser: x,
                    className: E.priceTag,
                    hideStrikethroughPrice: !0,
                    nitroIconType: "default",
                    nitroIconSize: "md",
                    discountOfferAmount: I,
                });
};
