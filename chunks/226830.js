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
    x = i(834730),
    p = i(939249),
    h = i(403581),
    j = i(736653),
    g = i(775602),
    f = i(793574),
    N = i(688810),
    T = i(287809),
    v = i(166403),
    R = i(428262),
    C = i(580630),
    y = i(526292),
    A = i(877624),
    E = i(937008),
    P = i(807098),
    _ = i(374200),
    b = i(380619),
    I = i(375708),
    M = i(756974);
function w() {
    let { claimableRewards: e } = (0, E.Pv)(),
        r = (0, o.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(A.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, P.T)(r?.bannerAsset),
        t = (0, P.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, b.gc)(i),
        n = r?.gradient,
        l =
            null != n && null != n.colors && n.colors.length >= 2
                ? (0, b.K5)({ gradient: n.colors, angle: n.angle ?? void 0 })
                : void 0,
        d = (0, b.x)(a, l);
    return (0, s.jsxs)("div", {
        className: M.kL,
        style: d,
        children: [
            (0, s.jsxs)("div", {
                className: M.V_,
                children: [
                    (0, s.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: I.intl.string(I.t.OEtqpm),
                    }),
                    (0, s.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: I.intl.formatToPlainString(I.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != t && (0, s.jsx)("img", { alt: "gift promotion reward", src: t, className: M.my }),
        ],
    });
}
var G = i(422936),
    O = i(234419),
    D = i(862990),
    U = i(783420),
    S = i(204413),
    B = i(410516),
    k = i(774774),
    H = i(289873),
    L = i(331322),
    F = i(97352),
    V = i(795269),
    W = i(788868),
    Y = i(466919),
    z = i(707259),
    K = i(378874);
let q = function (e) {
    let { isGift: r = !1, discountOffer: i, priceOptions: t } = e,
        a = (0, o.bG)([F.A], () => F.A.get(W.gD.PREMIUM_GROUP_MONTH)),
        n = (0, B.N1)(W.gD.PREMIUM_GROUP_MONTH),
        l = (0, u.q)((0, j.Ay)());
    if (null == a) return (0, s.jsx)(H.y, { type: H.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let c = (0, R.sS)(a, t, !1, r),
        m = W.WT.MONTH;
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
                                    children: I.intl.format(Y.default.rCpGVA, {
                                        discountedPrice: n,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, s.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: I.intl.format(Y.default["4b2ByP"], { regularPrice: c }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(V.R, {
                            text: I.intl.formatToPlainString(Y.default.GEwdVw, {
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
                        children: ["/", (0, R.FJ)(m)],
                    }),
                ],
            }),
            (0, s.jsx)(d.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: I.intl.string(Y.default["R+dzZw"]),
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
            useShortTitle: x = !1,
        } = e,
        p = (0, o.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, O.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, G.O)(),
        R = (0, G.p)(),
        C = p?.hasActiveTrial ? h?.premiumType : null,
        y = (0, k.Lj)(C, f),
        A = null != y,
        E = (0, u.q)((0, j.Ay)()),
        P = x ? I.intl.string(I.t.tUbSDK) : I.intl.string(I.t["t9uG/o"]),
        _ = (0, s.jsxs)(s.Fragment, {
            children: [
                A && (0, s.jsx)(V.R, { text: y, className: J.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: E ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: P,
                }),
                (0, s.jsx)($.A, {
                    isGift: a,
                    premiumTier: W.PremiumTypes.TIER_0,
                    offerType: W.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === W.pe.TIER_0,
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
        b = l()(J.card, J.tier0, t, { [J.pillMargin]: !c && A });
    return ((0, B.hm)(N) || null != R) && !a
        ? (0, s.jsx)("div", { className: b, children: _ })
        : (0, s.jsx)(m.h, { color: "nitro-green", className: b, children: _ });
}
var et =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function es(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, B.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        d = a.useMemo(() => {
            try {
                let e = (0, R.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
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
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: I.intl.format(I.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, s.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: I.intl.format(I.t.aUTlph, { regularPrice: d }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(V.R, { text: I.intl.formatToPlainString(I.t.v5WSns, { percent: r.discount.amount }) }),
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
            priceOptions: x,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: R = !1,
        } = e,
        C = (0, o.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        A = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        E = (0, O.V)(),
        P = E?.subscription_trial?.sku_id,
        _ = C?.hasActiveTrial ? A?.premiumType : null,
        b = (0, G.O)(),
        M = (0, G.p)(),
        D = (0, y.k5)(),
        U = null != P || null != _ ? W.Vk.PREMIUM_TRIAL : null != b || D ? W.Vk.PREMIUM_DISCOUNT : null,
        S = (0, u.q)((0, j.Ay)()),
        H = null != M && !n,
        L = !n && (0, B.hm)(b),
        F = (0, k.rm)(D, _, n ? null : b, E, P),
        Y = (0, s.jsxs)(s.Fragment, {
            children: [
                f &&
                    !H &&
                    (0, s.jsx)(
                        () =>
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    !L &&
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
                                    (!L || null != r) &&
                                        (0, s.jsx)("img", { src: er, alt: "", className: l()(J.wumpus, J[h]) }),
                                ],
                            }),
                        {},
                    ),
                N && !L && (0, s.jsx)(V.R, { text: F ?? I.intl.string(I.t["6bEcYr"]), className: J.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: S ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: I.intl.string(I.t.lG6a5x),
                }),
                (0, s.jsx)($.A, {
                    isGift: n,
                    premiumTier: W.PremiumTypes.TIER_2,
                    offerType: U,
                    offerTierMatchesCard: P === W.pe.TIER_2 || (0, B.U9)(b, W.pe.TIER_2),
                    showYearlyPrice: i && !L,
                    priceOptions: x,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                L
                    ? (0, s.jsx)(es, { discountOffer: b, priceOptions: x, isGift: n, narrowLayout: R })
                    : (0, s.jsx)("hr", { className: J.divider }),
                (0, s.jsx)(Z.ZP, {
                    featureSet: t,
                    isModal: c,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        L || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : J.firstFeatureItemContainer,
                }),
                r,
                p && (0, s.jsx)(w, {}),
            ],
        }),
        z = l()(J.card, a, { [J.withGiftBanner]: p });
    return H
        ? (0, s.jsx)("div", { className: z, children: Y })
        : (0, s.jsx)(m.h, { color: "nitro-pink", className: z, children: Y });
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
                            children: I.intl.string(Y.default.eSKiXk),
                        }),
                        (0, s.jsx)(V.R, {
                            text: I.intl.string(I.t.oW0eUd),
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
            d = r === W.pe.TIER_2,
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
            a =
                null != t
                    ? I.intl.format(Y.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, X.DP)(),
                      })
                    : I.intl.string(I.t["2pG5Ga"]),
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
            subscriptionTier: W.pe.TIER_2,
            initialPlanId: W.gD.PREMIUM_GROUP_MONTH,
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
                    children: I.intl.string(I.t.vLz3Zs),
                }),
                (0, s.jsxs)("div", {
                    ref: a,
                    className: J.premiumCards,
                    children: [
                        (0, s.jsx)(el, {
                            subscriptionTier: W.pe.TIER_0,
                            isReducedMotion: n,
                            className: J.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, s.jsx)(el, {
                            subscriptionTier: W.pe.TIER_2,
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
