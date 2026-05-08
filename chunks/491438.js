r.d(t, { A: () => e8 });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    l = r.n(s),
    a = r(835245),
    u = r(612324),
    c = r(575593),
    o = r(334279),
    d = r(269115),
    p = r(890856),
    k = r(825484),
    C = r(444927),
    m = r(793574),
    I = r(688810),
    x = r(713517),
    A = r(440938),
    g = r(161918),
    _ = r(320447),
    h = r(503089),
    E = r(597783),
    f = r(174459),
    T = r(298072),
    R = r(623373),
    j = r(652215),
    y = r(66455),
    v = r(562708),
    P = r(172218),
    b = r(139286),
    L = r(536572),
    N = r(17928),
    O = r(403581),
    S = r(777666),
    H = r(287809),
    V = r(927578),
    B = r(590180),
    D = r(993408),
    U = r(13875),
    M = r(466459),
    W = r(561769),
    F = r(525723),
    w = r(57020),
    G = r(375708),
    z = r(512514);
let Y = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: i, className: s, prioritizedCurrency: a } = e,
            { isPurchased: u, isPartiallyOwnedBundle: o } = (0, M.h)(t),
            d = (0, D.G0)(t),
            p = (0, N.bG)([B.A], () => B.A.getCategoryForProduct(t.skuId)),
            k = p?.unpublishedAt != null ? (0, D.WU)(p.unpublishedAt) : null,
            C = (0, N.bG)([H.default], () => H.default.getCurrentUser()),
            m = V.Ay.canUseShopDiscounts(C),
            I = (0, F.V_)(t),
            { isOrbExclusive: x } = (0, w.F)({
                product: t,
                hasShopDiscount: m,
                prioritizedCurrency: a,
                hasDiscountOffer: null != I,
            }),
            A = (0, U.Do)("ProductCardBadgeInner") && t.type === c.R.PROFILE_FRAME,
            g = r;
        if (
            (null == g &&
                (!i && (0, D.HF)(p?.unpublishedAt)
                    ? (g = W.AW.LIMITED_TIME)
                    : !o && !u && (0, D.aT)(t.skuId)
                      ? (g = W.AW.NEW)
                      : x
                        ? (g = W.AW.ORBS_EXCLUSIVE)
                        : A
                          ? (g = W.AW.EARLY_ACCESS)
                          : d && (g = W.AW.NITRO_EXCLUSIVE)),
            null == g || g === W.AW.NONE)
        )
            return null;
        if (g === W.AW.EARLY_ACCESS)
            return (0, n.jsx)("span", {
                role: "img",
                "aria-label": G.intl.string(G.t["1m6qcO"]),
                className: l()(s, z.$),
                children: (0, n.jsx)(O.t, { size: "sm", color: "currentColor" }),
            });
        let _ = null;
        switch (g) {
            case W.AW.LIMITED_TIME:
                _ =
                    null != k
                        ? k > 1
                            ? G.intl.formatToPlainString(G.t.Io7ozn, { days: k })
                            : G.intl.string(G.t.Bc13HF)
                        : G.intl.string(G.t["h/uBCR"]);
                break;
            case W.AW.NEW:
                _ = G.intl.string(G.t.y2b7CA);
                break;
            case W.AW.NITRO_EXCLUSIVE:
                _ = G.intl.string(G.t.X3Ekj8);
                break;
            case W.AW.ORBS_EXCLUSIVE:
                _ = G.intl.string(G.t["0TmQRG"]);
        }
        return (0, n.jsx)(S.Lp, { text: _, disableColor: !0, className: l()(s, z.s) });
    },
    Q = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
            a = (0, W.Vm)(t),
            u = (0, T.Q)(a);
        if (null == a) return null;
        let c = (0, R.rb)(a, u);
        return (0, n.jsx)(Y, {
            product: c,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: i,
            prioritizedCurrency: s,
        });
    };
