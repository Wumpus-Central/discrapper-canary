r.d(t, { A: () => eZ });
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
    I = r(440938),
    h = r(161918),
    g = r(320447),
    f = r(597783),
    A = r(954571),
    _ = r(298072),
    E = r(623373),
    T = r(652215),
    v = r(66455),
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
            I = r;
        if (
            (null == I &&
                (!i && (0, H.HF)(d?.unpublishedAt)
                    ? (I = V.AW.LIMITED_TIME)
                    : !o && !u && (0, H.aT)(t.skuId)
                      ? (I = V.AW.NEW)
                      : x
                        ? (I = V.AW.ORBS_EXCLUSIVE)
                        : c && (I = V.AW.NITRO_EXCLUSIVE)),
            null == I || I === V.AW.NONE)
        )
            return null;
        let h = null;
        switch (I) {
            case V.AW.LIMITED_TIME:
                h =
                    null != p
                        ? p > 1
                            ? M.intl.formatToPlainString(M.t.Io7ozn, { days: p })
                            : M.intl.string(M.t.Bc13HF)
                        : M.intl.string(M.t["h/uBCR"]);
                break;
            case V.AW.NEW:
                h = M.intl.string(M.t.y2b7CA);
                break;
            case V.AW.NITRO_EXCLUSIVE:
                h = M.intl.string(M.t.X3Ekj8);
                break;
            case V.AW.ORBS_EXCLUSIVE:
                h = M.intl.string(M.t["0TmQRG"]);
        }
        return (0, n.jsx)(O.Lp, { text: h, disableColor: !0, className: s()(l, W.$) });
    },
    F = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: l, skipLimitedTimeCheck: s } = e,
            a = (0, V.Vm)(t),
            u = (0, _.Q)(a);
        if (null == a) return null;
        let o = (0, E.rb)(a, u);
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
        { enabled: s } = (0, g.P)("ProductCardName"),
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
    q = r(395744),
    X = r(846957),
    Z = r(929283),
    J = r(245068),
    ee = r(761365),
    et = r(721861);
let er = (e) => {
        let { product: t, isCardHovered: r } = e,
            i = (0, E.YW)(t),
            { isPurchased: l, isPartiallyOwnedBundle: a } = (0, D.h)(t),
            { enabled: u } = (0, g.P)("ProductCardPreview"),
            c = i === o.R.PROFILE_EFFECT || i === o.R.PROFILE_FRAME || (i === o.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: s()(et.mA, { [et.zj]: (l || a) && !r, [et.Ge]: c }),
                    children: (0, n.jsx)(en, { product: t, isCardHovered: r }),
                }),
                l && (0, n.jsx)(ei, { hidden: r }),
            ],
        });
    },
    en = (e) => {
        var t;
        let r,
            i,
            { product: l, isCardHovered: s } = e,
            a = (0, b.bG)([S.default], () => S.default.getCurrentUser()),
            u = (0, E.YW)(l),
            c =
                ((r = (0, _.Q)(l)),
                (i = null != t ? t : r),
                l?.type === o.R.VARIANTS_GROUP && null != l.variants && l.variants.length > i
                    ? l.variants[i].items[0]
                    : l.items[0]);
        switch (u) {
            case o.R.PROFILE_EFFECT:
                return (0, n.jsx)($.A, { skuId: c.skuId, isHighlighted: s, removeSetHeight: !0, hideBackground: !0 });
            case o.R.PROFILE_FRAME:
                return (0, n.jsx)("div", { className: et.pI, children: (0, n.jsx)(q.A, { profileFrame: c }) });
            case o.R.AVATAR_DECORATION:
                return (0, n.jsx)(Z.i, { item: c, user: a, isHighlighted: s, avatarSize: Y._3.SIZE_120 });
            case o.R.NAMEPLATE:
                return (0, n.jsx)(ee.A, { nameplate: c, user: a, isHighlighted: s });
            case o.R.BUNDLE:
                return (0, n.jsx)(J.X, { product: l, user: a, isHighlighted: s });
            case o.R.EXTERNAL_SKU:
                return (0, n.jsx)(X.B, { product: l, animationState: s ? "on" : "off" });
            default:
                return null;
        }
    },
    ei = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(Q.r, {
            size: "custom",
            color: K.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: s()(et.zo, { [et.R]: t }),
        });
    },
    el = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
            l = (0, V.Vm)(t),
            s = (0, _.Q)(l);
        if (null == l) return null;
        let a = (0, E.rb)(l, i ?? s);
        return (0, n.jsx)(er, { product: a, isCardHovered: r });
    };
