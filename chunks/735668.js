r.d(t, { MR: () => K, Rf: () => X, jP: () => er, oK: () => J, r6: () => Q });
var s,
    i = r(477900),
    l = r(582128),
    n = r(503698),
    a = r.n(n),
    c = r(17928),
    u = r(331322),
    d = r(821609),
    o = r(462887),
    m = r(297264),
    h = r(834730),
    x = r(315629),
    p = r(939249),
    f = r(403581),
    g = r(736653),
    j = r(775602),
    v = r(793574),
    N = r(688810),
    E = r(287809),
    R = r(166403),
    A = r(158045),
    C = r(580630),
    T = r(526292),
    I = r(932003),
    S = r(724651),
    P = r(732280),
    M = r(989790),
    _ = r(35587),
    y = r(783420),
    b = r(204413),
    G = r(511484),
    O = r(774774),
    k = r(257284),
    L = r(795269),
    w = r(297346),
    D = r(824069),
    U = r(222719),
    B = r(202541),
    F = r(88001),
    H = r(259589),
    z = r(375708),
    Z = r(174788),
    V = r(232266),
    Y = r(243002),
    q = r(241988);
function W(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: Z.tierCardStack, children: t })
        : (0, i.jsxs)(u.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: Z.tierCardStack,
              children: [
                  (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: Z.tierCardStackContent, children: t }),
                  (0, i.jsx)("div", { className: Z.footer, children: r }),
              ],
          });
}
function K(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: s,
            isGift: l = !1,
            priceOptions: n,
            isApplicationHome: u = !1,
            useShortTitle: d = !1,
        } = e,
        h = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        x = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        p = (0, P.V)(),
        f = p?.subscriptionTrial?.skuId,
        j = h?.hasActiveTrial ? x?.premiumType : null,
        v = (0, O.Lj)(j, f),
        N = null != v,
        A = (0, o.q)((0, g.Ay)()),
        C = d ? z.intl.string(z.t.tUbSDK) : z.intl.string(z.t["t9uG/o"]),
        T = (0, i.jsxs)(W, {
            footer: t,
            children: [
                N && (0, i.jsx)(L.R, { text: v, className: Z.pill }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: Z.cardTitle,
                    children: C,
                }),
                (0, i.jsx)(U.A, {
                    isGift: l,
                    premiumTier: B.PremiumTypes.TIER_0,
                    offerType: B.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === B.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: n,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Z.priceHeader,
                }),
                (0, i.jsx)("hr", { className: Z.divider }),
                (0, i.jsx)(w.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: u }),
            ],
        }),
        I = a()(Z.card, Z.tier0, s, { [Z.pillMargin]: !u && N });
    return (0, i.jsx)("div", { className: I, children: T });
}
var X =
    (((s = {}).IN_CARD = "inCard"),
    (s.OUTER_CORNER = "outerCorner"),
    (s.INSIDE_CORNER = "insideCorner"),
    (s.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    s);
function $(e) {
    let { discountOffer: t, priceOptions: r, isGift: s, narrowLayout: n = !1 } = e,
        a = (0, G.N1)(B.gD.PREMIUM_YEAR_TIER_2),
        c = l.useMemo(() => {
            try {
                let e = (0, A.y8)(B.gD.PREMIUM_YEAR_TIER_2, !1, s, r);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [s, r]);
    return null == a || null == c
        ? null
        : (0, i.jsxs)("div", {
              className: Z.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: Z.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(h.E, {
                              variant: n ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: z.intl.format(z.t["TCFNZ/"], { discountedPrice: a }),
                          }),
                          (0, i.jsx)(h.E, {
                              variant: n ? "text-xs/normal" : "text-sm/normal",
                              children: z.intl.format(z.t.aUTlph, { regularPrice: c }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(L.R, { text: z.intl.formatToPlainString(z.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function J(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: s = w.Nz.DEFAULT,
            className: l,
            isGift: n = !1,
            isModal: u = !1,
            priceOptions: d,
            showPromotionalGiftBanner: h = !1,
            wumpusPosition: p = "inCard",
            isApplicationHome: f = !1,
            showWumpus: j = !0,
            showPill: v = !0,
            narrowLayout: N = !1,
        } = e,
        A = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        C = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        M = (0, P.V)(),
        y = M?.subscriptionTrial?.skuId,
        b = A?.hasActiveTrial ? C?.premiumType : null,
        k = A?.planIdFromItems === B.gD.PREMIUM_YEAR_TIER_2,
        F = (0, S.O)(),
        H = (0, S.p)(),
        K = (0, T.k5)(),
        X = null != y || null != b ? B.Vk.PREMIUM_TRIAL : null != F || K ? B.Vk.PREMIUM_DISCOUNT : null,
        J = (0, o.q)((0, g.Ay)()),
        Q = null != H && !n,
        ee = !n && null != F && (0, G.hm)(F),
        et = !n && K && k && X === B.Vk.PREMIUM_DISCOUNT,
        er = (0, O.rm)(K, b, n ? null : F, M, y),
        es = (0, _.Sq)() && !n && null == X,
        ei = null != t || h ? (0, i.jsxs)(i.Fragment, { children: [t, h && (0, i.jsx)(I.b, {})] }) : null,
        el = u && !n,
        en = (0, i.jsxs)(W, {
            footer: ei,
            children: [
                j &&
                    !Q &&
                    !et &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !ee &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: Y, alt: "", className: a()(Z.bigCloud, Z[p]) }),
                                            (0, i.jsx)("img", { src: V, alt: "", className: a()(Z.smallCloud, Z[p]) }),
                                        ],
                                    }),
                                (!ee || null != t) &&
                                    (0, i.jsx)("img", {
                                        src: q,
                                        alt: "",
                                        className: a()(Z.wumpus, Z[p], { [Z.withAnnualDiscountBanner]: ee }),
                                    }),
                            ],
                        });
                    }, {}),
                v &&
                    !ee &&
                    (0, i.jsx)(L.R, {
                        text:
                            er ??
                            (es
                                ? z.intl.formatToPlainString(z.t["4SEnCZ"], { months: 1 })
                                : z.intl.string(z.t["6bEcYr"])),
                        className: Z.pill,
                    }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: J ? "text-strong" : "text-overlay-light",
                    className: Z.cardTitle,
                    children: z.intl.string(z.t.lG6a5x),
                }),
                (0, i.jsx)(U.A, {
                    isGift: n,
                    premiumTier: B.PremiumTypes.TIER_2,
                    offerType: X,
                    offerTierMatchesCard: y === B.pe.TIER_2 || (0, G.U9)(F, B.pe.TIER_2),
                    showYearlyPrice: r && !ee,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Z.priceHeader,
                }),
                ee
                    ? (0, i.jsx)($, { discountOffer: F, priceOptions: d, isGift: n, narrowLayout: N })
                    : (0, i.jsx)("hr", { className: Z.divider }),
                (0, i.jsx)(w.ZP, {
                    featureSet: s,
                    isModal: u,
                    isGift: n,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: f,
                    firstFeatureItemClassName:
                        ee || ("inCard" !== p && "giftSelectionModal" !== p) ? void 0 : Z.firstFeatureItemContainer,
                }),
                el && (0, i.jsx)(D.K, {}),
            ],
        }),
        ea = a()(Z.card, l, { [Z.withGiftBanner]: h });
    return Q
        ? (0, i.jsx)("div", { className: ea, children: en })
        : (0, i.jsx)(x.h, { color: "nitro-pink", className: ea, children: en });
}
function Q(e) {
    let { className: t, ctaButton: r, isApplicationHome: s, priceOptions: l } = e,
        n = (0, o.q)((0, g.Ay)()),
        c = (0, S.p)(),
        u = (0, i.jsxs)(W, {
            footer: r,
            children: [
                (0, i.jsxs)("div", {
                    className: Z.cardHeader,
                    children: [
                        (0, i.jsx)(m.D, {
                            variant: "nitro-md",
                            color: n ? "text-strong" : "text-overlay-light",
                            className: Z.cardTitle,
                            children: z.intl.string(H.default.eSKiXk),
                        }),
                        (0, i.jsx)(L.R, {
                            text: z.intl.string(z.t.oW0eUd),
                            className: Z.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, i.jsx)(k.A, { discountOffer: c, priceOptions: l, isApplicationHome: s }),
                (0, i.jsx)(w.Lg, { isApplicationHome: s }),
            ],
        });
    return null != c
        ? (0, i.jsx)(x.h, { color: "nitro-pink", className: a()(Z.card, t), children: u })
        : (0, i.jsx)("div", { className: a()(Z.card, Z.borderGradient, t), children: u });
}
function ee(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: s, className: l, narrowLayout: n } = e,
        c = t === B.pe.TIER_2,
        o = (0, S.p)(),
        { subscribeButtonProps: m, subscriptionTier: h } = (0, b.$)({
            subscriptionTier: t,
            variantOverride: c && null == o ? "expressive" : "secondary",
        }),
        { disabled: x } = m,
        f = (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: x }),
        g = (0, i.jsx)(u.B, {
            direction: "vertical",
            gap: 0,
            className: a()(Z.tierCardStack, { [Z.premiumCardHover]: !r }),
            children: (0, i.jsx)(c ? J : K, {
                className: a()(Z.applicationHomeCard, { [Z.narrow]: n }),
                ctaButton: f,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...s,
            }),
        });
    return (0, i.jsx)(u.B, {
        direction: "vertical",
        gap: 0,
        className: a()(Z.tierCardStack, l),
        children: x
            ? g
            : (0, i.jsx)(y.A, {
                  subscriptionTier: h,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(p.D, { onClick: t, className: Z.tierCardStack, children: g });
                  },
              }),
    });
}
function et(e) {
    let { isReducedMotion: t, className: r } = e,
        s = (0, S.p)(),
        l = null != s,
        n = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        o = null != n && (0, A.Nc)(n),
        m = l
            ? z.intl.format(H.default["7j70dP"], { percent: s.discount?.amount, premiumGroupProductName: (0, F.DP)() })
            : z.intl.string(z.t["2pG5Ga"]),
        h = (0, i.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: f.t,
            text: m,
            variant: null != s ? "expressive" : "secondary",
            disabled: o,
        }),
        x = (0, i.jsx)(u.B, {
            direction: "vertical",
            gap: 0,
            className: a()(Z.tierCardStack, { [Z.premiumCardHover]: !t }),
            children: (0, i.jsx)(Q, {
                className: a()(Z.applicationHomeCard, Z.narrow),
                ctaButton: h,
                isApplicationHome: !0,
            }),
        });
    return (0, i.jsx)(u.B, {
        direction: "vertical",
        gap: 0,
        className: a()(Z.tierCardStack, r),
        children: o
            ? x
            : (0, i.jsx)(y.A, {
                  subscriptionTier: B.pe.TIER_2,
                  initialPlanId: B.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(p.D, { onClick: t, className: Z.tierCardStack, children: x });
                  },
              }),
    });
}
function er(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: s } = (0, N.Ay)(v.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, w.pw)(t),
        n = (0, c.bG)([j.Ay], () => j.Ay.useReducedMotion),
        u = (0, M.PA)();
    return (0, i.jsx)(N.f5, {
        value: s,
        children: (0, i.jsxs)("div", {
            className: a()(Z.premiumCardsContainer, r),
            children: [
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: Z.premiumCardsHeader,
                    children: z.intl.string(z.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: l,
                    className: Z.premiumCards,
                    children: [
                        (0, i.jsx)(ee, {
                            subscriptionTier: B.pe.TIER_0,
                            isReducedMotion: n,
                            className: Z.tier0CardOrder,
                            narrowLayout: u,
                        }),
                        (0, i.jsx)(ee, {
                            subscriptionTier: B.pe.TIER_2,
                            isReducedMotion: n,
                            className: Z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: u ? "insideCorner" : "outerCorner", showPill: !u },
                            narrowLayout: u,
                        }),
                        u && (0, i.jsx)(et, { isReducedMotion: n, className: Z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
