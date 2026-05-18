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
    E = r(503089),
    h = r(597783),
    f = r(174459),
    T = r(298072),
    R = r(623373),
    j = r(652215),
    v = r(66455),
    y = r(562708),
    P = r(172218),
    b = r(139286),
    O = r(536572),
    L = r(17928),
    N = r(403581),
    S = r(777666),
    V = r(287809),
    B = r(428262),
    H = r(590180),
    D = r(993408),
    U = r(13875),
    W = r(466459),
    M = r(561769),
    F = r(525723),
    w = r(57020),
    G = r(375708),
    z = r(512514);
let Y = (e) => {
        let {
                product: t,
                badgeOverride: r,
                productBadgeOverride: i,
                skipLimitedTimeCheck: s,
                className: a,
                prioritizedCurrency: u,
            } = e,
            { isPurchased: o, isPartiallyOwnedBundle: d } = (0, W.h)(t),
            p = (0, D.G0)(t),
            k = (0, L.bG)([H.A], () => H.A.getCategoryForProduct(t.skuId)),
            C = k?.unpublishedAt != null ? (0, D.WU)(k.unpublishedAt) : null,
            m = (0, L.bG)([V.default], () => V.default.getCurrentUser()),
            I = B.Ay.canUseShopDiscounts(m),
            x = (0, F.V_)(t),
            { isOrbExclusive: A } = (0, w.F)({
                product: t,
                hasShopDiscount: I,
                prioritizedCurrency: u,
                hasDiscountOffer: null != x,
            }),
            g = (0, U.Do)("ProductCardBadgeInner") && t.type === c.R.PROFILE_FRAME,
            _ = r;
        if (
            (null == _ &&
                (g
                    ? (_ = M.AW.EARLY_ACCESS)
                    : null != i
                      ? (_ = M.AW.BADGE_OVERRIDE)
                      : !s && (0, D.HF)(k?.unpublishedAt)
                        ? (_ = M.AW.LIMITED_TIME)
                        : !d && !o && (0, D.aT)(t.skuId)
                          ? (_ = M.AW.NEW)
                          : A
                            ? (_ = M.AW.ORBS_EXCLUSIVE)
                            : p && (_ = M.AW.NITRO_EXCLUSIVE)),
            null == _ || _ === M.AW.NONE)
        )
            return null;
        if (_ === M.AW.EARLY_ACCESS)
            return (0, n.jsx)("span", {
                role: "img",
                "aria-label": G.intl.string(G.t["1m6qcO"]),
                className: l()(a, z.$),
                children: (0, n.jsx)(N.t, { size: "sm", color: "currentColor" }),
            });
        let E = null;
        switch (_) {
            case M.AW.LIMITED_TIME:
                E =
                    null != C
                        ? C > 1
                            ? G.intl.formatToPlainString(G.t.Io7ozn, { days: C })
                            : G.intl.string(G.t.Bc13HF)
                        : G.intl.string(G.t["h/uBCR"]);
                break;
            case M.AW.NEW:
                E = G.intl.string(G.t.y2b7CA);
                break;
            case M.AW.NITRO_EXCLUSIVE:
                E = G.intl.string(G.t.X3Ekj8);
                break;
            case M.AW.ORBS_EXCLUSIVE:
                E = G.intl.string(G.t["0TmQRG"]);
                break;
            case M.AW.BADGE_OVERRIDE:
                E = i;
        }
        return (0, n.jsx)(S.Lp, { text: E, disableColor: !0, className: l()(a, z.s) });
    },
    Q = (e) => {
        let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
            a = (0, M.Vm)(t),
            u = (0, T.Q)(a);
        if (null == a || a.hideBadge) return null;
        let c = (0, R.rb)(a, u);
        return (0, n.jsx)(Y, {
            product: c,
            badgeOverride: r,
            productBadgeOverride: a.badgeOverride,
            skipLimitedTimeCheck: l,
            className: i,
            prioritizedCurrency: s,
        });
    };
