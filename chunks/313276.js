n.d(t, { A: () => o });
var s = n(64700),
    l = n(24055),
    r = n.n(l),
    a = n(17928),
    i = n(590180);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, s.useCallback)(
        (t) =>
            r()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? i.A.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
