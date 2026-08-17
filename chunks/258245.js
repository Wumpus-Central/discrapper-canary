n.d(t, { A: () => eV });
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
    ee = n(57020),
    et = n(61750),
    en = n(758836),
    ei = n(202541),
    er = n(375708),
    es = n(910393);
function el(e) {
    let {
            product: t,
            cardRef: n,
            hasShopDiscount: r,
            analyticsLocations: s,
            selectedVariantIndex: l,
            text: a,
            onTrackClick: o,
        } = e,
        c = (0, G.R8)(t, r, !1),
        u = (0, j.uM)()?.sessionId;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                o?.(en.sH.BUY_WITH_FIAT),
                (0, H.A)({
                    skuId: (0, X.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: u,
                });
        },
        text: a ?? er.intl.formatToPlainString(er.t["cNSL/j"], { price: c }),
        fullWidth: !0,
    });
}
function ea(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, i.jsx)(V.A, {
        subscriptionTier: ei.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? er.intl.string(er.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(en.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eo(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: r } = e;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), r?.(en.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? er.intl.string(er.t.FdGl5A),
        fullWidth: !0,
    });
}
function ec(e) {
    let { handleUseNow: t, isApplying: n, text: r, onTrackClick: s } = e;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(en.sH.USE_NOW), t();
        },
        loading: n,
        text: r ?? er.intl.string(er.t.MAS7uK),
        fullWidth: !0,
    });
}
function eu(e) {
    let { text: t, onTrackClick: n } = e,
        r = (0, M.A)();
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(en.sH.EDIT_PROFILE), r();
        },
        text: t ?? er.intl.string(er.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function ed(e) {
    let { skuId: t, onClick: n, text: r } = e;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n(t);
        },
        text: r ?? er.intl.string(er.t.FdGl5A),
        fullWidth: !0,
    });
}
function ek(e) {
    let {
        product: t,
        isClaimPremiumProductDisabled: n,
        isClaiming: r,
        analyticsLocations: s,
        text: l,
        onClickAnalytics: a,
        onTrackClick: o,
    } = e;
    async function c() {
        a?.("claim premium product button"),
            o?.(en.sH.ADD_TO_COLLECTION),
            await (0, F.iJ)(t.skuId),
            (0, et.A)({ product: t, analyticsLocations: s, purchaseType: en.gs.PREMIUM_PURCHASE });
    }
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), c();
        },
        disabled: n,
        loading: r,
        loadingStartedLabel: er.intl.string(er.t["TYw+9s"]),
        loadingFinishedLabel: er.intl.string(er.t.Pg1UP5),
        text: l ?? er.intl.string(er.t.zp6caO),
        fullWidth: !0,
    });
}
function ex(e) {
    let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: r,
            selectedVariantIndex: s,
            text: l,
            onClickAnalytics: a,
            onTrackClick: o,
        } = e,
        c = (0, j.uM)()?.sessionId;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        text:
            l ??
            er.intl.format(er.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, i.jsx)(B.A, { className: es.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(en.sH.BUY_WITH_ORBS),
                (0, D.B4)({
                    skuId: (0, X.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, F.gB)(),
                            (0, et.A)({
                                product: t,
                                analyticsLocations: r,
                                itemConsumed: e?.entitlements?.[0]?.consumed,
                                purchaseType: en.gs.ORB,
                            });
                    },
                    analyticsLocations: r,
                    discoverySessionId: c,
                });
        },
        "aria-label": er.intl.formatToPlainString(er.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eC(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: r } = e;
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), r?.(en.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? er.intl.string(er.t.GpnHfH),
        fullWidth: !0,
    });
}
function ep(e) {
    let {
            product: t,
            cardRef: n,
            selectedVariantIndex: r,
            onClick: s,
            text: l,
            prioritizedCurrency: a,
            onClickAnalytics: o,
            onTrackClick: c,
        } = e,
        u = (0, Q.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, S.bG)([U.default], () => U.default.getCurrentUser()),
        k = (0, w.L)(ei.PremiumTypes.TIER_2),
        x = W.Ay.canUseShopDiscounts(d),
        C = (0, T.VZ)(t),
        { isPurchased: f, isPartiallyOwnedBundle: j } = (0, K.h)(t),
        m = (0, G.G0)(t),
        A = (0, G.tt)(t),
        { isDisabled: v } = (0, z.I)(t.skuId),
        g = (0, G.Zu)({ product: t, isPartiallyOwnedBundle: j, isPurchased: f }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: P,
            isOrbExclusive: E,
        } = (0, ee.F)({ product: t, hasShopDiscount: x, prioritizedCurrency: a }),
        { analyticsLocations: _ } = (0, I.Ay)(p.A.COLLECTIBLES_SHOP_CARD),
        N = (0, J.ql)(t, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [R, L] = (0, S.yK)([$.A], () => [
            $.A.isClaiming === t.skuId,
            null != $.A.isClaiming && $.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: b, isApplying: O, canUseNow: H } = (0, Y.p)({ product: t }),
        V = l ?? C ?? void 0;
    if (null != s) return (0, i.jsx)(ed, { onClick: s, skuId: t.skuId, text: l });
    if (m && !k && !A) return (0, i.jsx)(ea, { text: l, onTrackClick: c });
    if (!g || v) return (0, i.jsx)(eo, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
    if (f)
        return H
            ? (0, i.jsx)(ec, { handleUseNow: b, isApplying: O, text: l, onTrackClick: c })
            : (0, i.jsx)(eu, { text: l, onTrackClick: c });
    if (u)
        return (0, i.jsx)(I.f5, {
            value: [..._, p.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, i.jsx)(ea, { text: er.intl.string(er.t["9wfL34"]), onTrackClick: c }),
        });
    if (m)
        return (0, i.jsx)(ek, {
            product: t,
            isClaimPremiumProductDisabled: L,
            isClaiming: R,
            analyticsLocations: _,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
        });
    if (h && y)
        return (0, i.jsx)(ex, {
            product: t,
            checkoutEligiblePrices: P,
            analyticsLocations: _,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
        });
    if (h && !y)
        if (P.length > 1) return (0, i.jsx)(eC, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
        else return (0, i.jsx)(eo, { handlePreviewButtonClick: N, text: l, onTrackClick: c });
    return E
        ? (0, i.jsx)(eo, { handlePreviewButtonClick: N, text: l, onTrackClick: c })
        : (0, i.jsx)(el, {
              product: t,
              cardRef: n,
              hasShopDiscount: x,
              analyticsLocations: _,
              selectedVariantIndex: r,
              text: V,
              onTrackClick: c,
          });
}
let eI = function (e) {
    let { skuId: t, cardRef: n, onClick: r, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        c = (0, J.Vm)(t),
        u = (0, q.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, i.jsx)(ep, {
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
var ef = n(408278),
    ej = n(39623),
    em = n(878112),
    eA = n(347722);
function ev(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            cardRef: r,
            onClick: s,
            icon: l,
            prioritizedCurrency: a,
            onClickAnalytics: o,
            onTrackClick: c,
        } = e,
        u = (0, m.Mk)(),
        d = u?.tab,
        k = (0, j.uM)(),
        x = (0, eA.X)(t, a),
        C = (0, J.ql)(t, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, i.jsx)(ef.K, {
              variant: "primary",
              "aria-label": er.intl.string(er.t.SKNnqq),
              icon: l ?? ej.EyeIcon,
              onClick: (e) => {
                  e.stopPropagation(), null != s ? s(t.skuId) : (c?.(en.sH.OPEN_DETAILS), C(e));
              },
          })
        : x
          ? (0, i.jsx)(j.R9, {
                newValue: { pageCategory: d === en.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, i.jsx)(em.A, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: r,
                    tooltipDelay: 250,
                    onTrackClick: c,
                }),
            })
          : null;
}
let eg = function (e) {
    let { skuId: t, cardRef: n, onClick: r, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        c = (0, J.Vm)(t),
        u = (0, q.Q)(c);
    if (null == c) return null;
    let d = (0, Z.rb)(c, u);
    return (0, i.jsx)(ev, {
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
var eT = n(484469),
    eh = n(661847),
    ey = n(139146),
    eP = n(362523);
function eE(e) {
    let { product: t, selectedVariantIndex: n, isCardHovered: r, onTrackClick: s } = e;
    return (0, i.jsx)(ey.R, {
        product: t,
        selectedVariantIndex: n,
        isCardHovered: r,
        className: eP.i,
        onTrackClick: s,
    });
}
let e_ = function (e) {
    let { skuId: t, isCardHovered: n, onTrackClick: r } = e,
        s = (0, J.Vm)(t),
        l = (0, q.Q)(s);
    return null == s
        ? null
        : (0, i.jsx)(eE, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: r });
};
var eN = n(935094),
    eR = n(521e3),
    eL = n(162945);
let eb = r.memo(function (e) {
    let {
            product: t,
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
        } = e,
        { previewingVariantIndex: Y, handleEntering: z, handleLeaving: K } = (0, eN.f)(t),
        Q = (0, J.gZ)() ?? $,
        Z = (0, T.Nc)(t),
        X = Q ?? (Z ? J.Hi.FIAT : void 0),
        ee = (0, m.Mk)(),
        et = ee?.tab,
        ei = (0, j.uM)(),
        er = r.useMemo(() => (0, J.UU)(t, et, ei), [t, et, ei]),
        es = (0, _.s7)(t),
        el = r.useId(),
        ea = r.useRef(null),
        { isHoveringOrFocusing: eo } = (0, f.A)(ea),
        ec = (0, eR.$c)(t.skuId),
        eu = (0, E.U)(t),
        ed = (0, o.A)(ea, eu),
        { handleCardVisibilityChange: ek } = (0, h.Z)(t.skuId, et === en.G2.CATALOG ? "full" : et),
        ex = (0, J.ql)(t, p.A.COLLECTIBLES_SHOP_CARD, er),
        { analyticsLocations: eC } = (0, I.Ay)(),
        ep = (0, y.f)({ product: t, analyticsLocations: eC }),
        ef = r.useCallback(
            (e) => {
                null != g ? g(e) : (ep(en.sH.OPEN_DETAILS), ex(e));
            },
            [ep, g, ex],
        );
    (0, P.x)(eo, t);
    let ej = t.type === c.R.BUNDLE && t.previewAssets?.fgStatic != null,
        em = t.type === c.R.VARIANTS_GROUP && !a,
        eA = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
        ev = t.type === c.R.BUNDLE && !G,
        eT = !C || !A,
        ey = !(u && s) || em,
        eP = ey || eT,
        eE = eT || em;
    return (0, i.jsx)(d.L, {
        innerRef: ea,
        onChange: ek,
        threshold: 0,
        children: (0, i.jsx)(k.s, {
            ref: ed,
            onClick: ef,
            "aria-label": es,
            "aria-describedby": el,
            className: l()(F, eL.ty, { [eL.yo]: eo }),
            onFocus: () => w?.(t.skuId),
            onBlur: () => M?.(t.skuId),
            onMouseEnter: () => H?.(t.skuId),
            onMouseLeave: () => V?.(t.skuId),
            children: (0, i.jsx)(eR.vf.Provider, {
                value: ec ? ea : null,
                children: (0, i.jsxs)("div", {
                    id: el,
                    className: eL.qt,
                    style: { aspectRatio: q },
                    children: [
                        ev &&
                            t.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: eL.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: l()(eL.Dq, { [eL.$r]: !s || ey || eE, [eL.T9]: ej }),
                            children: (0, i.jsx)(L.A, { skuId: t.skuId, isCardHovered: eo, overrideVariantIndex: Y }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eL.N1,
                            children: [
                                (0, i.jsx)(N.A, {
                                    skuId: t.skuId,
                                    badgeOverride: v,
                                    className: W,
                                    prioritizedCurrency: X,
                                }),
                                !n && (0, i.jsx)(e_, { skuId: t.skuId, isCardHovered: eo, onTrackClick: ep }),
                            ],
                        }),
                        eP &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(eL.wY, { [eL.KY]: ej }) }),
                                    (0, i.jsxs)("div", {
                                        className: eL.xQ,
                                        children: [
                                            ey &&
                                                (0, i.jsxs)("div", {
                                                    className: eL.xE,
                                                    children: [
                                                        !(s && u) &&
                                                            (0, i.jsxs)("div", {
                                                                className: eL.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, i.jsx)(R.A, {
                                                                            skuId: t.skuId,
                                                                            className: l()(U, eL.tZ),
                                                                        }),
                                                                    !u &&
                                                                        (0, i.jsx)("div", {
                                                                            className: eL.oh,
                                                                            children: (0, i.jsx)(b.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: X,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        em &&
                                                            (0, i.jsx)(eh.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !eo,
                                                                onVariantEnter: z,
                                                                onVariantExit: K,
                                                                overflowProps: eA,
                                                                onTrackClick: ep,
                                                            }),
                                                    ],
                                                }),
                                            eT &&
                                                (0, i.jsx)("div", {
                                                    className: eL.Vs,
                                                    children: (0, i.jsxs)(x.e, {
                                                        wrap: !1,
                                                        className: eL.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !C &&
                                                                (0, i.jsx)(eI, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ea,
                                                                    onClick: S,
                                                                    text: B,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: er,
                                                                    onTrackClick: ep,
                                                                }),
                                                            !A &&
                                                                (0, i.jsx)(eg, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ea,
                                                                    onClick: O,
                                                                    icon: D,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: er,
                                                                    onTrackClick: ep,
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
function eS(e) {
    let t = (0, v.c)("product_card");
    return e === u.j.PREMIUM_TIER_2_1_DAY && !t;
}
function eO(e) {
    let { skuId: t, ...n } = e,
        r = (0, J.Vm)(t),
        s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        l = eS(t);
    return null == r || l ? null : (0, i.jsx)(j.R9, { newValue: s, children: (0, i.jsx)(eb, { product: r, ...n }) });
}
function eH(e) {
    let { skuId: t, ...n } = e,
        { state: s, product: l } = (0, g.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, C.A)(() => ({ cardId: (0, a.A)() })),
        c = eS(t),
        u = r.useContext(J.v3),
        d = r.useMemo(() => ({ ...u, productOverride: l ?? void 0, standalonePreview: !0 }), [u, l]);
    return c
        ? null
        : "loading" === s
          ? (0, i.jsx)(eT.A, {})
          : null == l
            ? null
            : (0, i.jsx)(j.R9, {
                  newValue: o,
                  children: (0, i.jsx)(J.v3.Provider, { value: d, children: (0, i.jsx)(eb, { product: l, ...n }) }),
              });
}
let eV = function (e) {
    return (0, A.$)("product_card") ? (0, i.jsx)(eH, { ...e }) : (0, i.jsx)(eO, { ...e });
};
