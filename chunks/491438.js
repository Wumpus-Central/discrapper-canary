r.d(t, { A: () => e5 });
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
    _ = r(161918),
    g = r(320447),
    E = r(503089),
    h = r(597783),
    f = r(174459),
    T = r(298072),
    R = r(993408),
    j = r(623373),
    y = r(331884),
    v = r(652215),
    P = r(66455),
    b = r(562708),
    O = r(172218),
    L = r(139286),
    N = r(536572),
    S = r(17928),
    V = r(403581),
    B = r(777666),
    H = r(287809),
    D = r(428262),
    M = r(590180),
    U = r(13875),
    W = r(466459),
    F = r(561769),
    w = r(525723),
    G = r(57020),
    z = r(375708),
    Y = r(512514);
let Q = (e) => {
        let {
                product: t,
                badgeOverride: r,
                productBadgeOverride: i,
                skipLimitedTimeCheck: s,
                className: a,
                prioritizedCurrency: u,
            } = e,
            { isPurchased: o, isPartiallyOwnedBundle: d } = (0, W.h)(t),
            p = (0, R.G0)(t),
            k = (0, S.bG)([M.A], () => M.A.getCategoryForProduct(t.skuId)),
            C = k?.unpublishedAt != null ? (0, R.WU)(k.unpublishedAt) : null,
            m = (0, S.bG)([H.default], () => H.default.getCurrentUser()),
            I = D.Ay.canUseShopDiscounts(m),
            x = (0, w.V_)(t),
            { isOrbExclusive: A } = (0, G.F)({
                product: t,
                hasShopDiscount: I,
                prioritizedCurrency: u,
                hasDiscountOffer: null != x,
            }),
            _ = (0, U.Do)("ProductCardBadgeInner") && t.type === c.R.PROFILE_FRAME,
            g = r;
        if (
            (null == g &&
                (_
                    ? (g = F.AW.EARLY_ACCESS)
                    : null != i
                      ? (g = F.AW.BADGE_OVERRIDE)
                      : !s && (0, R.HF)(k?.unpublishedAt)
                        ? (g = F.AW.LIMITED_TIME)
                        : !d && !o && (0, R.aT)(t.skuId)
                          ? (g = F.AW.NEW)
                          : A
                            ? (g = F.AW.ORBS_EXCLUSIVE)
                            : p && (g = F.AW.NITRO_EXCLUSIVE)),
            null == g || g === F.AW.NONE)
        )
            return null;
        if (g === F.AW.EARLY_ACCESS)
            return (0, n.jsx)("span", {
                role: "img",
                "aria-label": z.intl.string(z.t["1m6qcO"]),
                className: l()(a, Y.$),
                children: (0, n.jsx)(V.t, { size: "sm", color: "currentColor" }),
            });
        let E = null;
        switch (g) {
            case F.AW.LIMITED_TIME:
                E =
                    null != C
                        ? C > 1
                            ? z.intl.formatToPlainString(z.t.Io7ozn, { days: C })
                            : z.intl.string(z.t.Bc13HF)
                        : z.intl.string(z.t["h/uBCR"]);
                break;
            case F.AW.NEW:
                E = z.intl.string(z.t.y2b7CA);
                break;
            case F.AW.NITRO_EXCLUSIVE:
                E = z.intl.string(z.t.X3Ekj8);
                break;
            case F.AW.ORBS_EXCLUSIVE:
                E = z.intl.string(z.t["0TmQRG"]);
                break;
            case F.AW.BADGE_OVERRIDE:
                E = i;
        }
        return (0, n.jsx)(B.Lp, { text: E, disableColor: !0, className: l()(a, Y.s) });
    },
    q = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
            a = (0, F.Vm)(t),
            u = (0, T.Q)(a);
        if (null == a || a.hideBadge) return null;
        let c = (0, j.rb)(a, u);
        return (0, n.jsx)(Q, {
            product: c,
            badgeOverride: r,
            productBadgeOverride: a.badgeOverride,
            skipLimitedTimeCheck: l,
            className: i,
            prioritizedCurrency: s,
        });
    };
