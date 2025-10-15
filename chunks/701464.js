n.d(t, { Z: () => b });
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
    p = n(602733),
    _ = n(51144),
    h = n(973007),
    m = n(474936),
    f = n(228168),
    x = n(388032),
    g = n(391763);
function j(e) {
    let { giftRecipient: t } = e,
        n = (0, s.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: a,
            wishlist: h,
            popularProducts: j,
            isFetchingWishlist: b,
            isFetchingShopHome: y,
            isFetchingCategories: L,
            wishlistError: v,
            fetchShopHomeError: S,
        } = (0, p.ZL)(t),
        { displayItems: w, wishlistLength: O } = (0, p.UD)({
            wishlist: h,
            defaultWishlistId: a,
            popularProducts: j,
            wishlistError: v,
            fetchShopHomeError: S,
        }),
        {
            theme: I,
            primaryColor: P,
            secondaryColor: E,
        } = (0, d.Z)({
            user: t,
            displayProfile: n,
        }),
        { profileThemeStyle: k, profileThemeClassName: T } = (0, C.Z)({
            theme: I,
            themeType: null,
            primaryColor: P,
            secondaryColor: E,
        }),
        M = (function (e) {
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
        })({ width: 713 }, k),
        A = i.useCallback(() => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                section: f.oh.WISHLIST,
            });
        }, [t.id]);
    if (null == a || null != v || null != S) return null;
    let B = _.ZP.getName(t),
        Z =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        N = b || y || L;
    return (0, r.jsxs)("div", {
        className: l()(g.wishlistBanner, T),
        style: M,
        children: [
            null != Z &&
                (0, r.jsx)("div", {
                    className: g.backgroundImage,
                    style: { backgroundImage: "url(".concat(Z, ")") },
                }),
            (0, r.jsx)(o.f6W, {
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: l()(g.wishlistBannerHeader, e),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: g.wishlistBannerTitleContainer,
                                        children: [
                                            (0, r.jsx)(o.Heading, {
                                                variant: "display-md",
                                                className: g.wishlistBannerTitle,
                                                children:
                                                    O > 0 ? x.intl.string(x.t["7lZ31N"]) : x.intl.string(x.t.pWG4zc),
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                children:
                                                    O > 0
                                                        ? x.intl.format(x.t.BjEX39, { username: B })
                                                        : x.intl.format(x.t.dIDKgo, { username: B }),
                                            }),
                                        ],
                                    }),
                                    O >= p.zL &&
                                        (0, r.jsx)(o.Button, {
                                            variant: "overlay-secondary",
                                            text: x.intl.format(x.t["8uYD+P"], { username: B }),
                                            onClick: A,
                                            disabled: (null == t ? void 0 : t.id) == null,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e,
                                children:
                                    N || 0 === w.length
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(o.nn4, { children: x.intl.string(x.t.pfChQk) }),
                                                  (0, r.jsx)("div", {
                                                      className: g.wishlistBannerGrid,
                                                      children: Array.from({ length: p.zL }, (e, t) =>
                                                          (0, r.jsx)(u.w, { size: "sm" }, "placeholder-".concat(t)),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsx)("ul", {
                                              className: g.wishlistBannerGrid,
                                              style: {
                                                  listStyle: "none",
                                                  margin: 0,
                                                  padding: 0,
                                              },
                                              children: w.map((e) => {
                                                  let { item: n, source: i } = e;
                                                  return (0, r.jsx)(
                                                      "li",
                                                      {
                                                          style: { display: "contents" },
                                                          children: (0, r.jsx)(u.Z, {
                                                              item: n,
                                                              profileOwner: t,
                                                              wishlistId: a,
                                                              isOwner: !1,
                                                              size: "sm",
                                                              giftingOrigin:
                                                                  i === p.lr.WISHLIST
                                                                      ? m.Wt.DM_CHANNEL_WISHLIST
                                                                      : m.Wt.DM_CHANNEL,
                                                              collectibleSource: i,
                                                              showIcons: O < p.zL,
                                                              disableHoverEffects: !0,
                                                          }),
                                                      },
                                                      n.skuId,
                                                  );
                                              }),
                                          }),
                            }),
                        ],
                    }),
            }),
        ],
    });
}
let b = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: a, giftRecipient: l } = e;
    return (0, r.jsxs)("div", {
        className: g.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: g.cardsRow,
                children: [
                    (0, r.jsx)(h.jB, {
                        onClick: () => t(m.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(h.j8, {
                        onClick: () => t(m.Si.TIER_0),
                        isGift: n,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                    }),
                ],
            }),
            (0, r.jsx)(j, { giftRecipient: l }),
        ],
    });
};
