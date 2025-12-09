n.d(t, { Z: () => N });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(979554),
    o = n(622535),
    c = n(481060),
    d = n(100527),
    u = n(104505),
    m = n(994587),
    p = n(297651),
    h = n(993222),
    x = n(932083),
    f = n(719075),
    g = n(558261),
    b = n(311583),
    v = n(786040),
    j = n(659755),
    _ = n(406667),
    y = n(268865),
    C = n(361110),
    S = n(29121),
    E = n(215023),
    O = n(213301);
let T = r.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: T,
                hidePrice: N,
                hidePrimaryCTA: P,
                hideSecondaryCTA: w,
                badgeOverride: I,
                skipLimitedTimeCheck: k,
                onClickCard: R,
                onClickPrimaryCTA: A,
                onClickSecondaryCTA: D,
                onMouseEnter: Z,
                onMouseLeave: L,
                onFocus: M,
                onBlur: U,
                primaryCTAText: B,
                secondaryCTAIcon: F,
                productNameClassName: G,
                badgeClassName: V,
                cardClassName: H,
                prioritizedCurrency: W,
                onClickAnalytics: z,
            } = e,
            { previewingVariantIndex: K, handleEntering: q, handleLeaving: Q } = (0, C.f)(t),
            Y = (0, v.jB)(),
            X = (0, m.Nd)(),
            J = null == X ? void 0 : X.tab,
            $ = (0, S.zQ)(t),
            ee = r.useRef(null),
            { isHoveringOrFocusing: et } = (0, u.Z)(ee),
            { handleCardVisibilityChange: en } = (0, p.E)(t.skuId, J === E.AW.CATALOG ? "full" : J),
            ea = (0, v.J7)(t, d.Z.COLLECTIBLES_SHOP_CARD, z, Y),
            er = t.type === s.Z.VARIANTS_GROUP && !T,
            ei = !P || !w,
            el = !(N && i) || er,
            es = el || ei,
            eo = ei || er;
        return (0, a.jsx)(o.$, {
            innerRef: ee,
            onChange: en,
            threshold: 0,
            children: (0, a.jsx)(c.kL8, {
                ref: ee,
                onClick: null != R ? R : ea,
                "aria-label": $,
                className: l()(H, O.productCardContainer, { [O.hovered]: et }),
                onFocus: () => (null == M ? void 0 : M(t.skuId)),
                onBlur: () => (null == U ? void 0 : U(t.skuId)),
                onMouseEnter: () => (null == Z ? void 0 : Z(t.skuId)),
                onMouseLeave: () => (null == L ? void 0 : L(t.skuId)),
                children: (0, a.jsxs)("div", {
                    className: O.productCardContentContainer,
                    children: [
                        (0, a.jsx)("div", {
                            className: l()(O.productPreviewContainer, { [O.hasBottomContent]: !i || el || eo }),
                            children: (0, a.jsx)(j.Z, {
                                skuId: t.skuId,
                                isCardHovered: et,
                                overrideVariantIndex: K,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: O.headerContainer,
                            children: [
                                (0, a.jsx)(h.Z, {
                                    skuId: t.skuId,
                                    badgeOverride: I,
                                    className: V,
                                    prioritizedCurrency: W,
                                    skipLimitedTimeCheck: k,
                                }),
                                !n &&
                                    (0, a.jsx)(y.Z, {
                                        skuId: t.skuId,
                                        isCardHovered: et,
                                    }),
                            ],
                        }),
                        es &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: O.footerGradient }),
                                    (0, a.jsxs)("div", {
                                        className: O.footerContainer,
                                        children: [
                                            el &&
                                                (0, a.jsxs)("div", {
                                                    className: O.footerInfoContainer,
                                                    children: [
                                                        !(i && N) &&
                                                            (0, a.jsxs)("div", {
                                                                className: O.footerInfoLeft,
                                                                children: [
                                                                    !i &&
                                                                        (0, a.jsx)(x.Z, {
                                                                            skuId: t.skuId,
                                                                            className: l()(G, O.productName),
                                                                        }),
                                                                    !N &&
                                                                        (0, a.jsx)("div", {
                                                                            className: O.footerInfoShrinkOnHover,
                                                                            "aria-hidden": !0,
                                                                            children: (0, a.jsx)(f.Z, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: W,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        er &&
                                                            (0, a.jsx)(_.Z, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !et,
                                                                onVariantEnter: q,
                                                                onVariantExit: Q,
                                                            }),
                                                    ],
                                                }),
                                            ei &&
                                                (0, a.jsx)("div", {
                                                    className: O.footerButtonContainer,
                                                    children: (0, a.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: O.footerButtonGroup,
                                                        fullWidth: !0,
                                                        children: [
                                                            !P &&
                                                                (0, a.jsx)(g.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: A,
                                                                    text: B,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: z,
                                                                }),
                                                            !w &&
                                                                (0, a.jsx)(b.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: D,
                                                                    icon: F,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: z,
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
    N = (e) => {
        let { skuId: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ["skuId"]),
            r = (0, v.LJ)(t);
        return null == r
            ? null
            : (0, a.jsx)(
                  T,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              a = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (a = a.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              a.forEach(function (t) {
                                  var a;
                                  (a = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: a,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = a);
                              });
                      }
                      return e;
                  })({ product: r }, n),
              );
    };
