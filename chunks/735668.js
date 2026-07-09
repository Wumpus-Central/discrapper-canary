i.d(r, { MR: () => X, Rf: () => J, jP: () => ea, oK: () => ee, r6: () => er });
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
    E = i(526292),
    P = i(454489),
    _ = i(442123),
    I = i(932003),
    y = i(422936),
    M = i(234419),
    b = i(862990),
    k = i(35587),
    S = i(783420),
    O = i(204413),
    D = i(410516),
    G = i(774774),
    U = i(257284),
    w = i(795269),
    B = i(860839),
    H = i(824069),
    L = i(765516),
    F = i(202541),
    V = i(88001),
    Y = i(466919),
    $ = i(375708),
    K = i(115599),
    q = i(232266),
    z = i(243002),
    W = i(241988);
function Z(e) {
    let { children: r, footer: i } = e;
    return null == i
        ? (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: K.tierCardStack, children: r })
        : (0, a.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: K.tierCardStack,
              children: [
                  (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: K.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: K.footer, children: i }),
              ],
          });
}
function X(e) {
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
        E = null != v,
        I = (0, m.q)((0, f.Ay)()),
        { showGiftPrice: b } = _.A.useConfig({ location: `PremiumTier0Card${s ? "" : " - DO NOT USE"}` }),
        k = P.A.useConfig({ location: "PremiumTier0Card" }),
        S = u ? $.intl.string($.t.tUbSDK) : $.intl.string($.t["t9uG/o"]),
        O = (0, a.jsxs)(Z, {
            footer: r,
            children: [
                E && (0, a.jsx)(w.R, { text: v, className: K.pill }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: I ? "text-strong" : "text-overlay-light",
                    className: K.cardTitle,
                    children: S,
                }),
                (!s || b) &&
                    (0, a.jsx)(L.A, {
                        isGift: s,
                        premiumTier: F.PremiumTypes.TIER_0,
                        offerType: F.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: C === F.pe.TIER_0,
                        showYearlyPrice: i,
                        priceOptions: n,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: K.priceHeader,
                    }),
                (0, a.jsx)("hr", { className: K.divider }),
                (0, a.jsx)(B.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        U = l()(K.card, K.tier0, t, { [K.pillMargin]: !d && E });
    return !s && ((0, D.hm)(g) || null != N || k)
        ? (0, a.jsx)("div", { className: U, children: O })
        : (0, a.jsx)(p.h, { color: "nitro-green", className: U, children: O });
}
var J =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function Q(e) {
    let { discountOffer: r, priceOptions: i, isGift: t, narrowLayout: n = !1 } = e,
        l = (0, D.N1)(F.gD.PREMIUM_YEAR_TIER_2),
        c = s.useMemo(() => {
            try {
                let e = (0, A.y8)(F.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == l || null == c
        ? null
        : (0, a.jsxs)("div", {
              className: K.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: K.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: $.intl.format($.t["TCFNZ/"], { discountedPrice: l }),
                          }),
                          (0, a.jsx)(x.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: $.intl.format($.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(w.R, { text: $.intl.formatToPlainString($.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ee(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = B.Nz.DEFAULT,
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
        P = (0, M.V)(),
        b = P?.subscription_trial?.sku_id,
        S = A?.hasActiveTrial ? v?.premiumType : null,
        O = A?.planIdFromItems === F.gD.PREMIUM_YEAR_TIER_2,
        U = (0, y.O)(),
        V = (0, y.p)(),
        Y = (0, E.k5)(),
        X = null != b || null != S ? F.Vk.PREMIUM_TRIAL : null != U || Y ? F.Vk.PREMIUM_DISCOUNT : null,
        J = (0, m.q)((0, f.Ay)()),
        ee = null != V && !n,
        er = !n && null != U && (0, D.hm)(U),
        ei = !n && Y && O && X === F.Vk.PREMIUM_DISCOUNT,
        et = (0, G.rm)(Y, S, n ? null : U, P, b),
        ea = (0, k.Sq)() && !n && null == X,
        { showGiftPrice: es } = _.A.useConfig({ location: `PremiumTier2Card${n ? "" : " - DO NOT USE"}` }),
        en = null != r || x ? (0, a.jsxs)(a.Fragment, { children: [r, x && (0, a.jsx)(I.b, {})] }) : null,
        el = d && !n,
        ec = (0, a.jsxs)(Z, {
            footer: en,
            children: [
                C &&
                    !ee &&
                    !ei &&
                    (0, a.jsx)(function () {
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                !er &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("img", { src: z, alt: "", className: l()(K.bigCloud, K[h]) }),
                                            (0, a.jsx)("img", { src: q, alt: "", className: l()(K.smallCloud, K[h]) }),
                                        ],
                                    }),
                                (!er || null != r) &&
                                    (0, a.jsx)("img", {
                                        src: W,
                                        alt: "",
                                        className: l()(K.wumpus, K[h], {
                                            [K.withAnnualDiscountBanner]: er,
                                            [K.noGiftPrice]: n && !es,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                g &&
                    !er &&
                    (0, a.jsx)(w.R, {
                        text:
                            et ??
                            (ea
                                ? $.intl.formatToPlainString($.t["4SEnCZ"], { months: 1 })
                                : $.intl.string($.t["6bEcYr"])),
                        className: K.pill,
                    }),
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: J ? "text-strong" : "text-overlay-light",
                    className: K.cardTitle,
                    children: $.intl.string($.t.lG6a5x),
                }),
                (!n || es) &&
                    (0, a.jsx)(L.A, {
                        isGift: n,
                        premiumTier: F.PremiumTypes.TIER_2,
                        offerType: X,
                        offerTierMatchesCard: b === F.pe.TIER_2 || (0, D.U9)(U, F.pe.TIER_2),
                        showYearlyPrice: i && !er,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: K.priceHeader,
                    }),
                er
                    ? (0, a.jsx)(Q, { discountOffer: U, priceOptions: u, isGift: n, narrowLayout: N })
                    : (0, a.jsx)("hr", { className: K.divider }),
                (0, a.jsx)(B.ZP, {
                    featureSet: t,
                    isModal: d,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: j,
                    firstFeatureItemClassName:
                        er || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : K.firstFeatureItemContainer,
                }),
                el && (0, a.jsx)(H.K, {}),
            ],
        }),
        eo = l()(K.card, s, { [K.withGiftBanner]: x });
    return ee
        ? (0, a.jsx)("div", { className: eo, children: ec })
        : (0, a.jsx)(p.h, { color: "nitro-pink", className: eo, children: ec });
}
function er(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: s } = e,
        n = (0, m.q)((0, f.Ay)()),
        o = (0, y.p)(),
        d = (0, a.jsxs)(Z, {
            footer: i,
            children: [
                (0, a.jsxs)("div", {
                    className: K.cardHeader,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            color: n ? "text-strong" : "text-overlay-light",
                            className: K.cardTitle,
                            children: $.intl.string(Y.default.eSKiXk),
                        }),
                        (0, a.jsx)(w.R, {
                            text: $.intl.string($.t.oW0eUd),
                            className: K.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, a.jsx)(U.A, { discountOffer: o, priceOptions: s, isApplicationHome: t }),
                (0, a.jsx)(B.Lg, { isApplicationHome: t }),
            ],
        });
    return null != o
        ? (0, a.jsx)(p.h, { color: "nitro-pink", className: l()(K.card, r), children: d })
        : (0, a.jsx)("div", { className: l()(K.card, K.borderGradient, r), children: d });
}
function ei(e) {
    let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: s, narrowLayout: n } = e,
        c = r === F.pe.TIER_2,
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
            className: l()(K.tierCardStack, { [K.premiumCardHover]: !i }),
            children: (0, a.jsx)(c ? ee : X, {
                className: l()(K.applicationHomeCard, { [K.narrow]: n }),
                ctaButton: j,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...t,
            }),
        });
    return (0, a.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: l()(K.tierCardStack, s),
        children: x
            ? f
            : (0, a.jsx)(S.A, {
                  subscriptionTier: p,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, a.jsx)(h.D, { onClick: r, className: K.tierCardStack, children: f });
                  },
              }),
    });
}
function et(e) {
    let { isReducedMotion: r, className: i } = e,
        t = (0, y.p)(),
        s =
            null != t
                ? $.intl.format(Y.default["7j70dP"], {
                      percent: t.discount?.amount,
                      premiumGroupProductName: (0, V.DP)(),
                  })
                : $.intl.string($.t["2pG5Ga"]),
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
            className: l()(K.tierCardStack, { [K.premiumCardHover]: !r }),
            children: (0, a.jsx)(er, {
                className: l()(K.applicationHomeCard, K.narrow),
                ctaButton: n,
                isApplicationHome: !0,
            }),
        });
    return (0, a.jsx)(S.A, {
        subscriptionTier: F.pe.TIER_2,
        initialPlanId: F.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: l()(K.tierCardStack, i),
                children: (0, a.jsx)(h.D, { onClick: r, className: K.tierCardStack, children: c }),
            });
        },
    });
}
function ea(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, B.pw)(r),
        n = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        d = (0, b.PA)();
    return (0, a.jsx)(N.f5, {
        value: t,
        children: (0, a.jsxs)("div", {
            className: l()(K.premiumCardsContainer, i),
            children: [
                (0, a.jsx)(c.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: K.premiumCardsHeader,
                    children: $.intl.string($.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: s,
                    className: K.premiumCards,
                    children: [
                        (0, a.jsx)(ei, {
                            subscriptionTier: F.pe.TIER_0,
                            isReducedMotion: n,
                            className: K.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, a.jsx)(ei, {
                            subscriptionTier: F.pe.TIER_2,
                            isReducedMotion: n,
                            className: K.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, a.jsx)(et, { isReducedMotion: n, className: K.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
