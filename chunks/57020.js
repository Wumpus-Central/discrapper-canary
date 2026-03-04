l.d(t, { A: () => h, F: () => A }), l(321073);
var n = l(855104),
    r = l(151252),
    a = l(287809),
    i = l(927578),
    s = l(623373),
    u = l(561769),
    o = l(652215);
let d = (e) => {
        let { product: t, isPremiumUser: l } = e,
            { enabled: n } = (0, r.m)({ location: "getShopBasePricingData" }),
            a = n ? (0, s.CW)({ product: t, isPremiumUser: l }) : void 0;
        return {
            orbPrice: a,
            fiatPrice: (0, s.$K)({ product: t, isPremiumUser: l }) ?? void 0,
            isOrbExclusive: !!n && (0, s.Ab)(t),
        };
    },
    c = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: l,
                fiatPrice: n,
                isOrbExclusive: r,
                hasDiscountOffer: a = !1,
                prioritizedCurrency: i = null,
            } = e,
            s = [],
            d = i === u.Hi.ORBS;
        null != l && null != n
            ? d || (t && !a)
                ? s.push(l, n)
                : s.push(n, l)
            : null != l
              ? s.push(l)
              : null != n && s.push(n);
        let c = s.length > 0 && s[0]?.currency === o.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: s, isOrbExclusive: r, hasSufficientOrbs: t, shouldCheckoutWithOrbs: c };
    },
    h = (e) => {
        let { product: t } = e,
            l = (0, n.r_)(),
            r = a.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: u,
                isOrbExclusive: o,
            } = d({ product: t, isPremiumUser: i.Ay.canUseCollectibles(r) }),
            h = null != s && null != l && l >= s.amount,
            { shouldCheckoutWithOrbs: A } = c({ orbPrice: s, fiatPrice: u, isOrbExclusive: o, hasSufficientOrbs: h });
        return A;
    };
function A(e) {
    let { product: t, isPremiumUser: l, prioritizedCurrency: r, hasDiscountOffer: a = !1 } = e,
        { orbPrice: i, fiatPrice: s, isOrbExclusive: u } = d({ product: t, isPremiumUser: l }),
        o = (0, n.kj)(null != i ? i.amount : null);
    return c({
        orbPrice: i,
        fiatPrice: s,
        isOrbExclusive: u,
        hasSufficientOrbs: o,
        hasDiscountOffer: a,
        prioritizedCurrency: r,
    });
}
