n.d(t, { $K: () => _, Ab: () => o, B1: () => d, CW: () => r, YW: () => I, ex: () => E, rb: () => u, v8: () => c });
var i = n(575593),
    a = n(652215);
let r = (e) => {
        let { product: t, hasShopDiscount: n } = e;
        return (
            (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency === a.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    _ = (e) => {
        let { product: t, hasShopDiscount: n } = e;
        return (
            (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== a.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    s = (e) => null != r({ product: e, hasShopDiscount: !1 }),
    l = (e) => null != _({ product: e, hasShopDiscount: !1 }),
    o = (e) => {
        if (null == e) return !1;
        let t = s(e),
            n = l(e);
        return t && !n;
    },
    E = (e) =>
        e.filter((e) => {
            let t = s(e),
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
