n.d(t, {
    Y: () => l,
});
var r = n(575593);
let l = (e) => {
    var t, n, l;
    let { product: a, selectedVariantIndex: i } = e;
    return a.type === r.R.VARIANTS_GROUP &&
        null != i &&
        null != (t = null == (l = a.variants) || null == (n = l[i]) ? void 0 : n.skuId)
        ? t
        : a.skuId;
};
