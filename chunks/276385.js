var l = e(855986),
    r = e(561573),
    u = e(918467),
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
                b = (0, c.vF)(e, p),
                h = (0, l.bG)([r.A], () => (t ? r.A.getPromotionIdsForSkuId(e) : void 0)),
                G = (0, l.bG)([u.A], () => u.A.getPromotionsForApplication(f.FYj)),
                g = (0, l.bG)([i.default], () => o.Ay.canUseShopDiscounts(i.default.getCurrentUser()));
            return t && null != n
                ? (function (n) {
                      let {
                          product: t,
                          hasShopDiscount: e,
                          storefrontPrices: l,
                          pricingPromotionIds: r,
                          promotions: u,
                          now: i = Date.now(),
                      } = n;
                      return null == r || 0 === r.length || null == u
                          ? null
                          : (u.find(
                                (n) =>
                                    r.includes(n.id) &&
                                    (0, c.us)(n, i) &&
                                    (function (n) {
                                        let { product: t, promotion: e, hasShopDiscount: l, storefrontPrices: r } = n,
                                            u = (0, s.$K)({ product: t, hasShopDiscount: l }),
                                            i = null != (0, c.QV)({ storefrontPrices: r, nonPromoPrice: u }),
                                            o = (0, d.xG)(e) && (0, d.IT)(e);
                                        return i || o;
                                    })({ product: t, promotion: n, hasShopDiscount: e, storefrontPrices: l }),
                            ) ?? null);
                  })({ product: n, hasShopDiscount: g, storefrontPrices: b, pricingPromotionIds: h, promotions: G })
                : null;
        },
    },
);
