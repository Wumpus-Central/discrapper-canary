t.d(r, { jP: () => ex, Rf: () => es, oK: () => eo, r6: () => ed, MR: () => ea });
var i,
    n = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    c = t(297264),
    o = t(17928),
    d = t(331322),
    u = t(821609),
    m = t(462887),
    x = t(315629),
    p = t(834730),
    h = t(939249),
    g = t(403581),
    f = t(736653),
    N = t(775602),
    j = t(793574),
    T = t(688810),
    _ = t(287809),
    v = t(166403),
    A = t(158045),
    C = t(580630),
    E = t(526292),
    R = t(877624),
    y = t(978656),
    M = t(951305),
    S = t(807098),
    O = t(616431),
    I = t(380619),
    P = t(375708),
    b = t(197350);
function U() {
    let { claimableRewards: e } = (0, M.Pv)(),
        r = (0, o.bG)([O.A], () => {
            let e = O.A.getMarketingComponentByType(R.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, S.T)(r?.bannerAsset),
        i = (0, S.T)(r?.avatarAsset),
        l = r?.assetVariant === y.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, I.gc)(t),
        c = r?.gradient,
        d =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, I.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, I.x)(a, d);
    return (0, n.jsxs)("div", {
        className: b.kL,
        style: u,
        children: [
            (0, n.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: P.intl.string(P.t.OEtqpm),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: P.intl.formatToPlainString(P.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: b.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(b.my, { [b.R_]: l }),
                    }),
                }),
        ],
    });
}
var k = t(724651),
    L = t(732280),
    B = t(862990),
    D = t(35587),
    G = t(783420),
    F = t(204413),
    H = t(511484),
    w = t(774774),
    V = t(289873),
    Y = t(97352),
    q = t(795269),
    W = t(202541),
    z = t(466919),
    K = t(184659),
    Z = t(268514);
let $ = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: l = !1 } = e,
        a = (0, o.bG)([Y.A], () => Y.A.get(W.gD.PREMIUM_GROUP_MONTH)),
        u = (0, H.N1)(W.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, f.Ay)());
    if (null == a) return (0, n.jsx)(V.y, { type: V.y.Type.PULSING_ELLIPSIS, className: Z.xB });
    let h = (0, A.sS)(a, i, !1, r),
        g = W.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.userUsageLimit;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("hr", { className: s()(K.vI, { [K.oE]: l }) }),
                (0, n.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, n.jsxs)(d.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: K.Yc,
                            children: [
                                (0, n.jsx)(c.D, {
                                    variant: l ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: P.intl.format(z.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: l ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: P.intl.format(z.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(q.R, {
                            text: P.intl.formatToPlainString(z.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("hr", { className: s()(K.yF, { [K.oE]: l }) }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "heading-xxl/extrabold",
                        color: x ? "text-strong" : "text-overlay-light",
                        tag: "span",
                        children: h,
                    }),
                    (0, n.jsxs)(p.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, A.FJ)(g)],
                    }),
                ],
            }),
            (0, n.jsx)(c.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: P.intl.string(z.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: K.yF }),
        ],
    });
};
var X = t(860839),
    Q = t(824069),
    J = t(222719),
    ee = t(88001),
    er = t(984295),
    et = t(232266),
    ei = t(243002),
    en = t(241988);
