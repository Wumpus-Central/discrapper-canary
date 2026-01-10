n.d(t, { Z: () => o });
var r = n(473749),
    l = n(557816),
    a = n.n(l),
    s = n(442837),
    i = n(597688);
function o() {
    let e = (0, s.e7)([i.Z], () => i.Z.products);
    return (0, r.useCallback)(
        (t) =>
            a()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? i.Z.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
