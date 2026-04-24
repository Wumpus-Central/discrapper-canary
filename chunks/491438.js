r.d(t, { A: () => eq });
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(132500),
    u = r(612324),
    c = r(575593),
    o = r(230109),
    d = r(890856),
    p = r(825484),
    C = r(444927),
    k = r(793574),
    m = r(688810),
    x = r(713517),
    g = r(440938),
    I = r(161918),
    h = r(320447),
    f = r(597783),
    A = r(954571),
    _ = r(298072),
    T = r(623373),
    v = r(652215),
    E = r(66455),
    y = r(110259),
    j = r(172218),
    R = r(139286),
    b = r(536572),
    P = r(17928),
    O = r(777666),
    N = r(287809),
    S = r(927578),
    L = r(590180),
    H = r(993408),
    V = r(466459),
    B = r(561769),
    U = r(525723),
    D = r(57020),
    W = r(985018),
    w = r(512514);
let M = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: i, className: l, prioritizedCurrency: a } = e,
            { isPurchased: u, isPartiallyOwnedBundle: c } = (0, V.h)(t),
            o = (0, H.G0)(t),
            d = (0, P.bG)([L.A], () => L.A.getCategoryForProduct(t.skuId)),
            p = d?.unpublishedAt != null ? (0, H.WU)(d.unpublishedAt) : null,
            C = (0, P.bG)([N.default], () => N.default.getCurrentUser()),
            k = S.Ay.canUseCollectibles(C),
            m = (0, U.V_)(t),
            { isOrbExclusive: x } = (0, D.F)({
                product: t,
                isPremiumUser: k,
                prioritizedCurrency: a,
                hasDiscountOffer: null != m,
            }),
            g = r;
        if (
            (null == g &&
                (!i && (0, H.HF)(d?.unpublishedAt)
                    ? (g = B.AW.LIMITED_TIME)
                    : !c && !u && (0, H.aT)(t.skuId)
                      ? (g = B.AW.NEW)
                      : x
                        ? (g = B.AW.ORBS_EXCLUSIVE)
                        : o && (g = B.AW.NITRO_EXCLUSIVE)),
            null == g || g === B.AW.NONE)
        )
            return null;
        let I = null;
        switch (g) {
            case B.AW.LIMITED_TIME:
                I =
                    null != p
                        ? p > 1
                            ? W.intl.formatToPlainString(W.t.Io7ozn, { days: p })
                            : W.intl.string(W.t.Bc13HF)
                        : W.intl.string(W.t["h/uBCR"]);
                break;
            case B.AW.NEW:
                I = W.intl.string(W.t.y2b7CA);
                break;
            case B.AW.NITRO_EXCLUSIVE:
                I = W.intl.string(W.t.X3Ekj8);
                break;
            case B.AW.ORBS_EXCLUSIVE:
                I = W.intl.string(W.t["0TmQRG"]);
        }
        return (0, n.jsx)(O.Lp, { text: I, disableColor: !0, className: s()(l, w.$) });
    },
    F = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: l, skipLimitedTimeCheck: s } = e,
            a = (0, B.Vm)(t),
            u = (0, _.Q)(a);
        if (null == a) return null;
        let c = (0, T.rb)(a, u);
        return (0, n.jsx)(M, {
            product: c,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: l,
        });
    };
var G = r(534514);
let z = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, B.Vm)(t),
        l = (0, b.VG)(i),
        { enabled: s } = (0, h.P)("ProductCardName"),
        a = s && null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(G.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? W.intl.format(W.t.UTc0ny, { count: i.items.length, productName: l }) : l,
    });
};
var Q = r(947641),
    Y = r(778712),
    K = r(661531),
    $ = r(139136),
    q = r(846957),
    X = r(929283),
    Z = r(245068),
    J = r(761365),
    ee = r(721861);
