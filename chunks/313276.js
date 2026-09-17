r.d(t, { A: () => o });
var n = r(582128),
    l = r(24055),
    s = r.n(l),
    a = r(17928),
    i = r(590180);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, n.useCallback)(
        (t) =>
            s()(
                t
                    .map((t) => {
                        let r = e.get(t);
                        return null != r && null != r.variantGroupStoreListingId
                            ? i.A.getProductByStoreListingId(r.variantGroupStoreListingId)
                            : r;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
