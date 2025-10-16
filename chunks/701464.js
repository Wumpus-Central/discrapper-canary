n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(687158),
    d = n(576635),
    c = n(213053),
    C = n(892001),
    u = n(835255),
    p = n(602733),
    h = n(51144),
    _ = n(973007),
    m = n(474936),
    f = n(228168),
    x = n(388032),
    g = n(391763);
function j(e) {
    let { giftRecipient: t } = e,
        n = (0, o.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: a,
            wishlist: _,
            popularProducts: j,
            isFetchingWishlist: b,
            isFetchingShopHome: v,
            isFetchingCategories: S,
            wishlistError: L,
            fetchShopHomeError: y,
        } = (0, p.ZL)(t),
        { displayItems: I, wishlistLength: P } = (0, p.UD)({
            wishlist: _,
            popularProducts: j,
            wishlistError: L,
            fetchShopHomeError: y,
        }),
        {
            theme: w,
            primaryColor: E,
            secondaryColor: O,
        } = (0, d.Z)({
            user: t,
            displayProfile: n,
        }),
        { profileThemeStyle: T, profileThemeClassName: k } = (0, c.Z)({
            theme: w,
            themeType: null,
            primaryColor: E,
            secondaryColor: O,
        }),
        N = (function (e) {
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
        })({}, T),
        A = i.useCallback(() => {
            (0, C.openUserProfileModal)({
                userId: t.id,
                section: f.oh.WISHLIST,
            });
        }, [t.id]);
    if (null != L || null != y) return null;
    let Z = h.ZP.getName(t),
        M =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        R = b || v || S;
    return (0, r.jsxs)("div", {
        className: l()(g.wishlistBanner, k),
        style: N,
        children: [
            null != M &&
                (0, r.jsx)("div", {
                    className: g.backgroundImage,
                    style: { backgroundImage: "url(".concat(M, ")") },
                }),
            (0, r.jsx)(s.f6W, {
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
                                            (0, r.jsx)(s.Heading, {
                                                variant: "display-md",
                                                className: g.wishlistBannerTitle,
                                                children:
                                                    P > 0 ? x.intl.string(x.t["7lZ31N"]) : x.intl.string(x.t.pWG4zc),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children:
                                                    P > 0
                                                        ? x.intl.format(x.t.BjEX39, { username: Z })
                                                        : x.intl.format(x.t.dIDKgo, { username: Z }),
                                            }),
                                        ],
                                    }),
                                    P >= p.zL &&
                                        (0, r.jsx)(s.Button, {
                                            variant: "overlay-secondary",
                                            text: x.intl.format(x.t["8uYD+P"], { username: Z }),
                                            onClick: A,
                                            disabled: (null == t ? void 0 : t.id) == null,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e,
                                children:
                                    R || 0 === I.length
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(s.nn4, { children: x.intl.string(x.t.pfChQk) }),
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
                                              children: I.map((e) => {
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
                                                              showIcons: P > 0 && P < p.zL,
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
                    (0, r.jsx)(_.jB, {
                        onClick: () => t(m.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(_.j8, {
                        onClick: () => t(m.Si.TIER_0),
                        isGift: n,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, r.jsx)(j, { giftRecipient: l }),
        ],
    });
};
