n.d(t, { A: () => o });
var l = n(582128),
    r = n(24055),
    s = n.n(r),
    a = n(17928),
    i = n(590180);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, l.useCallback)(
        (t) =>
            s()(
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
