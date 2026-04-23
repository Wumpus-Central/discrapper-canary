"use strict";
s.d(t, { K: () => a });
var n = s(64700),
    l = s(311907),
    r = s(4227);
function a(e, t) {
    let s = n.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        a = (0, l.bG)([r.A], () => r.A.getPurchases(s));
    return {
        readyToClaim: n.useMemo(() => a.length === s.length, [a, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: a,
    };
}
