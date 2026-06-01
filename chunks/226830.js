r.d(t, { jP: () => es, Rf: () => ee, oK: () => er, r6: () => en, MR: () => X });
var n,
    i = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    o = r(534514),
    c = r(17928),
    d = r(821609),
    u = r(462887),
    m = r(315629),
    g = r(834730),
    x = r(939249),
    T = r(403581),
    p = r(736653),
    h = r(775602),
    I = r(793574),
    f = r(688810),
    j = r(287809),
    R = r(166403),
    _ = r(428262),
    E = r(580630),
    A = r(526292),
    v = r(877624),
    P = r(937008),
    N = r(807098),
    M = r(374200),
    y = r(380619),
    C = r(375708),
    b = r(756974);
function U() {
    let { claimableRewards: e } = (0, P.Pv)(),
        t = (0, c.bG)([M.A], () => {
            let e = M.A.getMarketingComponentByType(v.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, N.T)(t?.bannerAsset),
        n = (0, N.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let a = (0, y.gc)(r),
        s = t?.gradient,
        l =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, y.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, y.x)(a, l);
    return (0, i.jsxs)("div", {
        className: b.kL,
        style: o,
        children: [
            (0, i.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, i.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: C.intl.string(C.t.OEtqpm),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: C.intl.formatToPlainString(C.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != n && (0, i.jsx)("img", { alt: "gift promotion reward", src: n, className: b.my }),
        ],
    });
}
var S = r(422936),
    w = r(234419),
    L = r(39423),
    O = r(783420),
    G = r(204413),
    D = r(410516),
    H = r(774774),
    F = r(289873),
    k = r(97352),
    B = r(788868),
    V = r(378874);
let Z = function (e) {
    let { isGift: t = !1, priceOptions: r } = e,
        n = (0, c.bG)([k.A], () => k.A.get(B.gD.PREMIUM_GROUP_MONTH)),
        a = (0, u.q)((0, p.Ay)());
    if (null == n) return (0, i.jsx)(F.y, { type: F.y.Type.PULSING_ELLIPSIS, className: V.xB });
    let s = (0, _.sS)(n, r, !1, t),
        l = B.WT.MONTH;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(g.E, {
                variant: "heading-xxl/extrabold",
                color: a ? "text-strong" : "always-white",
                tag: "span",
                children: s,
            }),
            (0, i.jsxs)(g.E, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, _.FJ)(l)],
            }),
        ],
    });
};
var W = r(795269),
    J = r(860839),
    Y = r(222719),
    K = r(466919),
    z = r(115599),
    q = r(232266),
    Q = r(243002),
    $ = r(241988);
