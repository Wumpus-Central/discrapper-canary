r.d(t, { A: () => e1 });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    l = r.n(s),
    a = r(132500),
    u = r(612324),
    c = r(575593),
    o = r(230109),
    d = r(890856),
    p = r(825484),
    k = r(444927),
    C = r(793574),
    m = r(688810),
    I = r(713517),
    x = r(440938),
    g = r(161918),
    A = r(320447),
    h = r(597783),
    _ = r(954571),
    E = r(298072),
    f = r(623373),
    T = r(652215),
    j = r(66455),
    R = r(110259),
    y = r(172218),
    v = r(139286),
    P = r(536572),
    b = r(17928),
    L = r(403581),
    N = r(777666),
    O = r(287809),
    S = r(927578),
    H = r(590180),
    V = r(993408),
    B = r(13875),
    D = r(466459),
    U = r(561769),
    W = r(525723),
    M = r(57020),
    F = r(985018),
    w = r(512514);
let G = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: i, className: s, prioritizedCurrency: a } = e,
            { isPurchased: u, isPartiallyOwnedBundle: o } = (0, D.h)(t),
            d = (0, V.G0)(t),
            p = (0, b.bG)([H.A], () => H.A.getCategoryForProduct(t.skuId)),
            k = p?.unpublishedAt != null ? (0, V.WU)(p.unpublishedAt) : null,
            C = (0, b.bG)([O.default], () => O.default.getCurrentUser()),
            m = S.Ay.canUseShopDiscounts(C),
            I = (0, W.V_)(t),
            { isOrbExclusive: x } = (0, M.F)({
                product: t,
                hasShopDiscount: m,
                prioritizedCurrency: a,
                hasDiscountOffer: null != I,
            }),
            g = (0, B.Do)("ProductCardBadgeInner") && t.type === c.R.PROFILE_FRAME,
            A = r;
        if (
            (null == A &&
                (!i && (0, V.HF)(p?.unpublishedAt)
                    ? (A = U.AW.LIMITED_TIME)
                    : !o && !u && (0, V.aT)(t.skuId)
                      ? (A = U.AW.NEW)
                      : x
                        ? (A = U.AW.ORBS_EXCLUSIVE)
                        : g
                          ? (A = U.AW.EARLY_ACCESS)
                          : d && (A = U.AW.NITRO_EXCLUSIVE)),
            null == A || A === U.AW.NONE)
        )
            return null;
        if (A === U.AW.EARLY_ACCESS)
            return (0, n.jsx)("span", {
                role: "img",
                "aria-label": F.intl.string(F.t["1m6qcO"]),
                className: l()(s, w.$),
                children: (0, n.jsx)(L.t, { size: "sm", color: "currentColor" }),
            });
        let h = null;
        switch (A) {
            case U.AW.LIMITED_TIME:
                h =
                    null != k
                        ? k > 1
                            ? F.intl.formatToPlainString(F.t.Io7ozn, { days: k })
                            : F.intl.string(F.t.Bc13HF)
                        : F.intl.string(F.t["h/uBCR"]);
                break;
            case U.AW.NEW:
                h = F.intl.string(F.t.y2b7CA);
                break;
            case U.AW.NITRO_EXCLUSIVE:
                h = F.intl.string(F.t.X3Ekj8);
                break;
            case U.AW.ORBS_EXCLUSIVE:
                h = F.intl.string(F.t["0TmQRG"]);
        }
        return (0, n.jsx)(N.Lp, { text: h, disableColor: !0, className: l()(s, w.s) });
    },
    z = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
            a = (0, U.Vm)(t),
            u = (0, E.Q)(a);
        if (null == a) return null;
        let c = (0, f.rb)(a, u);
        return (0, n.jsx)(G, {
            product: c,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: i,
            prioritizedCurrency: s,
        });
    };
