r.d(t, { S: () => l });
var n = r(979554);
let l = (e) => {
    var t, r, l;
    let { product: a, selectedVariantIndex: i } = e;
    return a.type === n.Z.VARIANTS_GROUP &&
        null != i &&
        null != (l = null == (r = a.variants) || null == (t = r[i]) ? void 0 : t.skuId)
        ? l
        : a.skuId;
};
