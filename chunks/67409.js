n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: i, selectedVariantIndex: a } = e;
    return i.type === r.Z.VARIANTS_GROUP && null != a && null != (l = null == (n = i.variants) || null == (t = n[a]) ? void 0 : t.skuId) ? l : i.skuId;
};
