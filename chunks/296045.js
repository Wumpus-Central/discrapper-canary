t.d(n, { x: () => s });
var l = t(17928),
    r = t(561573),
    i = t(379031);
let a = [];
function s(e) {
    let { surface: n, skuId: t } = e,
        s = (0, i.g)(n);
    return (0, l.yK)([r.A], () => r.A.getOffersForSkuId(t)?.filter((e) => e.purchaseTypes.includes(s)) ?? a, [t, s]);
}
