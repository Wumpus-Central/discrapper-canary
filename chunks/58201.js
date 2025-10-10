n.d(t, { W: () => i });
var r = n(979554),
    l = n(597688);
let i = (e, t) => {
    var n, i, a;
    return e.type === r.Z.VARIANTS_GROUP &&
        null != t &&
        null != (a = l.Z.getProduct(null == (i = e.variants) || null == (n = i[t]) ? void 0 : n.skuId))
        ? a
        : e;
};
