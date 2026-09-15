e.d(n, { A: () => tR });
var i = e(477900),
    r = e(582128),
    a = e(503698),
    l = e.n(a),
    s = e(132500),
    o = e(612324),
    c = e(575593),
    d = e(334279),
    u = e(890856),
    x = e(825484),
    I = e(444927),
    k = e(793574),
    p = e(688810),
    C = e(713517),
    b = e(440938),
    m = e(161918),
    f = e(395856),
    g = e(503089),
    T = e(682301),
    j = e(629042),
    v = e(777829),
    A = e(859587),
    P = e(918838),
    y = e(536572),
    h = e(268959),
    S = e(387945),
    L = e(618317),
    E = e(140877),
    N = e(702841),
    _ = e(821609),
    R = e(44120),
    O = e(465794),
    H = e(757036),
    U = e(206835),
    V = e(106799),
    w = e(652165),
    Y = e(287809),
    B = e(158045),
    D = e(839534),
    M = e(4227),
    W = e(298072),
    F = e(993408),
    $ = e(450481),
    q = e(740076),
    z = e(466459),
    G = e(623373),
    K = e(561769),
    Q = e(766172),
    Z = e(57020),
    J = e(61750),
    X = e(758836),
    tt = e(202541),
    tn = e(375708),
    te = e(508672);
