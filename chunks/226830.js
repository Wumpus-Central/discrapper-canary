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
    T = i(688810),
    C = i(287809),
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
    O = i(375708),
    G = i(756974);
function S() {
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
        className: G.kL,
        style: u,
        children: [
            (0, a.jsxs)("div", {
                className: G.V_,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: O.intl.string(O.t.OEtqpm),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: O.intl.formatToPlainString(O.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != t &&
                (0, a.jsx)("div", {
                    className: G.R3,
                    children: (0, a.jsx)("img", {
                        alt: "gift promotion reward",
                        src: t,
                        className: l()(G.my, { [G.R_]: s }),
                    }),
                }),
        ],
    });
}
var D = i(422936),
    k = i(234419),
    U = i(862990),
    B = i(783420),
    L = i(204413),
    H = i(410516),
    F = i(774774),
    V = i(289873),
    Y = i(97352),
    W = i(795269),
    z = i(788868),
    K = i(466919),
    $ = i(707259),
    q = i(378874);
let Z = function (e) {
    let { isGift: r = !1, discountOffer: i, priceOptions: t, isApplicationHome: s = !1 } = e,
        n = (0, d.bG)([Y.A], () => Y.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, H.N1)(z.gD.PREMIUM_GROUP_MONTH),
        p = (0, m.q)((0, j.Ay)());
    if (null == n) return (0, a.jsx)(V.y, { type: V.y.Type.PULSING_ELLIPSIS, className: q.xB });
    let h = (0, v.sS)(n, t, !1, r),
        g = z.WT.MONTH;
    if (null != i && null != u) {
        let e = i.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: l()($.vI, { [$.oE]: s }) }),
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
                            className: $.Yc,
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: O.intl.format(K.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: s ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: O.intl.format(K.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(W.R, {
                            text: O.intl.formatToPlainString(K.default.GEwdVw, {
                                percent: i.discount.amount,
                                discountOfferAmount: i.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: l()($.yF, { [$.oE]: s }) }),
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
                children: O.intl.string(K.default["R+dzZw"]),
            }),
            (0, a.jsx)("hr", { className: $.yF }),
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
        h = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        g = (0, k.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, D.O)(),
        T = (0, D.p)(),
        v = x?.hasActiveTrial ? h?.premiumType : null,
        A = (0, F.Lj)(v, f),
        E = null != A,
        _ = (0, m.q)((0, j.Ay)()),
        { showGiftPrice: y } = P.A.useConfig({ location: `PremiumTier0Card${s ? "" : " - DO NOT USE"}` }),
        I = u ? O.intl.string(O.t.tUbSDK) : O.intl.string(O.t["t9uG/o"]),
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
    return ((0, H.hm)(N) || null != T) && !s
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
                              children: O.intl.format(O.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: O.intl.format(O.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(W.R, { text: O.intl.formatToPlainString(O.t.v5WSns, { percent: r.discount.amount }) }),
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
            narrowLayout: T = !1,
        } = e,
        v = (0, d.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        A = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        _ = (0, k.V)(),
        y = _?.subscription_trial?.sku_id,
        I = v?.hasActiveTrial ? A?.premiumType : null,
        b = v?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        M = (0, D.O)(),
        w = (0, D.p)(),
        G = (0, E.k5)(),
        U = null != y || null != I ? z.Vk.PREMIUM_TRIAL : null != M || G ? z.Vk.PREMIUM_DISCOUNT : null,
        B = (0, m.q)((0, j.Ay)()),
        L = null != w && !n,
        V = !n && null != M && (0, H.hm)(M),
        Y = !n && G && b && U === z.Vk.PREMIUM_DISCOUNT,
        K = (0, F.rm)(G, I, n ? null : M, _, y),
        { showGiftPrice: $ } = P.A.useConfig({ location: `PremiumTier2Card${n ? "" : " - DO NOT USE"}` }),
        q = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(S, {})] }) : null,
        Z = (0, a.jsxs)(ea, {
            footer: q,
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
                                                [ee.noGiftPrice]: n && !$,
                                            }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                N && !V && (0, a.jsx)(W.R, { text: K ?? O.intl.string(O.t["6bEcYr"]), className: ee.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: B ? "text-strong" : "always-white",
                    className: ee.cardTitle,
                    children: O.intl.string(O.t.lG6a5x),
                }),
                (!n || $) &&
                    (0, a.jsx)(J.A, {
                        isGift: n,
                        premiumTier: z.PremiumTypes.TIER_2,
                        offerType: U,
                        offerTierMatchesCard: y === z.pe.TIER_2 || (0, H.U9)(M, z.pe.TIER_2),
                        showYearlyPrice: i && !V,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ee.priceHeader,
                    }),
                V
                    ? (0, a.jsx)(el, { discountOffer: M, priceOptions: u, isGift: n, narrowLayout: T })
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
        ? (0, a.jsx)("div", { className: Q, children: Z })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: Q, children: Z });
}
function ed(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        n = (0, m.q)((0, j.Ay)()),
        d = (0, D.p)(),
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
                            children: O.intl.string(K.default.eSKiXk),
                        }),
                        (0, a.jsx)(W.R, {
                            text: O.intl.string(O.t.oW0eUd),
                            className: ee.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, a.jsx)(Z, { discountOffer: d, priceOptions: s, isApplicationHome: t }),
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
            d = (0, D.p)(),
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
                : (0, a.jsx)(B.A, {
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
            t = (0, D.p)(),
            s =
                null != t
                    ? O.intl.format(K.default["7j70dP"], {
                          percent: t.discount?.amount,
                          premiumGroupProductName: (0, Q.DP)(),
                      })
                    : O.intl.string(O.t["2pG5Ga"]),
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
        return (0, a.jsx)(B.A, {
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
        { analyticsLocations: t } = (0, T.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, X.pw)(r),
        n = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        o = (0, U.PA)();
    return (0, a.jsx)(T.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: l()(ee.premiumCardsContainer, i),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ee.premiumCardsHeader,
                    children: O.intl.string(O.t.vLz3Zs),
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
