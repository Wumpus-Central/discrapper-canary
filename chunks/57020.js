n(321073);
var r = n(855104),
    i = n(287809),
    s = n(722178),
    l = n(623373),
    a = n(181170),
    u = n(758836),
    o = n(652215);
function d(e) {
    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
        i = (0, l.CW)({ product: t, hasShopDiscount: n }),
        s = (0, l.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
        u = (0, a.QV)({ storefrontPrices: r, nonPromoPrice: s }),
        o = u ?? s,
        d = null != u ? (s ?? null) : null;
    return { orbPrice: i, fiatPrice: o, isOrbExclusive: (0, l.Ab)(t), formerFiatPrice: d };
}
function c(e) {
    let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: r,
            isOrbExclusive: i,
            formerFiatPrice: s,
            prioritizedCurrency: l = null,
        } = e,
        a = [],
        d = l === u.Hi.ORBS,
        c = l === u.Hi.FIAT;
    null != n && null != r
        ? d || (!c && t)
            ? a.push(n, r)
            : a.push(r, n)
        : null != n
          ? a.push(n)
          : null != r && a.push(r);
    let f = a.length > 0 && a[0]?.currency === o.Yri.DISCORD_ORB,
        I = a.map((e) => (e.currency === o.Yri.DISCORD_ORB ? null : s));
    return {
        checkoutEligiblePrices: a,
        checkoutEligibleFormerPrices: I,
        isOrbExclusive: i,
        hasSufficientOrbs: t,
        shouldCheckoutWithOrbs: f,
    };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { product: t, prioritizedCurrency: n } = e,
                l = (0, r.r_)(),
                a = i.default.getCurrentUser(),
                {
                    orbPrice: u,
                    fiatPrice: o,
                    isOrbExclusive: f,
                    formerFiatPrice: I,
                } = d({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(a) }),
                v = null != u && null != l && l >= u.amount,
                { shouldCheckoutWithOrbs: p } = c({
                    orbPrice: u,
                    fiatPrice: o,
                    isOrbExclusive: f,
                    formerFiatPrice: I,
                    hasSufficientOrbs: v,
                    prioritizedCurrency: n ?? null,
                });
            return p;
        },
        F: function (e) {
            let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
                s = (0, a.vF)(t.skuId, "use_shop_product_prices"),
                {
                    orbPrice: l,
                    fiatPrice: u,
                    isOrbExclusive: o,
                    formerFiatPrice: f,
                } = d({ product: t, hasShopDiscount: n, storefrontPrices: s }),
                I = (0, r.kj)(null != l ? l.amount : null);
            return c({
                orbPrice: l,
                fiatPrice: u,
                isOrbExclusive: o,
                formerFiatPrice: f,
                hasSufficientOrbs: I,
                prioritizedCurrency: i,
            });
        },
    },
);
