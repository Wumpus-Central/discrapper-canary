n.d(e, { A: () => tV });
var i = n(477900),
    r = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(132500),
    o = n(612324),
    c = n(575593),
    u = n(334279),
    d = n(269115),
    k = n(890856),
    x = n(825484),
    C = n(444927),
    p = n(793574),
    I = n(688810),
    f = n(713517),
    j = n(440938),
    m = n(161918),
    A = n(395856),
    v = n(503089),
    g = n(650959),
    T = n(629042),
    h = n(597783),
    y = n(777829),
    P = n(859587),
    E = n(918838),
    _ = n(536572),
    N = n(268959),
    R = n(387945),
    L = n(618317),
    b = n(140877),
    S = n(702841),
    O = n(821609),
    H = n(44120),
    V = n(465794),
    w = n(757036),
    M = n(206835),
    B = n(106799),
    D = n(652165),
    U = n(287809),
    W = n(428262),
    F = n(839534),
    $ = n(4227),
    q = n(298072),
    G = n(993408),
    Y = n(450481),
    z = n(740076),
    K = n(466459),
    Q = n(395068),
    Z = n(623373),
    J = n(561769),
    X = n(766172),
    tt = n(57020),
    te = n(61750),
    tn = n(758836),
    ti = n(202541),
    tr = n(375708),
    ts = n(910393);
