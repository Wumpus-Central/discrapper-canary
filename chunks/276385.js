var u = e(855986),
    r = e(561573),
    l = e(918467),
    i = e(287809),
    o = e(448645),
    a = e(313217),
    s = e(623373),
    c = e(181170),
    d = e(669470),
    f = e(652215);
let p = "collectibles_pricing_promotion_eligibility";
e.d(
    t,
    {},
    {
        K: function (n) {
            let t = (0, a.s)(p),
                e = n?.skuId,
                A = (0, c.vF)(e, p),
                m = (0, u.bG)([r.A], () => (t ? r.A.getPromotionIdsForSkuId(e) : void 0)),
                g = (0, u.bG)([l.A], () => l.A.getPromotionsForApplication(f.FYj)),
                E = (0, u.bG)([i.default], () => o.Ay.canUseShopDiscounts(i.default.getCurrentUser()));
            return t && null != n
                ? (function (n) {
                      let {
                          product: t,
                          hasShopDiscount: e,
                          storefrontPrices: u,
                          pricingPromotionIds: r,
                          promotions: l,
                          now: i = Date.now(),
                      } = n;
                      return null == r || 0 === r.length || null == l
                          ? null
                          : (l.find(
                                (n) =>
                                    r.includes(n.id) &&
                                    (0, c.us)(n, i) &&
                                    (function (n) {
                                        let { product: t, promotion: e, hasShopDiscount: u, storefrontPrices: r } = n,
                                            l = (0, s.$K)({ product: t, hasShopDiscount: u }),
                                            i = null != (0, c.QV)({ storefrontPrices: r, nonPromoPrice: l }),
                                            o = (0, d.xG)(e) && (0, d.IT)(e);
                                        return i || o;
                                    })({ product: t, promotion: n, hasShopDiscount: e, storefrontPrices: u }),
                            ) ?? null);
                  })({ product: n, hasShopDiscount: E, storefrontPrices: A, pricingPromotionIds: m, promotions: g })
                : null;
        },
    },
);
