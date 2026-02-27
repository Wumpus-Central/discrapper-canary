"use strict";
n.d(t, { $K: () => a, Ab: () => u, B1: () => d, CW: () => s, YW: () => f, ex: () => c, rb: () => _ });
var r = n(575593),
    i = n(652215);
let s = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? i.lid.PREMIUM_TIER_2 : i.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency === i.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    a = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? i.lid.PREMIUM_TIER_2 : i.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== i.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    o = (e) => null != s({ product: e, isPremiumUser: !1 }),
    l = (e) => null != a({ product: e, isPremiumUser: !1 }),
    u = (e) => {
        if (null == e) return !1;
        let t = o(e),
            n = l(e);
        return t && !n;
    },
    c = (e) =>
        e.filter((e) => {
            let t = o(e),
                n = l(e);
            return t && n;
        }),
    d = (e) => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    _ = (e, t) => (d(e) && null != t ? (e.variants[t] ?? e) : e),
    f = (e) => {
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
