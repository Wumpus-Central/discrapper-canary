n.d(t, { av: () => o, oO: () => i });
var r = n(730202),
    l = n(65238),
    a = n(590180),
    u = n(993408);
function o(e, t) {
    let n = (0, l.XF)(t);
    return null == t.rewardStatus || null == n || 0 === i(e, n.collectionId) ? null : t;
}
function i(e, t) {
    if (!(0, u.aw)(e)) return +(e.categorySkuId === t);
    let n = new Set(
        r.A.getCollection(t)?.products.flatMap((e) => {
            let { skuIds: t } = e;
            return t;
        }) ?? [],
    );
    return (
        !(0, u.aw)(e)
            ? []
            : [
                  ...new Set(
                      (e.bundledProducts ?? e.items).map((e) => {
                          let { skuId: t } = e;
                          return t;
                      }),
                  ),
              ]
    ).filter((e) => a.A.getProduct(e)?.categorySkuId === t || n.has(e)).length;
}
