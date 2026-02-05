i.d(t, { T: () => S, _: () => g });
var r = i(635358),
    l = i(793574),
    s = i(590180),
    n = i(572595),
    a = i(57020),
    u = i(44120),
    o = i(976860),
    d = i(44724),
    c = i(317560),
    I = i(533406),
    h = i(657331),
    m = i(901123);
function g(e) {
    let {
            isOwner: t,
            isItemOwned: i,
            onWishlistItemClick: d,
            profileOwner: c,
            sku: I,
            analyticsLocations: g,
            giftingOrigin: S,
        } = e,
        f = location.pathname.startsWith(m.BV.COLLECTIBLES_SHOP);
    if (t || i) {
        let e = !t && i;
        if (f) {
            let t = s.A.getProduct(I.id),
                i = s.A.getCategoryForProduct(I.id);
            if (null != t && null != i) {
                e || (0, h.closeUserProfileModal)(),
                    (0, n.t)({
                        product: t,
                        category: i,
                        shouldCheckoutWithOrbs: (0, a.Ak)({ product: t }),
                        analyticsLocations: g,
                        analyticsSource: l.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0,
                    });
                return;
            }
        }
        e || (0, h.closeUserProfileModal)(), (0, o.pX)(`${m.BV.COLLECTIBLES_SHOP}#itemSkuId=${I.id}`);
    } else
        d?.(),
            (0, u.A)({
                skuId: I.id,
                isGift: !0,
                giftingOrigin: S,
                analyticsLocations: g,
                giftRecipient: c,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
            });
}
function S(e) {
    let {
        isOwner: t,
        giftingOrigin: i,
        profileOwner: r,
        isItemOwned: s,
        application: n,
        sku: a,
        analyticsLocations: u,
        additionalUserIds: o,
    } = e;
    t || s
        ? n?.guildId != null &&
          (t
              ? ((0, h.closeUserProfileModal)(), (0, d.default)({ guildId: n.guildId, skuId: a.id, slug: a.slug }))
              : (0, c.R)({
                    skuId: a.id,
                    applicationId: n.id,
                    guildId: n.guildId,
                    isStorefront: !1,
                    analyticsLocations: u,
                }))
        : (0, I.a)(
              a,
              { isGift: !0, giftRecipient: r, additionalUserIds: o, giftingOrigin: i },
              { analyticsLocations: [...u, l.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
          );
}
