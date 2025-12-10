t.d(i, { Z: () => D }), t(388685);
var n = t(54381),
    r = t(473749),
    l = t(120356),
    a = t.n(l),
    s = t(907331),
    o = t(454399),
    c = t(28664),
    d = t(481060),
    u = t(100527),
    m = t(906732),
    _ = t(216541),
    h = t(164670),
    p = t(765907),
    f = t(81939),
    g = t(687158),
    I = t(576635),
    w = t(213053),
    b = t(892001),
    S = t(835255),
    v = t(221300),
    j = t(796483),
    x = t(688192),
    C = t(372263),
    L = t(602733),
    O = t(541699),
    B = t(321947),
    k = t(689201),
    N = t(626135),
    T = t(51144),
    y = t(474936),
    P = t(981631),
    M = t(228168),
    E = t(388032),
    R = t(694781);
let Z = {
    FULL_WISHLIST: {
        title: E.intl.string(E.t["7lZ31J"]),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: E.intl.string(E.t.BCi1gT),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function A(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(R.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: R.wishlistBannerTitleContainer,
            children: [
                (0, n.jsx)(d.Heading, {
                    variant: "heading-lg/bold",
                    children: i,
                }),
                (0, n.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: t,
                }),
            ],
        }),
    });
}
function H() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: E.intl.string(E.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: R.wishlistBannerGrid,
                children: Array.from({ length: L.zL }, (e, i) =>
                    (0, n.jsx)(C.Z, { cardSize: x.U.SMALL }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function W(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: l } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: R.wishlistBannerListItem,
                  children: (0, n.jsx)(S.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: l,
                      cardSize: x.U.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, O.Q)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: R.bundlePreviewBanner,
                                      children: (0, n.jsx)(_.d, {
                                          product: t,
                                          isPurchased: !1,
                                          isHighlighted: e,
                                          user: r,
                                      }),
                                  });
                              }
                              return (0, n.jsx)(v.Z, {
                                  item: i.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: x.U.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function G(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: r,
        overflowCount: l,
        showIcons: a,
        giftRecipient: s,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: _,
        analyticsLocations: h,
    } = e;
    return (0, n.jsxs)("ul", {
        className: R.wishlistBannerGrid,
        children: [
            i.map((e, i) => {
                let { item: t, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: R.wishlistBannerListItem,
                        children: ((e, i) => {
                            var t, r;
                            let { item: l, source: u } = e,
                                p = _[i],
                                f = (0, n.jsx)(j.Z, {
                                    item: l,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: x.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: a,
                                    onWishlistItemClick: m,
                                    analyticsLocations: h,
                                });
                            return p.shouldShow
                                ? null != p.title && null == p.body && null == p.renderIcon
                                    ? (0, n.jsx)(c.u, {
                                          text: p.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: L.rq,
                                          children: f,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: p.title,
                                          body: null != (r = p.body) ? r : "",
                                          asset: null == (t = p.renderIcon) ? void 0 : t.call(p, l),
                                          assetSize: L.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: L.rq,
                                          children: f,
                                      })
                                : f;
                        })(
                            {
                                item: t,
                                source: r,
                            },
                            i,
                        ),
                    },
                    t.skuId,
                );
            }),
            t &&
                (0, n.jsx)(W, {
                    lastItem: r,
                    remainingCount: l,
                    giftRecipient: s,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let D = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: l } = (0, m.ZP)(u.Z.WISHLIST_BANNER),
        o = (0, g.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: c,
            wishlist: _,
            popularCollectiblesProducts: S,
            isFetchingWishlist: v,
            isValidatingPopularProducts: j,
            isFetchingPopularProducts: x,
            wishlistError: C,
        } = (0, L.ZL)(i),
        { wishlistItems: O } = (0, f.Z)({
            guildId: (0, h.ac)(),
            numWishlistItems: L.zL,
        }),
        { isDisplayProfileSocialLayerStorefrontEligible: y } = (0, p.Z)({
            displayProfile: o,
            location: "Wishlist Banner",
        }),
        E = r.useMemo(() => {
            var e;
            return (null != (e = null == _ ? void 0 : _.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, B.F)(e))
                .length > 0 || y
                ? O
                : [];
        }, [null == _ ? void 0 : _.items, y, O]),
        {
            displayItems: W,
            hasMoreItems: D,
            totalWishlistItemCount: z,
            wishlistItemCountToBeDisplayed: F,
        } = (0, L.UD)({
            wishlist: _,
            popularCollectiblesProducts: S,
            popularSocialLayerStorefrontItems: E,
            wishlistError: C,
        }),
        U = T.ZP.getName(i),
        {
            theme: Y,
            primaryColor: X,
            secondaryColor: K,
        } = (0, I.Z)({
            user: i,
            displayProfile: o,
        }),
        { profileThemeStyle: q, profileThemeClassName: Q } = (0, w.Z)({
            theme: Y,
            themeType: null,
            primaryColor: X,
            secondaryColor: K,
        }),
        J = r.useCallback(() => {
            (0, b.openUserProfileModal)({
                userId: i.id,
                section: M.oh.WISHLIST,
            });
        }, [i.id]),
        V =
            Z[
                r.useMemo(
                    () =>
                        F >= L.zL
                            ? "FULL_WISHLIST"
                            : F > 0
                              ? "MIXED"
                              : E.length > 0 && y
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [F, E.length, y],
                )
            ],
        $ =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        ee = v || j || x,
        ei = r.useMemo(() => (D ? W.slice(0, L.zL - 1) : W), [W, D]),
        et = (0, k.g)(ei, i),
        en = D ? W[L.zL - 1] : null,
        er = z - L.zL + 1,
        [el, ea] = r.useState(!1),
        es = r.useCallback(
            (e) => {
                if (e && !ee && W.length > 0) {
                    let e = W.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    N.default.track(P.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: l,
                        product_lines: Array.from(
                            new Set(
                                W.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        ea(!0);
                }
            },
            [ee, W, i.id, l],
        ),
        eo = (0, s.O)(es, void 0, !ee && !el);
    return null != C
        ? null
        : (0, n.jsxs)("div", {
              ref: eo,
              className: a()(R.wishlistBanner, Q),
              style: q,
              children: [
                  null != $ &&
                      (0, n.jsx)("div", {
                          className: R.backgroundImage,
                          style: { backgroundImage: "url(".concat($, ")") },
                      }),
                  (0, n.jsx)(d.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(A, {
                                      title: V.title,
                                      subtitle: V.getSubtitle(U),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          ee || 0 === W.length
                                              ? (0, n.jsx)(H, {})
                                              : (0, n.jsx)(G, {
                                                    items: ei,
                                                    hasOverflow: D,
                                                    overflowItem: en,
                                                    overflowCount: er,
                                                    showIcons: V.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: J,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: et,
                                                    analyticsLocations: l,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
