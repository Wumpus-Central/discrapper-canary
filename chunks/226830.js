t.d(r, { jP: () => eu, Rf: () => es, oK: () => en, r6: () => ec, MR: () => ea });
var i,
    a = t(627968),
    s = t(64700),
    l = t(503698),
    n = t.n(l),
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
    T = t(688810),
    C = t(287809),
    R = t(166403),
    v = t(428262),
    A = t(580630),
    E = t(526292),
    _ = t(877624),
    y = t(978656),
    P = t(937008),
    I = t(807098),
    M = t(374200),
    b = t(380619),
    w = t(375708),
    G = t(756974);
function S() {
    let { claimableRewards: e } = (0, P.Pv)(),
        r = (0, d.bG)([M.A], () => {
            let e = M.A.getMarketingComponentByType(_.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, I.T)(r?.bannerAsset),
        i = (0, I.T)(r?.avatarAsset),
        s = r?.assetVariant === y.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let l = (0, b.gc)(t),
        c = r?.gradient,
        o =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, b.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, b.x)(l, o);
    return (0, a.jsxs)("div", {
        className: G.kL,
        style: u,
        children: [
            (0, a.jsxs)("div", {
                className: G.V_,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: w.intl.string(w.t.OEtqpm),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: w.intl.formatToPlainString(w.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, a.jsx)("div", {
                    className: G.R3,
                    children: (0, a.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: n()(G.my, { [G.R_]: s }),
                    }),
                }),
        ],
    });
}
var k = t(422936),
    O = t(234419),
    D = t(862990),
    B = t(783420),
    U = t(204413),
    L = t(410516),
    H = t(774774),
    F = t(289873),
    V = t(97352),
    Y = t(795269),
    W = t(788868),
    z = t(466919),
    K = t(707259),
    q = t(378874);
let Z = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i } = e,
        s = (0, d.bG)([V.A], () => V.A.get(W.gD.PREMIUM_GROUP_MONTH)),
        l = (0, L.N1)(W.gD.PREMIUM_GROUP_MONTH),
        n = (0, m.q)((0, g.Ay)());
    if (null == s) return (0, a.jsx)(F.y, { type: F.y.Type.PULSING_ELLIPSIS, className: q.xB });
    let u = (0, v.sS)(s, i, !1, r),
        p = W.WT.MONTH;
    if (null != t && null != l) {
        let e = t.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: K.vI }),
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
                            className: K.Yc,
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: w.intl.format(z.default.rCpGVA, {
                                        discountedPrice: l,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: w.intl.format(z.default["4b2ByP"], { regularPrice: u }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(Y.R, {
                            text: w.intl.formatToPlainString(z.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: K.yF }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "heading-xxl/extrabold",
                        color: n ? "text-strong" : "always-white",
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
                children: w.intl.string(z.default["R+dzZw"]),
            }),
            (0, a.jsx)("hr", { className: K.yF }),
        ],
    });
};
var $ = t(860839),
    X = t(222719),
    J = t(88001),
    Q = t(115599),
    ee = t(232266),
    er = t(243002),
    et = t(241988);
