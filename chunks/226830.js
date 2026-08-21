t.d(r, { jP: () => eT, Rf: () => eg, oK: () => ef, r6: () => eN, MR: () => eh });
var i,
    n = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(297264),
    c = t(17928),
    d = t(331322),
    u = t(821609),
    m = t(462887),
    x = t(834730),
    p = t(315629),
    h = t(939249),
    g = t(403581),
    j = t(736653),
    f = t(775602),
    N = t(793574),
    v = t(688810),
    C = t(287809),
    T = t(166403),
    A = t(158045),
    E = t(580630),
    R = t(526292),
    y = t(877624),
    P = t(978656),
    b = t(508770),
    I = t(406810),
    _ = t(951305),
    M = t(421108),
    S = t(807098),
    k = t(412260),
    G = t(753261),
    B = t(580194),
    D = t(531536),
    w = t(375708),
    O = t(951321);
function L() {
    let { claimableRewards: e } = (0, _.Pv)(),
        r = (0, c.bG)([k.A], () => {
            let e = k.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, S.T)(r?.bannerAsset),
        i = (0, S.T)(r?.avatarAsset),
        l = r?.assetVariant === P.Y.LARGE_TILTED,
        a = (0, c.bG)([k.A], () => k.A.getGiftPromotion()),
        o = (0, M.dA)(a?.endDate),
        { enabled: d } = G.E.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" });
    if (null == r || null == e || 0 === e.length) return null;
    if (d) return (0, n.jsx)(U, { rewardImageUrl: i, countdownText: o, header: r.header, desktopBody: r.desktopBody });
    let u = (0, B.gc)(t),
        m = r?.gradient,
        p =
            null != m && null != m.colors && m.colors.length >= 2
                ? (0, B.K5)({ gradient: m.colors, angle: m.angle ?? void 0 })
                : void 0,
        h = (0, B.x)(u, p);
    return (0, n.jsxs)("div", {
        className: O.kL,
        style: h,
        children: [
            (0, n.jsxs)("div", {
                className: O.V_,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: w.intl.string(w.t.OEtqpm),
                    }),
                    (0, n.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: w.intl.formatToPlainString(w.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: O.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(O.my, { [O.R_]: l }),
                    }),
                }),
        ],
    });
}
function U(e) {
    let { rewardImageUrl: r, countdownText: t, header: i, desktopBody: l } = e;
    return (0, n.jsx)("div", {
        className: O.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(D.W, {
            image: null != r ? (0, n.jsx)("img", { className: O.L8, alt: "", src: r }) : void 0,
            badge:
                null != t
                    ? (0, n.jsx)(b.E, { type: { text: t.toUpperCase() }, variant: "brand", icon: I.ClockIcon })
                    : void 0,
            title: (0, n.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: i }),
            body: (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var H = t(724651),
    F = t(732280),
    V = t(862990),
    K = t(35587),
    Y = t(783420),
    W = t(204413),
    z = t(511484),
    $ = t(774774),
    q = t(289873),
    Z = t(626584),
    X = t(97352),
    Q = t(795269),
    J = t(202541),
    ee = t(109447),
    er = t(12260),
    et = t(658859);
let ei = new Z.A("PremiumGroupPrice.tsx"),
    en = (0, n.jsx)(q.y, { type: q.y.Type.PULSING_ELLIPSIS, className: et.xB }),
    el = function (e) {
        let r,
            { isGift: t = !1, discountOffer: i, priceOptions: l, isApplicationHome: a = !1 } = e,
            u = (0, c.bG)([X.A], () => X.A.get(J.gD.PREMIUM_GROUP_MONTH)),
            p = (0, z.N1)(J.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, j.Ay)());
        if (null == u) return en;
        try {
            r = (0, A.sS)(u, l, !1, t, !1);
        } catch {
            return ei.warn(`No price available for plan ${u.id} in currency ${l?.currency ?? "unknown"}`), en;
        }
        let g = J.WT.MONTH;
        if (null != i && null != p) {
            let e = i.discount.intervalCount;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("hr", { className: s()(er.vI, { [er.oE]: a }) }),
                    (0, n.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, n.jsxs)(d.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: er.Yc,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: w.intl.format(ee.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, n.jsx)(x.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: w.intl.format(ee.default["4b2ByP"], { regularPrice: r }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(Q.R, {
                                text: w.intl.formatToPlainString(ee.default.GEwdVw, {
                                    percent: i.discount.amount,
                                    discountOfferAmount: i.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("hr", { className: s()(er.yF, { [er.oE]: a }) }),
                ],
            });
        }
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "heading-xxl/extrabold",
                            color: h ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: r,
                        }),
                        (0, n.jsxs)(x.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, A.FJ)(g)],
                        }),
                    ],
                }),
                (0, n.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: w.intl.string(ee.default["R+dzZw"]),
                }),
                (0, n.jsx)("hr", { className: er.yF }),
            ],
        });
    };
