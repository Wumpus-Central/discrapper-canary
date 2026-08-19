n.d(a, { K: () => h });
var t = n(17928),
    u = n(4227),
    d = n(623373);
function h(s) {
    let a = (0, t.bG)([u.A], () => u.A.purchases);
    return null != s && (0, d.B1)(s)
        ? Math.max(
              0,
              s.variants.findIndex((s) => !a.has(s.skuId)),
          )
        : 0;
}
