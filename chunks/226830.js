i.d(r, { jP: () => eo, Rf: () => et, oK: () => ea, r6: () => en, MR: () => ei });
var t,
    s = i(627968),
    a = i(64700),
    n = i(503698),
    l = i.n(n),
    d = i(534514),
    o = i(17928),
    c = i(821609),
    u = i(462887),
    m = i(315629),
    p = i(834730),
    x = i(939249),
    h = i(403581),
    j = i(736653),
    g = i(775602),
    f = i(793574),
    N = i(688810),
    T = i(287809),
    R = i(166403),
    v = i(428262),
    C = i(580630),
    E = i(526292),
    y = i(877624),
    P = i(937008),
    _ = i(807098),
    A = i(374200),
    I = i(380619),
    M = i(375708),
    b = i(756974);
function w() {
    let { claimableRewards: e } = (0, P.Pv)(),
        r = (0, o.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, _.T)(r?.bannerAsset),
        t = (0, _.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, I.gc)(i),
        n = r?.gradient,
        l =
            null != n && null != n.colors && n.colors.length >= 2
                ? (0, I.K5)({ gradient: n.colors, angle: n.angle ?? void 0 })
                : void 0,
        d = (0, I.x)(a, l);
    return (0, s.jsxs)("div", {
        className: b.kL,
        style: d,
        children: [
            (0, s.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, s.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.OEtqpm),
                    }),
                    (0, s.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: M.intl.formatToPlainString(M.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != t && (0, s.jsx)("img", { alt: "gift promotion reward", src: t, className: b.my }),
        ],
    });
}
var G = i(422936),
    O = i(234419),
    D = i(862990),
    U = i(783420),
    S = i(204413),
    k = i(410516),
    B = i(774774),
    H = i(289873),
    L = i(331322),
    F = i(97352),
    V = i(795269),
    Y = i(788868),
    W = i(466919),
    z = i(707259),
    K = i(378874);
