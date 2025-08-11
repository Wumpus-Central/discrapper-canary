r.d(t, { W: () => a });
var n = r(979554),
    l = r(597688);
let a = (e, t) => {
    var r, a, i;
    return e.type === n.Z.VARIANTS_GROUP &&
        null != t &&
        null != (i = l.Z.getProduct(null == (a = e.variants) || null == (r = a[t]) ? void 0 : r.skuId))
        ? i
        : e;
};
