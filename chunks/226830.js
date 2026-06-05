i.d(r, { jP: () => eo, Rf: () => et, oK: () => en, r6: () => ea, MR: () => ei });
var t,
    s = i(627968),
    n = i(64700),
    a = i(503698),
    l = i.n(a),
    d = i(534514),
    o = i(17928),
    c = i(821609),
    u = i(462887),
    m = i(315629),
    x = i(834730),
    p = i(939249),
    h = i(403581),
    j = i(736653),
    g = i(775602),
    f = i(793574),
    N = i(688810),
    T = i(287809),
    R = i(166403),
    v = i(428262),
    C = i(580630),
    y = i(526292),
    E = i(877624),
    P = i(937008),
    _ = i(807098),
    A = i(374200),
    I = i(380619),
    M = i(375708),
    b = i(756974);
function w() {
    let { claimableRewards: e } = (0, P.Pv)(),
        r = (0, o.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(E.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, _.T)(r?.bannerAsset),
        t = (0, _.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let n = (0, I.gc)(i),
        a = r?.gradient,
        l =
            null != a && null != a.colors && a.colors.length >= 2
                ? (0, I.K5)({ gradient: a.colors, angle: a.angle ?? void 0 })
                : void 0,
        d = (0, I.x)(n, l);
    return (0, s.jsxs)("div", {
        className: b.kL,
        style: d,
        children: [
            (0, s.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, s.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.OEtqpm),
                    }),
                    (0, s.jsx)(x.E, {
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
        n = (0, o.bG)([F.A], () => F.A.get(Y.gD.PREMIUM_GROUP_MONTH)),
        a = (0, k.N1)(Y.gD.PREMIUM_GROUP_MONTH),
        l = (0, u.q)((0, j.Ay)());
    if (null == n) return (0, s.jsx)(H.y, { type: H.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let c = (0, v.sS)(n, t, !1, r),
        m = Y.WT.MONTH;
    if (null != i && null != a) {
        let e = i.discount.userUsageLimit;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("hr", { className: z.vI }),
                (0, s.jsxs)(L.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
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
                                        discountedPrice: a,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, s.jsx)(x.E, {
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
                (0, s.jsx)("hr", { className: z.yF }),
            ],
        });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(x.E, {
                        variant: "heading-xxl/extrabold",
                        color: l ? "text-strong" : "always-white",
                        tag: "span",
                        children: c,
                    }),
                    (0, s.jsxs)(x.E, {
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
            isGift: n = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: x = !1,
        } = e,
        p = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, O.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, G.O)(),
        v = (0, G.p)(),
        C = p?.hasActiveTrial ? h?.premiumType : null,
        y = (0, B.Lj)(C, f),
        E = null != y,
        P = (0, u.q)((0, j.Ay)()),
        _ = x ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]),
        A = (0, s.jsxs)(s.Fragment, {
            children: [
                E && (0, s.jsx)(V.R, { text: y, className: J.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: _,
                }),
                (0, s.jsx)($.A, {
                    isGift: n,
                    premiumTier: Y.PremiumTypes.TIER_0,
                    offerType: Y.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === Y.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: a,
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
        I = l()(J.card, J.tier0, t, { [J.pillMargin]: !c && E });
    return ((0, k.hm)(N) || null != v) && !n
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
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: a = !1 } = e,
        l = (0, k.N1)(Y.gD.PREMIUM_YEAR_TIER_2),
        d = n.useMemo(() => {
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
                          (0, s.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: M.intl.format(M.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, s.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: M.intl.format(M.t.aUTlph, { regularPrice: d }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(V.R, { text: M.intl.formatToPlainString(M.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function en(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = Z.Nz.DEFAULT,
            className: n,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: x,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        C = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        P = (0, O.V)(),
        _ = P?.subscription_trial?.sku_id,
        A = C?.hasActiveTrial ? E?.premiumType : null,
        I = C?.planIdFromItems === Y.gD.PREMIUM_YEAR_TIER_2,
        b = (0, G.O)(),
        D = (0, G.p)(),
        U = (0, y.k5)(),
        S = null != _ || null != A ? Y.Vk.PREMIUM_TRIAL : null != b || U ? Y.Vk.PREMIUM_DISCOUNT : null,
        H = (0, u.q)((0, j.Ay)()),
        L = null != D && !a,
        F = !a && null != b && (0, k.hm)(b),
        W = !a && U && I && S === Y.Vk.PREMIUM_DISCOUNT,
        z = (0, B.rm)(U, A, a ? null : b, P, _),
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
                    isGift: a,
                    premiumTier: Y.PremiumTypes.TIER_2,
                    offerType: S,
                    offerTierMatchesCard: _ === Y.pe.TIER_2 || (0, k.U9)(b, Y.pe.TIER_2),
                    showYearlyPrice: i && !F,
                    priceOptions: x,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                F
                    ? (0, s.jsx)(es, { discountOffer: b, priceOptions: x, isGift: a, narrowLayout: v })
                    : (0, s.jsx)("hr", { className: J.divider }),
                (0, s.jsx)(Z.ZP, {
                    featureSet: t,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : J.firstFeatureItemContainer,
                }),
                r,
                p && (0, s.jsx)(w, {}),
            ],
        }),
        q = l()(J.card, n, { [J.withGiftBanner]: p });
    return L
        ? (0, s.jsx)("div", { className: q, children: K })
        : (0, s.jsx)(m.h, { color: "nitro-pink", className: q, children: K });
}
function ea(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: n } = e,
        a = (0, u.q)((0, j.Ay)()),
        o = (0, G.p)(),
        c = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: J.cardHeader,
                    children: [
                        (0, s.jsx)(d.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "always-white",
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
                (0, s.jsx)(q, { discountOffer: o, priceOptions: n }),
                (0, s.jsx)(Z.Lg, { isApplicationHome: t }),
                i,
            ],
        });
    return null != o
        ? (0, s.jsx)(m.h, { color: "nitro-pink", className: l()(J.card, r), children: c })
        : (0, s.jsx)("div", { className: l()(J.card, J.borderGradient, r), children: c });
}
let el = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: n, narrowLayout: a } = e,
            d = r === Y.pe.TIER_2,
            o = (0, G.p)(),
            { subscribeButtonProps: u, subscriptionTier: m } = (0, S.$)({
                subscriptionTier: r,
                variantOverride: d && null == o ? "expressive" : "secondary",
            }),
            { disabled: x } = u,
            h = (0, s.jsx)("div", {
                className: J.CTAButton,
                children: (0, s.jsx)(c.$, { size: "md", fullWidth: !0, ...u, disabled: x }),
            }),
            j = (0, s.jsx)("div", {
                className: l()({ [J.premiumCardHover]: !i }),
                children: (0, s.jsx)(d ? en : ei, {
                    className: l()(J.applicationHomeCard, { [J.narrow]: a }),
                    ctaButton: h,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
                }),
            });
        return (0, s.jsx)("div", {
            className: n,
            children: x
                ? j
                : (0, s.jsx)(U.A, {
                      subscriptionTier: m,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, s.jsx)(p.D, { onClick: r, style: { cursor: "pointer" }, children: j });
                      },
                  }),
        });
    },
    ed = (e) => {
        let { isReducedMotion: r, className: i } = e,
            t = (0, G.p)(),
            n =
                null != t
                    ? M.intl.format(W.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, X.DP)(),
                      })
                    : M.intl.string(M.t["2pG5Ga"]),
            a = (0, s.jsx)("div", {
                className: J.CTAButton,
                children: (0, s.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: h.t,
                    text: n,
                    variant: null != t ? "expressive" : "secondary",
                }),
            }),
            d = (0, s.jsx)("div", {
                className: l()({ [J.premiumCardHover]: !r }),
                children: (0, s.jsx)(ea, {
                    className: l()(J.applicationHomeCard, J.narrow),
                    ctaButton: a,
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
                    children: (0, s.jsx)(p.D, { onClick: r, style: { cursor: "pointer" }, children: d }),
                });
            },
        });
    };
function eo(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(f.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, Z.pw)(r),
        a = (0, o.bG)([g.A], () => g.A.useReducedMotion),
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
                    ref: n,
                    className: J.premiumCards,
                    children: [
                        (0, s.jsx)(el, {
                            subscriptionTier: Y.pe.TIER_0,
                            isReducedMotion: a,
                            className: J.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, s.jsx)(el, {
                            subscriptionTier: Y.pe.TIER_2,
                            isReducedMotion: a,
                            className: J.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, s.jsx)(ed, { isReducedMotion: a, className: J.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
