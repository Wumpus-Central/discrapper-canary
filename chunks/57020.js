n(321073);
var r = n(855104),
    i = n(623373),
    l = n(181170),
    s = n(758836),
    a = n(652215);
n.d(
    t,
    {},
    {
        F: function (e) {
            let { product: t, hasShopDiscount: n, prioritizedCurrency: u } = e,
                o = (0, l.vF)(t.skuId, "use_shop_product_prices"),
                {
                    orbPrice: c,
                    fiatPrice: d,
                    isOrbExclusive: I,
                    formerFiatPrice: f,
                } = (function (e) {
                    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
                        s = (0, i.CW)({ product: t, hasShopDiscount: n }),
                        a = (0, i.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
                        u = (0, l.QV)({ storefrontPrices: r, nonPromoPrice: a }),
                        o = u ?? a,
                        c = null != u ? (a ?? null) : null;
                    return { orbPrice: s, fiatPrice: o, isOrbExclusive: (0, i.Ab)(t), formerFiatPrice: c };
                })({ product: t, hasShopDiscount: n, storefrontPrices: o }),
                p = (0, r.kj)(null != c ? c.amount : null);
            return (function (e) {
                let {
                        hasSufficientOrbs: t,
                        orbPrice: n,
                        fiatPrice: r,
                        isOrbExclusive: i,
                        formerFiatPrice: l,
                        prioritizedCurrency: u = null,
                    } = e,
                    o = [],
                    c = u === s.Hi.ORBS,
                    d = u === s.Hi.FIAT;
                null != n && null != r
                    ? c || (!d && t)
                        ? o.push(n, r)
                        : o.push(r, n)
                    : null != n
                      ? o.push(n)
                      : null != r && o.push(r);
                let I = o.length > 0 && o[0]?.currency === a.Yri.DISCORD_ORB,
                    f = o.map((e) => (e.currency === a.Yri.DISCORD_ORB ? null : l)),
                    p = null != f[0];
                return {
                    checkoutEligiblePrices: o,
                    checkoutEligibleFormerPrices: f,
                    isShowingPromoPrice: p,
                    isOrbExclusive: i,
                    hasSufficientOrbs: t,
                    shouldCheckoutWithOrbs: I,
                };
            })({
                orbPrice: c,
                fiatPrice: d,
                isOrbExclusive: I,
                formerFiatPrice: f,
                hasSufficientOrbs: p,
                prioritizedCurrency: u,
            });
        },
    },
);
