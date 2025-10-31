n.d(t, { Z: () => k });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(979554),
    o = n(622535),
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
    E = n(406667),
    x = n(268865),
    O = n(29121),
    S = n(215023),
    y = n(213301);
let j = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: j,
                hidePrice: k,
                hidePrimaryCTA: I,
                hideSecondaryCTA: T,
                badgeOverride: L,
                skipLimitedTimeCheck: B,
                onClickCard: P,
                onClickPrimaryCTA: A,
                onClickSecondaryCTA: N,
                onMouseEnter: Z,
                onMouseLeave: R,
                onFocus: w,
                onBlur: H,
                primaryCTAText: D,
                secondaryCTAIcon: M,
                productNameClassName: F,
                badgeClassName: W,
                cardClassName: V,
                prioritizedCurrency: U,
                onClickAnalytics: z,
            } = e,
            G = (0, p.Nd)(),
            K = null == G ? void 0 : G.tab,
            Y = (0, O.zQ)(t),
            q = l.useRef(null),
            { isHoveringOrFocusing: J } = (0, d.Z)(q),
            { handleCardVisibilityChange: Q } = (0, g.E)(t.skuId, K === S.AW.CATALOG ? "full" : K),
            X = (0, b.J7)(t, u.Z.COLLECTIBLES_SHOP_CARD, z),
            $ = t.type === a.Z.VARIANTS_GROUP && !j,
            ee = !I || !T,
            et = !k || $,
            en = ee || $;
        return (0, r.jsx)(o.$, {
            innerRef: q,
            onChange: Q,
            threshold: 0,
            children: (0, r.jsx)(c.kL8, {
                ref: q,
                onClick: null != P ? P : X,
                "aria-label": Y,
                className: s()(V, y.productCardContainer, { [y.hovered]: J }),
                onFocus: () => (null == w ? void 0 : w(t.skuId)),
                onBlur: () => (null == H ? void 0 : H(t.skuId)),
                onMouseEnter: () => (null == Z ? void 0 : Z(t.skuId)),
                onMouseLeave: () => (null == R ? void 0 : R(t.skuId)),
                children: (0, r.jsxs)("div", {
                    className: y.productCardContentContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(y.productPreviewContainer, { [y.hasBottomContent]: !i || et || en }),
                            children: (0, r.jsx)(v.Z, {
                                skuId: t.skuId,
                                isCardHovered: J,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: y.headerContainer,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    skuId: t.skuId,
                                    badgeOverride: L,
                                    className: W,
                                    prioritizedCurrency: U,
                                    skipLimitedTimeCheck: B,
                                }),
                                !n &&
                                    (0, r.jsx)(x.Z, {
                                        skuId: t.skuId,
                                        isCardHovered: J,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: y.footerContainer,
                            children: [
                                (0, r.jsx)("div", { className: y.footerGradient }),
                                (0, r.jsxs)("div", {
                                    className: y.footerContent,
                                    children: [
                                        !i &&
                                            (0, r.jsx)(h.Z, {
                                                skuId: t.skuId,
                                                className: s()({ [y.shadowOnHover]: en }, F),
                                            }),
                                        et &&
                                            (0, r.jsxs)("div", {
                                                className: s()(y.footerInfoContainer, { [y.removePaddingOnHover]: !$ }),
                                                children: [
                                                    !k &&
                                                        (0, r.jsx)("div", {
                                                            className: y.priceContainer,
                                                            "aria-hidden": !0,
                                                            children: (0, r.jsx)(C.Z, {
                                                                skuId: t.skuId,
                                                                prioritizedCurrency: U,
                                                            }),
                                                        }),
                                                    $ &&
                                                        (0, r.jsx)(E.Z, {
                                                            skuId: t.skuId,
                                                            isCollapsed: !J,
                                                        }),
                                                ],
                                            }),
                                        ee &&
                                            (0, r.jsx)("div", {
                                                className: y.footerButtonContainer,
                                                children: (0, r.jsxs)(c.ButtonGroup, {
                                                    wrap: !1,
                                                    fullWidth: !0,
                                                    children: [
                                                        !I &&
                                                            (0, r.jsx)(m.Z, {
                                                                skuId: t.skuId,
                                                                cardRef: q,
                                                                onClick: A,
                                                                text: D,
                                                                prioritizedCurrency: U,
                                                                onClickAnalytics: z,
                                                            }),
                                                        !T &&
                                                            (0, r.jsx)(_.Z, {
                                                                skuId: t.skuId,
                                                                cardRef: q,
                                                                onClick: N,
                                                                icon: M,
                                                                prioritizedCurrency: U,
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
    k = (e) => {
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
                  j,
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
