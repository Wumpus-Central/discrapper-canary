n.d(t, { A: () => o });
var r = n(582128),
    s = n(24055),
    l = n.n(s),
    i = n(17928),
    a = n(590180);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.products);
    return (0, r.useCallback)(
        (t) =>
            l()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? a.A.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
