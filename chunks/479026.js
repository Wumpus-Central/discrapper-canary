l.d(t, { e: () => d });
var i = l(64700),
    r = l(793574),
    n = l(590180),
    a = l(315949),
    s = l(572595),
    u = l(57020),
    o = l(976860),
    c = l(901123);
function d(e) {
    let {
        sku: t,
        analyticsLocations: l,
        analyticsSource: d = r.A.USER_PROFILE_WISHLIST,
        giftRecipient: h,
        giftingOrigin: p,
    } = e;
    return (
        (0, a.A)(),
        i.useCallback(() => {
            let e = n.A.getProduct(t.id),
                i = n.A.getCategoryForProduct(t.id);
            null == e || null == i
                ? (0, o.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`)
                : (0, s.t)({
                      product: e,
                      category: i,
                      shouldCheckoutWithOrbs: (0, u.A)({ product: e }),
                      analyticsLocations: l ?? [],
                      analyticsSource: d,
                      returnRef: void 0,
                      tab: void 0,
                      giftRecipient: h,
                      giftingOrigin: p,
                  });
        }, [l, d, h, p, t.id])
    );
}
