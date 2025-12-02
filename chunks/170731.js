t.d(i, { Z: () => W }), t(388685);
var n = t(54381),
    r = t(473749),
    a = t(120356),
    l = t.n(a),
    s = t(907331),
    o = t(454399),
    c = t(28664),
    d = t(481060),
    u = t(906732),
    m = t(164670),
    h = t(917967),
    _ = t(81939),
    p = t(687158),
    f = t(576635),
    g = t(213053),
    I = t(892001),
    b = t(835255),
    w = t(221300),
    C = t(796483),
    x = t(688192),
    j = t(372263),
    v = t(602733),
    S = t(541699),
    k = t(689201),
    B = t(626135),
    L = t(51144),
    P = t(474936),
    O = t(981631),
    M = t(228168),
    y = t(388032),
    N = t(694781);
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
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: l()(N.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: N.wishlistBannerTitleContainer,
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
function R() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: y.intl.string(y.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: N.wishlistBannerGrid,
                children: Array.from({ length: v.zL }, (e, i) =>
                    (0, n.jsx)(j.Z, { cardSize: x.U.SMALL }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function E(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: a } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: N.wishlistBannerListItem,
                  children: (0, n.jsx)(b.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: a,
                      cardSize: x.U.SMALL,
                      renderItemPreview: (e) =>
                          (0, S.Q)(i.item)
                              ? (0, n.jsx)(w.Z, {
                                    item: i.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    cardSize: x.U.SMALL,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function H(e) {
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
        className: N.wishlistBannerGrid,
        children: [
            i.map((e, i) => {
                let { item: t, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: N.wishlistBannerListItem,
                        children: ((e, i) => {
                            var t, r;
                            let { item: a, source: u } = e,
                                _ = h[i],
                                p = (0, n.jsx)(C.Z, {
                                    item: a,
                                    profileOwner: s,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: x.U.SMALL,
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
                                          delay: v.rq,
                                          children: p,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: _.title,
                                          body: null != (r = _.body) ? r : "",
                                          asset: null == (t = _.renderIcon) ? void 0 : t.call(_, a),
                                          assetSize: v.EU,
                                          position: "top",
                                          asContainer: !0,
                                          delay: v.rq,
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
                (0, n.jsx)(E, {
                    lastItem: r,
                    remainingCount: a,
                    giftRecipient: s,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let W = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        o = (0, p.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: c,
            wishlist: b,
            popularCollectiblesProducts: w,
            isFetchingWishlist: C,
            isValidatingPopularProducts: x,
            isFetchingPopularProducts: j,
            wishlistError: S,
        } = (0, v.ZL)(i),
        { wishlistItems: P } = (0, _.Z)({
            guildId: (0, m.ac)(),
            numWishlistItems: v.zL,
        }),
        y = (0, h.Z)({
            location: "Wishlist Banner",
            wishlist: b,
        }),
        E = r.useMemo(() => (y ? P : []), [y, P]),
        {
            displayItems: W,
            hasMoreItems: G,
            totalWishlistItemCount: A,
            wishlistItemCountToBeDisplayed: z,
        } = (0, v.UD)({
            wishlist: b,
            popularCollectiblesProducts: w,
            popularSocialLayerStorefrontItems: E,
            wishlistError: S,
        }),
        D = L.ZP.getName(i),
        {
            theme: U,
            primaryColor: F,
            secondaryColor: Y,
        } = (0, f.Z)({
            user: i,
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
                userId: i.id,
                section: M.oh.WISHLIST,
            });
        }, [i.id]),
        Q = T[r.useMemo(() => (z >= v.zL ? "FULL_WISHLIST" : z > 0 ? "MIXED" : "SHOP_ONLY"), [z])],
        J =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        V = C || x || j,
        $ = r.useMemo(() => (G ? W.slice(0, v.zL - 1) : W), [W, G]),
        ee = (0, k.g)($, i),
        ei = G ? W[v.zL - 1] : null,
        et = A - v.zL + 1,
        [en, er] = r.useState(!1),
        ea = r.useCallback(
            (e) => {
                if (e && !V && W.length > 0) {
                    let e = W.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    B.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: a,
                        product_lines: Array.from(
                            new Set(
                                W.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        er(!0);
                }
            },
            [V, W, i.id, a],
        ),
        el = (0, s.O)(ea, void 0, !V && !en);
    return null != S
        ? null
        : (0, n.jsxs)("div", {
              ref: el,
              className: l()(N.wishlistBanner, q),
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
                                      subtitle: Q.getSubtitle(D),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          V || 0 === W.length
                                              ? (0, n.jsx)(R, {})
                                              : (0, n.jsx)(H, {
                                                    items: $,
                                                    hasOverflow: G,
                                                    overflowItem: ei,
                                                    overflowCount: et,
                                                    showIcons: Q.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: K,
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
