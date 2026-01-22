n.d(t, {
    A: () => N,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(575593),
    o = n(230109),
    c = n(397927),
    d = n(793574),
    u = n(713517),
    m = n(161918),
    p = n(597783),
    h = n(268959),
    f = n(387945),
    x = n(638006),
    b = n(140877),
    g = n(834384),
    v = n(157200),
    j = n(561769),
    y = n(364616),
    _ = n(666839),
    A = n(935094),
    C = n(764999),
    S = n(758836),
    O = n(514294);
let E = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: i,
                hideVariantSwitcher: E,
                hidePrice: N,
                hidePrimaryCTA: T,
                hideSecondaryCTA: I,
                badgeOverride: w,
                skipLimitedTimeCheck: k,
                onClickCard: P,
                onClickPrimaryCTA: R,
                onClickSecondaryCTA: D,
                onMouseEnter: M,
                onMouseLeave: L,
                onFocus: U,
                onBlur: B,
                primaryCTAText: G,
                secondaryCTAIcon: F,
                productNameClassName: V,
                badgeClassName: H,
                cardClassName: W,
                prioritizedCurrency: K,
                onClickAnalytics: z,
            } = e,
            { previewingVariantIndex: q, handleEntering: Q, handleLeaving: Y } = (0, A.f)(t),
            J = (0, j.sC)(),
            X = (0, m.Mk)(),
            $ = null == X ? void 0 : X.tab,
            Z = (0, C.ho)(t),
            ee = l.useRef(null),
            { isHoveringOrFocusing: et } = (0, u.A)(ee),
            { handleCardVisibilityChange: en } = (0, p.Z)(t.skuId, $ === S.G2.CATALOG ? "full" : $),
            ea = (0, j.ql)(t, d.A.COLLECTIBLES_SHOP_CARD, z, J),
            el = t.type === s.R.VARIANTS_GROUP && !E,
            ei = !T || !I,
            er = !(N && i) || el,
            es = er || ei,
            eo = ei || el;
        return (0, a.jsx)(o.L, {
            innerRef: ee,
            onChange: en,
            threshold: 0,
            children: (0, a.jsx)(c.sqX, {
                ref: ee,
                onClick: null != P ? P : ea,
                "aria-label": Z,
                className: r()(W, O.ty, {
                    [O.yo]: et,
                }),
                onFocus: () => (null == U ? void 0 : U(t.skuId)),
                onBlur: () => (null == B ? void 0 : B(t.skuId)),
                onMouseEnter: () => (null == M ? void 0 : M(t.skuId)),
                onMouseLeave: () => (null == L ? void 0 : L(t.skuId)),
                children: (0, a.jsxs)("div", {
                    className: O.qt,
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(O.Dq, {
                                [O.$r]: !i || er || eo,
                            }),
                            children: (0, a.jsx)(x.A, {
                                skuId: t.skuId,
                                isCardHovered: et,
                                overrideVariantIndex: q,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: O.N1,
                            children: [
                                (0, a.jsx)(h.A, {
                                    skuId: t.skuId,
                                    badgeOverride: w,
                                    className: H,
                                    prioritizedCurrency: K,
                                    skipLimitedTimeCheck: k,
                                }),
                                !n &&
                                    (0, a.jsx)(_.A, {
                                        skuId: t.skuId,
                                        isCardHovered: et,
                                    }),
                            ],
                        }),
                        es &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", {
                                        className: O.wY,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: O.xQ,
                                        children: [
                                            er &&
                                                (0, a.jsxs)("div", {
                                                    className: O.xE,
                                                    children: [
                                                        !(i && N) &&
                                                            (0, a.jsxs)("div", {
                                                                className: O.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, a.jsx)(f.A, {
                                                                            skuId: t.skuId,
                                                                            className: r()(V, O.tZ),
                                                                        }),
                                                                    !N &&
                                                                        (0, a.jsx)("div", {
                                                                            className: O.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, a.jsx)(b.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: K,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        el &&
                                                            (0, a.jsx)(y.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !et,
                                                                onVariantEnter: Q,
                                                                onVariantExit: Y,
                                                            }),
                                                    ],
                                                }),
                                            ei &&
                                                (0, a.jsx)("div", {
                                                    className: O.Vs,
                                                    children: (0, a.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: O.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !T &&
                                                                (0, a.jsx)(g.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: R,
                                                                    text: G,
                                                                    prioritizedCurrency: K,
                                                                    onClickAnalytics: z,
                                                                }),
                                                            !I &&
                                                                (0, a.jsx)(v.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: D,
                                                                    icon: F,
                                                                    prioritizedCurrency: K,
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
                    l,
                    i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                        (a = n[l]),
                            !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
                    return i;
                }
                if (
                    ((i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (a = 0; a < i.length; a++)
                            (n = i[a]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                        (a = n[l]),
                            !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
                return i;
            })(e, ["skuId"]),
            l = (0, j.Vm)(t);
        return null == l
            ? null
            : (0, a.jsx)(
                  E,
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
                  })(
                      {
                          product: l,
                      },
                      n,
                  ),
              );
    };
