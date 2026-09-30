t.d(r, { MR: () => $, Rf: () => q, jP: () => et, oK: () => X, r6: () => J });
var i,
    n = t(477900),
    s = t(582128),
    a = t(503698),
    l = t.n(a),
    c = t(17928),
    o = t(331322),
    d = t(821609),
    u = t(462887),
    m = t(297264),
    p = t(834730),
    x = t(315629),
    h = t(939249),
    j = t(403581),
    f = t(736653),
    g = t(775602),
    N = t(793574),
    v = t(688810),
    C = t(287809),
    T = t(166403),
    A = t(158045),
    R = t(580630),
    E = t(526292),
    I = t(932003),
    M = t(724651),
    _ = t(732280),
    y = t(989790),
    P = t(35587),
    b = t(783420),
    k = t(204413),
    S = t(511484),
    D = t(774774),
    O = t(257284),
    U = t(795269),
    G = t(297346),
    w = t(824069),
    B = t(222719),
    H = t(202541),
    L = t(88001),
    Y = t(259589),
    F = t(375708),
    z = t(174788),
    V = t(232266),
    K = t(243002),
    W = t(241988);
function Z(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(o.B, { direction: "vertical", gap: 0, className: z.tierCardStack, children: r })
        : (0, n.jsxs)(o.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: z.tierCardStack,
              children: [
                  (0, n.jsx)(o.B, { direction: "vertical", gap: 0, className: z.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: z.footer, children: t }),
              ],
          });
}
function $(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: s = !1,
            priceOptions: a,
            isApplicationHome: o = !1,
            useShortTitle: d = !1,
        } = e,
        p = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        x = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        h = (0, _.V)(),
        j = h?.subscriptionTrial?.skuId,
        g = p?.hasActiveTrial ? x?.premiumType : null,
        N = (0, D.Lj)(g, j),
        v = null != N,
        A = (0, u.q)((0, f.Ay)()),
        R = d ? F.intl.string(F.t.tUbSDK) : F.intl.string(F.t["t9uG/o"]),
        E = (0, n.jsxs)(Z, {
            footer: r,
            children: [
                v && (0, n.jsx)(U.R, { text: N, className: z.pill }),
                (0, n.jsx)(m.D, {
                    variant: "nitro-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: z.cardTitle,
                    children: R,
                }),
                (0, n.jsx)(B.A, {
                    isGift: s,
                    premiumTier: H.PremiumTypes.TIER_0,
                    offerType: H.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === H.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: z.priceHeader,
                }),
                (0, n.jsx)("hr", { className: z.divider }),
                (0, n.jsx)(G.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: o }),
            ],
        }),
        I = l()(z.card, z.tier0, i, { [z.pillMargin]: !o && v });
    return (0, n.jsx)("div", { className: I, children: E });
}
var q =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function Q(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        l = (0, S.N1)(H.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, A.y8)(H.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == l || null == c
        ? null
        : (0, n.jsxs)("div", {
              className: z.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: z.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: F.intl.format(F.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: F.intl.format(F.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(U.R, { text: F.intl.formatToPlainString(F.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function X(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = G.Nz.DEFAULT,
            className: s,
            isGift: a = !1,
            isModal: o = !1,
            priceOptions: d,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: g = !0,
            showPill: N = !0,
            narrowLayout: v = !1,
        } = e,
        A = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        R = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        y = (0, _.V)(),
        b = y?.subscriptionTrial?.skuId,
        k = A?.hasActiveTrial ? R?.premiumType : null,
        O = A?.planIdFromItems === H.gD.PREMIUM_YEAR_TIER_2,
        L = (0, M.O)(),
        Y = (0, M.p)(),
        $ = (0, E.k5)(),
        q = null != b || null != k ? H.Vk.PREMIUM_TRIAL : null != L || $ ? H.Vk.PREMIUM_DISCOUNT : null,
        X = (0, u.q)((0, f.Ay)()),
        J = null != Y && !a,
        ee = !a && null != L && (0, S.hm)(L),
        er = !a && $ && O && q === H.Vk.PREMIUM_DISCOUNT,
        et = (0, D.rm)($, k, a ? null : L, y, b),
        ei = (0, P.Sq)() && !a && null == q,
        en = null != r || p ? (0, n.jsxs)(n.Fragment, { children: [r, p && (0, n.jsx)(I.b, {})] }) : null,
        es = o && !a,
        ea = (0, n.jsxs)(Z, {
            footer: en,
            children: [
                g &&
                    !J &&
                    !er &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !ee &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: K, alt: "", className: l()(z.bigCloud, z[h]) }),
                                            (0, n.jsx)("img", { src: V, alt: "", className: l()(z.smallCloud, z[h]) }),
                                        ],
                                    }),
                                (!ee || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: W,
                                        alt: "",
                                        className: l()(z.wumpus, z[h], { [z.withAnnualDiscountBanner]: ee }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !ee &&
                    (0, n.jsx)(U.R, {
                        text:
                            et ??
                            (ei
                                ? F.intl.formatToPlainString(F.t["4SEnCZ"], { months: 1 })
                                : F.intl.string(F.t["6bEcYr"])),
                        className: z.pill,
                    }),
                (0, n.jsx)(m.D, {
                    variant: "nitro-md",
                    color: X ? "text-strong" : "text-overlay-light",
                    className: z.cardTitle,
                    children: F.intl.string(F.t.lG6a5x),
                }),
                (0, n.jsx)(B.A, {
                    isGift: a,
                    premiumTier: H.PremiumTypes.TIER_2,
                    offerType: q,
                    offerTierMatchesCard: b === H.pe.TIER_2 || (0, S.U9)(L, H.pe.TIER_2),
                    showYearlyPrice: t && !ee,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: z.priceHeader,
                }),
                ee
                    ? (0, n.jsx)(Q, { discountOffer: L, priceOptions: d, isGift: a, narrowLayout: v })
                    : (0, n.jsx)("hr", { className: z.divider }),
                (0, n.jsx)(G.ZP, {
                    featureSet: i,
                    isModal: o,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        ee || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : z.firstFeatureItemContainer,
                }),
                es && (0, n.jsx)(w.K, {}),
            ],
        }),
        el = l()(z.card, s, { [z.withGiftBanner]: p });
    return J
        ? (0, n.jsx)("div", { className: el, children: ea })
        : (0, n.jsx)(x.h, { color: "nitro-pink", className: el, children: ea });
}
function J(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: s } = e,
        a = (0, u.q)((0, f.Ay)()),
        c = (0, M.p)(),
        o = (0, n.jsxs)(Z, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: z.cardHeader,
                    children: [
                        (0, n.jsx)(m.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: z.cardTitle,
                            children: F.intl.string(Y.default.eSKiXk),
                        }),
                        (0, n.jsx)(U.R, {
                            text: F.intl.string(F.t.oW0eUd),
                            className: z.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, n.jsx)(O.A, { discountOffer: c, priceOptions: s, isApplicationHome: i }),
                (0, n.jsx)(G.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, n.jsx)(x.h, { color: "nitro-pink", className: l()(z.card, r), children: o })
        : (0, n.jsx)("div", { className: l()(z.card, z.borderGradient, r), children: o });
}
function ee(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: s, narrowLayout: a } = e,
        c = r === H.pe.TIER_2,
        u = (0, M.p)(),
        { subscribeButtonProps: m, subscriptionTier: p } = (0, k.$)({
            subscriptionTier: r,
            variantOverride: c && null == u ? "expressive" : "secondary",
        }),
        { disabled: x } = m,
        j = (0, n.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
        f = (0, n.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: l()(z.tierCardStack, { [z.premiumCardHover]: !t }),
            children: (0, n.jsx)(c ? X : $, {
                className: l()(z.applicationHomeCard, { [z.narrow]: a }),
                ctaButton: j,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(o.B, {
        direction: "vertical",
        gap: 0,
        className: l()(z.tierCardStack, s),
        children: x
            ? f
            : (0, n.jsx)(b.A, {
                  subscriptionTier: p,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: z.tierCardStack, children: f });
                  },
              }),
    });
}
function er(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, M.p)(),
        s = null != i,
        a = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        u = null != a && (0, A.Nc)(a),
        m = s
            ? F.intl.format(Y.default["7j70dP"], { percent: i.discount?.amount, premiumGroupProductName: (0, L.DP)() })
            : F.intl.string(F.t["2pG5Ga"]),
        p = (0, n.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: j.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: u,
        }),
        x = (0, n.jsx)(o.B, {
            direction: "vertical",
            gap: 0,
            className: l()(z.tierCardStack, { [z.premiumCardHover]: !r }),
            children: (0, n.jsx)(J, {
                className: l()(z.applicationHomeCard, z.narrow),
                ctaButton: p,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(o.B, {
        direction: "vertical",
        gap: 0,
        className: l()(z.tierCardStack, t),
        children: u
            ? x
            : (0, n.jsx)(b.A, {
                  subscriptionTier: H.pe.TIER_2,
                  initialPlanId: H.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: z.tierCardStack, children: x });
                  },
              }),
    });
}
function et(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, v.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, G.pw)(r),
        a = (0, c.bG)([g.Ay], () => g.Ay.useReducedMotion),
        o = (0, y.PA)();
    return (0, n.jsx)(v.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: l()(z.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(m.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: z.premiumCardsHeader,
                    children: F.intl.string(F.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: s,
                    className: z.premiumCards,
                    children: [
                        (0, n.jsx)(ee, {
                            subscriptionTier: H.pe.TIER_0,
                            isReducedMotion: a,
                            className: z.tier0CardOrder,
                            narrowLayout: o,
                        }),
                        (0, n.jsx)(ee, {
                            subscriptionTier: H.pe.TIER_2,
                            isReducedMotion: a,
                            className: z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: o ? "insideCorner" : "outerCorner", showPill: !o },
                            narrowLayout: o,
                        }),
                        o && (0, n.jsx)(er, { isReducedMotion: a, className: z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
