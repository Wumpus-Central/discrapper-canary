"use strict";
n.d(t, { $K: () => l, Ab: () => d, B1: () => f, CW: () => o, YW: () => h, ex: () => _, rb: () => p });
var r = n(575593),
    i = n(590180),
    a = n(758836),
    s = n(652215);
let o = (e) => {
        let { product: t, isPremiumUser: n, isRental: r } = e;
        return r
            ? a.nE
            : ((t.prices[n ? s.lid.PREMIUM_TIER_2 : s.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                  (e) => e.currency === s.Yri.DISCORD_ORB,
              ) ?? null);
    },
    l = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? s.lid.PREMIUM_TIER_2 : s.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== s.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    u = (e) => null != o({ product: e, isPremiumUser: !1, isRental: !1 }),
    c = (e) => null != l({ product: e, isPremiumUser: !1 }),
    d = (e) => {
        if (null == e) return !1;
        let t = u(e),
            n = c(e);
        return t && !n;
    },
    _ = (e) =>
        e.filter((e) => {
            let t = u(e),
                n = c(e);
            return t && n;
        }),
    f = (e) => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    p = (e, t) => (e.type === r.R.VARIANTS_GROUP && null != t ? (i.A.getProduct(e.variants?.[t]?.skuId) ?? e) : e),
    h = (e) => {
        if (null == e) return null;
        if (e.type === r.R.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    };
