n(321073);
var r = n(855104),
    i = n(287809),
    s = n(448645),
    a = n(623373),
    l = n(181170),
    u = n(758836),
    o = n(652215);
function d(e) {
    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
        i = (0, a.CW)({ product: t, hasShopDiscount: n }),
        s = (0, a.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
        u = (0, l.QV)({ storefrontPrices: r, nonPromoPrice: s }),
        o = u ?? s,
        d = null != u ? (s ?? null) : null;
    return { orbPrice: i, fiatPrice: o, isOrbExclusive: (0, a.Ab)(t), formerFiatPrice: d };
}
function c(e) {
    let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: r,
            isOrbExclusive: i,
            formerFiatPrice: s,
            prioritizedCurrency: a = null,
        } = e,
        l = [],
        d = a === u.Hi.ORBS,
        c = a === u.Hi.FIAT;
    null != n && null != r
        ? d || (!c && t)
            ? l.push(n, r)
            : l.push(r, n)
        : null != n
          ? l.push(n)
          : null != r && l.push(r);
    let I = l.length > 0 && l[0]?.currency === o.Yri.DISCORD_ORB,
        v = l.map((e) => (e.currency === o.Yri.DISCORD_ORB ? null : s)),
        f = null != v[0];
    return {
        checkoutEligiblePrices: l,
        checkoutEligibleFormerPrices: v,
        isShowingPromoPrice: f,
        isOrbExclusive: i,
        hasSufficientOrbs: t,
        shouldCheckoutWithOrbs: I,
    };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { product: t, prioritizedCurrency: n } = e,
                a = (0, r.r_)(),
                l = i.default.getCurrentUser(),
                {
                    orbPrice: u,
                    fiatPrice: o,
                    isOrbExclusive: I,
                    formerFiatPrice: v,
                } = d({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(l) }),
                f = null != u && null != a && a >= u.amount,
                { shouldCheckoutWithOrbs: p } = c({
                    orbPrice: u,
                    fiatPrice: o,
                    isOrbExclusive: I,
                    formerFiatPrice: v,
                    hasSufficientOrbs: f,
                    prioritizedCurrency: n ?? null,
                });
            return p;
        },
        F: function (e) {
            let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
                s = (0, l.vF)(t.skuId, "use_shop_product_prices"),
                {
                    orbPrice: a,
                    fiatPrice: u,
                    isOrbExclusive: o,
                    formerFiatPrice: I,
                } = d({ product: t, hasShopDiscount: n, storefrontPrices: s }),
                v = (0, r.kj)(null != a ? a.amount : null);
            return c({
                orbPrice: a,
                fiatPrice: u,
                isOrbExclusive: o,
                formerFiatPrice: I,
                hasSufficientOrbs: v,
                prioritizedCurrency: i,
            });
        },
    },
);
