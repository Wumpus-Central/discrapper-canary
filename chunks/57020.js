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
            let { product: t, hasShopDiscount: n, prioritizedCurrency: o } = e,
                u = (0, s.vF)(t.skuId, "use_shop_product_prices"),
                {
                    orbPrice: d,
                    fiatPrice: c,
                    isOrbExclusive: I,
                    formerFiatPrice: v,
                } = (function (e) {
                    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
                        a = (0, i.CW)({ product: t, hasShopDiscount: n }),
                        l = (0, i.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
                        o = (0, s.QV)({ storefrontPrices: r, nonPromoPrice: l }),
                        u = o ?? l,
                        d = null != o ? (l ?? null) : null;
                    return { orbPrice: a, fiatPrice: u, isOrbExclusive: (0, i.Ab)(t), formerFiatPrice: d };
                })({ product: t, hasShopDiscount: n, storefrontPrices: u }),
                f = (0, r.kj)(null != d ? d.amount : null);
            return (function (e) {
                let {
                        hasSufficientOrbs: t,
                        orbPrice: n,
                        fiatPrice: r,
                        isOrbExclusive: i,
                        formerFiatPrice: s,
                        prioritizedCurrency: o = null,
                    } = e,
                    u = [],
                    d = o === a.Hi.ORBS,
                    c = o === a.Hi.FIAT;
                null != n && null != r
                    ? d || (!c && t)
                        ? u.push(n, r)
                        : u.push(r, n)
                    : null != n
                      ? u.push(n)
                      : null != r && u.push(r);
                let I = u.length > 0 && u[0]?.currency === l.Yri.DISCORD_ORB,
                    v = u.map((e) => (e.currency === l.Yri.DISCORD_ORB ? null : s)),
                    f = null != v[0];
                return {
                    checkoutEligiblePrices: u,
                    checkoutEligibleFormerPrices: v,
                    isShowingPromoPrice: f,
                    isOrbExclusive: i,
                    hasSufficientOrbs: t,
                    shouldCheckoutWithOrbs: I,
                };
            })({
                orbPrice: d,
                fiatPrice: c,
                isOrbExclusive: I,
                formerFiatPrice: v,
                hasSufficientOrbs: f,
                prioritizedCurrency: o,
            });
        },
    },
);