var ea = t(860839),
    es = t(824069),
    eo = t(222719),
    ec = t(88001),
    ed = t(174788),
    eu = t(232266),
    em = t(243002),
    ex = t(241988);
function ep(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: ed.tierCardStack, children: r })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ed.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: ed.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: ed.footer, children: t }),
              ],
          });
}
function eh(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        p = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        h = (0, F.V)(),
        g = h?.subscriptionTrial?.skuId,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        N = (0, $.Lj)(f, g),
        v = null != N,
        A = (0, m.q)((0, j.Ay)()),
        E = u ? w.intl.string(w.t.tUbSDK) : w.intl.string(w.t["t9uG/o"]),
        R = (0, n.jsxs)(ep, {
            footer: r,
            children: [
                v && (0, n.jsx)(Q.R, { text: N, className: ed.pill }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: ed.cardTitle,
                    children: E,
                }),
                (0, n.jsx)(eo.A, {
                    isGift: l,
                    premiumTier: J.PremiumTypes.TIER_0,
                    offerType: J.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === J.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ed.priceHeader,
                }),
                (0, n.jsx)("hr", { className: ed.divider }),
                (0, n.jsx)(ea.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        y = s()(ed.card, ed.tier0, i, { [ed.pillMargin]: !d && v });
    return (0, n.jsx)("div", { className: y, children: R });
}
var eg =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ej(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, z.N1)(J.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, A.y8)(J.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, E.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: ed.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: ed.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: w.intl.format(w.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: w.intl.format(w.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(Q.R, { text: w.intl.formatToPlainString(w.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ef(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = ea.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        A = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        E = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        y = (0, F.V)(),
        P = y?.subscriptionTrial?.skuId,
        b = A?.hasActiveTrial ? E?.premiumType : null,
        I = A?.planIdFromItems === J.gD.PREMIUM_YEAR_TIER_2,
        _ = (0, H.O)(),
        M = (0, H.p)(),
        S = (0, R.k5)(),
        k = null != P || null != b ? J.Vk.PREMIUM_TRIAL : null != _ || S ? J.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, j.Ay)()),
        B = null != M && !a,
        D = !a && null != _ && (0, z.hm)(_),
        O = !a && S && I && k === J.Vk.PREMIUM_DISCOUNT,
        U = (0, $.rm)(S, b, a ? null : _, y, P),
        V = (0, K.Sq)() && !a && null == k,
        Y = null != r || x ? (0, n.jsxs)(n.Fragment, { children: [r, x && (0, n.jsx)(L, {})] }) : null,
        W = d && !a,
        q = (0, n.jsxs)(ep, {
            footer: Y,
            children: [
                f &&
                    !B &&
                    !O &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !D &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: em, alt: "", className: s()(ed.bigCloud, ed[h]) }),
                                            (0, n.jsx)("img", {
                                                src: eu,
                                                alt: "",
                                                className: s()(ed.smallCloud, ed[h]),
                                            }),
                                        ],
                                    }),
                                (!D || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: ex,
                                        alt: "",
                                        className: s()(ed.wumpus, ed[h], { [ed.withAnnualDiscountBanner]: D }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !D &&
                    (0, n.jsx)(Q.R, {
                        text:
                            U ??
                            (V
                                ? w.intl.formatToPlainString(w.t["4SEnCZ"], { months: 1 })
                                : w.intl.string(w.t["6bEcYr"])),
                        className: ed.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: ed.cardTitle,
                    children: w.intl.string(w.t.lG6a5x),
                }),
                (0, n.jsx)(eo.A, {
                    isGift: a,
                    premiumTier: J.PremiumTypes.TIER_2,
                    offerType: k,
                    offerTierMatchesCard: P === J.pe.TIER_2 || (0, z.U9)(_, J.pe.TIER_2),
                    showYearlyPrice: t && !D,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ed.priceHeader,
                }),
                D
                    ? (0, n.jsx)(ej, { discountOffer: _, priceOptions: u, isGift: a, narrowLayout: v })
                    : (0, n.jsx)("hr", { className: ed.divider }),
                (0, n.jsx)(ea.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        D || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ed.firstFeatureItemContainer,
                }),
                W && (0, n.jsx)(es.K, {}),
            ],
        }),
        Z = s()(ed.card, l, { [ed.withGiftBanner]: x });
    return B
        ? (0, n.jsx)("div", { className: Z, children: q })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: Z, children: q });
}
function eN(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, j.Ay)()),
        c = (0, H.p)(),
        d = (0, n.jsxs)(ep, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: ed.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: ed.cardTitle,
                            children: w.intl.string(ee.default.eSKiXk),
                        }),
                        (0, n.jsx)(Q.R, {
                            text: w.intl.string(w.t.oW0eUd),
                            className: ed.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, n.jsx)(el, { discountOffer: c, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(ea.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: s()(ed.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(ed.card, ed.borderGradient, r), children: d });
}
function ev(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        o = r === J.pe.TIER_2,
        c = (0, H.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, W.$)({
            subscriptionTier: r,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ed.tierCardStack, { [ed.premiumCardHover]: !t }),
            children: (0, n.jsx)(o ? ef : eh, {
                className: s()(ed.applicationHomeCard, { [ed.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ed.tierCardStack, l),
        children: p
            ? j
            : (0, n.jsx)(Y.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: ed.tierCardStack, children: j });
                  },
              }),
    });
}
function eC(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, H.p)(),
        l = null != i,
        a = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        o = null != a && (0, A.Nc)(a),
        m = l
            ? w.intl.format(ee.default["7j70dP"], {
                  percent: i.discount?.amount,
                  premiumGroupProductName: (0, ec.DP)(),
              })
            : w.intl.string(w.t["2pG5Ga"]),
        x = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: o,
        }),
        p = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ed.tierCardStack, { [ed.premiumCardHover]: !r }),
            children: (0, n.jsx)(eN, {
                className: s()(ed.applicationHomeCard, ed.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ed.tierCardStack, t),
        children: o
            ? p
            : (0, n.jsx)(Y.A, {
                  subscriptionTier: J.pe.TIER_2,
                  initialPlanId: J.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: ed.tierCardStack, children: p });
                  },
              }),
    });
}
function eT(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, v.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, ea.pw)(r),
        a = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, V.PA)();
    return (0, n.jsx)(v.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(ed.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ed.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: ed.premiumCards,
                    children: [
                        (0, n.jsx)(ev, {
                            subscriptionTier: J.pe.TIER_0,
                            isReducedMotion: a,
                            className: ed.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(ev, {
                            subscriptionTier: J.pe.TIER_2,
                            isReducedMotion: a,
                            className: ed.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(eC, { isReducedMotion: a, className: ed.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