var q = r(534514);
let K = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, W.Vm)(t),
        s = (0, L.VG)(i),
        { enabled: l } = (0, _.P)("ProductCardName"),
        a = l && null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(q.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? G.intl.format(G.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var X = r(947641),
    $ = r(778712),
    Z = r(661531),
    J = r(139136),
    ee = r(395744),
    et = r(846957),
    er = r(929283),
    en = r(245068),
    ei = r(761365),
    es = r(721861);
let el = (e) => {
        let { responsive: t } = e;
        return !0 !== t;
    },
    ea = (e) => {
        let { product: t, isCardHovered: r } = e,
            i = (0, R.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, M.h)(t),
            { enabled: u } = (0, _.P)("ProductCardPreview"),
            o = i === c.R.PROFILE_EFFECT || i === c.R.PROFILE_FRAME || (i === c.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: l()(es.mA, { [es.zj]: (s || a) && !r, [es.Ge]: o }),
                    children: (0, n.jsx)(eu, { product: t, isCardHovered: r }),
                }),
                s && (0, n.jsx)(ec, { hidden: r }),
            ],
        });
    },
    eu = (e) => {
        var t;
        let r,
            i,
            { product: s, isCardHovered: l } = e,
            a = (0, N.bG)([H.default], () => H.default.getCurrentUser()),
            u = (0, R.YW)(s),
            o =
                ((r = (0, T.Q)(s)),
                (i = null != t ? t : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > i
                    ? s.variants[i].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, n.jsx)(J.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, n.jsx)("div", {
                    className: es.pI,
                    children: (0, n.jsx)(ee.A, { frame: o, filterLayer: el }),
                });
            case c.R.AVATAR_DECORATION:
                return (0, n.jsx)(er.i, { item: o, user: a, isHighlighted: l, avatarSize: $._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, n.jsx)(ei.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, n.jsx)(en.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, n.jsx)(et.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    ec = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(X.r, {
            size: "custom",
            color: Z.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(es.zo, { [es.R]: t }),
        });
    },
    eo = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
            s = (0, W.Vm)(t),
            l = (0, T.Q)(s);
        if (null == s) return null;
        let a = (0, R.rb)(s, i ?? l);
        return (0, n.jsx)(ea, { product: a, isCardHovered: r });
    };
var ed = r(702841),
    ep = r(834730),
    ek = r(740076),
    eC = r(219103),
    em = r(380836);
let eI = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, ed.bG)([H.default], () => H.default.getCurrentUser()),
            l = V.Ay.canUseCollectibles(s),
            a = (0, D.xM)(s),
            u = (0, U.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, ek.I)(t.skuId),
            { isPurchased: p, isPartiallyOwnedBundle: k } = (0, M.h)(t),
            C = (0, D.G0)(t),
            m = (0, D.tt)(t),
            I = i.useMemo(() => (0, D.fT)(t, o), [t, o]),
            x = (0, F.V_)(t),
            {
                checkoutEligiblePrices: A,
                hasSufficientOrbs: g,
                shouldCheckoutWithOrbs: _,
            } = (0, w.F)({ product: t, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != x });
        return d
            ? (0, n.jsx)(ep.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: G.intl.string(G.t.wu4gyV),
              })
            : k
              ? (0, n.jsx)(ep.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: G.intl.string(G.t.BEjTij),
                })
              : p && !(C && !l)
                ? (0, n.jsx)(ep.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: G.intl.string(G.t["6cfuDj"]),
                  })
                : m
                  ? (0, n.jsx)(ep.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: G.intl.string(G.t.nBtvYB),
                    })
                  : C
                    ? (0, n.jsx)(ep.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: G.intl.string(G.t.rt69oo),
                      })
                    : 0 === A.length
                      ? null
                      : (0, n.jsx)(eC.x, {
                            priceAmount: A[0].amount,
                            priceCurrency: A[0].currency,
                            discount: I,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? D.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: x,
                            className: _ && !g ? em.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ex = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, W.Vm)(t),
            s = (0, T.Q)(i);
        if (null == i) return null;
        let l = (0, R.rb)(i, s);
        return (0, n.jsx)(eI, { product: l, prioritizedCurrency: r });
    };
