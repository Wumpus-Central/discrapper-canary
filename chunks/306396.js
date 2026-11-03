n.d(t, { Q7: () => c, av: () => o, oO: () => u });
var l = n(730202),
    i = n(65238),
    r = n(590180),
    a = n(993408),
    s = n(758836);
function o(e, t) {
    let n = (0, i.XF)(t);
    return null == t.rewardStatus || null == n || 0 === u(e, n.collectionId) ? null : t;
}
function u(e, t) {
    if (!(0, a.aw)(e)) return +(e.categorySkuId === t);
    let n = new Set(
        l.A.getCollection(t)?.products.flatMap((e) => {
            let { skuIds: t } = e;
            return t;
        }) ?? [],
    );
    return (
        !(0, a.aw)(e)
            ? []
            : [
                  ...new Set(
                      (e.bundledProducts ?? e.items).map((e) => {
                          let { skuId: t } = e;
                          return t;
                      }),
                  ),
              ]
    ).filter((e) => r.A.getProduct(e)?.categorySkuId === t || n.has(e)).length;
}
function c(e, t) {
    switch (t) {
        case s.G2.HOME:
            return e.shopHome;
        case s.G2.COLLECTION_INDEX:
            return e.indexPage;
        default:
            return;
    }
}
