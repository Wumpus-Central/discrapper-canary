r.d(t, { jP: () => ev, Rf: () => ep, oK: () => ej, r6: () => eg, MR: () => ex });
var i,
    n = r(477900),
    l = r(582128),
    a = r(503698),
    s = r.n(a),
    c = r(297264),
    d = r(17928),
    o = r(331322),
    u = r(821609),
    m = r(462887),
    x = r(834730),
    p = r(315629),
    h = r(939249),
    j = r(403581),
    g = r(736653),
    f = r(775602),
    N = r(793574),
    v = r(688810),
    E = r(287809),
    A = r(166403),
    C = r(158045),
    R = r(580630),
    T = r(526292),
    I = r(877624),
    y = r(508770),
    P = r(406810),
    _ = r(951305),
    b = r(421108),
    M = r(240248),
    S = r(807098),
    L = r(412260),
    w = r(531536),
    O = r(375708),
    k = r(951321);
function D() {
    let { claimableRewards: e } = (0, _.Pv)(),
        t = (0, d.bG)([L.A], () => {
            let e = L.A.getMarketingComponentByType(I.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, S.T)(t?.avatarAsset),
        i = (0, d.bG)([L.A], () => L.A.getGiftPromotion()),
        l = (0, b.dA)(i?.endDate);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, n.jsx)(G, {
              rewardImageUrl: r,
              countdownText: l,
              header: (0, M.uJ)(t.header) ? O.intl.string(O.t.OEtqpm) : t.header,
              body: (0, M.uJ)(t.desktopBody)
                  ? O.intl.formatToPlainString(O.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function G(e) {
    let { rewardImageUrl: t, countdownText: r, header: i, body: l } = e;
    return (0, n.jsx)("div", {
        className: k.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(w.W, {
            image: null != t ? (0, n.jsx)("img", { className: k.L8, alt: "", src: t }) : void 0,
            badge:
                null != r
                    ? (0, n.jsx)(y.E, { type: { text: r.toUpperCase() }, variant: "brand", icon: P.ClockIcon })
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
    Y = r(774774),
    K = r(289873),
    W = r(626584),
    q = r(97352),
    $ = r(795269),
    X = r(202541),
    J = r(148155),
    Q = r(12260),
    ee = r(658859);
let et = new W.A("PremiumGroupPrice.tsx"),
    er = (0, n.jsx)(K.y, { type: K.y.Type.PULSING_ELLIPSIS, className: ee.xB }),
    ei = function (e) {
        let t,
            { isGift: r = !1, discountOffer: i, priceOptions: l, isApplicationHome: a = !1 } = e,
            u = (0, d.bG)([q.A], () => q.A.get(X.gD.PREMIUM_GROUP_MONTH)),
            p = (0, V.N1)(X.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, g.Ay)());
        if (null == u) return er;
        try {
            t = (0, C.sS)(u, l, !1, r, !1);
        } catch {
            return (et.warn(`No price available for plan ${u.id} in currency ${l?.currency ?? "unknown"}`), er);
        }
        let j = X.WT.MONTH;
        if (null != i && null != p) {
            let e = i.discount.intervalCount;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("hr", { className: s()(Q.vI, { [Q.oE]: a }) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, n.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: Q.Yc,
                                children: [
                                    (0, n.jsx)(c.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: O.intl.format(J.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, n.jsx)(x.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: O.intl.format(J.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)($.R, {
                                text: O.intl.formatToPlainString(J.default.GEwdVw, {
                                    percent: i.discount.amount,
                                    discountOfferAmount: i.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("hr", { className: s()(Q.yF, { [Q.oE]: a }) }),
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
                            children: ["/", (0, C.FJ)(j)],
                        }),
                    ],
                }),
                (0, n.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: O.intl.string(J.default["R+dzZw"]),
                }),
                (0, n.jsx)("hr", { className: Q.yF }),
            ],
        });
    };
var en = r(860839),
    el = r(824069),
    ea = r(222719),
    es = r(88001),
    ec = r(174788),
    ed = r(232266),
    eo = r(243002),
    eu = r(241988);
function em(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, n.jsx)(o.B, { direction: "vertical", gap: 0, className: ec.tierCardStack, children: t })
        : (0, n.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ec.tierCardStack,
              children: [
                  (0, n.jsx)(o.B, { direction: "vertical", gap: 0, className: ec.tierCardStackContent, children: t }),
                  (0, n.jsx)("div", { className: ec.footer, children: r }),
              ],
          });
}
function ex(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: o = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        p = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        h = (0, U.V)(),
        j = h?.subscriptionTrial?.skuId,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        N = (0, Y.Lj)(f, j),
        v = null != N,
        C = (0, m.q)((0, g.Ay)()),
        R = u ? O.intl.string(O.t.tUbSDK) : O.intl.string(O.t["t9uG/o"]),
        T = (0, n.jsxs)(em, {
            footer: t,
            children: [
                v && (0, n.jsx)($.R, { text: N, className: ec.pill }),
                (0, n.jsx)(c.D, {
                    variant: "nitro-md",
                    color: C ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: R,
                }),
                (0, n.jsx)(ea.A, {
                    isGift: l,
                    premiumTier: X.PremiumTypes.TIER_0,
                    offerType: X.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === X.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                (0, n.jsx)("hr", { className: ec.divider }),
                (0, n.jsx)(en.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        I = s()(ec.card, ec.tier0, i, { [ec.pillMargin]: !o && v });
    return (0, n.jsx)("div", { className: I, children: T });
}
var ep =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function eh(e) {
    let { discountOffer: t, priceOptions: r, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, V.N1)(X.gD.PREMIUM_YEAR_TIER_2),
        c = l.useMemo(() => {
            try {
                let e = (0, C.y8)(X.gD.PREMIUM_YEAR_TIER_2, !1, i, r);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, r]);
    return null == s || null == c
        ? null
        : (0, n.jsxs)("div", {
              className: ec.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: ec.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: O.intl.format(O.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: O.intl.format(O.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, n.jsx)($.R, { text: O.intl.formatToPlainString(O.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function ej(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = en.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: o = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        C = (0, d.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        R = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        I = (0, U.V)(),
        y = I?.subscriptionTrial?.skuId,
        P = C?.hasActiveTrial ? R?.premiumType : null,
        _ = C?.planIdFromItems === X.gD.PREMIUM_YEAR_TIER_2,
        b = (0, B.O)(),
        M = (0, B.p)(),
        S = (0, T.k5)(),
        L = null != y || null != P ? X.Vk.PREMIUM_TRIAL : null != b || S ? X.Vk.PREMIUM_DISCOUNT : null,
        w = (0, m.q)((0, g.Ay)()),
        k = null != M && !a,
        G = !a && null != b && (0, V.hm)(b),
        F = !a && S && _ && L === X.Vk.PREMIUM_DISCOUNT,
        z = (0, Y.rm)(S, P, a ? null : b, I, y),
        Z = (0, H.Sq)() && !a && null == L,
        K = null != t || x ? (0, n.jsxs)(n.Fragment, { children: [t, x && (0, n.jsx)(D, {})] }) : null,
        W = o && !a,
        q = (0, n.jsxs)(em, {
            footer: K,
            children: [
                f &&
                    !k &&
                    !F &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !G &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: eo, alt: "", className: s()(ec.bigCloud, ec[h]) }),
                                            (0, n.jsx)("img", {
                                                src: ed,
                                                alt: "",
                                                className: s()(ec.smallCloud, ec[h]),
                                            }),
                                        ],
                                    }),
                                (!G || null != t) &&
                                    (0, n.jsx)("img", {
                                        src: eu,
                                        alt: "",
                                        className: s()(ec.wumpus, ec[h], { [ec.withAnnualDiscountBanner]: G }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !G &&
                    (0, n.jsx)($.R, {
                        text:
                            z ??
                            (Z
                                ? O.intl.formatToPlainString(O.t["4SEnCZ"], { months: 1 })
                                : O.intl.string(O.t["6bEcYr"])),
                        className: ec.pill,
                    }),
                (0, n.jsx)(c.D, {
                    variant: "nitro-md",
                    color: w ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: O.intl.string(O.t.lG6a5x),
                }),
                (0, n.jsx)(ea.A, {
                    isGift: a,
                    premiumTier: X.PremiumTypes.TIER_2,
                    offerType: L,
                    offerTierMatchesCard: y === X.pe.TIER_2 || (0, V.U9)(b, X.pe.TIER_2),
                    showYearlyPrice: r && !G,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                G
                    ? (0, n.jsx)(eh, { discountOffer: b, priceOptions: u, isGift: a, narrowLayout: v })
                    : (0, n.jsx)("hr", { className: ec.divider }),
                (0, n.jsx)(en.ZP, {
                    featureSet: i,
                    isModal: o,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        G || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ec.firstFeatureItemContainer,
                }),
                W && (0, n.jsx)(el.K, {}),
            ],
        }),
        J = s()(ec.card, l, { [ec.withGiftBanner]: x });
    return k
        ? (0, n.jsx)("div", { className: J, children: q })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: J, children: q });
}
function eg(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, g.Ay)()),
        d = (0, B.p)(),
        o = (0, n.jsxs)(em, {
            footer: r,
            children: [
                (0, n.jsxs)("div", {
                    className: ec.cardHeader,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: ec.cardTitle,
                            children: O.intl.string(J.default.eSKiXk),
                        }),
                        (0, n.jsx)($.R, {
                            text: O.intl.string(O.t.oW0eUd),
                            className: ec.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, n.jsx)(ei, { discountOffer: d, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(en.Lg, { isApplicationHome: i }),
            ],
        });
    return null != d
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: s()(ec.card, t), children: o })
        : (0, n.jsx)("div", { className: s()(ec.card, ec.borderGradient, t), children: o });
}
function ef(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: l, narrowLayout: a } = e,
        c = t === X.pe.TIER_2,
        d = (0, B.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, Z.$)({
            subscriptionTier: t,
            variantOverride: c && null == d ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        j = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        g = (0, n.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ec.tierCardStack, { [ec.premiumCardHover]: !r }),
            children: (0, n.jsx)(c ? ej : ex, {
                className: s()(ec.applicationHomeCard, { [ec.narrow]: a }),
                ctaButton: j,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(o.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ec.tierCardStack, l),
        children: p
            ? g
            : (0, n.jsx)(z.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: ec.tierCardStack, children: g });
                  },
              }),
    });
}
function eN(e) {
    let { isReducedMotion: t, className: r } = e,
        i = (0, B.p)(),
        l = null != i,
        a = (0, d.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        c = null != a && (0, C.Nc)(a),
        m = l
            ? O.intl.format(J.default["7j70dP"], { percent: i.discount?.amount, premiumGroupProductName: (0, es.DP)() })
            : O.intl.string(O.t["2pG5Ga"]),
        x = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: j.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: c,
        }),
        p = (0, n.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ec.tierCardStack, { [ec.premiumCardHover]: !t }),
            children: (0, n.jsx)(eg, {
                className: s()(ec.applicationHomeCard, ec.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(o.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ec.tierCardStack, r),
        children: c
            ? p
            : (0, n.jsx)(z.A, {
                  subscriptionTier: X.pe.TIER_2,
                  initialPlanId: X.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: ec.tierCardStack, children: p });
                  },
              }),
    });
}
function ev(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, v.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, en.pw)(t),
        a = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        o = (0, F.PA)();
    return (0, n.jsx)(v.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(ec.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(c.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: ec.premiumCardsHeader,
                    children: O.intl.string(O.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: ec.premiumCards,
                    children: [
                        (0, n.jsx)(ef, {
                            subscriptionTier: X.pe.TIER_0,
                            isReducedMotion: a,
                            className: ec.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, n.jsx)(ef, {
                            subscriptionTier: X.pe.TIER_2,
                            isReducedMotion: a,
                            className: ec.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, n.jsx)(eN, { isReducedMotion: a, className: ec.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
