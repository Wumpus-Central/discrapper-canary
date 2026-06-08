t.d(r, { jP: () => eo, Rf: () => ea, oK: () => en, r6: () => el, MR: () => ei });
var i,
    a = t(627968),
    s = t(64700),
    n = t(503698),
    l = t.n(n),
    c = t(534514),
    d = t(17928),
    o = t(331322),
    u = t(821609),
    m = t(462887),
    p = t(315629),
    x = t(834730),
    h = t(939249),
    j = t(403581),
    g = t(736653),
    f = t(775602),
    N = t(793574),
    C = t(688810),
    T = t(287809),
    R = t(166403),
    v = t(428262),
    E = t(580630),
    y = t(526292),
    P = t(877624),
    _ = t(937008),
    A = t(807098),
    I = t(374200),
    M = t(380619),
    b = t(375708),
    w = t(756974);
function S() {
    let { claimableRewards: e } = (0, _.Pv)(),
        r = (0, d.bG)([I.A], () => {
            let e = I.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, A.T)(r?.bannerAsset),
        i = (0, A.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let s = (0, M.gc)(t),
        n = r?.gradient,
        l =
            null != n && null != n.colors && n.colors.length >= 2
                ? (0, M.K5)({ gradient: n.colors, angle: n.angle ?? void 0 })
                : void 0,
        c = (0, M.x)(s, l);
    return (0, a.jsxs)("div", {
        className: w.kL,
        style: c,
        children: [
            (0, a.jsxs)("div", {
                className: w.V_,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: b.intl.string(b.t.OEtqpm),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: b.intl.formatToPlainString(b.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i && (0, a.jsx)("img", { alt: "gift promotion reward", src: i, className: w.my }),
        ],
    });
}
var G = t(422936),
    O = t(234419),
    k = t(862990),
    D = t(783420),
    U = t(204413),
    B = t(410516),
    H = t(774774),
    L = t(289873),
    F = t(97352),
    V = t(795269),
    Y = t(788868),
    W = t(466919),
    z = t(707259),
    K = t(378874);
let q = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i } = e,
        s = (0, d.bG)([F.A], () => F.A.get(Y.gD.PREMIUM_GROUP_MONTH)),
        n = (0, B.N1)(Y.gD.PREMIUM_GROUP_MONTH),
        l = (0, m.q)((0, g.Ay)());
    if (null == s) return (0, a.jsx)(L.y, { type: L.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let u = (0, v.sS)(s, i, !1, r),
        p = Y.WT.MONTH;
    if (null != t && null != n) {
        let e = t.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: z.vI }),
                (0, a.jsxs)(o.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, a.jsxs)(o.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: z.Yc,
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: b.intl.format(W.default.rCpGVA, {
                                        discountedPrice: n,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: b.intl.format(W.default["4b2ByP"], { regularPrice: u }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(V.R, {
                            text: b.intl.formatToPlainString(W.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: z.yF }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "heading-xxl/extrabold",
                        color: l ? "text-strong" : "always-white",
                        tag: "span",
                        children: u,
                    }),
                    (0, a.jsxs)(x.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, v.FJ)(p)],
                    }),
                ],
            }),
            (0, a.jsx)(c.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: b.intl.string(W.default["R+dzZw"]),
            }),
            (0, a.jsx)("hr", { className: z.yF }),
        ],
    });
};
var Z = t(860839),
    $ = t(222719),
    X = t(88001),
    J = t(115599),
    Q = t(232266),
    ee = t(243002),
    er = t(241988);
