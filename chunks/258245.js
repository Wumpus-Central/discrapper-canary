r.d(i, { A: () => tU });
var n = r(477900),
    e = r(582128),
    l = r(503698),
    a = r.n(l),
    s = r(132500),
    o = r(612324),
    c = r(575593),
    u = r(334279),
    d = r(269115),
    k = r(890856),
    x = r(825484),
    p = r(444927),
    C = r(793574),
    I = r(688810),
    f = r(713517),
    m = r(440938),
    A = r(161918),
    T = r(395856),
    g = r(503089),
    j = r(682301),
    v = r(629042),
    h = r(597783),
    P = r(777829),
    y = r(859587),
    S = r(918838),
    b = r(536572),
    L = r(268959),
    E = r(387945),
    N = r(618317),
    _ = r(140877),
    R = r(702841),
    O = r(821609),
    H = r(44120),
    U = r(465794),
    V = r(757036),
    w = r(206835),
    M = r(106799),
    Y = r(652165),
    B = r(287809),
    D = r(158045),
    W = r(839534),
    F = r(4227),
    $ = r(298072),
    q = r(993408),
    G = r(450481),
    z = r(740076),
    K = r(466459),
    Q = r(395068),
    Z = r(623373),
    J = r(561769),
    X = r(766172),
    tt = r(57020),
    ti = r(61750),
    tr = r(758836),
    tn = r(202541),
    te = r(375708),
    tl = r(508672);
