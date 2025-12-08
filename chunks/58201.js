n.d(t, { W: () => r });
var a = n(979554),
    l = n(597688);
let r = (e, t) => {
    var n, r, i;
    return e.type === a.Z.VARIANTS_GROUP &&
        null != t &&
        null != (i = l.Z.getProduct(null == (r = e.variants) || null == (n = r[t]) ? void 0 : n.skuId))
        ? i
        : e;
};
