t.d(r, { jP: () => ep, Rf: () => ec, oK: () => ed, r6: () => eu, MR: () => es });
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
    T = t(793574),
    j = t(688810),
    C = t(287809),
    A = t(166403),
    _ = t(158045),
    v = t(580630),
    E = t(526292),
    R = t(664504),
    y = t(877624),
    O = t(978656),
    M = t(951305),
    S = t(807098),
    P = t(412260),
    I = t(380619),
    b = t(375708),
    U = t(197350);
function k() {
    let { claimableRewards: e } = (0, M.Pv)(),
        r = (0, o.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, S.T)(r?.bannerAsset),
        i = (0, S.T)(r?.avatarAsset),
        l = r?.assetVariant === O.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, I.gc)(t),
        c = r?.gradient,
        d =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, I.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        u = (0, I.x)(a, d);
    return (0, n.jsxs)("div", {
        className: U.kL,
        style: u,
        children: [
            (0, n.jsxs)("div", {
                className: U.V_,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: b.intl.string(b.t.OEtqpm),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: b.intl.formatToPlainString(b.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: U.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(U.my, { [U.R_]: l }),
                    }),
                }),
        ],
    });
}
var D = t(724651),
    G = t(732280),
    L = t(862990),
    B = t(35587),
    F = t(783420),
    H = t(204413),
    w = t(511484),
    V = t(774774),
    Y = t(289873),
    q = t(97352),
    W = t(795269),
    z = t(202541),
    K = t(466919),
    $ = t(184659),
    Z = t(268514);
let X = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: l = !1 } = e,
        a = (0, o.bG)([q.A], () => q.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, w.N1)(z.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, f.Ay)());
    if (null == a) return (0, n.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS, className: Z.xB });
    let h = (0, _.sS)(a, i, !1, r),
        g = z.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.userUsageLimit;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("hr", { className: s()($.vI, { [$.oE]: l }) }),
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
                            className: $.Yc,
                            children: [
                                (0, n.jsx)(c.D, {
                                    variant: l ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: b.intl.format(K.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: l ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: b.intl.format(K.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(W.R, {
                            text: b.intl.formatToPlainString(K.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("hr", { className: s()($.yF, { [$.oE]: l }) }),
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
                        children: ["/", (0, _.FJ)(g)],
                    }),
                ],
            }),
            (0, n.jsx)(c.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: b.intl.string(K.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: $.yF }),
        ],
    });
};
var Q = t(860839),
    J = t(824069),
    ee = t(765516),
    er = t(88001),
    et = t(984295),
    ei = t(232266),
    en = t(243002),
    el = t(241988);
