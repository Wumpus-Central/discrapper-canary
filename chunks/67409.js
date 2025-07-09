r.d(t, { S: () => i });
var n = r(979554);
let i = (e) => {
    var t, r, i;
    let { product: l, selectedVariantIndex: a } = e;
    return l.type === n.Z.VARIANTS_GROUP && null != a && null != (i = null == (r = l.variants) || null == (t = r[a]) ? void 0 : t.skuId) ? i : l.skuId;
};
