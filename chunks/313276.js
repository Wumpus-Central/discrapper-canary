n.d(t, { A: () => i });
var r = n(582128),
    l = n(24055),
    s = n.n(l),
    a = n(17928),
    o = n(590180);
function i() {
    let e = (0, a.bG)([o.A], () => o.A.products);
    return (0, r.useCallback)(
        (t) =>
            s()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? o.A.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
