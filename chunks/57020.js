r.d(t, { A: () => d, F: () => p }), r(321073);
var n = r(855104),
    i = r(287809),
    s = r(158045),
    l = r(623373),
    a = r(561769),
    o = r(652215);
function u(e) {
    let { product: t, hasShopDiscount: r } = e,
        n = (0, l.CW)({ product: t, hasShopDiscount: r });
    return {
        orbPrice: n,
        fiatPrice: (0, l.$K)({ product: t, hasShopDiscount: r }) ?? void 0,
        isOrbExclusive: (0, l.Ab)(t),
    };
}
function c(e) {
    let { hasSufficientOrbs: t, orbPrice: r, fiatPrice: n, isOrbExclusive: i, prioritizedCurrency: s = null } = e,
        l = [],
        u = s === a.Hi.ORBS,
        c = s === a.Hi.FIAT;
    null != r && null != n
        ? u || (!c && t)
            ? l.push(r, n)
            : l.push(n, r)
        : null != r
          ? l.push(r)
          : null != n && l.push(n);
    let d = l.length > 0 && l[0]?.currency === o.Yri.DISCORD_ORB;
    return { checkoutEligiblePrices: l, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: d };
}
function d(e) {
    let { product: t, prioritizedCurrency: r } = e,
        l = (0, n.r_)(),
        a = i.default.getCurrentUser(),
        {
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: p,
        } = u({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(a) }),
        g = null != o && null != l && l >= o.amount,
        { shouldCheckoutWithOrbs: f } = c({
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: p,
            hasSufficientOrbs: g,
            prioritizedCurrency: r ?? null,
        });
    return f;
}
function p(e) {
    let { product: t, hasShopDiscount: r, prioritizedCurrency: i } = e,
        { orbPrice: s, fiatPrice: l, isOrbExclusive: a } = u({ product: t, hasShopDiscount: r }),
        o = (0, n.kj)(null != s ? s.amount : null);
    return c({ orbPrice: s, fiatPrice: l, isOrbExclusive: a, hasSufficientOrbs: o, prioritizedCurrency: i });
}
