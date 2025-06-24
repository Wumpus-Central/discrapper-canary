r.d(t, { S: () => i });
var n = r(979554);
let i = (e) => {
    var t, r, i;
    let { product: o, selectedVariantIndex: l } = e;
    return o.type === n.Z.VARIANTS_GROUP && null != l && null != (i = null == (r = o.variants) || null == (t = r[l]) ? void 0 : t.skuId) ? i : o.skuId;
};
