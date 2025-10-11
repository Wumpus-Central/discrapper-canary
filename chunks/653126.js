n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(622535),
    a = n(481060),
    c = n(100527),
    u = n(104505),
    d = n(994587),
    g = n(297651),
    f = n(993222),
    p = n(932083),
    C = n(719075),
    h = n(558261),
    _ = n(819882),
    m = n(786040),
    b = n(659755),
    E = n(268865),
    v = n(29121),
    S = n(215023),
    O = n(213301);
let x = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: x,
                hidePrice: y,
                hidePrimaryCTA: j,
                hideSecondaryCTA: k,
                badgeOverride: T,
                onClickCard: L,
                onClickPrimaryCTA: I,
                onClickSecondaryCTA: B,
                onMouseEnter: A,
                onMouseLeave: N,
                onFocus: P,
                onBlur: R,
                primaryCTAText: Z,
                secondaryCTAIcon: w,
                productNameClassName: H,
                badgeClassName: F,
                cardClassName: D,
                prioritizedCurrency: M,
                onClickAnalytics: W,
            } = e,
            U = (0, d.Nd)(),
            V = null == U ? void 0 : U.tab,
            z = (0, v.zQ)(t),
            G = l.useRef(null),
            { isHoveringOrFocusing: K } = (0, u.Z)(G),
            { handleCardVisibilityChange: Y } = (0, g.E)(t.skuId, V === S.AW.CATALOG ? "full" : V),
            q = (0, m.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD, W),
            [Q, J] = (0, m.SS)(t),
            X = null != J && !x,
            $ = !j || !k,
            ee = !y || X,
            et = $ || X;
        return (0, r.jsx)(o.$, {
            innerRef: G,
            onChange: Y,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: O.productCardHoverContainer,
                children: (0, r.jsx)(a.kL8, {
                    ref: G,
                    onClick: null != L ? L : q,
                    "aria-label": z,
                    className: s()(D, O.productCardContainer),
                    onFocus: () => (null == P ? void 0 : P(t.skuId)),
                    onBlur: () => (null == R ? void 0 : R(t.skuId)),
                    onMouseEnter: () => (null == A ? void 0 : A(t.skuId)),
                    onMouseLeave: () => (null == N ? void 0 : N(t.skuId)),
                    children: (0, r.jsxs)("div", {
                        className: O.productCardContentContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: O.headerContainer,
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        skuId: t.skuId,
                                        badgeOverride: T,
                                        className: F,
                                        prioritizedCurrency: M,
                                    }),
                                    !n &&
                                        (0, r.jsx)(E.Z, {
                                            skuId: t.skuId,
                                            isCardHovered: K,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: O.footerContainer,
                                children: [
                                    !i &&
                                        (0, r.jsx)(p.Z, {
                                            skuId: t.skuId,
                                            className: H,
                                        }),
                                    ee &&
                                        (0, r.jsxs)("div", {
                                            className: s()(O.footerInfoContainer, { [O.footerHideOnHover]: et }),
                                            children: [
                                                !y &&
                                                    (0, r.jsx)(C.Z, {
                                                        skuId: t.skuId,
                                                        prioritizedCurrency: M,
                                                    }),
                                                X && J,
                                            ],
                                        }),
                                    et &&
                                        (0, r.jsxs)("div", {
                                            className: s()(O.footerInteractibleContainer, O.footerShowOnHover),
                                            children: [
                                                X && J,
                                                $ &&
                                                    (0, r.jsxs)(a.ButtonGroup, {
                                                        wrap: !1,
                                                        fullWidth: !0,
                                                        children: [
                                                            !j &&
                                                                (0, r.jsx)(h.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: G,
                                                                    selectedVariantIndex: Q,
                                                                    onClick: I,
                                                                    text: Z,
                                                                    prioritizedCurrency: M,
                                                                    onClickAnalytics: W,
                                                                }),
                                                            !k &&
                                                                (0, r.jsx)(_.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: G,
                                                                    selectedVariantIndex: Q,
                                                                    onClick: B,
                                                                    icon: w,
                                                                    prioritizedCurrency: M,
                                                                    onClickAnalytics: W,
                                                                }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(b.Z, { skuId: t.skuId }),
                        ],
                    }),
                }),
            }),
        });
    }),
    y = (e) => {
        let { skuId: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["skuId"]),
            l = (0, m.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(
                  x,
                  (function (e) {
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
                  })({ product: l }, n),
              );
    };
