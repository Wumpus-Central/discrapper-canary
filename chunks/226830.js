i.d(r, { jP: () => em, Rf: () => en, oK: () => ec, r6: () => ed, MR: () => es });
var t,
    a = i(627968),
    s = i(64700),
    n = i(503698),
    l = i.n(n),
    c = i(534514),
    d = i(17928),
    o = i(331322),
    u = i(821609),
    m = i(462887),
    p = i(315629),
    x = i(834730),
    h = i(939249),
    g = i(403581),
    j = i(736653),
    f = i(775602),
    N = i(793574),
    C = i(688810),
    T = i(287809),
    R = i(166403),
    v = i(428262),
    A = i(580630),
    E = i(526292),
    P = i(442123),
    _ = i(877624),
    y = i(978656),
    I = i(937008),
    b = i(807098),
    M = i(374200),
    w = i(380619),
    G = i(375708),
    S = i(756974);
function k() {
    let { claimableRewards: e } = (0, I.Pv)(),
        r = (0, d.bG)([M.A], () => {
            let e = M.A.getMarketingComponentByType(_.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, b.T)(r?.bannerAsset),
        t = (0, b.T)(r?.avatarAsset),
        s = r?.assetVariant === y.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let n = (0, w.gc)(i),
        c = r?.gradient,
        o =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, w.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, w.x)(n, o);
    return (0, a.jsxs)("div", {
        className: S.kL,
        style: u,
        children: [
            (0, a.jsxs)("div", {
                className: S.V_,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: G.intl.string(G.t.OEtqpm),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: G.intl.formatToPlainString(G.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != t &&
                (0, a.jsx)("div", {
                    className: S.R3,
                    children: (0, a.jsx)("img", {
                        alt: "gift promotion reward",
                        src: t,
                        className: l()(S.my, { [S.R_]: s }),
                    }),
                }),
        ],
    });
}
var O = i(422936),
    D = i(234419),
    B = i(862990),
    U = i(783420),
    L = i(204413),
    H = i(410516),
    F = i(774774),
    V = i(289873),
    Y = i(97352),
    W = i(795269),
    z = i(788868),
    K = i(466919),
    q = i(707259),
    Z = i(378874);
let $ = function (e) {
    let { isGift: r = !1, discountOffer: i, priceOptions: t, isApplicationHome: s = !1 } = e,
        n = (0, d.bG)([Y.A], () => Y.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, H.N1)(z.gD.PREMIUM_GROUP_MONTH),
        p = (0, m.q)((0, j.Ay)());
    if (null == n) return (0, a.jsx)(V.y, { type: V.y.Type.PULSING_ELLIPSIS, className: Z.xB });
    let h = (0, v.sS)(n, t, !1, r),
        g = z.WT.MONTH;
    if (null != i && null != u) {
        let e = i.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: l()(q.vI, { [q.oE]: s }) }),
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
                            className: q.Yc,
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: G.intl.format(K.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: s ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: G.intl.format(K.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(W.R, {
                            text: G.intl.formatToPlainString(K.default.GEwdVw, {
                                percent: i.discount.amount,
                                discountOfferAmount: i.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: l()(q.yF, { [q.oE]: s }) }),
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
                        children: ["/", (0, v.FJ)(g)],
                    }),
                ],
            }),
            (0, a.jsx)(c.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: G.intl.string(K.default["R+dzZw"]),
            }),
            (0, a.jsx)("hr", { className: q.yF }),
        ],
    });
};
var X = i(860839),
    J = i(222719),
    Q = i(88001),
    ee = i(115599),
    er = i(232266),
    ei = i(243002),
    et = i(241988);
