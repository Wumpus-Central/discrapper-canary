var i = l(855986),
    u = l(561573),
    e = l(918467),
    o = l(287809),
    r = l(448645),
    s = l(313217),
    c = l(623373),
    d = l(181170),
    p = l(669470),
    a = l(652215);
let b = "collectibles_pricing_promotion_eligibility";
l.d(
    t,
    {},
    {
        K: function (n) {
            let t = (0, s.s)(b),
                l = n?.skuId,
                h = (0, d.vF)(l, b),
                f = (0, i.bG)([u.A], () => (t ? u.A.getPromotionIdsForSkuId(l) : void 0)),
                g = (0, i.bG)([e.A], () => e.A.getPromotionsForApplication(a.FYj)),
                k = (0, i.bG)([o.default], () => r.Ay.canUseShopDiscounts(o.default.getCurrentUser()));
            return t && null != n
                ? (function (n) {
                      let {
                          product: t,
                          hasShopDiscount: l,
                          storefrontPrices: i,
                          pricingPromotionIds: u,
                          promotions: e,
                          now: o = Date.now(),
                      } = n;
                      return null == u || 0 === u.length || null == e
                          ? null
                          : (e.find(
                                (n) =>
                                    u.includes(n.id) &&
                                    (0, d.us)(n, o) &&
                                    (function (n) {
                                        let { product: t, promotion: l, hasShopDiscount: i, storefrontPrices: u } = n,
                                            e = (0, c.$K)({ product: t, hasShopDiscount: i }),
                                            o = null != (0, d.QV)({ storefrontPrices: u, nonPromoPrice: e }),
                                            r = (0, p.xG)(l) && (0, p.IT)(l);
                                        return o || r;
                                    })({ product: t, promotion: n, hasShopDiscount: l, storefrontPrices: i }),
                            ) ?? null);
                  })({ product: n, hasShopDiscount: k, storefrontPrices: h, pricingPromotionIds: f, promotions: g })
                : null;
        },
    },
);
