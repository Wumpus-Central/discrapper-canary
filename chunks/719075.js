n.d(t, { Z: () => x });
var r = n(951288),
    l = n(647438),
    s = n(399606),
    a = n(481060),
    i = n(825102),
    o = n(594174),
    c = n(74538),
    u = n(994587),
    d = n(884697),
    g = n(290175),
    p = n(724994),
    f = n(390698),
    C = n(558060),
    h = n(786040),
    _ = n(306092),
    m = n(445794),
    b = n(956472),
    E = n(388032),
    S = n(997033);
let v = (e) => {
        let { product: t } = e,
            n = (0, u.Nd)(),
            h = null == n ? void 0 : n.tab,
            v = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            x = c.ZP.canUseCollectibles(v),
            { isDisabled: O } = (0, g.G)(t.skuId),
            { isPurchased: y, isPartiallyOwnedBundle: T } = (0, p.L)(t),
            L = (0, d.G1)(t),
            { enabled: j } = (0, i.WX)({ location: "product_card_price" }),
            k = l.useMemo(() => (0, d.BH)(t, x), [t, x]),
            I = (0, m.Iw)(t),
            P = null != I,
            { displayPrices: N, hasSufficientOrbs: B } = (0, b.Ip)({
                product: t,
                isPremiumUser: x,
                tab: h,
                hasDiscountOffer: P,
            });
        return O
            ? (0, r.jsx)(a.Text, {
                  tag: "div",
                  variant: "heading-md/semibold",
                  color: "header-muted",
                  className: S.priceTag,
                  children: E.intl.string(E.t.wu4gyc),
              })
            : y || T
              ? (0, r.jsx)(f.U, {
                    className: S.priceTag,
                    isPartiallyPurchased: T,
                })
              : L
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      className: S.priceTag,
                      children: E.intl.string(E.t.rt69oq),
                  })
                : j
                  ? (0, r.jsx)(_.e, {
                        displayPrices: N,
                        isPremiumUser: x,
                        discount: k,
                        hasSufficientOrbs: B,
                        discountOfferAmount: I,
                    })
                  : (0, r.jsx)(C.Z, {
                        product: t,
                        discount: k,
                        isPremiumUser: x,
                        className: S.priceTag,
                        hideStrikethroughPrice: !0,
                        nitroIconType: "default",
                        nitroIconSize: "md",
                        discountOfferAmount: I,
                    });
    },
    x = (e) => {
        let { skuId: t } = e,
            n = (0, h.LJ)(t);
        return null == n ? null : (0, r.jsx)(v, { product: n });
    };