function et(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: J.tierCardStack, children: r })
        : (0, a.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: J.tierCardStack,
              children: [
                  (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: J.tierCardStackContent, children: r }),
                  t,
              ],
          });
}
function ei(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: s = !1,
            priceOptions: n,
            isApplicationHome: o = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        j = (0, O.V)(),
        f = j?.subscription_trial?.sku_id,
        N = (0, G.O)(),
        C = (0, G.p)(),
        v = x?.hasActiveTrial ? h?.premiumType : null,
        E = (0, H.Lj)(v, f),
        y = null != E,
        P = (0, m.q)((0, g.Ay)()),
        _ = u ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t["t9uG/o"]),
        A = (0, a.jsxs)(et, {
            footer: r,
            children: [
                y && (0, a.jsx)(V.R, { text: E, className: J.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: _,
                }),
                (0, a.jsx)($.A, {
                    isGift: s,
                    premiumTier: Y.PremiumTypes.TIER_0,
                    offerType: Y.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === Y.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: n,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                (0, a.jsx)("hr", { className: J.divider }),
                (0, a.jsx)(Z.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        I = l()(J.card, J.tier0, i, { [J.pillMargin]: !o && y });
    return ((0, B.hm)(N) || null != C) && !s
        ? (0, a.jsx)("div", { className: I, children: A })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: I, children: A });
}
var ea =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function es(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: n = !1 } = e,
        l = (0, B.N1)(Y.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, v.y8)(Y.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, E.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == l || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: J.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: J.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: b.intl.format(b.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: b.intl.format(b.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(V.R, { text: b.intl.formatToPlainString(b.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function en(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = Z.Nz.DEFAULT,
            className: s,
            isGift: n = !1,
            isModal: o = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: C = !1,
        } = e,
        v = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        E = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        P = (0, O.V)(),
        _ = P?.subscription_trial?.sku_id,
        A = v?.hasActiveTrial ? E?.premiumType : null,
        I = v?.planIdFromItems === Y.gD.PREMIUM_YEAR_TIER_2,
        M = (0, G.O)(),
        w = (0, G.p)(),
        k = (0, y.k5)(),
        D = null != _ || null != A ? Y.Vk.PREMIUM_TRIAL : null != M || k ? Y.Vk.PREMIUM_DISCOUNT : null,
        U = (0, m.q)((0, g.Ay)()),
        L = null != w && !n,
        F = !n && null != M && (0, B.hm)(M),
        W = !n && k && I && D === Y.Vk.PREMIUM_DISCOUNT,
        z = (0, H.rm)(k, A, n ? null : M, P, _),
        K = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(S, {})] }) : null,
        q = (0, a.jsxs)(et, {
            footer: K,
            children: [
                f &&
                    !L &&
                    !W &&
                    (0, a.jsx)(
                        () =>
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !F &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)("img", {
                                                    src: ee,
                                                    alt: "",
                                                    className: l()(J.bigCloud, J[h]),
                                                }),
                                                (0, a.jsx)("img", {
                                                    src: Q,
                                                    alt: "",
                                                    className: l()(J.smallCloud, J[h]),
                                                }),
                                            ],
                                        }),
                                    (!F || null != r) &&
                                        (0, a.jsx)("img", {
                                            src: er,
                                            alt: "",
                                            className: l()(J.wumpus, J[h], { [J.withAnnualDiscountBanner]: F }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                N && !F && (0, a.jsx)(V.R, { text: z ?? b.intl.string(b.t["6bEcYr"]), className: J.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: U ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: b.intl.string(b.t.lG6a5x),
                }),
                (0, a.jsx)($.A, {
                    isGift: n,
                    premiumTier: Y.PremiumTypes.TIER_2,
                    offerType: D,
                    offerTierMatchesCard: _ === Y.pe.TIER_2 || (0, B.U9)(M, Y.pe.TIER_2),
                    showYearlyPrice: t && !F,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                F
                    ? (0, a.jsx)(es, { discountOffer: M, priceOptions: u, isGift: n, narrowLayout: C })
                    : (0, a.jsx)("hr", { className: J.divider }),
                (0, a.jsx)(Z.ZP, {
                    featureSet: i,
                    isModal: o,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : J.firstFeatureItemContainer,
                }),
            ],
        }),
        X = l()(J.card, s, { [J.withGiftBanner]: x });
    return L
        ? (0, a.jsx)("div", { className: X, children: q })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: X, children: q });
}
function el(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: s } = e,
        n = (0, m.q)((0, g.Ay)()),
        d = (0, G.p)(),
        o = (0, a.jsxs)(et, {
            footer: t,
            children: [
                (0, a.jsxs)("div", {
                    className: J.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "always-white",
                            className: J.cardTitle,
                            children: b.intl.string(W.default.eSKiXk),
                        }),
                        (0, a.jsx)(V.R, {
                            text: b.intl.string(b.t.oW0eUd),
                            className: J.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, a.jsx)(q, { discountOffer: d, priceOptions: s }),
                (0, a.jsx)(Z.Lg, { isApplicationHome: i }),
            ],
        });
    return null != d
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: l()(J.card, r), children: o })
        : (0, a.jsx)("div", { className: l()(J.card, J.borderGradient, r), children: o });
}
let ec = (e) => {
        let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: s, narrowLayout: n } = e,
            c = r === Y.pe.TIER_2,
            d = (0, G.p)(),
            { subscribeButtonProps: m, subscriptionTier: p } = (0, U.$)({
                subscriptionTier: r,
                variantOverride: c && null == d ? "expressive" : "secondary",
            }),
            { disabled: x } = m,
            j = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
            g = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: l()(J.tierCardStack, { [J.premiumCardHover]: !t }),
                children: (0, a.jsx)(c ? en : ei, {
                    className: l()(J.applicationHomeCard, { [J.narrow]: n }),
                    ctaButton: j,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, a.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: l()(J.tierCardStack, s),
            children: x
                ? g
                : (0, a.jsx)(D.A, {
                      subscriptionTier: p,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, a.jsx)(h.D, { onClick: r, className: J.tierCardStack, children: g });
                      },
                  }),
        });
    },
    ed = (e) => {
        let { isReducedMotion: r, className: t } = e,
            i = (0, G.p)(),
            s =
                null != i
                    ? b.intl.format(W.default["7j70dP"], {
                          percent: i.discount?.amount,
                          premiumGroupProductName: (0, X.DP)(),
                      })
                    : b.intl.string(b.t["2pG5Ga"]),
            n = (0, a.jsx)(u.$, {
                size: "md",
                fullWidth: !0,
                icon: j.t,
                text: s,
                variant: null != i ? "expressive" : "secondary",
            }),
            c = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: l()(J.tierCardStack, { [J.premiumCardHover]: !r }),
                children: (0, a.jsx)(el, {
                    className: l()(J.applicationHomeCard, J.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, a.jsx)(D.A, {
            subscriptionTier: Y.pe.TIER_2,
            initialPlanId: Y.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: r } = e;
                return (0, a.jsx)(o.B, {
                    direction: "vertical",
                    gap: 0,
                    className: l()(J.tierCardStack, t),
                    children: (0, a.jsx)(h.D, { onClick: r, className: J.tierCardStack, children: c }),
                });
            },
        });
    };
function eo(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, Z.pw)(r),
        n = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        o = (0, k.PA)();
    return (0, a.jsx)(C.f5, {
        value: i,
        children: (0, a.jsxs)("div", {
            className: l()(J.premiumCardsContainer, t),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: J.premiumCardsHeader,
                    children: b.intl.string(b.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: J.premiumCards,
                    children: [
                        (0, a.jsx)(ec, {
                            subscriptionTier: Y.pe.TIER_0,
                            isReducedMotion: n,
                            className: J.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, a.jsx)(ec, {
                            subscriptionTier: Y.pe.TIER_2,
                            isReducedMotion: n,
                            className: J.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, a.jsx)(ed, { isReducedMotion: n, className: J.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