var K = r(834730);
let X = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, F.Vm)(t),
        s = (0, N.VG)(i),
        { enabled: l } = (0, g.P)("ProductCardName"),
        a = l && null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(K.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? z.intl.format(z.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var $ = r(947641),
    Z = r(778712),
    J = r(661531),
    ee = r(139136),
    et = r(395744),
    er = r(846957),
    en = r(929283),
    ei = r(245068),
    es = r(761365),
    el = r(721861);
let ea = (e) => {
        let { responsive: t } = e;
        return !0 !== t;
    },
    eu = (e) => {
        let { product: t, isCardHovered: r } = e,
            i = (0, j.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(t),
            { enabled: u } = (0, g.P)("ProductCardPreview"),
            o = i === c.R.PROFILE_EFFECT || i === c.R.PROFILE_FRAME || (i === c.R.BUNDLE && u);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: l()(el.mA, { [el.zj]: (s || a) && !r, [el.Ge]: o }),
                    children: (0, n.jsx)(ec, { product: t, isCardHovered: r }),
                }),
                s && (0, n.jsx)(eo, { hidden: r }),
            ],
        });
    },
    ec = (e) => {
        var t;
        let r,
            i,
            { product: s, isCardHovered: l } = e,
            a = (0, S.bG)([H.default], () => H.default.getCurrentUser()),
            u = (0, j.YW)(s),
            o =
                ((r = (0, T.Q)(s)),
                (i = null != t ? t : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > i
                    ? s.variants[i].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, n.jsx)(ee.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, n.jsx)("div", {
                    className: el.pI,
                    children: (0, n.jsx)(et.A, { frame: o, filterLayer: ea }),
                });
            case c.R.AVATAR_DECORATION:
                return (0, n.jsx)(en.i, { item: o, user: a, isHighlighted: l, avatarSize: Z._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, n.jsx)(es.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, n.jsx)(ei.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, n.jsx)(er.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    eo = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)($.r, {
            size: "custom",
            color: J.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(el.zo, { [el.R]: t }),
        });
    },
    ed = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
            s = (0, F.Vm)(t),
            l = (0, T.Q)(s);
        if (null == s) return null;
        let a = (0, j.rb)(s, i ?? l);
        return (0, n.jsx)(eu, { product: a, isCardHovered: r });
    };
var ep = r(702841),
    ek = r(740076),
    eC = r(219103),
    em = r(380836);
let eI = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, ep.bG)([H.default], () => H.default.getCurrentUser()),
            l = D.Ay.canUseCollectibles(s),
            a = (0, R.xM)(s),
            u = (0, U.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, ek.I)(t.skuId),
            { isPurchased: p, isPartiallyOwnedBundle: k } = (0, W.h)(t),
            C = (0, R.G0)(t),
            m = (0, R.tt)(t),
            I = i.useMemo(() => (0, R.fT)(t, o), [t, o]),
            x = (0, w.V_)(t),
            {
                checkoutEligiblePrices: A,
                hasSufficientOrbs: _,
                shouldCheckoutWithOrbs: g,
            } = (0, G.F)({ product: t, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != x });
        return d
            ? (0, n.jsx)(K.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: z.intl.string(z.t.wu4gyV),
              })
            : k
              ? (0, n.jsx)(K.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: z.intl.string(z.t.BEjTij),
                })
              : p && !(C && !l)
                ? (0, n.jsx)(K.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: z.intl.string(z.t["6cfuDj"]),
                  })
                : m
                  ? (0, n.jsx)(K.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: z.intl.string(z.t.nBtvYB),
                    })
                  : C
                    ? (0, n.jsx)(K.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: z.intl.string(z.t.rt69oo),
                      })
                    : 0 === A.length
                      ? null
                      : (0, n.jsx)(eC.x, {
                            priceAmount: A[0].amount,
                            priceCurrency: A[0].currency,
                            discount: I,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? R.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: x,
                            className: g && !_ ? em.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ex = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, F.Vm)(t),
            s = (0, T.Q)(i);
        if (null == i) return null;
        let l = (0, j.rb)(i, s);
        return (0, n.jsx)(eI, { product: l, prioritizedCurrency: r });
    };
