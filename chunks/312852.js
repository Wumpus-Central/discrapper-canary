n.d(e, { K: () => l });
var i = n(17928),
    a = n(4227),
    r = n(623373);
function l(t) {
    let e = (0, i.bG)([a.A], () => a.A.purchases);
    return null != t && (0, r.B1)(t)
        ? Math.max(
              0,
              t.variants.findIndex((t) => !e.has(t.skuId)),
          )
        : 0;
}
