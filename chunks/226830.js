"use strict";
n.d(t, { jP: () => e_, Rf: () => ea, oK: () => el, r6: () => eu, MR: () => es });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(534514),
    u = n(17928),
    c = n(331322),
    d = n(821609),
    _ = n(462887),
    h = n(315629),
    f = n(834730),
    p = n(939249),
    E = n(403581),
    m = n(736653),
    g = n(775602),
    A = n(793574),
    I = n(688810),
    T = n(287809),
    S = n(166403),
    y = n(428262),
    C = n(580630),
    N = n(526292),
    v = n(442123),
    R = n(877624),
    O = n(978656),
    b = n(937008),
    D = n(807098),
    L = n(374200),
    w = n(380619),
    M = n(375708),
    P = n(756974);
function x() {
    let { claimableRewards: e } = (0, b.Pv)(),
        t = (0, u.bG)([L.A], () => {
            let e = L.A.getMarketingComponentByType(R.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, D.T)(t?.bannerAsset),
        i = (0, D.T)(t?.avatarAsset),
        s = t?.assetVariant === O.Y.LARGE_TILTED;
    if (null == t || null == e || 0 === e.length) return null;
    let a = (0, w.gc)(n),
        l = t?.gradient,
        c =
            null != l && null != l.colors && l.colors.length >= 2
                ? (0, w.K5)({ gradient: l.colors, angle: l.angle ?? void 0 })
                : void 0,
        d = (0, w.x)(a, c);
    return (0, r.jsxs)("div", {
        className: P.kL,
        style: d,
        children: [
            (0, r.jsxs)("div", {
                className: P.V_,
                children: [
                    (0, r.jsx)(f.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.OEtqpm),
                    }),
                    (0, r.jsx)(f.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: M.intl.formatToPlainString(M.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, r.jsx)("div", {
                    className: P.R3,
                    children: (0, r.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: o()(P.my, { [P.R_]: s }),
                    }),
                }),
        ],
    });
}
var k = n(422936),
    U = n(234419),
    G = n(862990),
    F = n(783420),
    V = n(204413),
    B = n(410516),
    j = n(774774),
    H = n(289873),
    Y = n(97352),
    W = n(795269),
    K = n(788868),
    $ = n(466919),
    z = n(707259),
    q = n(378874);
let Z = function (e) {
    let { isGift: t = !1, discountOffer: n, priceOptions: i, isApplicationHome: s = !1 } = e,
        a = (0, u.bG)([Y.A], () => Y.A.get(K.gD.PREMIUM_GROUP_MONTH)),
        d = (0, B.N1)(K.gD.PREMIUM_GROUP_MONTH),
        h = (0, _.q)((0, m.Ay)());
    if (null == a) return (0, r.jsx)(H.y, { type: H.y.Type.PULSING_ELLIPSIS, className: q.xB });
    let p = (0, y.sS)(a, i, !1, t),
        E = K.WT.MONTH;
    if (null != n && null != d) {
        let e = n.discount.userUsageLimit;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("hr", { className: o()(z.vI, { [z.oE]: s }) }),
                (0, r.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, r.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: z.Yc,
                            children: [
                                (0, r.jsx)(l.D, {
                                    variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: M.intl.format($.default.rCpGVA, {
                                        discountedPrice: d,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, r.jsx)(f.E, {
                                    variant: s ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: M.intl.format($.default["4b2ByP"], { regularPrice: p }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(W.R, {
                            text: M.intl.formatToPlainString($.default.GEwdVw, {
                                percent: n.discount.amount,
                                discountOfferAmount: n.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("hr", { className: o()(z.yF, { [z.oE]: s }) }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(f.E, {
                        variant: "heading-xxl/extrabold",
                        color: h ? "text-strong" : "always-white",
                        tag: "span",
                        children: p,
                    }),
                    (0, r.jsxs)(f.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, y.FJ)(E)],
                    }),
                ],
            }),
            (0, r.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: M.intl.string($.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", { className: z.yF }),
        ],
    });
};
var X = n(860839),
    Q = n(765516),
    J = n(88001),
    ee = n(115599),
    et = n(232266),
    en = n(243002),
    ei = n(241988);
function er(e) {
    let { children: t, footer: n } = e;
    return null == n
        ? (0, r.jsx)(c.B, { direction: "vertical", gap: 0, className: ee.tierCardStack, children: t })
        : (0, r.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ee.tierCardStack,
              children: [
                  (0, r.jsx)(c.B, { direction: "vertical", gap: 0, className: ee.tierCardStackContent, children: t }),
                  (0, r.jsx)("div", { className: ee.footer, children: n }),
              ],
          });
}
function es(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            className: i,
            isGift: s = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        f = (0, u.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        p = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        E = (0, U.V)(),
        g = E?.subscription_trial?.sku_id,
        A = (0, k.O)(),
        I = (0, k.p)(),
        y = f?.hasActiveTrial ? p?.premiumType : null,
        C = (0, j.Lj)(y, g),
        N = null != C,
        R = (0, _.q)((0, m.Ay)()),
        { showGiftPrice: O } = v.A.useConfig({ location: `PremiumTier0Card${s ? "" : " - DO NOT USE"}` }),
        b = d ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]),
        D = (0, r.jsxs)(er, {
            footer: t,
            children: [
                N && (0, r.jsx)(W.R, { text: C, className: ee.pill }),
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: R ? "text-strong" : "always-white",
                    className: ee.cardTitle,
                    children: b,
                }),
                (!s || O) &&
                    (0, r.jsx)(Q.A, {
                        isGift: s,
                        premiumTier: K.PremiumTypes.TIER_0,
                        offerType: K.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: g === K.pe.TIER_0,
                        showYearlyPrice: n,
                        priceOptions: a,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ee.priceHeader,
                    }),
                (0, r.jsx)("hr", { className: ee.divider }),
                (0, r.jsx)(X.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        L = o()(ee.card, ee.tier0, i, { [ee.pillMargin]: !c && N });
    return ((0, B.hm)(A) || null != I) && !s
        ? (0, r.jsx)("div", { className: L, children: D })
        : (0, r.jsx)(h.h, { color: "nitro-green", className: L, children: D });
}
var ea =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function eo(e) {
    let { discountOffer: t, priceOptions: n, isGift: i, narrowLayout: a = !1 } = e,
        o = (0, B.N1)(K.gD.PREMIUM_YEAR_TIER_2),
        l = s.useMemo(() => {
            try {
                let e = (0, y.y8)(K.gD.PREMIUM_YEAR_TIER_2, !1, i, n);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, n]);
    return null == o || null == l
        ? null
        : (0, r.jsxs)("div", {
              className: ee.annualDiscountBanner,
              children: [
                  (0, r.jsxs)("div", {
                      className: ee.annualDiscountBannerText,
                      children: [
                          (0, r.jsx)(f.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: M.intl.format(M.t["TCFNZ/"], { discountedPrice: o }),
                          }),
                          (0, r.jsx)(f.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: M.intl.format(M.t.aUTlph, { regularPrice: l }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(W.R, { text: M.intl.formatToPlainString(M.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function el(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: i = X.Nz.DEFAULT,
            className: s,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: f = !1,
            wumpusPosition: p = "inCard",
            isApplicationHome: E = !1,
            showWumpus: g = !0,
            showPill: A = !0,
            narrowLayout: I = !1,
        } = e,
        y = (0, u.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        C = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        R = (0, U.V)(),
        O = R?.subscription_trial?.sku_id,
        b = y?.hasActiveTrial ? C?.premiumType : null,
        D = y?.planIdFromItems === K.gD.PREMIUM_YEAR_TIER_2,
        L = (0, k.O)(),
        w = (0, k.p)(),
        P = (0, N.k5)(),
        G = null != O || null != b ? K.Vk.PREMIUM_TRIAL : null != L || P ? K.Vk.PREMIUM_DISCOUNT : null,
        F = (0, _.q)((0, m.Ay)()),
        V = null != w && !a,
        H = !a && null != L && (0, B.hm)(L),
        Y = !a && P && D && G === K.Vk.PREMIUM_DISCOUNT,
        $ = (0, j.rm)(P, b, a ? null : L, R, O),
        { showGiftPrice: z } = v.A.useConfig({ location: `PremiumTier2Card${a ? "" : " - DO NOT USE"}` }),
        q = null != t || f ? (0, r.jsxs)(r.Fragment, { children: [t, f && (0, r.jsx)(x, {})] }) : null,
        Z = (0, r.jsxs)(er, {
            footer: q,
            children: [
                g &&
                    !V &&
                    !Y &&
                    (0, r.jsx)(
                        () =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !H &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)("img", {
                                                    src: en,
                                                    alt: "",
                                                    className: o()(ee.bigCloud, ee[p]),
                                                }),
                                                (0, r.jsx)("img", {
                                                    src: et,
                                                    alt: "",
                                                    className: o()(ee.smallCloud, ee[p]),
                                                }),
                                            ],
                                        }),
                                    (!H || null != t) &&
                                        (0, r.jsx)("img", {
                                            src: ei,
                                            alt: "",
                                            className: o()(ee.wumpus, ee[p], {
                                                [ee.withAnnualDiscountBanner]: H,
                                                [ee.noGiftPrice]: a && !z,
                                            }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                A && !H && (0, r.jsx)(W.R, { text: $ ?? M.intl.string(M.t["6bEcYr"]), className: ee.pill }),
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: F ? "text-strong" : "always-white",
                    className: ee.cardTitle,
                    children: M.intl.string(M.t.lG6a5x),
                }),
                (!a || z) &&
                    (0, r.jsx)(Q.A, {
                        isGift: a,
                        premiumTier: K.PremiumTypes.TIER_2,
                        offerType: G,
                        offerTierMatchesCard: O === K.pe.TIER_2 || (0, B.U9)(L, K.pe.TIER_2),
                        showYearlyPrice: n && !H,
                        priceOptions: d,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ee.priceHeader,
                    }),
                H
                    ? (0, r.jsx)(eo, { discountOffer: L, priceOptions: d, isGift: a, narrowLayout: I })
                    : (0, r.jsx)("hr", { className: ee.divider }),
                (0, r.jsx)(X.ZP, {
                    featureSet: i,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: E,
                    firstFeatureItemClassName:
                        H || ("inCard" !== p && "giftSelectionModal" !== p) ? void 0 : ee.firstFeatureItemContainer,
                }),
            ],
        }),
        J = o()(ee.card, s, { [ee.withGiftBanner]: f });
    return V
        ? (0, r.jsx)("div", { className: J, children: Z })
        : (0, r.jsx)(h.h, { color: "nitro-pink", className: J, children: Z });
}
function eu(e) {
    let { className: t, ctaButton: n, isApplicationHome: i, priceOptions: s } = e,
        a = (0, _.q)((0, m.Ay)()),
        u = (0, k.p)(),
        c = (0, r.jsxs)(er, {
            footer: n,
            children: [
                (0, r.jsxs)("div", {
                    className: ee.cardHeader,
                    children: [
                        (0, r.jsx)(l.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "always-white",
                            className: ee.cardTitle,
                            children: M.intl.string($.default.eSKiXk),
                        }),
                        (0, r.jsx)(W.R, {
                            text: M.intl.string(M.t.oW0eUd),
                            className: ee.betaPill,
                            disableGradient: null != u,
                        }),
                    ],
                }),
                (0, r.jsx)(Z, { discountOffer: u, priceOptions: s, isApplicationHome: i }),
                (0, r.jsx)(X.Lg, { isApplicationHome: i }),
            ],
        });
    return null != u
        ? (0, r.jsx)(h.h, { color: "nitro-pink", className: o()(ee.card, t), children: c })
        : (0, r.jsx)("div", { className: o()(ee.card, ee.borderGradient, t), children: c });
}
let ec = (e) => {
        let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: s, narrowLayout: a } = e,
            l = t === K.pe.TIER_2,
            u = (0, k.p)(),
            { subscribeButtonProps: _, subscriptionTier: h } = (0, V.$)({
                subscriptionTier: t,
                variantOverride: l && null == u ? "expressive" : "secondary",
            }),
            { disabled: f } = _,
            E = (0, r.jsx)(d.$, { size: "md", fullWidth: !0, ..._, disabled: f }),
            m = (0, r.jsx)(c.B, {
                direction: "vertical",
                gap: 0,
                className: o()(ee.tierCardStack, { [ee.premiumCardHover]: !n }),
                children: (0, r.jsx)(l ? el : es, {
                    className: o()(ee.applicationHomeCard, { [ee.narrow]: a }),
                    ctaButton: E,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, r.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: o()(ee.tierCardStack, s),
            children: f
                ? m
                : (0, r.jsx)(F.A, {
                      subscriptionTier: h,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, r.jsx)(p.D, { onClick: t, className: ee.tierCardStack, children: m });
                      },
                  }),
        });
    },
    ed = (e) => {
        let { isReducedMotion: t, className: n } = e,
            i = (0, k.p)(),
            s =
                null != i
                    ? M.intl.format($.default["7j70dP"], {
                          percent: i.discount?.amount,
                          premiumGroupProductName: (0, J.DP)(),
                      })
                    : M.intl.string(M.t["2pG5Ga"]),
            a = (0, r.jsx)(d.$, {
                size: "md",
                fullWidth: !0,
                icon: E.t,
                text: s,
                variant: null != i ? "expressive" : "secondary",
            }),
            l = (0, r.jsx)(c.B, {
                direction: "vertical",
                gap: 0,
                className: o()(ee.tierCardStack, { [ee.premiumCardHover]: !t }),
                children: (0, r.jsx)(eu, {
                    className: o()(ee.applicationHomeCard, ee.narrow),
                    ctaButton: a,
                    isApplicationHome: !0,
                }),
            });
        return (0, r.jsx)(F.A, {
            subscriptionTier: K.pe.TIER_2,
            initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(c.B, {
                    direction: "vertical",
                    gap: 0,
                    className: o()(ee.tierCardStack, n),
                    children: (0, r.jsx)(p.D, { onClick: t, className: ee.tierCardStack, children: l }),
                });
            },
        });
    };
function e_(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, X.pw)(t),
        a = (0, u.bG)([g.Ay], () => g.Ay.useReducedMotion),
        c = (0, G.PA)();
    return (0, r.jsx)(I.f5, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: o()(ee.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ee.premiumCardsHeader,
                    children: M.intl.string(M.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: s,
                    className: ee.premiumCards,
                    children: [
                        (0, r.jsx)(ec, {
                            subscriptionTier: K.pe.TIER_0,
                            isReducedMotion: a,
                            className: ee.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, r.jsx)(ec, {
                            subscriptionTier: K.pe.TIER_2,
                            isReducedMotion: a,
                            className: ee.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, r.jsx)(ed, { isReducedMotion: a, className: ee.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
