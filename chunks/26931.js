n.d(t, { u: () => s });
var r = n(73800),
    l = n(557816),
    i = n.n(l),
    o = n(597688),
    a = n(228624);
let s = () => {
    let e = (0, a.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let n = o.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? o.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
