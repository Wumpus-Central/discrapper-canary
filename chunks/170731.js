i.d(t, { Z: () => T }), i(388685);
var r = i(54381),
    n = i(473749),
    a = i(120356),
    l = i.n(a),
    s = i(907331),
    o = i(481060),
    c = i(906732),
    d = i(687158),
    u = i(576635),
    m = i(213053),
    f = i(892001),
    h = i(835255),
    p = i(221300),
    g = i(796483),
    b = i(688192),
    _ = i(372263),
    I = i(602733),
    O = i(541699),
    j = i(626135),
    w = i(51144),
    v = i(474936),
    S = i(981631),
    x = i(228168),
    P = i(388032),
    C = i(694781);
let y = {
    FULL_WISHLIST: {
        title: P.intl.string(P.t["7lZ31J"]),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
};
function k(e) {
    let { title: t, subtitle: i, themeClass: n } = e;
    return (0, r.jsx)("div", {
        className: l()(C.wishlistBannerHeader, n),
        children: (0, r.jsxs)("div", {
            className: C.wishlistBannerTitleContainer,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: C.wishlistBannerTitle,
                    children: t,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: i,
                }),
            ],
        }),
    });
}
function L() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.nn4, { children: P.intl.string(P.t.pfChQr) }),
            (0, r.jsx)("div", {
                className: C.wishlistBannerGrid,
                children: Array.from({ length: I.zL }, (e, t) =>
                    (0, r.jsx)(_.Z, { cardSize: b.U.SMALL }, "placeholder-".concat(t)),
                ),
            }),
        ],
    });
}
function N(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: n, onOpenWishlist: a } = e;
    return null == t
        ? null
        : (0, r.jsx)(
              "li",
              {
                  className: C.wishlistBannerListItem,
                  children: (0, r.jsx)(h.BO, {
                      item: t.item,
                      remainingCount: i,
                      onClick: a,
                      cardSize: b.U.SMALL,
                      renderItemPreview: (e) =>
                          (0, O.Q)(t.item)
                              ? (0, r.jsx)(p.Z, {
                                    item: t.item,
                                    profileOwner: n,
                                    isHighlighted: e,
                                    cardSize: b.U.SMALL,
                                })
                              : null,
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}
function B(e) {
    let {
        items: t,
        hasOverflow: i,
        overflowItem: n,
        overflowCount: a,
        showIcons: l,
        giftRecipient: s,
        defaultWishlistId: o,
        onOpenWishlist: c,
        onWishlistItemClick: d,
    } = e;
    return (0, r.jsxs)("ul", {
        className: C.wishlistBannerGrid,
        children: [
            t.map((e) => {
                let { item: t, source: i } = e;
                return (0, r.jsx)(
                    "li",
                    {
                        className: C.wishlistBannerListItem,
                        children: (0, r.jsx)(g.Z, {
                            item: t,
                            profileOwner: s,
                            wishlistId: o,
                            isOwner: !1,
                            cardSize: b.U.SMALL,
                            showOverlayButton: !1,
                            giftingOrigin: v.Wt.DM_CHANNEL_WISHLIST,
                            source: i,
                            showIcons: l,
                            onWishlistItemClick: d,
                        }),
                    },
                    t.skuId,
                );
            }),
            i &&
                (0, r.jsx)(N, {
                    lastItem: n,
                    remainingCount: a,
                    giftRecipient: s,
                    onOpenWishlist: c,
                }),
        ],
    });
}
let T = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        h = (0, d.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: p,
            wishlist: g,
            popularCollectiblesProducts: b,
            isFetchingWishlist: _,
            isValidatingPopularProducts: O,
            isFetchingPopularProducts: v,
            wishlistError: P,
        } = (0, I.ZL)(t),
        {
            displayItems: N,
            hasMoreItems: T,
            totalWishlistItemCount: E,
            wishlistItemCountToBeDisplayed: M,
        } = (0, I.UD)({
            wishlist: g,
            popularCollectiblesProducts: b,
            wishlistError: P,
        }),
        {
            theme: R,
            primaryColor: Z,
            secondaryColor: A,
        } = (0, u.Z)({
            user: t,
            displayProfile: h,
        }),
        { profileThemeStyle: H, profileThemeClassName: W } = (0, m.Z)({
            theme: R,
            themeType: null,
            primaryColor: Z,
            secondaryColor: A,
        }),
        G = n.useCallback(() => {
            (0, f.openUserProfileModal)({
                userId: t.id,
                section: x.oh.WISHLIST,
            });
        }, [t.id]),
        U = y[n.useMemo(() => (M >= I.zL ? "FULL_WISHLIST" : M > 0 ? "MIXED" : "SHOP_ONLY"), [M])],
        D = w.ZP.getName(t),
        z =
            null == h
                ? void 0
                : h.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        F = _ || O || v,
        Y = T ? N.slice(0, I.zL - 1) : N,
        Q = T ? N[I.zL - 1] : null,
        q = E - I.zL + 1,
        [K, X] = n.useState(!1),
        V = n.useCallback(
            (e) => {
                if (e && !F && N.length > 0) {
                    let e = N.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    j.default.track(S.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: a,
                        product_lines: Array.from(
                            new Set(
                                N.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        X(!0);
                }
            },
            [F, N, t.id, a],
        ),
        J = (0, s.O)(V, void 0, !F && !K);
    return null != P
        ? null
        : (0, r.jsxs)("div", {
              ref: J,
              className: l()(C.wishlistBanner, W),
              style: H,
              children: [
                  null != z &&
                      (0, r.jsx)("div", {
                          className: C.backgroundImage,
                          style: { backgroundImage: "url(".concat(z, ")") },
                      }),
                  (0, r.jsx)(o.f6W, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(k, {
                                      title: U.title,
                                      subtitle: U.getSubtitle(D),
                                      themeClass: e,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: e,
                                      children:
                                          F || 0 === N.length
                                              ? (0, r.jsx)(L, {})
                                              : (0, r.jsx)(B, {
                                                    items: Y,
                                                    hasOverflow: T,
                                                    overflowItem: Q,
                                                    overflowCount: q,
                                                    showIcons: U.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: p,
                                                    onOpenWishlist: G,
                                                    onWishlistItemClick: i,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
