l.d(n, { x: () => s });
var t = l(17928),
    r = l(561573),
    i = l(379031);
let u = [];
function s(e) {
    let { surface: n, skuId: l } = e,
        s = (0, i.g)(n);
    return (0, t.yK)([r.A], () => r.A.getOffersForSkuId(l)?.filter((e) => e.purchaseTypes.includes(s)) ?? u, [l, s]);
}
