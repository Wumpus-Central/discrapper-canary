r.d(t, { S: () => a });
var n = r(979554);
let a = (e) => {
    var t, r, a;
    let { product: l, selectedVariantIndex: i } = e;
    return l.type === n.Z.VARIANTS_GROUP && null != i && null != (a = null == (r = l.variants) || null == (t = r[i]) ? void 0 : t.skuId) ? a : l.skuId;
};
