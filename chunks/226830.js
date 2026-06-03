i.d(r, { jP: () => eo, Rf: () => ei, oK: () => es, r6: () => ea, MR: () => er });
var t,
    s = i(627968),
    a = i(64700),
    n = i(503698),
    l = i.n(n),
    o = i(534514),
    d = i(17928),
    c = i(821609),
    u = i(462887),
    m = i(315629),
    x = i(834730),
    p = i(939249),
    h = i(403581),
    g = i(736653),
    j = i(775602),
    f = i(793574),
    N = i(688810),
    T = i(287809),
    R = i(166403),
    C = i(428262),
    v = i(580630),
    y = i(526292),
    A = i(877624),
    E = i(937008),
    _ = i(807098),
    P = i(374200),
    b = i(380619),
    I = i(375708),
    M = i(756974);
function w() {
    let { claimableRewards: e } = (0, E.Pv)(),
        r = (0, d.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(A.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, _.T)(r?.bannerAsset),
        t = (0, _.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, b.gc)(i),
        n = r?.gradient,
        l =
            null != n && null != n.colors && n.colors.length >= 2
                ? (0, b.K5)({ gradient: n.colors, angle: n.angle ?? void 0 })
                : void 0,
        o = (0, b.x)(a, l);
    return (0, s.jsxs)("div", {
        className: M.kL,
        style: o,
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
    D = i(39423),
    U = i(783420),
    S = i(204413),
    B = i(410516),
    H = i(774774),
    L = i(289873),
    k = i(331322),
    F = i(97352),
    V = i(795269),
    W = i(788868),
    Y = i(466919),
    z = i(707259),
    K = i(378874);
let q = function (e) {
    let { isGift: r = !1, priceOptions: i } = e,
        t = (0, d.bG)([F.A], () => F.A.get(W.gD.PREMIUM_GROUP_MONTH)),
        a = (0, G.p)(),
        n = (0, B.N1)(W.gD.PREMIUM_GROUP_MONTH),
        l = (0, u.q)((0, g.Ay)());
    if (null == t) return (0, s.jsx)(L.y, { type: L.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let c = (0, C.sS)(t, i, !1, r),
        m = W.WT.MONTH;
    if (null != a && null != n) {
        let e = a.discount.userUsageLimit;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(k.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    className: z.Zu,
                    children: [
                        (0, s.jsxs)(k.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: z.Yc,
                            children: [
                                (0, s.jsx)(o.D, {
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
                                percent: a.discount.amount,
                                discountOfferAmount: a.discount.amount,
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
                        children: ["/", (0, C.FJ)(m)],
                    }),
                ],
            }),
            (0, s.jsx)(o.D, {
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
    X = i(115599),
    J = i(232266),
    Q = i(243002),
    ee = i(241988);
function er(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
            isGift: a = !1,
            priceOptions: n,
            isApplicationHome: c = !1,
            useShortTitle: x = !1,
        } = e,
        p = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        j = (0, O.V)(),
        f = j?.subscription_trial?.sku_id,
        N = p?.hasActiveTrial ? h?.premiumType : null,
        C = (0, H.Lj)(N, f),
        v = null != C,
        y = (0, u.q)((0, g.Ay)()),
        A = x ? I.intl.string(I.t.tUbSDK) : I.intl.string(I.t["t9uG/o"]),
        E = (0, s.jsxs)(s.Fragment, {
            children: [
                v && (0, s.jsx)(V.R, { text: C, className: X.pill }),
                (0, s.jsx)(o.D, {
                    variant: "display-md",
                    color: y ? "text-strong" : "always-white",
                    className: X.cardTitle,
                    children: A,
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
                    headerClassName: X.priceHeader,
                }),
                (0, s.jsx)("hr", { className: X.divider }),
                (0, s.jsx)(Z.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
                r,
            ],
        }),
        _ = (0, G.O)(),
        P = l()(X.card, X.tier0, t, { [X.pillMargin]: !c && v, [X.noGradient]: (0, B.hm)(_) && !a });
    return (0, s.jsx)(m.h, { color: "nitro-green", className: P, children: E });
}
var ei =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function et(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, B.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        o = a.useMemo(() => {
            try {
                let e = (0, C.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == o
        ? null
        : (0, s.jsxs)("div", {
              className: X.annualDiscountBanner,
              children: [
                  (0, s.jsxs)("div", {
                      className: X.annualDiscountBannerText,
                      children: [
                          (0, s.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: I.intl.format(I.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, s.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: I.intl.format(I.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(V.R, { text: I.intl.formatToPlainString(I.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function es(e) {
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
            isApplicationHome: j = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: C = !1,
        } = e,
        v = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        A = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        E = (0, O.V)(),
        _ = E?.subscription_trial?.sku_id,
        P = v?.hasActiveTrial ? A?.premiumType : null,
        b = (0, G.O)(),
        M = (0, y.k5)(),
        D = null != _ || null != P ? W.Vk.PREMIUM_TRIAL : null != b || M ? W.Vk.PREMIUM_DISCOUNT : null,
        U = (0, u.q)((0, g.Ay)()),
        S = !n && (0, B.hm)(b),
        L = (0, H.rm)(M, P, n ? null : b, E, _);
    return (0, s.jsxs)(m.h, {
        color: "nitro-pink",
        className: l()(X.card, a, { [X.withGiftBanner]: p }),
        children: [
            f &&
                (0, s.jsx)(
                    () =>
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                !S &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)("img", { src: Q, alt: "", className: l()(X.bigCloud, X[h]) }),
                                            (0, s.jsx)("img", { src: J, alt: "", className: l()(X.smallCloud, X[h]) }),
                                        ],
                                    }),
                                (!S || null != r) &&
                                    (0, s.jsx)("img", { src: ee, alt: "", className: l()(X.wumpus, X[h]) }),
                            ],
                        }),
                    {},
                ),
            N && !S && (0, s.jsx)(V.R, { text: L ?? I.intl.string(I.t["6bEcYr"]), className: X.pill }),
            (0, s.jsx)(o.D, {
                variant: "display-md",
                color: U ? "text-strong" : "always-white",
                className: X.cardTitle,
                children: I.intl.string(I.t.lG6a5x),
            }),
            (0, s.jsx)($.A, {
                isGift: n,
                premiumTier: W.PremiumTypes.TIER_2,
                offerType: D,
                offerTierMatchesCard: _ === W.pe.TIER_2 || (0, B.U9)(b, W.pe.TIER_2),
                showYearlyPrice: i && !S,
                priceOptions: x,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: X.priceHeader,
            }),
            S
                ? (0, s.jsx)(et, { discountOffer: b, priceOptions: x, isGift: n, narrowLayout: C })
                : (0, s.jsx)("hr", { className: X.divider }),
            (0, s.jsx)(Z.ZP, {
                featureSet: t,
                isModal: c,
                isGift: n,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: j,
                firstFeatureItemClassName:
                    S || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : X.firstFeatureItemContainer,
            }),
            r,
            p && (0, s.jsx)(w, {}),
        ],
    });
}
function ea(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: a } = e,
        n = (0, u.q)((0, g.Ay)());
    return (0, s.jsxs)("div", {
        className: l()(X.card, X.borderGradient, r),
        children: [
            (0, s.jsxs)("div", {
                className: X.cardHeader,
                children: [
                    (0, s.jsx)(o.D, {
                        variant: "display-md",
                        color: n ? "text-strong" : "always-white",
                        className: X.cardTitle,
                        children: I.intl.string(Y.default.eSKiXk),
                    }),
                    (0, s.jsx)(V.R, { text: I.intl.string(I.t.oW0eUd), className: X.betaPill }),
                ],
            }),
            (0, s.jsx)(q, { priceOptions: a }),
            (0, s.jsx)(Z.Lg, { isApplicationHome: t }),
            i,
        ],
    });
}
let en = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: a, narrowLayout: n } = e,
            o = r === W.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: u } = (0, S.$)({
                subscriptionTier: r,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: m } = d,
            x = (0, s.jsx)("div", {
                className: X.CTAButton,
                children: (0, s.jsx)(c.$, { size: "md", fullWidth: !0, ...d, disabled: m }),
            }),
            h = (0, s.jsx)("div", {
                className: l()({ [X.premiumCardHover]: !i }),
                children: (0, s.jsx)(o ? es : er, {
                    className: l()(X.applicationHomeCard, { [X.narrow]: n }),
                    ctaButton: x,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
                }),
            });
        return (0, s.jsx)("div", {
            className: a,
            children: m
                ? h
                : (0, s.jsx)(U.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, s.jsx)(p.D, { onClick: r, style: { cursor: "pointer" }, children: h });
                      },
                  }),
        });
    },
    el = (e) => {
        let { isReducedMotion: r, className: i } = e,
            t = (0, s.jsx)("div", {
                className: X.CTAButton,
                children: (0, s.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: h.t,
                    text: I.intl.string(I.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, s.jsx)("div", {
                className: l()({ [X.premiumCardHover]: !r }),
                children: (0, s.jsx)(ea, {
                    className: l()(X.applicationHomeCard, X.narrow),
                    ctaButton: t,
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
                    children: (0, s.jsx)(p.D, { onClick: r, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function eo(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(f.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, Z.pw)(r),
        n = (0, d.bG)([j.A], () => j.A.useReducedMotion),
        c = (0, D.PA)();
    return (0, s.jsx)(N.f5, {
        value: t,
        children: (0, s.jsxs)("div", {
            className: l()(X.premiumCardsContainer, i),
            children: [
                (0, s.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: X.premiumCardsHeader,
                    children: I.intl.string(I.t.vLz3Zs),
                }),
                (0, s.jsxs)("div", {
                    ref: a,
                    className: X.premiumCards,
                    children: [
                        (0, s.jsx)(en, {
                            subscriptionTier: W.pe.TIER_0,
                            isReducedMotion: n,
                            className: X.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, s.jsx)(en, {
                            subscriptionTier: W.pe.TIER_2,
                            isReducedMotion: n,
                            className: X.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, s.jsx)(el, { isReducedMotion: n, className: X.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
