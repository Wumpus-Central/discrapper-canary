(n.d(t, { A: () => c, F: () => I }), n(321073));
var r = n(855104),
    i = n(287809),
    s = n(24482),
    a = n(623373),
    l = n(758836),
    u = n(652215);
function o(e) {
    let { product: t, hasShopDiscount: n } = e,
        r = (0, a.CW)({ product: t, hasShopDiscount: n });
    return {
        orbPrice: r,
        fiatPrice: (0, a.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
        isOrbExclusive: (0, a.Ab)(t),
    };
}
function d(e) {
    let { hasSufficientOrbs: t, orbPrice: n, fiatPrice: r, isOrbExclusive: i, prioritizedCurrency: s = null } = e,
        a = [],
        o = s === l.Hi.ORBS,
        d = s === l.Hi.FIAT;
    null != n && null != r
        ? o || (!d && t)
            ? a.push(n, r)
            : a.push(r, n)
        : null != n
          ? a.push(n)
          : null != r && a.push(r);
    let c = a.length > 0 && a[0]?.currency === u.Yri.DISCORD_ORB;
    return { checkoutEligiblePrices: a, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: c };
}
function c(e) {
    let { product: t, prioritizedCurrency: n } = e,
        a = (0, r.r_)(),
        l = i.default.getCurrentUser(),
        {
            orbPrice: u,
            fiatPrice: c,
            isOrbExclusive: I,
        } = o({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(l) }),
        f = null != u && null != a && a >= u.amount,
        { shouldCheckoutWithOrbs: v } = d({
            orbPrice: u,
            fiatPrice: c,
            isOrbExclusive: I,
            hasSufficientOrbs: f,
            prioritizedCurrency: n ?? null,
        });
    return v;
}
function I(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
        { orbPrice: s, fiatPrice: a, isOrbExclusive: l } = o({ product: t, hasShopDiscount: n }),
        u = (0, r.kj)(null != s ? s.amount : null);
    return d({ orbPrice: s, fiatPrice: a, isOrbExclusive: l, hasSufficientOrbs: u, prioritizedCurrency: i });
}
