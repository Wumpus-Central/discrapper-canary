i.d(r, { MR: () => Z, Rf: () => X, jP: () => et, oK: () => Q, r6: () => ee });
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
    B = i(824069),
    H = i(765516),
    L = i(202541),
    F = i(88001),
    V = i(466919),
    Y = i(375708),
    $ = i(115599),
    K = i(232266),
    z = i(243002),
    W = i(241988);
function q(e) {
    let { children: r, footer: i } = e;
    return null == i
        ? (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: $.tierCardStack, children: r })
        : (0, a.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: $.tierCardStack,
              children: [
                  (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: $.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: $.footer, children: i }),
              ],
          });
}
function Z(e) {
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
        O = u ? Y.intl.string(Y.t.tUbSDK) : Y.intl.string(Y.t["t9uG/o"]),
        S = (0, a.jsxs)(q, {
            footer: r,
            children: [
                _ && (0, a.jsx)(U.R, { text: v, className: $.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "text-overlay-light",
                    className: $.cardTitle,
                    children: O,
                }),
                (!s || b) &&
                    (0, a.jsx)(H.A, {
                        isGift: s,
                        premiumTier: L.PremiumTypes.TIER_0,
                        offerType: L.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: C === L.pe.TIER_0,
                        showYearlyPrice: i,
                        priceOptions: n,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: $.priceHeader,
                    }),
                (0, a.jsx)("hr", { className: $.divider }),
                (0, a.jsx)(w.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        B = l()($.card, $.tier0, t, { [$.pillMargin]: !d && _ });
    return !s && ((0, D.hm)(g) || null != N || k)
        ? (0, a.jsx)("div", { className: B, children: S })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: B, children: S });
}
var X =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function J(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, D.N1)(L.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, A.y8)(L.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: $.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: $.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: Y.intl.format(Y.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: Y.intl.format(Y.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(U.R, { text: Y.intl.formatToPlainString(Y.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function Q(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = w.Nz.DEFAULT,
            className: s,
            isGift: n = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            showPlanSelectCardBanner: h = !1,
            wumpusPosition: j = "inCard",
            isApplicationHome: C = !1,
            showWumpus: g = !0,
            showPill: N = !0,
            narrowLayout: A = !1,
        } = e,
        v = (0, o.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        b = (0, M.V)(),
        k = b?.subscription_trial?.sku_id,
        O = v?.hasActiveTrial ? E?.premiumType : null,
        S = v?.planIdFromItems === L.gD.PREMIUM_YEAR_TIER_2,
        F = (0, y.O)(),
        V = (0, y.p)(),
        Z = (0, _.k5)(),
        X = null != k || null != O ? L.Vk.PREMIUM_TRIAL : null != F || Z ? L.Vk.PREMIUM_DISCOUNT : null,
        Q = (0, m.q)((0, f.Ay)()),
        ee = null != V && !n,
        er = !n && null != F && (0, D.hm)(F),
        ei = !n && Z && S && X === L.Vk.PREMIUM_DISCOUNT,
        et = (0, G.rm)(Z, O, n ? null : F, b, k),
        { showGiftPrice: ea } = I.A.useConfig({ location: `PremiumTier2Card${n ? "" : " - DO NOT USE"}` }),
        es = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(P.b, {})] }) : null,
        en = (0, a.jsxs)(q, {
            footer: es,
            children: [
                g &&
                    !ee &&
                    !ei &&
                    (0, a.jsx)(function () {
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                !er &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("img", { src: z, alt: "", className: l()($.bigCloud, $[j]) }),
                                            (0, a.jsx)("img", { src: K, alt: "", className: l()($.smallCloud, $[j]) }),
                                        ],
                                    }),
                                (!er || null != r) &&
                                    (0, a.jsx)("img", {
                                        src: W,
                                        alt: "",
                                        className: l()($.wumpus, $[j], {
                                            [$.withAnnualDiscountBanner]: er,
                                            [$.noGiftPrice]: n && !ea,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                N && !er && (0, a.jsx)(U.R, { text: et ?? Y.intl.string(Y.t["6bEcYr"]), className: $.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: Q ? "text-strong" : "text-overlay-light",
                    className: $.cardTitle,
                    children: Y.intl.string(Y.t.lG6a5x),
                }),
                (!n || ea) &&
                    (0, a.jsx)(H.A, {
                        isGift: n,
                        premiumTier: L.PremiumTypes.TIER_2,
                        offerType: X,
                        offerTierMatchesCard: k === L.pe.TIER_2 || (0, D.U9)(F, L.pe.TIER_2),
                        showYearlyPrice: i && !er,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: $.priceHeader,
                    }),
                er
                    ? (0, a.jsx)(J, { discountOffer: F, priceOptions: u, isGift: n, narrowLayout: A })
                    : (0, a.jsx)("hr", { className: $.divider }),
                (0, a.jsx)(w.ZP, {
                    featureSet: t,
                    isModal: d,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: C,
                    firstFeatureItemClassName:
                        er || ("inCard" !== j && "giftSelectionModal" !== j) ? void 0 : $.firstFeatureItemContainer,
                }),
                h && (0, a.jsx)(B.K, {}),
            ],
        }),
        el = l()($.card, s, { [$.withGiftBanner]: x });
    return ee
        ? (0, a.jsx)("div", { className: el, children: en })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: el, children: en });
}
function ee(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        n = (0, m.q)((0, f.Ay)()),
        o = (0, y.p)(),
        d = (0, a.jsxs)(q, {
            footer: i,
            children: [
                (0, a.jsxs)("div", {
                    className: $.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "text-overlay-light",
                            className: $.cardTitle,
                            children: Y.intl.string(V.default.eSKiXk),
                        }),
                        (0, a.jsx)(U.R, {
                            text: Y.intl.string(Y.t.oW0eUd),
                            className: $.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, a.jsx)(S.A, { discountOffer: o, priceOptions: s, isApplicationHome: t }),
                (0, a.jsx)(w.Lg, { isApplicationHome: t }),
            ],
        });
    return null != o
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: l()($.card, r), children: d })
        : (0, a.jsx)("div", { className: l()($.card, $.borderGradient, r), children: d });
}
function er(e) {
    let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: s, narrowLayout: n } = e,
        c = r === L.pe.TIER_2,
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
            className: l()($.tierCardStack, { [$.premiumCardHover]: !i }),
            children: (0, a.jsx)(c ? Q : Z, {
                className: l()($.applicationHomeCard, { [$.narrow]: n }),
                ctaButton: j,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...t,
            }),
        });
    return (0, a.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: l()($.tierCardStack, s),
        children: x
            ? f
            : (0, a.jsx)(k.A, {
                  subscriptionTier: p,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, a.jsx)(h.D, { onClick: r, className: $.tierCardStack, children: f });
                  },
              }),
    });
}
function ei(e) {
    let { isReducedMotion: r, className: i } = e,
        t = (0, y.p)(),
        s =
            null != t
                ? Y.intl.format(V.default["7j70dP"], {
                      percent: t.discount?.amount,
                      premiumGroupProductName: (0, F.DP)(),
                  })
                : Y.intl.string(Y.t["2pG5Ga"]),
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
            className: l()($.tierCardStack, { [$.premiumCardHover]: !r }),
            children: (0, a.jsx)(ee, {
                className: l()($.applicationHomeCard, $.narrow),
                ctaButton: n,
                isApplicationHome: !0,
            }),
        });
    return (0, a.jsx)(k.A, {
        subscriptionTier: L.pe.TIER_2,
        initialPlanId: L.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: l()($.tierCardStack, i),
                children: (0, a.jsx)(h.D, { onClick: r, className: $.tierCardStack, children: c }),
            });
        },
    });
}
function et(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, w.pw)(r),
        n = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        d = (0, b.PA)();
    return (0, a.jsx)(N.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: l()($.premiumCardsContainer, i),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: $.premiumCardsHeader,
                    children: Y.intl.string(Y.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: $.premiumCards,
                    children: [
                        (0, a.jsx)(er, {
                            subscriptionTier: L.pe.TIER_0,
                            isReducedMotion: n,
                            className: $.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, a.jsx)(er, {
                            subscriptionTier: L.pe.TIER_2,
                            isReducedMotion: n,
                            className: $.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, a.jsx)(ei, { isReducedMotion: n, className: $.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
