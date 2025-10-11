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
                hideSecondaryCTA: T,
                badgeOverride: L,
                onClickCard: k,
                onClickPrimaryCTA: I,
                onClickSecondaryCTA: B,
                onMouseEnter: N,
                onMouseLeave: P,
                onFocus: A,
                onBlur: R,
                primaryCTAText: Z,
                secondaryCTAIcon: w,
                productNameClassName: H,
                badgeClassName: F,
                cardClassName: D,
                prioritizedCurrency: M,
            } = e,
            W = (0, d.Nd)(),
            U = null == W ? void 0 : W.tab,
            V = (0, v.zQ)(t),
            z = l.useRef(null),
            { isHoveringOrFocusing: G } = (0, u.Z)(z),
            { handleCardVisibilityChange: K } = (0, g.E)(t.skuId, U === S.AW.CATALOG ? "full" : U),
            Y = (0, m.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD),
            [q, Q] = (0, m.SS)(t),
            J = null != Q && !x,
            X = !j || !T,
            $ = !y || J,
            ee = X || J;
        return (0, r.jsx)(o.$, {
            innerRef: z,
            onChange: K,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: O.productCardHoverContainer,
                children: (0, r.jsx)(a.kL8, {
                    ref: z,
                    onClick: null != k ? k : Y,
                    "aria-label": V,
                    className: s()(D, O.productCardContainer),
                    onFocus: () => (null == A ? void 0 : A(t.skuId)),
                    onBlur: () => (null == R ? void 0 : R(t.skuId)),
                    onMouseEnter: () => (null == N ? void 0 : N(t.skuId)),
                    onMouseLeave: () => (null == P ? void 0 : P(t.skuId)),
                    children: (0, r.jsxs)("div", {
                        className: O.productCardContentContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: O.headerContainer,
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        skuId: t.skuId,
                                        badgeOverride: L,
                                        className: F,
                                        prioritizedCurrency: M,
                                    }),
                                    !n &&
                                        (0, r.jsx)(E.Z, {
                                            skuId: t.skuId,
                                            isCardHovered: G,
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
                                    $ &&
                                        (0, r.jsxs)("div", {
                                            className: s()(O.footerInfoContainer, { [O.footerHideOnHover]: ee }),
                                            children: [
                                                !y &&
                                                    (0, r.jsx)(C.Z, {
                                                        skuId: t.skuId,
                                                        prioritizedCurrency: M,
                                                    }),
                                                J && Q,
                                            ],
                                        }),
                                    ee &&
                                        (0, r.jsxs)("div", {
                                            className: s()(O.footerInteractibleContainer, O.footerShowOnHover),
                                            children: [
                                                J && Q,
                                                X &&
                                                    (0, r.jsxs)(a.ButtonGroup, {
                                                        wrap: !1,
                                                        fullWidth: !0,
                                                        children: [
                                                            !j &&
                                                                (0, r.jsx)(h.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: z,
                                                                    selectedVariantIndex: q,
                                                                    onClick: I,
                                                                    text: Z,
                                                                    prioritizedCurrency: M,
                                                                }),
                                                            !T &&
                                                                (0, r.jsx)(_.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: z,
                                                                    selectedVariantIndex: q,
                                                                    onClick: B,
                                                                    icon: w,
                                                                    prioritizedCurrency: M,
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
