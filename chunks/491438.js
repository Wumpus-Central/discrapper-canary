r.d(t, { A: () => eX });
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(132500),
    u = r(612324),
    o = r(575593),
    c = r(230109),
    d = r(890856),
    p = r(825484),
    k = r(444927),
    C = r(793574),
    m = r(688810),
    x = r(713517),
    h = r(440938),
    g = r(161918),
    I = r(320447),
    f = r(597783),
    A = r(954571),
    _ = r(298072),
    T = r(623373),
    v = r(652215),
    E = r(66455),
    y = r(110259),
    j = r(172218),
    R = r(139286),
    P = r(536572),
    b = r(17928),
    O = r(777666),
    S = r(287809),
    N = r(927578),
    L = r(590180),
    H = r(993408),
    D = r(466459),
    V = r(561769),
    B = r(525723),
    U = r(57020),
    M = r(985018),
    W = r(512514);
let w = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: i, className: l, prioritizedCurrency: a } = e,
            { isPurchased: u, isPartiallyOwnedBundle: o } = (0, D.h)(t),
            c = (0, H.G0)(t),
            d = (0, b.bG)([L.A], () => L.A.getCategoryForProduct(t.skuId)),
            p = d?.unpublishedAt != null ? (0, H.WU)(d.unpublishedAt) : null,
            k = (0, b.bG)([S.default], () => S.default.getCurrentUser()),
            C = N.Ay.canUseShopDiscounts(k),
            m = (0, B.V_)(t),
            { isOrbExclusive: x } = (0, U.F)({
                product: t,
                hasShopDiscount: C,
                prioritizedCurrency: a,
                hasDiscountOffer: null != m,
            }),
            h = r;
        if (
            (null == h &&
                (!i && (0, H.HF)(d?.unpublishedAt)
                    ? (h = V.AW.LIMITED_TIME)
                    : !o && !u && (0, H.aT)(t.skuId)
                      ? (h = V.AW.NEW)
                      : x
                        ? (h = V.AW.ORBS_EXCLUSIVE)
                        : c && (h = V.AW.NITRO_EXCLUSIVE)),
            null == h || h === V.AW.NONE)
        )
            return null;
        let g = null;
        switch (h) {
            case V.AW.LIMITED_TIME:
                g =
                    null != p
                        ? p > 1
                            ? M.intl.formatToPlainString(M.t.Io7ozn, { days: p })
                            : M.intl.string(M.t.Bc13HF)
                        : M.intl.string(M.t["h/uBCR"]);
                break;
            case V.AW.NEW:
                g = M.intl.string(M.t.y2b7CA);
                break;
            case V.AW.NITRO_EXCLUSIVE:
                g = M.intl.string(M.t.X3Ekj8);
                break;
            case V.AW.ORBS_EXCLUSIVE:
                g = M.intl.string(M.t["0TmQRG"]);
        }
        return (0, n.jsx)(O.Lp, { text: g, disableColor: !0, className: s()(l, W.$) });
    },
    F = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: l, skipLimitedTimeCheck: s } = e,
            a = (0, V.Vm)(t),
            u = (0, _.Q)(a);
        if (null == a) return null;
        let o = (0, T.rb)(a, u);
        return (0, n.jsx)(w, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: l,
        });
    };
