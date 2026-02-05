"use strict";
n.d(t, { Ak: () => p, FI: () => h }), n(321073);
var r = n(855104),
    i = n(151252),
    a = n(287809),
    s = n(927578),
    o = n(623373),
    l = n(561769),
    u = n(758836),
    c = n(652215);
let d = (e) => {
        let { product: t, isPremiumUser: n } = e,
            { enabled: r } = (0, i.m)({ location: "getShopBasePricingData" }),
            a = r ? (0, o.CW)({ product: t, isPremiumUser: n }) : void 0;
        return {
            orbPrice: a,
            fiatPrice: (0, o.$K)({ product: t, isPremiumUser: n }) ?? void 0,
            isOrbExclusive: !!r && (0, o.Ab)(t),
        };
    },
    _ = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: r,
                isOrbExclusive: i,
                hasDiscountOffer: a = !1,
                prioritizedCurrency: s = null,
            } = e,
            o = [],
            u = s === l.Hi.ORBS;
        null != n && null != r
            ? u || (t && !a)
                ? o.push(n, r)
                : o.push(r, n)
            : null != n
              ? o.push(n)
              : null != r && o.push(r);
        let d = o.length > 0 && o[0]?.currency === c.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: o, isOrbExclusive: i, hasSufficientOrbs: t, shouldCheckoutWithOrbs: d };
    },
    f = () => ({ orbPrice: u.nE, fiatPrice: void 0, isOrbExclusive: !0 }),
    p = (e) => {
        let { product: t } = e,
            n = (0, r.r_)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: l,
                isOrbExclusive: u,
            } = d({ product: t, isPremiumUser: s.Ay.canUseCollectibles(i) }),
            c = null != o && null != n && n >= o.amount,
            { shouldCheckoutWithOrbs: f } = _({ orbPrice: o, fiatPrice: l, isOrbExclusive: u, hasSufficientOrbs: c });
        return f;
    };
function h(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1, isRental: s = !1 } = e,
        { orbPrice: o, fiatPrice: l, isOrbExclusive: u } = s ? f() : d({ product: t, isPremiumUser: n }),
        c = (0, r.kj)(null != o ? o.amount : null);
    return _({
        orbPrice: o,
        fiatPrice: l,
        isOrbExclusive: u,
        hasSufficientOrbs: c,
        hasDiscountOffer: a,
        prioritizedCurrency: i,
    });
}
