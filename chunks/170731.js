i.d(t, { Z: () => H }), i(388685);
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
    h = i(917967),
    _ = i(81939),
    f = i(687158),
    p = i(576635),
    g = i(213053),
    I = i(892001),
    b = i(835255),
    w = i(221300),
    v = i(796483),
    C = i(688192),
    x = i(372263),
    j = i(602733),
    S = i(541699),
    k = i(689201),
    B = i(626135),
    L = i(51144),
    P = i(474936),
    M = i(981631),
    O = i(228168),
    y = i(388032),
    N = i(694781);
let T = {
    FULL_WISHLIST: {
        title: y.intl.string(y.t["7lZ31J"]),
        getSubtitle: (e) => y.intl.formatToPlainString(y.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: y.intl.string(y.t.SK5rmi),
        getSubtitle: (e) => y.intl.formatToPlainString(y.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: y.intl.string(y.t.SK5rmi),
        getSubtitle: (e) => y.intl.formatToPlainString(y.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function Z(e) {
    let { title: t, subtitle: i, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(N.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: N.wishlistBannerTitleContainer,
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
function E() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: y.intl.string(y.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: N.wishlistBannerGrid,
                children: Array.from({ length: j.zL }, (e, t) =>
                    (0, n.jsx)(x.Z, { cardSize: C.U.SMALL }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function R(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: r, onOpenWishlist: l } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: N.wishlistBannerListItem,
                  children: (0, n.jsx)(b.BO, {
                      item: t.item,
                      remainingCount: i,
                      onClick: l,
                      cardSize: C.U.SMALL,
                      renderItemPreview: (e) =>
                          (0, S.Q)(t.item)
                              ? (0, n.jsx)(w.Z, {
                                    item: t.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    cardSize: C.U.SMALL,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}
function A(e) {
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
        className: N.wishlistBannerGrid,
        children: [
            t.map((e, t) => {
                let { item: i, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: N.wishlistBannerListItem,
                        children: ((e, t) => {
                            var i, r;
                            let { item: l, source: u } = e,
                                _ = h[t],
                                f = (0, n.jsx)(v.Z, {
                                    item: l,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: C.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: P.Wt.DM_CHANNEL_WISHLIST,
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
                (0, n.jsx)(R, {
                    lastItem: r,
                    remainingCount: l,
                    giftRecipient: s,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let H = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: l } = (0, u.ZP)(),
        o = (0, f.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: c,
            wishlist: b,
            popularCollectiblesProducts: w,
            isFetchingWishlist: v,
            isValidatingPopularProducts: C,
            isFetchingPopularProducts: x,
            wishlistError: S,
        } = (0, j.ZL)(t),
        { wishlistItems: P } = (0, _.Z)({
            guildId: (0, m.ac)(),
            numWishlistItems: j.zL,
        }),
        y = (0, h.Z)({
            location: "Wishlist Banner",
            wishlist: b,
        }),
        R = r.useMemo(() => (y ? P : []), [y, P]),
        {
            displayItems: H,
            hasMoreItems: W,
            totalWishlistItemCount: G,
            wishlistItemCountToBeDisplayed: D,
        } = (0, j.UD)({
            wishlist: b,
            popularCollectiblesProducts: w,
            popularSocialLayerStorefrontItems: R,
            wishlistError: S,
        }),
        z = L.ZP.getName(t),
        {
            theme: U,
            primaryColor: F,
            secondaryColor: Y,
        } = (0, p.Z)({
            user: t,
            displayProfile: o,
        }),
        { profileThemeStyle: X, profileThemeClassName: q } = (0, g.Z)({
            theme: U,
            themeType: null,
            primaryColor: F,
            secondaryColor: Y,
        }),
        K = r.useCallback(() => {
            (0, I.openUserProfileModal)({
                userId: t.id,
                section: O.oh.WISHLIST,
            });
        }, [t.id]),
        Q = T[r.useMemo(() => (D >= j.zL ? "FULL_WISHLIST" : D > 0 ? "MIXED" : "SHOP_ONLY"), [D])],
        J =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        V = v || C || x,
        $ = r.useMemo(() => (W ? H.slice(0, j.zL - 1) : H), [H, W]),
        ee = (0, k.g)($, t),
        et = W ? H[j.zL - 1] : null,
        ei = G - j.zL + 1,
        [en, er] = r.useState(!1),
        el = r.useCallback(
            (e) => {
                if (e && !V && H.length > 0) {
                    let e = H.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    B.default.track(M.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: l,
                        product_lines: Array.from(
                            new Set(
                                H.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        er(!0);
                }
            },
            [V, H, t.id, l],
        ),
        ea = (0, s.O)(el, void 0, !V && !en);
    return null != S
        ? null
        : (0, n.jsxs)("div", {
              ref: ea,
              className: a()(N.wishlistBanner, q),
              style: X,
              children: [
                  null != J &&
                      (0, n.jsx)("div", {
                          className: N.backgroundImage,
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
                                          V || 0 === H.length
                                              ? (0, n.jsx)(E, {})
                                              : (0, n.jsx)(A, {
                                                    items: $,
                                                    hasOverflow: W,
                                                    overflowItem: et,
                                                    overflowCount: ei,
                                                    showIcons: Q.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: K,
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
