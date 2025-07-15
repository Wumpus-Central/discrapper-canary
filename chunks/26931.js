r.d(t, { u: () => s });
var n = r(73800),
    l = r(557816),
    i = r.n(l),
    o = r(597688),
    a = r(228624);
let s = () => {
    let e = (0, a.ed)('CollectiblesFeedShop');
    return (0, n.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let r = o.Z.getProduct(t);
                        return e && null != r && null != r.variantGroupStoreListingId ? o.Z.getProductByStoreListingId(r.variantGroupStoreListingId) : r;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
