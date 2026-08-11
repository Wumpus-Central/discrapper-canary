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
    j = t(736653),
    f = t(775602),
    N = t(793574),
    v = t(688810),
    C = t(287809),
    T = t(166403),
    R = t(158045),
    A = t(580630),
    E = t(526292),
    y = t(877624),
    _ = t(978656),
    P = t(951305),
    I = t(807098),
    b = t(528464),
    M = t(380619),
    S = t(375708),
    k = t(197350);
function G() {
    let { claimableRewards: e } = (0, P.Pv)(),
        r = (0, o.bG)([b.A], () => {
            let e = b.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, I.T)(r?.bannerAsset),
        i = (0, I.T)(r?.avatarAsset),
        l = r?.assetVariant === _.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, M.gc)(t),
        c = r?.gradient,
        d =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, M.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, M.x)(a, d);
    return (0, n.jsxs)("div", {
        className: k.kL,
        style: u,
        children: [
            (0, n.jsxs)("div", {
                className: k.V_,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: S.intl.string(S.t.OEtqpm),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: S.intl.formatToPlainString(S.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: k.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(k.my, { [k.R_]: l }),
                    }),
                }),
        ],
    });
}
var D = t(724651),
    B = t(732280),
    O = t(862990),
    U = t(35587),
    w = t(783420),
    L = t(204413),
    H = t(511484),
    F = t(774774),
    V = t(289873),
    Y = t(97352),
    K = t(795269),
    z = t(202541),
    W = t(466919),
    q = t(184659),
    $ = t(268514);
