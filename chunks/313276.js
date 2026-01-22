l.d(t, { A: () => o });
var n = l(64700),
    r = l(155999),
    s = l.n(r),
    a = l(311907),
    i = l(590180);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, n.useCallback)(
        (t) =>
            s()(
                t
                    .map((t) => {
                        let l = e.get(t);
                        return null != l && null != l.variantGroupStoreListingId
                            ? i.A.getProductByStoreListingId(l.variantGroupStoreListingId)
                            : l;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