var eA = r(821609),
    e_ = r(44120),
    eg = r(465794),
    eE = r(757036),
    eh = r(106799),
    ef = r(652165),
    eT = r(859040),
    eR = r(4227),
    ej = r(640634),
    ey = r(450481),
    ev = r(395068),
    eP = r(766172),
    eb = r(61750),
    eO = r(758836),
    eL = r(788868),
    eN = r(40577);
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
            d = (0, R.R8)(t, i, !1),
            p = a
                ? z.intl.formatToPlainString(z.t["5U5RB5"], { discountOfferAmount: u })
                : z.intl.formatToPlainString(z.t["cNSL/j"], { price: d });
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(eO.sH.BUY_WITH_FIAT),
                    (0, e_.A)({
                        skuId: (0, eP.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    eV = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, n.jsx)(eg.A, {
            subscriptionTier: eL.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? z.intl.string(z.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(eO.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eB = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eO.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? z.intl.string(z.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: s } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(eO.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? z.intl.string(z.t.MAS7uK),
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
            text: i ?? z.intl.string(z.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eM = (e) => {
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
                    u?.(eO.sH.ADD_TO_COLLECTION),
                    await (0, eT.iJ)(t.skuId),
                    (0, eb.A)({ product: t, analyticsLocations: s, purchaseType: eO.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: z.intl.string(z.t["TYw+9s"]),
            loadingFinishedLabel: z.intl.string(z.t.Pg1UP5),
            text: l ?? z.intl.string(z.t.zp6caO),
            fullWidth: !0,
        });
    },
    eU = (e) => {
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
                z.intl.format(c ? z.t.JC15qj : z.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(eh.A, { className: eN.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(eO.sH.BUY_WITH_ORBS),
                    (0, ef.B4)({
                        skuId: (0, eP.Y)({ product: t, selectedVariantIndex: s }),
                        onComplete: (e) => {
                            (0, eT.gB)(),
                                (0, eb.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: e?.entitlements?.[0]?.consumed,
                                    purchaseType: eO.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": z.intl.formatToPlainString(z.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eW = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(eA.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eO.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? z.intl.string(z.t.GpnHfH),
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
            d = (0, ep.bG)([H.default], () => H.default.getCurrentUser()),
            p = (0, eE.L)(eL.PremiumTypes.TIER_2),
            k = D.Ay.canUseShopDiscounts(d),
            { isPurchased: C, isPartiallyOwnedBundle: x } = (0, W.h)(t),
            A = (0, R.G0)(t),
            _ = (0, R.tt)(t),
            { isDisabled: g } = (0, ek.I)(t.skuId),
            E = (0, R.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: C }),
            h = (0, w.V_)(t),
            f = null != h,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: j,
                checkoutEligiblePrices: y,
                isOrbExclusive: v,
            } = (0, G.F)({ product: t, hasShopDiscount: k, prioritizedCurrency: a, hasDiscountOffer: f }),
            { analyticsLocations: P } = (0, I.Ay)(m.A.COLLECTIBLES_SHOP_CARD),
            b = (0, F.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [O, L] = (0, ep.yK)([eR.A], () => [
                eR.A.isClaiming === t.skuId,
                null != eR.A.isClaiming && eR.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: N, isApplying: S } = (0, ey.p)({ product: t });
        if (null != s) return (0, n.jsx)(eD, { onClick: s, skuId: t.skuId, text: l });
        if (A && !p && !_) return (0, n.jsx)(eV, { text: l, onTrackClick: c });
        if (!E || g) return (0, n.jsx)(eB, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
        if (C) return (0, n.jsx)(eH, { handleUseNow: N, isApplying: S, text: l, onTrackClick: c });
        if (o)
            return (0, n.jsx)(I.f5, {
                value: [...P, m.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, n.jsx)(eV, { text: z.intl.string(z.t.IvmZVF), onTrackClick: c }),
            });
        if (A)
            return (0, n.jsx)(eM, {
                product: t,
                isClaimPremiumProductDisabled: L,
                isClaiming: O,
                analyticsLocations: P,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && j)
            return (0, n.jsx)(eU, {
                product: t,
                checkoutEligiblePrices: y,
                analyticsLocations: P,
                selectedVariantIndex: i,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && !j)
            if (y.length > 1) return (0, n.jsx)(eW, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
            else return (0, n.jsx)(eB, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
        return v
            ? (0, n.jsx)(eB, { handlePreviewButtonClick: b, text: l, onTrackClick: c })
            : (0, n.jsx)(eS, {
                  product: t,
                  cardRef: r,
                  hasShopDiscount: k,
                  analyticsLocations: P,
                  selectedVariantIndex: i,
                  hasDiscountOffer: f,
                  discountOfferAmount: h,
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
            c = (0, F.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
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
            o = (0, _.Mk)(),
            d = o?.tab,
            p = (0, A.uM)(),
            k = (0, eQ.X)(t, a),
            C = (0, F.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, n.jsx)(eG.K, {
                  variant: "primary",
                  "aria-label": z.intl.string(z.t.SKNnqq),
                  icon: l ?? ez.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(eO.sH.OPEN_DETAILS), C(e));
                  },
              })
            : k
              ? (0, n.jsx)(A.R9, {
                    newValue: { pageCategory: d === eO.G2.HOME ? void 0 : p?.pageCategory },
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
            c = (0, F.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
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
            s = (0, F.Vm)(t),
            l = (0, T.Q)(s);
        return null == s
            ? null
            : (0, n.jsx)(eJ, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: i });
    };
var e1 = r(935094),
    e7 = r(496569);
let e4 = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: C,
                hideSecondaryCTA: E,
                badgeOverride: S,
                skipLimitedTimeCheck: V,
                onClickCard: B,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: D,
                onMouseEnter: M,
                onMouseLeave: U,
                onFocus: W,
                onBlur: w,
                primaryCTAText: G,
                secondaryCTAIcon: z,
                productNameClassName: Y,
                badgeClassName: Q,
                cardClassName: K,
                prioritizedCurrency: $,
                aspectRatio: Z,
                hideStaticBundleBackgroundAsset: J,
            } = e,
            { previewingVariantIndex: ee, handleEntering: et, handleLeaving: er } = (0, e1.f)(t),
            en = (0, F.gZ)() ?? $,
            { enabled: ei } = (0, g.P)("ProductCard"),
            es = (0, _.Mk)(),
            el = es?.tab,
            ea = (0, A.uM)(),
            eu = i.useMemo(() => (0, F.UU)(t, el, ea), [t, el, ea]),
            ec = (0, N.s7)(t),
            eo = i.useId(),
            ep = i.useRef(null),
            { isHoveringOrFocusing: ek } = (0, x.A)(ep),
            eC = (function (e) {
                let t = (0, A.uM)(),
                    { analyticsLocations: r } = (0, I.Ay)(),
                    n = (0, T.Q)(e),
                    s = (0, y.o)(),
                    l = (0, R.xM)(s),
                    a = i.useRef(null),
                    u = i.useRef(!1),
                    c = i.useRef(n);
                i.useEffect(() => {
                    c.current = n;
                }, [n]);
                let o = i.useCallback(() => {
                        let n = (0, j.B1)(e);
                        (0, L.x)(
                            {
                                name: b.ImpressionNames.SHOP_CARD,
                                type: b.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[c.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, j.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                    discount_source: (0, R.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r, l]),
                    d = (0, O.K)((e) => {
                        e
                            ? u.current ||
                              (null === a.current &&
                                  (a.current = setTimeout(() => {
                                      o(), (u.current = !0), (a.current = null);
                                  }, 1e3)))
                            : ((u.current = !1), null !== a.current && (clearTimeout(a.current), (a.current = null)));
                    }, 0.5);
                return (
                    i.useEffect(
                        () => () => {
                            null !== a.current && (clearTimeout(a.current), (a.current = null));
                        },
                        [],
                    ),
                    d
                );
            })(t),
            em = (0, u.A)(ep, eC),
            { handleCardVisibilityChange: eI } = (0, h.Z)(t.skuId, el === eO.G2.CATALOG ? "full" : el),
            eA = (0, F.ql)(t, m.A.COLLECTIBLES_SHOP_CARD, eu),
            { analyticsLocations: e_ } = (0, I.Ay)(),
            eg = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                    a = (0, T.Q)(t),
                    u = (0, y.o)(),
                    c = (0, R.xM)(u);
                return i.useCallback(
                    (e, i) => {
                        f.default.track(v.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, j.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: n,
                            product_sku_ids: (0, j.v8)(t),
                            location_stack: r,
                            position_in_section: l,
                            discount_source: (0, R.b_)(c),
                        });
                    },
                    [t, a, s, n, r, l, c],
                );
            })({ product: t, analyticsLocations: e_ }),
            eE = i.useCallback(
                (e) => {
                    null != B ? B(e) : (eg(eO.sH.OPEN_DETAILS), eA(e));
                },
                [eg, B, eA],
            );
        !(function (e, t) {
            let r = (0, A.uM)(),
                { analyticsLocations: n } = (0, I.Ay)(),
                s = (0, T.Q)(t),
                l = i.useRef(!1),
                a = (0, P.A)(r),
                u = (0, P.A)(t),
                c = (0, P.A)(s),
                o = (0, P.A)(n);
            i.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, j.B1)(t);
                    f.default.track(v.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, j.v8)(t),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(ek, t);
        let { enabled: eh } = (0, g.P)("ProductCard"),
            ef = t.type === c.R.BUNDLE && eh && t.previewAssets?.fgStatic != null,
            eT = t.type === c.R.VARIANTS_GROUP && !a,
            eR = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: eA }), [eA]),
            ej = t.type === c.R.BUNDLE && ei && !J,
            ey = !C || !E,
            ev = !(o && s) || eT,
            eP = ev || ey,
            eb = ey || eT;
        return (0, n.jsx)(d.L, {
            innerRef: ep,
            onChange: eI,
            threshold: 0,
            children: (0, n.jsx)(p.s, {
                ref: em,
                onClick: eE,
                "aria-label": ec,
                "aria-describedby": eo,
                className: l()(K, e7.ty, { [e7.yo]: ek }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => w?.(t.skuId),
                onMouseEnter: () => M?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    id: eo,
                    className: e7.qt,
                    style: { aspectRatio: Z },
                    children: [
                        ej &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: e7.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: l()(e7.Dq, { [e7.$r]: !s || ev || eb, [e7.T9]: ef }),
                            children: (0, n.jsx)(ed, { skuId: t.skuId, isCardHovered: ek, overrideVariantIndex: ee }),
                        }),
                        (0, n.jsxs)("div", {
                            className: e7.N1,
                            children: [
                                (0, n.jsx)(q, {
                                    skuId: t.skuId,
                                    badgeOverride: S,
                                    className: Q,
                                    prioritizedCurrency: en,
                                    skipLimitedTimeCheck: V,
                                }),
                                !r && (0, n.jsx)(e0, { skuId: t.skuId, isCardHovered: ek, onTrackClick: eg }),
                            ],
                        }),
                        eP &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: l()(e7.wY, { [e7.KY]: ef }) }),
                                    (0, n.jsxs)("div", {
                                        className: e7.xQ,
                                        children: [
                                            ev &&
                                                (0, n.jsxs)("div", {
                                                    className: e7.xE,
                                                    children: [
                                                        !(s && o) &&
                                                            (0, n.jsxs)("div", {
                                                                className: e7.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, n.jsx)(X, {
                                                                            skuId: t.skuId,
                                                                            className: l()(Y, e7.tZ),
                                                                        }),
                                                                    !o &&
                                                                        (0, n.jsx)("div", {
                                                                            className: e7.oh,
                                                                            children: (0, n.jsx)(ex, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: en,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eT &&
                                                            (0, n.jsx)(eX.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ek,
                                                                onVariantEnter: et,
                                                                onVariantExit: er,
                                                                overflowProps: eR,
                                                                onTrackClick: eg,
                                                            }),
                                                    ],
                                                }),
                                            ey &&
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
                                                                    cardRef: ep,
                                                                    onClick: H,
                                                                    text: G,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: eu,
                                                                    onTrackClick: eg,
                                                                }),
                                                            !E &&
                                                                (0, n.jsx)(eK, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ep,
                                                                    onClick: D,
                                                                    icon: z,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: eu,
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
    e5 = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, F.Vm)(t),
            s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, E.c)("product_card");
        return null != i && (t !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, n.jsx)(A.R9, { newValue: s, children: (0, n.jsx)(e4, { product: i, ...r }) })
            : null;
    };
