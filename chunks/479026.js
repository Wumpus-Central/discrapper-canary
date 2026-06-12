d.d(i, { e: () => n });
var e = d(64700),
    u = d(793574),
    o = d(590180),
    r = d(579151),
    a = d(452255),
    c = d(57020),
    s = d(976860),
    l = d(901123);
function n(t) {
    let {
        sku: i,
        analyticsLocations: d,
        analyticsSource: n = u.A.USER_PROFILE_WISHLIST,
        giftRecipient: h,
        giftingOrigin: p,
    } = t;
    return (
        (0, r.A)(),
        e.useCallback(() => {
            let t = o.A.getProduct(i.id),
                e = o.A.getCategoryForProduct(i.id);
            null == t || null == e
                ? (0, s.pX)(`${l.BV.COLLECTIBLES_SHOP}#itemSkuId=${i.id}`)
                : (0, a.t)({
                      product: t,
                      category: e,
                      shouldCheckoutWithOrbs: (0, c.A)({ product: t }),
                      analyticsLocations: d ?? [],
                      analyticsSource: n,
                      returnRef: void 0,
                      tab: void 0,
                      giftRecipient: h,
                      giftingOrigin: p,
                  });
        }, [d, n, h, p, i.id])
    );
}
