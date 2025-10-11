n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(622535),
    o = n(481060),
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
    v = n(213301);
let S = l.memo(function (e) {
        let {
                product: t,
                hideProductName: n,
                hideVariantSwitcher: i,
                hidePrice: S,
                hidePrimaryCTA: O,
                hideSecondaryCTA: x,
                badgeOverride: y,
                onClickCard: j,
                onClickPrimaryCTA: T,
                onClickSecondaryCTA: L,
                onMouseEnter: k,
                onMouseLeave: I,
                onFocus: B,
                onBlur: P,
                primaryCTAText: N,
                secondaryCTAIcon: A,
                productNameClassName: R,
                badgeClassName: Z,
                cardClassName: w,
            } = e,
            H = (0, u.Nd)(),
            F = null == H ? void 0 : H.tab,
            D = (0, b.zQ)(t),
            M = l.useRef(null),
            { handleCardVisibilityChange: W } = (0, d.E)(t.skuId, F === E.AW.CATALOG ? "full" : F),
            U = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD),
            [V, G] = (0, _.SS)(t),
            z = null != G && !i;
        return (0, r.jsx)(a.$, {
            innerRef: M,
            onChange: W,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: v.baseProductCardHoverContainer,
                children: (0, r.jsx)(o.kL8, {
                    ref: M,
                    onClick: null != j ? j : U,
                    "aria-label": D,
                    className: s()(w, v.baseProductCardContainer),
                    onFocus: () => (null == B ? void 0 : B(t.skuId)),
                    onBlur: () => (null == P ? void 0 : P(t.skuId)),
                    onMouseEnter: () => (null == k ? void 0 : k(t.skuId)),
                    onMouseLeave: () => (null == I ? void 0 : I(t.skuId)),
                    children: (0, r.jsxs)("div", {
                        className: v.baseProductCardContentContainer,
                        children: [
                            (0, r.jsx)(g.Z, {
                                skuId: t.skuId,
                                badgeOverride: y,
                                className: Z,
                            }),
                            (0, r.jsxs)("div", {
                                className: v.innerContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: s()(v.baseProductCardDetailsContainer, {
                                            [v.hasVariantSwitcher]: z,
                                        }),
                                        children: [
                                            !n &&
                                                (0, r.jsx)(f.Z, {
                                                    skuId: t.skuId,
                                                    className: R,
                                                }),
                                            z &&
                                                (0, r.jsx)("div", {
                                                    className: v.hoveredVariantSwitcher,
                                                    children: G,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.baseProductCardFooter,
                                        children: [!S && (0, r.jsx)(p.Z, { skuId: t.skuId }), z && G],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: v.innerHover,
                                children:
                                    (!O || !x) &&
                                    (0, r.jsxs)(o.ButtonGroup, {
                                        wrap: !1,
                                        fullWidth: !0,
                                        children: [
                                            !O &&
                                                (0, r.jsx)(C.Z, {
                                                    skuId: t.skuId,
                                                    cardRef: M,
                                                    selectedVariantIndex: V,
                                                    onClick: T,
                                                    text: N,
                                                }),
                                            !x &&
                                                (0, r.jsx)(h.Z, {
                                                    skuId: t.skuId,
                                                    cardRef: M,
                                                    selectedVariantIndex: V,
                                                    onClick: L,
                                                    icon: A,
                                                }),
                                        ],
                                    }),
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
                  S,
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