var Q = r(534514);
let Y = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, U.Vm)(t),
        s = (0, P.VG)(i),
        { enabled: l } = (0, A.P)("ProductCardName"),
        a = l && null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(Q.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? F.intl.format(F.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var q = r(947641),
    K = r(778712),
    X = r(661531),
    $ = r(139136),
    Z = r(395744),
    J = r(846957),
    ee = r(929283),
    et = r(245068),
    er = r(761365),
    en = r(721861);
let ei = (e) => {
        let { product: t, isCardHovered: r } = e,
            i = (0, f.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, D.h)(t),
            { enabled: u } = (0, A.P)("ProductCardPreview"),
            o = i === c.R.PROFILE_EFFECT || i === c.R.PROFILE_FRAME || (i === c.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: l()(en.mA, { [en.zj]: (s || a) && !r, [en.Ge]: o }),
                    children: (0, n.jsx)(es, { product: t, isCardHovered: r }),
                }),
                s && (0, n.jsx)(el, { hidden: r }),
            ],
        });
    },
    es = (e) => {
        var t;
        let r,
            i,
            { product: s, isCardHovered: l } = e,
            a = (0, b.bG)([O.default], () => O.default.getCurrentUser()),
            u = (0, f.YW)(s),
            o =
                ((r = (0, E.Q)(s)),
                (i = null != t ? t : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > i
                    ? s.variants[i].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, n.jsx)($.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, n.jsx)("div", { className: en.pI, children: (0, n.jsx)(Z.A, { profileFrame: o }) });
            case c.R.AVATAR_DECORATION:
                return (0, n.jsx)(ee.i, { item: o, user: a, isHighlighted: l, avatarSize: K._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, n.jsx)(er.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, n.jsx)(et.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, n.jsx)(J.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    el = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(q.r, {
            size: "custom",
            color: X.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(en.zo, { [en.R]: t }),
        });
    },
    ea = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
            s = (0, U.Vm)(t),
            l = (0, E.Q)(s);
        if (null == s) return null;
        let a = (0, f.rb)(s, i ?? l);
        return (0, n.jsx)(ei, { product: a, isCardHovered: r });
    };
var eu = r(702841),
    ec = r(834730),
    eo = r(740076),
    ed = r(219103),
    ep = r(380836);
let ek = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, eu.bG)([O.default], () => O.default.getCurrentUser()),
            l = S.Ay.canUseCollectibles(s),
            a = (0, V.xM)(s),
            u = (0, B.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, eo.I)(t.skuId),
            { isPurchased: p, isPartiallyOwnedBundle: k } = (0, D.h)(t),
            C = (0, V.G0)(t),
            m = (0, V.tt)(t),
            I = i.useMemo(() => (0, V.fT)(t, o), [t, o]),
            x = (0, W.V_)(t),
            {
                checkoutEligiblePrices: g,
                hasSufficientOrbs: A,
                shouldCheckoutWithOrbs: h,
            } = (0, M.F)({ product: t, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != x });
        return d
            ? (0, n.jsx)(ec.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: F.intl.string(F.t.wu4gyV),
              })
            : k
              ? (0, n.jsx)(ec.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: F.intl.string(F.t.BEjTij),
                })
              : p && !(C && !l)
                ? (0, n.jsx)(ec.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: F.intl.string(F.t["6cfuDj"]),
                  })
                : m
                  ? (0, n.jsx)(ec.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: F.intl.string(F.t.nBtvYB),
                    })
                  : C
                    ? (0, n.jsx)(ec.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: F.intl.string(F.t.rt69oo),
                      })
                    : 0 === g.length
                      ? null
                      : (0, n.jsx)(ed.x, {
                            priceAmount: g[0].amount,
                            priceCurrency: g[0].currency,
                            discount: I,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? V.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: x,
                            className: h && !A ? ep.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    eC = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, U.Vm)(t),
            s = (0, E.Q)(i);
        if (null == i) return null;
        let l = (0, f.rb)(i, s);
        return (0, n.jsx)(ek, { product: l, prioritizedCurrency: r });
    };
var em = r(821609),
    eI = r(44120),
    ex = r(465794),
    eg = r(757036),
    eA = r(106799),
    eh = r(652165),
    e_ = r(693477),
    eE = r(4227),
    ef = r(640634),
    eT = r(450481),
    ej = r(395068),
    eR = r(766172),
    ey = r(61750),
    ev = r(758836),
    eP = r(788868),
    eb = r(40577);
