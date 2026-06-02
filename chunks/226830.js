i.d(r, { jP: () => en, Rf: () => ee, oK: () => ei, r6: () => et, MR: () => Q });
var t,
    s = i(627968),
    a = i(64700),
    n = i(503698),
    l = i.n(n),
    d = i(534514),
    o = i(17928),
    c = i(821609),
    m = i(462887),
    u = i(315629),
    p = i(834730),
    x = i(939249),
    h = i(403581),
    j = i(736653),
    g = i(775602),
    T = i(793574),
    N = i(688810),
    f = i(287809),
    C = i(166403),
    R = i(428262),
    v = i(580630),
    y = i(526292),
    A = i(877624),
    E = i(259160),
    _ = i(807098),
    P = i(374200),
    I = i(380619),
    M = i(375708),
    b = i(756974);
function w() {
    let { claimableRewards: e } = (0, E.Pv)(),
        r = (0, o.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(A.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, _.T)(r?.bannerAsset),
        t = (0, _.T)(r?.avatarAsset);
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, I.gc)(i),
        n = r?.gradient,
        l =
            null != n && null != n.colors && n.colors.length >= 2
                ? (0, I.K5)({ gradient: n.colors, angle: n.angle ?? void 0 })
                : void 0,
        d = (0, I.x)(a, l);
    return (0, s.jsxs)("div", {
        className: b.kL,
        style: d,
        children: [
            (0, s.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, s.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.OEtqpm),
                    }),
                    (0, s.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: M.intl.formatToPlainString(M.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != t && (0, s.jsx)("img", { alt: "gift promotion reward", src: t, className: b.my }),
        ],
    });
}
var G = i(422936),
    O = i(234419),
    D = i(39423),
    S = i(783420),
    U = i(204413),
    k = i(410516),
    H = i(774774),
    B = i(289873),
    L = i(97352),
    F = i(788868),
    V = i(378874);
let K = function (e) {
    let { isGift: r = !1, priceOptions: i } = e,
        t = (0, o.bG)([L.A], () => L.A.get(F.gD.PREMIUM_GROUP_MONTH)),
        a = (0, m.q)((0, j.Ay)());
    if (null == t) return (0, s.jsx)(B.y, { type: B.y.Type.PULSING_ELLIPSIS, className: V.xB });
    let n = (0, R.sS)(t, i, !1, r),
        l = F.WT.MONTH;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(p.E, {
                variant: "heading-xxl/extrabold",
                color: a ? "text-strong" : "always-white",
                tag: "span",
                children: n,
            }),
            (0, s.jsxs)(p.E, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, R.FJ)(l)],
            }),
        ],
    });
};
var Y = i(795269),
    q = i(860839),
    z = i(222719),
    W = i(466919),
    Z = i(115599),
    $ = i(232266),
    X = i(243002),
    J = i(241988);
