n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(687158),
    d = n(576635),
    C = n(213053),
    c = n(892001),
    u = n(835255),
    p = n(796483),
    _ = n(688192),
    h = n(372263),
    m = n(602733),
    f = n(51144),
    x = n(973007),
    g = n(474936),
    j = n(228168),
    b = n(388032),
    L = n(391763);
function y(e) {
    let { giftRecipient: t } = e,
        n = (0, s.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: a,
            wishlist: x,
            popularCollectiblesProducts: y,
            isFetchingWishlist: v,
            isFetchingShopHome: S,
            isFetchingCategories: w,
            wishlistError: I,
            fetchShopHomeError: O,
        } = (0, m.ZL)(t),
        {
            displayItems: P,
            hasMoreItems: E,
            totalWishlistItemCount: T,
            displayItemsFromWishlistCount: k,
        } = (0, m.UD)({
            wishlist: x,
            popularCollectiblesProducts: y,
            wishlistError: I,
            fetchShopHomeError: O,
        }),
        {
            theme: M,
            primaryColor: A,
            secondaryColor: B,
        } = (0, d.Z)({
            user: t,
            displayProfile: n,
        }),
        { profileThemeStyle: Z, profileThemeClassName: N } = (0, C.Z)({
            theme: M,
            themeType: null,
            primaryColor: A,
            secondaryColor: B,
        }),
        R = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, Z),
        F = i.useCallback(() => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                section: j.oh.WISHLIST,
            });
        }, [t.id]);
    if (null != I || null != O) return null;
    let G = f.ZP.getName(t),
        H =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        U = v || S || w;
    return (0, r.jsxs)("div", {
        className: l()(L.wishlistBanner, N),
        style: R,
        children: [
            null != H &&
                (0, r.jsx)("div", {
                    className: L.backgroundImage,
                    style: { backgroundImage: "url(".concat(H, ")") },
                }),
            (0, r.jsx)(o.f6W, {
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: l()(L.wishlistBannerHeader, e),
                                children: (0, r.jsxs)("div", {
                                    className: L.wishlistBannerTitleContainer,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            variant: "display-md",
                                            className: L.wishlistBannerTitle,
                                            children:
                                                k >= m.zL ? b.intl.string(b.t["7lZ31J"]) : b.intl.string(b.t.SK5rmi),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-sm/medium",
                                            children:
                                                k >= m.zL
                                                    ? b.intl.format(b.t.BjEX38, { username: G })
                                                    : k > 0
                                                      ? b.intl.format(b.t.dIDKgi, { username: G })
                                                      : b.intl.format(b.t.wyMp1j, { username: G }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: e,
                                children:
                                    U || 0 === P.length
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(o.nn4, { children: b.intl.string(b.t.pfChQr) }),
                                                  (0, r.jsx)("div", {
                                                      className: L.wishlistBannerGrid,
                                                      children: Array.from({ length: m.zL }, (e, t) =>
                                                          (0, r.jsx)(
                                                              h.Z,
                                                              { surface: _.Y.GIFTING_FLOW },
                                                              "placeholder-".concat(t),
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("ul", {
                                              className: L.wishlistBannerGrid,
                                              children: [
                                                  (E ? P.slice(0, m.zL - 1) : P).map((e) => {
                                                      let { item: n, source: i } = e;
                                                      return (0, r.jsx)(
                                                          "li",
                                                          {
                                                              className: L.wishlistBannerListItem,
                                                              children: (0, r.jsx)(p.Z, {
                                                                  item: n,
                                                                  profileOwner: t,
                                                                  wishlistId: a,
                                                                  isOwner: !1,
                                                                  surface: _.Y.GIFTING_FLOW,
                                                                  giftingOrigin:
                                                                      i === m.lr.WISHLIST
                                                                          ? g.Wt.DM_CHANNEL_WISHLIST
                                                                          : g.Wt.DM_CHANNEL,
                                                                  collectibleSource: i,
                                                                  showIcons: k > 0 && k < m.zL,
                                                              }),
                                                          },
                                                          n.skuId,
                                                      );
                                                  }),
                                                  E &&
                                                      (0, r.jsx)(
                                                          "li",
                                                          {
                                                              className: L.wishlistBannerListItem,
                                                              children: (0, r.jsx)(u.Uw, {
                                                                  item: P[m.zL - 1].item,
                                                                  profileOwner: t,
                                                                  remainingCount: T - m.zL + 1,
                                                                  onClick: F,
                                                                  size: "sm",
                                                                  surface: _.Y.GIFTING_FLOW,
                                                              }),
                                                          },
                                                          "overflow-".concat(P[m.zL - 1].item.skuId),
                                                      ),
                                              ],
                                          }),
                            }),
                        ],
                    }),
            }),
        ],
    });
}
let v = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: a, giftRecipient: l } = e;
    return (0, r.jsxs)("div", {
        className: L.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: L.cardsRow,
                children: [
                    (0, r.jsx)(x.jB, {
                        onClick: () => t(g.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(x.j8, {
                        onClick: () => t(g.Si.TIER_0),
                        isGift: n,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, r.jsx)(y, { giftRecipient: l }),
        ],
    });
};
