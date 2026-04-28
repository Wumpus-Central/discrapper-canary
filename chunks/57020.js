"use strict";
n.d(t, { A: () => _, F: () => m }), n(321073);
var a = n(855104),
    l = n(270051),
    i = n(287809),
    r = n(927578),
    s = n(623373),
    o = n(561769),
    c = n(652215);
let d = (e) => {
        let { product: t, hasShopDiscount: n } = e,
            { enabled: a } = (0, l.m)({ location: "getShopBasePricingData" }),
            i = a ? (0, s.CW)({ product: t, hasShopDiscount: n }) : void 0;
        return {
            orbPrice: i,
            fiatPrice: (0, s.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
            isOrbExclusive: (0, s.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: a,
                isOrbExclusive: l,
                hasDiscountOffer: i = !1,
                prioritizedCurrency: r = null,
            } = e,
            s = [],
            d = r === o.Hi.ORBS,
            u = r === o.Hi.FIAT;
        null != n && null != a
            ? d || (!u && t && !i)
                ? s.push(n, a)
                : s.push(a, n)
            : null != n
              ? s.push(n)
              : null != a && s.push(a);
        let _ = s.length > 0 && s[0]?.currency === c.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: s, isOrbExclusive: l, hasSufficientOrbs: t, shouldCheckoutWithOrbs: _ };
    },
    _ = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            l = (0, a.r_)(),
            s = i.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: c,
                isOrbExclusive: _,
            } = d({ product: t, hasShopDiscount: r.Ay.canUseShopDiscounts(s) }),
            m = null != o && null != l && l >= o.amount,
            { shouldCheckoutWithOrbs: h } = u({
                orbPrice: o,
                fiatPrice: c,
                isOrbExclusive: _,
                hasSufficientOrbs: m,
                prioritizedCurrency: n ?? null,
            });
        return h;
    };
function m(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: l, hasDiscountOffer: i = !1 } = e,
        { orbPrice: r, fiatPrice: s, isOrbExclusive: o } = d({ product: t, hasShopDiscount: n }),
        c = (0, a.kj)(null != r ? r.amount : null);
    return u({
        orbPrice: r,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: c,
        hasDiscountOffer: i,
        prioritizedCurrency: l,
    });
}
