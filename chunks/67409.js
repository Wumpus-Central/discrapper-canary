n.d(t, { S: () => i });
var r = n(979554);
let i = (e) => {
    var t, n, i;
    let { product: l, selectedVariantIndex: a } = e;
    return l.type === r.Z.VARIANTS_GROUP && null != a && null != (i = null == (n = l.variants) || null == (t = n[a]) ? void 0 : t.skuId) ? i : l.skuId;
};
