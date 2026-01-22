n.d(e, { r: () => l });
var i = n(575593),
    r = n(590180);
let l = (t, e) => {
    var n, l, a;
    return t.type === i.R.VARIANTS_GROUP &&
        null != e &&
        null != (n = r.A.getProduct(null == (a = t.variants) || null == (l = a[e]) ? void 0 : l.skuId))
        ? n
        : t;
};
