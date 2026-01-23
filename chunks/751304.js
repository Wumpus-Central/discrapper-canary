n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(230109),
    c = n(397927),
    u = n(793574),
    d = n(713517),
    f = n(161918),
    p = n(645178),
    _ = n(597783),
    h = n(268959),
    m = n(387945),
    g = n(638006),
    E = n(140877),
    y = n(834384),
    b = n(157200),
    O = n(561769),
    v = n(364616),
    A = n(666839),
    I = n(935094),
    S = n(758836),
    T = n(514294);

function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let P = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: a,
                hideVariantSwitcher: C,
                hidePrice: N,
                hidePrimaryCTA: w,
                hideSecondaryCTA: R,
                badgeOverride: P,
                skipLimitedTimeCheck: D,
                onClickCard: x,
                onClickPrimaryCTA: L,
                onClickSecondaryCTA: j,
                onMouseEnter: M,
                onMouseLeave: k,
                onFocus: U,
                onBlur: G,
                primaryCTAText: V,
                secondaryCTAIcon: F,
                productNameClassName: B,
                badgeClassName: H,
                cardClassName: Y,
                prioritizedCurrency: W,
                onClickAnalytics: K,
            } = e,
            { previewingVariantIndex: z, handleEntering: q, handleLeaving: Z } = (0, I.f)(t),
            X = (0, O.sC)(),
            Q = (0, f.Mk)(),
            J = null == Q ? void 0 : Q.tab,
            $ = (0, p.ho)(t),
            ee = i.useRef(null),
            { isHoveringOrFocusing: et } = (0, d.A)(ee),
            { handleCardVisibilityChange: en } = (0, _.Z)(t.skuId, J === S.G2.CATALOG ? "full" : J),
            er = (0, O.ql)(t, u.A.COLLECTIBLES_SHOP_CARD, K, X),
            ei = t.type === o.R.VARIANTS_GROUP && !C,
            ea = !w || !R,
            es = !(N && a) || ei,
            eo = es || ea,
            el = ea || ei;
        return (0, r.jsx)(l.L, {
            innerRef: ee,
            onChange: en,
            threshold: 0,
            children: (0, r.jsx)(c.sqX, {
                ref: ee,
                onClick: null != x ? x : er,
                "aria-label": $,
                className: s()(Y, T.ty, {
                    [T.yo]: et,
                }),
                onFocus: () => (null == U ? void 0 : U(t.skuId)),
                onBlur: () => (null == G ? void 0 : G(t.skuId)),
                onMouseEnter: () => (null == M ? void 0 : M(t.skuId)),
                onMouseLeave: () => (null == k ? void 0 : k(t.skuId)),
                children: (0, r.jsxs)("div", {
                    className: T.qt,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(T.Dq, {
                                [T.$r]: !a || es || el,
                            }),
                            children: (0, r.jsx)(g.A, {
                                skuId: t.skuId,
                                isCardHovered: et,
                                overrideVariantIndex: z,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: T.N1,
                            children: [
                                (0, r.jsx)(h.A, {
                                    skuId: t.skuId,
                                    badgeOverride: P,
                                    className: H,
                                    prioritizedCurrency: W,
                                    skipLimitedTimeCheck: D,
                                }),
                                !n &&
                                    (0, r.jsx)(A.A, {
                                        skuId: t.skuId,
                                        isCardHovered: et,
                                    }),
                            ],
                        }),
                        eo &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.wY,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: T.xQ,
                                        children: [
                                            es &&
                                                (0, r.jsxs)("div", {
                                                    className: T.xE,
                                                    children: [
                                                        !(a && N) &&
                                                            (0, r.jsxs)("div", {
                                                                className: T.Ly,
                                                                children: [
                                                                    !a &&
                                                                        (0, r.jsx)(m.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(B, T.tZ),
                                                                        }),
                                                                    !N &&
                                                                        (0, r.jsx)("div", {
                                                                            className: T.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(E.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: W,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ei &&
                                                            (0, r.jsx)(v.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !et,
                                                                onVariantEnter: q,
                                                                onVariantExit: Z,
                                                            }),
                                                    ],
                                                }),
                                            ea &&
                                                (0, r.jsx)("div", {
                                                    className: T.Vs,
                                                    children: (0, r.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: T.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !w &&
                                                                (0, r.jsx)(y.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: L,
                                                                    text: V,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: K,
                                                                }),
                                                            !R &&
                                                                (0, r.jsx)(b.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: j,
                                                                    icon: F,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: K,
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
    D = (e) => {
        let { skuId: t } = e,
            n = w(e, ["skuId"]),
            i = (0, O.Vm)(t);
        return null == i
            ? null
            : (0, r.jsx)(
                  P,
                  N(
                      {
                          product: i,
                      },
                      n,
                  ),
              );
    };
