t.d(n, { W: () => i });
var r = t(979554),
    l = t(597688);
let i = (e, n) => {
    var t, i, a;
    return e.type === r.Z.VARIANTS_GROUP &&
        null != n &&
        null != (a = l.Z.getProduct(null == (i = e.variants) || null == (t = i[n]) ? void 0 : t.skuId))
        ? a
        : e;
};
