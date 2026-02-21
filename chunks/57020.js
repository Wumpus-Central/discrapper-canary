n.d(t, { A: () => p, F: () => C }), n(321073);
var r = n(855104),
    l = n(151252),
    a = n(287809),
    i = n(927578),
    u = n(623373),
    o = n(561769),
    s = n(652215);
let c = (e) => {
        let { product: t, isPremiumUser: n } = e,
            { enabled: r } = (0, l.m)({ location: "getShopBasePricingData" }),
            a = r ? (0, u.CW)({ product: t, isPremiumUser: n }) : void 0;
        return {
            orbPrice: a,
            fiatPrice: (0, u.$K)({ product: t, isPremiumUser: n }) ?? void 0,
            isOrbExclusive: !!r && (0, u.Ab)(t),
        };
    },
    d = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: r,
                isOrbExclusive: l,
                hasDiscountOffer: a = !1,
                prioritizedCurrency: i = null,
            } = e,
            u = [],
            c = i === o.Hi.ORBS;
        null != n && null != r
            ? c || (t && !a)
                ? u.push(n, r)
                : u.push(r, n)
            : null != n
              ? u.push(n)
              : null != r && u.push(r);
        let d = u.length > 0 && u[0]?.currency === s.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: u, isOrbExclusive: l, hasSufficientOrbs: t, shouldCheckoutWithOrbs: d };
    },
    p = (e) => {
        let { product: t } = e,
            n = (0, r.r_)(),
            l = a.default.getCurrentUser(),
            {
                orbPrice: u,
                fiatPrice: o,
                isOrbExclusive: s,
            } = c({ product: t, isPremiumUser: i.Ay.canUseCollectibles(l) }),
            p = null != u && null != n && n >= u.amount,
            { shouldCheckoutWithOrbs: C } = d({ orbPrice: u, fiatPrice: o, isOrbExclusive: s, hasSufficientOrbs: p });
        return C;
    };
function C(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: l, hasDiscountOffer: a = !1 } = e,
        { orbPrice: i, fiatPrice: u, isOrbExclusive: o } = c({ product: t, isPremiumUser: n }),
        s = (0, r.kj)(null != i ? i.amount : null);
    return d({
        orbPrice: i,
        fiatPrice: u,
        isOrbExclusive: o,
        hasSufficientOrbs: s,
        hasDiscountOffer: a,
        prioritizedCurrency: l,
    });
}
