n.d(t, { Z: () => T });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(979554),
    a = n(622535),
    c = n(481060),
    u = n(100527),
    d = n(104505),
    g = n(994587),
    f = n(297651),
    p = n(993222),
    C = n(932083),
    h = n(719075),
    _ = n(558261),
    m = n(819882),
    b = n(786040),
    E = n(659755),
    v = n(942103),
    x = n(268865),
    O = n(29121),
    S = n(215023),
    y = n(213301);
let k = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: k,
                hidePrice: T,
                hidePrimaryCTA: j,
                hideSecondaryCTA: L,
                badgeOverride: I,
                onClickCard: B,
                onClickPrimaryCTA: A,
                onClickSecondaryCTA: N,
                onMouseEnter: P,
                onMouseLeave: R,
                onFocus: Z,
                onBlur: w,
                primaryCTAText: H,
                secondaryCTAIcon: M,
                productNameClassName: D,
                badgeClassName: F,
                cardClassName: W,
                prioritizedCurrency: U,
                onClickAnalytics: V,
            } = e,
            z = (0, g.Nd)(),
            G = null == z ? void 0 : z.tab,
            K = (0, O.zQ)(t),
            Y = l.useRef(null),
            { isHoveringOrFocusing: q } = (0, d.Z)(Y),
            { handleCardVisibilityChange: Q } = (0, f.E)(t.skuId, G === S.AW.CATALOG ? "full" : G),
            J = (0, b.J7)(t, u.Z.COLLECTIBLES_SHOP_CARD, V),
            X = t.type === s.Z.VARIANTS_GROUP && !k,
            $ = !j || !L,
            ee = !T || X,
            et = $ || X;
        return (0, r.jsx)(a.$, {
            innerRef: Y,
            onChange: Q,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: y.productCardHoverContainer,
                children: (0, r.jsx)(c.kL8, {
                    ref: Y,
                    onClick: null != B ? B : J,
                    "aria-label": K,
                    className: o()(W, y.productCardContainer),
                    onFocus: () => (null == Z ? void 0 : Z(t.skuId)),
                    onBlur: () => (null == w ? void 0 : w(t.skuId)),
                    onMouseEnter: () => (null == P ? void 0 : P(t.skuId)),
                    onMouseLeave: () => (null == R ? void 0 : R(t.skuId)),
                    children: (0, r.jsxs)("div", {
                        className: y.productCardContentContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.headerContainer,
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        skuId: t.skuId,
                                        badgeOverride: I,
                                        className: F,
                                        prioritizedCurrency: U,
                                    }),
                                    !n &&
                                        (0, r.jsx)(x.Z, {
                                            skuId: t.skuId,
                                            isCardHovered: q,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: y.footerContainer,
                                children: [
                                    !i &&
                                        (0, r.jsx)(C.Z, {
                                            skuId: t.skuId,
                                            className: D,
                                        }),
                                    ee &&
                                        (0, r.jsxs)("div", {
                                            className: o()(y.footerInfoContainer, { [y.footerHideOnHover]: et }),
                                            children: [
                                                !T &&
                                                    (0, r.jsx)(h.Z, {
                                                        skuId: t.skuId,
                                                        prioritizedCurrency: U,
                                                    }),
                                                X && (0, r.jsx)(v.Z, { skuId: t.skuId }),
                                            ],
                                        }),
                                    et &&
                                        (0, r.jsxs)("div", {
                                            className: o()(y.footerInteractibleContainer, y.footerShowOnHover),
                                            children: [
                                                X && (0, r.jsx)(v.Z, { skuId: t.skuId }),
                                                $ &&
                                                    (0, r.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        fullWidth: !0,
                                                        children: [
                                                            !j &&
                                                                (0, r.jsx)(_.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: Y,
                                                                    onClick: A,
                                                                    text: H,
                                                                    prioritizedCurrency: U,
                                                                    onClickAnalytics: V,
                                                                }),
                                                            !L &&
                                                                (0, r.jsx)(m.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: Y,
                                                                    onClick: N,
                                                                    icon: M,
                                                                    prioritizedCurrency: U,
                                                                    onClickAnalytics: V,
                                                                }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(E.Z, { skuId: t.skuId }),
                        ],
                    }),
                }),
            }),
        });
    }),
    T = (e) => {
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
            l = (0, b.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(
                  k,
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
