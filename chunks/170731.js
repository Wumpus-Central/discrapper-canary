t.d(i, { Z: () => H }), t(388685);
var n = t(54381),
    r = t(473749),
    a = t(120356),
    s = t.n(a),
    l = t(907331),
    o = t(454399),
    c = t(28664),
    d = t(481060),
    u = t(906732),
    m = t(687158),
    h = t(576635),
    _ = t(213053),
    p = t(892001),
    f = t(835255),
    g = t(221300),
    I = t(796483),
    b = t(688192),
    w = t(372263),
    C = t(376521),
    x = t(602733),
    j = t(541699),
    v = t(626135),
    S = t(51144),
    B = t(474936),
    k = t(981631),
    P = t(228168),
    L = t(388032),
    O = t(694781);
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
function N(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: s()(O.wishlistBannerHeader, r),
        children: (0, n.jsxs)("div", {
            className: O.wishlistBannerTitleContainer,
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
function M() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.nn4, { children: L.intl.string(L.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: O.wishlistBannerGrid,
                children: Array.from({ length: x.zL }, (e, i) =>
                    (0, n.jsx)(w.Z, { cardSize: b.U.SMALL }, "placeholder-".concat(i)),
                ),
            }),
        ],
    });
}
function T(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: a } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: O.wishlistBannerListItem,
                  children: (0, n.jsx)(f.BO, {
                      item: i.item,
                      remainingCount: t,
                      onClick: a,
                      cardSize: b.U.SMALL,
                      renderItemPreview: (e) =>
                          (0, j.Q)(i.item)
                              ? (0, n.jsx)(g.Z, {
                                    item: i.item,
                                    profileOwner: r,
                                    isHighlighted: e,
                                    cardSize: b.U.SMALL,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}
function R(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: r,
        overflowCount: a,
        showIcons: s,
        giftRecipient: l,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: h,
    } = e;
    return (0, n.jsxs)("ul", {
        className: O.wishlistBannerGrid,
        children: [
            i.map((e, i) => {
                let { item: t, source: r } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: O.wishlistBannerListItem,
                        children: ((e, i) => {
                            var t;
                            let { item: r, source: a } = e,
                                u = h[i],
                                _ = (0, n.jsx)(I.Z, {
                                    item: r,
                                    profileOwner: l,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: b.U.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: B.Wt.DM_CHANNEL_WISHLIST,
                                    source: a,
                                    showIcons: s,
                                    onWishlistItemClick: m,
                                });
                            return u.shouldShow
                                ? null != u.title && null == u.body && null == u.icon
                                    ? (0, n.jsx)(c.u, {
                                          text: u.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: x.rq,
                                          children: _,
                                      })
                                    : (0, n.jsx)(o.i, {
                                          title: u.title,
                                          body: null != (t = u.body) ? t : "",
                                          asset: u.icon,
                                          assetSize: 24,
                                          position: "top",
                                          asContainer: !0,
                                          delay: x.rq,
                                          children: _,
                                      })
                                : _;
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
                (0, n.jsx)(T, {
                    lastItem: r,
                    remainingCount: a,
                    giftRecipient: l,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let H = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        o = (0, m.ZP)(null == i ? void 0 : i.id),
        {
            defaultWishlistId: c,
            wishlist: f,
            popularCollectiblesProducts: g,
            isFetchingWishlist: I,
            isValidatingPopularProducts: b,
            isFetchingPopularProducts: w,
            wishlistError: j,
        } = (0, x.ZL)(i),
        {
            displayItems: B,
            hasMoreItems: L,
            totalWishlistItemCount: T,
            wishlistItemCountToBeDisplayed: H,
        } = (0, x.UD)({
            wishlist: f,
            popularCollectiblesProducts: g,
            wishlistError: j,
        }),
        G = S.ZP.getName(i),
        {
            theme: E,
            primaryColor: A,
            secondaryColor: W,
        } = (0, h.Z)({
            user: i,
            displayProfile: o,
        }),
        { profileThemeStyle: Z, profileThemeClassName: z } = (0, _.Z)({
            theme: E,
            themeType: null,
            primaryColor: A,
            secondaryColor: W,
        }),
        D = r.useCallback(() => {
            (0, p.openUserProfileModal)({
                userId: i.id,
                section: P.oh.WISHLIST,
            });
        }, [i.id]),
        U = y[r.useMemo(() => (H >= x.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY"), [H])],
        F =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        Y = I || b || w,
        X = L ? B.slice(0, x.zL - 1) : B,
        q = r.useMemo(() => {
            let e = X.map((e) => {
                let { item: i, source: t } = e;
                return {
                    productLine: i.skuProductLine,
                    source: t,
                };
            });
            return (0, C.z)(e, G);
        }, [X, G]),
        K = L ? B[x.zL - 1] : null,
        Q = T - x.zL + 1,
        [J, V] = r.useState(!1),
        $ = r.useCallback(
            (e) => {
                if (e && !Y && B.length > 0) {
                    let e = B.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    v.default.track(k.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: a,
                        product_lines: Array.from(
                            new Set(
                                B.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        V(!0);
                }
            },
            [Y, B, i.id, a],
        ),
        ee = (0, l.O)($, void 0, !Y && !J);
    return null != j
        ? null
        : (0, n.jsxs)("div", {
              ref: ee,
              className: s()(O.wishlistBanner, z),
              style: Z,
              children: [
                  null != F &&
                      (0, n.jsx)("div", {
                          className: O.backgroundImage,
                          style: { backgroundImage: "url(".concat(F, ")") },
                      }),
                  (0, n.jsx)(d.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(N, {
                                      title: U.title,
                                      subtitle: U.getSubtitle(G),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          Y || 0 === B.length
                                              ? (0, n.jsx)(M, {})
                                              : (0, n.jsx)(R, {
                                                    items: X,
                                                    hasOverflow: L,
                                                    overflowItem: K,
                                                    overflowCount: Q,
                                                    showIcons: U.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: c,
                                                    onOpenWishlist: D,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: q,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
