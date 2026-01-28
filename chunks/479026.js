n.d(t, {
    T: () => b,
    _: () => m,
}),
    n(896048);
var r = n(635358),
    l = n(793574),
    i = n(590180),
    a = n(572595),
    o = n(57020),
    s = n(44120),
    c = n(976860),
    u = n(44724),
    d = n(317560),
    f = n(533406),
    p = n(657331),
    g = n(901123);

function m(e) {
    let {
            isOwner: t,
            isItemOwned: n,
            onWishlistItemClick: u,
            profileOwner: d,
            sku: f,
            analyticsLocations: m,
            giftingOrigin: b,
        } = e,
        y = location.pathname.startsWith(g.BV.COLLECTIBLES_SHOP);
    if (t || n) {
        let e = !t && n;
        if (y) {
            let t = i.A.getProduct(f.id),
                n = i.A.getCategoryForProduct(f.id);
            if (null != t && null != n) {
                e || (0, p.closeUserProfileModal)(),
                    (0, a.t)({
                        product: t,
                        category: n,
                        shouldCheckoutWithOrbs: (0, o.Ak)({
                            product: t,
                        }),
                        analyticsLocations: m,
                        analyticsSource: l.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0,
                    });
                return;
            }
        }
        e || (0, p.closeUserProfileModal)(), (0, c.pX)("".concat(g.BV.COLLECTIBLES_SHOP, "#itemSkuId=").concat(f.id));
    } else
        null == u || u(),
            (0, s.A)({
                skuId: f.id,
                isGift: !0,
                giftingOrigin: b,
                analyticsLocations: m,
                giftRecipient: d,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
            });
}

function b(e) {
    let {
        isOwner: t,
        giftingOrigin: n,
        profileOwner: r,
        isItemOwned: i,
        application: a,
        sku: o,
        analyticsLocations: s,
        additionalUserIds: c,
    } = e;
    t || i
        ? (null == a ? void 0 : a.guildId) != null &&
          (t
              ? ((0, p.closeUserProfileModal)(),
                (0, u.default)({
                    guildId: a.guildId,
                    skuId: o.id,
                    slug: o.slug,
                }))
              : (0, d.R)({
                    skuId: o.id,
                    applicationId: a.id,
                    guildId: a.guildId,
                    isStorefront: !1,
                    analyticsLocations: s,
                }))
        : (0, f.a)(
              o,
              {
                  isGift: !0,
                  giftRecipient: r,
                  additionalUserIds: c,
                  giftingOrigin: n,
              },
              {
                  analyticsLocations: [...s, l.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
              },
          );
}
