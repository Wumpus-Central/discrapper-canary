r.d(t, { A: () => eX });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(132500),
    u = r(612324),
    c = r(575593),
    o = r(230109),
    d = r(890856),
    k = r(825484),
    p = r(444927),
    C = r(793574),
    m = r(688810),
    x = r(713517),
    I = r(440938),
    g = r(161918),
    A = r(320447),
    h = r(597783),
    _ = r(954571),
    f = r(298072),
    T = r(623373),
    E = r(652215),
    j = r(66455),
    v = r(110259),
    y = r(172218),
    P = r(139286),
    b = r(536572),
    R = r(17928),
    N = r(777666),
    O = r(287809),
    L = r(927578),
    S = r(590180),
    H = r(993408),
    V = r(466459),
    B = r(561769),
    U = r(525723),
    D = r(57020),
    W = r(985018),
    w = r(512514);
let M = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: n, className: l, prioritizedCurrency: a } = e,
            { isPurchased: u, isPartiallyOwnedBundle: c } = (0, V.h)(t),
            o = (0, H.G0)(t),
            d = (0, R.bG)([S.A], () => S.A.getCategoryForProduct(t.skuId)),
            k = d?.unpublishedAt != null ? (0, H.WU)(d.unpublishedAt) : null,
            p = (0, R.bG)([O.default], () => O.default.getCurrentUser()),
            C = L.Ay.canUseCollectibles(p),
            m = (0, U.V_)(t),
            { isOrbExclusive: x } = (0, D.F)({
                product: t,
                isPremiumUser: C,
                prioritizedCurrency: a,
                hasDiscountOffer: null != m,
            }),
            I = r;
        if (
            (null == I &&
                (!n && (0, H.HF)(d?.unpublishedAt)
                    ? (I = B.AW.LIMITED_TIME)
                    : !c && !u && (0, H.aT)(t.skuId)
                      ? (I = B.AW.NEW)
                      : x
                        ? (I = B.AW.ORBS_EXCLUSIVE)
                        : o && (I = B.AW.NITRO_EXCLUSIVE)),
            null == I || I === B.AW.NONE)
        )
            return null;
        let g = null;
        switch (I) {
            case B.AW.LIMITED_TIME:
                g =
                    null != k
                        ? k > 1
                            ? W.intl.formatToPlainString(W.t.Io7ozn, { days: k })
                            : W.intl.string(W.t.Bc13HF)
                        : W.intl.string(W.t["h/uBCR"]);
                break;
            case B.AW.NEW:
                g = W.intl.string(W.t.y2b7CA);
                break;
            case B.AW.NITRO_EXCLUSIVE:
                g = W.intl.string(W.t.X3Ekj8);
                break;
            case B.AW.ORBS_EXCLUSIVE:
                g = W.intl.string(W.t["0TmQRG"]);
        }
        return (0, i.jsx)(N.Lp, { text: g, disableColor: !0, className: s()(l, w.$) });
    },
    G = (e) => {
        let { skuId: t, badgeOverride: r, className: n, prioritizedCurrency: l, skipLimitedTimeCheck: s } = e,
            a = (0, B.Vm)(t),
            u = (0, f.Q)(a);
        if (null == a) return null;
        let c = (0, T.rb)(a, u);
        return (0, i.jsx)(M, {
            product: c,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: n,
            prioritizedCurrency: l,
        });
    };
var F = r(534514);
let z = (e) => {
    let { skuId: t, className: r } = e,
        n = (0, B.Vm)(t),
        l = (0, b.VG)(n),
        { enabled: s } = (0, A.P)("ProductCardName"),
        a = s && null != n && n.type === c.R.BUNDLE && n.items.length > 0;
    return (0, i.jsx)(F.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? W.intl.format(W.t.UTc0ny, { count: n.items.length, productName: l }) : l,
    });
};
var Q = r(947641),
    Y = r(778712),
    q = r(661531),
    K = r(139136),
    X = r(846957),
    $ = r(929283),
    Z = r(245068),
    J = r(761365),
    ee = r(721861);
