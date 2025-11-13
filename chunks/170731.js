t.d(i, { Z: () => E }), t(388685);
var n = t(951288),
    r = t(647438),
    s = t(120356),
    a = t.n(s),
    l = t(907331),
    o = t(481060),
    c = t(906732),
    d = t(687158),
    u = t(576635),
    m = t(213053),
    h = t(892001),
    _ = t(835255),
    f = t(221300),
    p = t(796483),
    I = t(688192),
    g = t(372263),
    w = t(602733),
    x = t(541699),
    j = t(626135),
    v = t(51144),
    C = t(474936),
    b = t(981631),
    P = t(228168),
    N = t(388032),
    S = t(694781);
let k = {
    FULL_WISHLIST: {
        title: N.intl.string(N.t["7lZ31J"]),
        getSubtitle: (e) => N.intl.formatToPlainString(N.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: N.intl.string(N.t.SK5rmi),
        getSubtitle: (e) => N.intl.formatToPlainString(N.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: N.intl.string(N.t.SK5rmi),
        getSubtitle: (e) => N.intl.formatToPlainString(N.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function T(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(S.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: S.wishlistBannerTitleContainer,
            children: [
                (0, n.jsx)(o.Heading, {
                    variant: "display-md",
                    className: S.wishlistBannerTitle,
                    children: i,
                }),
                (0, n.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: t,
                }),
            ],
        }),
    });
}
function L() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.nn4, { children: N.intl.string(N.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: S.wishlistBannerGrid,
                children: Array.from({ length: w.zL }, (e, i) =>
                    (0, n.jsx)(g.Z, { surface: I.Y.GIFTING_FLOW }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function O(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: s } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: S.wishlistBannerListItem,
                  children: (0, n.jsx)(_.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      size: "sm",
                      renderItemPreview: (e) =>
                          (0, x.Q)(i.item)
                              ? (0, n.jsx)(f.Z, {
                                    item: i.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    surface: I.Y.GIFTING_FLOW,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function B(e) {
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
        className: S.wishlistBannerGrid,
        children: [
            i.map((e) => {
                let { item: i, source: t } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: S.wishlistBannerListItem,
                        children: (0, n.jsx)(p.Z, {
                            item: i,
                            profileOwner: l,
                            wishlistId: o,
                            isOwner: !1,
                            surface: I.Y.GIFTING_FLOW,
                            giftingOrigin: C.Wt.DM_CHANNEL_WISHLIST,
                            source: t,
                            showIcons: a,
                            onWishlistItemClick: d,
                        }),
                    },
                    i.skuId,
                );
            }),
            t &&
                (0, n.jsx)(O, {
                    lastItem: r,
                    remainingCount: s,
                    giftRecipient: l,
                    onOpenWishlist: c,
                }),
        ],
    });
}
let E = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: s } = (0, c.ZP)(),
        _ = (0, d.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: f,
            wishlist: p,
            popularCollectiblesProducts: I,
            isFetchingWishlist: g,
            isValidatingPopularProducts: x,
            isFetchingPopularProducts: C,
            wishlistError: N,
        } = (0, w.ZL)(i),
        {
            displayItems: O,
            hasMoreItems: E,
            totalWishlistItemCount: R,
            wishlistItemCountToBeDisplayed: H,
        } = (0, w.UD)({
            wishlist: p,
            popularCollectiblesProducts: I,
            wishlistError: N,
        }),
        {
            theme: G,
            primaryColor: y,
            secondaryColor: M,
        } = (0, u.Z)({
            user: i,
            displayProfile: _,
        }),
        { profileThemeStyle: W, profileThemeClassName: F } = (0, m.Z)({
            theme: G,
            themeType: null,
            primaryColor: y,
            secondaryColor: M,
        }),
        Z = r.useCallback(() => {
            (0, h.openUserProfileModal)({
                userId: i.id,
                section: P.oh.WISHLIST,
            });
        }, [i.id]),
        A = k[r.useMemo(() => (H >= w.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY"), [H])],
        D = v.ZP.getName(i),
        z =
            null == _
                ? void 0
                : _.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        Y = g || x || C,
        U = E ? O.slice(0, w.zL - 1) : O,
        K = E ? O[w.zL - 1] : null,
        X = R - w.zL + 1,
        [q, V] = r.useState(!1),
        Q = r.useCallback(
            (e) => {
                if (e && !Y && O.length > 0) {
                    let e = O.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    j.default.track(b.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: s,
                    }),
                        V(!0);
                }
            },
            [Y, O, i.id, s],
        ),
        J = (0, l.O)(Q, void 0, !Y && !q);
    return null != N
        ? null
        : (0, n.jsxs)("div", {
              ref: J,
              className: a()(S.wishlistBanner, F),
              style: W,
              children: [
                  null != z &&
                      (0, n.jsx)("div", {
                          className: S.backgroundImage,
                          style: { backgroundImage: "url(".concat(z, ")") },
                      }),
                  (0, n.jsx)(o.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(T, {
                                      title: A.title,
                                      subtitle: A.getSubtitle(D),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          Y || 0 === O.length
                                              ? (0, n.jsx)(L, {})
                                              : (0, n.jsx)(B, {
                                                    items: U,
                                                    hasOverflow: E,
                                                    overflowItem: K,
                                                    overflowCount: X,
                                                    showIcons: A.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: Z,
                                                    onWishlistItemClick: t,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
