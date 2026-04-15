n.d(t, { A: () => h, F: () => A }), n(321073);
var i = n(855104),
    l = n(270051),
    s = n(287809),
    a = n(927578),
    r = n(623373),
    o = n(561769),
    d = n(652215);
let c = (e) => {
        let { product: t, isPremiumUser: n } = e,
            { enabled: i } = (0, l.m)({ location: "getShopBasePricingData" }),
            s = i ? (0, r.CW)({ product: t, isPremiumUser: n }) : void 0;
        return {
            orbPrice: s,
            fiatPrice: (0, r.$K)({ product: t, isPremiumUser: n }) ?? void 0,
            isOrbExclusive: (0, r.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: i,
                isOrbExclusive: l,
                hasDiscountOffer: s = !1,
                prioritizedCurrency: a = null,
            } = e,
            r = [],
            c = a === o.Hi.ORBS,
            u = a === o.Hi.FIAT;
        null != n && null != i
            ? c || (!u && t && !s)
                ? r.push(n, i)
                : r.push(i, n)
            : null != n
              ? r.push(n)
              : null != i && r.push(i);
        let h = r.length > 0 && r[0]?.currency === d.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: r, isOrbExclusive: l, hasSufficientOrbs: t, shouldCheckoutWithOrbs: h };
    },
    h = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            l = (0, i.r_)(),
            r = s.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
            } = c({ product: t, isPremiumUser: a.Ay.canUseCollectibles(r) }),
            A = null != o && null != l && l >= o.amount,
            { shouldCheckoutWithOrbs: _ } = u({
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
                hasSufficientOrbs: A,
                prioritizedCurrency: n ?? null,
            });
        return _;
    };
function A(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: l, hasDiscountOffer: s = !1 } = e,
        { orbPrice: a, fiatPrice: r, isOrbExclusive: o } = c({ product: t, isPremiumUser: n }),
        d = (0, i.kj)(null != a ? a.amount : null);
    return u({
        orbPrice: a,
        fiatPrice: r,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: s,
        prioritizedCurrency: l,
    });
}
