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
        onWishlistItemClick: C,
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
                            giftingOrigin: b.Wt.DM_CHANNEL_WISHLIST,
                            source: n,
                            showIcons: l,
                            onWishlistItemClick: C,
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
    let { giftRecipient: t, onWishlistItemClick: n } = e,
        a = (0, s.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: u,
            wishlist: p,
            popularCollectiblesProducts: _,
            isFetchingWishlist: h,
            isValidatingPopularProducts: m,
            isFetchingPopularProducts: x,
            wishlistError: b,
        } = (0, f.ZL)(t),
        {
            displayItems: L,
            hasMoreItems: w,
            totalWishlistItemCount: P,
            wishlistItemCountToBeDisplayed: E,
        } = (0, f.UD)({
            wishlist: p,
            popularCollectiblesProducts: _,
            wishlistError: b,
        }),
        {
            theme: T,
            primaryColor: k,
            secondaryColor: M,
        } = (0, d.Z)({
            user: t,
            displayProfile: a,
        }),
        { profileThemeStyle: A, profileThemeClassName: B } = (0, C.Z)({
            theme: T,
            themeType: null,
            primaryColor: k,
            secondaryColor: M,
        }),
        Z = i.useCallback(() => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                section: j.oh.WISHLIST,
            });
        }, [t.id]),
        N = y[i.useMemo(() => (E >= f.zL ? "FULL_WISHLIST" : E > 0 ? "MIXED" : "SHOP_ONLY"), [E])],
        R = g.ZP.getName(t),
        F =
            null == a
                ? void 0
                : a.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        H = h || m || x,
        G = w ? L.slice(0, f.zL - 1) : L,
        U = w ? L[f.zL - 1] : null,
        D = P - f.zL + 1;
    return null != b
        ? null
        : (0, r.jsxs)("div", {
              className: l()(v.wishlistBanner, B),
              style: A,
              children: [
                  null != F &&
                      (0, r.jsx)("div", {
                          className: v.backgroundImage,
                          style: { backgroundImage: "url(".concat(F, ")") },
                      }),
                  (0, r.jsx)(o.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(S, {
                                      title: N.title,
                                      subtitle: N.getSubtitle(R),
                                      themeClass: e,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: e,
                                      children:
                                          H || 0 === L.length
                                              ? (0, r.jsx)(I, {})
                                              : (0, r.jsx)(O, {
                                                    items: G,
                                                    hasOverflow: w,
                                                    overflowItem: U,
                                                    overflowCount: D,
                                                    showIcons: N.showIcons,
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
