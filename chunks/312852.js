"use strict";
n.d(t, { K: () => s });
var r = n(311907),
    i = n(4227),
    a = n(623373);
let s = (e) => {
    let t = (0, r.bG)([i.A], () => i.A.purchases);
    return null != e && (0, a.B1)(e)
        ? Math.max(
              0,
              e.variants.findIndex((e) => !t.has(e.skuId)),
          )
        : 0;
};
