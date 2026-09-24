r.d(t, { MR: () => K, Rf: () => X, jP: () => er, oK: () => J, r6: () => Q });
var i,
    n = r(477900),
    s = r(582128),
    l = r(503698),
    a = r.n(l),
    u = r(297264),
    o = r(17928),
    c = r(331322),
    d = r(821609),
    m = r(462887),
    h = r(834730),
    f = r(315629),
    x = r(939249),
    p = r(403581),
    g = r(736653),
    A = r(775602),
    j = r(793574),
    E = r(688810),
    v = r(287809),
    N = r(166403),
    R = r(158045),
    C = r(580630),
    P = r(526292),
    T = r(932003),
    I = r(724651),
    S = r(732280),
    y = r(989790),
    M = r(35587),
    _ = r(783420),
    b = r(204413),
    G = r(511484),
    O = r(774774),
    w = r(257284),
    k = r(795269),
    L = r(297346),
    D = r(824069),
    B = r(222719),
    U = r(202541),
    F = r(88001),
    H = r(148155),
    z = r(375708),
    Z = r(174788),
    V = r(232266),
    Y = r(243002),
    q = r(241988);
function W(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: Z.tierCardStack, children: t })
        : (0, n.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: Z.tierCardStack,
              children: [
                  (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: Z.tierCardStackContent, children: t }),
                  (0, n.jsx)("div", { className: Z.footer, children: r }),
              ],
          });
}
function K(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: s = !1,
            priceOptions: l,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        h = (0, o.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        f = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        x = (0, S.V)(),
        p = x?.subscriptionTrial?.skuId,
        A = h?.hasActiveTrial ? f?.premiumType : null,
        j = (0, O.Lj)(A, p),
        E = null != j,
        R = (0, m.q)((0, g.Ay)()),
        C = d ? z.intl.string(z.t.tUbSDK) : z.intl.string(z.t["t9uG/o"]),
        P = (0, n.jsxs)(W, {
            footer: t,
            children: [
                E && (0, n.jsx)(k.R, { text: j, className: Z.pill }),
                (0, n.jsx)(u.D, {
                    variant: "nitro-md",
                    color: R ? "text-strong" : "text-overlay-light",
                    className: Z.cardTitle,
                    children: C,
                }),
                (0, n.jsx)(B.A, {
                    isGift: s,
                    premiumTier: U.PremiumTypes.TIER_0,
                    offerType: U.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: p === U.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: l,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Z.priceHeader,
                }),
                (0, n.jsx)("hr", { className: Z.divider }),
                (0, n.jsx)(L.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        T = a()(Z.card, Z.tier0, i, { [Z.pillMargin]: !c && E });
    return (0, n.jsx)("div", { className: T, children: P });
}
var X =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function $(e) {
    let { discountOffer: t, priceOptions: r, isGift: i, narrowLayout: l = !1 } = e,
        a = (0, G.N1)(U.gD.PREMIUM_YEAR_TIER_2),
        u = s.useMemo(() => {
            try {
                let e = (0, R.y8)(U.gD.PREMIUM_YEAR_TIER_2, !1, i, r);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, r]);
    return null == a || null == u
        ? null
        : (0, n.jsxs)("div", {
              className: Z.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: Z.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(h.E, {
                              variant: l ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: z.intl.format(z.t["TCFNZ/"], { discountedPrice: a }),
                          }),
                          (0, n.jsx)(h.E, {
                              variant: l ? "text-xs/normal" : "text-sm/normal",
                              children: z.intl.format(z.t.aUTlph, { regularPrice: u }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(k.R, { text: z.intl.formatToPlainString(z.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function J(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = L.Nz.DEFAULT,
            className: s,
            isGift: l = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: h = !1,
            wumpusPosition: x = "inCard",
            isApplicationHome: p = !1,
            showWumpus: A = !0,
            showPill: j = !0,
            narrowLayout: E = !1,
        } = e,
        R = (0, o.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        C = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        y = (0, S.V)(),
        _ = y?.subscriptionTrial?.skuId,
        b = R?.hasActiveTrial ? C?.premiumType : null,
        w = R?.planIdFromItems === U.gD.PREMIUM_YEAR_TIER_2,
        F = (0, I.O)(),
        H = (0, I.p)(),
        K = (0, P.k5)(),
        X = null != _ || null != b ? U.Vk.PREMIUM_TRIAL : null != F || K ? U.Vk.PREMIUM_DISCOUNT : null,
        J = (0, m.q)((0, g.Ay)()),
        Q = null != H && !l,
        ee = !l && null != F && (0, G.hm)(F),
        et = !l && K && w && X === U.Vk.PREMIUM_DISCOUNT,
        er = (0, O.rm)(K, b, l ? null : F, y, _),
        ei = (0, M.Sq)() && !l && null == X,
        en = null != t || h ? (0, n.jsxs)(n.Fragment, { children: [t, h && (0, n.jsx)(T.b, {})] }) : null,
        es = c && !l,
        el = (0, n.jsxs)(W, {
            footer: en,
            children: [
                A &&
                    !Q &&
                    !et &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !ee &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: Y, alt: "", className: a()(Z.bigCloud, Z[x]) }),
                                            (0, n.jsx)("img", { src: V, alt: "", className: a()(Z.smallCloud, Z[x]) }),
                                        ],
                                    }),
                                (!ee || null != t) &&
                                    (0, n.jsx)("img", {
                                        src: q,
                                        alt: "",
                                        className: a()(Z.wumpus, Z[x], { [Z.withAnnualDiscountBanner]: ee }),
                                    }),
                            ],
                        });
                    }, {}),
                j &&
                    !ee &&
                    (0, n.jsx)(k.R, {
                        text:
                            er ??
                            (ei
                                ? z.intl.formatToPlainString(z.t["4SEnCZ"], { months: 1 })
                                : z.intl.string(z.t["6bEcYr"])),
                        className: Z.pill,
                    }),
                (0, n.jsx)(u.D, {
                    variant: "nitro-md",
                    color: J ? "text-strong" : "text-overlay-light",
                    className: Z.cardTitle,
                    children: z.intl.string(z.t.lG6a5x),
                }),
                (0, n.jsx)(B.A, {
                    isGift: l,
                    premiumTier: U.PremiumTypes.TIER_2,
                    offerType: X,
                    offerTierMatchesCard: _ === U.pe.TIER_2 || (0, G.U9)(F, U.pe.TIER_2),
                    showYearlyPrice: r && !ee,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Z.priceHeader,
                }),
                ee
                    ? (0, n.jsx)($, { discountOffer: F, priceOptions: d, isGift: l, narrowLayout: E })
                    : (0, n.jsx)("hr", { className: Z.divider }),
                (0, n.jsx)(L.ZP, {
                    featureSet: i,
                    isModal: c,
                    isGift: l,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: p,
                    firstFeatureItemClassName:
                        ee || ("inCard" !== x && "giftSelectionModal" !== x) ? void 0 : Z.firstFeatureItemContainer,
                }),
                es && (0, n.jsx)(D.K, {}),
            ],
        }),
        ea = a()(Z.card, s, { [Z.withGiftBanner]: h });
    return Q
        ? (0, n.jsx)("div", { className: ea, children: el })
        : (0, n.jsx)(f.h, { color: "nitro-pink", className: ea, children: el });
}
function Q(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: s } = e,
        l = (0, m.q)((0, g.Ay)()),
        o = (0, I.p)(),
        c = (0, n.jsxs)(W, {
            footer: r,
            children: [
                (0, n.jsxs)("div", {
                    className: Z.cardHeader,
                    children: [
                        (0, n.jsx)(u.D, {
                            variant: "nitro-md",
                            color: l ? "text-strong" : "text-overlay-light",
                            className: Z.cardTitle,
                            children: z.intl.string(H.default.eSKiXk),
                        }),
                        (0, n.jsx)(k.R, {
                            text: z.intl.string(z.t.oW0eUd),
                            className: Z.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, n.jsx)(w.A, { discountOffer: o, priceOptions: s, isApplicationHome: i }),
                (0, n.jsx)(L.Lg, { isApplicationHome: i }),
            ],
        });
    return null != o
        ? (0, n.jsx)(f.h, { color: "nitro-pink", className: a()(Z.card, t), children: c })
        : (0, n.jsx)("div", { className: a()(Z.card, Z.borderGradient, t), children: c });
}
function ee(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: s, narrowLayout: l } = e,
        u = t === U.pe.TIER_2,
        o = (0, I.p)(),
        { subscribeButtonProps: m, subscriptionTier: h } = (0, b.$)({
            subscriptionTier: t,
            variantOverride: u && null == o ? "expressive" : "secondary",
        }),
        { disabled: f } = m,
        p = (0, n.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: f }),
        g = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(Z.tierCardStack, { [Z.premiumCardHover]: !r }),
            children: (0, n.jsx)(u ? J : K, {
                className: a()(Z.applicationHomeCard, { [Z.narrow]: l }),
                ctaButton: p,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(Z.tierCardStack, s),
        children: f
            ? g
            : (0, n.jsx)(_.A, {
                  subscriptionTier: h,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(x.D, { onClick: t, className: Z.tierCardStack, children: g });
                  },
              }),
    });
}
function et(e) {
    let { isReducedMotion: t, className: r } = e,
        i = (0, I.p)(),
        s = null != i,
        l = (0, o.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        u = null != l && (0, R.Nc)(l),
        m = s
            ? z.intl.format(H.default["7j70dP"], { percent: i.discount?.amount, premiumGroupProductName: (0, F.DP)() })
            : z.intl.string(z.t["2pG5Ga"]),
        h = (0, n.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: p.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: u,
        }),
        f = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(Z.tierCardStack, { [Z.premiumCardHover]: !t }),
            children: (0, n.jsx)(Q, {
                className: a()(Z.applicationHomeCard, Z.narrow),
                ctaButton: h,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(Z.tierCardStack, r),
        children: u
            ? f
            : (0, n.jsx)(_.A, {
                  subscriptionTier: U.pe.TIER_2,
                  initialPlanId: U.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(x.D, { onClick: t, className: Z.tierCardStack, children: f });
                  },
              }),
    });
}
function er(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, E.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, L.pw)(t),
        l = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        c = (0, y.PA)();
    return (0, n.jsx)(E.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: a()(Z.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(u.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: Z.premiumCardsHeader,
                    children: z.intl.string(z.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: s,
                    className: Z.premiumCards,
                    children: [
                        (0, n.jsx)(ee, {
                            subscriptionTier: U.pe.TIER_0,
                            isReducedMotion: l,
                            className: Z.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, n.jsx)(ee, {
                            subscriptionTier: U.pe.TIER_2,
                            isReducedMotion: l,
                            className: Z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, n.jsx)(et, { isReducedMotion: l, className: Z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
