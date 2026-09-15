(n.d(t, { A: () => c, F: () => I }), n(321073));
var r = n(855104),
    i = n(287809),
    s = n(158045),
    l = n(623373),
    a = n(561769),
    o = n(652215);
function u(e) {
    let { product: t, hasShopDiscount: n } = e,
        r = (0, l.CW)({ product: t, hasShopDiscount: n });
    return {
        orbPrice: r,
        fiatPrice: (0, l.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
        isOrbExclusive: (0, l.Ab)(t),
    };
}
function d(e) {
    let { hasSufficientOrbs: t, orbPrice: n, fiatPrice: r, isOrbExclusive: i, prioritizedCurrency: s = null } = e,
        l = [],
        u = s === a.Hi.ORBS,
        d = s === a.Hi.FIAT;
    null != n && null != r
        ? u || (!d && t)
            ? l.push(n, r)
            : l.push(r, n)
        : null != n
          ? l.push(n)
          : null != r && l.push(r);
    let c = l.length > 0 && l[0]?.currency === o.Yri.DISCORD_ORB;
    return { checkoutEligiblePrices: l, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: c };
}
function c(e) {
    let { product: t, prioritizedCurrency: n } = e,
        l = (0, r.r_)(),
        a = i.default.getCurrentUser(),
        {
            orbPrice: o,
            fiatPrice: c,
            isOrbExclusive: I,
        } = u({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(a) }),
        f = null != o && null != l && l >= o.amount,
        { shouldCheckoutWithOrbs: p } = d({
            orbPrice: o,
            fiatPrice: c,
            isOrbExclusive: I,
            hasSufficientOrbs: f,
            prioritizedCurrency: n ?? null,
        });
    return p;
}
function I(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
        { orbPrice: s, fiatPrice: l, isOrbExclusive: a } = u({ product: t, hasShopDiscount: n }),
        o = (0, r.kj)(null != s ? s.amount : null);
    return d({ orbPrice: s, fiatPrice: l, isOrbExclusive: a, hasSufficientOrbs: o, prioritizedCurrency: i });
}
