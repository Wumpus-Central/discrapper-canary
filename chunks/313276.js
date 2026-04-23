"use strict";
s.d(t, { A: () => o });
var n = s(64700),
    l = s(155999),
    r = s.n(l),
    a = s(311907),
    i = s(590180);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, n.useCallback)(
        (t) =>
            r()(
                t
                    .map((t) => {
                        let s = e.get(t);
                        return null != s && null != s.variantGroupStoreListingId
                            ? i.A.getProductByStoreListingId(s.variantGroupStoreListingId)
                            : s;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
