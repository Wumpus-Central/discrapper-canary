n.d(t, { A: () => d, F: () => p }), n(321073);
var r = n(855104),
    i = n(287809),
    a = n(428262),
    l = n(623373),
    s = n(561769),
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
    let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: r,
            isOrbExclusive: i,
            hasDiscountOffer: a = !1,
            prioritizedCurrency: l = null,
        } = e,
        u = [],
        c = l === s.Hi.ORBS,
        d = l === s.Hi.FIAT;
    null != n && null != r
        ? c || (!d && t && !a)
            ? u.push(n, r)
            : u.push(r, n)
        : null != n
          ? u.push(n)
          : null != r && u.push(r);
    let p = u.length > 0 && u[0]?.currency === o.Yri.DISCORD_ORB;
    return { checkoutEligiblePrices: u, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: p };
}
function d(e) {
    let { product: t, prioritizedCurrency: n } = e,
        l = (0, r.r_)(),
        s = i.default.getCurrentUser(),
        {
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: p,
        } = u({ product: t, hasShopDiscount: a.Ay.canUseShopDiscounts(s) }),
        g = null != o && null != l && l >= o.amount,
        { shouldCheckoutWithOrbs: C } = c({
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: p,
            hasSufficientOrbs: g,
            prioritizedCurrency: n ?? null,
        });
    return C;
}
function p(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: i, hasDiscountOffer: a = !1 } = e,
        { orbPrice: l, fiatPrice: s, isOrbExclusive: o } = u({ product: t, hasShopDiscount: n }),
        d = (0, r.kj)(null != l ? l.amount : null);
    return c({
        orbPrice: l,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: a,
        prioritizedCurrency: i,
    });
}
