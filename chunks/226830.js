t.d(r, { jP: () => eo, Rf: () => ea, oK: () => el, r6: () => en, MR: () => ei });
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
    C = t(688810),
    T = t(287809),
    v = t(166403),
    R = t(428262),
    A = t(580630),
    E = t(526292),
    _ = t(877624),
    y = t(937008),
    P = t(807098),
    I = t(374200),
    M = t(380619),
    b = t(375708),
    w = t(756974);
function G() {
    let { claimableRewards: e } = (0, y.Pv)(),
        r = (0, d.bG)([I.A], () => {
            let e = I.A.getMarketingComponentByType(_.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, P.T)(r?.bannerAsset),
        i = (0, P.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let s = (0, M.gc)(t),
        l = r?.gradient,
        n =
            null != l && null != l.colors && l.colors.length >= 2
                ? (0, M.K5)({ gradient: l.colors, angle: l.angle ?? void 0 })
                : void 0,
        c = (0, M.x)(s, n);
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
var S = t(422936),
    k = t(234419),
    O = t(862990),
    D = t(783420),
    B = t(204413),
    U = t(410516),
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
        l = (0, U.N1)(Y.gD.PREMIUM_GROUP_MONTH),
        n = (0, m.q)((0, g.Ay)());
    if (null == s) return (0, a.jsx)(L.y, { type: L.y.Type.PULSING_ELLIPSIS, className: K.xB });
    let u = (0, R.sS)(s, i, !1, r),
        p = Y.WT.MONTH;
    if (null != t && null != l) {
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
                                        discountedPrice: l,
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
                        color: n ? "text-strong" : "always-white",
                        tag: "span",
                        children: u,
                    }),
                    (0, a.jsxs)(x.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, R.FJ)(p)],
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
                  (0, a.jsx)("div", { className: J.footer, children: t }),
              ],
          });
}
function ei(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: s = !1,
            priceOptions: l,
            isApplicationHome: o = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        h = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        j = (0, k.V)(),
        f = j?.subscription_trial?.sku_id,
        N = (0, S.O)(),
        C = (0, S.p)(),
        R = x?.hasActiveTrial ? h?.premiumType : null,
        A = (0, H.Lj)(R, f),
        E = null != A,
        _ = (0, m.q)((0, g.Ay)()),
        y = u ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t["t9uG/o"]),
        P = (0, a.jsxs)(et, {
            footer: r,
            children: [
                E && (0, a.jsx)(V.R, { text: A, className: J.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: _ ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: y,
                }),
                (0, a.jsx)($.A, {
                    isGift: s,
                    premiumTier: Y.PremiumTypes.TIER_0,
                    offerType: Y.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === Y.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: l,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                (0, a.jsx)("hr", { className: J.divider }),
                (0, a.jsx)(Z.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        I = n()(J.card, J.tier0, i, { [J.pillMargin]: !o && E });
    return ((0, U.hm)(N) || null != C) && !s
        ? (0, a.jsx)("div", { className: I, children: P })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: I, children: P });
}
var ea =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function es(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: l = !1 } = e,
        n = (0, U.N1)(Y.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, R.y8)(Y.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == n || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: J.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: J.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: l ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: b.intl.format(b.t["TCFNZ/"], { discountedPrice: n }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: l ? "text-xs/normal" : "text-sm/normal",
                              children: b.intl.format(b.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(V.R, { text: b.intl.formatToPlainString(b.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function el(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = Z.Nz.DEFAULT,
            className: s,
            isGift: l = !1,
            isModal: o = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: C = !1,
        } = e,
        R = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        A = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        _ = (0, k.V)(),
        y = _?.subscription_trial?.sku_id,
        P = R?.hasActiveTrial ? A?.premiumType : null,
        I = R?.planIdFromItems === Y.gD.PREMIUM_YEAR_TIER_2,
        M = (0, S.O)(),
        w = (0, S.p)(),
        O = (0, E.k5)(),
        D = null != y || null != P ? Y.Vk.PREMIUM_TRIAL : null != M || O ? Y.Vk.PREMIUM_DISCOUNT : null,
        B = (0, m.q)((0, g.Ay)()),
        L = null != w && !l,
        F = !l && null != M && (0, U.hm)(M),
        W = !l && O && I && D === Y.Vk.PREMIUM_DISCOUNT,
        z = (0, H.rm)(O, P, l ? null : M, _, y),
        K = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(G, {})] }) : null,
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
                                                    className: n()(J.bigCloud, J[h]),
                                                }),
                                                (0, a.jsx)("img", {
                                                    src: Q,
                                                    alt: "",
                                                    className: n()(J.smallCloud, J[h]),
                                                }),
                                            ],
                                        }),
                                    (!F || null != r) &&
                                        (0, a.jsx)("img", {
                                            src: er,
                                            alt: "",
                                            className: n()(J.wumpus, J[h], { [J.withAnnualDiscountBanner]: F }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                N && !F && (0, a.jsx)(V.R, { text: z ?? b.intl.string(b.t["6bEcYr"]), className: J.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: B ? "text-strong" : "always-white",
                    className: J.cardTitle,
                    children: b.intl.string(b.t.lG6a5x),
                }),
                (0, a.jsx)($.A, {
                    isGift: l,
                    premiumTier: Y.PremiumTypes.TIER_2,
                    offerType: D,
                    offerTierMatchesCard: y === Y.pe.TIER_2 || (0, U.U9)(M, Y.pe.TIER_2),
                    showYearlyPrice: t && !F,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: J.priceHeader,
                }),
                F
                    ? (0, a.jsx)(es, { discountOffer: M, priceOptions: u, isGift: l, narrowLayout: C })
                    : (0, a.jsx)("hr", { className: J.divider }),
                (0, a.jsx)(Z.ZP, {
                    featureSet: i,
                    isModal: o,
                    isGift: l,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : J.firstFeatureItemContainer,
                }),
            ],
        }),
        X = n()(J.card, s, { [J.withGiftBanner]: x });
    return L
        ? (0, a.jsx)("div", { className: X, children: q })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: X, children: q });
}
function en(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: s } = e,
        l = (0, m.q)((0, g.Ay)()),
        d = (0, S.p)(),
        o = (0, a.jsxs)(et, {
            footer: t,
            children: [
                (0, a.jsxs)("div", {
                    className: J.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: l ? "text-strong" : "always-white",
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
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: n()(J.card, r), children: o })
        : (0, a.jsx)("div", { className: n()(J.card, J.borderGradient, r), children: o });
}
let ec = (e) => {
        let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: s, narrowLayout: l } = e,
            c = r === Y.pe.TIER_2,
            d = (0, S.p)(),
            { subscribeButtonProps: m, subscriptionTier: p } = (0, B.$)({
                subscriptionTier: r,
                variantOverride: c && null == d ? "expressive" : "secondary",
            }),
            { disabled: x } = m,
            j = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
            g = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: n()(J.tierCardStack, { [J.premiumCardHover]: !t }),
                children: (0, a.jsx)(c ? el : ei, {
                    className: n()(J.applicationHomeCard, { [J.narrow]: l }),
                    ctaButton: j,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, a.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: n()(J.tierCardStack, s),
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
            i = (0, S.p)(),
            s =
                null != i
                    ? b.intl.format(W.default["7j70dP"], {
                          percent: i.discount?.amount,
                          premiumGroupProductName: (0, X.DP)(),
                      })
                    : b.intl.string(b.t["2pG5Ga"]),
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
                className: n()(J.tierCardStack, { [J.premiumCardHover]: !r }),
                children: (0, a.jsx)(en, {
                    className: n()(J.applicationHomeCard, J.narrow),
                    ctaButton: l,
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
                    className: n()(J.tierCardStack, t),
                    children: (0, a.jsx)(h.D, { onClick: r, className: J.tierCardStack, children: c }),
                });
            },
        });
    };
function eo(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, Z.pw)(r),
        l = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        o = (0, O.PA)();
    return (0, a.jsx)(C.f5, {
        value: i,
        children: (0, a.jsxs)("div", {
            className: n()(J.premiumCardsContainer, t),
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
                            isReducedMotion: l,
                            className: J.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, a.jsx)(ec, {
                            subscriptionTier: Y.pe.TIER_2,
                            isReducedMotion: l,
                            className: J.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, a.jsx)(ed, { isReducedMotion: l, className: J.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
