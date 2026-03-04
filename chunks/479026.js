l.d(t, { e: () => c });
var n = l(64700),
    r = l(793574),
    a = l(590180),
    i = l(315949),
    s = l(572595),
    u = l(57020),
    o = l(976860),
    d = l(901123);
function c(e) {
    let { sku: t, analyticsLocations: l, analyticsSource: c = r.A.USER_PROFILE_WISHLIST } = e;
    return (
        (0, i.A)(),
        n.useCallback(() => {
            let e = a.A.getProduct(t.id),
                n = a.A.getCategoryForProduct(t.id);
            null == e || null == n
                ? (0, o.pX)(`${d.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`)
                : (0, s.t)({
                      product: e,
                      category: n,
                      shouldCheckoutWithOrbs: (0, u.A)({ product: e }),
                      analyticsLocations: l ?? [],
                      analyticsSource: c,
                      returnRef: void 0,
                      tab: void 0,
                  });
        }, [l, c, t.id])
    );
}
