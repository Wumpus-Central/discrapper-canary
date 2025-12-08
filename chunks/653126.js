n.d(t, { Z: () => T });
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
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
let N = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: r,
                hideVariantSwitcher: N,
                hidePrice: T,
                hidePrimaryCTA: P,
                hideSecondaryCTA: I,
                badgeOverride: w,
                skipLimitedTimeCheck: k,
                onClickCard: R,
                onClickPrimaryCTA: A,
                onClickSecondaryCTA: Z,
                onMouseEnter: D,
                onMouseLeave: L,
                onFocus: M,
                onBlur: U,
                primaryCTAText: F,
                secondaryCTAIcon: B,
                productNameClassName: G,
                badgeClassName: z,
                cardClassName: V,
                prioritizedCurrency: H,
                onClickAnalytics: W,
            } = e,
            { previewingVariantIndex: K, handleEntering: q, handleLeaving: Y } = (0, C.f)(t),
            J = (0, v.jB)(),
            X = (0, m.Nd)(),
            Q = null == X ? void 0 : X.tab,
            $ = (0, S.zQ)(t),
            ee = l.useRef(null),
            { isHoveringOrFocusing: et } = (0, u.Z)(ee),
            { handleCardVisibilityChange: en } = (0, p.E)(t.skuId, Q === E.AW.CATALOG ? "full" : Q),
            ea = (0, v.J7)(t, d.Z.COLLECTIBLES_SHOP_CARD, W, J),
            el = t.type === s.Z.VARIANTS_GROUP && !N,
            er = !P || !I,
            ei = !(T && r) || el,
            es = ei || er,
            eo = er || el;
        return (0, a.jsx)(o.$, {
            innerRef: ee,
            onChange: en,
            threshold: 0,
            children: (0, a.jsx)(c.kL8, {
                ref: ee,
                onClick: null != R ? R : ea,
                "aria-label": $,
                className: i()(V, O.productCardContainer, { [O.hovered]: et }),
                onFocus: () => (null == M ? void 0 : M(t.skuId)),
                onBlur: () => (null == U ? void 0 : U(t.skuId)),
                onMouseEnter: () => (null == D ? void 0 : D(t.skuId)),
                onMouseLeave: () => (null == L ? void 0 : L(t.skuId)),
                children: (0, a.jsxs)("div", {
                    className: O.productCardContentContainer,
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(O.productPreviewContainer, { [O.hasBottomContent]: !r || ei || eo }),
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
                                    badgeOverride: w,
                                    className: z,
                                    prioritizedCurrency: H,
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
                                            ei &&
                                                (0, a.jsxs)("div", {
                                                    className: O.footerInfoContainer,
                                                    children: [
                                                        !(r && T) &&
                                                            (0, a.jsxs)("div", {
                                                                className: O.footerInfoLeft,
                                                                children: [
                                                                    !r &&
                                                                        (0, a.jsx)(x.Z, {
                                                                            skuId: t.skuId,
                                                                            className: i()(G, O.productName),
                                                                        }),
                                                                    !T &&
                                                                        (0, a.jsx)("div", {
                                                                            className: O.footerInfoShrinkOnHover,
                                                                            "aria-hidden": !0,
                                                                            children: (0, a.jsx)(f.Z, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: H,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        el &&
                                                            (0, a.jsx)(_.Z, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !et,
                                                                onVariantEnter: q,
                                                                onVariantExit: Y,
                                                            }),
                                                    ],
                                                }),
                                            er &&
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
                                                                    text: F,
                                                                    prioritizedCurrency: H,
                                                                    onClickAnalytics: W,
                                                                }),
                                                            !I &&
                                                                (0, a.jsx)(b.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: Z,
                                                                    icon: B,
                                                                    prioritizedCurrency: H,
                                                                    onClickAnalytics: W,
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
    T = (e) => {
        let { skuId: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            r = Object.keys(e);
                        for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++)
                        (n = r[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["skuId"]),
            l = (0, v.LJ)(t);
        return null == l
            ? null
            : (0, a.jsx)(
                  N,
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
                  })({ product: l }, n),
              );
    };
