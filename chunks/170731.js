t.d(e, { Z: () => W }), t(388685);
var n = t(54381),
    s = t(473749),
    r = t(120356),
    l = t.n(r),
    a = t(907331),
    o = t(454399),
    c = t(28664),
    d = t(481060),
    u = t(100527),
    m = t(906732),
    h = t(216541),
    g = t(687158),
    p = t(576635),
    f = t(213053),
    I = t(892001),
    _ = t(835255),
    j = t(221300),
    x = t(796483),
    w = t(688192),
    S = t(372263),
    C = t(602733),
    L = t(176879),
    O = t(541699),
    b = t(321947),
    B = t(689201),
    N = t(626135),
    T = t(51144),
    y = t(474936),
    v = t(981631),
    k = t(228168),
    P = t(388032),
    E = t(694781);
let R = {
    FULL_WISHLIST: {
        title: P.intl.string(P.t["7lZ31J"]),
        getSubtitle: (i) => P.intl.formatToPlainString(P.t.BjEX38, { username: i }),
        showIcons: !1,
    },
    MIXED: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (i) => P.intl.formatToPlainString(P.t.dIDKgi, { username: i }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (i) => P.intl.formatToPlainString(P.t.wyMp1j, { username: i }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: P.intl.string(P.t.BCi1gT),
        getSubtitle: (i) => P.intl.formatToPlainString(P.t.BjEX38, { username: i }),
        showIcons: !1,
    },
};
function M(i) {
    let { title: e, subtitle: t, themeClass: s } = i;
    return (0, n.jsx)("div", {
        className: l()(E.wishlistBannerHeader, s),
        children: (0, n.jsxs)("div", {
            className: E.wishlistBannerTitleContainer,
            children: [
                (0, n.jsx)(d.Heading, {
                    variant: "heading-lg/bold",
                    children: e,
                }),
                (0, n.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: t,
                }),
            ],
        }),
    });
}
function A() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: P.intl.string(P.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: E.wishlistBannerGrid,
                children: Array.from({ length: C.zL }, (i, e) =>
                    (0, n.jsx)(S.Z, { cardSize: w.U.SMALL }, "placeholder-".concat(e)),
                ),
            }),
        ],
    });
}
function H(i) {
    let { lastItem: e, remainingCount: t, giftRecipient: s, onOpenWishlist: r } = i;
    return null == e
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: E.wishlistBannerListItem,
                  children: (0, n.jsx)(_.BO, {
                      item: e.item,
                      remainingCount: t,
                      onClick: r,
                      cardSize: w.U.SMALL,
                      renderItemPreview: (i) => {
                          if ((0, O.Q)(e.item)) {
                              if (null != e.item.bundleItems && e.item.bundleItems.length > 0) {
                                  let t = { items: e.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: E.bundlePreviewBanner,
                                      children: (0, n.jsx)(h.d, {
                                          product: t,
                                          isPurchased: !1,
                                          isHighlighted: i,
                                          user: s,
                                      }),
                                  });
                              }
                              return (0, n.jsx)(j.Z, {
                                  item: e.item,
                                  profileOwner: s,
                                  isHighlighted: i,
                                  cardSize: w.U.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(e.item.skuId),
          );
}
function G(i) {
    let {
        items: e,
        hasOverflow: t,
        overflowItem: s,
        overflowCount: r,
        showIcons: l,
        giftRecipient: a,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: h,
        analyticsLocations: g,
    } = i;
    return (0, n.jsxs)("ul", {
        className: E.wishlistBannerGrid,
        children: [
            e.map((i, e) => {
                let { item: t, source: s } = i;
                return (0, n.jsx)(
                    "li",
                    {
                        className: E.wishlistBannerListItem,
                        children: ((i, e) => {
                            var t, s;
                            let { item: r, source: u } = i,
                                p = h[e],
                                f = (0, n.jsx)(x.Z, {
                                    item: r,
                                    profileOwner: a,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: w.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: l,
                                    onWishlistItemClick: m,
                                    analyticsLocations: g,
                                });
                            return p.shouldShow
                                ? null != p.title && null == p.body && null == p.renderIcon
                                    ? (0, n.jsx)(c.u, {
                                          text: p.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: f,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: p.title,
                                          body: null != (s = p.body) ? s : "",
                                          asset: null == (t = p.renderIcon) ? void 0 : t.call(p, r),
                                          assetSize: C.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: f,
                                      })
                                : f;
                        })(
                            {
                                item: t,
                                source: s,
                            },
                            e,
                        ),
                    },
                    t.skuId,
                );
            }),
            t &&
                (0, n.jsx)(H, {
                    lastItem: s,
                    remainingCount: r,
                    giftRecipient: a,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let W = function (i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        { analyticsLocations: r } = (0, m.ZP)(u.Z.WISHLIST_BANNER),
        o = (0, g.ZP)(null == e ? void 0 : e.id),
        {
            displayItems: c,
            hasMoreItems: h,
            totalWishlistItemCount: _,
            wishlistItemCountToBeDisplayed: j,
            fetchState: x,
            defaultWishlistId: w,
        } = (0, L.ZP)({
            user: e,
            numItems: C.zL,
            location: "Wishlist Banner",
        }),
        S = s.useMemo(() => "loading" === x.status, [x.status]),
        O = T.ZP.getName(e),
        {
            theme: y,
            primaryColor: P,
            secondaryColor: H,
        } = (0, p.Z)({
            user: e,
            displayProfile: o,
        }),
        { profileThemeStyle: W, profileThemeClassName: Z } = (0, f.Z)({
            theme: y,
            themeType: null,
            primaryColor: P,
            secondaryColor: H,
        }),
        z = s.useCallback(() => {
            (0, I.openUserProfileModal)({
                userId: e.id,
                section: k.oh.WISHLIST,
            });
        }, [e.id]),
        F =
            R[
                s.useMemo(
                    () =>
                        j >= C.zL
                            ? "FULL_WISHLIST"
                            : j > 0
                              ? "MIXED"
                              : c.length > 0 &&
                                  c.every((i) => {
                                      let { item: e, source: t } = i;
                                      return t === C.lr.POPULAR && (0, b.F)(e);
                                  })
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [j, c],
                )
            ],
        D =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        U = s.useMemo(() => (h ? c.slice(0, C.zL - 1) : c), [c, h]),
        Y = (0, B.g)(U, e),
        X = h ? c[C.zL - 1] : null,
        K = _ - C.zL + 1,
        [q, Q] = s.useState(!1),
        J = s.useCallback(
            (i) => {
                if (i && !S && c.length > 0) {
                    let i = c.map((i) => {
                        let { item: e } = i;
                        return e.skuId;
                    });
                    N.default.track(v.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: e.id,
                        sku_ids: i,
                        location_stack: r,
                        product_lines: Array.from(
                            new Set(
                                c.map((i) => {
                                    let { item: e } = i;
                                    return e.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        Q(!0);
                }
            },
            [S, c, e.id, r],
        ),
        V = (0, a.O)(J, void 0, !S && !q);
    return "error" === x.status
        ? null
        : (0, n.jsxs)("div", {
              ref: V,
              className: l()(E.wishlistBanner, Z),
              style: W,
              children: [
                  null != D &&
                      (0, n.jsx)("div", {
                          className: E.backgroundImage,
                          style: { backgroundImage: "url(".concat(D, ")") },
                      }),
                  (0, n.jsx)(d.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (i) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(M, {
                                      title: F.title,
                                      subtitle: F.getSubtitle(O),
                                      themeClass: i,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: i,
                                      children:
                                          S || 0 === c.length
                                              ? (0, n.jsx)(A, {})
                                              : (0, n.jsx)(G, {
                                                    items: U,
                                                    hasOverflow: h,
                                                    overflowItem: X,
                                                    overflowCount: K,
                                                    showIcons: F.showIcons,
                                                    giftRecipient: e,
                                                    defaultWishlistId: w,
                                                    onOpenWishlist: z,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: Y,
                                                    analyticsLocations: r,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
