n.d(e, { W: () => l });
var i = n(979554),
    r = n(597688);
let l = (t, e) => {
    var n, l, a;
    return t.type === i.Z.VARIANTS_GROUP &&
        null != e &&
        null != (a = r.Z.getProduct(null == (l = t.variants) || null == (n = l[e]) ? void 0 : n.skuId))
        ? a
        : t;
};
