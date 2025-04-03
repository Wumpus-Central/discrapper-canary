n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: a, selectedVariantIndex: o } = e;
    return a.type === r.Z.VARIANTS_GROUP && null != o && null != (l = null == (n = a.variants) || null == (t = n[o]) ? void 0 : t.skuId) ? l : a.skuId;
};