var q = r(834730);
let K = (e) => {
    let { skuId: t, className: r } = e,
        i = (0, M.Vm)(t),
        s = (0, O.VG)(i),
        { enabled: l } = (0, _.P)("ProductCardName"),
        a = l && null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(q.E, {
        tag: "span",
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
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(t),
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
            a = (0, L.bG)([V.default], () => V.default.getCurrentUser()),
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
            s = (0, M.Vm)(t),
            l = (0, T.Q)(s);
        if (null == s) return null;
        let a = (0, R.rb)(s, i ?? l);
        return (0, n.jsx)(ea, { product: a, isCardHovered: r });
    };
var ed = r(702841),
    ep = r(740076),
    ek = r(219103),
    eC = r(380836);
let em = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, ed.bG)([V.default], () => V.default.getCurrentUser()),
            l = B.Ay.canUseCollectibles(s),
            a = (0, D.xM)(s),
            u = (0, U.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, ep.I)(t.skuId),
            { isPurchased: p, isPartiallyOwnedBundle: k } = (0, W.h)(t),
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
            ? (0, n.jsx)(q.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: G.intl.string(G.t.wu4gyV),
              })
            : k
              ? (0, n.jsx)(q.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: G.intl.string(G.t.BEjTij),
                })
              : p && !(C && !l)
                ? (0, n.jsx)(q.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: G.intl.string(G.t["6cfuDj"]),
                  })
                : m
                  ? (0, n.jsx)(q.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: G.intl.string(G.t.nBtvYB),
                    })
                  : C
                    ? (0, n.jsx)(q.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: G.intl.string(G.t.rt69oo),
                      })
                    : 0 === A.length
                      ? null
                      : (0, n.jsx)(ek.x, {
                            priceAmount: A[0].amount,
                            priceCurrency: A[0].currency,
                            discount: I,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? D.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: x,
                            className: _ && !g ? eC.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    eI = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            i = (0, M.Vm)(t),
            s = (0, T.Q)(i);
        if (null == i) return null;
        let l = (0, R.rb)(i, s);
        return (0, n.jsx)(em, { product: l, prioritizedCurrency: r });
    };
var ex = r(821609),
    eA = r(44120),
    eg = r(465794),
    e_ = r(757036),
    eE = r(106799),
    eh = r(652165),
    ef = r(859040),
    eT = r(4227),
    eR = r(640634),
    ej = r(450481),
    ev = r(395068),
    ey = r(766172),
    eP = r(61750),
    eb = r(758836),
    eO = r(788868),
    eL = r(40577);
let eN = (e) => {
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
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(eb.sH.BUY_WITH_FIAT),
                    (0, eA.A)({
                        skuId: (0, ey.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, n.jsx)(eg.A, {
            subscriptionTier: eO.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? G.intl.string(G.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(eb.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eV = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: i } = e;
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eb.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? G.intl.string(G.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eB = (e) => {
        let { handleUseNow: t, isApplying: r, text: i, onTrackClick: s } = e;
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(eb.sH.USE_NOW), t();
            },
            loading: r,
            text: i ?? G.intl.string(G.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let { skuId: t, onClick: r, text: i } = e;
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: i ?? G.intl.string(G.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eD = (e) => {
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
                    u?.(eb.sH.ADD_TO_COLLECTION),
                    await (0, ef.iJ)(t.skuId),
                    (0, eP.A)({ product: t, analyticsLocations: s, purchaseType: eb.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(ex.$, {
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
            c = (0, eR.l)("collectibles_shop_product_card");
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            text:
                l ??
                G.intl.format(c ? G.t.JC15qj : G.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(eE.A, { className: eL.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(eb.sH.BUY_WITH_ORBS),
                    (0, eh.B4)({
                        skuId: (0, ey.Y)({ product: t, selectedVariantIndex: s }),
                        onComplete: (e) => {
                            (0, ef.gB)(),
                                (0, eP.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: e?.entitlements?.[0]?.consumed,
                                    purchaseType: eb.gs.ORB,
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
        return (0, n.jsx)(ex.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), i?.(eb.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? G.intl.string(G.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eM = (e) => {
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
            d = (0, ed.bG)([V.default], () => V.default.getCurrentUser()),
            p = (0, e_.L)(eO.PremiumTypes.TIER_2),
            k = B.Ay.canUseShopDiscounts(d),
            { isPurchased: C, isPartiallyOwnedBundle: x } = (0, W.h)(t),
            A = (0, D.G0)(t),
            g = (0, D.tt)(t),
            { isDisabled: _ } = (0, ep.I)(t.skuId),
            E = (0, D.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: C }),
            h = (0, F.V_)(t),
            f = null != h,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: R,
                checkoutEligiblePrices: j,
                isOrbExclusive: v,
            } = (0, w.F)({ product: t, hasShopDiscount: k, prioritizedCurrency: a, hasDiscountOffer: f }),
            { analyticsLocations: y } = (0, I.Ay)(m.A.COLLECTIBLES_SHOP_CARD),
            P = (0, M.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [b, O] = (0, ed.yK)([eT.A], () => [
                eT.A.isClaiming === t.skuId,
                null != eT.A.isClaiming && eT.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: L, isApplying: N } = (0, ej.p)({ product: t });
        if (null != s) return (0, n.jsx)(eH, { onClick: s, skuId: t.skuId, text: l });
        if (A && !p && !g) return (0, n.jsx)(eS, { text: l, onTrackClick: c });
        if (!E || _) return (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        if (C) return (0, n.jsx)(eB, { handleUseNow: L, isApplying: N, text: l, onTrackClick: c });
        if (o)
            return (0, n.jsx)(I.f5, {
                value: [...y, m.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, n.jsx)(eS, { text: G.intl.string(G.t.IvmZVF), onTrackClick: c }),
            });
        if (A)
            return (0, n.jsx)(eD, {
                product: t,
                isClaimPremiumProductDisabled: O,
                isClaiming: b,
                analyticsLocations: y,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && R)
            return (0, n.jsx)(eU, {
                product: t,
                checkoutEligiblePrices: j,
                analyticsLocations: y,
                selectedVariantIndex: i,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && !R)
            if (j.length > 1) return (0, n.jsx)(eW, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
            else return (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c });
        return v
            ? (0, n.jsx)(eV, { handlePreviewButtonClick: P, text: l, onTrackClick: c })
            : (0, n.jsx)(eN, {
                  product: t,
                  cardRef: r,
                  hasShopDiscount: k,
                  analyticsLocations: y,
                  selectedVariantIndex: i,
                  hasDiscountOffer: f,
                  discountOfferAmount: h,
                  text: l,
                  onTrackClick: c,
              });
    },
    eF = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, M.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, R.rb)(c, o);
        return (0, n.jsx)(eM, {
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
var ew = r(408278),
    eG = r(39623),
    ez = r(878112),
    eY = r(347722);
let eQ = (e) => {
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
            k = (0, eY.X)(t, a),
            C = (0, M.ql)(t, m.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, n.jsx)(ew.K, {
                  variant: "primary",
                  "aria-label": G.intl.string(G.t.SKNnqq),
                  icon: l ?? eG.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(eb.sH.OPEN_DETAILS), C(e));
                  },
              })
            : k
              ? (0, n.jsx)(A.R9, {
                    newValue: { pageCategory: d === eb.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, n.jsx)(ez.A, {
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
    eq = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, M.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, R.rb)(c, o);
        return (0, n.jsx)(eQ, {
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
var eK = r(661847),
    eX = r(139146),
    e$ = r(420960);
let eZ = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: i, onTrackClick: s } = e;
        return (0, n.jsx)(eX.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: e$.i,
            onTrackClick: s,
        });
    },
    eJ = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: i } = e,
            s = (0, M.Vm)(t),
            l = (0, T.Q)(s);
        return null == s
            ? null
            : (0, n.jsx)(eZ, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: i });
    };
var e0 = r(935094),
    e1 = r(496569);
let e7 = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: C,
                hideSecondaryCTA: E,
                badgeOverride: L,
                skipLimitedTimeCheck: N,
                onClickCard: S,
                onClickPrimaryCTA: V,
                onClickSecondaryCTA: B,
                onMouseEnter: H,
                onMouseLeave: D,
                onFocus: U,
                onBlur: W,
                primaryCTAText: F,
                secondaryCTAIcon: w,
                productNameClassName: G,
                badgeClassName: z,
                cardClassName: Y,
                prioritizedCurrency: q,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: Z, handleEntering: J, handleLeaving: ee } = (0, e0.f)(t),
            et = (0, M.gZ)() ?? q,
            { enabled: er } = (0, _.P)("ProductCard"),
            en = (0, g.Mk)(),
            ei = en?.tab,
            es = (0, A.uM)(),
            el = i.useMemo(() => (0, M.UU)(t, ei, es), [t, ei, es]),
            ea = (0, O.s7)(t),
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
                                name: y.ImpressionNames.SHOP_CARD,
                                type: y.ImpressionTypes.VIEW,
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
            { handleCardVisibilityChange: eC } = (0, h.Z)(t.skuId, ei === eb.G2.CATALOG ? "full" : ei),
            em = (0, M.ql)(t, m.A.COLLECTIBLES_SHOP_CARD, el),
            { analyticsLocations: ex } = (0, I.Ay)(),
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
            })({ product: t, analyticsLocations: ex }),
            eg = i.useCallback(
                (e) => {
                    null != S ? S(e) : (eA(eb.sH.OPEN_DETAILS), em(e));
                },
                [eA, S, em],
            );
        !(function (e, t) {
            let r = (0, A.uM)(),
                { analyticsLocations: n } = (0, I.Ay)(),
                s = (0, T.Q)(t),
                l = i.useRef(!1),
                a = (0, v.A)(r),
                u = (0, v.A)(t),
                c = (0, v.A)(s),
                o = (0, v.A)(n);
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
            eE = t.type === c.R.BUNDLE && e_ && t.previewAssets?.fgStatic != null,
            eh = t.type === c.R.VARIANTS_GROUP && !a,
            ef = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            eT = t.type === c.R.BUNDLE && er && !$,
            eR = !C || !E,
            ej = !(o && s) || eh,
            ev = ej || eR,
            ey = eR || eh;
        return (0, n.jsx)(d.L, {
            innerRef: ec,
            onChange: eC,
            threshold: 0,
            children: (0, n.jsx)(p.s, {
                ref: ek,
                onClick: eg,
                "aria-label": ea,
                "aria-describedby": eu,
                className: l()(Y, e1.ty, { [e1.yo]: ed }),
                onFocus: () => U?.(t.skuId),
                onBlur: () => W?.(t.skuId),
                onMouseEnter: () => H?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    id: eu,
                    className: e1.qt,
                    style: { aspectRatio: X },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: e1.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: l()(e1.Dq, { [e1.$r]: !s || ej || ey, [e1.T9]: eE }),
                            children: (0, n.jsx)(eo, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: e1.N1,
                            children: [
                                (0, n.jsx)(Q, {
                                    skuId: t.skuId,
                                    badgeOverride: L,
                                    className: z,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: N,
                                }),
                                !r && (0, n.jsx)(eJ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eA }),
                            ],
                        }),
                        ev &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: l()(e1.wY, { [e1.KY]: eE }) }),
                                    (0, n.jsxs)("div", {
                                        className: e1.xQ,
                                        children: [
                                            ej &&
                                                (0, n.jsxs)("div", {
                                                    className: e1.xE,
                                                    children: [
                                                        !(s && o) &&
                                                            (0, n.jsxs)("div", {
                                                                className: e1.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, n.jsx)(K, {
                                                                            skuId: t.skuId,
                                                                            className: l()(G, e1.tZ),
                                                                        }),
                                                                    !o &&
                                                                        (0, n.jsx)("div", {
                                                                            className: e1.oh,
                                                                            children: (0, n.jsx)(eI, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eh &&
                                                            (0, n.jsx)(eK.A, {
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
                                                    className: e1.Vs,
                                                    children: (0, n.jsxs)(k.e, {
                                                        wrap: !1,
                                                        className: e1.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !C &&
                                                                (0, n.jsx)(eF, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: V,
                                                                    text: F,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: el,
                                                                    onTrackClick: eA,
                                                                }),
                                                            !E &&
                                                                (0, n.jsx)(eq, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: B,
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
            i = (0, M.Vm)(t),
            s = (0, C.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, E.c)("product_card");
        return null != i && (t !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, n.jsx)(A.R9, { newValue: s, children: (0, n.jsx)(e7, { product: i, ...r }) })
            : null;
    };