function ti(t) {
    let {
            product: n,
            cardRef: e,
            hasShopDiscount: r,
            analyticsLocations: a,
            selectedVariantIndex: l,
            text: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = (0, F.R8)(n, r, !1),
        x = (0, b.uM)()?.sessionId,
        I = s ?? tn.intl.formatToPlainString(tn.t["cNSL/j"], { price: u });
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                o?.(X.sH.BUY_WITH_FIAT),
                (0, R.A)({
                    skuId: (0, Q.Y)({ product: n, selectedVariantIndex: l }),
                    returnRef: e,
                    analyticsLocations: a,
                    discoverySessionId: x,
                }));
        },
        text: I,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: I, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tr(t) {
    let { text: n, onTrackClick: e, productLabel: r, tabIndex: a } = t,
        l = n ?? tn.intl.string(tn.t.sEAnVH);
    return (0, i.jsx)(O.A, {
        subscriptionTier: tt.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: l, productLabel: r }),
        onClick: (t) => {
            (t.stopPropagation(), e?.(X.sH.UNLOCK_WITH_NITRO));
        },
        tabIndex: a,
    });
}
function ta(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: r, productLabel: a, tabIndex: l } = t,
        s = e ?? tn.intl.string(tn.t.FdGl5A);
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(X.sH.VIEW_DETAILS), n(t));
        },
        text: s,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tl(t) {
    let { handleUseNow: n, isApplying: e, text: r, onTrackClick: a, productLabel: l, tabIndex: s } = t,
        o = r ?? tn.intl.string(tn.t.MAS7uK);
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(X.sH.USE_NOW), n());
        },
        loading: e,
        text: o,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: o, productLabel: l }),
        fullWidth: !0,
        tabIndex: s,
    });
}
function ts(t) {
    let { text: n, onTrackClick: e, productLabel: r, tabIndex: a } = t,
        l = (0, U.A)(),
        s = n ?? tn.intl.string(tn.t["2p2aYz"]);
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(X.sH.EDIT_PROFILE), l());
        },
        text: s,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: a,
    });
}
function to(t) {
    let { skuId: n, onClick: e, text: r, productLabel: a, tabIndex: l } = t,
        s = r ?? tn.intl.string(tn.t.FdGl5A);
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e(n));
        },
        text: s,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tc(t) {
    let {
            product: n,
            isClaimPremiumProductDisabled: e,
            isClaiming: r,
            analyticsLocations: a,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = l ?? tn.intl.string(tn.t.zp6caO);
    async function x() {
        (s?.("claim premium product button"),
            o?.(X.sH.ADD_TO_COLLECTION),
            await (0, D.iJ)(n.skuId),
            (0, J.A)({ product: n, analyticsLocations: a, purchaseType: X.gs.PREMIUM_PURCHASE }));
    }
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), x());
        },
        disabled: e,
        loading: r,
        loadingStartedLabel: tn.intl.string(tn.t["TYw+9s"]),
        loadingFinishedLabel: tn.intl.string(tn.t.Pg1UP5),
        text: u,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function td(t) {
    let {
            product: n,
            checkoutEligiblePrices: e,
            analyticsLocations: r,
            selectedVariantIndex: a,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = (0, b.uM)()?.sessionId,
        x = l ?? tn.intl.formatToPlainString(tn.t.yi41qQ, { orbPrice: e[0].amount });
    return (0, i.jsx)(_.$, {
        variant: "primary",
        text:
            l ??
            tn.intl.format(tn.t.JC15qj, {
                orbPrice: e[0].amount,
                orbIconHook: () => (0, i.jsx)(V.A, { className: te.f }),
            }),
        onClick: (t) => {
            (t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(X.sH.BUY_WITH_ORBS),
                (0, w.B4)({
                    skuId: (0, Q.Y)({ product: n, selectedVariantIndex: a }),
                    onComplete: (t) => {
                        ((0, D.gB)(),
                            (0, J.A)({
                                product: n,
                                analyticsLocations: r,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: X.gs.ORB,
                            }));
                    },
                    analyticsLocations: r,
                    discoverySessionId: u,
                }));
        },
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: x, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tu(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: r, productLabel: a, tabIndex: l } = t,
        s = e ?? tn.intl.string(tn.t.GpnHfH);
    return (0, i.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(X.sH.PAYMENT_OPTIONS), n(t));
        },
        text: s,
        "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tx(t) {
    let {
            product: n,
            cardRef: e,
            selectedVariantIndex: r,
            onClick: a,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, N.bG)([Y.default], () => Y.default.getCurrentUser()),
        x = (0, H.L)(tt.PremiumTypes.TIER_2),
        I = B.Ay.canUseShopDiscounts(u),
        C = (0, j.VZ)(n),
        { isPurchased: b, isPartiallyOwnedBundle: m } = (0, z.h)(n),
        f = (0, F.G0)(n),
        g = (0, F.tt)(n),
        { isDisabled: T } = (0, q.I)(n.skuId),
        v = (0, F.Zu)({ product: n, isPartiallyOwnedBundle: m, isPurchased: b }),
        {
            shouldCheckoutWithOrbs: A,
            hasSufficientOrbs: P,
            checkoutEligiblePrices: h,
            isOrbExclusive: S,
        } = (0, Z.F)({ product: n, hasShopDiscount: I, prioritizedCurrency: s }),
        { analyticsLocations: L } = (0, p.Ay)(k.A.COLLECTIBLES_SHOP_CARD),
        E = (0, y.s7)(n),
        _ = (0, K.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [R, O] = (0, N.yK)([M.A], () => [
            M.A.isClaiming === n.skuId,
            null != M.A.isClaiming && M.A.isClaiming !== n.skuId,
        ]),
        { handleUseNow: U, isApplying: V, canUseNow: w } = (0, $.p)({ product: n }),
        D = l ?? C ?? void 0;
    if (null != a) return (0, i.jsx)(to, { onClick: a, skuId: n.skuId, text: l, productLabel: E, tabIndex: d });
    if (f && !x && !g) return (0, i.jsx)(tr, { text: l, onTrackClick: c, productLabel: E, tabIndex: d });
    if (!v || T)
        return (0, i.jsx)(ta, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E, tabIndex: d });
    if (b)
        return w
            ? (0, i.jsx)(tl, { handleUseNow: U, isApplying: V, text: l, onTrackClick: c, productLabel: E, tabIndex: d })
            : (0, i.jsx)(ts, { text: l, onTrackClick: c, productLabel: E, tabIndex: d });
    if (f)
        return (0, i.jsx)(tc, {
            product: n,
            isClaimPremiumProductDisabled: O,
            isClaiming: R,
            analyticsLocations: L,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
            tabIndex: d,
        });
    if (A && P)
        return (0, i.jsx)(td, {
            product: n,
            checkoutEligiblePrices: h,
            analyticsLocations: L,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
            tabIndex: d,
        });
    if (A && !P)
        if (h.length > 1)
            return (0, i.jsx)(tu, {
                handlePreviewButtonClick: _,
                text: l,
                onTrackClick: c,
                productLabel: E,
                tabIndex: d,
            });
        else
            return (0, i.jsx)(ta, {
                handlePreviewButtonClick: _,
                text: l,
                onTrackClick: c,
                productLabel: E,
                tabIndex: d,
            });
    return S
        ? (0, i.jsx)(ta, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E, tabIndex: d })
        : (0, i.jsx)(ti, {
              product: n,
              cardRef: e,
              hasShopDiscount: I,
              analyticsLocations: L,
              selectedVariantIndex: r,
              text: D,
              onTrackClick: c,
              productLabel: E,
              tabIndex: d,
          });
}
let tI = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: r,
            text: a,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, K.Vm)(n),
        u = (0, W.Q)(d);
    if (null == d) return null;
    let x = (0, G.rb)(d, u);
    return (0, i.jsx)(tx, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: r,
        text: a,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tk = e(408278),
    tp = e(39623),
    tC = e(878112),
    tb = e(347722);
function tm(t) {
    let {
            product: n,
            selectedVariantIndex: e,
            cardRef: r,
            onClick: a,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, m.Mk)(),
        x = u?.tab,
        I = (0, b.uM)(),
        p = (0, tb.X)(n, s),
        C = (0, K.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, y.s7)(n);
    return null != a || null != l
        ? (0, i.jsx)(tk.K, {
              variant: "primary",
              "aria-label": tn.intl.formatToPlainString(tn.t["5UYoSr"], {
                  ctaLabel: tn.intl.string(tn.t.SKNnqq),
                  productLabel: f,
              }),
              icon: l ?? tp.EyeIcon,
              onClick: (t) => {
                  (t.stopPropagation(), null != a ? a(n.skuId) : (c?.(X.sH.OPEN_DETAILS), C(t)));
              },
              tabIndex: d,
          })
        : p
          ? (0, i.jsx)(b.R9, {
                newValue: { pageCategory: x === X.G2.HOME ? void 0 : I?.pageCategory },
                children: (0, i.jsx)(tC.A, {
                    primary: !0,
                    product: n,
                    selectedVariantIndex: e,
                    returnRef: r,
                    tooltipDelay: 250,
                    onTrackClick: c,
                    tabIndex: d,
                }),
            })
          : null;
}
let tf = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: r,
            icon: a,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, K.Vm)(n),
        u = (0, W.Q)(d);
    if (null == d) return null;
    let x = (0, G.rb)(d, u);
    return (0, i.jsx)(tm, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: r,
        icon: a,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tg = e(484469),
    tT = e(661847),
    tj = e(139146),
    tv = e(668253);
function tA(t) {
    let { product: n, selectedVariantIndex: e, isCardHovered: r, onTrackClick: a, tabIndex: l } = t;
    return (0, i.jsx)(tj.R, {
        product: n,
        selectedVariantIndex: e,
        isCardHovered: r,
        className: tv.i,
        onTrackClick: a,
        tabIndex: l,
    });
}
let tP = function (t) {
    let { skuId: n, isCardHovered: e, onTrackClick: r, tabIndex: a } = t,
        l = (0, K.Vm)(n),
        s = (0, W.Q)(l);
    return null == l
        ? null
        : (0, i.jsx)(tA, { product: l, selectedVariantIndex: s, isCardHovered: e, onTrackClick: r, tabIndex: a });
};
var ty = e(935094),
    th = e(521e3),
    tS = e(496552);
let tL = r.memo(function (t) {
    let {
            product: n,
            hideWishlistButton: e,
            hideProductName: a,
            hideVariantSwitcher: s,
            hidePrice: d,
            hidePrimaryCTA: I,
            hideSecondaryCTA: f,
            badgeOverride: g,
            onClickCard: T,
            onClickPrimaryCTA: N,
            onClickSecondaryCTA: _,
            onMouseEnter: R,
            onMouseLeave: O,
            onFocus: H,
            onBlur: U,
            primaryCTAText: V,
            secondaryCTAIcon: w,
            productNameClassName: Y,
            badgeClassName: B,
            cardClassName: D,
            prioritizedCurrency: M,
            aspectRatio: W,
            hideStaticBundleBackgroundAsset: F,
            listItemProps: $,
        } = t,
        q = $?.tabIndex,
        { previewingVariantIndex: z, handleEntering: G, handleLeaving: Q } = (0, ty.f)(n),
        Z = (0, K.gZ)() ?? M,
        J = (0, j.Nc)(n),
        tt = Z ?? (J ? K.Hi.FIAT : void 0),
        tn = (0, m.Mk)(),
        te = tn?.tab,
        ti = (0, b.uM)(),
        tr = r.useMemo(() => (0, K.UU)(n, te, ti), [n, te, ti]),
        ta = (0, y.s7)(n),
        tl = r.useId(),
        ts = r.useRef(null),
        { isHoveringOrFocusing: to } = (0, C.A)(ts),
        tc = (0, th.$c)(n.skuId),
        td = (0, P.U)(n),
        tu = (0, o.A)(ts, td),
        tx = (0, K.ql)(n, k.A.COLLECTIBLES_SHOP_CARD, tr),
        { analyticsLocations: tk } = (0, p.Ay)(),
        tp = (0, v.f)({ product: n, analyticsLocations: tk }),
        tC = r.useCallback(
            (t) => {
                null != T ? T(t) : (tp(X.sH.OPEN_DETAILS), tx(t));
            },
            [tp, T, tx],
        );
    (0, A.x)(to, n);
    let tb = n.type === c.R.BUNDLE && n.previewAssets?.fgStatic != null,
        tm = n.type === c.R.VARIANTS_GROUP && !s,
        tg = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
        tj = n.type === c.R.BUNDLE && !F,
        tv = !I || !f,
        tA = !(d && a) || tm,
        tL = tA || tv,
        tE = tv || tm;
    return (0, i.jsx)(u.s, {
        ref: tu,
        onClick: tC,
        "aria-label": ta,
        "aria-describedby": tl,
        className: l()(D, tS.ty, { [tS.yo]: to }),
        buttonProps: { ...$, role: "button" },
        onFocus: () => {
            ($?.onFocus?.(), H?.(n.skuId));
        },
        onBlur: () => U?.(n.skuId),
        onMouseEnter: () => R?.(n.skuId),
        onMouseLeave: () => O?.(n.skuId),
        children: (0, i.jsx)(th.vf.Provider, {
            value: tc ? ts : null,
            children: (0, i.jsxs)("div", {
                id: tl,
                className: tS.qt,
                style: { aspectRatio: W },
                children: [
                    tj &&
                        n.previewAssets?.bgStatic != null &&
                        (0, i.jsx)("img", { className: tS.vD, src: n.previewAssets.bgStatic, alt: "" }),
                    (0, i.jsx)("div", {
                        className: l()(tS.Dq, { [tS.$r]: !a || tA || tE, [tS.T9]: tb }),
                        children: (0, i.jsx)(L.A, { skuId: n.skuId, isCardHovered: to, overrideVariantIndex: z }),
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.N1,
                        children: [
                            (0, i.jsx)(h.A, {
                                skuId: n.skuId,
                                badgeOverride: g,
                                className: B,
                                prioritizedCurrency: tt,
                            }),
                            !e && (0, i.jsx)(tP, { skuId: n.skuId, isCardHovered: to, onTrackClick: tp, tabIndex: q }),
                        ],
                    }),
                    tL &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: l()(tS.wY, { [tS.KY]: tb }) }),
                                (0, i.jsxs)("div", {
                                    className: tS.xQ,
                                    children: [
                                        tA &&
                                            (0, i.jsxs)("div", {
                                                className: tS.xE,
                                                children: [
                                                    !(a && d) &&
                                                        (0, i.jsxs)("div", {
                                                            className: tS.Ly,
                                                            children: [
                                                                !a &&
                                                                    (0, i.jsx)(S.A, {
                                                                        skuId: n.skuId,
                                                                        className: l()(Y, tS.tZ),
                                                                    }),
                                                                !d &&
                                                                    (0, i.jsx)("div", {
                                                                        className: tS.oh,
                                                                        children: (0, i.jsx)(E.A, {
                                                                            skuId: n.skuId,
                                                                            prioritizedCurrency: tt,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    tm &&
                                                        (0, i.jsx)(tT.A, {
                                                            skuId: n.skuId,
                                                            isCollapsed: !to,
                                                            onVariantEnter: G,
                                                            onVariantExit: Q,
                                                            overflowProps: tg,
                                                            onTrackClick: tp,
                                                            parentTabIndex: q,
                                                        }),
                                                ],
                                            }),
                                        tv &&
                                            (0, i.jsx)("div", {
                                                className: tS.Vs,
                                                children: (0, i.jsxs)(x.e, {
                                                    wrap: !1,
                                                    className: tS.Ld,
                                                    fullWidth: !0,
                                                    children: [
                                                        !I &&
                                                            (0, i.jsx)(tI, {
                                                                skuId: n.skuId,
                                                                cardRef: ts,
                                                                onClick: N,
                                                                text: V,
                                                                prioritizedCurrency: tt,
                                                                onClickAnalytics: tr,
                                                                onTrackClick: tp,
                                                                tabIndex: q,
                                                            }),
                                                        !f &&
                                                            (0, i.jsx)(tf, {
                                                                skuId: n.skuId,
                                                                cardRef: ts,
                                                                onClick: _,
                                                                icon: w,
                                                                prioritizedCurrency: tt,
                                                                onClickAnalytics: tr,
                                                                onTrackClick: tp,
                                                                tabIndex: q,
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
});
function tE(t) {
    let n = (0, g.c)("product_card");
    return t === d.j.PREMIUM_TIER_2_1_DAY && !n;
}
function tN(t) {
    let { skuId: n, ...e } = t,
        r = (0, K.Vm)(n),
        a = (0, I.A)(() => ({ cardId: (0, s.A)() })),
        l = tE(n);
    return null == r || l ? null : (0, i.jsx)(b.R9, { newValue: a, children: (0, i.jsx)(tL, { product: r, ...e }) });
}
function t_(t) {
    let { skuId: n, ...e } = t,
        a = r.useContext(K.v3),
        { state: o, product: c } = (0, T.IK)(n, {
            needsCategory: !1,
            seedCategoryStore: !0,
            flattenVariants: a.flattenProductVariants,
        }),
        d = (0, I.A)(() => ({ cardId: (0, s.A)() })),
        u = tE(n),
        x = r.useMemo(() => ({ ...a, productOverride: c ?? void 0, standalonePreview: !0 }), [a, c]);
    return u
        ? null
        : "loading" === o
          ? (0, i.jsx)(tg.A, {})
          : null == c
            ? null
            : (0, i.jsx)(b.R9, {
                  newValue: d,
                  children: (0, i.jsx)(K.v3.Provider, {
                      value: x,
                      children: (0, i.jsx)(tL, { product: c, ...e, cardClassName: l()(e.cardClassName, tS.w) }),
                  }),
              });
}
let tR = function (t) {
    return (0, f.$)("product_card") ? (0, i.jsx)(t_, { ...t }) : (0, i.jsx)(tN, { ...t });
};
