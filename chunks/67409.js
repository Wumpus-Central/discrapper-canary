r.d(t, { S: () => l });
var n = r(979554);
let l = (e) => {
    var t, r, l;
    let { product: o, selectedVariantIndex: i } = e;
    return o.type === n.Z.VARIANTS_GROUP && null != i && null != (l = null == (r = o.variants) || null == (t = r[i]) ? void 0 : t.skuId) ? l : o.skuId;
};
