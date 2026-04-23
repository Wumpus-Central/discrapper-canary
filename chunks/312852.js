n.d(t, { K: () => r });
var a = n(17928),
    l = n(4227),
    i = n(623373);
let r = (e) => {
    let t = (0, a.bG)([l.A], () => l.A.purchases);
    return null != e && (0, i.B1)(e)
        ? Math.max(
              0,
              e.variants.findIndex((e) => !t.has(e.skuId)),
          )
        : 0;
};
