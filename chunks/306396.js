e.d(n, { Q7: () => s, av: () => i, oO: () => c });
var r = e(730202),
    u = e(65238),
    l = e(590180),
    a = e(993408),
    o = e(758836);
function i(t, n) {
    let e = (0, u.XF)(n);
    return null == n.rewardStatus || null == e || 0 === c(t, e.collectionId) ? null : n;
}
function c(t, n) {
    if (!(0, a.aw)(t)) return +(t.categorySkuId === n);
    let e = new Set(
        r.A.getCollection(n)?.products.flatMap((t) => {
            let { skuIds: n } = t;
            return n;
        }) ?? [],
    );
    return (
        !(0, a.aw)(t)
            ? []
            : [
                  ...new Set(
                      (t.bundledProducts ?? t.items).map((t) => {
                          let { skuId: n } = t;
                          return n;
                      }),
                  ),
              ]
    ).filter((t) => l.A.getProduct(t)?.categorySkuId === n || e.has(t)).length;
}
function s(t, n) {
    switch (n) {
        case o.G2.HOME:
            return t.shopHome;
        case o.G2.COLLECTION_INDEX:
            return t.indexPage;
        default:
            return;
    }
}
