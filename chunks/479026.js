i.d(t, { T: () => g, _: () => m });
var r = i(635358),
    l = i(793574),
    s = i(590180),
    n = i(572595),
    a = i(57020),
    u = i(44120),
    d = i(976860),
    o = i(44724),
    c = i(317560),
    I = i(533406),
    h = i(657331),
    S = i(901123);
function m(e) {
    let {
            isOwner: t,
            isItemOwned: i,
            onWishlistItemClick: o,
            profileOwner: c,
            sku: I,
            analyticsLocations: m,
            giftingOrigin: g,
        } = e,
        f = location.pathname.startsWith(S.BV.COLLECTIBLES_SHOP);
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
                        shouldCheckoutWithOrbs: (0, a.A)({ product: t }),
                        analyticsLocations: m,
                        analyticsSource: l.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0,
                    });
                return;
            }
        }
        e || (0, h.closeUserProfileModal)(), (0, d.pX)(`${S.BV.COLLECTIBLES_SHOP}#itemSkuId=${I.id}`);
    } else
        o?.(),
            (0, u.A)({
                skuId: I.id,
                isGift: !0,
                giftingOrigin: g,
                analyticsLocations: m,
                giftRecipient: c,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
            });
}
function g(e) {
    let {
        isOwner: t,
        giftingOrigin: i,
        profileOwner: r,
        isItemOwned: s,
        application: n,
        sku: a,
        analyticsLocations: u,
        additionalUserIds: d,
    } = e;
    t || s
        ? n?.guildId != null &&
          (t
              ? ((0, h.closeUserProfileModal)(), (0, o.default)({ guildId: n.guildId, skuId: a.id, slug: a.slug }))
              : (0, c.R)({
                    skuId: a.id,
                    applicationId: n.id,
                    guildId: n.guildId,
                    isStorefront: !1,
                    analyticsLocations: u,
                }))
        : (0, I.a)(
              a,
              { isGift: !0, giftRecipient: r, additionalUserIds: d, giftingOrigin: i },
              { analyticsLocations: [...u, l.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
          );
}
