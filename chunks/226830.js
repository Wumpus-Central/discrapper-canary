i.d(r, { jP: () => eu, Rf: () => es, oK: () => en, r6: () => ec, MR: () => ea });
var t,
    a = i(627968),
    s = i(64700),
    l = i(503698),
    n = i.n(l),
    c = i(534514),
    d = i(17928),
    o = i(331322),
    u = i(821609),
    m = i(462887),
    p = i(315629),
    x = i(834730),
    h = i(939249),
    j = i(403581),
    g = i(736653),
    f = i(775602),
    N = i(793574),
    T = i(688810),
    C = i(287809),
    R = i(166403),
    v = i(428262),
    A = i(580630),
    E = i(526292),
    _ = i(877624),
    y = i(978656),
    P = i(937008),
    I = i(807098),
    b = i(374200),
    M = i(380619),
    w = i(375708),
    G = i(756974);
function S() {
    let { claimableRewards: e } = (0, P.Pv)(),
        r = (0, d.bG)([b.A], () => {
            let e = b.A.getMarketingComponentByType(_.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, I.T)(r?.bannerAsset),
        t = (0, I.T)(r?.avatarAsset),
        s = r?.assetVariant === y.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let l = (0, M.gc)(i),
        c = r?.gradient,
        o =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, M.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, M.x)(l, o);
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
            null != t &&
                (0, a.jsx)("div", {
                    className: G.R3,
                    children: (0, a.jsx)("img", {
                        alt: "gift promotion reward",
                        src: t,
                        className: n()(G.my, { [G.R_]: s }),
                    }),
                }),
        ],
    });
}
var k = i(422936),
    O = i(234419),
    D = i(862990),
    B = i(783420),
    U = i(204413),
    L = i(410516),
    H = i(774774),
    F = i(289873),
    V = i(97352),
    Y = i(795269),
    W = i(788868),
    z = i(466919),
    K = i(707259),
    q = i(378874);
let Z = function (e) {
    let { isGift: r = !1, discountOffer: i, priceOptions: t, isApplicationHome: s = !1 } = e,
        l = (0, d.bG)([V.A], () => V.A.get(W.gD.PREMIUM_GROUP_MONTH)),
        u = (0, L.N1)(W.gD.PREMIUM_GROUP_MONTH),
        p = (0, m.q)((0, g.Ay)());
    if (null == l) return (0, a.jsx)(F.y, { type: F.y.Type.PULSING_ELLIPSIS, className: q.xB });
    let h = (0, v.sS)(l, t, !1, r),
        j = W.WT.MONTH;
    if (null != i && null != u) {
        let e = i.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: n()(K.vI, { [K.oE]: s }) }),
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
                                    variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: w.intl.format(z.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: s ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: w.intl.format(z.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(Y.R, {
                            text: w.intl.formatToPlainString(z.default.GEwdVw, {
                                percent: i.discount.amount,
                                discountOfferAmount: i.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: n()(K.yF, { [K.oE]: s }) }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "heading-xxl/extrabold",
                        color: p ? "text-strong" : "always-white",
                        tag: "span",
                        children: h,
                    }),
                    (0, a.jsxs)(x.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, v.FJ)(j)],
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
var $ = i(860839),
    X = i(222719),
    J = i(88001),
    Q = i(115599),
    ee = i(232266),
    er = i(243002),
    ei = i(241988);
function et(e) {
    let { children: r, footer: i } = e;
    return null == i
        ? (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: Q.tierCardStack, children: r })
        : (0, a.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: Q.tierCardStack,
              children: [
                  (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: Q.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: Q.footer, children: i }),
              ],
          });
}
function ea(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
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
        P = (0, a.jsxs)(et, {
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
                    showYearlyPrice: i,
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
        I = n()(Q.card, Q.tier0, t, { [Q.pillMargin]: !o && E });
    return ((0, L.hm)(N) || null != T) && !s
        ? (0, a.jsx)("div", { className: I, children: P })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: I, children: P });
}
var es =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function el(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: l = !1 } = e,
        n = (0, L.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, v.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
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
            showYearlyPrice: i,
            featureSet: t = $.Nz.DEFAULT,
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
        b = (0, k.O)(),
        M = (0, k.p)(),
        G = (0, E.k5)(),
        D = null != y || null != P ? W.Vk.PREMIUM_TRIAL : null != b || G ? W.Vk.PREMIUM_DISCOUNT : null,
        B = (0, m.q)((0, g.Ay)()),
        U = null != M && !l,
        F = !l && null != b && (0, L.hm)(b),
        V = !l && G && I && D === W.Vk.PREMIUM_DISCOUNT,
        z = (0, H.rm)(G, P, l ? null : b, _, y),
        K = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(S, {})] }) : null,
        q = (0, a.jsxs)(et, {
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
                                            src: ei,
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
                    offerTierMatchesCard: y === W.pe.TIER_2 || (0, L.U9)(b, W.pe.TIER_2),
                    showYearlyPrice: i && !F,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Q.priceHeader,
                }),
                F
                    ? (0, a.jsx)(el, { discountOffer: b, priceOptions: u, isGift: l, narrowLayout: T })
                    : (0, a.jsx)("hr", { className: Q.divider }),
                (0, a.jsx)($.ZP, {
                    featureSet: t,
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
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        l = (0, m.q)((0, g.Ay)()),
        d = (0, k.p)(),
        o = (0, a.jsxs)(et, {
            footer: i,
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
                (0, a.jsx)(Z, { discountOffer: d, priceOptions: s, isApplicationHome: t }),
                (0, a.jsx)($.Lg, { isApplicationHome: t }),
            ],
        });
    return null != d
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: n()(Q.card, r), children: o })
        : (0, a.jsx)("div", { className: n()(Q.card, Q.borderGradient, r), children: o });
}
let ed = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: s, narrowLayout: l } = e,
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
                className: n()(Q.tierCardStack, { [Q.premiumCardHover]: !i }),
                children: (0, a.jsx)(c ? en : ea, {
                    className: n()(Q.applicationHomeCard, { [Q.narrow]: l }),
                    ctaButton: j,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
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
        let { isReducedMotion: r, className: i } = e,
            t = (0, k.p)(),
            s =
                null != t
                    ? w.intl.format(z.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, J.DP)(),
                      })
                    : w.intl.string(w.t["2pG5Ga"]),
            l = (0, a.jsx)(u.$, {
                size: "md",
                fullWidth: !0,
                icon: j.t,
                text: s,
                variant: null != t ? "expressive" : "secondary",
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
                    className: n()(Q.tierCardStack, i),
                    children: (0, a.jsx)(h.D, { onClick: r, className: Q.tierCardStack, children: c }),
                });
            },
        });
    };
function eu(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, T.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, $.pw)(r),
        l = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        o = (0, D.PA)();
    return (0, a.jsx)(T.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: n()(Q.premiumCardsContainer, i),
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