var es = r(702841),
    ea = r(834730),
    eu = r(740076),
    eo = r(219103),
    ec = r(380836);
let ed = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            l = (0, es.bG)([S.default], () => S.default.getCurrentUser()),
            s = N.Ay.canUseCollectibles(l),
            a = (0, H.xM)(l),
            u = null != a,
            { isDisabled: o } = (0, eu.I)(t.skuId),
            { isPurchased: c, isPartiallyOwnedBundle: d } = (0, D.h)(t),
            p = (0, H.G0)(t),
            k = (0, H.tt)(t),
            C = i.useMemo(() => (0, H.fT)(t, u), [t, u]),
            m = (0, B.V_)(t),
            {
                checkoutEligiblePrices: x,
                hasSufficientOrbs: I,
                shouldCheckoutWithOrbs: h,
            } = (0, U.F)({ product: t, hasShopDiscount: u, prioritizedCurrency: r, hasDiscountOffer: null != m });
        return o
            ? (0, n.jsx)(ea.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: M.intl.string(M.t.wu4gyV),
              })
            : d
              ? (0, n.jsx)(ea.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: M.intl.string(M.t.BEjTij),
                })
              : c && !(p && !s)
                ? (0, n.jsx)(ea.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: M.intl.string(M.t["6cfuDj"]),
                  })
                : k
                  ? (0, n.jsx)(ea.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: M.intl.string(M.t.nBtvYB),
                    })
                  : p
                    ? (0, n.jsx)(ea.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: M.intl.string(M.t.rt69oo),
                      })
                    : 0 === x.length
                      ? null
                      : (0, n.jsx)(eo.x, {
                            priceAmount: x[0].amount,
                            priceCurrency: x[0].currency,
                            discount: C,
                            discountIconConfig: u
                                ? { displayMode: "default", source: a ?? H.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: m,
                            className: h && !I ? ec.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ep = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, V.Vm)(t),
            l = (0, _.Q)(i);
        if (null == i) return null;
        let s = (0, E.rb)(i, l);
        return (0, n.jsx)(ed, { product: s, prioritizedCurrency: r });
    };
var ek = r(821609),
    eC = r(44120),
    em = r(725807),
    ex = r(757036),
    eI = r(106799),
    eh = r(652165),
    eg = r(693477),
    ef = r(4227),
    eA = r(640634),
    e_ = r(450481),
    eE = r(766172),
    eT = r(61750),
    ev = r(758836),
    ey = r(788868),
    ej = r(40577);
let eR = (e) => {
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
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    c?.(ev.sH.BUY_WITH_FIAT),
                    (0, eC.A)({
                        skuId: (0, eE.Y)({ product: t, selectedVariantIndex: s }),
                        returnRef: r,
                        analyticsLocations: l,
                    });
            },
            text: o ?? p,
            fullWidth: !0,
        });
    },
    eP = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(em.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? M.intl.string(M.t.sEAnVH) },
            subscriptionTier: ey.pe.TIER_2,
            showGradient: !0,
        });
    },
    eb = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? M.intl.string(M.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: l } = e;
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(ev.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? M.intl.string(M.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? M.intl.string(M.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eN = (e) => {
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
        return (0, n.jsx)(ek.$, {
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
    eL = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: i,
                selectedVariantIndex: l,
                text: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            o = (0, eA.l)("collectibles_shop_product_card");
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            text:
                s ??
                M.intl.format(o ? M.t.JC15qj : M.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(eI.A, { className: ej.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(ev.sH.BUY_WITH_ORBS),
                    (0, eh.B4)({
                        skuId: (0, eE.Y)({ product: t, selectedVariantIndex: l }),
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
    eH = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(ev.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? M.intl.string(M.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eD = (e) => {
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
            c = (0, es.bG)([S.default], () => S.default.getCurrentUser()),
            d = (0, ex.L)(ey.PremiumTypes.TIER_2),
            p = N.Ay.canUseShopDiscounts(c),
            { isPurchased: k, isPartiallyOwnedBundle: x } = (0, D.h)(t),
            I = (0, H.G0)(t),
            h = (0, H.tt)(t),
            { isDisabled: g } = (0, eu.I)(t.skuId),
            f = (0, H.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: k }),
            A = (0, B.V_)(t),
            _ = null != A,
            {
                shouldCheckoutWithOrbs: E,
                hasSufficientOrbs: T,
                checkoutEligiblePrices: v,
                isOrbExclusive: y,
            } = (0, U.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a, hasDiscountOffer: _ }),
            { analyticsLocations: j } = (0, m.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
            R = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [P, b] = (0, es.yK)([ef.A], () => [
                ef.A.isClaiming === t.skuId,
                null != ef.A.isClaiming && ef.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: O, isApplying: L } = (0, e_.p)({ product: t });
        if (null != l) return (0, n.jsx)(eS, { onClick: l, skuId: t.skuId, text: s });
        if (I && !d && !h) return (0, n.jsx)(eP, { isClaimPremiumProductDisabled: b, text: s, onTrackClick: o });
        if (!f || g) return (0, n.jsx)(eb, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
        if (k) return (0, n.jsx)(eO, { handleUseNow: O, isApplying: L, text: s, onTrackClick: o });
        if (I)
            return (0, n.jsx)(eN, {
                product: t,
                isClaimPremiumProductDisabled: b,
                isClaiming: P,
                analyticsLocations: j,
                text: s,
                onClickAnalytics: u,
                onTrackClick: o,
            });
        if (E && T)
            return (0, n.jsx)(eL, {
                product: t,
                checkoutEligiblePrices: v,
                analyticsLocations: j,
                selectedVariantIndex: i,
                text: s,
                onClickAnalytics: u,
                onTrackClick: o,
            });
        if (E && !T)
            if (v.length > 1) return (0, n.jsx)(eH, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
            else return (0, n.jsx)(eb, { handlePreviewButtonClick: R, text: s, onTrackClick: o });
        return y
            ? (0, n.jsx)(eb, { handlePreviewButtonClick: R, text: s, onTrackClick: o })
            : (0, n.jsx)(eR, {
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
    eV = (e) => {
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
        let d = (0, E.rb)(o, c);
        return (0, n.jsx)(eD, {
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
var eB = r(408278),
    eU = r(39623),
    eM = r(878112),
    eW = r(347722);
let ew = (e) => {
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
            c = (0, h.Mk)(),
            d = c?.tab,
            p = (0, I.uM)(),
            k = (0, eW.X)(t, a),
            m = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != l || null != s
            ? (0, n.jsx)(eB.K, {
                  variant: "primary",
                  "aria-label": M.intl.string(M.t.SKNnqq),
                  icon: s ?? eU.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != l ? l(t.skuId) : (o?.(ev.sH.OPEN_DETAILS), m(e));
                  },
              })
            : k
              ? (0, n.jsx)(I.R9, {
                    newValue: { pageCategory: d === ev.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(eM.A, {
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
    eF = (e) => {
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
        let d = (0, E.rb)(o, c);
        return (0, n.jsx)(ew, {
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
var eG = r(661847),
    ez = r(139146),
    eQ = r(420960);
let eY = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: l } = e;
        return (0, n.jsx)(ez.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: eQ.i,
            onTrackClick: l,
        });
    },
    eK = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            l = (0, V.Vm)(t),
            s = (0, _.Q)(l);
        return null == l
            ? null
            : (0, n.jsx)(eY, { product: l, selectedVariantIndex: s, isCardHovered: r, onTrackClick: i });
    };
var e$ = r(935094),
    eq = r(496569);
let eX = i.memo(function (e) {
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
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, e$.f)(t),
            et = (0, V.gZ)() ?? $,
            { enabled: er } = (0, g.P)("ProductCard"),
            en = (0, h.Mk)(),
            ei = en?.tab,
            es = (0, I.uM)(),
            ea = i.useMemo(() => (0, V.UU)(t, ei, es), [t, ei, es]),
            eu = (0, P.s7)(t),
            eo = i.useId(),
            ec = i.useRef(null),
            { isHoveringOrFocusing: ed } = (0, x.A)(ec),
            ek = (function (e) {
                let t = (0, I.uM)(),
                    { analyticsLocations: r } = (0, m.Ay)(),
                    n = (0, _.Q)(e),
                    l = i.useRef(null),
                    s = i.useRef(!1),
                    a = i.useRef(n);
                i.useEffect(() => {
                    a.current = n;
                }, [n]);
                let u = i.useCallback(() => {
                        let n = (0, E.B1)(e);
                        (0, R.x)(
                            {
                                name: y.ImpressionNames.SHOP_CARD,
                                type: y.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[a.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, E.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
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
            eC = (0, u.A)(ec, ek),
            { handleCardVisibilityChange: em } = (0, f.Z)(t.skuId, ei === ev.G2.CATALOG ? "full" : ei),
            ex = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: eI } = (0, m.Ay)(),
            eh = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: l, tilePosition: s } = (0, I.uM)() ?? {},
                    a = (0, _.Q)(t);
                return i.useCallback(
                    (e, i) => {
                        A.default.track(T.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, E.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: l,
                            card_id: n,
                            product_sku_ids: (0, E.v8)(t),
                            location_stack: r,
                            position_in_section: s,
                        });
                    },
                    [t, a, l, n, r, s],
                );
            })({ product: t, analyticsLocations: eI }),
            eg = i.useCallback(
                (e) => {
                    null != L ? L(e) : (eh(ev.sH.OPEN_DETAILS), ex(e));
                },
                [eh, L, ex],
            );
        !(function (e, t) {
            let r = (0, I.uM)(),
                { analyticsLocations: n } = (0, m.Ay)(),
                l = (0, _.Q)(t),
                s = i.useRef(!1),
                a = (0, v.A)(r),
                u = (0, v.A)(t),
                o = (0, v.A)(l),
                c = (0, v.A)(n);
            i.useEffect(() => {
                if (!e) {
                    s.current = !1;
                    return;
                }
                if (s.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, E.B1)(t);
                    A.default.track(T.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[o.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, E.v8)(t),
                        location_stack: c.current,
                    }),
                        (s.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, o, c]);
        })(ed, t);
        let { enabled: ef } = (0, g.P)("ProductCard"),
            eA = t.type === o.R.BUNDLE && ef && t.previewAssets?.fgStatic != null,
            e_ = t.type === o.R.VARIANTS_GROUP && !a,
            eE = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
            eT = t.type === o.R.BUNDLE && er && !X,
            ey = !b || !O,
            ej = !(k && l) || e_,
            eR = ej || ey,
            eP = ey || e_;
        return (0, n.jsx)(c.L, {
            innerRef: ec,
            onChange: em,
            threshold: 0,
            children: (0, n.jsx)(d.s, {
                ref: eC,
                onClick: eg,
                "aria-label": eu,
                "aria-describedby": eo,
                className: s()(K, eq.ty, { [eq.yo]: ed }),
                onFocus: () => M?.(t.skuId),
                onBlur: () => W?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    id: eo,
                    className: eq.qt,
                    style: { aspectRatio: q },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: eq.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(eq.Dq, { [eq.$r]: !l || ej || eP, [eq.T9]: eA }),
                            children: (0, n.jsx)(el, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eq.N1,
                            children: [
                                (0, n.jsx)(F, {
                                    skuId: t.skuId,
                                    badgeOverride: S,
                                    className: Y,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: N,
                                }),
                                !r && (0, n.jsx)(eK, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eh }),
                            ],
                        }),
                        eR &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: s()(eq.wY, { [eq.KY]: eA }) }),
                                    (0, n.jsxs)("div", {
                                        className: eq.xQ,
                                        children: [
                                            ej &&
                                                (0, n.jsxs)("div", {
                                                    className: eq.xE,
                                                    children: [
                                                        !(l && k) &&
                                                            (0, n.jsxs)("div", {
                                                                className: eq.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, n.jsx)(z, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, eq.tZ),
                                                                        }),
                                                                    !k &&
                                                                        (0, n.jsx)("div", {
                                                                            className: eq.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(ep, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        e_ &&
                                                            (0, n.jsx)(eG.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: eE,
                                                                onTrackClick: eh,
                                                            }),
                                                    ],
                                                }),
                                            ey &&
                                                (0, n.jsx)("div", {
                                                    className: eq.Vs,
                                                    children: (0, n.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: eq.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !b &&
                                                                (0, n.jsx)(eV, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: w,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eh,
                                                                }),
                                                            !O &&
                                                                (0, n.jsx)(eF, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
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
    eZ = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, V.Vm)(t),
            l = (0, k.A)(() => ({ cardId: (0, a.A)() }));
        return null == i ? null : (0, n.jsx)(I.R9, { newValue: l, children: (0, n.jsx)(eX, { product: i, ...r }) });
    };
