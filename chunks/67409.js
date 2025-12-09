n.d(t, { S: () => r });
var a = n(979554);
let r = (e) => {
    var t, n, r;
    let { product: i, selectedVariantIndex: l } = e;
    return i.type === a.Z.VARIANTS_GROUP &&
        null != l &&
        null != (r = null == (n = i.variants) || null == (t = n[l]) ? void 0 : t.skuId)
        ? r
        : i.skuId;
};