function tl(t) {
    let {
            product: e,
            cardRef: n,
            hasShopDiscount: r,
            analyticsLocations: s,
            selectedVariantIndex: l,
            text: a,
            onTrackClick: o,
        } = t,
        c = (0, G.R8)(e, r, !1),
        u = (0, j.uM)()?.sessionId;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                o?.(tn.sH.BUY_WITH_FIAT),
                (0, H.A)({
                    skuId: (0, X.Y)({ product: e, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: u,
                });
        },
        text: a ?? tr.intl.formatToPlainString(tr.t["cNSL/j"], { price: c }),
        fullWidth: !0,
    });
}
function ta(t) {
    let { text: e, onTrackClick: n } = t;
    return (0, i.jsx)(V.A, {
        subscriptionTier: ti.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: e ?? tr.intl.string(tr.t.sEAnVH),
        onClick: (t) => {
            t.stopPropagation(), n?.(tn.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function to(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: r } = t;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r?.(tn.sH.VIEW_DETAILS), e(t);
        },
        text: n ?? tr.intl.string(tr.t.FdGl5A),
        fullWidth: !0,
    });
}
function tc(t) {
    let { handleUseNow: e, isApplying: n, text: r, onTrackClick: s } = t;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), s?.(tn.sH.USE_NOW), e();
        },
        loading: n,
        text: r ?? tr.intl.string(tr.t.MAS7uK),
        fullWidth: !0,
    });
}
function tu(t) {
    let { text: e, onTrackClick: n } = t,
        r = (0, M.A)();
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), n?.(tn.sH.EDIT_PROFILE), r();
        },
        text: e ?? tr.intl.string(tr.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function td(t) {
    let { skuId: e, onClick: n, text: r } = t;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), n(e);
        },
        text: r ?? tr.intl.string(tr.t.FdGl5A),
        fullWidth: !0,
    });
}
function tk(t) {
    let {
        product: e,
        isClaimPremiumProductDisabled: n,
        isClaiming: r,
        analyticsLocations: s,
        text: l,
        onClickAnalytics: a,
        onTrackClick: o,
    } = t;
    async function c() {
        a?.("claim premium product button"),
            o?.(tn.sH.ADD_TO_COLLECTION),
            await (0, F.iJ)(e.skuId),
            (0, te.A)({ product: e, analyticsLocations: s, purchaseType: tn.gs.PREMIUM_PURCHASE });
    }
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), c();
        },
        disabled: n,
        loading: r,
        loadingStartedLabel: tr.intl.string(tr.t["TYw+9s"]),
        loadingFinishedLabel: tr.intl.string(tr.t.Pg1UP5),
        text: l ?? tr.intl.string(tr.t.zp6caO),
        fullWidth: !0,
    });
}
function tx(t) {
    let {
            product: e,
            checkoutEligiblePrices: n,
            analyticsLocations: r,
            selectedVariantIndex: s,
            text: l,
            onClickAnalytics: a,
            onTrackClick: o,
        } = t,
        c = (0, j.uM)()?.sessionId;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        text:
            l ??
            tr.intl.format(tr.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, i.jsx)(B.A, { className: ts.f }),
            }),
        onClick: (t) => {
            t.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(tn.sH.BUY_WITH_ORBS),
                (0, D.B4)({
                    skuId: (0, X.Y)({ product: e, selectedVariantIndex: s }),
                    onComplete: (t) => {
                        (0, F.gB)(),
                            (0, te.A)({
                                product: e,
                                analyticsLocations: r,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: tn.gs.ORB,
                            });
                    },
                    analyticsLocations: r,
                    discoverySessionId: c,
                });
        },
        "aria-label": tr.intl.formatToPlainString(tr.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function tC(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: r } = t;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r?.(tn.sH.PAYMENT_OPTIONS), e(t);
        },
        text: n ?? tr.intl.string(tr.t.GpnHfH),
        fullWidth: !0,
    });
}
function tp(t) {
    let {
            product: e,
            cardRef: n,
            selectedVariantIndex: r,
            onClick: s,
            text: l,
            prioritizedCurrency: a,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, Q.A)({ location: "ProductCardPrimaryCTAInner", product: e }),
        d = (0, S.bG)([U.default], () => U.default.getCurrentUser()),
        k = (0, w.L)(ti.PremiumTypes.TIER_2),
        x = W.Ay.canUseShopDiscounts(d),
        C = (0, T.VZ)(e),
        { isPurchased: f, isPartiallyOwnedBundle: j } = (0, K.h)(e),
        m = (0, G.G0)(e),
        A = (0, G.tt)(e),
        { isDisabled: v } = (0, z.I)(e.skuId),
        g = (0, G.Zu)({ product: e, isPartiallyOwnedBundle: j, isPurchased: f }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: P,
            isOrbExclusive: E,
        } = (0, tt.F)({ product: e, hasShopDiscount: x, prioritizedCurrency: a }),
        { analyticsLocations: _ } = (0, I.Ay)(p.A.COLLECTIBLES_SHOP_CARD),
        N = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [R, L] = (0, S.yK)([$.A], () => [
            $.A.isClaiming === e.skuId,
            null != $.A.isClaiming && $.A.isClaiming !== e.skuId,
        ]),
        { handleUseNow: b, isApplying: O, canUseNow: H } = (0, Y.p)({ product: e }),
        V = l ?? C ?? void 0;
    if (null != s) return (0, i.jsx)(td, { onClick: s, skuId: e.skuId, text: l });
    if (m && !k && !A) return (0, i.jsx)(ta, { text: l, onTrackClick: c });
    if (!g || v) return (0, i.jsx)(to, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
    if (f)
        return H
            ? (0, i.jsx)(tc, { handleUseNow: b, isApplying: O, text: l, onTrackClick: c })
            : (0, i.jsx)(tu, { text: l, onTrackClick: c });
    if (u)
        return (0, i.jsx)(I.f5, {
            value: [..._, p.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, i.jsx)(ta, { text: tr.intl.string(tr.t["9wfL34"]), onTrackClick: c }),
        });
    if (m)
        return (0, i.jsx)(tk, {
            product: e,
            isClaimPremiumProductDisabled: L,
            isClaiming: R,
            analyticsLocations: _,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
        });
    if (h && y)
        return (0, i.jsx)(tx, {
            product: e,
            checkoutEligiblePrices: P,
            analyticsLocations: _,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
        });
    if (h && !y)
        if (P.length > 1) return (0, i.jsx)(tC, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
        else return (0, i.jsx)(to, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
    return E
        ? (0, i.jsx)(to, { handlePreviewButtonClick: N, text: l, onTrackClick: c })
        : (0, i.jsx)(tl, {
              product: e,
              cardRef: n,
              hasShopDiscount: x,
              analyticsLocations: _,
              selectedVariantIndex: r,
              text: V,
              onTrackClick: c,
          });
}
let tI = function (t) {
    let { skuId: e, cardRef: n, onClick: r, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = t,
        c = (0, J.Vm)(e),
        u = (0, q.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, i.jsx)(tp, {
        product: d,
        cardRef: n,
        selectedVariantIndex: u,
        onClick: r,
        text: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: o,
    });
};
var tf = n(408278),
    tj = n(39623),
    tm = n(878112),
    tA = n(347722);
function tv(t) {
    let {
            product: e,
            selectedVariantIndex: n,
            cardRef: r,
            onClick: s,
            icon: l,
            prioritizedCurrency: a,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, m.Mk)(),
        d = u?.tab,
        k = (0, j.uM)(),
        x = (0, tA.X)(e, a),
        C = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, i.jsx)(tf.K, {
              variant: "primary",
              "aria-label": tr.intl.string(tr.t.SKNnqq),
              icon: l ?? tj.b,
              onClick: (t) => {
                  t.stopPropagation(), null != s ? s(e.skuId) : (c?.(tn.sH.OPEN_DETAILS), C(t));
              },
          })
        : x
          ? (0, i.jsx)(j.R9, {
                newValue: { pageCategory: d === tn.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, i.jsx)(tm.A, {
                    primary: !0,
                    product: e,
                    selectedVariantIndex: n,
                    returnRef: r,
                    tooltipDelay: 250,
                    onTrackClick: c,
                }),
            })
          : null;
}
let tg = function (t) {
    let { skuId: e, cardRef: n, onClick: r, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = t,
        c = (0, J.Vm)(e),
        u = (0, q.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, i.jsx)(tv, {
        product: d,
        cardRef: n,
        selectedVariantIndex: u,
        onClick: r,
        icon: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: o,
    });
};
var tT = n(484469),
    th = n(661847),
    ty = n(139146),
    tP = n(362523);
function tE(t) {
    let { product: e, selectedVariantIndex: n, isCardHovered: r, onTrackClick: s } = t;
    return (0, i.jsx)(ty.R, {
        product: e,
        selectedVariantIndex: n,
        isCardHovered: r,
        className: tP.i,
        onTrackClick: s,
    });
}
let t_ = function (t) {
    let { skuId: e, isCardHovered: n, onTrackClick: r } = t,
        s = (0, J.Vm)(e),
        l = (0, q.Q)(s);
    return null == s
        ? null
        : (0, i.jsx)(tE, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: r });
};
var tN = n(935094),
    tR = n(521e3),
    tL = n(162945);
let tb = r.memo(function (t) {
    let {
            product: e,
            hideWishlistButton: n,
            hideProductName: s,
            hideVariantSwitcher: a,
            hidePrice: u,
            hidePrimaryCTA: C,
            hideSecondaryCTA: A,
            badgeOverride: v,
            onClickCard: g,
            onClickPrimaryCTA: S,
            onClickSecondaryCTA: O,
            onMouseEnter: H,
            onMouseLeave: V,
            onFocus: w,
            onBlur: M,
            primaryCTAText: B,
            secondaryCTAIcon: D,
            productNameClassName: U,
            badgeClassName: W,
            cardClassName: F,
            prioritizedCurrency: $,
            aspectRatio: q,
            hideStaticBundleBackgroundAsset: G,
        } = t,
        { previewingVariantIndex: Y, handleEntering: z, handleLeaving: K } = (0, tN.f)(e),
        Q = (0, J.gZ)() ?? $,
        Z = (0, T.Nc)(e),
        X = Q ?? (Z ? J.Hi.FIAT : void 0),
        tt = (0, m.Mk)(),
        te = tt?.tab,
        ti = (0, j.uM)(),
        tr = r.useMemo(() => (0, J.UU)(e, te, ti), [e, te, ti]),
        ts = (0, _.s7)(e),
        tl = r.useId(),
        ta = r.useRef(null),
        { isHoveringOrFocusing: to } = (0, f.A)(ta),
        tc = (0, tR.$c)(e.skuId),
        tu = (0, E.U)(e),
        td = (0, o.A)(ta, tu),
        { handleCardVisibilityChange: tk } = (0, h.Z)(e.skuId, te === tn.G2.CATALOG ? "full" : te),
        tx = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD, tr),
        { analyticsLocations: tC } = (0, I.Ay)(),
        tp = (0, y.f)({ product: e, analyticsLocations: tC }),
        tf = r.useCallback(
            (t) => {
                null != g ? g(t) : (tp(tn.sH.OPEN_DETAILS), tx(t));
            },
            [tp, g, tx],
        );
    (0, P.x)(to, e);
    let tj = e.type === c.R.BUNDLE && e.previewAssets?.fgStatic != null,
        tm = e.type === c.R.VARIANTS_GROUP && !a,
        tA = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
        tv = e.type === c.R.BUNDLE && !G,
        tT = !C || !A,
        ty = !(u && s) || tm,
        tP = ty || tT,
        tE = tT || tm;
    return (0, i.jsx)(d.L, {
        innerRef: ta,
        onChange: tk,
        threshold: 0,
        children: (0, i.jsx)(k.s, {
            ref: td,
            onClick: tf,
            "aria-label": ts,
            "aria-describedby": tl,
            className: l()(F, tL.ty, { [tL.yo]: to }),
            onFocus: () => w?.(e.skuId),
            onBlur: () => M?.(e.skuId),
            onMouseEnter: () => H?.(e.skuId),
            onMouseLeave: () => V?.(e.skuId),
            children: (0, i.jsx)(tR.vf.Provider, {
                value: tc ? ta : null,
                children: (0, i.jsxs)("div", {
                    id: tl,
                    className: tL.qt,
                    style: { aspectRatio: q },
                    children: [
                        tv &&
                            e.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: tL.vD, src: e.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: l()(tL.Dq, { [tL.$r]: !s || ty || tE, [tL.T9]: tj }),
                            children: (0, i.jsx)(L.A, { skuId: e.skuId, isCardHovered: to, overrideVariantIndex: Y }),
                        }),
                        (0, i.jsxs)("div", {
                            className: tL.N1,
                            children: [
                                (0, i.jsx)(N.A, {
                                    skuId: e.skuId,
                                    badgeOverride: v,
                                    className: W,
                                    prioritizedCurrency: X,
                                }),
                                !n && (0, i.jsx)(t_, { skuId: e.skuId, isCardHovered: to, onTrackClick: tp }),
                            ],
                        }),
                        tP &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(tL.wY, { [tL.KY]: tj }) }),
                                    (0, i.jsxs)("div", {
                                        className: tL.xQ,
                                        children: [
                                            ty &&
                                                (0, i.jsxs)("div", {
                                                    className: tL.xE,
                                                    children: [
                                                        !(s && u) &&
                                                            (0, i.jsxs)("div", {
                                                                className: tL.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, i.jsx)(R.A, {
                                                                            skuId: e.skuId,
                                                                            className: l()(U, tL.tZ),
                                                                        }),
                                                                    !u &&
                                                                        (0, i.jsx)("div", {
                                                                            className: tL.oh,
                                                                            children: (0, i.jsx)(b.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: X,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tm &&
                                                            (0, i.jsx)(th.A, {
                                                                skuId: e.skuId,
                                                                isCollapsed: !to,
                                                                onVariantEnter: z,
                                                                onVariantExit: K,
                                                                overflowProps: tA,
                                                                onTrackClick: tp,
                                                            }),
                                                    ],
                                                }),
                                            tT &&
                                                (0, i.jsx)("div", {
                                                    className: tL.Vs,
                                                    children: (0, i.jsxs)(x.e, {
                                                        wrap: !1,
                                                        className: tL.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !C &&
                                                                (0, i.jsx)(tI, {
                                                                    skuId: e.skuId,
                                                                    cardRef: ta,
                                                                    onClick: S,
                                                                    text: B,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: tr,
                                                                    onTrackClick: tp,
                                                                }),
                                                            !A &&
                                                                (0, i.jsx)(tg, {
                                                                    skuId: e.skuId,
                                                                    cardRef: ta,
                                                                    onClick: O,
                                                                    icon: D,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: tr,
                                                                    onTrackClick: tp,
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
function tS(t) {
    let e = (0, v.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !e;
}
function tO(t) {
    let { skuId: e, ...n } = t,
        r = (0, J.Vm)(e),
        s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        l = tS(e);
    return null == r || l ? null : (0, i.jsx)(j.R9, { newValue: s, children: (0, i.jsx)(tb, { product: r, ...n }) });
}
function tH(t) {
    let { skuId: e, ...n } = t,
        { state: s, product: l } = (0, g.I)(e, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        c = tS(e),
        u = r.useContext(J.v3),
        d = r.useMemo(() => ({ ...u, productOverride: l ?? void 0, standalonePreview: !0 }), [u, l]);
    return c
        ? null
        : "loading" === s
          ? (0, i.jsx)(tT.A, {})
          : null == l
            ? null
            : (0, i.jsx)(j.R9, {
                  newValue: o,
                  children: (0, i.jsx)(J.v3.Provider, { value: d, children: (0, i.jsx)(tb, { product: l, ...n }) }),
              });
}
let tV = function (t) {
    return (0, A.$)("product_card") ? (0, i.jsx)(tH, { ...t }) : (0, i.jsx)(tO, { ...t });
};
