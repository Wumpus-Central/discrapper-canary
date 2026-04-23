n.d(t, { $K: () => s, Ab: () => o, B1: () => d, CW: () => a, YW: () => I, ex: () => E, rb: () => u, v8: () => c });
var i = n(575593),
    r = n(652215);
let a = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? r.lid.PREMIUM_TIER_2 : r.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency === r.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    s = (e) => {
        let { product: t, isPremiumUser: n } = e;
        return (
            (t.prices[n ? r.lid.PREMIUM_TIER_2 : r.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== r.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    _ = (e) => null != a({ product: e, isPremiumUser: !1 }),
    l = (e) => null != s({ product: e, isPremiumUser: !1 }),
    o = (e) => {
        if (null == e) return !1;
        let t = _(e),
            n = l(e);
        return t && !n;
    },
    E = (e) =>
        e.filter((e) => {
            let t = _(e),
                n = l(e);
            return t && n;
        }),
    d = (e) => e.type === i.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    c = (e) => (d(e) ? e.variants.map((e) => e.skuId) : [e.skuId]),
    u = (e, t) => (d(e) && null != t ? (e.variants[t] ?? e) : e),
    I = (e) => {
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
