i.d(t, { Z: () => A }), i(388685);
var n = i(54381),
    r = i(473749),
    a = i(120356),
    l = i.n(a),
    s = i(907331),
    o = i(454399),
    c = i(28664),
    d = i(481060),
    u = i(906732),
    m = i(684263),
    _ = i(164670),
    h = i(917967),
    p = i(81939),
    f = i(687158),
    g = i(576635),
    I = i(213053),
    w = i(892001),
    v = i(835255),
    b = i(221300),
    x = i(796483),
    j = i(688192),
    S = i(372263),
    C = i(602733),
    L = i(541699),
    B = i(689201),
    k = i(626135),
    P = i(51144),
    y = i(474936),
    O = i(981631),
    T = i(228168),
    N = i(388032),
    M = i(694781);
let E = {
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
function Z(e) {
    let { title: t, subtitle: i, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: l()(M.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: M.wishlistBannerTitleContainer,
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
function H() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: N.intl.string(N.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: M.wishlistBannerGrid,
                children: Array.from({ length: C.zL }, (e, t) =>
                    (0, n.jsx)(S.Z, { cardSize: j.U.SMALL }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function R(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: r, onOpenWishlist: a } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: M.wishlistBannerListItem,
                  children: (0, n.jsx)(v.BO, {
                      item: t.item,
                      remainingCount: i,
                      onClick: a,
                      cardSize: j.U.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, L.Q)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: M.bundlePreviewBanner,
                                      children: (0, n.jsx)(m.U, {
                                          product: i,
                                          isPurchased: !1,
                                          isHighlighted: e,
                                          user: r,
                                      }),
                                  });
                              }
                              return (0, n.jsx)(b.Z, {
                                  item: t.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: j.U.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}
function W(e) {
    let {
        items: t,
        hasOverflow: i,
        overflowItem: r,
        overflowCount: a,
        showIcons: l,
        giftRecipient: s,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: _,
    } = e;
    return (0, n.jsxs)("ul", {
        className: M.wishlistBannerGrid,
        children: [
            t.map((e, t) => {
                let { item: i, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: M.wishlistBannerListItem,
                        children: ((e, t) => {
                            var i, r;
                            let { item: a, source: u } = e,
                                h = _[t],
                                p = (0, n.jsx)(x.Z, {
                                    item: a,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: j.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: l,
                                    onWishlistItemClick: m,
                                });
                            return h.shouldShow
                                ? null != h.title && null == h.body && null == h.renderIcon
                                    ? (0, n.jsx)(c.u, {
                                          text: h.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: p,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: h.title,
                                          body: null != (r = h.body) ? r : "",
                                          asset: null == (i = h.renderIcon) ? void 0 : i.call(h, a),
                                          assetSize: C.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: C.rq,
                                          children: p,
                                      })
                                : p;
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
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        o = (0, f.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: c,
            wishlist: m,
            popularCollectiblesProducts: v,
            isFetchingWishlist: b,
            isValidatingPopularProducts: x,
            isFetchingPopularProducts: j,
            wishlistError: S,
        } = (0, C.ZL)(t),
        { wishlistItems: L } = (0, p.Z)({
            guildId: (0, _.ac)(),
            numWishlistItems: C.zL,
        }),
        y = (0, h.Z)({
            location: "Wishlist Banner",
            wishlist: m,
        }),
        N = r.useMemo(() => (y ? L : []), [y, L]),
        {
            displayItems: R,
            hasMoreItems: A,
            totalWishlistItemCount: G,
            wishlistItemCountToBeDisplayed: D,
        } = (0, C.UD)({
            wishlist: m,
            popularCollectiblesProducts: v,
            popularSocialLayerStorefrontItems: N,
            wishlistError: S,
        }),
        z = P.ZP.getName(t),
        {
            theme: U,
            primaryColor: F,
            secondaryColor: Y,
        } = (0, g.Z)({
            user: t,
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
                userId: t.id,
                section: T.oh.WISHLIST,
            });
        }, [t.id]),
        Q = E[r.useMemo(() => (D >= C.zL ? "FULL_WISHLIST" : D > 0 ? "MIXED" : "SHOP_ONLY"), [D])],
        J =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        V = b || x || j,
        $ = r.useMemo(() => (A ? R.slice(0, C.zL - 1) : R), [R, A]),
        ee = (0, B.g)($, t),
        et = A ? R[C.zL - 1] : null,
        ei = G - C.zL + 1,
        [en, er] = r.useState(!1),
        ea = r.useCallback(
            (e) => {
                if (e && !V && R.length > 0) {
                    let e = R.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    k.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: a,
                        product_lines: Array.from(
                            new Set(
                                R.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        er(!0);
                }
            },
            [V, R, t.id, a],
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
                                  (0, n.jsx)(Z, {
                                      title: Q.title,
                                      subtitle: Q.getSubtitle(z),
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
                                                    overflowItem: et,
                                                    overflowCount: ei,
                                                    showIcons: Q.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: q,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: ee,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
