n.d(e, { A: () => tV });
var i = n(477900),
    r = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(132500),
    c = n(612324),
    o = n(575593),
    u = n(334279),
    d = n(269115),
    k = n(890856),
    x = n(825484),
    C = n(444927),
    p = n(793574),
    I = n(688810),
    A = n(713517),
    f = n(440938),
    j = n(161918),
    m = n(395856),
    v = n(503089),
    T = n(682301),
    g = n(629042),
    h = n(597783),
    y = n(777829),
    P = n(859587),
    E = n(918838),
    N = n(536572),
    _ = n(268959),
    R = n(387945),
    L = n(618317),
    S = n(140877),
    O = n(702841),
    b = n(821609),
    H = n(44120),
    V = n(465794),
    w = n(757036),
    M = n(206835),
    B = n(106799),
    D = n(652165),
    U = n(287809),
    W = n(158045),
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
    ts = n(508672);
function tl(t) {
    let {
            product: e,
            cardRef: n,
            hasShopDiscount: r,
            analyticsLocations: s,
            selectedVariantIndex: l,
            text: a,
            onTrackClick: c,
        } = t,
        o = (0, G.R8)(e, r, !1),
        u = (0, f.uM)()?.sessionId;
    return (0, i.jsx)(b.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                c?.(tn.sH.BUY_WITH_FIAT),
                (0, H.A)({
                    skuId: (0, X.Y)({ product: e, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: u,
                });
        },
        text: a ?? tr.intl.formatToPlainString(tr.t["cNSL/j"], { price: o }),
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
function tc(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: r } = t;
    return (0, i.jsx)(b.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r?.(tn.sH.VIEW_DETAILS), e(t);
        },
        text: n ?? tr.intl.string(tr.t.FdGl5A),
        fullWidth: !0,
    });
}
function to(t) {
    let { handleUseNow: e, isApplying: n, text: r, onTrackClick: s } = t;
    return (0, i.jsx)(b.$, {
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
    return (0, i.jsx)(b.$, {
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
    return (0, i.jsx)(b.$, {
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
        onTrackClick: c,
    } = t;
    async function o() {
        a?.("claim premium product button"),
            c?.(tn.sH.ADD_TO_COLLECTION),
            await (0, F.iJ)(e.skuId),
            (0, te.A)({ product: e, analyticsLocations: s, purchaseType: tn.gs.PREMIUM_PURCHASE });
    }
    return (0, i.jsx)(b.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), o();
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
            onTrackClick: c,
        } = t,
        o = (0, f.uM)()?.sessionId;
    return (0, i.jsx)(b.$, {
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
                c?.(tn.sH.BUY_WITH_ORBS),
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
                    discoverySessionId: o,
                });
        },
        "aria-label": tr.intl.formatToPlainString(tr.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function tC(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: r } = t;
    return (0, i.jsx)(b.$, {
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
            onClickAnalytics: c,
            onTrackClick: o,
        } = t,
        u = (0, Q.A)({ location: "ProductCardPrimaryCTAInner", product: e }),
        d = (0, O.bG)([U.default], () => U.default.getCurrentUser()),
        k = (0, w.L)(ti.PremiumTypes.TIER_2),
        x = W.Ay.canUseShopDiscounts(d),
        C = (0, g.VZ)(e),
        { isPurchased: A, isPartiallyOwnedBundle: f } = (0, K.h)(e),
        j = (0, G.G0)(e),
        m = (0, G.tt)(e),
        { isDisabled: v } = (0, z.I)(e.skuId),
        T = (0, G.Zu)({ product: e, isPartiallyOwnedBundle: f, isPurchased: A }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: P,
            isOrbExclusive: E,
        } = (0, tt.F)({ product: e, hasShopDiscount: x, prioritizedCurrency: a }),
        { analyticsLocations: N } = (0, I.Ay)(p.A.COLLECTIBLES_SHOP_CARD),
        _ = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
        [R, L] = (0, O.yK)([$.A], () => [
            $.A.isClaiming === e.skuId,
            null != $.A.isClaiming && $.A.isClaiming !== e.skuId,
        ]),
        { handleUseNow: S, isApplying: b, canUseNow: H } = (0, Y.p)({ product: e }),
        V = l ?? C ?? void 0;
    if (null != s) return (0, i.jsx)(td, { onClick: s, skuId: e.skuId, text: l });
    if (j && !k && !m) return (0, i.jsx)(ta, { text: l, onTrackClick: o });
    if (!T || v) return (0, i.jsx)(tc, { handlePreviewButtonClick: _, text: l, onTrackClick: o });
    if (A)
        return H
            ? (0, i.jsx)(to, { handleUseNow: S, isApplying: b, text: l, onTrackClick: o })
            : (0, i.jsx)(tu, { text: l, onTrackClick: o });
    if (u)
        return (0, i.jsx)(I.f5, {
            value: [...N, p.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, i.jsx)(ta, { text: tr.intl.string(tr.t["9wfL34"]), onTrackClick: o }),
        });
    if (j)
        return (0, i.jsx)(tk, {
            product: e,
            isClaimPremiumProductDisabled: L,
            isClaiming: R,
            analyticsLocations: N,
            text: l,
            onClickAnalytics: c,
            onTrackClick: o,
        });
    if (h && y)
        return (0, i.jsx)(tx, {
            product: e,
            checkoutEligiblePrices: P,
            analyticsLocations: N,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: c,
            onTrackClick: o,
        });
    if (h && !y)
        if (P.length > 1) return (0, i.jsx)(tC, { handlePreviewButtonClick: _, text: l, onTrackClick: o });
        else return (0, i.jsx)(tc, { handlePreviewButtonClick: _, text: l, onTrackClick: o });
    return E
        ? (0, i.jsx)(tc, { handlePreviewButtonClick: _, text: l, onTrackClick: o })
        : (0, i.jsx)(tl, {
              product: e,
              cardRef: n,
              hasShopDiscount: x,
              analyticsLocations: N,
              selectedVariantIndex: r,
              text: V,
              onTrackClick: o,
          });
}
let tI = function (t) {
    let { skuId: e, cardRef: n, onClick: r, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: c } = t,
        o = (0, J.Vm)(e),
        u = (0, q.Q)(o);
    if (null == o) return null;
    let d = (0, Z.rb)(o, u);
    return (0, i.jsx)(tp, {
        product: d,
        cardRef: n,
        selectedVariantIndex: u,
        onClick: r,
        text: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: c,
    });
};
var tA = n(408278),
    tf = n(39623),
    tj = n(878112),
    tm = n(347722);
function tv(t) {
    let {
            product: e,
            selectedVariantIndex: n,
            cardRef: r,
            onClick: s,
            icon: l,
            prioritizedCurrency: a,
            onClickAnalytics: c,
            onTrackClick: o,
        } = t,
        u = (0, j.Mk)(),
        d = u?.tab,
        k = (0, f.uM)(),
        x = (0, tm.X)(e, a),
        C = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c);
    return null != s || null != l
        ? (0, i.jsx)(tA.K, {
              variant: "primary",
              "aria-label": tr.intl.string(tr.t.SKNnqq),
              icon: l ?? tf.EyeIcon,
              onClick: (t) => {
                  t.stopPropagation(), null != s ? s(e.skuId) : (o?.(tn.sH.OPEN_DETAILS), C(t));
              },
          })
        : x
          ? (0, i.jsx)(f.R9, {
                newValue: { pageCategory: d === tn.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, i.jsx)(tj.A, {
                    primary: !0,
                    product: e,
                    selectedVariantIndex: n,
                    returnRef: r,
                    tooltipDelay: 250,
                    onTrackClick: o,
                }),
            })
          : null;
}
let tT = function (t) {
    let { skuId: e, cardRef: n, onClick: r, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: c } = t,
        o = (0, J.Vm)(e),
        u = (0, q.Q)(o);
    if (null == o) return null;
    let d = (0, Z.rb)(o, u);
    return (0, i.jsx)(tv, {
        product: d,
        cardRef: n,
        selectedVariantIndex: u,
        onClick: r,
        icon: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: c,
    });
};
var tg = n(484469),
    th = n(661847),
    ty = n(139146),
    tP = n(668253);
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
let tN = function (t) {
    let { skuId: e, isCardHovered: n, onTrackClick: r } = t,
        s = (0, J.Vm)(e),
        l = (0, q.Q)(s);
    return null == s
        ? null
        : (0, i.jsx)(tE, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: r });
};
var t_ = n(935094),
    tR = n(521e3),
    tL = n(496552);
let tS = r.memo(function (t) {
    let {
            product: e,
            hideWishlistButton: n,
            hideProductName: s,
            hideVariantSwitcher: a,
            hidePrice: u,
            hidePrimaryCTA: C,
            hideSecondaryCTA: m,
            badgeOverride: v,
            onClickCard: T,
            onClickPrimaryCTA: O,
            onClickSecondaryCTA: b,
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
        { previewingVariantIndex: Y, handleEntering: z, handleLeaving: K } = (0, t_.f)(e),
        Q = (0, J.gZ)() ?? $,
        Z = (0, g.Nc)(e),
        X = Q ?? (Z ? J.Hi.FIAT : void 0),
        tt = (0, j.Mk)(),
        te = tt?.tab,
        ti = (0, f.uM)(),
        tr = r.useMemo(() => (0, J.UU)(e, te, ti), [e, te, ti]),
        ts = (0, N.s7)(e),
        tl = r.useId(),
        ta = r.useRef(null),
        { isHoveringOrFocusing: tc } = (0, A.A)(ta),
        to = (0, tR.$c)(e.skuId),
        tu = (0, E.U)(e),
        td = (0, c.A)(ta, tu),
        { handleCardVisibilityChange: tk } = (0, h.Z)(e.skuId, te === tn.G2.CATALOG ? "full" : te),
        tx = (0, J.ql)(e, p.A.COLLECTIBLES_SHOP_CARD, tr),
        { analyticsLocations: tC } = (0, I.Ay)(),
        tp = (0, y.f)({ product: e, analyticsLocations: tC }),
        tA = r.useCallback(
            (t) => {
                null != T ? T(t) : (tp(tn.sH.OPEN_DETAILS), tx(t));
            },
            [tp, T, tx],
        );
    (0, P.x)(tc, e);
    let tf = e.type === o.R.BUNDLE && e.previewAssets?.fgStatic != null,
        tj = e.type === o.R.VARIANTS_GROUP && !a,
        tm = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
        tv = e.type === o.R.BUNDLE && !G,
        tg = !C || !m,
        ty = !(u && s) || tj,
        tP = ty || tg,
        tE = tg || tj;
    return (0, i.jsx)(d.L, {
        innerRef: ta,
        onChange: tk,
        threshold: 0,
        children: (0, i.jsx)(k.s, {
            ref: td,
            onClick: tA,
            "aria-label": ts,
            "aria-describedby": tl,
            className: l()(F, tL.ty, { [tL.yo]: tc }),
            onFocus: () => w?.(e.skuId),
            onBlur: () => M?.(e.skuId),
            onMouseEnter: () => H?.(e.skuId),
            onMouseLeave: () => V?.(e.skuId),
            children: (0, i.jsx)(tR.vf.Provider, {
                value: to ? ta : null,
                children: (0, i.jsxs)("div", {
                    id: tl,
                    className: tL.qt,
                    style: { aspectRatio: q },
                    children: [
                        tv &&
                            e.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: tL.vD, src: e.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: l()(tL.Dq, { [tL.$r]: !s || ty || tE, [tL.T9]: tf }),
                            children: (0, i.jsx)(L.A, { skuId: e.skuId, isCardHovered: tc, overrideVariantIndex: Y }),
                        }),
                        (0, i.jsxs)("div", {
                            className: tL.N1,
                            children: [
                                (0, i.jsx)(_.A, {
                                    skuId: e.skuId,
                                    badgeOverride: v,
                                    className: W,
                                    prioritizedCurrency: X,
                                }),
                                !n && (0, i.jsx)(tN, { skuId: e.skuId, isCardHovered: tc, onTrackClick: tp }),
                            ],
                        }),
                        tP &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(tL.wY, { [tL.KY]: tf }) }),
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
                                                                            children: (0, i.jsx)(S.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: X,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tj &&
                                                            (0, i.jsx)(th.A, {
                                                                skuId: e.skuId,
                                                                isCollapsed: !tc,
                                                                onVariantEnter: z,
                                                                onVariantExit: K,
                                                                overflowProps: tm,
                                                                onTrackClick: tp,
                                                            }),
                                                    ],
                                                }),
                                            tg &&
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
                                                                    onClick: O,
                                                                    text: B,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: tr,
                                                                    onTrackClick: tp,
                                                                }),
                                                            !m &&
                                                                (0, i.jsx)(tT, {
                                                                    skuId: e.skuId,
                                                                    cardRef: ta,
                                                                    onClick: b,
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
function tO(t) {
    let e = (0, v.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !e;
}
function tb(t) {
    let { skuId: e, ...n } = t,
        r = (0, J.Vm)(e),
        s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        l = tO(e);
    return null == r || l ? null : (0, i.jsx)(f.R9, { newValue: s, children: (0, i.jsx)(tS, { product: r, ...n }) });
}
function tH(t) {
    let { skuId: e, ...n } = t,
        { state: s, product: c } = (0, T.IK)(e, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        u = tO(e),
        d = r.useContext(J.v3),
        k = r.useMemo(() => ({ ...d, productOverride: c ?? void 0, standalonePreview: !0 }), [d, c]);
    return u
        ? null
        : "loading" === s
          ? (0, i.jsx)(tg.A, {})
          : null == c
            ? null
            : (0, i.jsx)(f.R9, {
                  newValue: o,
                  children: (0, i.jsx)(J.v3.Provider, {
                      value: k,
                      children: (0, i.jsx)(tS, { product: c, ...n, cardClassName: l()(n.cardClassName, tL.w) }),
                  }),
              });
}
let tV = function (t) {
    return (0, m.$)("product_card") ? (0, i.jsx)(tH, { ...t }) : (0, i.jsx)(tb, { ...t });
};
