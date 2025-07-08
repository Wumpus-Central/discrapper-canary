r.d(t, { S: () => i });
var n = r(979554);
let i = (e) => {
    var t, r, i;
    let { product: l, selectedVariantIndex: o } = e;
    return l.type === n.Z.VARIANTS_GROUP && null != o && null != (i = null == (r = l.variants) || null == (t = r[o]) ? void 0 : t.skuId) ? i : l.skuId;
};
