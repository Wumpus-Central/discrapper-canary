(n.d(t, { A: () => f, F: () => I }), n(321073));
var r = n(855104),
    i = n(287809),
    l = n(24482),
    s = n(623373),
    a = n(181170),
    u = n(758836),
    o = n(652215);
function d(e) {
    let { product: t, hasShopDiscount: n, storefrontPrices: r } = e,
        i = (0, s.CW)({ product: t, hasShopDiscount: n }),
        l = (0, s.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
        u = (0, a.QV)({ storefrontPrices: r, nonPromoPrice: l }),
        o = u ?? l,
        d = null != u ? (l ?? null) : null;
    return { orbPrice: i, fiatPrice: o, isOrbExclusive: (0, s.Ab)(t), formerFiatPrice: d };
}
function c(e) {
    let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: r,
            isOrbExclusive: i,
            formerFiatPrice: l,
            prioritizedCurrency: s = null,
        } = e,
        a = [],
        d = s === u.Hi.ORBS,
        c = s === u.Hi.FIAT;
    null != n && null != r
        ? d || (!c && t)
            ? a.push(n, r)
            : a.push(r, n)
        : null != n
          ? a.push(n)
          : null != r && a.push(r);
    let f = a.length > 0 && a[0]?.currency === o.Yri.DISCORD_ORB,
        I = a.map((e) => (e.currency === o.Yri.DISCORD_ORB ? null : l));
    return {
        checkoutEligiblePrices: a,
        checkoutEligibleFormerPrices: I,
        isOrbExclusive: i,
        hasSufficientOrbs: t,
        shouldCheckoutWithOrbs: f,
    };
}
function f(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, r.r_)(),
        a = i.default.getCurrentUser(),
        {
            orbPrice: u,
            fiatPrice: o,
            isOrbExclusive: f,
            formerFiatPrice: I,
        } = d({ product: t, hasShopDiscount: l.Ay.canUseShopDiscounts(a) }),
        v = null != u && null != s && s >= u.amount,
        { shouldCheckoutWithOrbs: p } = c({
            orbPrice: u,
            fiatPrice: o,
            isOrbExclusive: f,
            formerFiatPrice: I,
            hasSufficientOrbs: v,
            prioritizedCurrency: n ?? null,
        });
    return p;
}
function I(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
        l = (0, a.vF)(t.skuId, "use_shop_product_prices"),
        {
            orbPrice: s,
            fiatPrice: u,
            isOrbExclusive: o,
            formerFiatPrice: f,
        } = d({ product: t, hasShopDiscount: n, storefrontPrices: l }),
        I = (0, r.kj)(null != s ? s.amount : null);
    return c({
        orbPrice: s,
        fiatPrice: u,
        isOrbExclusive: o,
        formerFiatPrice: f,
        hasSufficientOrbs: I,
        prioritizedCurrency: i,
    });
}
