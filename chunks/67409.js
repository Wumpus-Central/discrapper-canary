t.d(n, { S: () => l });
var r = t(979554);
let l = (e) => {
    var n, t, l;
    let { product: i, selectedVariantIndex: a } = e;
    return i.type === r.Z.VARIANTS_GROUP &&
        null != a &&
        null != (l = null == (t = i.variants) || null == (n = t[a]) ? void 0 : n.skuId)
        ? l
        : i.skuId;
};