let q = function (e) {
    let { isGift: r = !1, discountOffer: i, priceOptions: t } = e,
        a = (0, o.bG)([F.A], () => F.A.get(Y.gD.PREMIUM_GROUP_MONTH)),
        n = (0, k.N1)(Y.gD.PREMIUM_GROUP_MONTH),
        l = (0, u.q)((0, j.Ay)());
    if (null == a) return (0, s.jsx)(H.y, { type: H.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let c = (0, v.sS)(a, t, !1, r),
        m = Y.WT.MONTH;
    if (null != i && null != n) {
        let e = i.discount.userUsageLimit;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(L.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    className: z.Zu,
                    children: [
                        (0, s.jsxs)(L.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: z.Yc,
                            children: [
                                (0, s.jsx)(d.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: M.intl.format(W.default.rCpGVA, {
                                        discountedPrice: n,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, s.jsx)(p.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: M.intl.format(W.default["4b2ByP"], { regularPrice: c }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(V.R, {
                            text: M.intl.formatToPlainString(W.default.GEwdVw, {
                                percent: i.discount.amount,
                                discountOfferAmount: i.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("hr", { className: z.Eb }),
            ],
        });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(p.E, {
                        variant: "heading-xxl/extrabold",
                        color: l ? "text-strong" : "always-white",
                        tag: "span",
                        children: c,
                    }),
                    (0, s.jsxs)(p.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, v.FJ)(m)],
                    }),
                ],
            }),
            (0, s.jsx)(d.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: M.intl.string(W.default["R+dzZw"]),
            }),
            (0, s.jsx)("hr", { className: z.yF }),
        ],
    });
};
var Z = i(860839),
    $ = i(222719),
    X = i(88001),
    J = i(115599),
    Q = i(232266),
    ee = i(243002),
    er = i(241988);
function ei(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
            isGift: a = !1,
            priceOptions: n,
            isApplicationHome: c = !1,
            useShortTitle: p = !1,
        } = e,
        x = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, O.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, G.O)(),
        v = (0, G.p)(),
        C = x?.hasActiveTrial ? h?.premiumType : null,
        E = (0, B.Lj)(C, f),
        y = null != E,
        P = (0, u.q)((0, j.Ay)()),
        _ = p ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]),
        A = (0, s.jsxs)(s.Fragment, {
            children: [
                y && (0, s.jsx)(V.R, { text: E, className: J.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: _,
                }),
                (0, s.jsx)($.A, {
                    isGift: a,
                    premiumTier: Y.PremiumTypes.TIER_0,
                    offerType: Y.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === Y.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: n,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                (0, s.jsx)("hr", { className: J.divider }),
                (0, s.jsx)(Z.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
                r,
            ],
        }),
        I = l()(J.card, J.tier0, t, { [J.pillMargin]: !c && y });
    return ((0, k.hm)(N) || null != v) && !a
        ? (0, s.jsx)("div", { className: I, children: A })
        : (0, s.jsx)(m.h, { color: "nitro-green", className: I, children: A });
}
var et =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function es(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, k.N1)(Y.gD.PREMIUM_YEAR_TIER_2),
        d = a.useMemo(() => {
            try {
                let e = (0, v.y8)(Y.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == d
        ? null
        : (0, s.jsxs)("div", {
              className: J.annualDiscountBanner,
              children: [
                  (0, s.jsxs)("div", {
                      className: J.annualDiscountBannerText,
                      children: [
                          (0, s.jsx)(p.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: M.intl.format(M.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, s.jsx)(p.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: M.intl.format(M.t.aUTlph, { regularPrice: d }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(V.R, { text: M.intl.formatToPlainString(M.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ea(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = Z.Nz.DEFAULT,
            className: a,
            isGift: n = !1,
            isModal: c = !1,
            priceOptions: p,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        C = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        y = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        P = (0, O.V)(),
        _ = P?.subscription_trial?.sku_id,
        A = C?.hasActiveTrial ? y?.premiumType : null,
        I = C?.planIdFromItems === Y.gD.PREMIUM_YEAR_TIER_2,
        b = (0, G.O)(),
        D = (0, G.p)(),
        U = (0, E.k5)(),
        S = null != _ || null != A ? Y.Vk.PREMIUM_TRIAL : null != b || U ? Y.Vk.PREMIUM_DISCOUNT : null,
        H = (0, u.q)((0, j.Ay)()),
        L = null != D && !n,
        F = !n && (0, k.hm)(b),
        W = !n && U && I && S === Y.Vk.PREMIUM_DISCOUNT,
        z = (0, B.rm)(U, A, n ? null : b, P, _),
        K = (0, s.jsxs)(s.Fragment, {
            children: [
                f &&
                    !L &&
                    !W &&
                    (0, s.jsx)(
                        () =>
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    !F &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)("img", {
                                                    src: ee,
                                                    alt: "",
                                                    className: l()(J.bigCloud, J[h]),
                                                }),
                                                (0, s.jsx)("img", {
                                                    src: Q,
                                                    alt: "",
                                                    className: l()(J.smallCloud, J[h]),
                                                }),
                                            ],
                                        }),
                                    (!F || null != r) &&
                                        (0, s.jsx)("img", { src: er, alt: "", className: l()(J.wumpus, J[h]) }),
                                ],
                            }),
                        {},
                    ),
                N && !F && (0, s.jsx)(V.R, { text: z ?? M.intl.string(M.t["6bEcYr"]), className: J.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: H ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: M.intl.string(M.t.lG6a5x),
                }),
                (0, s.jsx)($.A, {
                    isGift: n,
                    premiumTier: Y.PremiumTypes.TIER_2,
                    offerType: S,
                    offerTierMatchesCard: _ === Y.pe.TIER_2 || (0, k.U9)(b, Y.pe.TIER_2),
                    showYearlyPrice: i && !F,
                    priceOptions: p,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                F
                    ? (0, s.jsx)(es, { discountOffer: b, priceOptions: p, isGift: n, narrowLayout: v })
                    : (0, s.jsx)("hr", { className: J.divider }),
                (0, s.jsx)(Z.ZP, {
                    featureSet: t,
                    isModal: c,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : J.firstFeatureItemContainer,
                }),
                r,
                x && (0, s.jsx)(w, {}),
            ],
        }),
        q = l()(J.card, a, { [J.withGiftBanner]: x });
    return L
        ? (0, s.jsx)("div", { className: q, children: K })
        : (0, s.jsx)(m.h, { color: "nitro-pink", className: q, children: K });
}
function en(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: a } = e,
        n = (0, u.q)((0, j.Ay)()),
        o = (0, G.p)(),
        c = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: J.cardHeader,
                    children: [
                        (0, s.jsx)(d.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "always-white",
                            className: J.cardTitle,
                            children: M.intl.string(W.default.eSKiXk),
                        }),
                        (0, s.jsx)(V.R, {
                            text: M.intl.string(M.t.oW0eUd),
                            className: J.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, s.jsx)(q, { discountOffer: o, priceOptions: a }),
                (0, s.jsx)(Z.Lg, { isApplicationHome: t }),
                i,
            ],
        });
    return null != o
        ? (0, s.jsx)(m.h, { color: "nitro-pink", className: l()(J.card, r), children: c })
        : (0, s.jsx)("div", { className: l()(J.card, J.borderGradient, r), children: c });
}
let el = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: a, narrowLayout: n } = e,
            d = r === Y.pe.TIER_2,
            o = (0, G.p)(),
            { subscribeButtonProps: u, subscriptionTier: m } = (0, S.$)({
                subscriptionTier: r,
                variantOverride: d && null == o ? "expressive" : "secondary",
            }),
            { disabled: p } = u,
            h = (0, s.jsx)("div", {
                className: J.CTAButton,
                children: (0, s.jsx)(c.$, { size: "md", fullWidth: !0, ...u, disabled: p }),
            }),
            j = (0, s.jsx)("div", {
                className: l()({ [J.premiumCardHover]: !i }),
                children: (0, s.jsx)(d ? ea : ei, {
                    className: l()(J.applicationHomeCard, { [J.narrow]: n }),
                    ctaButton: h,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
                }),
            });
        return (0, s.jsx)("div", {
            className: a,
            children: p
                ? j
                : (0, s.jsx)(U.A, {
                      subscriptionTier: m,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, s.jsx)(x.D, { onClick: r, style: { cursor: "pointer" }, children: j });
                      },
                  }),
        });
    },
    ed = (e) => {
        let { isReducedMotion: r, className: i } = e,
            t = (0, G.p)(),
            a =
                null != t
                    ? M.intl.format(W.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, X.DP)(),
                      })
                    : M.intl.string(M.t["2pG5Ga"]),
            n = (0, s.jsx)("div", {
                className: J.CTAButton,
                children: (0, s.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: h.t,
                    text: a,
                    variant: null != t ? "expressive" : "secondary",
                }),
            }),
            d = (0, s.jsx)("div", {
                className: l()({ [J.premiumCardHover]: !r }),
                children: (0, s.jsx)(en, {
                    className: l()(J.applicationHomeCard, J.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, s.jsx)(U.A, {
            subscriptionTier: Y.pe.TIER_2,
            initialPlanId: Y.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: r } = e;
                return (0, s.jsx)("div", {
                    className: i,
                    children: (0, s.jsx)(x.D, { onClick: r, style: { cursor: "pointer" }, children: d }),
                });
            },
        });
    };
function eo(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(f.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, Z.pw)(r),
        n = (0, o.bG)([g.A], () => g.A.useReducedMotion),
        c = (0, D.PA)();
    return (0, s.jsx)(N.f5, {
        value: t,
        children: (0, s.jsxs)("div", {
            className: l()(J.premiumCardsContainer, i),
            children: [
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: J.premiumCardsHeader,
                    children: M.intl.string(M.t.vLz3Zs),
                }),
                (0, s.jsxs)("div", {
                    ref: a,
                    className: J.premiumCards,
                    children: [
                        (0, s.jsx)(el, {
                            subscriptionTier: Y.pe.TIER_0,
                            isReducedMotion: n,
                            className: J.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, s.jsx)(el, {
                            subscriptionTier: Y.pe.TIER_2,
                            isReducedMotion: n,
                            className: J.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, s.jsx)(ed, { isReducedMotion: n, className: J.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
