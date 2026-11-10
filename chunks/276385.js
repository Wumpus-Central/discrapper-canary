var l = n(855986),
    o = n(561573),
    i = n(918467),
    r = n(287809),
    u = n(448645),
    a = n(313217),
    s = n(623373),
    c = n(181170),
    d = n(652215);
let C = "collectibles_pricing_promotion_eligibility";
n.d(
    t,
    {},
    {
        K: function (e) {
            let t = (0, a.s)(C),
                n = e?.skuId,
                p = (0, c.vF)(n, C),
                h = (0, l.bG)([o.A], () => (t ? o.A.getPromotionIdsForSkuId(n) : void 0)),
                m = (0, l.bG)([i.A], () => i.A.getPromotionsForApplication(d.FYj)),
                f = (0, l.bG)([r.default], () => u.Ay.canUseShopDiscounts(r.default.getCurrentUser()));
            return t && null != e
                ? (function (e) {
                      let {
                          product: t,
                          hasShopDiscount: n,
                          storefrontPrices: l,
                          pricingPromotionIds: o,
                          promotions: i,
                          now: r = Date.now(),
                      } = e;
                      return null == o ||
                          0 === o.length ||
                          null == i ||
                          !(function (e) {
                              let { product: t, hasShopDiscount: n, storefrontPrices: l } = e,
                                  o = (0, s.$K)({ product: t, hasShopDiscount: n });
                              return null != (0, c.QV)({ storefrontPrices: l, nonPromoPrice: o });
                          })({ product: t, hasShopDiscount: n, storefrontPrices: l })
                          ? null
                          : (i.find((e) => o.includes(e.id) && (0, c.us)(e, r)) ?? null);
                  })({ product: e, hasShopDiscount: f, storefrontPrices: p, pricingPromotionIds: h, promotions: m })
                : null;
        },
    },
);