function el(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: er.tierCardStack, children: r })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: er.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: er.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: er.footer, children: t }),
              ],
          });
}
function ea(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        p = (0, o.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        g = (0, L.V)(),
        N = g?.subscription_trial?.sku_id,
        j = p?.hasActiveTrial ? h?.premiumType : null,
        T = (0, w.Lj)(j, N),
        A = null != T,
        C = (0, m.q)((0, f.Ay)()),
        E = u ? P.intl.string(P.t.tUbSDK) : P.intl.string(P.t["t9uG/o"]),
        R = (0, n.jsxs)(el, {
            footer: r,
            children: [
                A && (0, n.jsx)(q.R, { text: T, className: er.pill }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: C ? "text-strong" : "text-overlay-light",
                    className: er.cardTitle,
                    children: E,
                }),
                (0, n.jsx)(J.A, {
                    isGift: l,
                    premiumTier: W.PremiumTypes.TIER_0,
                    offerType: W.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: N === W.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: er.priceHeader,
                }),
                (0, n.jsx)("hr", { className: er.divider }),
                (0, n.jsx)(X.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        y = s()(er.card, er.tier0, i, { [er.pillMargin]: !d && A });
    return l
        ? (0, n.jsx)(x.h, { color: "nitro-green", className: y, children: R })
        : (0, n.jsx)("div", { className: y, children: R });
}
var es =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ec(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, H.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        c = l.useMemo(() => {
            try {
                let e = (0, A.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == c
        ? null
        : (0, n.jsxs)("div", {
              className: er.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: er.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: P.intl.format(P.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: P.intl.format(P.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(q.R, { text: P.intl.formatToPlainString(P.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function eo(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = X.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: N = !0,
            showPill: j = !0,
            narrowLayout: T = !1,
        } = e,
        A = (0, o.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        C = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        R = (0, L.V)(),
        y = R?.subscription_trial?.sku_id,
        M = A?.hasActiveTrial ? C?.premiumType : null,
        S = A?.planIdFromItems === W.gD.PREMIUM_YEAR_TIER_2,
        O = (0, k.O)(),
        I = (0, k.p)(),
        b = (0, E.k5)(),
        B = null != y || null != M ? W.Vk.PREMIUM_TRIAL : null != O || b ? W.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, f.Ay)()),
        F = null != I && !a,
        V = !a && null != O && (0, H.hm)(O),
        Y = !a && b && S && B === W.Vk.PREMIUM_DISCOUNT,
        z = (0, w.rm)(b, M, a ? null : O, R, y),
        K = (0, D.Sq)() && !a && null == B,
        Z = null != r || p ? (0, n.jsxs)(n.Fragment, { children: [r, p && (0, n.jsx)(U, {})] }) : null,
        $ = d && !a,
        ee = (0, n.jsxs)(el, {
            footer: Z,
            children: [
                N &&
                    !F &&
                    !Y &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !V &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: ei, alt: "", className: s()(er.bigCloud, er[h]) }),
                                            (0, n.jsx)("img", {
                                                src: et,
                                                alt: "",
                                                className: s()(er.smallCloud, er[h]),
                                            }),
                                        ],
                                    }),
                                (!V || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: en,
                                        alt: "",
                                        className: s()(er.wumpus, er[h], { [er.withAnnualDiscountBanner]: V }),
                                    }),
                            ],
                        });
                    }, {}),
                j &&
                    !V &&
                    (0, n.jsx)(q.R, {
                        text:
                            z ??
                            (K
                                ? P.intl.formatToPlainString(P.t["4SEnCZ"], { months: 1 })
                                : P.intl.string(P.t["6bEcYr"])),
                        className: er.pill,
                    }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: er.cardTitle,
                    children: P.intl.string(P.t.lG6a5x),
                }),
                (0, n.jsx)(J.A, {
                    isGift: a,
                    premiumTier: W.PremiumTypes.TIER_2,
                    offerType: B,
                    offerTierMatchesCard: y === W.pe.TIER_2 || (0, H.U9)(O, W.pe.TIER_2),
                    showYearlyPrice: t && !V,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: er.priceHeader,
                }),
                V
                    ? (0, n.jsx)(ec, { discountOffer: O, priceOptions: u, isGift: a, narrowLayout: T })
                    : (0, n.jsx)("hr", { className: er.divider }),
                (0, n.jsx)(X.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        V || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : er.firstFeatureItemContainer,
                }),
                $ && (0, n.jsx)(Q.K, {}),
            ],
        }),
        ea = s()(er.card, l, { [er.withGiftBanner]: p });
    return F
        ? (0, n.jsx)("div", { className: ea, children: ee })
        : (0, n.jsx)(x.h, { color: "nitro-pink", className: ea, children: ee });
}
function ed(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, f.Ay)()),
        o = (0, k.p)(),
        d = (0, n.jsxs)(el, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: er.cardHeader,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: er.cardTitle,
                            children: P.intl.string(z.default.eSKiXk),
                        }),
                        (0, n.jsx)(q.R, {
                            text: P.intl.string(P.t.oW0eUd),
                            className: er.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, n.jsx)($, { discountOffer: o, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(X.Lg, { isApplicationHome: i }),
            ],
        });
    return null != o
        ? (0, n.jsx)(x.h, { color: "nitro-pink", className: s()(er.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(er.card, er.borderGradient, r), children: d });
}
function eu(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        c = r === W.pe.TIER_2,
        o = (0, k.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, F.$)({
            subscriptionTier: r,
            variantOverride: c && null == o ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        f = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(er.tierCardStack, { [er.premiumCardHover]: !t }),
            children: (0, n.jsx)(c ? eo : ea, {
                className: s()(er.applicationHomeCard, { [er.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(er.tierCardStack, l),
        children: p
            ? f
            : (0, n.jsx)(G.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: er.tierCardStack, children: f });
                  },
              }),
    });
}
function em(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, k.p)(),
        l =
            null != i
                ? P.intl.format(z.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, ee.DP)(),
                  })
                : P.intl.string(P.t["2pG5Ga"]),
        a = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: l,
            variant: null != i ? "expressive" : "secondary",
        }),
        c = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(er.tierCardStack, { [er.premiumCardHover]: !r }),
            children: (0, n.jsx)(ed, {
                className: s()(er.applicationHomeCard, er.narrow),
                ctaButton: a,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(G.A, {
        subscriptionTier: W.pe.TIER_2,
        initialPlanId: W.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, n.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: s()(er.tierCardStack, t),
                children: (0, n.jsx)(h.D, { onClick: r, className: er.tierCardStack, children: c }),
            });
        },
    });
}
function ex(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, T.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, X.pw)(r),
        a = (0, o.bG)([N.Ay], () => N.Ay.useReducedMotion),
        d = (0, B.PA)();
    return (0, n.jsx)(T.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(er.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: er.premiumCardsHeader,
                    children: P.intl.string(P.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: er.premiumCards,
                    children: [
                        (0, n.jsx)(eu, {
                            subscriptionTier: W.pe.TIER_0,
                            isReducedMotion: a,
                            className: er.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(eu, {
                            subscriptionTier: W.pe.TIER_2,
                            isReducedMotion: a,
                            className: er.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(em, { isReducedMotion: a, className: er.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