let et = (e) => {
        let { product: t, isCardHovered: r } = e,
            n = (0, T.YW)(t),
            { isPurchased: l, isPartiallyOwnedBundle: a } = (0, V.h)(t),
            { enabled: u } = (0, A.P)("ProductCardPreview"),
            o = n === c.R.PROFILE_EFFECT || (n === c.R.BUNDLE && u);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(ee.mA, { [ee.zj]: (l || a) && !r, [ee.Ge]: o }),
                    children: (0, i.jsx)(er, { product: t, isCardHovered: r }),
                }),
                l && (0, i.jsx)(ei, { hidden: r }),
            ],
        });
    },
    er = (e) => {
        var t;
        let r,
            n,
            { product: l, isCardHovered: s } = e,
            a = (0, R.bG)([O.default], () => O.default.getCurrentUser()),
            u = (0, T.YW)(l),
            o =
                ((r = (0, f.Q)(l)),
                (n = null != t ? t : r),
                l?.type === c.R.VARIANTS_GROUP && null != l.variants && l.variants.length > n
                    ? l.variants[n].items[0]
                    : l.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, i.jsx)(K.A, { skuId: o.skuId, isHighlighted: s, removeSetHeight: !0, hideBackground: !0 });
            case c.R.AVATAR_DECORATION:
                return (0, i.jsx)($.i, { item: o, user: a, isHighlighted: s, avatarSize: Y._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, i.jsx)(J.A, { nameplate: o, user: a, isHighlighted: s });
            case c.R.BUNDLE:
                return (0, i.jsx)(Z.X, { product: l, user: a, isHighlighted: s });
            case c.R.EXTERNAL_SKU:
                return (0, i.jsx)(X.B, { product: l, animationState: s ? "on" : "off" });
            default:
                return null;
        }
    },
    ei = (e) => {
        let { hidden: t } = e;
        return (0, i.jsx)(Q.r, {
            size: "custom",
            color: q.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: s()(ee.zo, { [ee.R]: t }),
        });
    },
    en = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: n } = e,
            l = (0, B.Vm)(t),
            s = (0, f.Q)(l);
        if (null == l) return null;
        let a = (0, T.rb)(l, n ?? s);
        return (0, i.jsx)(et, { product: a, isCardHovered: r });
    };
var el = r(702841),
    es = r(834730),
    ea = r(740076),
    eu = r(219103),
    ec = r(380836);