let eL = (e) => {
        let {
                product: t,
                cardRef: r,
                hasShopDiscount: i,
                analyticsLocations: s,
                selectedVariantIndex: l,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = e,
            d = (0, V.R8)(t, i, !1),
            p = a
                ? F.intl.formatToPlainString(F.t["5U5RB5"], { discountOfferAmount: u })
                : F.intl.formatToPlainString(F.t["cNSL/j"], { price: d });
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(ev.sH.BUY_WITH_FIAT),
                    (0, eI.A)({
                        skuId: (0, eR.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    eN = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, n.jsx)(ex.A, {
            subscriptionTier: eP.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? F.intl.string(F.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(ev.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eO = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? F.intl.string(F.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: s } = e;
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(ev.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? F.intl.string(F.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? F.intl.string(F.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eV = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: i,
                analyticsLocations: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(ev.sH.ADD_TO_COLLECTION),
                    await (0, e_.iJ)(t.skuId),
                    (0, ey.A)({ product: t, analyticsLocations: s, purchaseType: ev.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
            loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
            text: l ?? F.intl.string(F.t.zp6caO),
            fullWidth: !0,
        });
    },
    eB = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: i,
                selectedVariantIndex: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, ef.l)("collectibles_shop_product_card");
        return (0, n.jsx)(em.$, {
            variant: "primary",
            text:
                l ??
                F.intl.format(c ? F.t.JC15qj : F.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(eA.A, { className: eb.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(ev.sH.BUY_WITH_ORBS),
                    (0, eh.B4)({
                        skuId: (0, eR.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, e_.gB)(),
                                (0, ey.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: ev.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": F.intl.formatToPlainString(F.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eD = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(em.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? F.intl.string(F.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eU = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: s,
                text: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, ej.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
            d = (0, eu.bG)([O.default], () => O.default.getCurrentUser()),
            p = (0, eg.L)(eP.PremiumTypes.TIER_2),
            k = S.Ay.canUseShopDiscounts(d),
            { isPurchased: I, isPartiallyOwnedBundle: x } = (0, D.h)(t),
            g = (0, V.G0)(t),
            A = (0, V.tt)(t),
            { isDisabled: h } = (0, eo.I)(t.skuId),
            _ = (0, V.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: I }),
            E = (0, W.V_)(t),
            f = null != E,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: j,
                checkoutEligiblePrices: R,
                isOrbExclusive: y,
            } = (0, M.F)({ product: t, hasShopDiscount: k, prioritizedCurrency: a, hasDiscountOffer: f }),
            { analyticsLocations: v } = (0, m.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
            P = (0, U.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [b, L] = (0, eu.yK)([eE.A], () => [
                eE.A.isClaiming === t.skuId,
                null != eE.A.isClaiming && eE.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: N, isApplying: H } = (0, eT.p)({ product: t });
        if (null != s) return (0, n.jsx)(eH, { onClick: s, skuId: t.skuId, text: l });
        if (g && !p && !A) return (0, n.jsx)(eN, { text: l, onTrackClick: c });
        if (!_ || h) return (0, n.jsx)(eO, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        if (I) return (0, n.jsx)(eS, { handleUseNow: N, isApplying: H, text: l, onTrackClick: c });
        if (o) return (0, n.jsx)(eN, { text: l, onTrackClick: c });
        if (g)
            return (0, n.jsx)(eV, {
                product: t,
                isClaimPremiumProductDisabled: L,
                isClaiming: b,
                analyticsLocations: v,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && j)
            return (0, n.jsx)(eB, {
                product: t,
                checkoutEligiblePrices: R,
                analyticsLocations: v,
                selectedVariantIndex: i,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && !j)
            if (R.length > 1) return (0, n.jsx)(eD, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
            else return (0, n.jsx)(eO, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        return y
            ? (0, n.jsx)(eO, { handlePreviewButtonClick: P, text: l, onTrackClick: c })
            : (0, n.jsx)(eL, {
                  product: t,
                  cardRef: r,
                  hasShopDiscount: k,
                  analyticsLocations: v,
                  selectedVariantIndex: i,
                  hasDiscountOffer: f,
                  discountOfferAmount: E,
                  text: l,
                  onTrackClick: c,
              });
    },
    eW = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, U.Vm)(t),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, f.rb)(c, o);
        return (0, n.jsx)(eU, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            text: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eM = r(408278),
    eF = r(39623),
    ew = r(878112),
    eG = r(347722);
let ez = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: i,
                onClick: s,
                icon: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, g.Mk)(),
            d = o?.tab,
            p = (0, x.uM)(),
            k = (0, eG.X)(t, a),
            m = (0, U.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, n.jsx)(eM.K, {
                  variant: "primary",
                  "aria-label": F.intl.string(F.t.SKNnqq),
                  icon: l ?? eF.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(ev.sH.OPEN_DETAILS), m(e));
                  },
              })
            : k
              ? (0, n.jsx)(x.R9, {
                    newValue: { pageCategory: d === ev.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(ew.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: i,
                        tooltipDelay: 250,
                        onTrackClick: c,
                    }),
                })
              : null;
    },
    eQ = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, U.Vm)(t),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, f.rb)(c, o);
        return (0, n.jsx)(ez, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eY = r(661847),
    eq = r(139146),
    eK = r(420960);
let eX = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: s } = e;
        return (0, n.jsx)(eq.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: eK.i,
            onTrackClick: s,
        });
    },
    e$ = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            s = (0, U.Vm)(t),
            l = (0, E.Q)(s);
        return null == s
            ? null
            : (0, n.jsx)(eX, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: i });
    };
var eZ = r(935094),
    eJ = r(496569);
let e0 = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: k,
                hidePrimaryCTA: b,
                hideSecondaryCTA: L,
                badgeOverride: N,
                skipLimitedTimeCheck: O,
                onClickCard: S,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: V,
                onMouseEnter: B,
                onMouseLeave: D,
                onFocus: W,
                onBlur: M,
                primaryCTAText: F,
                secondaryCTAIcon: w,
                productNameClassName: G,
                badgeClassName: Q,
                cardClassName: q,
                prioritizedCurrency: K,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, eZ.f)(t),
            et = (0, U.gZ)() ?? K,
            { enabled: er } = (0, A.P)("ProductCard"),
            en = (0, g.Mk)(),
            ei = en?.tab,
            es = (0, x.uM)(),
            el = i.useMemo(() => (0, U.UU)(t, ei, es), [t, ei, es]),
            eu = (0, P.s7)(t),
            ec = i.useId(),
            eo = i.useRef(null),
            { isHoveringOrFocusing: ed } = (0, I.A)(eo),
            ep = (function (e) {
                let t = (0, x.uM)(),
                    { analyticsLocations: r } = (0, m.Ay)(),
                    n = (0, E.Q)(e),
                    s = i.useRef(null),
                    l = i.useRef(!1),
                    a = i.useRef(n);
                i.useEffect(() => {
                    a.current = n;
                }, [n]);
                let u = i.useCallback(() => {
                        let n = (0, f.B1)(e);
                        (0, v.x)(
                            {
                                name: R.ImpressionNames.SHOP_CARD,
                                type: R.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[a.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, f.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
                    c = (0, y.K)((e) => {
                        e
                            ? l.current ||
                              (null === s.current &&
                                  (s.current = setTimeout(() => {
                                      u(), (l.current = !0), (s.current = null);
                                  }, 1e3)))
                            : ((l.current = !1), null !== s.current && (clearTimeout(s.current), (s.current = null)));
                    }, 0.5);
                return (
                    i.useEffect(
                        () => () => {
                            null !== s.current && (clearTimeout(s.current), (s.current = null));
                        },
                        [],
                    ),
                    c
                );
            })(t),
            ek = (0, u.A)(eo, ep),
            { handleCardVisibilityChange: em } = (0, h.Z)(t.skuId, ei === ev.G2.CATALOG ? "full" : ei),
            eI = (0, U.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, el),
            { analyticsLocations: ex } = (0, m.Ay)(),
            eg = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: s, tilePosition: l } = (0, x.uM)() ?? {},
                    a = (0, E.Q)(t);
                return i.useCallback(
                    (e, i) => {
                        _.default.track(T.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, f.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: n,
                            product_sku_ids: (0, f.v8)(t),
                            location_stack: r,
                            position_in_section: l,
                        });
                    },
                    [t, a, s, n, r, l],
                );
            })({ product: t, analyticsLocations: ex }),
            eA = i.useCallback(
                (e) => {
                    null != S ? S(e) : (eg(ev.sH.OPEN_DETAILS), eI(e));
                },
                [eg, S, eI],
            );
        !(function (e, t) {
            let r = (0, x.uM)(),
                { analyticsLocations: n } = (0, m.Ay)(),
                s = (0, E.Q)(t),
                l = i.useRef(!1),
                a = (0, j.A)(r),
                u = (0, j.A)(t),
                c = (0, j.A)(s),
                o = (0, j.A)(n);
            i.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, f.B1)(t);
                    _.default.track(T.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, f.v8)(t),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(ed, t);
        let { enabled: eh } = (0, A.P)("ProductCard"),
            e_ = t.type === c.R.BUNDLE && eh && t.previewAssets?.fgStatic != null,
            eE = t.type === c.R.VARIANTS_GROUP && !a,
            ef = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: eI }), [eI]),
            eT = t.type === c.R.BUNDLE && er && !$,
            ej = !b || !L,
            eR = !(k && s) || eE,
            ey = eR || ej,
            eP = ej || eE;
        return (0, n.jsx)(o.L, {
            innerRef: eo,
            onChange: em,
            threshold: 0,
            children: (0, n.jsx)(d.s, {
                ref: ek,
                onClick: eA,
                "aria-label": eu,
                "aria-describedby": ec,
                className: l()(q, eJ.ty, { [eJ.yo]: ed }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => M?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    id: ec,
                    className: eJ.qt,
                    style: { aspectRatio: X },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: eJ.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: l()(eJ.Dq, { [eJ.$r]: !s || eR || eP, [eJ.T9]: e_ }),
                            children: (0, n.jsx)(ea, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eJ.N1,
                            children: [
                                (0, n.jsx)(z, {
                                    skuId: t.skuId,
                                    badgeOverride: N,
                                    className: Q,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: O,
                                }),
                                !r && (0, n.jsx)(e$, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eg }),
                            ],
                        }),
                        ey &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: l()(eJ.wY, { [eJ.KY]: e_ }) }),
                                    (0, n.jsxs)("div", {
                                        className: eJ.xQ,
                                        children: [
                                            eR &&
                                                (0, n.jsxs)("div", {
                                                    className: eJ.xE,
                                                    children: [
                                                        !(s && k) &&
                                                            (0, n.jsxs)("div", {
                                                                className: eJ.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, n.jsx)(Y, {
                                                                            skuId: t.skuId,
                                                                            className: l()(G, eJ.tZ),
                                                                        }),
                                                                    !k &&
                                                                        (0, n.jsx)("div", {
                                                                            className: eJ.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(eC, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eE &&
                                                            (0, n.jsx)(eY.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: ef,
                                                                onTrackClick: eg,
                                                            }),
                                                    ],
                                                }),
                                            ej &&
                                                (0, n.jsx)("div", {
                                                    className: eJ.Vs,
                                                    children: (0, n.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: eJ.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !b &&
                                                                (0, n.jsx)(eW, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: H,
                                                                    text: F,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: el,
                                                                    onTrackClick: eg,
                                                                }),
                                                            !L &&
                                                                (0, n.jsx)(eQ, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: V,
                                                                    icon: w,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: el,
                                                                    onTrackClick: eg,
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
    e1 = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, U.Vm)(t),
            s = (0, k.A)(() => ({ cardId: (0, a.A)() }));
        return null == i ? null : (0, n.jsx)(x.R9, { newValue: s, children: (0, n.jsx)(e0, { product: i, ...r }) });
    };