let et = (e) => {
        let { product: t, isCardHovered: r } = e,
            i = (0, T.YW)(t),
            { isPurchased: l, isPartiallyOwnedBundle: a } = (0, V.h)(t),
            { enabled: u } = (0, h.P)("ProductCardPreview"),
            o = i === c.R.PROFILE_EFFECT || (i === c.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: s()(ee.mA, { [ee.zj]: (l || a) && !r, [ee.Ge]: o }),
                    children: (0, n.jsx)(er, { product: t, isCardHovered: r }),
                }),
                l && (0, n.jsx)(en, { hidden: r }),
            ],
        });
    },
    er = (e) => {
        var t;
        let r,
            i,
            { product: l, isCardHovered: s } = e,
            a = (0, P.bG)([N.default], () => N.default.getCurrentUser()),
            u = (0, T.YW)(l),
            o =
                ((r = (0, _.Q)(l)),
                (i = null != t ? t : r),
                l?.type === c.R.VARIANTS_GROUP && null != l.variants && l.variants.length > i
                    ? l.variants[i].items[0]
                    : l.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, n.jsx)($.A, { skuId: o.skuId, isHighlighted: s, removeSetHeight: !0, hideBackground: !0 });
            case c.R.AVATAR_DECORATION:
                return (0, n.jsx)(X.i, { item: o, user: a, isHighlighted: s, avatarSize: Y._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, n.jsx)(J.A, { nameplate: o, user: a, isHighlighted: s });
            case c.R.BUNDLE:
                return (0, n.jsx)(Z.X, { product: l, user: a, isHighlighted: s });
            case c.R.EXTERNAL_SKU:
                return (0, n.jsx)(q.B, { product: l, animationState: s ? "on" : "off" });
            default:
                return null;
        }
    },
    en = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(Q.r, {
            size: "custom",
            color: K.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: s()(ee.zo, { [ee.R]: t }),
        });
    },
    ei = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
            l = (0, B.Vm)(t),
            s = (0, _.Q)(l);
        if (null == l) return null;
        let a = (0, T.rb)(l, i ?? s);
        return (0, n.jsx)(et, { product: a, isCardHovered: r });
    };
var el = r(702841),
    es = r(834730),
    ea = r(740076),
    eu = r(219103),
    ec = r(380836);
let eo = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            l = (0, el.bG)([N.default], () => N.default.getCurrentUser()),
            s = S.Ay.canUseCollectibles(l),
            { isDisabled: a } = (0, ea.I)(t.skuId),
            { isPurchased: u, isPartiallyOwnedBundle: c } = (0, V.h)(t),
            o = (0, H.G0)(t),
            d = (0, H.tt)(t),
            p = i.useMemo(() => (0, H.fT)(t, s), [t, s]),
            C = (0, U.V_)(t),
            {
                checkoutEligiblePrices: k,
                hasSufficientOrbs: m,
                shouldCheckoutWithOrbs: x,
            } = (0, D.F)({ product: t, isPremiumUser: s, prioritizedCurrency: r, hasDiscountOffer: null != C }),
            g = o && !s;
        return a
            ? (0, n.jsx)(es.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: W.intl.string(W.t.wu4gyV),
              })
            : c
              ? (0, n.jsx)(es.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: W.intl.string(W.t.BEjTij),
                })
              : u && !g
                ? (0, n.jsx)(es.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: W.intl.string(W.t["6cfuDj"]),
                  })
                : d
                  ? (0, n.jsx)(es.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: W.intl.string(W.t.nBtvYB),
                    })
                  : o
                    ? (0, n.jsx)(es.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: W.intl.string(W.t.rt69oo),
                      })
                    : 0 === k.length
                      ? null
                      : (0, n.jsx)(eu.x, {
                            priceAmount: k[0].amount,
                            priceCurrency: k[0].currency,
                            discount: p,
                            nitroIconType: s ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: C,
                            className: x && !m ? ec.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ed = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, B.Vm)(t),
            l = (0, _.Q)(i);
        if (null == i) return null;
        let s = (0, T.rb)(i, l);
        return (0, n.jsx)(eo, { product: s, prioritizedCurrency: r });
    };
var ep = r(821609),
    eC = r(44120),
    ek = r(725807),
    em = r(106799),
    ex = r(652165),
    eg = r(693477),
    eI = r(4227),
    eh = r(640634),
    ef = r(450481),
    eA = r(766172),
    e_ = r(61750),
    eT = r(758836),
    ev = r(788868),
    eE = r(40577);
