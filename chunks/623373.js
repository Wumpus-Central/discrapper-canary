n.d(t, { $K: () => s, Ab: () => d, B1: () => _, CW: () => r, YW: () => A, ex: () => c, rb: () => u, v8: () => E });
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
    s = (e) => {
        let { product: t, hasShopDiscount: n } = e;
        return (
            (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices?.slice(0, 2) ?? []).find(
                (e) => e.currency !== a.Yri.DISCORD_ORB,
            ) ?? null
        );
    },
    l = (e) => null != r({ product: e, hasShopDiscount: !1 }),
    o = (e) => null != s({ product: e, hasShopDiscount: !1 }),
    d = (e) => {
        if (null == e) return !1;
        let t = l(e),
            n = o(e);
        return t && !n;
    },
    c = (e) =>
        e.filter((e) => {
            let t = l(e),
                n = o(e);
            return t && n;
        }),
    _ = (e) => e.type === i.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    E = (e) => (_(e) ? e.variants.map((e) => e.skuId) : [e.skuId]),
    u = (e, t) => (_(e) && null != t ? (e.variants[t] ?? e) : e),
    A = (e) => {
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
