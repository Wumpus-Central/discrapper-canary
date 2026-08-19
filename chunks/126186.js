t.d(r, { jP: () => eA, Rf: () => ej, oK: () => eN, r6: () => ev, MR: () => eg });
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
    D = t(137504);
function w(e) {
    let { title: r, body: t, image: i, badge: l, className: a } = e;
    return (0, n.jsxs)("div", {
        className: s()(D.kL, a),
        children: [
            null != i && (0, n.jsx)("div", { className: D.Sl, children: i }),
            (0, n.jsxs)("div", {
                className: D.Qs,
                children: [null != l && (0, n.jsx)("div", { className: D.oL, children: l }), r, t],
            }),
        ],
    });
}
var O = t(375708),
    L = t(951321);
function U() {
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
    if (d) return (0, n.jsx)(H, { rewardImageUrl: i, countdownText: o, header: r.header, desktopBody: r.desktopBody });
    let u = (0, B.gc)(t),
        m = r?.gradient,
        p =
            null != m && null != m.colors && m.colors.length >= 2
                ? (0, B.K5)({ gradient: m.colors, angle: m.angle ?? void 0 })
                : void 0,
        h = (0, B.x)(u, p);
    return (0, n.jsxs)("div", {
        className: L.kL,
        style: h,
        children: [
            (0, n.jsxs)("div", {
                className: L.V_,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: O.intl.string(O.t.OEtqpm),
                    }),
                    (0, n.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: O.intl.formatToPlainString(O.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: L.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(L.my, { [L.R_]: l }),
                    }),
                }),
        ],
    });
}
function H(e) {
    let { rewardImageUrl: r, countdownText: t, header: i, desktopBody: l } = e;
    return (0, n.jsx)("div", {
        className: L.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(w, {
            image: null != r ? (0, n.jsx)("img", { className: L.L8, alt: "", src: r }) : void 0,
            badge:
                null != t
                    ? (0, n.jsx)(b.E, { type: { text: t.toUpperCase() }, variant: "brand", icon: I.ClockIcon })
                    : void 0,
            title: (0, n.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: i }),
            body: (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var F = t(724651),
    V = t(732280),
    K = t(862990),
    Y = t(35587),
    z = t(783420),
    W = t(204413),
    $ = t(511484),
    q = t(774774),
    Z = t(289873),
    X = t(626584),
    Q = t(97352),
    J = t(795269),
    ee = t(202541),
    er = t(109447),
    et = t(12260),
    ei = t(658859);
let en = new X.A("PremiumGroupPrice.tsx"),
    el = (0, n.jsx)(Z.y, { type: Z.y.Type.PULSING_ELLIPSIS, className: ei.xB }),
    ea = function (e) {
        let r,
            { isGift: t = !1, discountOffer: i, priceOptions: l, isApplicationHome: a = !1 } = e,
            u = (0, c.bG)([Q.A], () => Q.A.get(ee.gD.PREMIUM_GROUP_MONTH)),
            p = (0, $.N1)(ee.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, j.Ay)());
        if (null == u) return el;
        try {
            r = (0, A.sS)(u, l, !1, t, !1);
        } catch {
            return en.warn(`No price available for plan ${u.id} in currency ${l?.currency ?? "unknown"}`), el;
        }
        let g = ee.WT.MONTH;
        if (null != i && null != p) {
            let e = i.discount.intervalCount;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("hr", { className: s()(et.vI, { [et.oE]: a }) }),
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
                                className: et.Yc,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: O.intl.format(er.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, n.jsx)(x.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: O.intl.format(er.default["4b2ByP"], { regularPrice: r }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(J.R, {
                                text: O.intl.formatToPlainString(er.default.GEwdVw, {
                                    percent: i.discount.amount,
                                    discountOfferAmount: i.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("hr", { className: s()(et.yF, { [et.oE]: a }) }),
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
                    children: O.intl.string(er.default["R+dzZw"]),
                }),
                (0, n.jsx)("hr", { className: et.yF }),
            ],
        });
    };
var es = t(860839),
    eo = t(824069),
    ec = t(222719),
    ed = t(88001),
    eu = t(174788),
    em = t(232266),
    ex = t(243002),
    ep = t(241988);
function eh(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: eu.tierCardStack, children: r })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eu.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: eu.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: eu.footer, children: t }),
              ],
          });
}
function eg(e) {
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
        h = (0, V.V)(),
        g = h?.subscriptionTrial?.skuId,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        N = (0, q.Lj)(f, g),
        v = null != N,
        A = (0, m.q)((0, j.Ay)()),
        E = u ? O.intl.string(O.t.tUbSDK) : O.intl.string(O.t["t9uG/o"]),
        R = (0, n.jsxs)(eh, {
            footer: r,
            children: [
                v && (0, n.jsx)(J.R, { text: N, className: eu.pill }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: E,
                }),
                (0, n.jsx)(ec.A, {
                    isGift: l,
                    premiumTier: ee.PremiumTypes.TIER_0,
                    offerType: ee.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === ee.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                (0, n.jsx)("hr", { className: eu.divider }),
                (0, n.jsx)(es.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        y = s()(eu.card, eu.tier0, i, { [eu.pillMargin]: !d && v });
    return (0, n.jsx)("div", { className: y, children: R });
}
var ej =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ef(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, $.N1)(ee.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, A.y8)(ee.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, E.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: eu.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: eu.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: O.intl.format(O.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: O.intl.format(O.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(J.R, { text: O.intl.formatToPlainString(O.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function eN(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = es.Nz.DEFAULT,
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
        y = (0, V.V)(),
        P = y?.subscriptionTrial?.skuId,
        b = A?.hasActiveTrial ? E?.premiumType : null,
        I = A?.planIdFromItems === ee.gD.PREMIUM_YEAR_TIER_2,
        _ = (0, F.O)(),
        M = (0, F.p)(),
        S = (0, R.k5)(),
        k = null != P || null != b ? ee.Vk.PREMIUM_TRIAL : null != _ || S ? ee.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, j.Ay)()),
        B = null != M && !a,
        D = !a && null != _ && (0, $.hm)(_),
        w = !a && S && I && k === ee.Vk.PREMIUM_DISCOUNT,
        L = (0, q.rm)(S, b, a ? null : _, y, P),
        H = (0, Y.Sq)() && !a && null == k,
        K = null != r || x ? (0, n.jsxs)(n.Fragment, { children: [r, x && (0, n.jsx)(U, {})] }) : null,
        z = d && !a,
        W = (0, n.jsxs)(eh, {
            footer: K,
            children: [
                f &&
                    !B &&
                    !w &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !D &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: ex, alt: "", className: s()(eu.bigCloud, eu[h]) }),
                                            (0, n.jsx)("img", {
                                                src: em,
                                                alt: "",
                                                className: s()(eu.smallCloud, eu[h]),
                                            }),
                                        ],
                                    }),
                                (!D || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: ep,
                                        alt: "",
                                        className: s()(eu.wumpus, eu[h], { [eu.withAnnualDiscountBanner]: D }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !D &&
                    (0, n.jsx)(J.R, {
                        text:
                            L ??
                            (H
                                ? O.intl.formatToPlainString(O.t["4SEnCZ"], { months: 1 })
                                : O.intl.string(O.t["6bEcYr"])),
                        className: eu.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: O.intl.string(O.t.lG6a5x),
                }),
                (0, n.jsx)(ec.A, {
                    isGift: a,
                    premiumTier: ee.PremiumTypes.TIER_2,
                    offerType: k,
                    offerTierMatchesCard: P === ee.pe.TIER_2 || (0, $.U9)(_, ee.pe.TIER_2),
                    showYearlyPrice: t && !D,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                D
                    ? (0, n.jsx)(ef, { discountOffer: _, priceOptions: u, isGift: a, narrowLayout: v })
                    : (0, n.jsx)("hr", { className: eu.divider }),
                (0, n.jsx)(es.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        D || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eu.firstFeatureItemContainer,
                }),
                z && (0, n.jsx)(eo.K, {}),
            ],
        }),
        Z = s()(eu.card, l, { [eu.withGiftBanner]: x });
    return B
        ? (0, n.jsx)("div", { className: Z, children: W })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: Z, children: W });
}
function ev(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, j.Ay)()),
        c = (0, F.p)(),
        d = (0, n.jsxs)(eh, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: eu.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: eu.cardTitle,
                            children: O.intl.string(er.default.eSKiXk),
                        }),
                        (0, n.jsx)(J.R, {
                            text: O.intl.string(O.t.oW0eUd),
                            className: eu.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, n.jsx)(ea, { discountOffer: c, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(es.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: s()(eu.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(eu.card, eu.borderGradient, r), children: d });
}
function eC(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        o = r === ee.pe.TIER_2,
        c = (0, F.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, W.$)({
            subscriptionTier: r,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eu.tierCardStack, { [eu.premiumCardHover]: !t }),
            children: (0, n.jsx)(o ? eN : eg, {
                className: s()(eu.applicationHomeCard, { [eu.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eu.tierCardStack, l),
        children: p
            ? j
            : (0, n.jsx)(z.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: eu.tierCardStack, children: j });
                  },
              }),
    });
}
function eT(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, F.p)(),
        l = null != i,
        a = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        o = null != a && (0, A.Nc)(a),
        m = l
            ? O.intl.format(er.default["7j70dP"], {
                  percent: i.discount?.amount,
                  premiumGroupProductName: (0, ed.DP)(),
              })
            : O.intl.string(O.t["2pG5Ga"]),
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
            className: s()(eu.tierCardStack, { [eu.premiumCardHover]: !r }),
            children: (0, n.jsx)(ev, {
                className: s()(eu.applicationHomeCard, eu.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eu.tierCardStack, t),
        children: o
            ? p
            : (0, n.jsx)(z.A, {
                  subscriptionTier: ee.pe.TIER_2,
                  initialPlanId: ee.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: eu.tierCardStack, children: p });
                  },
              }),
    });
}
function eA(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, v.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, es.pw)(r),
        a = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, K.PA)();
    return (0, n.jsx)(v.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(eu.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: eu.premiumCardsHeader,
                    children: O.intl.string(O.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: eu.premiumCards,
                    children: [
                        (0, n.jsx)(eC, {
                            subscriptionTier: ee.pe.TIER_0,
                            isReducedMotion: a,
                            className: eu.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(eC, {
                            subscriptionTier: ee.pe.TIER_2,
                            isReducedMotion: a,
                            className: eu.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(eT, { isReducedMotion: a, className: eu.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