let ey = (e) => {
        let {
                product: t,
                cardRef: r,
                isPremiumUser: i,
                analyticsLocations: l,
                selectedVariantIndex: s,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = e,
            d = (0, H.R8)(t, i, !1),
            p = a
                ? W.intl.formatToPlainString(W.t["5U5RB5"], { discountOfferAmount: u })
                : W.intl.formatToPlainString(W.t["cNSL/j"], { price: d });
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(eT.sH.BUY_WITH_FIAT),
                    (0, eC.A)({
                        skuId: (0, eA.Y)({ product: t, selectedVariantIndex: s }),
                        returnRef: r,
                        analyticsLocations: l,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    ej = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ek.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), i?.(eT.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? W.intl.string(W.t.sEAnVH) },
            subscriptionTier: ev.pe.TIER_2,
            showGradient: !0,
        });
    },
    eR = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eT.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? W.intl.string(W.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eb = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: l } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(eT.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? W.intl.string(W.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eP = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? W.intl.string(W.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: i,
                analyticsLocations: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(eT.sH.ADD_TO_COLLECTION),
                    await (0, eg.iJ)(t.skuId),
                    (0, e_.A)({ product: t, analyticsLocations: l, purchaseType: eT.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: W.intl.string(W.t["TYw+9s"]),
            loadingFinishedLabel: W.intl.string(W.t.Pg1UP5),
            text: s ?? W.intl.string(W.t.zp6caO),
            fullWidth: !0,
        });
    },
    eN = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: i,
                selectedVariantIndex: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, eh.l)("collectibles_shop_product_card");
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            text:
                s ??
                W.intl.format(c ? W.t.JC15qj : W.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(em.A, { className: eE.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(eT.sH.BUY_WITH_ORBS),
                    (0, ex.B4)({
                        skuId: (0, eA.Y)({ product: t, selectedVariantIndex: l }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, eg.gB)(),
                                (0, e_.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: eT.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": W.intl.formatToPlainString(W.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eT.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? W.intl.string(W.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eL = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: l,
                text: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, el.bG)([N.default], () => N.default.getCurrentUser()),
            d = S.Ay.canUseCollectibles(o),
            { isPurchased: p, isPartiallyOwnedBundle: C } = (0, V.h)(t),
            x = (0, H.G0)(t),
            g = (0, H.tt)(t),
            { isDisabled: I } = (0, ea.I)(t.skuId),
            h = (0, H.Zu)({ product: t, isPartiallyOwnedBundle: C, isPurchased: p }),
            f = (0, U.V_)(t),
            A = null != f,
            {
                shouldCheckoutWithOrbs: _,
                hasSufficientOrbs: T,
                checkoutEligiblePrices: v,
                isOrbExclusive: E,
            } = (0, D.F)({ product: t, isPremiumUser: d, prioritizedCurrency: a, hasDiscountOffer: A }),
            { analyticsLocations: y } = (0, m.Ay)(k.A.COLLECTIBLES_SHOP_CARD),
            j = (0, B.ql)(t, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [R, b] = (0, el.yK)([eI.A], () => [
                eI.A.isClaiming === t.skuId,
                null != eI.A.isClaiming && eI.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: P, isApplying: O } = (0, ef.p)({ product: t });
        if (null != l) return (0, n.jsx)(eP, { onClick: l, skuId: t.skuId, text: s });
        if (x && !d && !g) return (0, n.jsx)(ej, { isClaimPremiumProductDisabled: b, text: s, onTrackClick: c });
        if (!h || I) return (0, n.jsx)(eR, { handlePreviewButtonClick: j, text: s, onTrackClick: c });
        if (p) return (0, n.jsx)(eb, { handleUseNow: P, isApplying: O, text: s, onTrackClick: c });
        if (x)
            return (0, n.jsx)(eO, {
                product: t,
                isClaimPremiumProductDisabled: b,
                isClaiming: R,
                analyticsLocations: y,
                text: s,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (_ && T)
            return (0, n.jsx)(eN, {
                product: t,
                checkoutEligiblePrices: v,
                analyticsLocations: y,
                selectedVariantIndex: i,
                text: s,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (_ && !T)
            if (v.length > 1) return (0, n.jsx)(eS, { handlePreviewButtonClick: j, text: s, onTrackClick: c });
            else return (0, n.jsx)(eR, { handlePreviewButtonClick: j, text: s, onTrackClick: c });
        return E
            ? (0, n.jsx)(eR, { handlePreviewButtonClick: j, text: s, onTrackClick: c })
            : (0, n.jsx)(ey, {
                  product: t,
                  cardRef: r,
                  isPremiumUser: d,
                  analyticsLocations: y,
                  selectedVariantIndex: i,
                  hasDiscountOffer: A,
                  discountOfferAmount: f,
                  text: s,
                  onTrackClick: c,
              });
    },
    eH = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                text: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, B.Vm)(t),
            o = (0, _.Q)(c);
        if (null == c) return null;
        let d = (0, T.rb)(c, o);
        return (0, n.jsx)(eL, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eV = r(408278),
    eB = r(39623),
    eU = r(878112),
    eD = r(347722);
let eW = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: i,
                onClick: l,
                icon: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, I.Mk)(),
            d = o?.tab,
            p = (0, g.uM)(),
            C = (0, eD.X)(t, a),
            m = (0, B.ql)(t, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != l || null != s
            ? (0, n.jsx)(eV.K, {
                  variant: "primary",
                  "aria-label": W.intl.string(W.t.SKNnqq),
                  icon: s ?? eB.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != l ? l(t.skuId) : (c?.(eT.sH.OPEN_DETAILS), m(e));
                  },
              })
            : C
              ? (0, n.jsx)(g.R9, {
                    newValue: { pageCategory: d === eT.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(eU.A, {
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
    ew = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                icon: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, B.Vm)(t),
            o = (0, _.Q)(c);
        if (null == c) return null;
        let d = (0, T.rb)(c, o);
        return (0, n.jsx)(eW, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eM = r(661847),
    eF = r(139146),
    eG = r(420960);
let ez = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: l } = e;
        return (0, n.jsx)(eF.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: eG.i,
            onTrackClick: l,
        });
    },
    eQ = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            l = (0, B.Vm)(t),
            s = (0, _.Q)(l);
        return null == l
            ? null
            : (0, n.jsx)(ez, { product: l, selectedVariantIndex: s, isCardHovered: r, onTrackClick: i });
    };
var eY = r(935094),
    eK = r(496569);
let e$ = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: a,
                hidePrice: C,
                hidePrimaryCTA: P,
                hideSecondaryCTA: O,
                badgeOverride: N,
                skipLimitedTimeCheck: S,
                onClickCard: L,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: V,
                onMouseEnter: U,
                onMouseLeave: D,
                onFocus: W,
                onBlur: w,
                primaryCTAText: M,
                secondaryCTAIcon: G,
                productNameClassName: Q,
                badgeClassName: Y,
                cardClassName: K,
                prioritizedCurrency: $,
                aspectRatio: q,
                hideStaticBundleBackgroundAsset: X,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, eY.f)(t),
            et = (0, B.gZ)() ?? $,
            { enabled: er } = (0, h.P)("ProductCard"),
            en = (0, I.Mk)(),
            el = en?.tab,
            es = (0, g.uM)(),
            ea = i.useMemo(() => (0, B.UU)(t, el, es), [t, el, es]),
            eu = (0, b.s7)(t),
            ec = i.useRef(null),
            { isHoveringOrFocusing: eo } = (0, x.A)(ec),
            ep = (function (e) {
                let t = (0, g.uM)(),
                    { analyticsLocations: r } = (0, m.Ay)(),
                    n = (0, _.Q)(e),
                    l = i.useRef(null),
                    s = i.useRef(!1),
                    a = i.useRef(n);
                i.useEffect(() => {
                    a.current = n;
                }, [n]);
                let u = i.useCallback(() => {
                        let n = (0, T.B1)(e);
                        (0, R.x)(
                            {
                                name: y.ImpressionNames.SHOP_CARD,
                                type: y.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[a.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, T.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
                    c = (0, j.K)((e) => {
                        e
                            ? s.current ||
                              (null === l.current &&
                                  (l.current = setTimeout(() => {
                                      u(), (s.current = !0), (l.current = null);
                                  }, 1e3)))
                            : ((s.current = !1), null !== l.current && (clearTimeout(l.current), (l.current = null)));
                    }, 0.5);
                return (
                    i.useEffect(
                        () => () => {
                            null !== l.current && (clearTimeout(l.current), (l.current = null));
                        },
                        [],
                    ),
                    c
                );
            })(t),
            eC = (0, u.A)(ec, ep),
            { handleCardVisibilityChange: ek } = (0, f.Z)(t.skuId, el === eT.G2.CATALOG ? "full" : el),
            em = (0, B.ql)(t, k.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: ex } = (0, m.Ay)(),
            eg = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: l, tilePosition: s } = (0, g.uM)() ?? {},
                    a = (0, _.Q)(t);
                return i.useCallback(
                    (e, i) => {
                        A.default.track(v.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, T.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: l,
                            card_id: n,
                            product_sku_ids: (0, T.v8)(t),
                            location_stack: r,
                            position_in_section: s,
                        });
                    },
                    [t, a, l, n, r, s],
                );
            })({ product: t, analyticsLocations: ex }),
            eI = i.useCallback(
                (e) => {
                    null != L ? L(e) : (eg(eT.sH.OPEN_DETAILS), em(e));
                },
                [eg, L, em],
            );
        !(function (e, t) {
            let r = (0, g.uM)(),
                { analyticsLocations: n } = (0, m.Ay)(),
                l = (0, _.Q)(t),
                s = i.useRef(!1),
                a = (0, E.A)(r),
                u = (0, E.A)(t),
                c = (0, E.A)(l),
                o = (0, E.A)(n);
            i.useEffect(() => {
                if (!e) {
                    s.current = !1;
                    return;
                }
                if (s.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, T.B1)(t);
                    A.default.track(v.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, T.v8)(t),
                        location_stack: o.current,
                    }),
                        (s.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(eo, t);
        let { enabled: eh } = (0, h.P)("ProductCard"),
            ef = t.type === c.R.BUNDLE && eh && t.previewAssets?.fgStatic != null,
            eA = t.type === c.R.VARIANTS_GROUP && !a,
            e_ = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            ev = t.type === c.R.BUNDLE && er && !X,
            eE = !P || !O,
            ey = !(C && l) || eA,
            ej = ey || eE,
            eR = eE || eA;
        return (0, n.jsx)(o.L, {
            innerRef: ec,
            onChange: ek,
            threshold: 0,
            children: (0, n.jsx)(d.s, {
                ref: eC,
                onClick: eI,
                "aria-label": eu,
                className: s()(K, eK.ty, { [eK.yo]: eo }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => w?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: eK.qt,
                    style: { aspectRatio: q },
                    children: [
                        ev &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: eK.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(eK.Dq, { [eK.$r]: !l || ey || eR, [eK.T9]: ef }),
                            children: (0, n.jsx)(ei, { skuId: t.skuId, isCardHovered: eo, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eK.N1,
                            children: [
                                (0, n.jsx)(F, {
                                    skuId: t.skuId,
                                    badgeOverride: N,
                                    className: Y,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: S,
                                }),
                                !r && (0, n.jsx)(eQ, { skuId: t.skuId, isCardHovered: eo, onTrackClick: eg }),
                            ],
                        }),
                        ej &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: s()(eK.wY, { [eK.KY]: ef }) }),
                                    (0, n.jsxs)("div", {
                                        className: eK.xQ,
                                        children: [
                                            ey &&
                                                (0, n.jsxs)("div", {
                                                    className: eK.xE,
                                                    children: [
                                                        !(l && C) &&
                                                            (0, n.jsxs)("div", {
                                                                className: eK.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, n.jsx)(z, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, eK.tZ),
                                                                        }),
                                                                    !C &&
                                                                        (0, n.jsx)("div", {
                                                                            className: eK.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(ed, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eA &&
                                                            (0, n.jsx)(eM.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !eo,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: e_,
                                                                onTrackClick: eg,
                                                            }),
                                                    ],
                                                }),
                                            eE &&
                                                (0, n.jsx)("div", {
                                                    className: eK.Vs,
                                                    children: (0, n.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: eK.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !P &&
                                                                (0, n.jsx)(eH, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: M,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eg,
                                                                }),
                                                            !O &&
                                                                (0, n.jsx)(ew, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: V,
                                                                    icon: G,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
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
    eq = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, B.Vm)(t),
            l = (0, C.A)(() => ({ cardId: (0, a.A)() }));
        return null == i ? null : (0, n.jsx)(g.R9, { newValue: l, children: (0, n.jsx)(e$, { product: i, ...r }) });
    };