let eo = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            l = (0, el.bG)([O.default], () => O.default.getCurrentUser()),
            s = L.Ay.canUseCollectibles(l),
            { isDisabled: a } = (0, ea.I)(t.skuId),
            { isPurchased: u, isPartiallyOwnedBundle: c } = (0, V.h)(t),
            o = (0, H.G0)(t),
            d = (0, H.tt)(t),
            k = n.useMemo(() => (0, H.fT)(t, s), [t, s]),
            p = (0, U.V_)(t),
            {
                checkoutEligiblePrices: C,
                hasSufficientOrbs: m,
                shouldCheckoutWithOrbs: x,
            } = (0, D.F)({ product: t, isPremiumUser: s, prioritizedCurrency: r, hasDiscountOffer: null != p }),
            I = o && !s;
        return a
            ? (0, i.jsx)(es.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: W.intl.string(W.t.wu4gyV),
              })
            : c
              ? (0, i.jsx)(es.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: W.intl.string(W.t.BEjTij),
                })
              : u && !I
                ? (0, i.jsx)(es.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: W.intl.string(W.t["6cfuDj"]),
                  })
                : d
                  ? (0, i.jsx)(es.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: W.intl.string(W.t.nBtvYB),
                    })
                  : o
                    ? (0, i.jsx)(es.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: W.intl.string(W.t.rt69oo),
                      })
                    : 0 === C.length
                      ? null
                      : (0, i.jsx)(eu.x, {
                            priceAmount: C[0].amount,
                            priceCurrency: C[0].currency,
                            discount: k,
                            nitroIconType: s ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: p,
                            className: x && !m ? ec.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ed = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            n = (0, B.Vm)(t),
            l = (0, f.Q)(n);
        if (null == n) return null;
        let s = (0, T.rb)(n, l);
        return (0, i.jsx)(eo, { product: s, prioritizedCurrency: r });
    };
var ek = r(821609),
    ep = r(44120),
    eC = r(725807),
    em = r(106799),
    ex = r(652165),
    eI = r(29292),
    eg = r(4227),
    eA = r(640634),
    eh = r(450481),
    e_ = r(766172),
    ef = r(61750),
    eT = r(758836),
    eE = r(788868),
    ej = r(40577);
let ev = (e) => {
        let {
                product: t,
                cardRef: r,
                isPremiumUser: n,
                analyticsLocations: l,
                selectedVariantIndex: s,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = e,
            d = (0, H.R8)(t, n, !1),
            k = a
                ? W.intl.formatToPlainString(W.t["5U5RB5"], { discountOfferAmount: u })
                : W.intl.formatToPlainString(W.t["cNSL/j"], { price: d });
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(eT.sH.BUY_WITH_FIAT),
                    (0, ep.A)({
                        skuId: (0, e_.Y)({ product: t, selectedVariantIndex: s }),
                        returnRef: r,
                        analyticsLocations: l,
                    });
            },
            text: c ?? k,
            fullWidth: !0,
        });
    },
    ey = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(eC.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), n?.(eT.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? W.intl.string(W.t.sEAnVH) },
            subscriptionTier: eE.pe.TIER_2,
            showGradient: !0,
        });
    },
    eP = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(eT.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? W.intl.string(W.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eb = (e) => {
        let { handleUseNow: t, isApplying: r, text: n, onTrackClick: l } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(eT.sH.USE_NOW), t();
            },
            loading: r,
            text: n ?? W.intl.string(W.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eR = (e) => {
        let { skuId: t, onClick: r, text: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: n ?? W.intl.string(W.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eN = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: n,
                analyticsLocations: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(eT.sH.ADD_TO_COLLECTION),
                    await (0, eI.iJ)(t.skuId),
                    (0, ef.A)({ product: t, analyticsLocations: l, purchaseType: eT.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: W.intl.string(W.t["TYw+9s"]),
            loadingFinishedLabel: W.intl.string(W.t.Pg1UP5),
            text: s ?? W.intl.string(W.t.zp6caO),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: n,
                selectedVariantIndex: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, eA.l)("collectibles_shop_product_card");
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            text:
                s ??
                W.intl.format(c ? W.t.JC15qj : W.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(em.A, { className: ej.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(eT.sH.BUY_WITH_ORBS),
                    (0, ex.B4)({
                        skuId: (0, e_.Y)({ product: t, selectedVariantIndex: l }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, eI.gB)(),
                                (0, ef.A)({
                                    product: t,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: eT.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": W.intl.formatToPlainString(W.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eL = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(eT.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? W.intl.string(W.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: n,
                onClick: l,
                text: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, el.bG)([O.default], () => O.default.getCurrentUser()),
            d = L.Ay.canUseCollectibles(o),
            { isPurchased: k, isPartiallyOwnedBundle: p } = (0, V.h)(t),
            x = (0, H.G0)(t),
            I = (0, H.tt)(t),
            { isDisabled: g } = (0, ea.I)(t.skuId),
            A = (0, H.Zu)({ product: t, isPartiallyOwnedBundle: p, isPurchased: k }),
            h = (0, U.V_)(t),
            _ = null != h,
            {
                shouldCheckoutWithOrbs: f,
                hasSufficientOrbs: T,
                checkoutEligiblePrices: E,
                isOrbExclusive: j,
            } = (0, D.F)({ product: t, isPremiumUser: d, prioritizedCurrency: a, hasDiscountOffer: _ }),
            { analyticsLocations: v } = (0, m.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
            y = (0, B.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [P, b] = (0, el.yK)([eg.A], () => [
                eg.A.isClaiming === t.skuId,
                null != eg.A.isClaiming && eg.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: R, isApplying: N } = (0, eh.p)({ product: t });
        if (null != l) return (0, i.jsx)(eR, { onClick: l, skuId: t.skuId, text: s });
        if (x && !d && !I) return (0, i.jsx)(ey, { isClaimPremiumProductDisabled: b, text: s, onTrackClick: c });
        if (!A || g) return (0, i.jsx)(eP, { handlePreviewButtonClick: y, text: s, onTrackClick: c });
        if (k) return (0, i.jsx)(eb, { handleUseNow: R, isApplying: N, text: s, onTrackClick: c });
        if (x)
            return (0, i.jsx)(eN, {
                product: t,
                isClaimPremiumProductDisabled: b,
                isClaiming: P,
                analyticsLocations: v,
                text: s,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (f && T)
            return (0, i.jsx)(eO, {
                product: t,
                checkoutEligiblePrices: E,
                analyticsLocations: v,
                selectedVariantIndex: n,
                text: s,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (f && !T)
            if (E.length > 1) return (0, i.jsx)(eL, { handlePreviewButtonClick: y, text: s, onTrackClick: c });
            else return (0, i.jsx)(eP, { handlePreviewButtonClick: y, text: s, onTrackClick: c });
        return j
            ? (0, i.jsx)(eP, { handlePreviewButtonClick: y, text: s, onTrackClick: c })
            : (0, i.jsx)(ev, {
                  product: t,
                  cardRef: r,
                  isPremiumUser: d,
                  analyticsLocations: v,
                  selectedVariantIndex: n,
                  hasDiscountOffer: _,
                  discountOfferAmount: h,
                  text: s,
                  onTrackClick: c,
              });
    },
    eH = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: n,
                text: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, B.Vm)(t),
            o = (0, f.Q)(c);
        if (null == c) return null;
        let d = (0, T.rb)(c, o);
        return (0, i.jsx)(eS, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
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
                cardRef: n,
                onClick: l,
                icon: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, g.Mk)(),
            d = o?.tab,
            k = (0, I.uM)(),
            p = (0, eD.X)(t, a),
            m = (0, B.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != l || null != s
            ? (0, i.jsx)(eV.K, {
                  variant: "primary",
                  "aria-label": W.intl.string(W.t.SKNnqq),
                  icon: s ?? eB.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != l ? l(t.skuId) : (c?.(eT.sH.OPEN_DETAILS), m(e));
                  },
              })
            : p
              ? (0, i.jsx)(I.R9, {
                    newValue: { pageCategory: d === eT.G2.HOME ? void 0 : k?.pageCategory },
                    children: (0, i.jsx)(eU.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: n,
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
                onClick: n,
                icon: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, B.Vm)(t),
            o = (0, f.Q)(c);
        if (null == c) return null;
        let d = (0, T.rb)(c, o);
        return (0, i.jsx)(eW, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eM = r(661847),
    eG = r(139146),
    eF = r(420960);
let ez = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: n, onTrackClick: l } = e;
        return (0, i.jsx)(eG.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: n,
            className: eF.i,
            onTrackClick: l,
        });
    },
    eQ = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: n } = e,
            l = (0, B.Vm)(t),
            s = (0, f.Q)(l);
        return null == l
            ? null
            : (0, i.jsx)(ez, { product: l, selectedVariantIndex: s, isCardHovered: r, onTrackClick: n });
    };
var eY = r(935094),
    eq = r(496569);
let eK = n.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: a,
                hidePrice: p,
                hidePrimaryCTA: R,
                hideSecondaryCTA: N,
                badgeOverride: O,
                skipLimitedTimeCheck: L,
                onClickCard: S,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: V,
                onMouseEnter: U,
                onMouseLeave: D,
                onFocus: W,
                onBlur: w,
                primaryCTAText: M,
                secondaryCTAIcon: F,
                productNameClassName: Q,
                badgeClassName: Y,
                cardClassName: q,
                prioritizedCurrency: K,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, eY.f)(t),
            et = (0, B.gZ)() ?? K,
            { enabled: er } = (0, A.P)("ProductCard"),
            ei = (0, g.Mk)(),
            el = ei?.tab,
            es = (0, I.uM)(),
            ea = n.useMemo(() => (0, B.UU)(t, el, es), [t, el, es]),
            eu = (0, b.s7)(t),
            ec = n.useRef(null),
            { isHoveringOrFocusing: eo } = (0, x.A)(ec),
            ek = (function (e) {
                let t = (0, I.uM)(),
                    { analyticsLocations: r } = (0, m.Ay)(),
                    i = (0, f.Q)(e),
                    l = n.useRef(null),
                    s = n.useRef(!1),
                    a = n.useRef(i);
                n.useEffect(() => {
                    a.current = i;
                }, [i]);
                let u = n.useCallback(() => {
                        let i = (0, T.B1)(e);
                        (0, P.x)(
                            {
                                name: v.ImpressionNames.SHOP_CARD,
                                type: v.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: i ? (e.variants[a.current]?.skuId ?? e.skuId) : e.skuId,
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
                    c = (0, y.K)((e) => {
                        e
                            ? s.current ||
                              (null === l.current &&
                                  (l.current = setTimeout(() => {
                                      u(), (s.current = !0), (l.current = null);
                                  }, 1e3)))
                            : ((s.current = !1), null !== l.current && (clearTimeout(l.current), (l.current = null)));
                    }, 0.5);
                return (
                    n.useEffect(
                        () => () => {
                            null !== l.current && (clearTimeout(l.current), (l.current = null));
                        },
                        [],
                    ),
                    c
                );
            })(t),
            ep = (0, u.A)(ec, ek),
            { handleCardVisibilityChange: eC } = (0, h.Z)(t.skuId, el === eT.G2.CATALOG ? "full" : el),
            em = (0, B.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: ex } = (0, m.Ay)(),
            eI = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: i, sessionId: l, tilePosition: s } = (0, I.uM)() ?? {},
                    a = (0, f.Q)(t);
                return n.useCallback(
                    (e, n) => {
                        _.default.track(E.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, T.B1)(t) ? (t.variants[n ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: l,
                            card_id: i,
                            product_sku_ids: (0, T.v8)(t),
                            location_stack: r,
                            position_in_section: s,
                        });
                    },
                    [t, a, l, i, r, s],
                );
            })({ product: t, analyticsLocations: ex }),
            eg = n.useCallback(
                (e) => {
                    null != S ? S(e) : (eI(eT.sH.OPEN_DETAILS), em(e));
                },
                [eI, S, em],
            );
        !(function (e, t) {
            let r = (0, I.uM)(),
                { analyticsLocations: i } = (0, m.Ay)(),
                l = (0, f.Q)(t),
                s = n.useRef(!1),
                a = (0, j.A)(r),
                u = (0, j.A)(t),
                c = (0, j.A)(l),
                o = (0, j.A)(i);
            n.useEffect(() => {
                if (!e) {
                    s.current = !1;
                    return;
                }
                if (s.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, T.B1)(t);
                    _.default.track(E.HAw.SHOP_CARD_HOVERED, {
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
        let { enabled: eA } = (0, A.P)("ProductCard"),
            eh = t.type === c.R.BUNDLE && eA && t.previewAssets?.fgStatic != null,
            e_ = t.type === c.R.VARIANTS_GROUP && !a,
            ef = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            eE = t.type === c.R.BUNDLE && er && !$,
            ej = !R || !N,
            ev = !(p && l) || e_,
            ey = ev || ej,
            eP = ej || e_;
        return (0, i.jsx)(o.L, {
            innerRef: ec,
            onChange: eC,
            threshold: 0,
            children: (0, i.jsx)(d.s, {
                ref: ep,
                onClick: eg,
                "aria-label": eu,
                className: s()(q, eq.ty, { [eq.yo]: eo }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => w?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, i.jsxs)("div", {
                    className: eq.qt,
                    style: { aspectRatio: X },
                    children: [
                        eE &&
                            t.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: eq.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: s()(eq.Dq, { [eq.$r]: !l || ev || eP, [eq.T9]: eh }),
                            children: (0, i.jsx)(en, { skuId: t.skuId, isCardHovered: eo, overrideVariantIndex: Z }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eq.N1,
                            children: [
                                (0, i.jsx)(G, {
                                    skuId: t.skuId,
                                    badgeOverride: O,
                                    className: Y,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: L,
                                }),
                                !r && (0, i.jsx)(eQ, { skuId: t.skuId, isCardHovered: eo, onTrackClick: eI }),
                            ],
                        }),
                        ey &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: s()(eq.wY, { [eq.KY]: eh }) }),
                                    (0, i.jsxs)("div", {
                                        className: eq.xQ,
                                        children: [
                                            ev &&
                                                (0, i.jsxs)("div", {
                                                    className: eq.xE,
                                                    children: [
                                                        !(l && p) &&
                                                            (0, i.jsxs)("div", {
                                                                className: eq.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, i.jsx)(z, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, eq.tZ),
                                                                        }),
                                                                    !p &&
                                                                        (0, i.jsx)("div", {
                                                                            className: eq.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(ed, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        e_ &&
                                                            (0, i.jsx)(eM.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !eo,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: ef,
                                                                onTrackClick: eI,
                                                            }),
                                                    ],
                                                }),
                                            ej &&
                                                (0, i.jsx)("div", {
                                                    className: eq.Vs,
                                                    children: (0, i.jsxs)(k.e, {
                                                        wrap: !1,
                                                        className: eq.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !R &&
                                                                (0, i.jsx)(eH, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: M,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eI,
                                                                }),
                                                            !N &&
                                                                (0, i.jsx)(ew, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: V,
                                                                    icon: F,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eI,
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
    eX = (e) => {
        let { skuId: t, ...r } = e,
            n = (0, B.Vm)(t),
            l = (0, p.A)(() => ({ cardId: (0, a.A)() }));
        return null == n ? null : (0, i.jsx)(I.R9, { newValue: l, children: (0, i.jsx)(eK, { product: n, ...r }) });
    };