var G = r(534514);
let z = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, V.Vm)(t),
        l = (0, P.VG)(i),
        { enabled: s } = (0, I.P)("ProductCardName"),
        a = s && null != i && i.type === o.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(G.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? M.intl.format(M.t.UTc0ny, { count: i.items.length, productName: l }) : l,
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
            { isPurchased: l, isPartiallyOwnedBundle: a } = (0, D.h)(t),
            { enabled: u } = (0, I.P)("ProductCardPreview"),
            c = i === o.R.PROFILE_EFFECT || (i === o.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: s()(ee.mA, { [ee.zj]: (l || a) && !r, [ee.Ge]: c }),
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
            a = (0, b.bG)([S.default], () => S.default.getCurrentUser()),
            u = (0, T.YW)(l),
            c =
                ((r = (0, _.Q)(l)),
                (i = null != t ? t : r),
                l?.type === o.R.VARIANTS_GROUP && null != l.variants && l.variants.length > i
                    ? l.variants[i].items[0]
                    : l.items[0]);
        switch (u) {
            case o.R.PROFILE_EFFECT:
                return (0, n.jsx)($.A, { skuId: c.skuId, isHighlighted: s, removeSetHeight: !0, hideBackground: !0 });
            case o.R.AVATAR_DECORATION:
                return (0, n.jsx)(X.i, { item: c, user: a, isHighlighted: s, avatarSize: Y._3.SIZE_120 });
            case o.R.NAMEPLATE:
                return (0, n.jsx)(J.A, { nameplate: c, user: a, isHighlighted: s });
            case o.R.BUNDLE:
                return (0, n.jsx)(Z.X, { product: l, user: a, isHighlighted: s });
            case o.R.EXTERNAL_SKU:
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
            l = (0, V.Vm)(t),
            s = (0, _.Q)(l);
        if (null == l) return null;
        let a = (0, T.rb)(l, i ?? s);
        return (0, n.jsx)(et, { product: a, isCardHovered: r });
    };
var el = r(702841),
    es = r(834730),
    ea = r(740076),
    eu = r(219103),
    eo = r(380836);
let ec = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            l = (0, el.bG)([S.default], () => S.default.getCurrentUser()),
            s = N.Ay.canUseCollectibles(l),
            a = (0, H.xM)(l),
            u = null != a,
            { isDisabled: o } = (0, ea.I)(t.skuId),
            { isPurchased: c, isPartiallyOwnedBundle: d } = (0, D.h)(t),
            p = (0, H.G0)(t),
            k = (0, H.tt)(t),
            C = i.useMemo(() => (0, H.fT)(t, u), [t, u]),
            m = (0, B.V_)(t),
            {
                checkoutEligiblePrices: x,
                hasSufficientOrbs: h,
                shouldCheckoutWithOrbs: g,
            } = (0, U.F)({ product: t, hasShopDiscount: u, prioritizedCurrency: r, hasDiscountOffer: null != m });
        return o
            ? (0, n.jsx)(es.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: M.intl.string(M.t.wu4gyV),
              })
            : d
              ? (0, n.jsx)(es.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: M.intl.string(M.t.BEjTij),
                })
              : c && !(p && !s)
                ? (0, n.jsx)(es.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: M.intl.string(M.t["6cfuDj"]),
                  })
                : k
                  ? (0, n.jsx)(es.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: M.intl.string(M.t.nBtvYB),
                    })
                  : p
                    ? (0, n.jsx)(es.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: M.intl.string(M.t.rt69oo),
                      })
                    : 0 === x.length
                      ? null
                      : (0, n.jsx)(eu.x, {
                            priceAmount: x[0].amount,
                            priceCurrency: x[0].currency,
                            discount: C,
                            discountIconConfig: u
                                ? { displayMode: "default", source: a ?? H.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: m,
                            className: g && !h ? eo.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ed = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, V.Vm)(t),
            l = (0, _.Q)(i);
        if (null == i) return null;
        let s = (0, T.rb)(i, l);
        return (0, n.jsx)(ec, { product: s, prioritizedCurrency: r });
    };
var ep = r(821609),
    ek = r(44120),
    eC = r(725807),
    em = r(757036),
    ex = r(106799),
    eh = r(652165),
    eg = r(693477),
    eI = r(4227),
    ef = r(640634),
    eA = r(450481),
    e_ = r(766172),
    eT = r(61750),
    ev = r(758836),
    eE = r(788868),
    ey = r(40577);
let ej = (e) => {
        let {
                product: t,
                cardRef: r,
                hasShopDiscount: i,
                analyticsLocations: l,
                selectedVariantIndex: s,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: o,
                onTrackClick: c,
            } = e,
            d = (0, H.R8)(t, i, !1),
            p = a
                ? M.intl.formatToPlainString(M.t["5U5RB5"], { discountOfferAmount: u })
                : M.intl.formatToPlainString(M.t["cNSL/j"], { price: d });
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    c?.(ev.sH.BUY_WITH_FIAT),
                    (0, ek.A)({
                        skuId: (0, e_.Y)({ product: t, selectedVariantIndex: s }),
                        returnRef: r,
                        analyticsLocations: l,
                    });
            },
            text: o ?? p,
            fullWidth: !0,
        });
    },
    eR = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(eC.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? M.intl.string(M.t.sEAnVH) },
            subscriptionTier: eE.pe.TIER_2,
            showGradient: !0,
        });
    },
    eP = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? M.intl.string(M.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eb = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: l } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(ev.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? M.intl.string(M.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? M.intl.string(M.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: i,
                analyticsLocations: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            o = async () => {
                a?.("claim premium product button"),
                    u?.(ev.sH.ADD_TO_COLLECTION),
                    await (0, eg.iJ)(t.skuId),
                    (0, eT.A)({ product: t, analyticsLocations: l, purchaseType: ev.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), o();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: M.intl.string(M.t["TYw+9s"]),
            loadingFinishedLabel: M.intl.string(M.t.Pg1UP5),
            text: s ?? M.intl.string(M.t.zp6caO),
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
            o = (0, ef.l)("collectibles_shop_product_card");
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            text:
                s ??
                M.intl.format(o ? M.t.JC15qj : M.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(ex.A, { className: ey.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(ev.sH.BUY_WITH_ORBS),
                    (0, eh.B4)({
                        skuId: (0, e_.Y)({ product: t, selectedVariantIndex: l }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, eg.gB)(),
                                (0, eT.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: ev.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": M.intl.formatToPlainString(M.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eL = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? M.intl.string(M.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: l,
                text: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: o,
            } = e,
            c = (0, el.bG)([S.default], () => S.default.getCurrentUser()),
            d = (0, em.L)(eE.PremiumTypes.TIER_2),
            p = N.Ay.canUseShopDiscounts(c),
            { isPurchased: k, isPartiallyOwnedBundle: x } = (0, D.h)(t),
            h = (0, H.G0)(t),
            g = (0, H.tt)(t),
            { isDisabled: I } = (0, ea.I)(t.skuId),
            f = (0, H.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: k }),
            A = (0, B.V_)(t),
            _ = null != A,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: v,
                checkoutEligiblePrices: E,
                isOrbExclusive: y,
            } = (0, U.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a, hasDiscountOffer: _ }),
            { analyticsLocations: j } = (0, m.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
            R = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [P, b] = (0, el.yK)([eI.A], () => [
                eI.A.isClaiming === t.skuId,
                null != eI.A.isClaiming && eI.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: O, isApplying: L } = (0, eA.p)({ product: t });
        if (null != l) return (0, n.jsx)(eO, { onClick: l, skuId: t.skuId, text: s });
        if (h && !d && !g) return (0, n.jsx)(eR, { isClaimPremiumProductDisabled: b, text: s, onTrackClick: o });
        if (!f || I) return (0, n.jsx)(eP, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
        if (k) return (0, n.jsx)(eb, { handleUseNow: O, isApplying: L, text: s, onTrackClick: o });
        if (h)
            return (0, n.jsx)(eS, {
                product: t,
                isClaimPremiumProductDisabled: b,
                isClaiming: P,
                analyticsLocations: j,
                text: s,
                onClickAnalytics: u,
                onTrackClick: o,
            });
        if (T && v)
            return (0, n.jsx)(eN, {
                product: t,
                checkoutEligiblePrices: E,
                analyticsLocations: j,
                selectedVariantIndex: i,
                text: s,
                onClickAnalytics: u,
                onTrackClick: o,
            });
        if (T && !v)
            if (E.length > 1) return (0, n.jsx)(eL, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
            else return (0, n.jsx)(eP, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
        return y
            ? (0, n.jsx)(eP, { handlePreviewButtonClick: R, text: s, onTrackClick: o })
            : (0, n.jsx)(ej, {
                  product: t,
                  cardRef: r,
                  hasShopDiscount: p,
                  analyticsLocations: j,
                  selectedVariantIndex: i,
                  hasDiscountOffer: _,
                  discountOfferAmount: A,
                  text: s,
                  onTrackClick: o,
              });
    },
    eD = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                text: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            o = (0, V.Vm)(t),
            c = (0, _.Q)(o);
        if (null == o) return null;
        let d = (0, T.rb)(o, c);
        return (0, n.jsx)(eH, {
            product: d,
            cardRef: r,
            selectedVariantIndex: c,
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
    eM = r(347722);
let eW = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: i,
                onClick: l,
                icon: s,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: o,
            } = e,
            c = (0, g.Mk)(),
            d = c?.tab,
            p = (0, h.uM)(),
            k = (0, eM.X)(t, a),
            m = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != l || null != s
            ? (0, n.jsx)(eV.K, {
                  variant: "primary",
                  "aria-label": M.intl.string(M.t.SKNnqq),
                  icon: s ?? eB.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != l ? l(t.skuId) : (o?.(ev.sH.OPEN_DETAILS), m(e));
                  },
              })
            : k
              ? (0, n.jsx)(h.R9, {
                    newValue: { pageCategory: d === ev.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(eU.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: i,
                        tooltipDelay: 250,
                        onTrackClick: o,
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
            o = (0, V.Vm)(t),
            c = (0, _.Q)(o);
        if (null == o) return null;
        let d = (0, T.rb)(o, c);
        return (0, n.jsx)(eW, {
            product: d,
            cardRef: r,
            selectedVariantIndex: c,
            onClick: i,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eF = r(661847),
    eG = r(139146),
    ez = r(420960);
let eQ = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: l } = e;
        return (0, n.jsx)(eG.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: ez.i,
            onTrackClick: l,
        });
    },
    eY = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            l = (0, V.Vm)(t),
            s = (0, _.Q)(l);
        return null == l
            ? null
            : (0, n.jsx)(eQ, { product: l, selectedVariantIndex: s, isCardHovered: r, onTrackClick: i });
    };
var eK = r(935094),
    e$ = r(496569);
let eq = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: a,
                hidePrice: k,
                hidePrimaryCTA: b,
                hideSecondaryCTA: O,
                badgeOverride: S,
                skipLimitedTimeCheck: N,
                onClickCard: L,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: D,
                onMouseEnter: B,
                onMouseLeave: U,
                onFocus: M,
                onBlur: W,
                primaryCTAText: w,
                secondaryCTAIcon: G,
                productNameClassName: Q,
                badgeClassName: Y,
                cardClassName: K,
                prioritizedCurrency: $,
                aspectRatio: q,
                hideStaticBundleBackgroundAsset: X,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, eK.f)(t),
            et = (0, V.gZ)() ?? $,
            { enabled: er } = (0, I.P)("ProductCard"),
            en = (0, g.Mk)(),
            el = en?.tab,
            es = (0, h.uM)(),
            ea = i.useMemo(() => (0, V.UU)(t, el, es), [t, el, es]),
            eu = (0, P.s7)(t),
            eo = i.useRef(null),
            { isHoveringOrFocusing: ec } = (0, x.A)(eo),
            ep = (function (e) {
                let t = (0, h.uM)(),
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
                    o = (0, j.K)((e) => {
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
                    o
                );
            })(t),
            ek = (0, u.A)(eo, ep),
            { handleCardVisibilityChange: eC } = (0, f.Z)(t.skuId, el === ev.G2.CATALOG ? "full" : el),
            em = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: ex } = (0, m.Ay)(),
            eh = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: l, tilePosition: s } = (0, h.uM)() ?? {},
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
            eg = i.useCallback(
                (e) => {
                    null != L ? L(e) : (eh(ev.sH.OPEN_DETAILS), em(e));
                },
                [eh, L, em],
            );
        !(function (e, t) {
            let r = (0, h.uM)(),
                { analyticsLocations: n } = (0, m.Ay)(),
                l = (0, _.Q)(t),
                s = i.useRef(!1),
                a = (0, E.A)(r),
                u = (0, E.A)(t),
                o = (0, E.A)(l),
                c = (0, E.A)(n);
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
                        sku_id: r ? (t.variants[o.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, T.v8)(t),
                        location_stack: c.current,
                    }),
                        (s.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, o, c]);
        })(ec, t);
        let { enabled: eI } = (0, I.P)("ProductCard"),
            ef = t.type === o.R.BUNDLE && eI && t.previewAssets?.fgStatic != null,
            eA = t.type === o.R.VARIANTS_GROUP && !a,
            e_ = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            eT = t.type === o.R.BUNDLE && er && !X,
            eE = !b || !O,
            ey = !(k && l) || eA,
            ej = ey || eE,
            eR = eE || eA;
        return (0, n.jsx)(c.L, {
            innerRef: eo,
            onChange: eC,
            threshold: 0,
            children: (0, n.jsx)(d.s, {
                ref: ek,
                onClick: eg,
                "aria-label": eu,
                className: s()(K, e$.ty, { [e$.yo]: ec }),
                onFocus: () => M?.(t.skuId),
                onBlur: () => W?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: e$.qt,
                    style: { aspectRatio: q },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: e$.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(e$.Dq, { [e$.$r]: !l || ey || eR, [e$.T9]: ef }),
                            children: (0, n.jsx)(ei, { skuId: t.skuId, isCardHovered: ec, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: e$.N1,
                            children: [
                                (0, n.jsx)(F, {
                                    skuId: t.skuId,
                                    badgeOverride: S,
                                    className: Y,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: N,
                                }),
                                !r && (0, n.jsx)(eY, { skuId: t.skuId, isCardHovered: ec, onTrackClick: eh }),
                            ],
                        }),
                        ej &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: s()(e$.wY, { [e$.KY]: ef }) }),
                                    (0, n.jsxs)("div", {
                                        className: e$.xQ,
                                        children: [
                                            ey &&
                                                (0, n.jsxs)("div", {
                                                    className: e$.xE,
                                                    children: [
                                                        !(l && k) &&
                                                            (0, n.jsxs)("div", {
                                                                className: e$.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, n.jsx)(z, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, e$.tZ),
                                                                        }),
                                                                    !k &&
                                                                        (0, n.jsx)("div", {
                                                                            className: e$.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(ed, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eA &&
                                                            (0, n.jsx)(eF.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ec,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: e_,
                                                                onTrackClick: eh,
                                                            }),
                                                    ],
                                                }),
                                            eE &&
                                                (0, n.jsx)("div", {
                                                    className: e$.Vs,
                                                    children: (0, n.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: e$.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !b &&
                                                                (0, n.jsx)(eD, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: H,
                                                                    text: w,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eh,
                                                                }),
                                                            !O &&
                                                                (0, n.jsx)(ew, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: D,
                                                                    icon: G,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eh,
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
            i = (0, V.Vm)(t),
            l = (0, k.A)(() => ({ cardId: (0, a.A)() }));
        return null == i ? null : (0, n.jsx)(h.R9, { newValue: l, children: (0, n.jsx)(eq, { product: i, ...r }) });
    };
