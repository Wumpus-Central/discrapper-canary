a.d(t, { A: () => x, F: () => h }), a(321073);
var l = a(855104),
    r = a(151252),
    n = a(287809),
    s = a(927578),
    o = a(623373),
    d = a(561769),
    i = a(652215);
let c = (e) => {
        let { product: t, isPremiumUser: a } = e,
            { enabled: l } = (0, r.m)({ location: "getShopBasePricingData" }),
            n = l ? (0, o.CW)({ product: t, isPremiumUser: a }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, o.$K)({ product: t, isPremiumUser: a }) ?? void 0,
            isOrbExclusive: !!l && (0, o.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: a,
                fiatPrice: l,
                isOrbExclusive: r,
                hasDiscountOffer: n = !1,
                prioritizedCurrency: s = null,
            } = e,
            o = [],
            c = s === d.Hi.ORBS,
            u = s === d.Hi.FIAT;
        null != a && null != l
            ? c || (!u && t && !n)
                ? o.push(a, l)
                : o.push(l, a)
            : null != a
              ? o.push(a)
              : null != l && o.push(l);
        let x = o.length > 0 && o[0]?.currency === i.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: o, isOrbExclusive: r, hasSufficientOrbs: t, shouldCheckoutWithOrbs: x };
    },
    x = (e) => {
        let { product: t, prioritizedCurrency: a } = e,
            r = (0, l.r_)(),
            o = n.default.getCurrentUser(),
            {
                orbPrice: d,
                fiatPrice: i,
                isOrbExclusive: x,
            } = c({ product: t, isPremiumUser: s.Ay.canUseCollectibles(o) }),
            h = null != d && null != r && r >= d.amount,
            { shouldCheckoutWithOrbs: m } = u({
                orbPrice: d,
                fiatPrice: i,
                isOrbExclusive: x,
                hasSufficientOrbs: h,
                prioritizedCurrency: a ?? null,
            });
        return m;
    };
function h(e) {
    let { product: t, isPremiumUser: a, prioritizedCurrency: r, hasDiscountOffer: n = !1 } = e,
        { orbPrice: s, fiatPrice: o, isOrbExclusive: d } = c({ product: t, isPremiumUser: a }),
        i = (0, l.kj)(null != s ? s.amount : null);
    return u({
        orbPrice: s,
        fiatPrice: o,
        isOrbExclusive: d,
        hasSufficientOrbs: i,
        hasDiscountOffer: n,
        prioritizedCurrency: r,
    });
}
