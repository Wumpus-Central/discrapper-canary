n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(687158),
    d = n(576635),
    c = n(213053),
    C = n(892001),
    u = n(835255),
    p = n(221300),
    h = n(796483),
    m = n(688192),
    _ = n(372263),
    f = n(602733),
    x = n(541699),
    j = n(51144),
    g = n(474936),
    b = n(228168),
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
        className: a()(v.wishlistBannerHeader, i),
        children: (0, r.jsxs)("div", {
            className: v.wishlistBannerTitleContainer,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "display-md",
                    className: v.wishlistBannerTitle,
                    children: t,
                }),
                (0, r.jsx)(s.Text, {
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
            (0, r.jsx)(s.nn4, { children: L.intl.string(L.t.pfChQr) }),
            (0, r.jsx)("div", {
                className: v.wishlistBannerGrid,
                children: Array.from({ length: f.zL }, (e, t) =>
                    (0, r.jsx)(_.Z, { surface: m.Y.GIFTING_FLOW }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function w(e) {
    let { lastItem: t, remainingCount: n, giftRecipient: i, onOpenWishlist: l } = e;
    return null == t
        ? null
        : (0, r.jsx)(
              "li",
              {
                  className: v.wishlistBannerListItem,
                  children: (0, r.jsx)(u.BO, {
                      item: t.item,
                      remainingCount: n,
                      onClick: l,
                      size: "sm",
                      renderItemPreview: (e) =>
                          (0, x.Q)(t.item)
                              ? (0, r.jsx)(p.Z, {
                                    item: t.item,
                                    profileOwner: i,
                                    isHighlighted: e,
                                    surface: m.Y.GIFTING_FLOW,
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
        overflowCount: l,
        showIcons: a,
        giftRecipient: s,
        defaultWishlistId: o,
        onOpenWishlist: d,
        onWishlistItemClick: c,
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
                        children: (0, r.jsx)(h.Z, {
                            item: t,
                            profileOwner: s,
                            wishlistId: o,
                            isOwner: !1,
                            surface: m.Y.GIFTING_FLOW,
                            giftingOrigin: g.Wt.DM_CHANNEL_WISHLIST,
                            source: n,
                            showIcons: a,
                            onWishlistItemClick: c,
                        }),
                    },
                    t.skuId,
                );
            }),
            n &&
                (0, r.jsx)(w, {
                    lastItem: i,
                    remainingCount: l,
                    giftRecipient: s,
                    onOpenWishlist: d,
                }),
        ],
    });
}
let P = function (e) {
    let { giftRecipient: t, onWishlistItemClick: n } = e,
        l = (0, o.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: u,
            wishlist: p,
            popularCollectiblesProducts: h,
            isFetchingWishlist: m,
            isValidatingPopularProducts: _,
            isFetchingPopularProducts: x,
            wishlistError: g,
        } = (0, f.ZL)(t),
        {
            displayItems: L,
            hasMoreItems: w,
            totalWishlistItemCount: P,
            wishlistItemCountToBeDisplayed: E,
        } = (0, f.UD)({
            wishlist: p,
            popularCollectiblesProducts: h,
            wishlistError: g,
        }),
        {
            theme: k,
            primaryColor: M,
            secondaryColor: T,
        } = (0, d.Z)({
            user: t,
            displayProfile: l,
        }),
        { profileThemeStyle: A, profileThemeClassName: N } = (0, c.Z)({
            theme: k,
            themeType: null,
            primaryColor: M,
            secondaryColor: T,
        }),
        Z = i.useCallback(() => {
            (0, C.openUserProfileModal)({
                userId: t.id,
                section: b.oh.WISHLIST,
            });
        }, [t.id]),
        B = y[i.useMemo(() => (E >= f.zL ? "FULL_WISHLIST" : E > 0 ? "MIXED" : "SHOP_ONLY"), [E])],
        R = j.ZP.getName(t),
        H =
            null == l
                ? void 0
                : l.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        U = m || _ || x,
        F = w ? L.slice(0, f.zL - 1) : L,
        G = w ? L[f.zL - 1] : null,
        D = P - f.zL + 1;
    return null != g
        ? null
        : (0, r.jsxs)("div", {
              className: a()(v.wishlistBanner, N),
              style: A,
              children: [
                  null != H &&
                      (0, r.jsx)("div", {
                          className: v.backgroundImage,
                          style: { backgroundImage: "url(".concat(H, ")") },
                      }),
                  (0, r.jsx)(s.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(S, {
                                      title: B.title,
                                      subtitle: B.getSubtitle(R),
                                      themeClass: e,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: e,
                                      children:
                                          U || 0 === L.length
                                              ? (0, r.jsx)(I, {})
                                              : (0, r.jsx)(O, {
                                                    items: F,
                                                    hasOverflow: w,
                                                    overflowItem: G,
                                                    overflowCount: D,
                                                    showIcons: B.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: u,
                                                    onOpenWishlist: Z,
                                                    onWishlistItemClick: n,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
