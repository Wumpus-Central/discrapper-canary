i.d(r, { A: () => tU });
var n = i(477900),
    e = i(582128),
    l = i(503698),
    a = i.n(l),
    s = i(132500),
    o = i(612324),
    c = i(575593),
    u = i(334279),
    d = i(269115),
    k = i(890856),
    x = i(825484),
    p = i(444927),
    C = i(793574),
    f = i(688810),
    I = i(713517),
    m = i(440938),
    A = i(161918),
    T = i(395856),
    g = i(503089),
    j = i(682301),
    v = i(629042),
    h = i(597783),
    P = i(777829),
    y = i(859587),
    S = i(918838),
    b = i(536572),
    L = i(268959),
    E = i(387945),
    N = i(618317),
    _ = i(140877),
    R = i(702841),
    O = i(821609),
    H = i(44120),
    U = i(465794),
    V = i(757036),
    w = i(206835),
    M = i(106799),
    Y = i(652165),
    B = i(287809),
    D = i(158045),
    W = i(839534),
    F = i(4227),
    $ = i(298072),
    q = i(993408),
    G = i(450481),
    z = i(740076),
    K = i(466459),
    Q = i(395068),
    Z = i(623373),
    J = i(561769),
    X = i(766172),
    tt = i(57020),
    tr = i(61750),
    ti = i(758836),
    tn = i(202541),
    te = i(375708),
    tl = i(508672);
