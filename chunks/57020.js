n(321073);
var r = n(855104),
    i = n(623373),
    s = n(181170),
    a = n(758836),
    l = n(652215);
n.d(
    t,
    {},
    {
        F: function (e) {
            let { product: t, hasShopDiscount: n, prioritizedCurrency: u } = e,
                o = (0, s.vF)(t.skuId, "use_shop_product_prices"),
                {
                    orbPrice: c,
                    fiatPrice: d,
                    isOrbExclusive: I,
                    formerFiatPrice: p,
                } = (function (e) {
                    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
                        a = (0, i.CW)({ product: t, hasShopDiscount: n }),
                        l = (0, i.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
                        u = (0, s.QV)({ storefrontPrices: r, nonPromoPrice: l }),
                        o = u ?? l,
                        c = null != u ? (l ?? null) : null;
                    return { orbPrice: a, fiatPrice: o, isOrbExclusive: (0, i.Ab)(t), formerFiatPrice: c };
                })({ product: t, hasShopDiscount: n, storefrontPrices: o }),
                f = (0, r.kj)(null != c ? c.amount : null);
            return (function (e) {
                let {
                        hasSufficientOrbs: t,
                        orbPrice: n,
                        fiatPrice: r,
                        isOrbExclusive: i,
                        formerFiatPrice: s,
                        prioritizedCurrency: u = null,
                    } = e,
                    o = [],
                    c = u === a.Hi.ORBS,
                    d = u === a.Hi.FIAT;
                null != n && null != r
                    ? c || (!d && t)
                        ? o.push(n, r)
                        : o.push(r, n)
                    : null != n
                      ? o.push(n)
                      : null != r && o.push(r);
                let I = o.length > 0 && o[0]?.currency === l.Yri.DISCORD_ORB,
                    p = o.map((e) => (e.currency === l.Yri.DISCORD_ORB ? null : s)),
                    f = null != p[0];
                return {
                    checkoutEligiblePrices: o,
                    checkoutEligibleFormerPrices: p,
                    isShowingPromoPrice: f,
                    isOrbExclusive: i,
                    hasSufficientOrbs: t,
                    shouldCheckoutWithOrbs: I,
                };
            })({
                orbPrice: c,
                fiatPrice: d,
                isOrbExclusive: I,
                formerFiatPrice: p,
                hasSufficientOrbs: f,
                prioritizedCurrency: u,
            });
        },
    },
);