function X(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: n,
            isGift: a = !1,
            priceOptions: s,
            isApplicationHome: d = !1,
            useShortTitle: g = !1,
        } = e,
        x = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        T = (0, c.bG)([j.default], () => j.default.getCurrentUser()),
        h = (0, w.V)(),
        I = h?.subscription_trial?.sku_id,
        f = x?.hasActiveTrial ? T?.premiumType : null,
        _ = (0, H.Lj)(f, I),
        E = null != _,
        A = (0, u.q)((0, p.Ay)()),
        v = g ? C.intl.string(C.t.tUbSDK) : C.intl.string(C.t["t9uG/o"]),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                E && (0, i.jsx)(W.R, { text: _, className: z.pill }),
                (0, i.jsx)(o.D, {
                    variant: "display-md",
                    color: A ? "text-strong" : "always-white",
                    className: z.cardTitle,
                    children: v,
                }),
                (0, i.jsx)(Y.A, {
                    isGift: a,
                    premiumTier: B.PremiumTypes.TIER_0,
                    offerType: B.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: I === B.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: s,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: z.priceHeader,
                }),
                (0, i.jsx)("hr", { className: z.divider }),
                (0, i.jsx)(J.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
                t,
            ],
        }),
        N = (0, S.O)(),
        M = null != N && B.U4.includes(N.discountId),
        y = l()(z.card, z.tier0, n, { [z.pillMargin]: !d && E, [z.noGradient]: M });
    return (0, i.jsx)(m.h, { color: "nitro-green", className: y, children: P });
}
var ee =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function et(e) {
    let { discountOffer: t, priceOptions: r, isGift: n } = e,
        s = (0, D.N1)(B.gD.PREMIUM_YEAR_TIER_2),
        l = a.useMemo(() => {
            try {
                let e = (0, _.y8)(B.gD.PREMIUM_YEAR_TIER_2, !1, n, r);
                return (0, E.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [n, r]);
    return null == s || null == l
        ? null
        : (0, i.jsxs)("div", {
              className: z.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: z.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "text-md/semibold",
                              color: "always-white",
                              children: C.intl.format(C.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(g.E, {
                              variant: "text-sm/normal",
                              children: C.intl.format(C.t.aUTlph, { regularPrice: l }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(W.R, { text: C.intl.formatToPlainString(C.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function er(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: n = J.Nz.DEFAULT,
            className: a,
            isGift: s = !1,
            isModal: d = !1,
            priceOptions: g,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: T = "inCard",
            isApplicationHome: h = !1,
            showWumpus: I = !0,
            showPill: f = !0,
        } = e,
        _ = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        E = (0, c.bG)([j.default], () => j.default.getCurrentUser()),
        v = (0, w.V)(),
        P = v?.subscription_trial?.sku_id,
        N = _?.hasActiveTrial ? E?.premiumType : null,
        M = (0, S.O)(),
        y = (0, A.k5)(),
        b = null != P || null != N ? B.Vk.PREMIUM_TRIAL : null != M || y ? B.Vk.PREMIUM_DISCOUNT : null,
        L = (0, u.q)((0, p.Ay)()),
        O = (0, H.rm)(y, N, M, v, P),
        G = !s && null != M && B.U4.includes(M.discountId);
    return (0, i.jsxs)(m.h, {
        color: "nitro-pink",
        className: l()(z.card, a, { [z.withGiftBanner]: x }),
        children: [
            I &&
                (0, i.jsx)(
                    () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                !G &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: Q, alt: "", className: l()(z.bigCloud, z[T]) }),
                                            (0, i.jsx)("img", { src: q, alt: "", className: l()(z.smallCloud, z[T]) }),
                                        ],
                                    }),
                                (!G || null != t) &&
                                    (0, i.jsx)("img", { src: $, alt: "", className: l()(z.wumpus, z[T]) }),
                            ],
                        }),
                    {},
                ),
            f && !G && (0, i.jsx)(W.R, { text: O ?? C.intl.string(C.t["6bEcYr"]), className: z.pill }),
            (0, i.jsx)(o.D, {
                variant: "display-md",
                color: L ? "text-strong" : "always-white",
                className: z.cardTitle,
                children: C.intl.string(C.t.lG6a5x),
            }),
            (0, i.jsx)(Y.A, {
                isGift: s,
                premiumTier: B.PremiumTypes.TIER_2,
                offerType: b,
                offerTierMatchesCard: P === B.pe.TIER_2 || (0, D.U9)(M, B.pe.TIER_2),
                showYearlyPrice: r && !G,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: z.priceHeader,
            }),
            G
                ? (0, i.jsx)(et, { discountOffer: M, priceOptions: g, isGift: s })
                : (0, i.jsx)("hr", { className: z.divider }),
            (0, i.jsx)(J.ZP, {
                featureSet: n,
                isModal: d,
                isGift: s,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: h,
                firstFeatureItemClassName:
                    G || ("inCard" !== T && "giftSelectionModal" !== T) ? void 0 : z.firstFeatureItemContainer,
            }),
            t,
            x && (0, i.jsx)(U, {}),
        ],
    });
}
function en(e) {
    let { className: t, ctaButton: r, isApplicationHome: n, priceOptions: a } = e,
        s = (0, u.q)((0, p.Ay)());
    return (0, i.jsxs)("div", {
        className: l()(z.card, z.borderGradient, t),
        children: [
            (0, i.jsxs)("div", {
                className: z.cardHeader,
                children: [
                    (0, i.jsx)(o.D, {
                        variant: "display-md",
                        color: s ? "text-strong" : "always-white",
                        className: z.cardTitle,
                        children: C.intl.string(K.default.eSKiXk),
                    }),
                    (0, i.jsx)(W.R, { text: C.intl.string(C.t.oW0eUd), className: z.betaPill }),
                ],
            }),
            (0, i.jsx)(Z, { priceOptions: a }),
            (0, i.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: C.intl.string(K.default["R+dzZw"]),
            }),
            (0, i.jsx)("hr", { className: z.divider }),
            (0, i.jsx)(J.Lg, { isApplicationHome: n }),
            r,
        ],
    });
}
let ei = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: n, className: a, narrowLayout: s } = e,
            o = t === B.pe.TIER_2,
            { subscribeButtonProps: c, subscriptionTier: u } = (0, G.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: m } = c,
            g = (0, i.jsx)("div", {
                className: z.CTAButton,
                children: (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...c, disabled: m }),
            }),
            T = (0, i.jsx)("div", {
                className: l()({ [z.premiumCardHover]: !r }),
                children: (0, i.jsx)(o ? er : X, {
                    className: l()(z.applicationHomeCard, { [z.narrow]: s }),
                    ctaButton: g,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...n,
                }),
            });
        return (0, i.jsx)("div", {
            className: a,
            children: m
                ? T
                : (0, i.jsx)(O.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, i.jsx)(x.D, { onClick: t, style: { cursor: "pointer" }, children: T });
                      },
                  }),
        });
    },
    ea = (e) => {
        let { isReducedMotion: t, className: r } = e,
            n = (0, i.jsx)("div", {
                className: z.CTAButton,
                children: (0, i.jsx)(d.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: T.t,
                    text: C.intl.string(C.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, i.jsx)("div", {
                className: l()({ [z.premiumCardHover]: !t }),
                children: (0, i.jsx)(en, {
                    className: l()(z.applicationHomeCard, z.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, i.jsx)(O.A, {
            subscriptionTier: B.pe.TIER_2,
            initialPlanId: B.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)("div", {
                    className: r,
                    children: (0, i.jsx)(x.D, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function es(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: n } = (0, f.Ay)(I.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, J.pw)(t),
        s = (0, c.bG)([h.A], () => h.A.useReducedMotion),
        d = (0, L.PA)();
    return (0, i.jsx)(f.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: l()(z.premiumCardsContainer, r),
            children: [
                (0, i.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: z.premiumCardsHeader,
                    children: C.intl.string(C.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: a,
                    className: z.premiumCards,
                    children: [
                        (0, i.jsx)(ei, {
                            subscriptionTier: B.pe.TIER_0,
                            isReducedMotion: s,
                            className: z.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, i.jsx)(ei, {
                            subscriptionTier: B.pe.TIER_2,
                            isReducedMotion: s,
                            className: z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, i.jsx)(ea, { isReducedMotion: s, className: z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
