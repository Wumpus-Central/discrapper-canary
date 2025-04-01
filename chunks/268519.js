n.d(t, { Z: () => c });
var r = n(192379),
    s = n(442837),
    o = n(668826),
    i = n(120421),
    a = n(477839);
function c() {
    let e = (0, s.e7)([i.Z], () => i.Z.numPurchases),
        t = (0, s.e7)([i.Z], () => i.Z.purchasedItems);
    (0, r.useEffect)(() => {
        a.YG.forEach((n) => {
            null == t[n.itemId] && e > n.purchasesRequired && (0, o.xD)(n.itemId);
        });
    }, [e, t]);
}
