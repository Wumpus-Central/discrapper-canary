n.d(t, { Z: () => L });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(687158),
    d = n(576635),
    C = n(213053),
    c = n(892001),
    u = n(796483),
    p = n(688192),
    _ = n(372263),
    h = n(602733),
    m = n(51144),
    f = n(973007),
    x = n(474936),
    g = n(228168),
    j = n(388032),
    b = n(391763);
function y(e) {
    let { giftRecipient: t } = e,
        n = (0, s.ZP)(null == t ? void 0 : t.id),
        {
            defaultWishlistId: a,
            wishlist: f,
            popularCollectiblesProducts: y,
            isFetchingWishlist: L,
            isFetchingShopHome: v,
            isFetchingCategories: S,
            wishlistError: w,
            fetchShopHomeError: I,
        } = (0, h.ZL)(t),
        { displayItems: O, wishlistLength: P } = (0, h.UD)({
            wishlist: f,
            popularCollectiblesProducts: y,
            wishlistError: w,
            fetchShopHomeError: I,
        }),
        {
            theme: E,
            primaryColor: T,
            secondaryColor: k,
        } = (0, d.Z)({
            user: t,
            displayProfile: n,
        }),
        { profileThemeStyle: M, profileThemeClassName: A } = (0, C.Z)({
            theme: E,
            themeType: null,
            primaryColor: T,
            secondaryColor: k,
        }),
        B = (function (e) {
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
        })({}, M),
        Z = i.useCallback(() => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                section: g.oh.WISHLIST,
            });
        }, [t.id]);
    if (null != w || null != I) return null;
    let N = m.ZP.getName(t),
        R =
            null == n
                ? void 0
                : n.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        F = L || v || S;
    return (0, r.jsxs)("div", {
        className: l()(b.wishlistBanner, A),
        style: B,
        children: [
            null != R &&
                (0, r.jsx)("div", {
                    className: b.backgroundImage,
                    style: { backgroundImage: "url(".concat(R, ")") },
                }),
            (0, r.jsx)(o.f6W, {
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: l()(b.wishlistBannerHeader, e),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: b.wishlistBannerTitleContainer,
                                        children: [
                                            (0, r.jsx)(o.Heading, {
                                                variant: "display-md",
                                                className: b.wishlistBannerTitle,
                                                children:
                                                    P >= h.zL
                                                        ? j.intl.string(j.t["7lZ31J"])
                                                        : j.intl.string(j.t.SK5rmi),
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                children:
                                                    P >= h.zL
                                                        ? j.intl.format(j.t.BjEX38, { username: N })
                                                        : P >= 1
                                                          ? j.intl.format(j.t.dIDKgi, { username: N })
                                                          : j.intl.format(j.t.wyMp1j, { username: N }),
                                            }),
                                        ],
                                    }),
                                    P >= h.zL &&
                                        (0, r.jsx)(o.Button, {
                                            variant: "overlay-secondary",
                                            text: j.intl.format(j.t["8uYD+I"], { username: N }),
                                            onClick: Z,
                                            disabled: (null == t ? void 0 : t.id) == null,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e,
                                children:
                                    F || 0 === O.length
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(o.nn4, { children: j.intl.string(j.t.pfChQr) }),
                                                  (0, r.jsx)("div", {
                                                      className: b.wishlistBannerGrid,
                                                      children: Array.from({ length: h.zL }, (e, t) =>
                                                          (0, r.jsx)(
                                                              _.Z,
                                                              { surface: p.Y.GIFTING_FLOW },
                                                              "placeholder-".concat(t),
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsx)("ul", {
                                              className: b.wishlistBannerGrid,
                                              style: {
                                                  listStyle: "none",
                                                  margin: 0,
                                                  padding: 0,
                                              },
                                              children: O.map((e) => {
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
                                                              surface: p.Y.GIFTING_FLOW,
                                                              giftingOrigin:
                                                                  i === h.lr.WISHLIST
                                                                      ? x.Wt.DM_CHANNEL_WISHLIST
                                                                      : x.Wt.DM_CHANNEL,
                                                              collectibleSource: i,
                                                              showIcons: P > 0 && P < h.zL,
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
let L = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: a, giftRecipient: l } = e;
    return (0, r.jsxs)("div", {
        className: b.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: b.cardsRow,
                children: [
                    (0, r.jsx)(f.jB, {
                        onClick: () => t(x.Si.TIER_2),
                        isGift: n,
                        priceOptions: i,
                        showPromotionalGiftBanner: a,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(f.j8, {
                        onClick: () => t(x.Si.TIER_0),
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
