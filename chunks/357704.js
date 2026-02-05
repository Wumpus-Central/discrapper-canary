"use strict";
s.d(t, { K: () => a });
var n = s(64700),
    r = s(311907),
    l = s(4227);
function a(e, t) {
    let s = n.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        a = (0, r.bG)([l.A], () => l.A.getPurchases(s));
    return {
        readyToClaim: n.useMemo(() => a.length === s.length, [a, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: a,
    };
}