var eA = r(821609),
    eg = r(44120),
    e_ = r(465794),
    eh = r(757036),
    eE = r(106799),
    ef = r(652165),
    eT = r(859040),
    eR = r(4227),
    ej = r(640634),
    ey = r(450481),
    ev = r(395068),
    eP = r(766172),
    eb = r(61750),
    eL = r(758836),
    eN = r(788868),
    eO = r(40577);
let eS = (e) => {
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
            d = (0, D.R8)(t, i, !1),
            p = a
                ? G.intl.formatToPlainString(G.t["5U5RB5"], { discountOfferAmount: u })
                : G.intl.formatToPlainString(G.t["cNSL/j"], { price: d });
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(eL.sH.BUY_WITH_FIAT),
                    (0, eg.A)({
                        skuId: (0, eP.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, n.jsx)(e_.A, {
            subscriptionTier: eN.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? G.intl.string(G.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(eL.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eV = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eL.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? G.intl.string(G.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eB = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: s } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(eL.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? G.intl.string(G.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eD = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? G.intl.string(G.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eU = (e) => {
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
                    u?.(eL.sH.ADD_TO_COLLECTION),
                    await (0, eT.iJ)(t.skuId),
                    (0, eb.A)({ product: t, analyticsLocations: s, purchaseType: eL.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: G.intl.string(G.t["TYw+9s"]),
            loadingFinishedLabel: G.intl.string(G.t.Pg1UP5),
            text: l ?? G.intl.string(G.t.zp6caO),
            fullWidth: !0,
        });
    },
    eM = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: i,
                selectedVariantIndex: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, ej.l)("collectibles_shop_product_card");
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            text:
                l ??
                G.intl.format(c ? G.t.JC15qj : G.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(eE.A, { className: eO.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(eL.sH.BUY_WITH_ORBS),
                    (0, ef.B4)({
                        skuId: (0, eP.Y)({ product: t, selectedVariantIndex: s }),
                        onComplete: (e) => {
                            (0, eT.gB)(),
                                (0, eb.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: e?.entitlements?.[0]?.consumed,
                                    purchaseType: eL.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": G.intl.formatToPlainString(G.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eW = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eL.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? G.intl.string(G.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eF = (e) => {
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
            o = (0, ev.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
            d = (0, ed.bG)([H.default], () => H.default.getCurrentUser()),
            p = (0, eh.L)(eN.PremiumTypes.TIER_2),
            k = V.Ay.canUseShopDiscounts(d),
            { isPurchased: C, isPartiallyOwnedBundle: x } = (0, M.h)(t),
            A = (0, D.G0)(t),
            g = (0, D.tt)(t),
            { isDisabled: _ } = (0, ek.I)(t.skuId),
            h = (0, D.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: C }),
            E = (0, F.V_)(t),
            f = null != E,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: R,
                checkoutEligiblePrices: j,
                isOrbExclusive: y,
            } = (0, w.F)({ product: t, hasShopDiscount: k, prioritizedCurrency: a, hasDiscountOffer: f }),
            { analyticsLocations: v } = (0, I.Ay)(m.A.COLLECTIBLES_SHOP_CARD),
            P = (0, W.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [b, L] = (0, ed.yK)([eR.A], () => [
                eR.A.isClaiming === t.skuId,
                null != eR.A.isClaiming && eR.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: N, isApplying: O } = (0, ey.p)({ product: t });
        if (null != s) return (0, n.jsx)(eD, { onClick: s, skuId: t.skuId, text: l });
        if (A && !p && !g) return (0, n.jsx)(eH, { text: l, onTrackClick: c });
        if (!h || _) return (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        if (C) return (0, n.jsx)(eB, { handleUseNow: N, isApplying: O, text: l, onTrackClick: c });
        if (o)
            return (0, n.jsx)(I.f5, {
                value: [...v, m.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, n.jsx)(eH, { text: G.intl.string(G.t.IvmZVF), onTrackClick: c }),
            });
        if (A)
            return (0, n.jsx)(eU, {
                product: t,
                isClaimPremiumProductDisabled: L,
                isClaiming: b,
                analyticsLocations: v,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && R)
            return (0, n.jsx)(eM, {
                product: t,
                checkoutEligiblePrices: j,
                analyticsLocations: v,
                selectedVariantIndex: i,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && !R)
            if (j.length > 1) return (0, n.jsx)(eW, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
            else return (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        return y
            ? (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c })
            : (0, n.jsx)(eS, {
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
    ew = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, W.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, R.rb)(c, o);
        return (0, n.jsx)(eF, {
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
var eG = r(408278),
    ez = r(39623),
    eY = r(878112),
    eQ = r(347722);
let eq = (e) => {
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
            p = (0, A.uM)(),
            k = (0, eQ.X)(t, a),
            C = (0, W.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, n.jsx)(eG.K, {
                  variant: "primary",
                  "aria-label": G.intl.string(G.t.SKNnqq),
                  icon: l ?? ez.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(eL.sH.OPEN_DETAILS), C(e));
                  },
              })
            : k
              ? (0, n.jsx)(A.R9, {
                    newValue: { pageCategory: d === eL.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(eY.A, {
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
    eK = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, W.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, R.rb)(c, o);
        return (0, n.jsx)(eq, {
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
var eX = r(661847),
    e$ = r(139146),
    eZ = r(420960);
let eJ = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: s } = e;
        return (0, n.jsx)(e$.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: eZ.i,
            onTrackClick: s,
        });
    },
    e0 = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            s = (0, W.Vm)(t),
            l = (0, T.Q)(s);
        return null == s
            ? null
            : (0, n.jsx)(eJ, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: i });
    };
var e1 = r(935094),
    e7 = r(496569);
let e5 = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: C,
                hideSecondaryCTA: h,
                badgeOverride: N,
                skipLimitedTimeCheck: O,
                onClickCard: S,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: V,
                onMouseEnter: B,
                onMouseLeave: D,
                onFocus: U,
                onBlur: M,
                primaryCTAText: F,
                secondaryCTAIcon: w,
                productNameClassName: G,
                badgeClassName: z,
                cardClassName: Y,
                prioritizedCurrency: q,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, e1.f)(t),
            et = (0, W.gZ)() ?? q,
            { enabled: er } = (0, _.P)("ProductCard"),
            en = (0, g.Mk)(),
            ei = en?.tab,
            es = (0, A.uM)(),
            el = i.useMemo(() => (0, W.UU)(t, ei, es), [t, ei, es]),
            ea = (0, L.s7)(t),
            eu = i.useId(),
            ec = i.useRef(null),
            { isHoveringOrFocusing: ed } = (0, x.A)(ec),
            ep = (function (e) {
                let t = (0, A.uM)(),
                    { analyticsLocations: r } = (0, I.Ay)(),
                    n = (0, T.Q)(e),
                    s = i.useRef(null),
                    l = i.useRef(!1),
                    a = i.useRef(n);
                i.useEffect(() => {
                    a.current = n;
                }, [n]);
                let u = i.useCallback(() => {
                        let n = (0, R.B1)(e);
                        (0, b.x)(
                            {
                                name: v.ImpressionNames.SHOP_CARD,
                                type: v.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[a.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, R.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
                    c = (0, P.K)((e) => {
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
            ek = (0, u.A)(ec, ep),
            { handleCardVisibilityChange: eC } = (0, E.Z)(t.skuId, ei === eL.G2.CATALOG ? "full" : ei),
            em = (0, W.ql)(t, m.A.COLLECTIBLES_SHOP_CARD, el),
            { analyticsLocations: eI } = (0, I.Ay)(),
            eA = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                    a = (0, T.Q)(t);
                return i.useCallback(
                    (e, i) => {
                        f.default.track(j.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, R.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: n,
                            product_sku_ids: (0, R.v8)(t),
                            location_stack: r,
                            position_in_section: l,
                        });
                    },
                    [t, a, s, n, r, l],
                );
            })({ product: t, analyticsLocations: eI }),
            eg = i.useCallback(
                (e) => {
                    null != S ? S(e) : (eA(eL.sH.OPEN_DETAILS), em(e));
                },
                [eA, S, em],
            );
        !(function (e, t) {
            let r = (0, A.uM)(),
                { analyticsLocations: n } = (0, I.Ay)(),
                s = (0, T.Q)(t),
                l = i.useRef(!1),
                a = (0, y.A)(r),
                u = (0, y.A)(t),
                c = (0, y.A)(s),
                o = (0, y.A)(n);
            i.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, R.B1)(t);
                    f.default.track(j.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, R.v8)(t),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(ed, t);
        let { enabled: e_ } = (0, _.P)("ProductCard"),
            eh = t.type === c.R.BUNDLE && e_ && t.previewAssets?.fgStatic != null,
            eE = t.type === c.R.VARIANTS_GROUP && !a,
            ef = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            eT = t.type === c.R.BUNDLE && er && !$,
            eR = !C || !h,
            ej = !(o && s) || eE,
            ey = ej || eR,
            ev = eR || eE;
        return (0, n.jsx)(d.L, {
            innerRef: ec,
            onChange: eC,
            threshold: 0,
            children: (0, n.jsx)(p.s, {
                ref: ek,
                onClick: eg,
                "aria-label": ea,
                "aria-describedby": eu,
                className: l()(Y, e7.ty, { [e7.yo]: ed }),
                onFocus: () => U?.(t.skuId),
                onBlur: () => M?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    id: eu,
                    className: e7.qt,
                    style: { aspectRatio: X },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: e7.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: l()(e7.Dq, { [e7.$r]: !s || ej || ev, [e7.T9]: eh }),
                            children: (0, n.jsx)(eo, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: e7.N1,
                            children: [
                                (0, n.jsx)(Q, {
                                    skuId: t.skuId,
                                    badgeOverride: N,
                                    className: z,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: O,
                                }),
                                !r && (0, n.jsx)(e0, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eA }),
                            ],
                        }),
                        ey &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: l()(e7.wY, { [e7.KY]: eh }) }),
                                    (0, n.jsxs)("div", {
                                        className: e7.xQ,
                                        children: [
                                            ej &&
                                                (0, n.jsxs)("div", {
                                                    className: e7.xE,
                                                    children: [
                                                        !(s && o) &&
                                                            (0, n.jsxs)("div", {
                                                                className: e7.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, n.jsx)(K, {
                                                                            skuId: t.skuId,
                                                                            className: l()(G, e7.tZ),
                                                                        }),
                                                                    !o &&
                                                                        (0, n.jsx)("div", {
                                                                            className: e7.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(ex, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eE &&
                                                            (0, n.jsx)(eX.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: ef,
                                                                onTrackClick: eA,
                                                            }),
                                                    ],
                                                }),
                                            eR &&
                                                (0, n.jsx)("div", {
                                                    className: e7.Vs,
                                                    children: (0, n.jsxs)(k.e, {
                                                        wrap: !1,
                                                        className: e7.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !C &&
                                                                (0, n.jsx)(ew, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: F,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: el,
                                                                    onTrackClick: eA,
                                                                }),
                                                            !h &&
                                                                (0, n.jsx)(eK, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: V,
                                                                    icon: w,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: el,
                                                                    onTrackClick: eA,
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
    e8 = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, W.Vm)(t),
            s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, h.c)("product_card");
        return null != i && (t !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, n.jsx)(A.R9, { newValue: s, children: (0, n.jsx)(e5, { product: i, ...r }) })
            : null;
    };
