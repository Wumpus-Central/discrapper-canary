"use strict";
n.d(t, { e: () => u });
var i = n(64700),
    s = n(793574),
    l = n(590180),
    a = n(315949),
    r = n(572595),
    o = n(57020),
    d = n(976860),
    c = n(901123);
function u(e) {
    let { sku: t, analyticsLocations: n, analyticsSource: u = s.A.USER_PROFILE_WISHLIST } = e;
    return (
        (0, a.A)(),
        i.useCallback(() => {
            let e = l.A.getProduct(t.id),
                i = l.A.getCategoryForProduct(t.id);
            null == e || null == i
                ? (0, d.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`)
                : (0, r.t)({
                      product: e,
                      category: i,
                      shouldCheckoutWithOrbs: (0, o.A)({ product: e }),
                      analyticsLocations: n ?? [],
                      analyticsSource: u,
                      returnRef: void 0,
                      tab: void 0,
                  });
        }, [n, u, t.id])
    );
}
