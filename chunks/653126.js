n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(622535),
    a = n(481060),
    c = n(100527),
    u = n(994587),
    d = n(297651),
    g = n(993222),
    f = n(932083),
    p = n(719075),
    C = n(558261),
    h = n(819882),
    _ = n(786040),
    m = n(659755),
    b = n(29121),
    E = n(215023),
    S = n(213301);
let v = l.memo(function (e) {
        let {
                product: t,
                hideProductName: n,
                hideVariantSwitcher: i,
                hidePrice: v,
                hidePrimaryCTA: O,
                hideSecondaryCTA: x,
                badgeOverride: y,
                onClickCard: T,
                onClickPrimaryCTA: j,
                onClickSecondaryCTA: L,
                onMouseEnter: k,
                onMouseLeave: I,
                onFocus: B,
                onBlur: N,
                primaryCTAText: A,
                secondaryCTAIcon: P,
                productNameClassName: R,
                badgeClassName: Z,
                cardClassName: w,
                prioritizedCurrency: H,
            } = e,
            F = (0, u.Nd)(),
            D = null == F ? void 0 : F.tab,
            M = (0, b.zQ)(t),
            W = l.useRef(null),
            { handleCardVisibilityChange: U } = (0, d.E)(t.skuId, D === E.AW.CATALOG ? "full" : D),
            V = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD),
            [z, G] = (0, _.SS)(t),
            K = null != G && !i,
            Y = !O || !x,
            q = !v || K,
            Q = Y || K;
        return (0, r.jsx)(s.$, {
            innerRef: W,
            onChange: U,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: S.productCardHoverContainer,
                children: (0, r.jsx)(a.kL8, {
                    ref: W,
                    onClick: null != T ? T : V,
                    "aria-label": M,
                    className: o()(w, S.productCardContainer),
                    onFocus: () => (null == B ? void 0 : B(t.skuId)),
                    onBlur: () => (null == N ? void 0 : N(t.skuId)),
                    onMouseEnter: () => (null == k ? void 0 : k(t.skuId)),
                    onMouseLeave: () => (null == I ? void 0 : I(t.skuId)),
                    children: (0, r.jsxs)("div", {
                        className: S.productCardContentContainer,
                        children: [
                            (0, r.jsx)(g.Z, {
                                skuId: t.skuId,
                                badgeOverride: y,
                                className: Z,
                                prioritizedCurrency: H,
                            }),
                            (0, r.jsxs)("div", {
                                className: S.footerContainer,
                                children: [
                                    !n &&
                                        (0, r.jsx)(f.Z, {
                                            skuId: t.skuId,
                                            className: R,
                                        }),
                                    q &&
                                        (0, r.jsxs)("div", {
                                            className: o()(S.footerInfoContainer, { [S.footerHideOnHover]: Q }),
                                            children: [
                                                !v &&
                                                    (0, r.jsx)(p.Z, {
                                                        skuId: t.skuId,
                                                        prioritizedCurrency: H,
                                                    }),
                                                K && G,
                                            ],
                                        }),
                                    Q &&
                                        (0, r.jsxs)("div", {
                                            className: o()(S.footerInteractibleContainer, S.footerShowOnHover),
                                            children: [
                                                K && G,
                                                Y &&
                                                    (0, r.jsxs)(a.ButtonGroup, {
                                                        wrap: !1,
                                                        fullWidth: !0,
                                                        children: [
                                                            !O &&
                                                                (0, r.jsx)(C.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: W,
                                                                    selectedVariantIndex: z,
                                                                    onClick: j,
                                                                    text: A,
                                                                    prioritizedCurrency: H,
                                                                }),
                                                            !x &&
                                                                (0, r.jsx)(h.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: W,
                                                                    selectedVariantIndex: z,
                                                                    onClick: L,
                                                                    icon: P,
                                                                    prioritizedCurrency: H,
                                                                }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(m.Z, { skuId: t.skuId }),
                        ],
                    }),
                }),
            }),
        });
    }),
    O = (e) => {
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
            l = (0, _.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(
                  v,
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
