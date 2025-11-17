n.d(t, { Z: () => I });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(622535),
    c = n(481060),
    u = n(100527),
    d = n(104505),
    p = n(994587),
    g = n(297651),
    f = n(993222),
    h = n(932083),
    C = n(719075),
    m = n(558261),
    _ = n(311583),
    b = n(786040),
    v = n(659755),
    x = n(406667),
    E = n(268865),
    O = n(361110),
    S = n(29121),
    y = n(215023),
    j = n(213301);
let k = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: k,
                hidePrice: I,
                hidePrimaryCTA: T,
                hideSecondaryCTA: L,
                badgeOverride: B,
                skipLimitedTimeCheck: P,
                onClickCard: N,
                onClickPrimaryCTA: A,
                onClickSecondaryCTA: R,
                onMouseEnter: Z,
                onMouseLeave: w,
                onFocus: H,
                onBlur: D,
                primaryCTAText: M,
                secondaryCTAIcon: F,
                productNameClassName: W,
                badgeClassName: V,
                cardClassName: U,
                prioritizedCurrency: z,
                onClickAnalytics: G,
            } = e,
            { previewingVariantIndex: K, handleEntering: Y, handleLeaving: q } = (0, O.f)(t),
            J = (0, p.Nd)(),
            Q = null == J ? void 0 : J.tab,
            X = (0, S.zQ)(t),
            $ = l.useRef(null),
            { isHoveringOrFocusing: ee } = (0, d.Z)($),
            { handleCardVisibilityChange: et } = (0, g.E)(t.skuId, Q === y.AW.CATALOG ? "full" : Q),
            en = (0, b.J7)(t, u.Z.COLLECTIBLES_SHOP_CARD, G),
            er = t.type === o.Z.VARIANTS_GROUP && !k,
            el = !T || !L,
            ei = !(I && i) || er,
            ea = ei || el,
            eo = el || er;
        return (0, r.jsx)(s.$, {
            innerRef: $,
            onChange: et,
            threshold: 0,
            children: (0, r.jsx)(c.kL8, {
                ref: $,
                onClick: null != N ? N : en,
                "aria-label": X,
                className: a()(U, j.productCardContainer, { [j.hovered]: ee }),
                onFocus: () => (null == H ? void 0 : H(t.skuId)),
                onBlur: () => (null == D ? void 0 : D(t.skuId)),
                onMouseEnter: () => (null == Z ? void 0 : Z(t.skuId)),
                onMouseLeave: () => (null == w ? void 0 : w(t.skuId)),
                children: (0, r.jsxs)("div", {
                    className: j.productCardContentContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(j.productPreviewContainer, { [j.hasBottomContent]: !i || ei || eo }),
                            children: (0, r.jsx)(v.Z, {
                                skuId: t.skuId,
                                isCardHovered: ee,
                                overrideVariantIndex: K,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: j.headerContainer,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    skuId: t.skuId,
                                    badgeOverride: B,
                                    className: V,
                                    prioritizedCurrency: z,
                                    skipLimitedTimeCheck: P,
                                }),
                                !n &&
                                    (0, r.jsx)(E.Z, {
                                        skuId: t.skuId,
                                        isCardHovered: ee,
                                    }),
                            ],
                        }),
                        ea &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: j.footerGradient }),
                                    (0, r.jsxs)("div", {
                                        className: j.footerContainer,
                                        children: [
                                            ei &&
                                                (0, r.jsxs)("div", {
                                                    className: j.footerInfoContainer,
                                                    children: [
                                                        !(i && I) &&
                                                            (0, r.jsxs)("div", {
                                                                className: j.footerInfoLeft,
                                                                children: [
                                                                    !i &&
                                                                        (0, r.jsx)(h.Z, {
                                                                            skuId: t.skuId,
                                                                            className: a()(W, j.productName),
                                                                        }),
                                                                    !I &&
                                                                        (0, r.jsx)("div", {
                                                                            className: j.priceContainer,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(C.Z, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: z,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        er &&
                                                            (0, r.jsx)(x.Z, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ee,
                                                                onVariantEnter: Y,
                                                                onVariantExit: q,
                                                            }),
                                                    ],
                                                }),
                                            el &&
                                                (0, r.jsx)("div", {
                                                    className: j.footerButtonContainer,
                                                    children: (0, r.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: j.footerButtonGroup,
                                                        fullWidth: !0,
                                                        children: [
                                                            !T &&
                                                                (0, r.jsx)(m.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: $,
                                                                    onClick: A,
                                                                    text: M,
                                                                    prioritizedCurrency: z,
                                                                    onClickAnalytics: G,
                                                                }),
                                                            !L &&
                                                                (0, r.jsx)(_.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: $,
                                                                    onClick: R,
                                                                    icon: F,
                                                                    prioritizedCurrency: z,
                                                                    onClickAnalytics: G,
                                                                }),
                                                        ],
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        });
    }),
    I = (e) => {
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