function Q(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            className: t,
            isGift: a = !1,
            priceOptions: n,
            isApplicationHome: c = !1,
            useShortTitle: p = !1,
        } = e,
        x = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        g = (0, O.V)(),
        T = g?.subscription_trial?.sku_id,
        N = x?.hasActiveTrial ? h?.premiumType : null,
        R = (0, H.Lj)(N, T),
        v = null != R,
        y = (0, m.q)((0, j.Ay)()),
        A = p ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]),
        E = (0, s.jsxs)(s.Fragment, {
            children: [
                v && (0, s.jsx)(Y.R, { text: R, className: Z.pill }),
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: y ? "text-strong" : "always-white",
                    className: Z.cardTitle,
                    children: A,
                }),
                (0, s.jsx)(z.A, {
                    isGift: a,
                    premiumTier: F.PremiumTypes.TIER_0,
                    offerType: F.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: T === F.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: n,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: Z.priceHeader,
                }),
                (0, s.jsx)("hr", { className: Z.divider }),
                (0, s.jsx)(q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
                r,
            ],
        }),
        _ = (0, G.O)(),
        P = l()(Z.card, Z.tier0, t, { [Z.pillMargin]: !c && v, [Z.noGradient]: (0, k.hm)(_) && !a });
    return (0, s.jsx)(u.h, { color: "nitro-green", className: P, children: E });
}
var ee =
    (((t = {}).IN_CARD = "inCard"),
    (t.OUTER_CORNER = "outerCorner"),
    (t.INSIDE_CORNER = "insideCorner"),
    (t.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    t);
function er(e) {
    let { discountOffer: r, priceOptions: i, isGift: t } = e,
        n = (0, k.N1)(F.gD.PREMIUM_YEAR_TIER_2),
        l = a.useMemo(() => {
            try {
                let e = (0, R.y8)(F.gD.PREMIUM_YEAR_TIER_2, !1, t, i);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [t, i]);
    return null == n || null == l
        ? null
        : (0, s.jsxs)("div", {
              className: Z.annualDiscountBanner,
              children: [
                  (0, s.jsxs)("div", {
                      className: Z.annualDiscountBannerText,
                      children: [
                          (0, s.jsx)(p.E, {
                              variant: "text-md/semibold",
                              color: "always-white",
                              children: M.intl.format(M.t["TCFNZ/"], { discountedPrice: n }),
                          }),
                          (0, s.jsx)(p.E, {
                              variant: "text-sm/normal",
                              children: M.intl.format(M.t.aUTlph, { regularPrice: l }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(Y.R, { text: M.intl.formatToPlainString(M.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ei(e) {
    let {
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: t = q.Nz.DEFAULT,
            className: a,
            isGift: n = !1,
            isModal: c = !1,
            priceOptions: p,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: T = !0,
            showPill: N = !0,
        } = e,
        R = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        v = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        A = (0, O.V)(),
        E = A?.subscription_trial?.sku_id,
        _ = R?.hasActiveTrial ? v?.premiumType : null,
        P = (0, G.O)(),
        I = (0, y.k5)(),
        b = null != E || null != _ ? F.Vk.PREMIUM_TRIAL : null != P || I ? F.Vk.PREMIUM_DISCOUNT : null,
        D = (0, m.q)((0, j.Ay)()),
        S = !n && (0, k.hm)(P),
        U = (0, H.rm)(I, _, n ? null : P, A, E);
    return (0, s.jsxs)(u.h, {
        color: "nitro-pink",
        className: l()(Z.card, a, { [Z.withGiftBanner]: x }),
        children: [
            T &&
                (0, s.jsx)(
                    () =>
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                !S &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)("img", { src: X, alt: "", className: l()(Z.bigCloud, Z[h]) }),
                                            (0, s.jsx)("img", { src: $, alt: "", className: l()(Z.smallCloud, Z[h]) }),
                                        ],
                                    }),
                                (!S || null != r) &&
                                    (0, s.jsx)("img", { src: J, alt: "", className: l()(Z.wumpus, Z[h]) }),
                            ],
                        }),
                    {},
                ),
            N && !S && (0, s.jsx)(Y.R, { text: U ?? M.intl.string(M.t["6bEcYr"]), className: Z.pill }),
            (0, s.jsx)(d.D, {
                variant: "display-md",
                color: D ? "text-strong" : "always-white",
                className: Z.cardTitle,
                children: M.intl.string(M.t.lG6a5x),
            }),
            (0, s.jsx)(z.A, {
                isGift: n,
                premiumTier: F.PremiumTypes.TIER_2,
                offerType: b,
                offerTierMatchesCard: E === F.pe.TIER_2 || (0, k.U9)(P, F.pe.TIER_2),
                showYearlyPrice: i && !S,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: Z.priceHeader,
            }),
            S
                ? (0, s.jsx)(er, { discountOffer: P, priceOptions: p, isGift: n })
                : (0, s.jsx)("hr", { className: Z.divider }),
            (0, s.jsx)(q.ZP, {
                featureSet: t,
                isModal: c,
                isGift: n,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: g,
                firstFeatureItemClassName:
                    S || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : Z.firstFeatureItemContainer,
            }),
            r,
            x && (0, s.jsx)(w, {}),
        ],
    });
}
function et(e) {
    let { className: r, ctaButton: i, isApplicationHome: t, priceOptions: a } = e,
        n = (0, m.q)((0, j.Ay)());
    return (0, s.jsxs)("div", {
        className: l()(Z.card, Z.borderGradient, r),
        children: [
            (0, s.jsxs)("div", {
                className: Z.cardHeader,
                children: [
                    (0, s.jsx)(d.D, {
                        variant: "display-md",
                        color: n ? "text-strong" : "always-white",
                        className: Z.cardTitle,
                        children: M.intl.string(W.default.eSKiXk),
                    }),
                    (0, s.jsx)(Y.R, { text: M.intl.string(M.t.oW0eUd), className: Z.betaPill }),
                ],
            }),
            (0, s.jsx)(K, { priceOptions: a }),
            (0, s.jsx)(d.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: M.intl.string(W.default["R+dzZw"]),
            }),
            (0, s.jsx)("hr", { className: Z.divider }),
            (0, s.jsx)(q.Lg, { isApplicationHome: t }),
            i,
        ],
    });
}
let es = (e) => {
        let { subscriptionTier: r, isReducedMotion: i, tierCardProps: t, className: a, narrowLayout: n } = e,
            d = r === F.pe.TIER_2,
            { subscribeButtonProps: o, subscriptionTier: m } = (0, U.$)({
                subscriptionTier: r,
                variantOverride: d ? "expressive" : "secondary",
            }),
            { disabled: u } = o,
            p = (0, s.jsx)("div", {
                className: Z.CTAButton,
                children: (0, s.jsx)(c.$, { size: "md", fullWidth: !0, ...o, disabled: u }),
            }),
            h = (0, s.jsx)("div", {
                className: l()({ [Z.premiumCardHover]: !i }),
                children: (0, s.jsx)(d ? ei : Q, {
                    className: l()(Z.applicationHomeCard, { [Z.narrow]: n }),
                    ctaButton: p,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...t,
                }),
            });
        return (0, s.jsx)("div", {
            className: a,
            children: u
                ? h
                : (0, s.jsx)(S.A, {
                      subscriptionTier: m,
                      children: (e) => {
                          let { onClick: r } = e;
                          return (0, s.jsx)(x.D, { onClick: r, style: { cursor: "pointer" }, children: h });
                      },
                  }),
        });
    },
    ea = (e) => {
        let { isReducedMotion: r, className: i } = e,
            t = (0, s.jsx)("div", {
                className: Z.CTAButton,
                children: (0, s.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: h.t,
                    text: M.intl.string(M.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, s.jsx)("div", {
                className: l()({ [Z.premiumCardHover]: !r }),
                children: (0, s.jsx)(et, {
                    className: l()(Z.applicationHomeCard, Z.narrow),
                    ctaButton: t,
                    isApplicationHome: !0,
                }),
            });
        return (0, s.jsx)(S.A, {
            subscriptionTier: F.pe.TIER_2,
            initialPlanId: F.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: r } = e;
                return (0, s.jsx)("div", {
                    className: i,
                    children: (0, s.jsx)(x.D, { onClick: r, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function en(e) {
    let { innerRef: r, className: i } = e,
        { analyticsLocations: t } = (0, N.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, q.pw)(r),
        n = (0, o.bG)([g.A], () => g.A.useReducedMotion),
        c = (0, D.PA)();
    return (0, s.jsx)(N.f5, {
        value: t,
        children: (0, s.jsxs)("div", {
            className: l()(Z.premiumCardsContainer, i),
            children: [
                (0, s.jsx)(d.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: Z.premiumCardsHeader,
                    children: M.intl.string(M.t.vLz3Zs),
                }),
                (0, s.jsxs)("div", {
                    ref: a,
                    className: Z.premiumCards,
                    children: [
                        (0, s.jsx)(es, {
                            subscriptionTier: F.pe.TIER_0,
                            isReducedMotion: n,
                            className: Z.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, s.jsx)(es, {
                            subscriptionTier: F.pe.TIER_2,
                            isReducedMotion: n,
                            className: Z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, s.jsx)(ea, { isReducedMotion: n, className: Z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