function ta(t) {
    let {
            product: i,
            cardRef: r,
            hasShopDiscount: e,
            analyticsLocations: l,
            selectedVariantIndex: a,
            text: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, q.R8)(i, e, !1),
        d = (0, m.uM)()?.sessionId,
        k = s ?? te.intl.formatToPlainString(te.t["cNSL/j"], { price: u });
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                o?.(tr.sH.BUY_WITH_FIAT),
                (0, H.A)({
                    skuId: (0, X.Y)({ product: i, selectedVariantIndex: a }),
                    returnRef: r,
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
    let { text: i, onTrackClick: r, productLabel: e } = t,
        l = i ?? te.intl.string(te.t.sEAnVH);
    return (0, n.jsx)(U.A, {
        subscriptionTier: tn.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: l, productLabel: e }),
        onClick: (t) => {
            t.stopPropagation(), r?.(tr.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function to(t) {
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: l } = t,
        a = r ?? te.intl.string(te.t.FdGl5A);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(tr.sH.VIEW_DETAILS), i(t);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tc(t) {
    let { handleUseNow: i, isApplying: r, text: e, onTrackClick: l, productLabel: a } = t,
        s = e ?? te.intl.string(te.t.MAS7uK);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), l?.(tr.sH.USE_NOW), i();
        },
        loading: r,
        text: s,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
    });
}
function tu(t) {
    let { text: i, onTrackClick: r, productLabel: e } = t,
        l = (0, w.A)(),
        a = i ?? te.intl.string(te.t["2p2aYz"]);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r?.(tr.sH.EDIT_PROFILE), l();
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: e }),
        fullWidth: !0,
    });
}
function td(t) {
    let { skuId: i, onClick: r, text: e, productLabel: l } = t,
        a = e ?? te.intl.string(te.t.FdGl5A);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r(i);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tk(t) {
    let {
            product: i,
            isClaimPremiumProductDisabled: r,
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
            o?.(tr.sH.ADD_TO_COLLECTION),
            await (0, W.iJ)(i.skuId),
            (0, ti.A)({ product: i, analyticsLocations: l, purchaseType: tr.gs.PREMIUM_PURCHASE });
    }
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), d();
        },
        disabled: r,
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
            product: i,
            checkoutEligiblePrices: r,
            analyticsLocations: e,
            selectedVariantIndex: l,
            text: a,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, m.uM)()?.sessionId,
        d = a ?? te.intl.formatToPlainString(te.t.yi41qQ, { orbPrice: r[0].amount });
    return (0, n.jsx)(O.$, {
        variant: "primary",
        text:
            a ??
            te.intl.format(te.t.JC15qj, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(M.A, { className: tl.f }),
            }),
        onClick: (t) => {
            t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(tr.sH.BUY_WITH_ORBS),
                (0, Y.B4)({
                    skuId: (0, X.Y)({ product: i, selectedVariantIndex: l }),
                    onComplete: (t) => {
                        (0, W.gB)(),
                            (0, ti.A)({
                                product: i,
                                analyticsLocations: e,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: tr.gs.ORB,
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
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: l } = t,
        a = r ?? te.intl.string(te.t.GpnHfH);
    return (0, n.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(tr.sH.PAYMENT_OPTIONS), i(t);
        },
        text: a,
        "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], { ctaLabel: a, productLabel: l }),
        fullWidth: !0,
    });
}
function tC(t) {
    let {
            product: i,
            cardRef: r,
            selectedVariantIndex: e,
            onClick: l,
            text: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, Q.A)({ location: "ProductCardPrimaryCTAInner", product: i }),
        d = (0, R.bG)([B.default], () => B.default.getCurrentUser()),
        k = (0, V.L)(tn.PremiumTypes.TIER_2),
        x = D.Ay.canUseShopDiscounts(d),
        p = (0, v.VZ)(i),
        { isPurchased: f, isPartiallyOwnedBundle: m } = (0, K.h)(i),
        A = (0, q.G0)(i),
        T = (0, q.tt)(i),
        { isDisabled: g } = (0, z.I)(i.skuId),
        j = (0, q.Zu)({ product: i, isPartiallyOwnedBundle: m, isPurchased: f }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: P,
            checkoutEligiblePrices: y,
            isOrbExclusive: S,
        } = (0, tt.F)({ product: i, hasShopDiscount: x, prioritizedCurrency: s }),
        { analyticsLocations: L } = (0, I.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
        E = (0, b.s7)(i),
        N = (0, J.ql)(i, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [_, O] = (0, R.yK)([F.A], () => [
            F.A.isClaiming === i.skuId,
            null != F.A.isClaiming && F.A.isClaiming !== i.skuId,
        ]),
        { handleUseNow: H, isApplying: U, canUseNow: w } = (0, G.p)({ product: i }),
        M = a ?? p ?? void 0;
    if (null != l) return (0, n.jsx)(td, { onClick: l, skuId: i.skuId, text: a, productLabel: E });
    if (A && !k && !T) return (0, n.jsx)(ts, { text: a, onTrackClick: c, productLabel: E });
    if (!j || g) return (0, n.jsx)(to, { handlePreviewButtonClick: N, text: a, onTrackClick: c, productLabel: E });
    if (f)
        return w
            ? (0, n.jsx)(tc, { handleUseNow: H, isApplying: U, text: a, onTrackClick: c, productLabel: E })
            : (0, n.jsx)(tu, { text: a, onTrackClick: c, productLabel: E });
    if (u)
        return (0, n.jsx)(I.f5, {
            value: [...L, C.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, n.jsx)(ts, { text: te.intl.string(te.t["9wfL34"]), onTrackClick: c, productLabel: E }),
        });
    if (A)
        return (0, n.jsx)(tk, {
            product: i,
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
            product: i,
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
              product: i,
              cardRef: r,
              hasShopDiscount: x,
              analyticsLocations: L,
              selectedVariantIndex: e,
              text: M,
              onTrackClick: c,
              productLabel: E,
          });
}
let tI = function (t) {
    let { skuId: i, cardRef: r, onClick: e, text: l, prioritizedCurrency: a, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, J.Vm)(i),
        u = (0, $.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, n.jsx)(tC, {
        product: d,
        cardRef: r,
        selectedVariantIndex: u,
        onClick: e,
        text: l,
        prioritizedCurrency: a,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tf = r(408278),
    tm = r(39623),
    tA = r(878112),
    tT = r(347722);
function tg(t) {
    let {
            product: i,
            selectedVariantIndex: r,
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
        x = (0, tT.X)(i, s),
        p = (0, J.ql)(i, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        I = (0, b.s7)(i);
    return null != l || null != a
        ? (0, n.jsx)(tf.K, {
              variant: "primary",
              "aria-label": te.intl.formatToPlainString(te.t["5UYoSr"], {
                  ctaLabel: te.intl.string(te.t.SKNnqq),
                  productLabel: I,
              }),
              icon: a ?? tm.EyeIcon,
              onClick: (t) => {
                  t.stopPropagation(), null != l ? l(i.skuId) : (c?.(tr.sH.OPEN_DETAILS), p(t));
              },
          })
        : x
          ? (0, n.jsx)(m.R9, {
                newValue: { pageCategory: d === tr.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, n.jsx)(tA.A, {
                    primary: !0,
                    product: i,
                    selectedVariantIndex: r,
                    returnRef: e,
                    tooltipDelay: 250,
                    onTrackClick: c,
                }),
            })
          : null;
}
let tj = function (t) {
    let { skuId: i, cardRef: r, onClick: e, icon: l, prioritizedCurrency: a, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, J.Vm)(i),
        u = (0, $.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, n.jsx)(tg, {
        product: d,
        cardRef: r,
        selectedVariantIndex: u,
        onClick: e,
        icon: l,
        prioritizedCurrency: a,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tv = r(484469),
    th = r(661847),
    tP = r(139146),
    ty = r(668253);
function tS(t) {
    let { product: i, selectedVariantIndex: r, isCardHovered: e, onTrackClick: l } = t;
    return (0, n.jsx)(tP.R, {
        product: i,
        selectedVariantIndex: r,
        isCardHovered: e,
        className: ty.i,
        onTrackClick: l,
    });
}
let tb = function (t) {
    let { skuId: i, isCardHovered: r, onTrackClick: e } = t,
        l = (0, J.Vm)(i),
        a = (0, $.Q)(l);
    return null == l
        ? null
        : (0, n.jsx)(tS, { product: l, selectedVariantIndex: a, isCardHovered: r, onTrackClick: e });
};
var tL = r(935094),
    tE = r(521e3),
    tN = r(496552);
let t_ = e.memo(function (t) {
    let {
            product: i,
            hideWishlistButton: r,
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
        { previewingVariantIndex: G, handleEntering: z, handleLeaving: K } = (0, tL.f)(i),
        Q = (0, J.gZ)() ?? F,
        Z = (0, v.Nc)(i),
        X = Q ?? (Z ? J.Hi.FIAT : void 0),
        tt = (0, A.Mk)(),
        ti = tt?.tab,
        tn = (0, m.uM)(),
        te = e.useMemo(() => (0, J.UU)(i, ti, tn), [i, ti, tn]),
        tl = (0, b.s7)(i),
        ta = e.useId(),
        ts = e.useRef(null),
        { isHoveringOrFocusing: to } = (0, f.A)(ts),
        tc = (0, tE.$c)(i.skuId),
        tu = (0, S.U)(i),
        td = (0, o.A)(ts, tu),
        { handleCardVisibilityChange: tk } = (0, h.Z)(i.skuId, ti === tr.G2.CATALOG ? "full" : ti),
        tx = (0, J.ql)(i, C.A.COLLECTIBLES_SHOP_CARD, te),
        { analyticsLocations: tp } = (0, I.Ay)(),
        tC = (0, P.f)({ product: i, analyticsLocations: tp }),
        tf = e.useCallback(
            (t) => {
                null != j ? j(t) : (tC(tr.sH.OPEN_DETAILS), tx(t));
            },
            [tC, j, tx],
        );
    (0, y.x)(to, i);
    let tm = i.type === c.R.BUNDLE && i.previewAssets?.fgStatic != null,
        tA = i.type === c.R.VARIANTS_GROUP && !s,
        tT = e.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
        tg = i.type === c.R.BUNDLE && !q,
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
            onClick: tf,
            "aria-label": tl,
            "aria-describedby": ta,
            className: a()(W, tN.ty, { [tN.yo]: to }),
            onFocus: () => V?.(i.skuId),
            onBlur: () => w?.(i.skuId),
            onMouseEnter: () => H?.(i.skuId),
            onMouseLeave: () => U?.(i.skuId),
            children: (0, n.jsx)(tE.vf.Provider, {
                value: tc ? ts : null,
                children: (0, n.jsxs)("div", {
                    id: ta,
                    className: tN.qt,
                    style: { aspectRatio: $ },
                    children: [
                        tg &&
                            i.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: tN.vD, src: i.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: a()(tN.Dq, { [tN.$r]: !l || tP || tS, [tN.T9]: tm }),
                            children: (0, n.jsx)(N.A, { skuId: i.skuId, isCardHovered: to, overrideVariantIndex: G }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tN.N1,
                            children: [
                                (0, n.jsx)(L.A, {
                                    skuId: i.skuId,
                                    badgeOverride: g,
                                    className: D,
                                    prioritizedCurrency: X,
                                }),
                                !r && (0, n.jsx)(tb, { skuId: i.skuId, isCardHovered: to, onTrackClick: tC }),
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
                                                                            skuId: i.skuId,
                                                                            className: a()(B, tN.tZ),
                                                                        }),
                                                                    !u &&
                                                                        (0, n.jsx)("div", {
                                                                            className: tN.oh,
                                                                            children: (0, n.jsx)(_.A, {
                                                                                skuId: i.skuId,
                                                                                prioritizedCurrency: X,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tA &&
                                                            (0, n.jsx)(th.A, {
                                                                skuId: i.skuId,
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
                                                                (0, n.jsx)(tI, {
                                                                    skuId: i.skuId,
                                                                    cardRef: ts,
                                                                    onClick: R,
                                                                    text: M,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: te,
                                                                    onTrackClick: tC,
                                                                }),
                                                            !T &&
                                                                (0, n.jsx)(tj, {
                                                                    skuId: i.skuId,
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
    let i = (0, g.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !i;
}
function tO(t) {
    let { skuId: i, ...r } = t,
        e = (0, J.Vm)(i),
        l = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        a = tR(i);
    return null == e || a ? null : (0, n.jsx)(m.R9, { newValue: l, children: (0, n.jsx)(t_, { product: e, ...r }) });
}
function tH(t) {
    let { skuId: i, ...r } = t,
        { state: l, product: o } = (0, j.IK)(i, { needsCategory: !1, seedCategoryStore: !0 }),
        c = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        u = tR(i),
        d = e.useContext(J.v3),
        k = e.useMemo(() => ({ ...d, productOverride: o ?? void 0, standalonePreview: !0 }), [d, o]);
    return u
        ? null
        : "loading" === l
          ? (0, n.jsx)(tv.A, {})
          : null == o
            ? null
            : (0, n.jsx)(m.R9, {
                  newValue: c,
                  children: (0, n.jsx)(J.v3.Provider, {
                      value: k,
                      children: (0, n.jsx)(t_, { product: o, ...r, cardClassName: a()(r.cardClassName, tN.w) }),
                  }),
              });
}
let tU = function (t) {
    return (0, T.$)("product_card") ? (0, n.jsx)(tH, { ...t }) : (0, n.jsx)(tO, { ...t });
};
