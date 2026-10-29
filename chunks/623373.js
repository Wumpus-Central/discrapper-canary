n.d(t, {
    $K: () => l,
    Ab: () => c,
    B1: () => _,
    CW: () => s,
    JQ: () => u,
    Vx: () => o,
    YW: () => h,
    go: () => d,
    rb: () => A,
    v8: () => E,
});
var i = n(575593),
    r = n(203632),
    a = n(652215);
function s(e) {
    let { product: t, hasShopDiscount: n } = e;
    return (
        (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices ?? []).find(
            (e) => e.currency === a.Yri.DISCORD_ORB,
        ) ?? null
    );
}
function l(e) {
    let { product: t, hasShopDiscount: n } = e;
    return (
        (t.prices[n ? a.lid.PREMIUM_TIER_2 : a.lid.DEFAULT]?.countryPrices?.prices ?? []).find(
            (e) => e.currency !== a.Yri.DISCORD_ORB,
        ) ?? null
    );
}
function o(e) {
    return null != s({ product: e, hasShopDiscount: !1 });
}
function d(e) {
    return null != l({ product: e, hasShopDiscount: !1 });
}
function c(e) {
    if (null == e) return !1;
    let t = o(e),
        n = d(e);
    return t && !n;
}
function u(e) {
    return (
        null != e &&
        h(e) === i.R.PROFILE_EFFECT &&
        e.items.some(
            (e) => (0, r.C3)(e) && e.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
        )
    );
}
function _(e) {
    return e.type === i.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length;
}
function E(e) {
    return _(e) ? e.variants.map((e) => e.skuId) : [e.skuId];
}
function A(e, t) {
    return _(e) && null != t ? (e.variants[t] ?? e) : e;
}
function h(e) {
    if (null == e) return null;
    if (e.type === i.R.VARIANTS_GROUP) {
        if (null == e.variants || 0 === e.variants.length) return null;
        let t = e.variants[0];
        if (null == t) return null;
        let [n] = t.items;
        return n.type;
    }
    return e.type;
}
