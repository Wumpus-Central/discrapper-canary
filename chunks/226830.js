t.d(r, { jP: () => eA, Rf: () => eh, oK: () => ej, r6: () => ef, MR: () => ep });
var n,
    i = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(17928),
    c = t(331322),
    d = t(821609),
    u = t(462887),
    m = t(297264),
    x = t(834730),
    p = t(315629),
    h = t(939249),
    g = t(403581),
    j = t(736653),
    f = t(775602),
    T = t(793574),
    I = t(688810),
    A = t(287809),
    E = t(166403),
    N = t(158045),
    R = t(580630),
    v = t(526292),
    _ = t(877624),
    P = t(508770),
    M = t(406810),
    C = t(951305),
    y = t(421108),
    b = t(240248),
    O = t(807098),
    S = t(412260),
    U = t(860300),
    G = t(531536),
    D = t(375708),
    k = t(951321);
function L() {
    let { claimableRewards: e } = (0, C.Pv)(),
        { enabled: r } = U.J.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" }),
        t = (0, o.bG)([S.A], () => {
            let e = S.A.getMarketingComponentByType(_.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, O.T)(t?.avatarAsset),
        l = (0, o.bG)([S.A], () => S.A.getGiftPromotion()),
        a = (0, y.dA)(l?.endDate, r);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, i.jsx)(B, {
              rewardImageUrl: n,
              countdownText: a,
              header: (0, b.uJ)(t.header) ? D.intl.string(D.t.OEtqpm) : t.header,
              body: (0, b.uJ)(t.desktopBody)
                  ? D.intl.formatToPlainString(D.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function B(e) {
    let { rewardImageUrl: r, countdownText: t, header: n, body: l } = e;
    return (0, i.jsx)("div", {
        className: k.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(G.W, {
            image: null != r ? (0, i.jsx)("img", { className: k.L8, alt: "", src: r }) : void 0,
            badge:
                null != t
                    ? (0, i.jsx)(P.E, { type: { text: t.toUpperCase() }, variant: "brand", icon: M.ClockIcon })
                    : void 0,
            textGroupClassName: k.RI,
            title: (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: n }),
            body: (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var H = t(724651),
    w = t(732280),
    F = t(989790),
    V = t(35587),
    W = t(783420),
    Y = t(204413),
    z = t(511484),
    K = t(774774),
    q = t(289873),
    J = t(626584),
    Z = t(97352),
    $ = t(795269),
    Q = t(202541),
    X = t(148155),
    ee = t(12260),
    er = t(658859);
let et = new J.A("PremiumGroupPrice.tsx"),
    en = (0, i.jsx)(q.y, { type: q.y.Type.PULSING_ELLIPSIS, className: er.xB }),
    ei = function (e) {
        let r,
            { isGift: t = !1, discountOffer: n, priceOptions: l, isApplicationHome: a = !1 } = e,
            d = (0, o.bG)([Z.A], () => Z.A.get(Q.gD.PREMIUM_GROUP_MONTH)),
            p = (0, z.N1)(Q.gD.PREMIUM_GROUP_MONTH),
            h = (0, u.q)((0, j.Ay)());
        if (null == d) return en;
        try {
            r = (0, N.sS)(d, l, !1, t, !1);
        } catch {
            return (et.warn(`No price available for plan ${d.id} in currency ${l?.currency ?? "unknown"}`), en);
        }
        let g = Q.WT.MONTH;
        if (null != n && null != p) {
            let e = n.discount.intervalCount;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("hr", { className: s()(ee.vI, { [ee.oE]: a }) }),
                    (0, i.jsxs)(c.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, i.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: ee.Yc,
                                children: [
                                    (0, i.jsx)(m.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: D.intl.format(X.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, i.jsx)(x.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: D.intl.format(X.default["4b2ByP"], { regularPrice: r }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)($.R, {
                                text: D.intl.formatToPlainString(X.default.GEwdVw, {
                                    percent: n.discount.amount,
                                    discountOfferAmount: n.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("hr", { className: s()(ee.yF, { [ee.oE]: a }) }),
                ],
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(x.E, {
                            variant: "heading-xxl/extrabold",
                            color: h ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: r,
                        }),
                        (0, i.jsxs)(x.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, N.FJ)(g)],
                        }),
                    ],
                }),
                (0, i.jsx)(m.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: D.intl.string(X.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: ee.yF }),
            ],
        });
    };
var el = t(543213),
    ea = t(824069),
    es = t(222719),
    eo = t(88001),
    ec = t(174788),
    ed = t(232266),
    eu = t(243002),
    em = t(241988);
function ex(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: ec.tierCardStack, children: r })
        : (0, i.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ec.tierCardStack,
              children: [
                  (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: ec.tierCardStackContent, children: r }),
                  (0, i.jsx)("div", { className: ec.footer, children: t }),
              ],
          });
}
function ep(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: n,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        x = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        p = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, w.V)(),
        g = h?.subscriptionTrial?.skuId,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        T = (0, K.Lj)(f, g),
        I = null != T,
        N = (0, u.q)((0, j.Ay)()),
        R = d ? D.intl.string(D.t.tUbSDK) : D.intl.string(D.t["t9uG/o"]),
        v = (0, i.jsxs)(ex, {
            footer: r,
            children: [
                I && (0, i.jsx)($.R, { text: T, className: ec.pill }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: N ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: R,
                }),
                (0, i.jsx)(es.A, {
                    isGift: l,
                    premiumTier: Q.PremiumTypes.TIER_0,
                    offerType: Q.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === Q.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                (0, i.jsx)("hr", { className: ec.divider }),
                (0, i.jsx)(el.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        _ = s()(ec.card, ec.tier0, n, { [ec.pillMargin]: !c && I });
    return (0, i.jsx)("div", { className: _, children: v });
}
var eh =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function eg(e) {
    let { discountOffer: r, priceOptions: t, isGift: n, narrowLayout: a = !1 } = e,
        s = (0, z.N1)(Q.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, N.y8)(Q.gD.PREMIUM_YEAR_TIER_2, !1, n, t);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [n, t]);
    return null == s || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: ec.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: ec.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: D.intl.format(D.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: D.intl.format(D.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)($.R, { text: D.intl.formatToPlainString(D.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ej(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: n = el.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: T = !0,
            narrowLayout: I = !1,
        } = e,
        N = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        R = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        _ = (0, w.V)(),
        P = _?.subscriptionTrial?.skuId,
        M = N?.hasActiveTrial ? R?.premiumType : null,
        C = N?.planIdFromItems === Q.gD.PREMIUM_YEAR_TIER_2,
        y = (0, H.O)(),
        b = (0, H.p)(),
        O = (0, v.k5)(),
        S = null != P || null != M ? Q.Vk.PREMIUM_TRIAL : null != y || O ? Q.Vk.PREMIUM_DISCOUNT : null,
        U = (0, u.q)((0, j.Ay)()),
        G = null != b && !a,
        k = !a && null != y && (0, z.hm)(y),
        B = !a && O && C && S === Q.Vk.PREMIUM_DISCOUNT,
        F = (0, K.rm)(O, M, a ? null : y, _, P),
        W = (0, V.Sq)() && !a && null == S,
        Y = null != r || x ? (0, i.jsxs)(i.Fragment, { children: [r, x && (0, i.jsx)(L, {})] }) : null,
        q = c && !a,
        J = (0, i.jsxs)(ex, {
            footer: Y,
            children: [
                f &&
                    !G &&
                    !B &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !k &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: eu, alt: "", className: s()(ec.bigCloud, ec[h]) }),
                                            (0, i.jsx)("img", {
                                                src: ed,
                                                alt: "",
                                                className: s()(ec.smallCloud, ec[h]),
                                            }),
                                        ],
                                    }),
                                (!k || null != r) &&
                                    (0, i.jsx)("img", {
                                        src: em,
                                        alt: "",
                                        className: s()(ec.wumpus, ec[h], { [ec.withAnnualDiscountBanner]: k }),
                                    }),
                            ],
                        });
                    }, {}),
                T &&
                    !k &&
                    (0, i.jsx)($.R, {
                        text:
                            F ??
                            (W
                                ? D.intl.formatToPlainString(D.t["4SEnCZ"], { months: 1 })
                                : D.intl.string(D.t["6bEcYr"])),
                        className: ec.pill,
                    }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: U ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: D.intl.string(D.t.lG6a5x),
                }),
                (0, i.jsx)(es.A, {
                    isGift: a,
                    premiumTier: Q.PremiumTypes.TIER_2,
                    offerType: S,
                    offerTierMatchesCard: P === Q.pe.TIER_2 || (0, z.U9)(y, Q.pe.TIER_2),
                    showYearlyPrice: t && !k,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                k
                    ? (0, i.jsx)(eg, { discountOffer: y, priceOptions: d, isGift: a, narrowLayout: I })
                    : (0, i.jsx)("hr", { className: ec.divider }),
                (0, i.jsx)(el.ZP, {
                    featureSet: n,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        k || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ec.firstFeatureItemContainer,
                }),
                q && (0, i.jsx)(ea.K, {}),
            ],
        }),
        Z = s()(ec.card, l, { [ec.withGiftBanner]: x });
    return G
        ? (0, i.jsx)("div", { className: Z, children: J })
        : (0, i.jsx)(p.h, { color: "nitro-pink", className: Z, children: J });
}
function ef(e) {
    let { className: r, ctaButton: t, isApplicationHome: n, priceOptions: l } = e,
        a = (0, u.q)((0, j.Ay)()),
        o = (0, H.p)(),
        c = (0, i.jsxs)(ex, {
            footer: t,
            children: [
                (0, i.jsxs)("div", {
                    className: ec.cardHeader,
                    children: [
                        (0, i.jsx)(m.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: ec.cardTitle,
                            children: D.intl.string(X.default.eSKiXk),
                        }),
                        (0, i.jsx)($.R, {
                            text: D.intl.string(D.t.oW0eUd),
                            className: ec.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, i.jsx)(ei, { discountOffer: o, priceOptions: l, isApplicationHome: n }),
                (0, i.jsx)(el.Lg, { isApplicationHome: n }),
            ],
        });
    return null != o
        ? (0, i.jsx)(p.h, { color: "nitro-pink", className: s()(ec.card, r), children: c })
        : (0, i.jsx)("div", { className: s()(ec.card, ec.borderGradient, r), children: c });
}
function eT(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: n, className: l, narrowLayout: a } = e,
        o = r === Q.pe.TIER_2,
        u = (0, H.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, Y.$)({
            subscriptionTier: r,
            variantOverride: o && null == u ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ec.tierCardStack, { [ec.premiumCardHover]: !t }),
            children: (0, i.jsx)(o ? ej : ep, {
                className: s()(ec.applicationHomeCard, { [ec.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...n,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ec.tierCardStack, l),
        children: p
            ? j
            : (0, i.jsx)(W.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, i.jsx)(h.D, { onClick: r, className: ec.tierCardStack, children: j });
                  },
              }),
    });
}
function eI(e) {
    let { isReducedMotion: r, className: t } = e,
        n = (0, H.p)(),
        l = null != n,
        a = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        u = null != a && (0, N.Nc)(a),
        m = l
            ? D.intl.format(X.default["7j70dP"], { percent: n.discount?.amount, premiumGroupProductName: (0, eo.DP)() })
            : D.intl.string(D.t["2pG5Ga"]),
        x = (0, i.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: m,
            variant: null != n ? "expressive" : "secondary",
            disabled: u,
        }),
        p = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ec.tierCardStack, { [ec.premiumCardHover]: !r }),
            children: (0, i.jsx)(ef, {
                className: s()(ec.applicationHomeCard, ec.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ec.tierCardStack, t),
        children: u
            ? p
            : (0, i.jsx)(W.A, {
                  subscriptionTier: Q.pe.TIER_2,
                  initialPlanId: Q.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, i.jsx)(h.D, { onClick: r, className: ec.tierCardStack, children: p });
                  },
              }),
    });
}
function eA(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: n } = (0, I.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, el.pw)(r),
        a = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
        c = (0, F.PA)();
    return (0, i.jsx)(I.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: s()(ec.premiumCardsContainer, t),
            children: [
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: ec.premiumCardsHeader,
                    children: D.intl.string(D.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: l,
                    className: ec.premiumCards,
                    children: [
                        (0, i.jsx)(eT, {
                            subscriptionTier: Q.pe.TIER_0,
                            isReducedMotion: a,
                            className: ec.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, i.jsx)(eT, {
                            subscriptionTier: Q.pe.TIER_2,
                            isReducedMotion: a,
                            className: ec.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, i.jsx)(eI, { isReducedMotion: a, className: ec.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
