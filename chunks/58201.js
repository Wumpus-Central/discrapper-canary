n.d(t, { W: () => i });
var a = n(979554),
    r = n(597688);
let i = (e, t) => {
    var n, i, l;
    return e.type === a.Z.VARIANTS_GROUP &&
        null != t &&
        null != (l = r.Z.getProduct(null == (i = e.variants) || null == (n = i[t]) ? void 0 : n.skuId))
        ? l
        : e;
};
