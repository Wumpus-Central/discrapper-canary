n.d(t, { S: () => l });
var a = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: r, selectedVariantIndex: i } = e;
    return r.type === a.Z.VARIANTS_GROUP &&
        null != i &&
        null != (l = null == (n = r.variants) || null == (t = n[i]) ? void 0 : t.skuId)
        ? l
        : r.skuId;
};
