"use strict";
n.d(t, { $K: () => o, Ab: () => c, B1: () => _, CW: () => s, YW: () => h, ex: () => d, rb: () => f });
var r = n(575593),
    i = n(590180),
    a = n(652215);
let s = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency === a.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    o = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== a.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    l = (e) => null != s({ product: e, isPremiumUser: !1 }),
    u = (e) => null != o({ product: e, isPremiumUser: !1 }),
    c = (e) => {
        if (null == e) return !1;
        let t = l(e),
            n = u(e);
        return t && !n;
    },
    d = (e) =>
        e.filter((e) => {
            let t = l(e),
                n = u(e);
            return t && n;
        }),
    _ = (e) => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    f = (e, t) => (e.type === r.R.VARIANTS_GROUP && null != t ? (i.A.getProduct(e.variants?.[t]?.skuId) ?? e) : e),
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