let Z = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: l = !1 } = e,
        a = (0, o.bG)([Y.A], () => Y.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, H.N1)(z.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, j.Ay)());
    if (null == a) return (0, n.jsx)(V.y, { type: V.y.Type.PULSING_ELLIPSIS, className: $.xB });
    let h = (0, R.sS)(a, i, !1, r),
        g = z.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.intervalCount;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("hr", { className: s()(q.vI, { [q.oE]: l }) }),
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
                            className: q.Yc,
                            children: [
                                (0, n.jsx)(c.D, {
                                    variant: l ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: S.intl.format(W.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: l ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: S.intl.format(W.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(K.R, {
                            text: S.intl.formatToPlainString(W.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("hr", { className: s()(q.yF, { [q.oE]: l }) }),
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
                        children: ["/", (0, R.FJ)(g)],
                    }),
                ],
            }),
            (0, n.jsx)(c.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: S.intl.string(W.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: q.yF }),
        ],
    });
};
var X = t(860839),
    J = t(824069),
    Q = t(222719),
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
        p = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        g = (0, B.V)(),
        f = g?.subscription_trial?.sku_id,
        N = p?.hasActiveTrial ? h?.premiumType : null,
        v = (0, F.Lj)(N, f),
        R = null != v,
        A = (0, m.q)((0, j.Ay)()),
        E = u ? S.intl.string(S.t.tUbSDK) : S.intl.string(S.t["t9uG/o"]),
        y = (0, n.jsxs)(el, {
            footer: r,
            children: [
                R && (0, n.jsx)(K.R, { text: v, className: er.pill }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: er.cardTitle,
                    children: E,
                }),
                (0, n.jsx)(Q.A, {
                    isGift: l,
                    premiumTier: z.PremiumTypes.TIER_0,
                    offerType: z.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === z.pe.TIER_0,
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
        _ = s()(er.card, er.tier0, i, { [er.pillMargin]: !d && R });
    return l
        ? (0, n.jsx)(x.h, { color: "nitro-green", className: _, children: y })
        : (0, n.jsx)("div", { className: _, children: y });
}
var es =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ec(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, H.N1)(z.gD.PREMIUM_YEAR_TIER_2),
        c = l.useMemo(() => {
            try {
                let e = (0, R.y8)(z.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, A.$g)(e.amount, e.currency);
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
                              children: S.intl.format(S.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: S.intl.format(S.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(K.R, { text: S.intl.formatToPlainString(S.t.v5WSns, { percent: r.discount.amount }) }),
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
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        R = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        A = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        y = (0, B.V)(),
        _ = y?.subscription_trial?.sku_id,
        P = R?.hasActiveTrial ? A?.premiumType : null,
        I = R?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        b = (0, D.O)(),
        M = (0, D.p)(),
        k = (0, E.k5)(),
        O = null != _ || null != P ? z.Vk.PREMIUM_TRIAL : null != b || k ? z.Vk.PREMIUM_DISCOUNT : null,
        w = (0, m.q)((0, j.Ay)()),
        L = null != M && !a,
        V = !a && null != b && (0, H.hm)(b),
        Y = !a && k && I && O === z.Vk.PREMIUM_DISCOUNT,
        W = (0, F.rm)(k, P, a ? null : b, y, _),
        q = (0, U.Sq)() && !a && null == O,
        $ = null != r || p ? (0, n.jsxs)(n.Fragment, { children: [r, p && (0, n.jsx)(G, {})] }) : null,
        Z = d && !a,
        ee = (0, n.jsxs)(el, {
            footer: $,
            children: [
                f &&
                    !L &&
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
                N &&
                    !V &&
                    (0, n.jsx)(K.R, {
                        text:
                            W ??
                            (q
                                ? S.intl.formatToPlainString(S.t["4SEnCZ"], { months: 1 })
                                : S.intl.string(S.t["6bEcYr"])),
                        className: er.pill,
                    }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: w ? "text-strong" : "text-overlay-light",
                    className: er.cardTitle,
                    children: S.intl.string(S.t.lG6a5x),
                }),
                (0, n.jsx)(Q.A, {
                    isGift: a,
                    premiumTier: z.PremiumTypes.TIER_2,
                    offerType: O,
                    offerTierMatchesCard: _ === z.pe.TIER_2 || (0, H.U9)(b, z.pe.TIER_2),
                    showYearlyPrice: t && !V,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: er.priceHeader,
                }),
                V
                    ? (0, n.jsx)(ec, { discountOffer: b, priceOptions: u, isGift: a, narrowLayout: v })
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
                Z && (0, n.jsx)(J.K, {}),
            ],
        }),
        ea = s()(er.card, l, { [er.withGiftBanner]: p });
    return L
        ? (0, n.jsx)("div", { className: ea, children: ee })
        : (0, n.jsx)(x.h, { color: "nitro-pink", className: ea, children: ee });
}
function ed(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, j.Ay)()),
        o = (0, D.p)(),
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
                            children: S.intl.string(W.default.eSKiXk),
                        }),
                        (0, n.jsx)(K.R, {
                            text: S.intl.string(S.t.oW0eUd),
                            className: er.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, n.jsx)(Z, { discountOffer: o, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(X.Lg, { isApplicationHome: i }),
            ],
        });
    return null != o
        ? (0, n.jsx)(x.h, { color: "nitro-pink", className: s()(er.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(er.card, er.borderGradient, r), children: d });
}
function eu(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        c = r === z.pe.TIER_2,
        o = (0, D.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, L.$)({
            subscriptionTier: r,
            variantOverride: c && null == o ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, n.jsx)(d.B, {
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
            ? j
            : (0, n.jsx)(w.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: er.tierCardStack, children: j });
                  },
              }),
    });
}
function em(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, D.p)(),
        l =
            null != i
                ? S.intl.format(W.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, ee.DP)(),
                  })
                : S.intl.string(S.t["2pG5Ga"]),
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
    return (0, n.jsx)(w.A, {
        subscriptionTier: z.pe.TIER_2,
        initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
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
        { analyticsLocations: i } = (0, v.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, X.pw)(r),
        a = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, O.PA)();
    return (0, n.jsx)(v.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(er.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: er.premiumCardsHeader,
                    children: S.intl.string(S.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: er.premiumCards,
                    children: [
                        (0, n.jsx)(eu, {
                            subscriptionTier: z.pe.TIER_0,
                            isReducedMotion: a,
                            className: er.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(eu, {
                            subscriptionTier: z.pe.TIER_2,
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
