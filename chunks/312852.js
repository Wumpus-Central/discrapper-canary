n.d(e, { K: () => r });
var i = n(17928),
    a = n(4227),
    l = n(623373);
let r = (t) => {
    let e = (0, i.bG)([a.A], () => a.A.purchases);
    return null != t && (0, l.B1)(t)
        ? Math.max(
              0,
              t.variants.findIndex((t) => !e.has(t.skuId)),
          )
        : 0;
};
