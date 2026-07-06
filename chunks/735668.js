i.d(r, { MR: () => q, Rf: () => Z, jP: () => ei, oK: () => J, r6: () => Q });
var t,
    a = i(627968),
    s = i(64700),
    n = i(503698),
    l = i.n(n),
    c = i(534514),
    o = i(17928),
    d = i(331322),
    u = i(821609),
    m = i(462887),
    p = i(315629),
    x = i(834730),
    h = i(939249),
    j = i(403581),
    f = i(736653),
    C = i(775602),
    g = i(793574),
    N = i(688810),
    T = i(287809),
    R = i(166403),
    A = i(428262),
    v = i(580630),
    _ = i(526292),
    E = i(454489),
    I = i(442123),
    P = i(932003),
    y = i(422936),
    M = i(234419),
    b = i(862990),
    k = i(783420),
    O = i(204413),
    D = i(410516),
    G = i(774774),
    S = i(257284),
    U = i(795269),
    w = i(860839),
    B = i(765516),
    H = i(202541),
    L = i(88001),
    F = i(466919),
    V = i(375708),
    Y = i(115599),
    $ = i(232266),
    z = i(243002),
    K = i(241988);
function W(e) {
    let { children: r, footer: i } = e;
    return null == i
        ? (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: Y.tierCardStack, children: r })
        : (0, a.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: Y.tierCardStack,
              children: [
                  (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: Y.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: Y.footer, children: i }),
              ],
          });
}
function q(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
            isGift: s = !1,
            priceOptions: n,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        j = (0, M.V)(),
        C = j?.subscription_trial?.sku_id,
        g = (0, y.O)(),
        N = (0, y.p)(),
        A = x?.hasActiveTrial ? h?.premiumType : null,
        v = (0, G.Lj)(A, C),
        _ = null != v,
        P = (0, m.q)((0, f.Ay)()),
        { showGiftPrice: b } = I.A.useConfig({ location: `PremiumTier0Card${s ? "" : " - DO NOT USE"}` }),
        k = E.A.useConfig({ location: "PremiumTier0Card" }),
        O = u ? V.intl.string(V.t.tUbSDK) : V.intl.string(V.t["t9uG/o"]),
        S = (0, a.jsxs)(W, {
            footer: r,
            children: [
                _ && (0, a.jsx)(U.R, { text: v, className: Y.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "text-overlay-light",
                    className: Y.cardTitle,
                    children: O,
                }),
                (!s || b) &&
                    (0, a.jsx)(B.A, {
                        isGift: s,
                        premiumTier: H.PremiumTypes.TIER_0,
                        offerType: H.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: C === H.pe.TIER_0,
                        showYearlyPrice: i,
                        priceOptions: n,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: Y.priceHeader,
                    }),
                (0, a.jsx)("hr", { className: Y.divider }),
                (0, a.jsx)(w.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        L = l()(Y.card, Y.tier0, t, { [Y.pillMargin]: !d && _ });
    return !s && ((0, D.hm)(g) || null != N || k)
        ? (0, a.jsx)("div", { className: L, children: S })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: L, children: S });
}
var Z =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function X(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, D.N1)(H.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, A.y8)(H.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: Y.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: Y.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: V.intl.format(V.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: V.intl.format(V.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(U.R, { text: V.intl.formatToPlainString(V.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function J(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = w.Nz.DEFAULT,
            className: s,
            isGift: n = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: j = !1,
            showWumpus: C = !0,
            showPill: g = !0,
            narrowLayout: N = !1,
        } = e,
        A = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        v = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        E = (0, M.V)(),
        b = E?.subscription_trial?.sku_id,
        k = A?.hasActiveTrial ? v?.premiumType : null,
        O = A?.planIdFromItems === H.gD.PREMIUM_YEAR_TIER_2,
        S = (0, y.O)(),
        L = (0, y.p)(),
        F = (0, _.k5)(),
        q = null != b || null != k ? H.Vk.PREMIUM_TRIAL : null != S || F ? H.Vk.PREMIUM_DISCOUNT : null,
        Z = (0, m.q)((0, f.Ay)()),
        J = null != L && !n,
        Q = !n && null != S && (0, D.hm)(S),
        ee = !n && F && O && q === H.Vk.PREMIUM_DISCOUNT,
        er = (0, G.rm)(F, k, n ? null : S, E, b),
        { showGiftPrice: ei } = I.A.useConfig({ location: `PremiumTier2Card${n ? "" : " - DO NOT USE"}` }),
        et = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(P.b, {})] }) : null,
        ea = (0, a.jsxs)(W, {
            footer: et,
            children: [
                C &&
                    !J &&
                    !ee &&
                    (0, a.jsx)(function () {
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                !Q &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("img", { src: z, alt: "", className: l()(Y.bigCloud, Y[h]) }),
                                            (0, a.jsx)("img", { src: $, alt: "", className: l()(Y.smallCloud, Y[h]) }),
                                        ],
                                    }),
                                (!Q || null != r) &&
                                    (0, a.jsx)("img", {
                                        src: K,
                                        alt: "",
                                        className: l()(Y.wumpus, Y[h], {
                                            [Y.withAnnualDiscountBanner]: Q,
                                            [Y.noGiftPrice]: n && !ei,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                g && !Q && (0, a.jsx)(U.R, { text: er ?? V.intl.string(V.t["6bEcYr"]), className: Y.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: Z ? "text-strong" : "text-overlay-light",
                    className: Y.cardTitle,
                    children: V.intl.string(V.t.lG6a5x),
                }),
                (!n || ei) &&
                    (0, a.jsx)(B.A, {
                        isGift: n,
                        premiumTier: H.PremiumTypes.TIER_2,
                        offerType: q,
                        offerTierMatchesCard: b === H.pe.TIER_2 || (0, D.U9)(S, H.pe.TIER_2),
                        showYearlyPrice: i && !Q,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: Y.priceHeader,
                    }),
                Q
                    ? (0, a.jsx)(X, { discountOffer: S, priceOptions: u, isGift: n, narrowLayout: N })
                    : (0, a.jsx)("hr", { className: Y.divider }),
                (0, a.jsx)(w.ZP, {
                    featureSet: t,
                    isModal: d,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        Q || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : Y.firstFeatureItemContainer,
                }),
            ],
        }),
        es = l()(Y.card, s, { [Y.withGiftBanner]: x });
    return J
        ? (0, a.jsx)("div", { className: es, children: ea })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: es, children: ea });
}
function Q(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        n = (0, m.q)((0, f.Ay)()),
        o = (0, y.p)(),
        d = (0, a.jsxs)(W, {
            footer: i,
            children: [
                (0, a.jsxs)("div", {
                    className: Y.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "text-overlay-light",
                            className: Y.cardTitle,
                            children: V.intl.string(F.default.eSKiXk),
                        }),
                        (0, a.jsx)(U.R, {
                            text: V.intl.string(V.t.oW0eUd),
                            className: Y.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, a.jsx)(S.A, { discountOffer: o, priceOptions: s, isApplicationHome: t }),
                (0, a.jsx)(w.Lg, { isApplicationHome: t }),
            ],
        });
    return null != o
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: l()(Y.card, r), children: d })
        : (0, a.jsx)("div", { className: l()(Y.card, Y.borderGradient, r), children: d });
}
function ee(e) {
    let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: s, narrowLayout: n } = e,
        c = r === H.pe.TIER_2,
        o = (0, y.p)(),
        { subscribeButtonProps: m, subscriptionTier: p } = (0, O.$)({
            subscriptionTier: r,
            variantOverride: c && null == o ? "expressive" : "secondary",
        }),
        { disabled: x } = m,
        j = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
        f = (0, a.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: l()(Y.tierCardStack, { [Y.premiumCardHover]: !i }),
            children: (0, a.jsx)(c ? J : q, {
                className: l()(Y.applicationHomeCard, { [Y.narrow]: n }),
                ctaButton: j,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...t,
            }),
        });
    return (0, a.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: l()(Y.tierCardStack, s),
        children: x
            ? f
            : (0, a.jsx)(k.A, {
                  subscriptionTier: p,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, a.jsx)(h.D, { onClick: r, className: Y.tierCardStack, children: f });
                  },
              }),
    });
}
function er(e) {
    let { isReducedMotion: r, className: i } = e,
        t = (0, y.p)(),
        s =
            null != t
                ? V.intl.format(F.default["7j70dP"], {
                      percent: t.discount?.amount,
                      premiumGroupProductName: (0, L.DP)(),
                  })
                : V.intl.string(V.t["2pG5Ga"]),
        n = (0, a.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: j.t,
            text: s,
            variant: null != t ? "expressive" : "secondary",
        }),
        c = (0, a.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: l()(Y.tierCardStack, { [Y.premiumCardHover]: !r }),
            children: (0, a.jsx)(Q, {
                className: l()(Y.applicationHomeCard, Y.narrow),
                ctaButton: n,
                isApplicationHome: !0,
            }),
        });
    return (0, a.jsx)(k.A, {
        subscriptionTier: H.pe.TIER_2,
        initialPlanId: H.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: l()(Y.tierCardStack, i),
                children: (0, a.jsx)(h.D, { onClick: r, className: Y.tierCardStack, children: c }),
            });
        },
    });
}
function ei(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, w.pw)(r),
        n = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        d = (0, b.PA)();
    return (0, a.jsx)(N.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: l()(Y.premiumCardsContainer, i),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: Y.premiumCardsHeader,
                    children: V.intl.string(V.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: Y.premiumCards,
                    children: [
                        (0, a.jsx)(ee, {
                            subscriptionTier: H.pe.TIER_0,
                            isReducedMotion: n,
                            className: Y.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, a.jsx)(ee, {
                            subscriptionTier: H.pe.TIER_2,
                            isReducedMotion: n,
                            className: Y.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, a.jsx)(er, { isReducedMotion: n, className: Y.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
