r.d(t, { jP: () => es, Rf: () => ee, oK: () => er, r6: () => ei, MR: () => X });
var i,
    n = r(627968),
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
    p = r(403581),
    T = r(736653),
    h = r(775602),
    I = r(793574),
    f = r(688810),
    j = r(287809),
    R = r(166403),
    _ = r(428262),
    A = r(580630),
    E = r(526292),
    v = r(877624),
    P = r(937008),
    N = r(807098),
    C = r(374200),
    y = r(380619),
    M = r(375708),
    b = r(756974);
function U() {
    let { claimableRewards: e } = (0, P.Pv)(),
        t = (0, c.bG)([C.A], () => {
            let e = C.A.getMarketingComponentByType(v.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, N.T)(t?.bannerAsset),
        i = (0, N.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let a = (0, y.gc)(r),
        s = t?.gradient,
        l =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, y.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, y.x)(a, l);
    return (0, n.jsxs)("div", {
        className: b.kL,
        style: o,
        children: [
            (0, n.jsxs)("div", {
                className: b.V_,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.OEtqpm),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: M.intl.formatToPlainString(M.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i && (0, n.jsx)("img", { alt: "gift promotion reward", src: i, className: b.my }),
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
    k = r(289873),
    F = r(97352),
    B = r(788868),
    V = r(378874);
let Z = function (e) {
    let { isGift: t = !1, priceOptions: r } = e,
        i = (0, c.bG)([F.A], () => F.A.get(B.gD.PREMIUM_GROUP_MONTH)),
        a = (0, u.q)((0, T.Ay)());
    if (null == i) return (0, n.jsx)(k.y, { type: k.y.Type.PULSING_ELLIPSIS, className: V.xB });
    let s = (0, _.sS)(i, r, !1, t),
        l = B.WT.MONTH;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(g.E, {
                variant: "heading-xxl/extrabold",
                color: a ? "text-strong" : "always-white",
                tag: "span",
                children: s,
            }),
            (0, n.jsxs)(g.E, {
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
            className: i,
            isGift: a = !1,
            priceOptions: s,
            isApplicationHome: d = !1,
            useShortTitle: g = !1,
        } = e,
        x = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        p = (0, c.bG)([j.default], () => j.default.getCurrentUser()),
        h = (0, w.V)(),
        I = h?.subscription_trial?.sku_id,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        _ = (0, H.Lj)(f, I),
        A = null != _,
        E = (0, u.q)((0, T.Ay)()),
        v = g ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]),
        P = (0, n.jsxs)(n.Fragment, {
            children: [
                A && (0, n.jsx)(W.R, { text: _, className: z.pill }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: E ? "text-strong" : "always-white",
                    className: z.cardTitle,
                    children: v,
                }),
                (0, n.jsx)(Y.A, {
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
                (0, n.jsx)("hr", { className: z.divider }),
                (0, n.jsx)(J.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
                t,
            ],
        }),
        N = (0, S.O)(),
        C = null != N && B.U4.includes(N.discountId),
        y = l()(z.card, z.tier0, i, { [z.pillMargin]: !d && A, [z.noGradient]: C });
    return (0, n.jsx)(m.h, { color: "nitro-green", className: y, children: P });
}
var ee =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function et(e) {
    let { discountOffer: t, priceOptions: r, isGift: i } = e,
        s = (0, D.N1)(B.gD.PREMIUM_YEAR_TIER_2),
        l = a.useMemo(() => {
            try {
                let e = (0, _.y8)(B.gD.PREMIUM_YEAR_TIER_2, !1, i, r);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, r]);
    return null == s || null == l
        ? null
        : (0, n.jsxs)("div", {
              className: z.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: z.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(g.E, {
                              variant: "text-md/semibold",
                              color: "always-white",
                              children: M.intl.format(M.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(g.E, {
                              variant: "text-sm/normal",
                              children: M.intl.format(M.t.aUTlph, { regularPrice: l }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(W.R, { text: M.intl.formatToPlainString(M.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function er(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = J.Nz.DEFAULT,
            className: a,
            isGift: s = !1,
            isModal: d = !1,
            priceOptions: g,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: p = "inCard",
            isApplicationHome: h = !1,
            showWumpus: I = !0,
            showPill: f = !0,
        } = e,
        _ = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        A = (0, c.bG)([j.default], () => j.default.getCurrentUser()),
        v = (0, w.V)(),
        P = v?.subscription_trial?.sku_id,
        N = _?.hasActiveTrial ? A?.premiumType : null,
        C = (0, S.O)(),
        y = (0, E.k5)(),
        b = null != P || null != N ? B.Vk.PREMIUM_TRIAL : null != C || y ? B.Vk.PREMIUM_DISCOUNT : null,
        L = (0, u.q)((0, T.Ay)()),
        O = (0, H.rm)(y, N, C, v, P),
        G = !s && null != C && B.U4.includes(C.discountId);
    return (0, n.jsxs)(m.h, {
        color: "nitro-pink",
        className: l()(z.card, a, { [z.withGiftBanner]: x }),
        children: [
            I &&
                !G &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: Q, alt: "", className: l()(z.bigCloud, z[p]) }),
                                (0, n.jsx)("img", { src: q, alt: "", className: l()(z.smallCloud, z[p]) }),
                                (0, n.jsx)("img", { src: $, alt: "", className: l()(z.wumpus, z[p]) }),
                            ],
                        }),
                    {},
                ),
            f && !G && (0, n.jsx)(W.R, { text: O ?? M.intl.string(M.t["6bEcYr"]), className: z.pill }),
            (0, n.jsx)(o.D, {
                variant: "display-md",
                color: L ? "text-strong" : "always-white",
                className: z.cardTitle,
                children: M.intl.string(M.t.lG6a5x),
            }),
            (0, n.jsx)(Y.A, {
                isGift: s,
                premiumTier: B.PremiumTypes.TIER_2,
                offerType: b,
                offerTierMatchesCard: P === B.pe.TIER_2 || (0, D.U9)(C, B.pe.TIER_2),
                showYearlyPrice: r && !G,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: z.priceHeader,
            }),
            G && (0, n.jsx)(et, { discountOffer: C, priceOptions: g, isGift: s }),
            (0, n.jsx)("hr", { className: z.divider }),
            (0, n.jsx)(J.ZP, {
                featureSet: i,
                isModal: d,
                isGift: s,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: h,
                firstFeatureItemClassName:
                    G || ("inCard" !== p && "giftSelectionModal" !== p) ? void 0 : z.firstFeatureItemContainer,
            }),
            t,
            x && (0, n.jsx)(U, {}),
        ],
    });
}
function ei(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: a } = e,
        s = (0, u.q)((0, T.Ay)());
    return (0, n.jsxs)("div", {
        className: l()(z.card, z.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: z.cardHeader,
                children: [
                    (0, n.jsx)(o.D, {
                        variant: "display-md",
                        color: s ? "text-strong" : "always-white",
                        className: z.cardTitle,
                        children: M.intl.string(K.default.eSKiXk),
                    }),
                    (0, n.jsx)(W.R, { text: M.intl.string(M.t.oW0eUd), className: z.betaPill }),
                ],
            }),
            (0, n.jsx)(Z, { priceOptions: a }),
            (0, n.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: M.intl.string(K.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: z.divider }),
            (0, n.jsx)(J.Lg, { isApplicationHome: i }),
            r,
        ],
    });
}
let en = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: a, narrowLayout: s } = e,
            o = t === B.pe.TIER_2,
            { subscribeButtonProps: c, subscriptionTier: u } = (0, G.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: m } = c,
            g = (0, n.jsx)("div", {
                className: z.CTAButton,
                children: (0, n.jsx)(d.$, { size: "md", fullWidth: !0, ...c, disabled: m }),
            }),
            p = (0, n.jsx)("div", {
                className: l()({ [z.premiumCardHover]: !r }),
                children: (0, n.jsx)(o ? er : X, {
                    className: l()(z.applicationHomeCard, { [z.narrow]: s }),
                    ctaButton: g,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, n.jsx)("div", {
            className: a,
            children: m
                ? p
                : (0, n.jsx)(O.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, n.jsx)(x.D, { onClick: t, style: { cursor: "pointer" }, children: p });
                      },
                  }),
        });
    },
    ea = (e) => {
        let { isReducedMotion: t, className: r } = e,
            i = (0, n.jsx)("div", {
                className: z.CTAButton,
                children: (0, n.jsx)(d.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: p.t,
                    text: M.intl.string(M.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, n.jsx)("div", {
                className: l()({ [z.premiumCardHover]: !t }),
                children: (0, n.jsx)(ei, {
                    className: l()(z.applicationHomeCard, z.narrow),
                    ctaButton: i,
                    isApplicationHome: !0,
                }),
            });
        return (0, n.jsx)(O.A, {
            subscriptionTier: B.pe.TIER_2,
            initialPlanId: B.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, n.jsx)("div", {
                    className: r,
                    children: (0, n.jsx)(x.D, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function es(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, f.Ay)(I.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, J.pw)(t),
        s = (0, c.bG)([h.A], () => h.A.useReducedMotion),
        d = (0, L.PA)();
    return (0, n.jsx)(f.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: l()(z.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: z.premiumCardsHeader,
                    children: M.intl.string(M.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: a,
                    className: z.premiumCards,
                    children: [
                        (0, n.jsx)(en, {
                            subscriptionTier: B.pe.TIER_0,
                            isReducedMotion: s,
                            className: z.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(en, {
                            subscriptionTier: B.pe.TIER_2,
                            isReducedMotion: s,
                            className: z.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(ea, { isReducedMotion: s, className: z.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
