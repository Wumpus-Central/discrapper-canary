var l = e(855986),
    u = e(561573),
    r = e(918467),
    i = e(287809),
    o = e(448645),
    a = e(313217),
    c = e(623373),
    s = e(181170),
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
                b = (0, s.vF)(e, p),
                h = (0, l.bG)([u.A], () => (t ? u.A.getPromotionIdsForSkuId(e) : void 0)),
                G = (0, l.bG)([r.A], () => r.A.getPromotionsForApplication(f.FYj)),
                g = (0, l.bG)([i.default], () => o.Ay.canUseShopDiscounts(i.default.getCurrentUser()));
            return t && null != n
                ? (function (n) {
                      let {
                          product: t,
                          hasShopDiscount: e,
                          storefrontPrices: l,
                          pricingPromotionIds: u,
                          promotions: r,
                          now: i = Date.now(),
                      } = n;
                      return null == u || 0 === u.length || null == r
                          ? null
                          : (r.find(
                                (n) =>
                                    u.includes(n.id) &&
                                    (0, s.us)(n, i) &&
                                    (function (n) {
                                        let { product: t, promotion: e, hasShopDiscount: l, storefrontPrices: u } = n,
                                            r = (0, c.$K)({ product: t, hasShopDiscount: l }),
                                            i = null != (0, s.QV)({ storefrontPrices: u, nonPromoPrice: r }),
                                            o = (0, d.xG)(e) && (0, d.IT)(e);
                                        return i || o;
                                    })({ product: t, promotion: n, hasShopDiscount: e, storefrontPrices: l }),
                            ) ?? null);
                  })({ product: n, hasShopDiscount: g, storefrontPrices: b, pricingPromotionIds: h, promotions: G })
                : null;
        },
    },
);
