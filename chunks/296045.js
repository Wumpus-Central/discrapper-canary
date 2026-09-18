n.d(t, { x: () => s });
var l = n(17928),
    i = n(561573),
    r = n(379031);
let a = [];
function s(e) {
    let { surface: t, skuId: n } = e,
        s = (0, r.g)(t);
    return (0, l.yK)([i.A], () => i.A.getOffersForSkuId(n)?.filter((e) => e.purchaseTypes.includes(s)) ?? a, [n, s]);
}
