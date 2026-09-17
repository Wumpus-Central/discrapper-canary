r.d(t, { jP: () => eN, Rf: () => ep, oK: () => ef, r6: () => eg, MR: () => ex });
var i,
    n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    o = r(297264),
    d = r(17928),
    c = r(331322),
    u = r(821609),
    m = r(462887),
    x = r(834730),
    p = r(315629),
    h = r(939249),
    f = r(403581),
    g = r(736653),
    j = r(775602),
    A = r(793574),
    N = r(688810),
    v = r(287809),
    E = r(166403),
    C = r(158045),
    T = r(580630),
    R = r(526292),
    P = r(877624),
    y = r(508770),
    I = r(406810),
    b = r(951305),
    _ = r(421108),
    M = r(240248),
    S = r(807098),
    O = r(412260),
    w = r(531536),
    G = r(375708),
    L = r(951321);
function k() {
    let { claimableRewards: e } = (0, b.Pv)(),
        t = (0, d.bG)([O.A], () => {
            let e = O.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, S.T)(t?.avatarAsset),
        i = (0, d.bG)([O.A], () => O.A.getGiftPromotion()),
        l = (0, _.dA)(i?.endDate);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, n.jsx)(D, {
              rewardImageUrl: r,
              countdownText: l,
              header: (0, M.uJ)(t.header) ? G.intl.string(G.t.OEtqpm) : t.header,
              body: (0, M.uJ)(t.desktopBody)
                  ? G.intl.formatToPlainString(G.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function D(e) {
    let { rewardImageUrl: t, countdownText: r, header: i, body: l } = e;
    return (0, n.jsx)("div", {
        className: L.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(w.W, {
            image: null != t ? (0, n.jsx)("img", { className: L.L8, alt: "", src: t }) : void 0,
            badge:
                null != r
                    ? (0, n.jsx)(y.E, { type: { text: r.toUpperCase() }, variant: "brand", icon: I.ClockIcon })
                    : void 0,
            title: (0, n.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: i }),
            body: (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var B = r(724651),
    U = r(732280),
    F = r(989790),
    H = r(35587),
    z = r(783420),
    Z = r(204413),
    V = r(511484),
    K = r(774774),
    W = r(289873),
    Y = r(626584),
    q = r(97352),
    $ = r(795269),
    X = r(202541),
    J = r(148155),
    Q = r(12260),
    ee = r(658859);
let et = new Y.A("PremiumGroupPrice.tsx"),
    er = (0, n.jsx)(W.y, { type: W.y.Type.PULSING_ELLIPSIS, className: ee.xB }),
    ei = function (e) {
        let t,
            { isGift: r = !1, discountOffer: i, priceOptions: l, isApplicationHome: s = !1 } = e,
            u = (0, d.bG)([q.A], () => q.A.get(X.gD.PREMIUM_GROUP_MONTH)),
            p = (0, V.N1)(X.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, g.Ay)());
        if (null == u) return er;
        try {
            t = (0, C.sS)(u, l, !1, r, !1);
        } catch {
            return (et.warn(`No price available for plan ${u.id} in currency ${l?.currency ?? "unknown"}`), er);
        }
        let f = X.WT.MONTH;
        if (null != i && null != p) {
            let e = i.discount.intervalCount;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("hr", { className: a()(Q.vI, { [Q.oE]: s }) }),
                    (0, n.jsxs)(c.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, n.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: Q.Yc,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: G.intl.format(J.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, n.jsx)(x.E, {
                                        variant: s ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: G.intl.format(J.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)($.R, {
                                text: G.intl.formatToPlainString(J.default.GEwdVw, {
                                    percent: i.discount.amount,
                                    discountOfferAmount: i.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("hr", { className: a()(Q.yF, { [Q.oE]: s }) }),
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
                            children: t,
                        }),
                        (0, n.jsxs)(x.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, C.FJ)(f)],
                        }),
                    ],
                }),
                (0, n.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: G.intl.string(J.default["R+dzZw"]),
                }),
                (0, n.jsx)("hr", { className: Q.yF }),
            ],
        });
    };
var en = r(297346),
    el = r(824069),
    es = r(222719),
    ea = r(88001),
    eo = r(174788),
    ed = r(232266),
    ec = r(243002),
    eu = r(241988);
function em(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStack, children: t })
        : (0, n.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eo.tierCardStack,
              children: [
                  (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStackContent, children: t }),
                  (0, n.jsx)("div", { className: eo.footer, children: r }),
              ],
          });
}
function ex(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: l = !1,
            priceOptions: s,
            isApplicationHome: c = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        p = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        h = (0, U.V)(),
        f = h?.subscriptionTrial?.skuId,
        j = x?.hasActiveTrial ? p?.premiumType : null,
        A = (0, K.Lj)(j, f),
        N = null != A,
        C = (0, m.q)((0, g.Ay)()),
        T = u ? G.intl.string(G.t.tUbSDK) : G.intl.string(G.t["t9uG/o"]),
        R = (0, n.jsxs)(em, {
            footer: t,
            children: [
                N && (0, n.jsx)($.R, { text: A, className: eo.pill }),
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: C ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: T,
                }),
                (0, n.jsx)(es.A, {
                    isGift: l,
                    premiumTier: X.PremiumTypes.TIER_0,
                    offerType: X.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === X.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: s,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                (0, n.jsx)("hr", { className: eo.divider }),
                (0, n.jsx)(en.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        P = a()(eo.card, eo.tier0, i, { [eo.pillMargin]: !c && N });
    return (0, n.jsx)("div", { className: P, children: R });
}
var ep =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function eh(e) {
    let { discountOffer: t, priceOptions: r, isGift: i, narrowLayout: s = !1 } = e,
        a = (0, V.N1)(X.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, C.y8)(X.gD.PREMIUM_YEAR_TIER_2, !1, i, r);
                return (0, T.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, r]);
    return null == a || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: eo.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: eo.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: s ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: G.intl.format(G.t["TCFNZ/"], { discountedPrice: a }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: s ? "text-xs/normal" : "text-sm/normal",
                              children: G.intl.format(G.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)($.R, { text: G.intl.formatToPlainString(G.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function ef(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = en.Nz.DEFAULT,
            className: l,
            isGift: s = !1,
            isModal: c = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: f = !1,
            showWumpus: j = !0,
            showPill: A = !0,
            narrowLayout: N = !1,
        } = e,
        C = (0, d.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        T = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        P = (0, U.V)(),
        y = P?.subscriptionTrial?.skuId,
        I = C?.hasActiveTrial ? T?.premiumType : null,
        b = C?.planIdFromItems === X.gD.PREMIUM_YEAR_TIER_2,
        _ = (0, B.O)(),
        M = (0, B.p)(),
        S = (0, R.k5)(),
        O = null != y || null != I ? X.Vk.PREMIUM_TRIAL : null != _ || S ? X.Vk.PREMIUM_DISCOUNT : null,
        w = (0, m.q)((0, g.Ay)()),
        L = null != M && !s,
        D = !s && null != _ && (0, V.hm)(_),
        F = !s && S && b && O === X.Vk.PREMIUM_DISCOUNT,
        z = (0, K.rm)(S, I, s ? null : _, P, y),
        Z = (0, H.Sq)() && !s && null == O,
        W = null != t || x ? (0, n.jsxs)(n.Fragment, { children: [t, x && (0, n.jsx)(k, {})] }) : null,
        Y = c && !s,
        q = (0, n.jsxs)(em, {
            footer: W,
            children: [
                j &&
                    !L &&
                    !F &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !D &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: ec, alt: "", className: a()(eo.bigCloud, eo[h]) }),
                                            (0, n.jsx)("img", {
                                                src: ed,
                                                alt: "",
                                                className: a()(eo.smallCloud, eo[h]),
                                            }),
                                        ],
                                    }),
                                (!D || null != t) &&
                                    (0, n.jsx)("img", {
                                        src: eu,
                                        alt: "",
                                        className: a()(eo.wumpus, eo[h], { [eo.withAnnualDiscountBanner]: D }),
                                    }),
                            ],
                        });
                    }, {}),
                A &&
                    !D &&
                    (0, n.jsx)($.R, {
                        text:
                            z ??
                            (Z
                                ? G.intl.formatToPlainString(G.t["4SEnCZ"], { months: 1 })
                                : G.intl.string(G.t["6bEcYr"])),
                        className: eo.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: w ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: G.intl.string(G.t.lG6a5x),
                }),
                (0, n.jsx)(es.A, {
                    isGift: s,
                    premiumTier: X.PremiumTypes.TIER_2,
                    offerType: O,
                    offerTierMatchesCard: y === X.pe.TIER_2 || (0, V.U9)(_, X.pe.TIER_2),
                    showYearlyPrice: r && !D,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                D
                    ? (0, n.jsx)(eh, { discountOffer: _, priceOptions: u, isGift: s, narrowLayout: N })
                    : (0, n.jsx)("hr", { className: eo.divider }),
                (0, n.jsx)(en.ZP, {
                    featureSet: i,
                    isModal: c,
                    isGift: s,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: f,
                    firstFeatureItemClassName:
                        D || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eo.firstFeatureItemContainer,
                }),
                Y && (0, n.jsx)(el.K, {}),
            ],
        }),
        J = a()(eo.card, l, { [eo.withGiftBanner]: x });
    return L
        ? (0, n.jsx)("div", { className: J, children: q })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: J, children: q });
}
function eg(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: l } = e,
        s = (0, m.q)((0, g.Ay)()),
        d = (0, B.p)(),
        c = (0, n.jsxs)(em, {
            footer: r,
            children: [
                (0, n.jsxs)("div", {
                    className: eo.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: eo.cardTitle,
                            children: G.intl.string(J.default.eSKiXk),
                        }),
                        (0, n.jsx)($.R, {
                            text: G.intl.string(G.t.oW0eUd),
                            className: eo.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, n.jsx)(ei, { discountOffer: d, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(en.Lg, { isApplicationHome: i }),
            ],
        });
    return null != d
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: a()(eo.card, t), children: c })
        : (0, n.jsx)("div", { className: a()(eo.card, eo.borderGradient, t), children: c });
}
function ej(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: l, narrowLayout: s } = e,
        o = t === X.pe.TIER_2,
        d = (0, B.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, Z.$)({
            subscriptionTier: t,
            variantOverride: o && null == d ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        f = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        g = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(eo.tierCardStack, { [eo.premiumCardHover]: !r }),
            children: (0, n.jsx)(o ? ef : ex, {
                className: a()(eo.applicationHomeCard, { [eo.narrow]: s }),
                ctaButton: f,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(eo.tierCardStack, l),
        children: p
            ? g
            : (0, n.jsx)(z.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: eo.tierCardStack, children: g });
                  },
              }),
    });
}
function eA(e) {
    let { isReducedMotion: t, className: r } = e,
        i = (0, B.p)(),
        l = null != i,
        s = (0, d.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        o = null != s && (0, C.Nc)(s),
        m = l
            ? G.intl.format(J.default["7j70dP"], { percent: i.discount?.amount, premiumGroupProductName: (0, ea.DP)() })
            : G.intl.string(G.t["2pG5Ga"]),
        x = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: f.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: o,
        }),
        p = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(eo.tierCardStack, { [eo.premiumCardHover]: !t }),
            children: (0, n.jsx)(eg, {
                className: a()(eo.applicationHomeCard, eo.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(eo.tierCardStack, r),
        children: o
            ? p
            : (0, n.jsx)(z.A, {
                  subscriptionTier: X.pe.TIER_2,
                  initialPlanId: X.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: eo.tierCardStack, children: p });
                  },
              }),
    });
}
function eN(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, N.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, en.pw)(t),
        s = (0, d.bG)([j.Ay], () => j.Ay.useReducedMotion),
        c = (0, F.PA)();
    return (0, n.jsx)(N.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: a()(eo.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: eo.premiumCardsHeader,
                    children: G.intl.string(G.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: eo.premiumCards,
                    children: [
                        (0, n.jsx)(ej, {
                            subscriptionTier: X.pe.TIER_0,
                            isReducedMotion: s,
                            className: eo.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, n.jsx)(ej, {
                            subscriptionTier: X.pe.TIER_2,
                            isReducedMotion: s,
                            className: eo.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, n.jsx)(eA, { isReducedMotion: s, className: eo.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
