e.d(n, { A: () => tL });
var i = e(477900),
    a = e(582128),
    r = e(503698),
    l = e.n(r),
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
    f = e(503089),
    g = e(682301),
    T = e(758461),
    j = e(777829),
    v = e(859587),
    A = e(918838),
    P = e(536572),
    y = e(268959),
    S = e(387945),
    h = e(618317),
    L = e(140877),
    E = e(702841),
    N = e(821609),
    _ = e(44120),
    R = e(465794),
    O = e(757036),
    H = e(206835),
    U = e(106799),
    V = e(652165),
    w = e(287809),
    Y = e(24482),
    B = e(815996),
    D = e(4227),
    M = e(947893),
    W = e(993408),
    F = e(450481),
    q = e(740076),
    $ = e(466459),
    z = e(623373),
    G = e(561769),
    K = e(766172),
    Q = e(57020),
    J = e(61750),
    Z = e(758836),
    X = e(202541),
    tt = e(105292),
    tn = e(508672);
function te(t) {
    let {
            product: n,
            cardRef: e,
            hasShopDiscount: a,
            analyticsLocations: r,
            selectedVariantIndex: l,
            text: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = (0, W.R8)(n, a, !1),
        x = (0, b.uM)()?.sessionId,
        I = s ?? tt.intl.formatToPlainString(tt.t["cNSL/j"], { price: u });
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                o?.(Z.sH.BUY_WITH_FIAT),
                (0, _.A)({
                    skuId: (0, K.Y)({ product: n, selectedVariantIndex: l }),
                    returnRef: e,
                    analyticsLocations: r,
                    discoverySessionId: x,
                }));
        },
        text: I,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: I, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function ti(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = n ?? tt.intl.string(tt.t.sEAnVH);
    return (0, i.jsx)(R.A, {
        subscriptionTier: X.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        onClick: (t) => {
            (t.stopPropagation(), e?.(Z.sH.UNLOCK_WITH_NITRO));
        },
        tabIndex: r,
    });
}
function ta(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? tt.intl.string(tt.t.FdGl5A);
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(Z.sH.VIEW_DETAILS), n(t));
        },
        text: s,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tr(t) {
    let { handleUseNow: n, isApplying: e, text: a, onTrackClick: r, productLabel: l, tabIndex: s } = t,
        o = a ?? tt.intl.string(tt.t.MAS7uK);
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(Z.sH.USE_NOW), n());
        },
        loading: e,
        text: o,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: o, productLabel: l }),
        fullWidth: !0,
        tabIndex: s,
    });
}
function tl(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = (0, H.A)(),
        s = n ?? tt.intl.string(tt.t["2p2aYz"]);
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(Z.sH.EDIT_PROFILE), l());
        },
        text: s,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: r,
    });
}
function ts(t) {
    let { skuId: n, onClick: e, text: a, productLabel: r, tabIndex: l } = t,
        s = a ?? tt.intl.string(tt.t.FdGl5A);
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e(n));
        },
        text: s,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function to(t) {
    let {
            product: n,
            isClaimPremiumProductDisabled: e,
            isClaiming: a,
            analyticsLocations: r,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = l ?? tt.intl.string(tt.t.zp6caO);
    async function x() {
        (s?.("claim premium product button"),
            o?.(Z.sH.ADD_TO_COLLECTION),
            await (0, B.iJ)(n.skuId),
            (0, J.A)({ product: n, analyticsLocations: r, purchaseType: Z.gs.PREMIUM_PURCHASE }));
    }
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), x());
        },
        disabled: e,
        loading: a,
        loadingStartedLabel: tt.intl.string(tt.t["TYw+9s"]),
        loadingFinishedLabel: tt.intl.string(tt.t.Pg1UP5),
        text: u,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tc(t) {
    let {
            product: n,
            checkoutEligiblePrices: e,
            analyticsLocations: a,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = (0, b.uM)()?.sessionId,
        x = l ?? tt.intl.formatToPlainString(tt.t.yi41qQ, { orbPrice: e[0].amount });
    return (0, i.jsx)(N.$, {
        variant: "primary",
        text:
            l ??
            tt.intl.format(tt.t.JC15qj, {
                orbPrice: e[0].amount,
                orbIconHook: () => (0, i.jsx)(U.A, { className: tn.f }),
            }),
        onClick: (t) => {
            (t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(Z.sH.BUY_WITH_ORBS),
                (0, V.B4)({
                    skuId: (0, K.Y)({ product: n, selectedVariantIndex: r }),
                    onComplete: (t) => {
                        ((0, B.gB)(),
                            (0, J.A)({
                                product: n,
                                analyticsLocations: a,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: Z.gs.ORB,
                            }));
                    },
                    analyticsLocations: a,
                    discoverySessionId: u,
                }));
        },
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: x, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function td(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? tt.intl.string(tt.t.GpnHfH);
    return (0, i.jsx)(N.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(Z.sH.PAYMENT_OPTIONS), n(t));
        },
        text: s,
        "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tu(t) {
    let {
            product: n,
            cardRef: e,
            selectedVariantIndex: a,
            onClick: r,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, E.bG)([w.default], () => w.default.getCurrentUser()),
        x = (0, O.L)(X.PremiumTypes.TIER_2),
        I = Y.Ay.canUseShopDiscounts(u),
        C = (0, T.hS)(n),
        { isPurchased: b, isPartiallyOwnedBundle: m } = (0, $.h)(n),
        f = (0, W.G0)(n),
        g = (0, W.tt)(n),
        { isDisabled: j } = (0, q.I)(n.skuId),
        v = (0, W.Zu)({ product: n, isPartiallyOwnedBundle: m, isPurchased: b }),
        {
            shouldCheckoutWithOrbs: A,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: S,
            isOrbExclusive: h,
        } = (0, Q.F)({ product: n, hasShopDiscount: I, prioritizedCurrency: s }),
        { analyticsLocations: L } = (0, p.Ay)(k.A.COLLECTIBLES_SHOP_CARD),
        N = (0, P.s7)(n),
        _ = (0, G.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [R, H] = (0, E.yK)([D.A], () => [
            D.A.isClaiming === n.skuId,
            null != D.A.isClaiming && D.A.isClaiming !== n.skuId,
        ]),
        { handleUseNow: U, isApplying: V, canUseNow: B } = (0, F.p)({ product: n }),
        M = l ?? C ?? void 0;
    if (null != r) return (0, i.jsx)(ts, { onClick: r, skuId: n.skuId, text: l, productLabel: N, tabIndex: d });
    if (f && !x && !g) return (0, i.jsx)(ti, { text: l, onTrackClick: c, productLabel: N, tabIndex: d });
    if (!v || j)
        return (0, i.jsx)(ta, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: N, tabIndex: d });
    if (b)
        return B
            ? (0, i.jsx)(tr, { handleUseNow: U, isApplying: V, text: l, onTrackClick: c, productLabel: N, tabIndex: d })
            : (0, i.jsx)(tl, { text: l, onTrackClick: c, productLabel: N, tabIndex: d });
    if (f)
        return (0, i.jsx)(to, {
            product: n,
            isClaimPremiumProductDisabled: H,
            isClaiming: R,
            analyticsLocations: L,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: N,
            tabIndex: d,
        });
    if (A && y)
        return (0, i.jsx)(tc, {
            product: n,
            checkoutEligiblePrices: S,
            analyticsLocations: L,
            selectedVariantIndex: a,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: N,
            tabIndex: d,
        });
    if (A && !y)
        if (S.length > 1)
            return (0, i.jsx)(td, {
                handlePreviewButtonClick: _,
                text: l,
                onTrackClick: c,
                productLabel: N,
                tabIndex: d,
            });
        else
            return (0, i.jsx)(ta, {
                handlePreviewButtonClick: _,
                text: l,
                onTrackClick: c,
                productLabel: N,
                tabIndex: d,
            });
    return h
        ? (0, i.jsx)(ta, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: N, tabIndex: d })
        : (0, i.jsx)(te, {
              product: n,
              cardRef: e,
              hasShopDiscount: I,
              analyticsLocations: L,
              selectedVariantIndex: a,
              text: M,
              onTrackClick: c,
              productLabel: N,
              tabIndex: d,
          });
}
let tx = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: a,
            text: r,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, G.Vm)(n),
        u = (0, M.Q)(d);
    if (null == d) return null;
    let x = (0, z.rb)(d, u);
    return (0, i.jsx)(tu, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: a,
        text: r,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tI = e(408278),
    tk = e(39623),
    tp = e(878112),
    tC = e(347722);
function tb(t) {
    let {
            product: n,
            selectedVariantIndex: e,
            cardRef: a,
            onClick: r,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, m.Mk)(),
        x = u?.tab,
        I = (0, b.uM)(),
        p = (0, tC.X)(n, s),
        C = (0, G.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, P.s7)(n);
    return null != r || null != l
        ? (0, i.jsx)(tI.K, {
              variant: "primary",
              "aria-label": tt.intl.formatToPlainString(tt.t["5UYoSr"], {
                  ctaLabel: tt.intl.string(tt.t.SKNnqq),
                  productLabel: f,
              }),
              icon: l ?? tk.EyeIcon,
              onClick: (t) => {
                  (t.stopPropagation(), null != r ? r(n.skuId) : (c?.(Z.sH.OPEN_DETAILS), C(t)));
              },
              tabIndex: d,
          })
        : p
          ? (0, i.jsx)(b.R9, {
                newValue: { pageCategory: x === Z.G2.HOME ? void 0 : I?.pageCategory },
                children: (0, i.jsx)(tp.A, {
                    primary: !0,
                    product: n,
                    selectedVariantIndex: e,
                    returnRef: a,
                    tooltipDelay: 250,
                    onTrackClick: c,
                    tabIndex: d,
                }),
            })
          : null;
}
let tm = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: a,
            icon: r,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, G.Vm)(n),
        u = (0, M.Q)(d);
    if (null == d) return null;
    let x = (0, z.rb)(d, u);
    return (0, i.jsx)(tb, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: a,
        icon: r,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tf = e(484469),
    tg = e(661847),
    tT = e(753704),
    tj = e(668253);
function tv(t) {
    let { product: n, selectedVariantIndex: e, isCardHovered: a, onTrackClick: r, tabIndex: l } = t;
    return (0, i.jsx)(tT.R, {
        product: n,
        selectedVariantIndex: e,
        isCardHovered: a,
        className: tj.i,
        onTrackClick: r,
        tabIndex: l,
    });
}
let tA = function (t) {
    let { skuId: n, isCardHovered: e, onTrackClick: a, tabIndex: r } = t,
        l = (0, G.Vm)(n),
        s = (0, M.Q)(l);
    return null == l
        ? null
        : (0, i.jsx)(tv, { product: l, selectedVariantIndex: s, isCardHovered: e, onTrackClick: a, tabIndex: r });
};
var tP = e(935094),
    ty = e(521e3),
    tS = e(496552);
let th = a.memo(function (t) {
        let {
                product: n,
                hideWishlistButton: e,
                hideProductName: r,
                hideVariantSwitcher: s,
                hidePrice: d,
                hidePrimaryCTA: I,
                hideSecondaryCTA: f,
                badgeOverride: g,
                onClickCard: E,
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
                listItemProps: q,
            } = t,
            $ = q?.tabIndex,
            { previewingVariantIndex: z, handleEntering: K, handleLeaving: Q } = (0, tP.f)(n),
            J = (0, G.gZ)() ?? M,
            X = (0, T.jo)(n),
            tt = J ?? (X ? Z.Hi.FIAT : void 0),
            tn = (0, m.Mk)(),
            te = tn?.tab,
            ti = (0, b.uM)(),
            ta = a.useMemo(() => (0, G.UU)(n, te, ti), [n, te, ti]),
            tr = (0, P.s7)(n),
            tl = a.useId(),
            ts = a.useRef(null),
            { isHoveringOrFocusing: to } = (0, C.A)(ts),
            tc = (0, ty.$c)(n.skuId),
            td = (0, A.U)(n),
            tu = (0, o.A)(ts, td),
            tI = (0, G.ql)(n, k.A.COLLECTIBLES_SHOP_CARD, ta),
            { analyticsLocations: tk } = (0, p.Ay)(),
            tp = (0, j.f)({ product: n, analyticsLocations: tk }),
            tC = a.useCallback(
                (t) => {
                    null != E ? E(t) : (tp(Z.sH.OPEN_DETAILS), tI(t));
                },
                [tp, E, tI],
            );
        (0, v.x)(to, n);
        let tb = n.type === c.R.BUNDLE && n.previewAssets?.fgStatic != null,
            tf = n.type === c.R.VARIANTS_GROUP && !s,
            tT = a.useMemo(() => ({ maxVariantsToShow: 4, onClick: tI }), [tI]),
            tj = n.type === c.R.BUNDLE && !F,
            tv = !I || !f,
            th = !(d && r) || tf,
            tL = th || tv,
            tE = tv || tf;
        return (0, i.jsx)(u.s, {
            ref: tu,
            onClick: tC,
            "aria-label": tr,
            "aria-describedby": tl,
            className: l()(D, tS.ty, { [tS.yo]: to }),
            buttonProps: { ...q, role: "button" },
            onFocus: () => {
                (q?.onFocus?.(), H?.(n.skuId));
            },
            onBlur: () => U?.(n.skuId),
            onMouseEnter: () => R?.(n.skuId),
            onMouseLeave: () => O?.(n.skuId),
            children: (0, i.jsx)(ty.vf.Provider, {
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
                            className: l()(tS.Dq, { [tS.$r]: !r || th || tE, [tS.T9]: tb }),
                            children: (0, i.jsx)(h.A, { skuId: n.skuId, isCardHovered: to, overrideVariantIndex: z }),
                        }),
                        (0, i.jsxs)("div", {
                            className: tS.N1,
                            children: [
                                (0, i.jsx)(y.A, {
                                    skuId: n.skuId,
                                    badgeOverride: g,
                                    className: B,
                                    prioritizedCurrency: tt,
                                }),
                                !e &&
                                    (0, i.jsx)(tA, {
                                        skuId: n.skuId,
                                        isCardHovered: to,
                                        onTrackClick: tp,
                                        tabIndex: $,
                                    }),
                            ],
                        }),
                        tL &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(tS.wY, { [tS.KY]: tb }) }),
                                    (0, i.jsxs)("div", {
                                        className: tS.xQ,
                                        children: [
                                            th &&
                                                (0, i.jsxs)("div", {
                                                    className: tS.xE,
                                                    children: [
                                                        !(r && d) &&
                                                            (0, i.jsxs)("div", {
                                                                className: tS.Ly,
                                                                children: [
                                                                    !r &&
                                                                        (0, i.jsx)(S.A, {
                                                                            skuId: n.skuId,
                                                                            className: l()(Y, tS.tZ),
                                                                        }),
                                                                    !d &&
                                                                        (0, i.jsx)("div", {
                                                                            className: tS.oh,
                                                                            children: (0, i.jsx)(L.A, {
                                                                                skuId: n.skuId,
                                                                                prioritizedCurrency: tt,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tf &&
                                                            (0, i.jsx)(tg.A, {
                                                                skuId: n.skuId,
                                                                isCollapsed: !to,
                                                                onVariantEnter: K,
                                                                onVariantExit: Q,
                                                                overflowProps: tT,
                                                                onTrackClick: tp,
                                                                parentTabIndex: $,
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
                                                                (0, i.jsx)(tx, {
                                                                    skuId: n.skuId,
                                                                    cardRef: ts,
                                                                    onClick: N,
                                                                    text: V,
                                                                    prioritizedCurrency: tt,
                                                                    onClickAnalytics: ta,
                                                                    onTrackClick: tp,
                                                                    tabIndex: $,
                                                                }),
                                                            !f &&
                                                                (0, i.jsx)(tm, {
                                                                    skuId: n.skuId,
                                                                    cardRef: ts,
                                                                    onClick: _,
                                                                    icon: w,
                                                                    prioritizedCurrency: tt,
                                                                    onClickAnalytics: ta,
                                                                    onTrackClick: tp,
                                                                    tabIndex: $,
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
    tL = function (t) {
        let n,
            { skuId: e, ...r } = t,
            o = a.useContext(G.v3),
            { state: c, product: u } = (0, g.IK)(e, {
                needsCategory: !1,
                seedCategoryStore: !0,
                flattenVariants: o.flattenProductVariants,
            }),
            x = (0, G.Vm)(e),
            k = u ?? ("loading" === c ? x : void 0),
            p = (0, I.A)(() => ({ cardId: (0, s.A)() })),
            C = ((n = (0, f.c)("product_card")), e === d.j.PREMIUM_TIER_2_1_DAY && !n),
            m = a.useMemo(() => ({ ...o, productOverride: k, standalonePreview: !0 }), [o, k]);
        return C
            ? null
            : null == k
              ? "loading" === c
                  ? (0, i.jsx)(tf.A, {})
                  : null
              : (0, i.jsx)(b.R9, {
                    newValue: p,
                    children: (0, i.jsx)(G.v3.Provider, {
                        value: m,
                        children: (0, i.jsx)(th, { product: k, ...r, cardClassName: l()(r.cardClassName, tS.w) }),
                    }),
                });
    };
