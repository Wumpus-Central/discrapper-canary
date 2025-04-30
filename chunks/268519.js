n.d(t, { Z: () => c });
var r = n(192379),
    s = n(442837),
    o = n(668826),
    a = n(120421),
    i = n(477839);
function c() {
    let e = (0, s.e7)([a.Z], () => a.Z.numPurchases),
        t = (0, s.e7)([a.Z], () => a.Z.purchasedItems);
    (0, r.useEffect)(() => {
        i.YG.forEach((n) => {
            null == t[n.itemId] && e > n.purchasesRequired && (0, o.xD)(n.itemId);
        });
    }, [e, t]);
}
