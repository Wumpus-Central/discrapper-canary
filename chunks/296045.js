t.d(a, { x: () => s });
var l = t(17928),
    n = t(561573),
    r = t(379031);
let i = [];
function s(e) {
    let { surface: a, skuId: t } = e,
        s = (0, r.g)(a);
    return (0, l.yK)([n.A], () => n.A.getOffersForSkuId(t)?.filter((e) => e.purchaseTypes.includes(s)) ?? i, [t, s]);
}
