n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(687158),
    d = n(576635),
    C = n(213053),
    c = n(892001),
    u = n(835255),
    p = n(221300),
    _ = n(796483),
    h = n(688192),
    m = n(372263),
    f = n(602733),
    x = n(541699),
    g = n(51144),
    b = n(474936),
    j = n(228168),
    L = n(388032),
    v = n(694781);
let y = {
    FULL_WISHLIST: {
        title: L.intl.string(L.t["7lZ31J"]),
        getSubtitle: (e) => L.intl.formatToPlainString(L.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: L.intl.string(L.t.SK5rmi),
        getSubtitle: (e) => L.intl.formatToPlainString(L.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: L.intl.string(L.t.SK5rmi),
        getSubtitle: (e) => L.intl.formatToPlainString(L.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function S(e) {
    let { title: t, subtitle: n, themeClass: i } = e;
    return (0, r.jsx)("div", {
        className: l()(v.wishlistBannerHeader, i),
        children: (0, r.jsxs)("div", {
            className: v.wishlistBannerTitleContainer,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: v.wishlistBannerTitle,
                    children: t,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: n,
                }),
            ],
        }),
    });
}
function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.nn4, { children: L.intl.string(L.t.pfChQr) }),
            (0, r.jsx)("div", {
                className: v.wishlistBannerGrid,
                children: Array.from({ length: f.zL }, (e, t) =>
                    (0, r.jsx)(m.Z, { surface: h.Y.GIFTING_FLOW }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function w(e) {
    let { lastItem: t, remainingCount: n, giftRecipient: i, onOpenWishlist: a } = e;
    return null == t
        ? null
        : (0, r.jsx)(
              "li",
              {
                  className: v.wishlistBannerListItem,
                  children: (0, r.jsx)(u.BO, {
                      item: t.item,
                      remainingCount: n,
                      onClick: a,
                      size: "sm",
                      renderItemPreview: (e) =>
                          (0, x.Q)(t.item)
                              ? (0, r.jsx)(p.Z, {
                                    item: t.item,
                                    profileOwner: i,
                                    isHighlighted: e,
                                    surface: h.Y.GIFTING_FLOW,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}
function O(e) {
    let {
        items: t,
        hasOverflow: n,
        overflowItem: i,
        overflowCount: a,
        showIcons: l,
        giftRecipient: o,
        defaultWishlistId: s,
        onOpenWishlist: d,
    } = e;
    return (0, r.jsxs)("ul", {
        className: v.wishlistBannerGrid,
        children: [
            t.map((e) => {
                let { item: t, source: n } = e;
                return (0, r.jsx)(
                    "li",
                    {
                        className: v.wishlistBannerListItem,
                        children: (0, r.jsx)(_.Z, {
                            item: t,
                            profileOwner: o,
                            wishlistId: s,
                            isOwner: !1,
                            surface: h.Y.GIFTING_FLOW,
                            giftingOrigin: n === f.lr.WISHLIST ? b.Wt.DM_CHANNEL_WISHLIST : b.Wt.DM_CHANNEL,
                            collectibleSource: n,
                            showIcons: l,
                        }),
                    },
                    t.skuId,
                );
            }),
            n &&
                (0, r.jsx)(w, {
                    lastItem: i,
                    remainingCount: a,
                    giftRecipient: o,
                    onOpenWishlist: d,
                }),
        ],
    });
}
let P = function (e) {
    let { giftRecipient: t } = e,
        n = (0, s.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: a,
            wishlist: u,
            popularCollectiblesProducts: p,
            isFetchingWishlist: _,
            isFetchingShopHome: h,
            isFetchingCategories: m,
            isValidatingPopularProducts: x,
            wishlistError: b,
            fetchShopHomeError: L,
        } = (0, f.ZL)(t),
        {
            displayItems: w,
            hasMoreItems: P,
            totalWishlistItemCount: E,
            wishlistItemCountToBeDisplayed: T,
        } = (0, f.UD)({
            wishlist: u,
            popularCollectiblesProducts: p,
            wishlistError: b,
            fetchShopHomeError: L,
        }),
        {
            theme: k,
            primaryColor: M,
            secondaryColor: A,
        } = (0, d.Z)({
            user: t,
            displayProfile: n,
        }),
        { profileThemeStyle: B, profileThemeClassName: Z } = (0, C.Z)({
            theme: k,
            themeType: null,
            primaryColor: M,
            secondaryColor: A,
        }),
        N = i.useCallback(() => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                section: j.oh.WISHLIST,
            });
        }, [t.id]),
        R = y[i.useMemo(() => (T >= f.zL ? "FULL_WISHLIST" : T > 0 ? "MIXED" : "SHOP_ONLY"), [T])],
        F = g.ZP.getName(t),
        H =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        G = _ || h || m || x,
        U = P ? w.slice(0, f.zL - 1) : w,
        D = P ? w[f.zL - 1] : null,
        z = E - f.zL + 1;
    return null != b || null != L
        ? null
        : (0, r.jsxs)("div", {
              className: l()(v.wishlistBanner, Z),
              style: B,
              children: [
                  null != H &&
                      (0, r.jsx)("div", {
                          className: v.backgroundImage,
                          style: { backgroundImage: "url(".concat(H, ")") },
                      }),
                  (0, r.jsx)(o.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(S, {
                                      title: R.title,
                                      subtitle: R.getSubtitle(F),
                                      themeClass: e,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: e,
                                      children:
                                          G || 0 === w.length
                                              ? (0, r.jsx)(I, {})
                                              : (0, r.jsx)(O, {
                                                    items: U,
                                                    hasOverflow: P,
                                                    overflowItem: D,
                                                    overflowCount: z,
                                                    showIcons: R.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: a,
                                                    onOpenWishlist: N,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