function ta(t) {
    let {
            product: r,
            cardRef: i,
            hasShopDiscount: e,
            analyticsLocations: l,
            selectedVariantIndex: a,
            text: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, q.R8)(r, e, !1),
        d = (0, m.uM)()?.sessionId,
        k = s ?? te.intl.formatToPlainString(te.t["cNSL/j"], { price: u });
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                o?.(ti.sH.BUY_WITH_FIAT),
                (0, H.A)({
                    skuId: (0, X.Y)({ product: r, selectedVariantIndex: a }),
                    returnRef: i,
                    analyticsLocations: l,
                    discoverySessionId: d,
                });
        },
        text: k,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: k, productLabel: c }),
        fullWidth: !0,
    });
}
function ts(t) {
    let { text: r, onTrackClick: i, productLabel: e } = t,
        l = r ?? te.intl.string(te.t.sEAnVH);
    return (0, n.jsx)(U.A, {
        subscriptionTier: tn.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: l, productLabel: e }),
        onClick: (t) => {
            t.stopPropagation(), i?.(ti.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function to(t) {
    let { handlePreviewButtonClick: r, text: i, onTrackClick: e, productLabel: l } = t,
        a = i ?? te.intl.string(te.t.FdGl5A);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(ti.sH.VIEW_DETAILS), r(t);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tc(t) {
    let { handleUseNow: r, isApplying: i, text: e, onTrackClick: l, productLabel: a } = t,
        s = e ?? te.intl.string(te.t.MAS7uK);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), l?.(ti.sH.USE_NOW), r();
        },
        loading: i,
        text: s,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
    });
}
function tu(t) {
    let { text: r, onTrackClick: i, productLabel: e } = t,
        l = (0, w.A)(),
        a = r ?? te.intl.string(te.t["2p2aYz"]);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), i?.(ti.sH.EDIT_PROFILE), l();
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: e }),
        fullWidth: !0,
    });
}
function td(t) {
    let { skuId: r, onClick: i, text: e, productLabel: l } = t,
        a = e ?? te.intl.string(te.t.FdGl5A);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), i(r);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tk(t) {
    let {
            product: r,
            isClaimPremiumProductDisabled: i,
            isClaiming: e,
            analyticsLocations: l,
            text: a,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = a ?? te.intl.string(te.t.zp6caO);
    async function d() {
        s?.("claim premium product button"),
            o?.(ti.sH.ADD_TO_COLLECTION),
            await (0, W.iJ)(r.skuId),
            (0, tr.A)({ product: r, analyticsLocations: l, purchaseType: ti.gs.PREMIUM_PURCHASE });
    }
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), d();
        },
        disabled: i,
        loading: e,
        loadingStartedLabel: te.intl.string(te.t["TYw+9s"]),
        loadingFinishedLabel: te.intl.string(te.t.Pg1UP5),
        text: u,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
    });
}
function tx(t) {
    let {
            product: r,
            checkoutEligiblePrices: i,
            analyticsLocations: e,
            selectedVariantIndex: l,
            text: a,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, m.uM)()?.sessionId,
        d = a ?? te.intl.formatToPlainString(te.t.yi41qQ, { orbPrice: i[0].amount });
    return (0, n.jsx)(O.$, {
        variant: "primary",
        text:
            a ??
            te.intl.format(te.t.JC15qj, {
                orbPrice: i[0].amount,
                orbIconHook: () => (0, n.jsx)(M.A, { className: tl.f }),
            }),
        onClick: (t) => {
            t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(ti.sH.BUY_WITH_ORBS),
                (0, Y.B4)({
                    skuId: (0, X.Y)({ product: r, selectedVariantIndex: l }),
                    onComplete: (t) => {
                        (0, W.gB)(),
                            (0, tr.A)({
                                product: r,
                                analyticsLocations: e,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: ti.gs.ORB,
                            });
                    },
                    analyticsLocations: e,
                    discoverySessionId: u,
                });
        },
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: d, productLabel: c }),
        fullWidth: !0,
    });
}
function tp(t) {
    let { handlePreviewButtonClick: r, text: i, onTrackClick: e, productLabel: l } = t,
        a = i ?? te.intl.string(te.t.GpnHfH);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(ti.sH.PAYMENT_OPTIONS), r(t);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tC(t) {
    let {
            product: r,
            cardRef: i,
            selectedVariantIndex: e,
            onClick: l,
            text: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, Q.A)({ location: "ProductCardPrimaryCTAInner", product: r }),
        d = (0, R.bG)([B.default], () => B.default.getCurrentUser()),
        k = (0, V.L)(tn.PremiumTypes.TIER_2),
        x = D.Ay.canUseShopDiscounts(d),
        p = (0, v.VZ)(r),
        { isPurchased: I, isPartiallyOwnedBundle: m } = (0, K.h)(r),
        A = (0, q.G0)(r),
        T = (0, q.tt)(r),
        { isDisabled: g } = (0, z.I)(r.skuId),
        j = (0, q.Zu)({ product: r, isPartiallyOwnedBundle: m, isPurchased: I }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: P,
            checkoutEligiblePrices: y,
            isOrbExclusive: S,
        } = (0, tt.F)({ product: r, hasShopDiscount: x, prioritizedCurrency: s }),
        { analyticsLocations: L } = (0, f.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
        E = (0, b.s7)(r),
        N = (0, J.ql)(r, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [_, O] = (0, R.yK)([F.A], () => [
            F.A.isClaiming === r.skuId,
            null != F.A.isClaiming && F.A.isClaiming !== r.skuId,
        ]),
        { handleUseNow: H, isApplying: U, canUseNow: w } = (0, G.p)({ product: r }),
        M = a ?? p ?? void 0;
    if (null != l) return (0, n.jsx)(td, { onClick: l, skuId: r.skuId, text: a, productLabel: E });
    if (A && !k && !T) return (0, n.jsx)(ts, { text: a, onTrackClick: c, productLabel: E });
    if (!j || g) return (0, n.jsx)(to, { handlePreviewButtonClick: N, text: a, onTrackClick: c, productLabel: E });
    if (I)
        return w
            ? (0, n.jsx)(tc, { handleUseNow: H, isApplying: U, text: a, onTrackClick: c, productLabel: E })
            : (0, n.jsx)(tu, { text: a, onTrackClick: c, productLabel: E });
    if (u)
        return (0, n.jsx)(f.f5, {
            value: [...L, C.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, n.jsx)(ts, { text: te.intl.string(te.t["9wfL34"]), onTrackClick: c, productLabel: E }),
        });
    if (A)
        return (0, n.jsx)(tk, {
            product: r,
            isClaimPremiumProductDisabled: O,
            isClaiming: _,
            analyticsLocations: L,
            text: a,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
        });
    if (h && P)
        return (0, n.jsx)(tx, {
            product: r,
            checkoutEligiblePrices: y,
            analyticsLocations: L,
            selectedVariantIndex: e,
            text: a,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
        });
    if (h && !P)
        if (y.length > 1)
            return (0, n.jsx)(tp, { handlePreviewButtonClick: N, text: a, onTrackClick: c, productLabel: E });
        else return (0, n.jsx)(to, { handlePreviewButtonClick: N, text: a, onTrackClick: c, productLabel: E });
    return S
        ? (0, n.jsx)(to, { handlePreviewButtonClick: N, text: a, onTrackClick: c, productLabel: E })
        : (0, n.jsx)(ta, {
              product: r,
              cardRef: i,
              hasShopDiscount: x,
              analyticsLocations: L,
              selectedVariantIndex: e,
              text: M,
              onTrackClick: c,
              productLabel: E,
          });
}
let tf = function (t) {
    let { skuId: r, cardRef: i, onClick: e, text: l, prioritizedCurrency: a, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, J.Vm)(r),
        u = (0, $.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, n.jsx)(tC, {
        product: d,
        cardRef: i,
        selectedVariantIndex: u,
        onClick: e,
        text: l,
        prioritizedCurrency: a,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tI = i(408278),
    tm = i(39623),
    tA = i(878112),
    tT = i(347722);
function tg(t) {
    let {
            product: r,
            selectedVariantIndex: i,
            cardRef: e,
            onClick: l,
            icon: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, A.Mk)(),
        d = u?.tab,
        k = (0, m.uM)(),
        x = (0, tT.X)(r, s),
        p = (0, J.ql)(r, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, b.s7)(r);
    return null != l || null != a
        ? (0, n.jsx)(tI.K, {
              variant: "primary",
              "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], {
                  ctaLabel: te.intl.string(te.t.SKNnqq),
                  productLabel: f,
              }),
              icon: a ?? tm.EyeIcon,
              onClick: (t) => {
                  t.stopPropagation(), null != l ? l(r.skuId) : (c?.(ti.sH.OPEN_DETAILS), p(t));
              },
          })
        : x
          ? (0, n.jsx)(m.R9, {
                newValue: { pageCategory: d === ti.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, n.jsx)(tA.A, {
                    primary: !0,
                    product: r,
                    selectedVariantIndex: i,
                    returnRef: e,
                    tooltipDelay: 250,
                    onTrackClick: c,
                }),
            })
          : null;
}
let tj = function (t) {
    let { skuId: r, cardRef: i, onClick: e, icon: l, prioritizedCurrency: a, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, J.Vm)(r),
        u = (0, $.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, n.jsx)(tg, {
        product: d,
        cardRef: i,
        selectedVariantIndex: u,
        onClick: e,
        icon: l,
        prioritizedCurrency: a,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tv = i(484469),
    th = i(661847),
    tP = i(139146),
    ty = i(668253);
function tS(t) {
    let { product: r, selectedVariantIndex: i, isCardHovered: e, onTrackClick: l } = t;
    return (0, n.jsx)(tP.R, {
        product: r,
        selectedVariantIndex: i,
        isCardHovered: e,
        className: ty.i,
        onTrackClick: l,
    });
}
let tb = function (t) {
    let { skuId: r, isCardHovered: i, onTrackClick: e } = t,
        l = (0, J.Vm)(r),
        a = (0, $.Q)(l);
    return null == l
        ? null
        : (0, n.jsx)(tS, { product: l, selectedVariantIndex: a, isCardHovered: i, onTrackClick: e });
};
var tL = i(935094),
    tE = i(521e3),
    tN = i(496552);
let t_ = e.memo(function (t) {
    let {
            product: r,
            hideWishlistButton: i,
            hideProductName: l,
            hideVariantSwitcher: s,
            hidePrice: u,
            hidePrimaryCTA: p,
            hideSecondaryCTA: T,
            badgeOverride: g,
            onClickCard: j,
            onClickPrimaryCTA: R,
            onClickSecondaryCTA: O,
            onMouseEnter: H,
            onMouseLeave: U,
            onFocus: V,
            onBlur: w,
            primaryCTAText: M,
            secondaryCTAIcon: Y,
            productNameClassName: B,
            badgeClassName: D,
            cardClassName: W,
            prioritizedCurrency: F,
            aspectRatio: $,
            hideStaticBundleBackgroundAsset: q,
        } = t,
        { previewingVariantIndex: G, handleEntering: z, handleLeaving: K } = (0, tL.f)(r),
        Q = (0, J.gZ)() ?? F,
        Z = (0, v.Nc)(r),
        X = Q ?? (Z ? J.Hi.FIAT : void 0),
        tt = (0, A.Mk)(),
        tr = tt?.tab,
        tn = (0, m.uM)(),
        te = e.useMemo(() => (0, J.UU)(r, tr, tn), [r, tr, tn]),
        tl = (0, b.s7)(r),
        ta = e.useId(),
        ts = e.useRef(null),
        { isHoveringOrFocusing: to } = (0, I.A)(ts),
        tc = (0, tE.$c)(r.skuId),
        tu = (0, S.U)(r),
        td = (0, o.A)(ts, tu),
        { handleCardVisibilityChange: tk } = (0, h.Z)(r.skuId, tr === ti.G2.CATALOG ? "full" : tr),
        tx = (0, J.ql)(r, C.A.COLLECTIBLES_SHOP_CARD, te),
        { analyticsLocations: tp } = (0, f.Ay)(),
        tC = (0, P.f)({ product: r, analyticsLocations: tp }),
        tI = e.useCallback(
            (t) => {
                null != j ? j(t) : (tC(ti.sH.OPEN_DETAILS), tx(t));
            },
            [tC, j, tx],
        );
    (0, y.x)(to, r);
    let tm = r.type === c.R.BUNDLE && r.previewAssets?.fgStatic != null,
        tA = r.type === c.R.VARIANTS_GROUP && !s,
        tT = e.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
        tg = r.type === c.R.BUNDLE && !q,
        tv = !p || !T,
        tP = !(u && l) || tA,
        ty = tP || tv,
        tS = tv || tA;
    return (0, n.jsx)(d.L, {
        innerRef: ts,
        onChange: tk,
        threshold: 0,
        children: (0, n.jsx)(k.s, {
            ref: td,
            onClick: tI,
            "aria-label": tl,
            "aria-describedby": ta,
            className: a()(W, tN.ty, { [tN.yo]: to }),
            onFocus: () => V?.(r.skuId),
            onBlur: () => w?.(r.skuId),
            onMouseEnter: () => H?.(r.skuId),
            onMouseLeave: () => U?.(r.skuId),
            children: (0, n.jsx)(tE.vf.Provider, {
                value: tc ? ts : null,
                children: (0, n.jsxs)("div", {
                    id: ta,
                    className: tN.qt,
                    style: { aspectRatio: $ },
                    children: [
                        tg &&
                            r.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: tN.vD, src: r.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: a()(tN.Dq, { [tN.$r]: !l || tP || tS, [tN.T9]: tm }),
                            children: (0, n.jsx)(N.A, { skuId: r.skuId, isCardHovered: to, overrideVariantIndex: G }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tN.N1,
                            children: [
                                (0, n.jsx)(L.A, {
                                    skuId: r.skuId,
                                    badgeOverride: g,
                                    className: D,
                                    prioritizedCurrency: X,
                                }),
                                !i && (0, n.jsx)(tb, { skuId: r.skuId, isCardHovered: to, onTrackClick: tC }),
                            ],
                        }),
                        ty &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: a()(tN.wY, { [tN.KY]: tm }) }),
                                    (0, n.jsxs)("div", {
                                        className: tN.xQ,
                                        children: [
                                            tP &&
                                                (0, n.jsxs)("div", {
                                                    className: tN.xE,
                                                    children: [
                                                        !(l && u) &&
                                                            (0, n.jsxs)("div", {
                                                                className: tN.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, n.jsx)(E.A, {
                                                                            skuId: r.skuId,
                                                                            className: a()(B, tN.tZ),
                                                                        }),
                                                                    !u &&
                                                                        (0, n.jsx)("div", {
                                                                            className: tN.oh,
                                                                            children: (0, n.jsx)(_.A, {
                                                                                skuId: r.skuId,
                                                                                prioritizedCurrency: X,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tA &&
                                                            (0, n.jsx)(th.A, {
                                                                skuId: r.skuId,
                                                                isCollapsed: !to,
                                                                onVariantEnter: z,
                                                                onVariantExit: K,
                                                                overflowProps: tT,
                                                                onTrackClick: tC,
                                                            }),
                                                    ],
                                                }),
                                            tv &&
                                                (0, n.jsx)("div", {
                                                    className: tN.Vs,
                                                    children: (0, n.jsxs)(x.e, {
                                                        wrap: !1,
                                                        className: tN.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !p &&
                                                                (0, n.jsx)(tf, {
                                                                    skuId: r.skuId,
                                                                    cardRef: ts,
                                                                    onClick: R,
                                                                    text: M,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: te,
                                                                    onTrackClick: tC,
                                                                }),
                                                            !T &&
                                                                (0, n.jsx)(tj, {
                                                                    skuId: r.skuId,
                                                                    cardRef: ts,
                                                                    onClick: O,
                                                                    icon: Y,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: te,
                                                                    onTrackClick: tC,
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
        }),
    });
});
function tR(t) {
    let r = (0, g.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !r;
}
function tO(t) {
    let { skuId: r, ...i } = t,
        e = (0, J.Vm)(r),
        l = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        a = tR(r);
    return null == e || a ? null : (0, n.jsx)(m.R9, { newValue: l, children: (0, n.jsx)(t_, { product: e, ...i }) });
}
function tH(t) {
    let { skuId: r, ...i } = t,
        l = e.useContext(J.v3),
        { state: o, product: c } = (0, j.IK)(r, {
            needsCategory: !1,
            seedCategoryStore: !0,
            flattenVariants: l.flattenProductVariants,
        }),
        u = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        d = tR(r),
        k = e.useMemo(() => ({ ...l, productOverride: c ?? void 0, standalonePreview: !0 }), [l, c]);
    return d
        ? null
        : "loading" === o
          ? (0, n.jsx)(tv.A, {})
          : null == c
            ? null
            : (0, n.jsx)(m.R9, {
                  newValue: u,
                  children: (0, n.jsx)(J.v3.Provider, {
                      value: k,
                      children: (0, n.jsx)(t_, { product: c, ...i, cardClassName: a()(i.cardClassName, tN.w) }),
                  }),
              });
}
let tU = function (t) {
    return (0, T.$)("product_card") ? (0, n.jsx)(tH, { ...t }) : (0, n.jsx)(tO, { ...t });
};
