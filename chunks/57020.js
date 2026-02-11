"use strict";
n.d(t, { A: () => _, F: () => f }), n(321073);
var r = n(855104),
    i = n(151252),
    a = n(287809),
    s = n(927578),
    o = n(623373),
    l = n(561769),
    u = n(652215);
let c = (e) => {
        let { product: t, isPremiumUser: n } = e,
            { enabled: r } = (0, i.m)({ location: "getShopBasePricingData" }),
            a = r ? (0, o.CW)({ product: t, isPremiumUser: n }) : void 0;
        return {
            orbPrice: a,
            fiatPrice: (0, o.$K)({ product: t, isPremiumUser: n }) ?? void 0,
            isOrbExclusive: !!r && (0, o.Ab)(t),
        };
    },
    d = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: r,
                isOrbExclusive: i,
                hasDiscountOffer: a = !1,
                prioritizedCurrency: s = null,
            } = e,
            o = [],
            c = s === l.Hi.ORBS;
        null != n && null != r
            ? c || (t && !a)
                ? o.push(n, r)
                : o.push(r, n)
            : null != n
              ? o.push(n)
              : null != r && o.push(r);
        let d = o.length > 0 && o[0]?.currency === u.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: o, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: d };
    },
    _ = (e) => {
        let { product: t } = e,
            n = (0, r.r_)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: l,
                isOrbExclusive: u,
            } = c({ product: t, isPremiumUser: s.Ay.canUseCollectibles(i) }),
            _ = null != o && null != n && n >= o.amount,
            { shouldCheckoutWithOrbs: f } = d({ orbPrice: o, fiatPrice: l, isOrbExclusive: u, hasSufficientOrbs: _ });
        return f;
    };
function f(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1 } = e,
        { orbPrice: s, fiatPrice: o, isOrbExclusive: l } = c({ product: t, isPremiumUser: n }),
        u = (0, r.kj)(null != s ? s.amount : null);
    return d({
        orbPrice: s,
        fiatPrice: o,
        isOrbExclusive: l,
        hasSufficientOrbs: u,
        hasDiscountOffer: a,
        prioritizedCurrency: i,
    });
}
