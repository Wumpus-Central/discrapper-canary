n.d(t, { A: () => d, F: () => C }), n(321073);
var r = n(855104),
    i = n(287809),
    s = n(428262),
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
function c(e) {
    let { hasSufficientOrbs: t, orbPrice: n, fiatPrice: r, isOrbExclusive: i, prioritizedCurrency: s = null } = e,
        l = [],
        u = s === a.Hi.ORBS,
        c = s === a.Hi.FIAT;
    null != n && null != r
        ? u || (!c && t)
            ? l.push(n, r)
            : l.push(r, n)
        : null != n
          ? l.push(n)
          : null != r && l.push(r);
    let d = l.length > 0 && l[0]?.currency === o.Yri.DISCORD_ORB;
    return { checkoutEligiblePrices: l, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: d };
}
function d(e) {
    let { product: t, prioritizedCurrency: n } = e,
        l = (0, r.r_)(),
        a = i.default.getCurrentUser(),
        {
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: C,
        } = u({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(a) }),
        p = null != o && null != l && l >= o.amount,
        { shouldCheckoutWithOrbs: I } = c({
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: C,
            hasSufficientOrbs: p,
            prioritizedCurrency: n ?? null,
        });
    return I;
}
function C(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: i } = e,
        { orbPrice: s, fiatPrice: l, isOrbExclusive: a } = u({ product: t, hasShopDiscount: n }),
        o = (0, r.kj)(null != s ? s.amount : null);
    return c({ orbPrice: s, fiatPrice: l, isOrbExclusive: a, hasSufficientOrbs: o, prioritizedCurrency: i });
}
