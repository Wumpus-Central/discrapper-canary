t.d(i, { Z: () => S });
var n = t(951288),
    r = t(647438),
    s = t(120356),
    a = t.n(s),
    l = t(481060),
    o = t(687158),
    c = t(576635),
    d = t(213053),
    u = t(892001),
    m = t(835255),
    h = t(221300),
    _ = t(796483),
    f = t(688192),
    p = t(372263),
    I = t(602733),
    g = t(541699),
    w = t(51144),
    x = t(474936),
    j = t(228168),
    v = t(388032),
    C = t(694781);
let b = {
    FULL_WISHLIST: {
        title: v.intl.string(v.t["7lZ31J"]),
        getSubtitle: (e) => v.intl.formatToPlainString(v.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: v.intl.string(v.t.SK5rmi),
        getSubtitle: (e) => v.intl.formatToPlainString(v.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: v.intl.string(v.t.SK5rmi),
        getSubtitle: (e) => v.intl.formatToPlainString(v.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function P(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(C.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: C.wishlistBannerTitleContainer,
            children: [
                (0, n.jsx)(l.Heading, {
                    variant: "display-md",
                    className: C.wishlistBannerTitle,
                    children: i,
                }),
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: t,
                }),
            ],
        }),
    });
}
function N() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.nn4, { children: v.intl.string(v.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: C.wishlistBannerGrid,
                children: Array.from({ length: I.zL }, (e, i) =>
                    (0, n.jsx)(p.Z, { surface: f.Y.GIFTING_FLOW }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function L(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: s } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: C.wishlistBannerListItem,
                  children: (0, n.jsx)(m.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      size: "sm",
                      renderItemPreview: (e) =>
                          (0, g.Q)(i.item)
                              ? (0, n.jsx)(h.Z, {
                                    item: i.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    surface: f.Y.GIFTING_FLOW,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function T(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: r,
        overflowCount: s,
        showIcons: a,
        giftRecipient: l,
        defaultWishlistId: o,
        onOpenWishlist: c,
        onWishlistItemClick: d,
    } = e;
    return (0, n.jsxs)("ul", {
        className: C.wishlistBannerGrid,
        children: [
            i.map((e) => {
                let { item: i, source: t } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: C.wishlistBannerListItem,
                        children: (0, n.jsx)(_.Z, {
                            item: i,
                            profileOwner: l,
                            wishlistId: o,
                            isOwner: !1,
                            surface: f.Y.GIFTING_FLOW,
                            giftingOrigin: x.Wt.DM_CHANNEL_WISHLIST,
                            source: t,
                            showIcons: a,
                            onWishlistItemClick: d,
                        }),
                    },
                    i.skuId,
                );
            }),
            t &&
                (0, n.jsx)(L, {
                    lastItem: r,
                    remainingCount: s,
                    giftRecipient: l,
                    onOpenWishlist: c,
                }),
        ],
    });
}
let S = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, o.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: m,
            wishlist: h,
            popularCollectiblesProducts: _,
            isFetchingWishlist: f,
            isValidatingPopularProducts: p,
            isFetchingPopularProducts: g,
            wishlistError: x,
        } = (0, I.ZL)(i),
        {
            displayItems: v,
            hasMoreItems: L,
            totalWishlistItemCount: S,
            wishlistItemCountToBeDisplayed: k,
        } = (0, I.UD)({
            wishlist: h,
            popularCollectiblesProducts: _,
            wishlistError: x,
        }),
        {
            theme: B,
            primaryColor: O,
            secondaryColor: E,
        } = (0, c.Z)({
            user: i,
            displayProfile: s,
        }),
        { profileThemeStyle: R, profileThemeClassName: H } = (0, d.Z)({
            theme: B,
            themeType: null,
            primaryColor: O,
            secondaryColor: E,
        }),
        y = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: i.id,
                section: j.oh.WISHLIST,
            });
        }, [i.id]),
        G = b[r.useMemo(() => (k >= I.zL ? "FULL_WISHLIST" : k > 0 ? "MIXED" : "SHOP_ONLY"), [k])],
        M = w.ZP.getName(i),
        F =
            null == s
                ? void 0
                : s.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        W = f || p || g,
        Z = L ? v.slice(0, I.zL - 1) : v,
        A = L ? v[I.zL - 1] : null,
        D = S - I.zL + 1;
    return null != x
        ? null
        : (0, n.jsxs)("div", {
              className: a()(C.wishlistBanner, H),
              style: R,
              children: [
                  null != F &&
                      (0, n.jsx)("div", {
                          className: C.backgroundImage,
                          style: { backgroundImage: "url(".concat(F, ")") },
                      }),
                  (0, n.jsx)(l.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(P, {
                                      title: G.title,
                                      subtitle: G.getSubtitle(M),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          W || 0 === v.length
                                              ? (0, n.jsx)(N, {})
                                              : (0, n.jsx)(T, {
                                                    items: Z,
                                                    hasOverflow: L,
                                                    overflowItem: A,
                                                    overflowCount: D,
                                                    showIcons: G.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: m,
                                                    onOpenWishlist: y,
                                                    onWishlistItemClick: t,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
