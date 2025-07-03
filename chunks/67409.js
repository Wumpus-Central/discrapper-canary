n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: i, selectedVariantIndex: o } = e;
    return i.type === r.Z.VARIANTS_GROUP && null != o && null != (l = null == (n = i.variants) || null == (t = n[o]) ? void 0 : t.skuId) ? l : i.skuId;
};
