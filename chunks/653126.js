n.d(t, { Z: () => I });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(622535),
    c = n(481060),
    u = n(100527),
    d = n(104505),
    g = n(994587),
    p = n(297651),
    f = n(993222),
    m = n(932083),
    h = n(719075),
    C = n(558261),
    _ = n(311583),
    b = n(786040),
    v = n(659755),
    x = n(406667),
    E = n(268865),
    O = n(361110),
    S = n(29121),
    y = n(215023),
    j = n(374874);
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
            J = (0, b.$l)(),
            Q = (0, b.jB)(),
            X = (0, g.Nd)(),
            $ = null == X ? void 0 : X.tab,
            ee = (0, S.zQ)(t),
            et = l.useRef(null),
            { isHoveringOrFocusing: en } = (0, d.Z)(et),
            { handleCardVisibilityChange: er } = (0, p.E)(t.skuId, $ === y.AW.CATALOG ? "full" : $),
            el = (0, b.J7)(t, u.Z.COLLECTIBLES_SHOP_CARD, G, J, Q),
            ei = t.type === s.Z.VARIANTS_GROUP && !k,
            ea = !T || !L,
            es = !(I && i) || ei,
            eo = es || ea,
            ec = ea || ei;
        return (0, r.jsx)(o.$, {
            innerRef: et,
            onChange: er,
            threshold: 0,
            children: (0, r.jsx)(c.kL8, {
                ref: et,
                onClick: null != N ? N : el,
                "aria-label": ee,
                className: a()(U, j.productCardContainer, { [j.hovered]: en }),
                onFocus: () => (null == H ? void 0 : H(t.skuId)),
                onBlur: () => (null == D ? void 0 : D(t.skuId)),
                onMouseEnter: () => (null == Z ? void 0 : Z(t.skuId)),
                onMouseLeave: () => (null == w ? void 0 : w(t.skuId)),
                children: (0, r.jsxs)("div", {
                    className: j.productCardContentContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(j.productPreviewContainer, { [j.hasBottomContent]: !i || es || ec }),
                            children: (0, r.jsx)(v.Z, {
                                skuId: t.skuId,
                                isCardHovered: en,
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
                                        isCardHovered: en,
                                    }),
                            ],
                        }),
                        eo &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: j.footerGradient }),
                                    (0, r.jsxs)("div", {
                                        className: j.footerContainer,
                                        children: [
                                            es &&
                                                (0, r.jsxs)("div", {
                                                    className: j.footerInfoContainer,
                                                    children: [
                                                        !(i && I) &&
                                                            (0, r.jsxs)("div", {
                                                                className: j.footerInfoLeft,
                                                                children: [
                                                                    !i &&
                                                                        (0, r.jsx)(m.Z, {
                                                                            skuId: t.skuId,
                                                                            className: a()(W, j.productName),
                                                                        }),
                                                                    !I &&
                                                                        (0, r.jsx)("div", {
                                                                            className: j.footerInfoShrinkOnHover,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(h.Z, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: z,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ei &&
                                                            (0, r.jsx)(x.Z, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !en,
                                                                onVariantEnter: Y,
                                                                onVariantExit: q,
                                                            }),
                                                    ],
                                                }),
                                            ea &&
                                                (0, r.jsx)("div", {
                                                    className: j.footerButtonContainer,
                                                    children: (0, r.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: j.footerButtonGroup,
                                                        fullWidth: !0,
                                                        children: [
                                                            !T &&
                                                                (0, r.jsx)(C.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: et,
                                                                    onClick: A,
                                                                    text: M,
                                                                    prioritizedCurrency: z,
                                                                    onClickAnalytics: G,
                                                                }),
                                                            !L &&
                                                                (0, r.jsx)(_.Z, {
                                                                    skuId: t.skuId,
                                                                    cardRef: et,
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
