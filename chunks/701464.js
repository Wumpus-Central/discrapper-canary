n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(687158),
    o = n(892001),
    s = n(835255),
    d = n(602733),
    C = n(51144),
    c = n(973007),
    u = n(474936),
    p = n(228168),
    _ = n(388032),
    f = n(391763);
function h(e) {
    let { giftRecipient: t } = e,
        n = (0, l.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: c,
            wishlist: u,
            popularProducts: h,
            isFetchingWishlist: m,
            isFetchingShopHome: x,
            isFetchingCategories: g,
            wishlistError: b,
            fetchShopHomeError: j,
        } = (0, d.ZL)(t),
        { displayItems: y, wishlistLength: v } = (0, d.UD)({
            wishlist: u,
            defaultWishlistId: c,
            popularProducts: h,
            wishlistError: b,
            fetchShopHomeError: j,
        }),
        L = i.useCallback(() => {
            (0, o.openUserProfileModal)({
                userId: t.id,
                section: p.oh.WISHLIST,
            });
        }, [t.id]);
    if (null == c || null != b || null != j) return null;
    let S = C.ZP.getName(t),
        w =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 714,
                  });
    return (0, r.jsxs)("div", {
        className: f.wishlistBanner,
        style: { width: 714 },
        children: [
            null != w &&
                (0, r.jsx)("div", {
                    className: f.backgroundImage,
                    style: { backgroundImage: "url(".concat(w, ")") },
                }),
            (0, r.jsxs)("div", {
                className: f.wishlistBannerHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.wishlistBannerTitleContainer,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "display-md",
                                className: f.wishlistBannerTitle,
                                children: _.intl.string(_.t["7lZ31N"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: _.intl.format(_.t.BjEX39, { username: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "overlay-secondary",
                        text: _.intl.format(_.t["8uYD+P"], { username: S }),
                        onClick: L,
                        disabled: (null == t ? void 0 : t.id) == null,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: f.wishlistBannerGrid,
                children:
                    m || x || g || null == u || 0 === y.length
                        ? (0, r.jsx)("div", {})
                        : y.map((e) => {
                              let { item: n, source: i } = e;
                              return (0, r.jsx)(
                                  s.Z,
                                  {
                                      item: n,
                                      profileOwner: t,
                                      wishlistId: c,
                                      isOwner: !1,
                                      size: "sm",
                                      showIcons: v < d.zL,
                                      collectibleSource: i,
                                  },
                                  n.skuId,
                              );
                          }),
            }),
        ],
    });
}
let m = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: a, giftRecipient: l } = e;
    return (0, r.jsxs)("div", {
        className: f.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: f.cardsRow,
                children: [
                    (0, r.jsx)(c.jB, {
                        onClick: () => t(u.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(c.j8, {
                        onClick: () => t(u.Si.TIER_0),
                        isGift: n,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                    }),
                ],
            }),
            (0, r.jsx)(h, { giftRecipient: l }),
        ],
    });
};
