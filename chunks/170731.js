i.d(t, { Z: () => A }), i(388685);
var n = i(54381),
    r = i(473749),
    l = i(120356),
    a = i.n(l),
    s = i(907331),
    o = i(454399),
    c = i(28664),
    d = i(481060),
    u = i(906732),
    m = i(164670),
    h = i(81939),
    _ = i(687158),
    f = i(576635),
    p = i(213053),
    g = i(892001),
    I = i(835255),
    b = i(221300),
    w = i(796483),
    v = i(688192),
    C = i(372263),
    x = i(376521),
    j = i(602733),
    S = i(541699),
    k = i(626135),
    B = i(51144),
    L = i(474936),
    P = i(981631),
    M = i(228168),
    O = i(388032),
    y = i(694781);
let N = {
    FULL_WISHLIST: {
        title: O.intl.string(O.t["7lZ31J"]),
        getSubtitle: (e) => O.intl.formatToPlainString(O.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: O.intl.string(O.t.SK5rmi),
        getSubtitle: (e) => O.intl.formatToPlainString(O.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: O.intl.string(O.t.SK5rmi),
        getSubtitle: (e) => O.intl.formatToPlainString(O.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function T(e) {
    let { title: t, subtitle: i, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(y.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: y.wishlistBannerTitleContainer,
            children: [
                (0, n.jsx)(d.Heading, {
                    variant: "heading-lg/bold",
                    children: t,
                }),
                (0, n.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: i,
                }),
            ],
        }),
    });
}
function Z() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: O.intl.string(O.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: y.wishlistBannerGrid,
                children: Array.from({ length: j.zL }, (e, t) =>
                    (0, n.jsx)(C.Z, { cardSize: v.U.SMALL }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function E(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: r, onOpenWishlist: l } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: y.wishlistBannerListItem,
                  children: (0, n.jsx)(I.BO, {
                      item: t.item,
                      remainingCount: i,
                      onClick: l,
                      cardSize: v.U.SMALL,
                      renderItemPreview: (e) =>
                          (0, S.Q)(t.item)
                              ? (0, n.jsx)(b.Z, {
                                    item: t.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    cardSize: v.U.SMALL,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}
function R(e) {
    let {
        items: t,
        hasOverflow: i,
        overflowItem: r,
        overflowCount: l,
        showIcons: a,
        giftRecipient: s,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: h,
    } = e;
    return (0, n.jsxs)("ul", {
        className: y.wishlistBannerGrid,
        children: [
            t.map((e, t) => {
                let { item: i, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: y.wishlistBannerListItem,
                        children: ((e, t) => {
                            var i, r;
                            let { item: l, source: u } = e,
                                _ = h[t],
                                f = (0, n.jsx)(w.Z, {
                                    item: l,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: v.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: L.Wt.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: a,
                                    onWishlistItemClick: m,
                                });
                            return _.shouldShow
                                ? null != _.title && null == _.body && null == _.renderIcon
                                    ? (0, n.jsx)(c.u, {
                                          text: _.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: j.rq,
                                          children: f,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: _.title,
                                          body: null != (r = _.body) ? r : "",
                                          asset: null == (i = _.renderIcon) ? void 0 : i.call(_, l),
                                          assetSize: j.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: j.rq,
                                          children: f,
                                      })
                                : f;
                        })(
                            {
                                item: i,
                                source: r,
                            },
                            t,
                        ),
                    },
                    i.skuId,
                );
            }),
            i &&
                (0, n.jsx)(E, {
                    lastItem: r,
                    remainingCount: l,
                    giftRecipient: s,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let A = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: l } = (0, u.ZP)(),
        o = (0, _.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: c,
            wishlist: I,
            popularCollectiblesProducts: b,
            isFetchingWishlist: w,
            isValidatingPopularProducts: v,
            isFetchingPopularProducts: C,
            wishlistError: S,
        } = (0, j.ZL)(t),
        { wishlistItems: L } = (0, h.Z)({
            guildId: (0, m.ac)(),
            numWishlistItems: j.zL,
        }),
        {
            displayItems: O,
            hasMoreItems: E,
            totalWishlistItemCount: A,
            wishlistItemCountToBeDisplayed: H,
        } = (0, j.UD)({
            wishlist: I,
            popularCollectiblesProducts: b,
            popularSocialLayerStorefrontItems: L,
            wishlistError: S,
        }),
        G = B.ZP.getName(t),
        {
            theme: W,
            primaryColor: D,
            secondaryColor: z,
        } = (0, f.Z)({
            user: t,
            displayProfile: o,
        }),
        { profileThemeStyle: U, profileThemeClassName: F } = (0, p.Z)({
            theme: W,
            themeType: null,
            primaryColor: D,
            secondaryColor: z,
        }),
        Y = r.useCallback(() => {
            (0, g.openUserProfileModal)({
                userId: t.id,
                section: M.oh.WISHLIST,
            });
        }, [t.id]),
        X = N[r.useMemo(() => (H >= j.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY"), [H])],
        q =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        K = w || v || C,
        Q = r.useMemo(() => (E ? O.slice(0, j.zL - 1) : O), [O, E]),
        J = (0, x.g)(Q, t),
        V = E ? O[j.zL - 1] : null,
        $ = A - j.zL + 1,
        [ee, et] = r.useState(!1),
        ei = r.useCallback(
            (e) => {
                if (e && !K && O.length > 0) {
                    let e = O.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    k.default.track(P.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: l,
                        product_lines: Array.from(
                            new Set(
                                O.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        et(!0);
                }
            },
            [K, O, t.id, l],
        ),
        en = (0, s.O)(ei, void 0, !K && !ee);
    return null != S
        ? null
        : (0, n.jsxs)("div", {
              ref: en,
              className: a()(y.wishlistBanner, F),
              style: U,
              children: [
                  null != q &&
                      (0, n.jsx)("div", {
                          className: y.backgroundImage,
                          style: { backgroundImage: "url(".concat(q, ")") },
                      }),
                  (0, n.jsx)(d.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(T, {
                                      title: X.title,
                                      subtitle: X.getSubtitle(G),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          K || 0 === O.length
                                              ? (0, n.jsx)(Z, {})
                                              : (0, n.jsx)(R, {
                                                    items: Q,
                                                    hasOverflow: E,
                                                    overflowItem: V,
                                                    overflowCount: $,
                                                    showIcons: X.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: Y,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: J,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
