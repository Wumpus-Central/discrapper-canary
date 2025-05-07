n.d(t, { u: () => s });
var r = n(73800),
    l = n(557816),
    i = n.n(l),
    a = n(597688),
    o = n(228624);
let s = () => {
    let e = (0, o.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let n = a.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? a.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
