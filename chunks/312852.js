e.d(a, { K: () => u });
var t = e(17928),
    n = e(4227),
    r = e(623373);
function u(s) {
    let a = (0, t.bG)([n.A], () => n.A.purchases);
    return null != s && (0, r.B1)(s)
        ? Math.max(
              0,
              s.variants.findIndex((s) => !a.has(s.skuId)),
          )
        : 0;
}
