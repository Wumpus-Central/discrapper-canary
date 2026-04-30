"use strict";
n.d(t, { $K: () => a, Ab: () => u, B1: () => d, CW: () => s, YW: () => h, ex: () => c, rb: () => f, v8: () => _ });
var i = n(575593),
    r = n(652215);
let s = (e) => {
        let { product: t, hasShopDiscount: n } = e;
        return (
            (t.prices[n ? r.lid.PREMIUM_TIER_2 : r.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency === r.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    a = (e) => {
        let { product: t, hasShopDiscount: n } = e;
        return (
            (t.prices[n ? r.lid.PREMIUM_TIER_2 : r.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== r.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    o = (e) => null != s({ product: e, hasShopDiscount: !1 }),
    l = (e) => null != a({ product: e, hasShopDiscount: !1 }),
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
    d = (e) => e.type === i.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    _ = (e) => (d(e) ? e.variants.map((e) => e.skuId) : [e.skuId]),
    f = (e, t) => (d(e) && null != t ? (e.variants[t] ?? e) : e),
    h = (e) => {
        if (null == e) return null;
        if (e.type === i.R.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    };
