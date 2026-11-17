var l = n(855986),
    o = n(561573),
    i = n(918467),
    r = n(287809),
    a = n(448645),
    u = n(313217),
    s = n(623373),
    c = n(181170),
    d = n(669470),
    C = n(652215);
let h = "collectibles_pricing_promotion_eligibility";
n.d(
    t,
    {},
    {
        K: function (e) {
            let t = (0, u.s)(h),
                n = e?.skuId,
                p = (0, c.vF)(n, h),
                m = (0, l.bG)([o.A], () => (t ? o.A.getPromotionIdsForSkuId(n) : void 0)),
                f = (0, l.bG)([i.A], () => i.A.getPromotionsForApplication(C.FYj)),
                E = (0, l.bG)([r.default], () => a.Ay.canUseShopDiscounts(r.default.getCurrentUser()));
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
                      return null == o || 0 === o.length || null == i
                          ? null
                          : (i.find(
                                (e) =>
                                    o.includes(e.id) &&
                                    (0, c.us)(e, r) &&
                                    (function (e) {
                                        let { product: t, promotion: n, hasShopDiscount: l, storefrontPrices: o } = e,
                                            i = (0, s.$K)({ product: t, hasShopDiscount: l }),
                                            r = null != (0, c.QV)({ storefrontPrices: o, nonPromoPrice: i }),
                                            a = (0, d.xG)(n) && (0, d.IT)(n);
                                        return r || a;
                                    })({ product: t, promotion: e, hasShopDiscount: n, storefrontPrices: l }),
                            ) ?? null);
                  })({ product: e, hasShopDiscount: E, storefrontPrices: p, pricingPromotionIds: m, promotions: f })
                : null;
        },
    },
);
