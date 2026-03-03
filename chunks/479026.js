l.d(t, { TN: () => R, _X: () => f, ez: () => E });
var i = l(64700),
    r = l(635358),
    n = l(793574),
    a = l(590180),
    s = l(315949),
    u = l(572595),
    d = l(57020),
    o = l(44120),
    c = l(976860),
    h = l(44724),
    A = l(317560),
    I = l(533406),
    g = l(657331),
    S = l(901123);
function f(e) {
    let {
            isOwner: t,
            isItemOwned: l,
            onWishlistItemClick: i,
            profileOwner: s,
            sku: h,
            analyticsLocations: A,
            giftingOrigin: I,
        } = e,
        f = location.pathname.startsWith(S.BV.COLLECTIBLES_SHOP);
    if (t || l) {
        let e = !t && l;
        if (f) {
            let t = a.A.getProduct(h.id),
                l = a.A.getCategoryForProduct(h.id);
            if (null != t && null != l) {
                e || (0, g.closeUserProfileModal)(),
                    (0, u.t)({
                        product: t,
                        category: l,
                        shouldCheckoutWithOrbs: (0, d.A)({ product: t }),
                        analyticsLocations: A,
                        analyticsSource: n.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0,
                    });
                return;
            }
        }
        e || (0, g.closeUserProfileModal)(), (0, c.pX)(`${S.BV.COLLECTIBLES_SHOP}#itemSkuId=${h.id}`);
    } else
        i?.(),
            (0, o.A)({
                skuId: h.id,
                isGift: !0,
                giftingOrigin: I,
                analyticsLocations: A,
                giftRecipient: s,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
            });
}
function R(e) {
    let {
        isOwner: t,
        giftingOrigin: l,
        profileOwner: i,
        isItemOwned: r,
        application: a,
        sku: s,
        analyticsLocations: u,
        additionalUserIds: d,
    } = e;
    t || r
        ? a?.guildId != null &&
          (t
              ? ((0, g.closeUserProfileModal)(), (0, h.default)({ guildId: a.guildId, skuId: s.id, slug: s.slug }))
              : (0, A.R)({
                    skuId: s.id,
                    applicationId: a.id,
                    guildId: a.guildId,
                    isStorefront: !1,
                    analyticsLocations: u,
                }))
        : (0, I.a)(
              s,
              { isGift: !0, giftRecipient: i, additionalUserIds: d, giftingOrigin: l },
              { analyticsLocations: [...u, n.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
          );
}
function E(e) {
    let { sku: t, analyticsLocations: l, analyticsSource: r = n.A.USER_PROFILE_WISHLIST } = e;
    return (
        (0, s.A)(),
        i.useCallback(() => {
            let e = a.A.getProduct(t.id),
                i = a.A.getCategoryForProduct(t.id);
            null == e || null == i
                ? (0, c.pX)(`${S.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`)
                : (0, u.t)({
                      product: e,
                      category: i,
                      shouldCheckoutWithOrbs: (0, d.A)({ product: e }),
                      analyticsLocations: l ?? [],
                      analyticsSource: r,
                      returnRef: void 0,
                      tab: void 0,
                  });
        }, [l, r, t.id])
    );
}
