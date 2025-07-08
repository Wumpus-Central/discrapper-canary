n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: o, selectedVariantIndex: i } = e;
    return o.type === r.Z.VARIANTS_GROUP && null != i && null != (l = null == (n = o.variants) || null == (t = n[i]) ? void 0 : t.skuId) ? l : o.skuId;
};
