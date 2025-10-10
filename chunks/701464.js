n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    l = n(481060),
    o = n(987209),
    s = n(621853),
    d = n(687158),
    c = n(892001),
    C = n(835255),
    u = n(602733),
    p = n(541699),
    _ = n(51144),
    h = n(973007),
    f = n(474936),
    m = n(228168),
    x = n(388032),
    g = n(391763);
function j() {
    var e;
    let { giftRecipient: t } = (0, o.wD)(),
        { defaultWishlistId: n } = (0, a.cj)([s.Z], () => ({
            defaultWishlistId: null != t ? s.Z.getFirstWishlistId(t.id) : null,
        })),
        h = (0, d.ZP)(null == t ? void 0 : t.id),
        { wishlist: f, isFetching: j, error: b } = (0, u.k)(n),
        v = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                (0, c.openUserProfileModal)({
                    userId: t.id,
                    section: m.oh.WISHLIST,
                });
        }, [null == t ? void 0 : t.id]);
    if (null == t || null == n || null != b) return null;
    let y = _.ZP.getName(t),
        S = (null != (e = null == f ? void 0 : f.items.filter(p.Q)) ? e : []).slice(0, 6),
        L =
            null == h
                ? void 0
                : h.getBannerURL({
                      canAnimate: !1,
                      size: 714,
                  });
    return (0, r.jsxs)("div", {
        className: g.wishlistBanner,
        style: { width: 714 },
        children: [
            null != L &&
                (0, r.jsx)("div", {
                    className: g.backgroundImage,
                    style: { backgroundImage: "url(".concat(L, ")") },
                }),
            (0, r.jsxs)("div", {
                className: g.wishlistBannerHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.wishlistBannerTitleContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: "display-md",
                                className: g.wishlistBannerTitle,
                                children: x.intl.string(x.t["7lZ31N"]),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: x.intl.format(x.t.BjEX39, { username: y }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.zxk, {
                        variant: "overlay-secondary",
                        text: x.intl.format(x.t["8uYD+P"], { username: y }),
                        onClick: v,
                        disabled: (null == t ? void 0 : t.id) == null,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.wishlistBannerGrid,
                children:
                    j || null == f || 0 === S.length
                        ? (0, r.jsx)("div", {})
                        : S.map((e) =>
                              (0, r.jsx)(
                                  C.Z,
                                  {
                                      item: e,
                                      profileOwner: t,
                                      wishlistId: n,
                                      isOwner: !1,
                                      size: "sm",
                                  },
                                  e.skuId,
                              ),
                          ),
            }),
        ],
    });
}
let b = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: g.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: g.cardsRow,
                children: [
                    (0, r.jsx)(h.jB, {
                        onClick: () => t(f.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(h.j8, {
                        onClick: () => t(f.Si.TIER_0),
                        isGift: n,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                    }),
                ],
            }),
            (0, r.jsx)(j, {}),
        ],
    });
};