function ea(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: et.tierCardStack, children: r })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: et.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: et.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: et.footer, children: t }),
              ],
          });
}
function es(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        p = (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        g = (0, G.V)(),
        N = g?.subscription_trial?.sku_id,
        T = p?.hasActiveTrial ? h?.premiumType : null,
        j = (0, V.Lj)(T, N),
        _ = null != j,
        v = (0, m.q)((0, f.Ay)()),
        { showGiftPrice: E } = R.A.useConfig({ location: `PremiumTier0Card${l ? "" : " - DO NOT USE"}` }),
        y = u ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t["t9uG/o"]),
        O = (0, n.jsxs)(ea, {
            footer: r,
            children: [
                _ && (0, n.jsx)(W.R, { text: j, className: et.pill }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: v ? "text-strong" : "text-overlay-light",
                    className: et.cardTitle,
                    children: y,
                }),
                (!l || E) &&
                    (0, n.jsx)(ee.A, {
                        isGift: l,
                        premiumTier: z.PremiumTypes.TIER_0,
                        offerType: z.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: N === z.pe.TIER_0,
                        showYearlyPrice: t,
                        priceOptions: a,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: et.priceHeader,
                    }),
                (0, n.jsx)("hr", { className: et.divider }),
                (0, n.jsx)(Q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        M = s()(et.card, et.tier0, i, { [et.pillMargin]: !d && _ });
    return l
        ? (0, n.jsx)(x.h, { color: "nitro-green", className: M, children: O })
        : (0, n.jsx)("div", { className: M, children: O });
}
var ec =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function eo(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, w.N1)(z.gD.PREMIUM_YEAR_TIER_2),
        c = l.useMemo(() => {
            try {
                let e = (0, _.y8)(z.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == c
        ? null
        : (0, n.jsxs)("div", {
              className: et.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: et.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: b.intl.format(b.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: b.intl.format(b.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(W.R, { text: b.intl.formatToPlainString(b.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ed(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = Q.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: N = !0,
            showPill: T = !0,
            narrowLayout: j = !1,
        } = e,
        _ = (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        v = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        y = (0, G.V)(),
        O = y?.subscription_trial?.sku_id,
        M = _?.hasActiveTrial ? v?.premiumType : null,
        S = _?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        P = (0, D.O)(),
        I = (0, D.p)(),
        U = (0, E.k5)(),
        L = null != O || null != M ? z.Vk.PREMIUM_TRIAL : null != P || U ? z.Vk.PREMIUM_DISCOUNT : null,
        F = (0, m.q)((0, f.Ay)()),
        H = null != I && !a,
        Y = !a && null != P && (0, w.hm)(P),
        q = !a && U && S && L === z.Vk.PREMIUM_DISCOUNT,
        K = (0, V.rm)(U, M, a ? null : P, y, O),
        $ = (0, B.Sq)() && !a && null == L,
        { showGiftPrice: Z } = R.A.useConfig({ location: `PremiumTier2Card${a ? "" : " - DO NOT USE"}` }),
        X = null != r || p ? (0, n.jsxs)(n.Fragment, { children: [r, p && (0, n.jsx)(k, {})] }) : null,
        er = d && !a,
        es = (0, n.jsxs)(ea, {
            footer: X,
            children: [
                N &&
                    !H &&
                    !q &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !Y &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: en, alt: "", className: s()(et.bigCloud, et[h]) }),
                                            (0, n.jsx)("img", {
                                                src: ei,
                                                alt: "",
                                                className: s()(et.smallCloud, et[h]),
                                            }),
                                        ],
                                    }),
                                (!Y || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: el,
                                        alt: "",
                                        className: s()(et.wumpus, et[h], {
                                            [et.withAnnualDiscountBanner]: Y,
                                            [et.noGiftPrice]: a && !Z,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                T &&
                    !Y &&
                    (0, n.jsx)(W.R, {
                        text:
                            K ??
                            ($
                                ? b.intl.formatToPlainString(b.t["4SEnCZ"], { months: 1 })
                                : b.intl.string(b.t["6bEcYr"])),
                        className: et.pill,
                    }),
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: F ? "text-strong" : "text-overlay-light",
                    className: et.cardTitle,
                    children: b.intl.string(b.t.lG6a5x),
                }),
                (!a || Z) &&
                    (0, n.jsx)(ee.A, {
                        isGift: a,
                        premiumTier: z.PremiumTypes.TIER_2,
                        offerType: L,
                        offerTierMatchesCard: O === z.pe.TIER_2 || (0, w.U9)(P, z.pe.TIER_2),
                        showYearlyPrice: t && !Y,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: et.priceHeader,
                    }),
                Y
                    ? (0, n.jsx)(eo, { discountOffer: P, priceOptions: u, isGift: a, narrowLayout: j })
                    : (0, n.jsx)("hr", { className: et.divider }),
                (0, n.jsx)(Q.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        Y || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : et.firstFeatureItemContainer,
                }),
                er && (0, n.jsx)(J.K, {}),
            ],
        }),
        ec = s()(et.card, l, { [et.withGiftBanner]: p });
    return H
        ? (0, n.jsx)("div", { className: ec, children: es })
        : (0, n.jsx)(x.h, { color: "nitro-pink", className: ec, children: es });
}
function eu(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, f.Ay)()),
        o = (0, D.p)(),
        d = (0, n.jsxs)(ea, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: et.cardHeader,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: et.cardTitle,
                            children: b.intl.string(K.default.eSKiXk),
                        }),
                        (0, n.jsx)(W.R, {
                            text: b.intl.string(b.t.oW0eUd),
                            className: et.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, n.jsx)(X, { discountOffer: o, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(Q.Lg, { isApplicationHome: i }),
            ],
        });
    return null != o
        ? (0, n.jsx)(x.h, { color: "nitro-pink", className: s()(et.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(et.card, et.borderGradient, r), children: d });
}
function em(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        c = r === z.pe.TIER_2,
        o = (0, D.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, H.$)({
            subscriptionTier: r,
            variantOverride: c && null == o ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        f = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(et.tierCardStack, { [et.premiumCardHover]: !t }),
            children: (0, n.jsx)(c ? ed : es, {
                className: s()(et.applicationHomeCard, { [et.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(et.tierCardStack, l),
        children: p
            ? f
            : (0, n.jsx)(F.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: et.tierCardStack, children: f });
                  },
              }),
    });
}
function ex(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, D.p)(),
        l =
            null != i
                ? b.intl.format(K.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, er.DP)(),
                  })
                : b.intl.string(b.t["2pG5Ga"]),
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
            className: s()(et.tierCardStack, { [et.premiumCardHover]: !r }),
            children: (0, n.jsx)(eu, {
                className: s()(et.applicationHomeCard, et.narrow),
                ctaButton: a,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(F.A, {
        subscriptionTier: z.pe.TIER_2,
        initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, n.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: s()(et.tierCardStack, t),
                children: (0, n.jsx)(h.D, { onClick: r, className: et.tierCardStack, children: c }),
            });
        },
    });
}
function ep(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, j.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, Q.pw)(r),
        a = (0, o.bG)([N.Ay], () => N.Ay.useReducedMotion),
        d = (0, L.PA)();
    return (0, n.jsx)(j.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(et.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: et.premiumCardsHeader,
                    children: b.intl.string(b.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: et.premiumCards,
                    children: [
                        (0, n.jsx)(em, {
                            subscriptionTier: z.pe.TIER_0,
                            isReducedMotion: a,
                            className: et.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(em, {
                            subscriptionTier: z.pe.TIER_2,
                            isReducedMotion: a,
                            className: et.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(ex, { isReducedMotion: a, className: et.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
