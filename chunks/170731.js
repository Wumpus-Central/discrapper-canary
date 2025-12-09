t.d(i, { Z: () => A }), t(388685);
var n = t(54381),
    r = t(473749),
    a = t(120356),
    l = t.n(a),
    s = t(907331),
    o = t(454399),
    c = t(28664),
    d = t(481060),
    u = t(906732),
    m = t(684263),
    h = t(164670),
    _ = t(917967),
    p = t(81939),
    f = t(687158),
    g = t(576635),
    I = t(213053),
    w = t(892001),
    b = t(835255),
    v = t(221300),
    x = t(796483),
    j = t(688192),
    S = t(372263),
    C = t(602733),
    L = t(541699),
    k = t(689201),
    B = t(626135),
    y = t(51144),
    P = t(474936),
    O = t(981631),
    T = t(228168),
    N = t(388032),
    M = t(694781);
let Z = {
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
function E(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: l()(M.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: M.wishlistBannerTitleContainer,
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
            (0, n.jsx)(d.nn4, { children: N.intl.string(N.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: M.wishlistBannerGrid,
                children: Array.from({ length: C.zL }, (e, i) =>
                    (0, n.jsx)(S.Z, { cardSize: j.U.SMALL }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function R(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: a } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: M.wishlistBannerListItem,
                  children: (0, n.jsx)(b.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: a,
                      cardSize: j.U.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, L.Q)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: M.bundlePreviewBanner,
                                      children: (0, n.jsx)(m.U, {
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
                                  cardSize: j.U.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function W(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: r,
        overflowCount: a,
        showIcons: l,
        giftRecipient: s,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: h,
    } = e;
    return (0, n.jsxs)("ul", {
        className: M.wishlistBannerGrid,
        children: [
            i.map((e, i) => {
                let { item: t, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: M.wishlistBannerListItem,
                        children: ((e, i) => {
                            var t, r;
                            let { item: a, source: u } = e,
                                _ = h[i],
                                p = (0, n.jsx)(x.Z, {
                                    item: a,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: j.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: P.Wt.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: l,
                                    onWishlistItemClick: m,
                                });
                            return _.shouldShow
                                ? null != _.title && null == _.body && null == _.renderIcon
                                    ? (0, n.jsx)(c.u, {
                                          text: _.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: p,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: _.title,
                                          body: null != (r = _.body) ? r : "",
                                          asset: null == (t = _.renderIcon) ? void 0 : t.call(_, a),
                                          assetSize: C.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: p,
                                      })
                                : p;
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
                (0, n.jsx)(R, {
                    lastItem: r,
                    remainingCount: a,
                    giftRecipient: s,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let A = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        o = (0, f.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: c,
            wishlist: m,
            popularCollectiblesProducts: b,
            isFetchingWishlist: v,
            isValidatingPopularProducts: x,
            isFetchingPopularProducts: j,
            wishlistError: S,
        } = (0, C.ZL)(i),
        { wishlistItems: L } = (0, p.Z)({
            guildId: (0, h.ac)(),
            numWishlistItems: C.zL,
        }),
        P = (0, _.Z)({
            location: "Wishlist Banner",
            wishlist: m,
        }),
        N = r.useMemo(() => (P ? L : []), [P, L]),
        {
            displayItems: R,
            hasMoreItems: A,
            totalWishlistItemCount: G,
            wishlistItemCountToBeDisplayed: z,
        } = (0, C.UD)({
            wishlist: m,
            popularCollectiblesProducts: b,
            popularSocialLayerStorefrontItems: N,
            wishlistError: S,
        }),
        D = y.ZP.getName(i),
        {
            theme: U,
            primaryColor: F,
            secondaryColor: Y,
        } = (0, g.Z)({
            user: i,
            displayProfile: o,
        }),
        { profileThemeStyle: X, profileThemeClassName: K } = (0, I.Z)({
            theme: U,
            themeType: null,
            primaryColor: F,
            secondaryColor: Y,
        }),
        q = r.useCallback(() => {
            (0, w.openUserProfileModal)({
                userId: i.id,
                section: T.oh.WISHLIST,
            });
        }, [i.id]),
        Q = Z[r.useMemo(() => (z >= C.zL ? "FULL_WISHLIST" : z > 0 ? "MIXED" : "SHOP_ONLY"), [z])],
        J =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        V = v || x || j,
        $ = r.useMemo(() => (A ? R.slice(0, C.zL - 1) : R), [R, A]),
        ee = (0, k.g)($, i),
        ei = A ? R[C.zL - 1] : null,
        et = G - C.zL + 1,
        [en, er] = r.useState(!1),
        ea = r.useCallback(
            (e) => {
                if (e && !V && R.length > 0) {
                    let e = R.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    B.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: a,
                        product_lines: Array.from(
                            new Set(
                                R.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        er(!0);
                }
            },
            [V, R, i.id, a],
        ),
        el = (0, s.O)(ea, void 0, !V && !en);
    return null != S
        ? null
        : (0, n.jsxs)("div", {
              ref: el,
              className: l()(M.wishlistBanner, K),
              style: X,
              children: [
                  null != J &&
                      (0, n.jsx)("div", {
                          className: M.backgroundImage,
                          style: { backgroundImage: "url(".concat(J, ")") },
                      }),
                  (0, n.jsx)(d.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(E, {
                                      title: Q.title,
                                      subtitle: Q.getSubtitle(D),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          V || 0 === R.length
                                              ? (0, n.jsx)(H, {})
                                              : (0, n.jsx)(W, {
                                                    items: $,
                                                    hasOverflow: A,
                                                    overflowItem: ei,
                                                    overflowCount: et,
                                                    showIcons: Q.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: q,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: ee,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