function ei(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: Q.tierCardStack, children: r })
        : (0, a.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: Q.tierCardStack,
              children: [
                  (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: Q.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: Q.footer, children: t }),
              ],
          });
}
function ea(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: s = !1,
            priceOptions: l,
            isApplicationHome: o = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        j = (0, O.V)(),
        f = j?.subscription_trial?.sku_id,
        N = (0, k.O)(),
        T = (0, k.p)(),
        v = x?.hasActiveTrial ? h?.premiumType : null,
        A = (0, H.Lj)(v, f),
        E = null != A,
        _ = (0, m.q)((0, g.Ay)()),
        y = u ? w.intl.string(w.t.tUbSDK) : w.intl.string(w.t["t9uG/o"]),
        P = (0, a.jsxs)(ei, {
            footer: r,
            children: [
                E && (0, a.jsx)(Y.R, { text: A, className: Q.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: _ ? "text-strong" : "always-white",
                    className: Q.cardTitle,
                    children: y,
                }),
                (0, a.jsx)(X.A, {
                    isGift: s,
                    premiumTier: W.PremiumTypes.TIER_0,
                    offerType: W.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === W.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: l,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Q.priceHeader,
                }),
                (0, a.jsx)("hr", { className: Q.divider }),
                (0, a.jsx)($.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        I = n()(Q.card, Q.tier0, i, { [Q.pillMargin]: !o && E });
    return ((0, L.hm)(N) || null != T) && !s
        ? (0, a.jsx)("div", { className: I, children: P })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: I, children: P });
}
var es =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function el(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: l = !1 } = e,
        n = (0, L.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, v.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == n || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: Q.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: Q.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: l ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: w.intl.format(w.t["TCFNZ/"], { discountedPrice: n }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: l ? "text-xs/normal" : "text-sm/normal",
                              children: w.intl.format(w.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(Y.R, { text: w.intl.formatToPlainString(w.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function en(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = $.Nz.DEFAULT,
            className: s,
            isGift: l = !1,
            isModal: o = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: T = !1,
        } = e,
        v = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        A = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        _ = (0, O.V)(),
        y = _?.subscription_trial?.sku_id,
        P = v?.hasActiveTrial ? A?.premiumType : null,
        I = v?.planIdFromItems === W.gD.PREMIUM_YEAR_TIER_2,
        M = (0, k.O)(),
        b = (0, k.p)(),
        G = (0, E.k5)(),
        D = null != y || null != P ? W.Vk.PREMIUM_TRIAL : null != M || G ? W.Vk.PREMIUM_DISCOUNT : null,
        B = (0, m.q)((0, g.Ay)()),
        U = null != b && !l,
        F = !l && null != M && (0, L.hm)(M),
        V = !l && G && I && D === W.Vk.PREMIUM_DISCOUNT,
        z = (0, H.rm)(G, P, l ? null : M, _, y),
        K = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(S, {})] }) : null,
        q = (0, a.jsxs)(ei, {
            footer: K,
            children: [
                f &&
                    !U &&
                    !V &&
                    (0, a.jsx)(
                        () =>
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !F &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)("img", {
                                                    src: er,
                                                    alt: "",
                                                    className: n()(Q.bigCloud, Q[h]),
                                                }),
                                                (0, a.jsx)("img", {
                                                    src: ee,
                                                    alt: "",
                                                    className: n()(Q.smallCloud, Q[h]),
                                                }),
                                            ],
                                        }),
                                    (!F || null != r) &&
                                        (0, a.jsx)("img", {
                                            src: et,
                                            alt: "",
                                            className: n()(Q.wumpus, Q[h], { [Q.withAnnualDiscountBanner]: F }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                N && !F && (0, a.jsx)(Y.R, { text: z ?? w.intl.string(w.t["6bEcYr"]), className: Q.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: B ? "text-strong" : "always-white",
                    className: Q.cardTitle,
                    children: w.intl.string(w.t.lG6a5x),
                }),
                (0, a.jsx)(X.A, {
                    isGift: l,
                    premiumTier: W.PremiumTypes.TIER_2,
                    offerType: D,
                    offerTierMatchesCard: y === W.pe.TIER_2 || (0, L.U9)(M, W.pe.TIER_2),
                    showYearlyPrice: t && !F,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Q.priceHeader,
                }),
                F
                    ? (0, a.jsx)(el, { discountOffer: M, priceOptions: u, isGift: l, narrowLayout: T })
                    : (0, a.jsx)("hr", { className: Q.divider }),
                (0, a.jsx)($.ZP, {
                    featureSet: i,
                    isModal: o,
                    isGift: l,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : Q.firstFeatureItemContainer,
                }),
            ],
        }),
        Z = n()(Q.card, s, { [Q.withGiftBanner]: x });
    return U
        ? (0, a.jsx)("div", { className: Z, children: q })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: Z, children: q });
}
function ec(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: s } = e,
        l = (0, m.q)((0, g.Ay)()),
        d = (0, k.p)(),
        o = (0, a.jsxs)(ei, {
            footer: t,
            children: [
                (0, a.jsxs)("div", {
                    className: Q.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: l ? "text-strong" : "always-white",
                            className: Q.cardTitle,
                            children: w.intl.string(z.default.eSKiXk),
                        }),
                        (0, a.jsx)(Y.R, {
                            text: w.intl.string(w.t.oW0eUd),
                            className: Q.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, a.jsx)(Z, { discountOffer: d, priceOptions: s }),
                (0, a.jsx)($.Lg, { isApplicationHome: i }),
            ],
        });
    return null != d
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: n()(Q.card, r), children: o })
        : (0, a.jsx)("div", { className: n()(Q.card, Q.borderGradient, r), children: o });
}
let ed = (e) => {
        let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: s, narrowLayout: l } = e,
            c = r === W.pe.TIER_2,
            d = (0, k.p)(),
            { subscribeButtonProps: m, subscriptionTier: p } = (0, U.$)({
                subscriptionTier: r,
                variantOverride: c && null == d ? "expressive" : "secondary",
            }),
            { disabled: x } = m,
            j = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
            g = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: n()(Q.tierCardStack, { [Q.premiumCardHover]: !t }),
                children: (0, a.jsx)(c ? en : ea, {
                    className: n()(Q.applicationHomeCard, { [Q.narrow]: l }),
                    ctaButton: j,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, a.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: n()(Q.tierCardStack, s),
            children: x
                ? g
                : (0, a.jsx)(B.A, {
                      subscriptionTier: p,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, a.jsx)(h.D, { onClick: r, className: Q.tierCardStack, children: g });
                      },
                  }),
        });
    },
    eo = (e) => {
        let { isReducedMotion: r, className: t } = e,
            i = (0, k.p)(),
            s =
                null != i
                    ? w.intl.format(z.default["7j70dP"], {
                          percent: i.discount?.amount,
                          premiumGroupProductName: (0, J.DP)(),
                      })
                    : w.intl.string(w.t["2pG5Ga"]),
            l = (0, a.jsx)(u.$, {
                size: "md",
                fullWidth: !0,
                icon: j.t,
                text: s,
                variant: null != i ? "expressive" : "secondary",
            }),
            c = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: n()(Q.tierCardStack, { [Q.premiumCardHover]: !r }),
                children: (0, a.jsx)(ec, {
                    className: n()(Q.applicationHomeCard, Q.narrow),
                    ctaButton: l,
                    isApplicationHome: !0,
                }),
            });
        return (0, a.jsx)(B.A, {
            subscriptionTier: W.pe.TIER_2,
            initialPlanId: W.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: r } = e;
                return (0, a.jsx)(o.B, {
                    direction: "vertical",
                    gap: 0,
                    className: n()(Q.tierCardStack, t),
                    children: (0, a.jsx)(h.D, { onClick: r, className: Q.tierCardStack, children: c }),
                });
            },
        });
    };
function eu(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, T.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, $.pw)(r),
        l = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        o = (0, D.PA)();
    return (0, a.jsx)(T.f5, {
        value: i,
        children: (0, a.jsxs)("div", {
            className: n()(Q.premiumCardsContainer, t),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: Q.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: Q.premiumCards,
                    children: [
                        (0, a.jsx)(ed, {
                            subscriptionTier: W.pe.TIER_0,
                            isReducedMotion: l,
                            className: Q.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, a.jsx)(ed, {
                            subscriptionTier: W.pe.TIER_2,
                            isReducedMotion: l,
                            className: Q.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, a.jsx)(eo, { isReducedMotion: l, className: Q.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
