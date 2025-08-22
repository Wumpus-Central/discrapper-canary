n.d(t, { S: () => i });
var r = n(979554);
let i = (e) => {
    var t, n, i;
    let { product: a, selectedVariantIndex: o } = e;
    return a.type === r.Z.VARIANTS_GROUP &&
        null != o &&
        null != (i = null == (n = a.variants) || null == (t = n[o]) ? void 0 : t.skuId)
        ? i
        : a.skuId;
};