function ea(e) {
    let { children: r, footer: i } = e;
    return null == i
        ? (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: ee.tierCardStack, children: r })
        : (0, a.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ee.tierCardStack,
              children: [
                  (0, a.jsx)(o.B, { direction: "vertical", gap: 0, className: ee.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: ee.footer, children: i }),
              ],
          });
}
function es(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
            isGift: s = !1,
            priceOptions: n,
            isApplicationHome: o = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, D.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, O.O)(),
        C = (0, O.p)(),
        v = x?.hasActiveTrial ? h?.premiumType : null,
        A = (0, F.Lj)(v, f),
        E = null != A,
        _ = (0, m.q)((0, j.Ay)()),
        { showGiftPrice: y } = P.A.useConfig({ location: "PremiumTier0Card" }),
        I = u ? G.intl.string(G.t.tUbSDK) : G.intl.string(G.t["t9uG/o"]),
        b = (0, a.jsxs)(ea, {
            footer: r,
            children: [
                E && (0, a.jsx)(W.R, { text: A, className: ee.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: _ ? "text-strong" : "always-white",
                    className: ee.cardTitle,
                    children: I,
                }),
                (!s || y) &&
                    (0, a.jsx)(J.A, {
                        isGift: s,
                        premiumTier: z.PremiumTypes.TIER_0,
                        offerType: z.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: f === z.pe.TIER_0,
                        showYearlyPrice: i,
                        priceOptions: n,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ee.priceHeader,
                    }),
                (0, a.jsx)("hr", { className: ee.divider }),
                (0, a.jsx)(X.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        M = l()(ee.card, ee.tier0, t, { [ee.pillMargin]: !o && E });
    return ((0, H.hm)(N) || null != C) && !s
        ? (0, a.jsx)("div", { className: M, children: b })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: M, children: b });
}
var en =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function el(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, H.N1)(z.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, v.y8)(z.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: ee.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: ee.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: G.intl.format(G.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: G.intl.format(G.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(W.R, { text: G.intl.formatToPlainString(G.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ec(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = X.Nz.DEFAULT,
            className: s,
            isGift: n = !1,
            isModal: o = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: C = !1,
        } = e,
        v = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        A = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        _ = (0, D.V)(),
        y = _?.subscription_trial?.sku_id,
        I = v?.hasActiveTrial ? A?.premiumType : null,
        b = v?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        M = (0, O.O)(),
        w = (0, O.p)(),
        S = (0, E.k5)(),
        B = null != y || null != I ? z.Vk.PREMIUM_TRIAL : null != M || S ? z.Vk.PREMIUM_DISCOUNT : null,
        U = (0, m.q)((0, j.Ay)()),
        L = null != w && !n,
        V = !n && null != M && (0, H.hm)(M),
        Y = !n && S && b && B === z.Vk.PREMIUM_DISCOUNT,
        K = (0, F.rm)(S, I, n ? null : M, _, y),
        { showGiftPrice: q } = P.A.useConfig({ location: "PremiumTier2Card" }),
        Z = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(k, {})] }) : null,
        $ = (0, a.jsxs)(ea, {
            footer: Z,
            children: [
                f &&
                    !L &&
                    !Y &&
                    (0, a.jsx)(
                        () =>
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !V &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)("img", {
                                                    src: ei,
                                                    alt: "",
                                                    className: l()(ee.bigCloud, ee[h]),
                                                }),
                                                (0, a.jsx)("img", {
                                                    src: er,
                                                    alt: "",
                                                    className: l()(ee.smallCloud, ee[h]),
                                                }),
                                            ],
                                        }),
                                    (!V || null != r) &&
                                        (0, a.jsx)("img", {
                                            src: et,
                                            alt: "",
                                            className: l()(ee.wumpus, ee[h], {
                                                [ee.withAnnualDiscountBanner]: V,
                                                [ee.noGiftPrice]: n && !q,
                                            }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                N && !V && (0, a.jsx)(W.R, { text: K ?? G.intl.string(G.t["6bEcYr"]), className: ee.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: U ? "text-strong" : "always-white",
                    className: ee.cardTitle,
                    children: G.intl.string(G.t.lG6a5x),
                }),
                (!n || q) &&
                    (0, a.jsx)(J.A, {
                        isGift: n,
                        premiumTier: z.PremiumTypes.TIER_2,
                        offerType: B,
                        offerTierMatchesCard: y === z.pe.TIER_2 || (0, H.U9)(M, z.pe.TIER_2),
                        showYearlyPrice: i && !V,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ee.priceHeader,
                    }),
                V
                    ? (0, a.jsx)(el, { discountOffer: M, priceOptions: u, isGift: n, narrowLayout: C })
                    : (0, a.jsx)("hr", { className: ee.divider }),
                (0, a.jsx)(X.ZP, {
                    featureSet: t,
                    isModal: o,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        V || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ee.firstFeatureItemContainer,
                }),
            ],
        }),
        Q = l()(ee.card, s, { [ee.withGiftBanner]: x });
    return L
        ? (0, a.jsx)("div", { className: Q, children: $ })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: Q, children: $ });
}
function ed(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        n = (0, m.q)((0, j.Ay)()),
        d = (0, O.p)(),
        o = (0, a.jsxs)(ea, {
            footer: i,
            children: [
                (0, a.jsxs)("div", {
                    className: ee.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "always-white",
                            className: ee.cardTitle,
                            children: G.intl.string(K.default.eSKiXk),
                        }),
                        (0, a.jsx)(W.R, {
                            text: G.intl.string(G.t.oW0eUd),
                            className: ee.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, a.jsx)($, { discountOffer: d, priceOptions: s, isApplicationHome: t }),
                (0, a.jsx)(X.Lg, { isApplicationHome: t }),
            ],
        });
    return null != d
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: l()(ee.card, r), children: o })
        : (0, a.jsx)("div", { className: l()(ee.card, ee.borderGradient, r), children: o });
}
let eo = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: s, narrowLayout: n } = e,
            c = r === z.pe.TIER_2,
            d = (0, O.p)(),
            { subscribeButtonProps: m, subscriptionTier: p } = (0, L.$)({
                subscriptionTier: r,
                variantOverride: c && null == d ? "expressive" : "secondary",
            }),
            { disabled: x } = m,
            g = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
            j = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: l()(ee.tierCardStack, { [ee.premiumCardHover]: !i }),
                children: (0, a.jsx)(c ? ec : es, {
                    className: l()(ee.applicationHomeCard, { [ee.narrow]: n }),
                    ctaButton: g,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
                }),
            });
        return (0, a.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: l()(ee.tierCardStack, s),
            children: x
                ? j
                : (0, a.jsx)(U.A, {
                      subscriptionTier: p,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, a.jsx)(h.D, { onClick: r, className: ee.tierCardStack, children: j });
                      },
                  }),
        });
    },
    eu = (e) => {
        let { isReducedMotion: r, className: i } = e,
            t = (0, O.p)(),
            s =
                null != t
                    ? G.intl.format(K.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, Q.DP)(),
                      })
                    : G.intl.string(G.t["2pG5Ga"]),
            n = (0, a.jsx)(u.$, {
                size: "md",
                fullWidth: !0,
                icon: g.t,
                text: s,
                variant: null != t ? "expressive" : "secondary",
            }),
            c = (0, a.jsx)(o.B, {
                direction: "vertical",
                gap: 0,
                className: l()(ee.tierCardStack, { [ee.premiumCardHover]: !r }),
                children: (0, a.jsx)(ed, {
                    className: l()(ee.applicationHomeCard, ee.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, a.jsx)(U.A, {
            subscriptionTier: z.pe.TIER_2,
            initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: r } = e;
                return (0, a.jsx)(o.B, {
                    direction: "vertical",
                    gap: 0,
                    className: l()(ee.tierCardStack, i),
                    children: (0, a.jsx)(h.D, { onClick: r, className: ee.tierCardStack, children: c }),
                });
            },
        });
    };
function em(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, X.pw)(r),
        n = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        o = (0, B.PA)();
    return (0, a.jsx)(C.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: l()(ee.premiumCardsContainer, i),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ee.premiumCardsHeader,
                    children: G.intl.string(G.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: ee.premiumCards,
                    children: [
                        (0, a.jsx)(eo, {
                            subscriptionTier: z.pe.TIER_0,
                            isReducedMotion: n,
                            className: ee.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, a.jsx)(eo, {
                            subscriptionTier: z.pe.TIER_2,
                            isReducedMotion: n,
                            className: ee.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, a.jsx)(eu, { isReducedMotion: n, className: ee.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
