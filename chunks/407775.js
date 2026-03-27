r.d(t, { AP: () => w, KV: () => H, Rf: () => F, hy: () => V, r6: () => K });
var n,
    i = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(311907),
    c = r(732955),
    d = r(582754),
    m = r(397927),
    u = r(736653),
    T = r(775602),
    g = r(793574),
    I = r(688810),
    x = r(287809),
    p = r(166403),
    _ = r(526292),
    f = r(932003),
    A = r(422936),
    h = r(234419),
    N = r(612669),
    E = r(783420),
    R = r(204413),
    j = r(511484),
    v = r(356309),
    P = r(257284),
    S = r(795269),
    b = r(501007),
    y = r(90526),
    M = r(788868),
    U = r(518582),
    L = r(985018),
    G = r(10273),
    C = r(232266),
    O = r(243002),
    D = r(241988);
function w(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: n,
            isGift: a = !1,
            priceOptions: c,
            isApplicationHome: T = !1,
            useShortTitle: g = !1,
        } = e,
        I = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        _ = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        f = (0, h.V)(),
        A = f?.subscription_trial?.sku_id,
        N = I?.hasActiveTrial ? _?.premiumType : null,
        E = (0, S.Lj)(N, A),
        R = null != E,
        j = (0, d.qB)((0, u.Ay)()),
        P = g ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                R && (0, i.jsx)(v.D, { text: E, className: G.pill }),
                (0, i.jsx)(l.D, {
                    variant: "display-md",
                    color: j ? "text-strong" : "always-white",
                    className: G.cardTitle,
                    children: P,
                }),
                (0, i.jsx)(y.A, {
                    isGift: a,
                    premiumTier: M.PremiumTypes.TIER_0,
                    offerType: M.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: A === M.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: c,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: G.priceHeader,
                }),
                (0, i.jsx)("hr", { className: G.divider }),
                (0, i.jsx)(b.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: T }),
                t,
            ],
        });
    return (0, i.jsx)(m.hLv, {
        color: "nitro-green",
        className: s()(G.card, G.tier0, n, { [G.pillMargin]: !T && R }),
        children: U,
    });
}
var F =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function H(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: n = b.Nz.DEFAULT,
            className: a,
            isGift: c = !1,
            isModal: T = !1,
            priceOptions: g,
            showPromotionalGiftBanner: I = !1,
            wumpusPosition: N = "inCard",
            isApplicationHome: E = !1,
            showWumpus: R = !0,
            showPill: P = !0,
        } = e,
        U = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        w = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        F = (0, h.V)(),
        H = F?.subscription_trial?.sku_id,
        K = U?.hasActiveTrial ? w?.premiumType : null,
        k = (0, A.O)(),
        B = (0, _.k5)(),
        V = null != H || null != K ? M.Vk.PREMIUM_TRIAL : null != k || B ? M.Vk.PREMIUM_DISCOUNT : null,
        W = (0, d.qB)((0, u.Ay)()),
        J = (0, S.rm)(B, K, k, F, H);
    return (0, i.jsxs)(m.hLv, {
        color: "nitro-pink",
        className: s()(G.card, a, { [G.withGiftBanner]: I }),
        children: [
            R &&
                (0, i.jsx)(
                    () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("img", { src: O, alt: "", className: s()(G.bigCloud, G[N]) }),
                                (0, i.jsx)("img", { src: C, alt: "", className: s()(G.smallCloud, G[N]) }),
                                (0, i.jsx)("img", { src: D, alt: "", className: s()(G.wumpus, G[N]) }),
                            ],
                        }),
                    {},
                ),
            P && (0, i.jsx)(v.D, { text: J ?? L.intl.string(L.t["6bEcYr"]), className: G.pill }),
            (0, i.jsx)(l.D, {
                variant: "display-md",
                color: W ? "text-strong" : "always-white",
                className: G.cardTitle,
                children: L.intl.string(L.t.lG6a5x),
            }),
            (0, i.jsx)(y.A, {
                isGift: c,
                premiumTier: M.PremiumTypes.TIER_2,
                offerType: V,
                offerTierMatchesCard: H === M.pe.TIER_2 || (0, j.U9)(k, M.pe.TIER_2),
                showYearlyPrice: r,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: G.priceHeader,
            }),
            (0, i.jsx)("hr", { className: G.divider }),
            (0, i.jsx)(b.ZP, {
                featureSet: n,
                isModal: T,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: E,
                firstFeatureItemClassName:
                    "inCard" === N || "giftSelectionModal" === N ? G.firstFeatureItemContainer : void 0,
            }),
            t,
            I && (0, i.jsx)(f.b, {}),
        ],
    });
}
function K(e) {
    let { className: t, ctaButton: r, isApplicationHome: n, priceOptions: a } = e,
        o = (0, d.qB)((0, u.Ay)());
    return (0, i.jsxs)("div", {
        className: s()(G.card, G.borderGradient, t),
        children: [
            (0, i.jsxs)("div", {
                className: G.cardHeader,
                children: [
                    (0, i.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: G.cardTitle,
                        children: L.intl.string(U.default.eSKiXk),
                    }),
                    (0, i.jsx)(v.D, { text: L.intl.string(L.t.oW0eUd), className: G.betaPill }),
                ],
            }),
            (0, i.jsx)(P.A, { priceOptions: a }),
            (0, i.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: L.intl.string(U.default["R+dzZw"]),
            }),
            (0, i.jsx)("hr", { className: G.divider }),
            (0, i.jsx)(b.Lg, { isApplicationHome: n }),
            r,
        ],
    });
}
let k = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: n, className: a, narrowLayout: l } = e,
            o = t === M.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: u } = (0, R.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: T } = d,
            g = (0, i.jsx)("div", {
                className: G.CTAButton,
                children: (0, i.jsx)(c.$nd, { size: "md", fullWidth: !0, ...d, disabled: T }),
            }),
            I = (0, i.jsx)("div", {
                className: s()({ [G.premiumCardHover]: !r }),
                children: (0, i.jsx)(o ? H : w, {
                    className: s()(G.applicationHomeCard, { [G.narrow]: l }),
                    ctaButton: g,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...n,
                }),
            });
        return (0, i.jsx)("div", {
            className: a,
            children: T
                ? I
                : (0, i.jsx)(E.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, i.jsx)(m.DUT, { onClick: t, style: { cursor: "pointer" }, children: I });
                      },
                  }),
        });
    },
    B = (e) => {
        let { isReducedMotion: t, className: r } = e,
            n = (0, i.jsx)("div", {
                className: G.CTAButton,
                children: (0, i.jsx)(c.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: m.tvc,
                    text: L.intl.string(L.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, i.jsx)("div", {
                className: s()({ [G.premiumCardHover]: !t }),
                children: (0, i.jsx)(K, {
                    className: s()(G.applicationHomeCard, G.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, i.jsx)(E.A, {
            subscriptionTier: M.pe.TIER_2,
            initialPlanId: M.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)("div", {
                    className: r,
                    children: (0, i.jsx)(m.DUT, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function V(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: n } = (0, I.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, b.pw)(t),
        c = (0, o.bG)([T.A], () => T.A.useReducedMotion),
        d = (0, N.PA)();
    return (0, i.jsx)(I.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: s()(G.premiumCardsContainer, r),
            children: [
                (0, i.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: G.premiumCardsHeader,
                    children: L.intl.string(L.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: a,
                    className: G.premiumCards,
                    children: [
                        (0, i.jsx)(k, {
                            subscriptionTier: M.pe.TIER_0,
                            isReducedMotion: c,
                            className: G.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, i.jsx)(k, {
                            subscriptionTier: M.pe.TIER_2,
                            isReducedMotion: c,
                            className: G.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, i.jsx)(B, { isReducedMotion: c, className: G.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
