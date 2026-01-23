n.d(e, {
    K: () => a,
});
var i = n(311907),
    r = n(4227),
    l = n(623373);
let a = (t) => {
    let e = (0, i.bG)([r.A], () => r.A.purchases);
    return null != t && (0, l.B1)(t)
        ? Math.max(
              0,
              t.variants.findIndex((t) => !e.has(t.skuId)),
          )
        : 0;
};
