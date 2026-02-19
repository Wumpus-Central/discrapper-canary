i.d(t, { AP: () => G, KV: () => V, Rf: () => D, hy: () => F, r6: () => k });
var r,
    n = i(627968);
i(64700);
var s = i(503698),
    a = i.n(s),
    l = i(534514),
    o = i(311907),
    c = i(732955),
    d = i(582754),
    m = i(397927),
    u = i(736653),
    x = i(775602),
    C = i(793574),
    g = i(688810),
    p = i(287809),
    T = i(166403),
    h = i(526292),
    I = i(932003),
    f = i(422936),
    j = i(234419),
    A = i(612669),
    v = i(783420),
    _ = i(204413),
    R = i(511484),
    N = i(356309),
    P = i(257284),
    E = i(795269),
    M = i(501007),
    y = i(90526),
    L = i(788868),
    b = i(519412),
    w = i(985018),
    H = i(855135),
    S = i(232266),
    U = i(243002),
    O = i(241988);
function G(e) {
    let {
            ctaButton: t,
            showYearlyPrice: i,
            className: r,
            isGift: s = !1,
            priceOptions: c,
            isApplicationHome: x = !1,
            useShortTitle: C = !1,
        } = e,
        g = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        I = (0, j.V)(),
        f = I?.subscription_trial?.sku_id,
        A = g?.hasActiveTrial ? h?.premiumType : null,
        v = (0, E.Lj)(A, f),
        _ = null != v,
        R = (0, d.qB)((0, u.Ay)()),
        P = C ? w.intl.string(w.t.tUbSDK) : w.intl.string(w.t["t9uG/o"]),
        b = (0, n.jsxs)(n.Fragment, {
            children: [
                _ && (0, n.jsx)(N.D, { text: v, className: H.pill }),
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: R ? "text-strong" : "always-white",
                    className: H.cardTitle,
                    children: P,
                }),
                (0, n.jsx)(y.A, {
                    isGift: s,
                    premiumTier: L.PremiumTypes.TIER_0,
                    offerType: L.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === L.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: c,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: H.priceHeader,
                }),
                (0, n.jsx)("hr", { className: H.divider }),
                (0, n.jsx)(M.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: x }),
                t,
            ],
        });
    return (0, n.jsx)(m.hLv, {
        color: "nitro-green",
        className: a()(H.card, H.tier0, r, { [H.pillMargin]: !x && _ }),
        children: b,
    });
}
var D =
    (((r = {}).IN_CARD = "inCard"),
    (r.OUTER_CORNER = "outerCorner"),
    (r.INSIDE_CORNER = "insideCorner"),
    (r.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    r);
function V(e) {
    let {
            ctaButton: t,
            showYearlyPrice: i,
            featureSet: r = M.Nz.DEFAULT,
            className: s,
            isGift: c = !1,
            isModal: x = !1,
            priceOptions: C,
            showPromotionalGiftBanner: g = !1,
            wumpusPosition: A = "inCard",
            isApplicationHome: v = !1,
            showWumpus: _ = !0,
            showPill: P = !0,
        } = e,
        b = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        G = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        D = (0, j.V)(),
        V = D?.subscription_trial?.sku_id,
        k = b?.hasActiveTrial ? G?.premiumType : null,
        B = (0, f.O)(),
        Z = (0, h.k5)(),
        F = null != V || null != k ? L.Vk.PREMIUM_TRIAL : null != B || Z ? L.Vk.PREMIUM_DISCOUNT : null,
        J = (0, d.qB)((0, u.Ay)()),
        z = (0, E.rm)(Z, k, B, D, V);
    return (0, n.jsxs)(m.hLv, {
        color: "nitro-pink",
        className: a()(H.card, s, { [H.withGiftBanner]: g }),
        children: [
            _ &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: U, alt: "", className: a()(H.bigCloud, H[A]) }),
                                (0, n.jsx)("img", { src: S, alt: "", className: a()(H.smallCloud, H[A]) }),
                                (0, n.jsx)("img", { src: O, alt: "", className: a()(H.wumpus, H[A]) }),
                            ],
                        }),
                    {},
                ),
            P && (0, n.jsx)(N.D, { text: z ?? w.intl.string(w.t["6bEcYr"]), className: H.pill }),
            (0, n.jsx)(l.D, {
                variant: "display-md",
                color: J ? "text-strong" : "always-white",
                className: H.cardTitle,
                children: w.intl.string(w.t.lG6a5x),
            }),
            (0, n.jsx)(y.A, {
                isGift: c,
                premiumTier: L.PremiumTypes.TIER_2,
                offerType: F,
                offerTierMatchesCard: V === L.pe.TIER_2 || (0, R.U9)(B, L.pe.TIER_2),
                showYearlyPrice: i,
                priceOptions: C,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: H.priceHeader,
            }),
            (0, n.jsx)("hr", { className: H.divider }),
            (0, n.jsx)(M.ZP, {
                featureSet: r,
                isModal: x,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: v,
                firstFeatureItemClassName:
                    "inCard" === A || "giftSelectionModal" === A ? H.firstFeatureItemContainer : void 0,
            }),
            t,
            g && (0, n.jsx)(I.b, {}),
        ],
    });
}
function k(e) {
    let { className: t, ctaButton: i, isApplicationHome: r, priceOptions: s } = e,
        o = (0, d.qB)((0, u.Ay)());
    return (0, n.jsxs)("div", {
        className: a()(H.card, H.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: H.cardHeader,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: H.cardTitle,
                        children: w.intl.string(b.default.eSKiXk),
                    }),
                    (0, n.jsx)(N.D, { text: w.intl.string(w.t.oW0eUd), className: H.betaPill }),
                ],
            }),
            (0, n.jsx)(P.A, { priceOptions: s }),
            (0, n.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: w.intl.string(b.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: H.divider }),
            (0, n.jsx)(M.Lg, { isApplicationHome: r }),
            i,
        ],
    });
}
let B = (e) => {
        let { subscriptionTier: t, isReducedMotion: i, tierCardProps: r, className: s, narrowLayout: l } = e,
            o = t === L.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: u } = (0, _.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: x } = d,
            C = (0, n.jsx)("div", {
                className: H.CTAButton,
                children: (0, n.jsx)(c.$nd, { size: "md", fullWidth: !0, ...d, disabled: x }),
            }),
            g = (0, n.jsx)("div", {
                className: a()({ [H.premiumCardHover]: !i }),
                children: (0, n.jsx)(o ? V : G, {
                    className: a()(H.applicationHomeCard, { [H.narrow]: l }),
                    ctaButton: C,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...r,
                }),
            });
        return (0, n.jsx)("div", {
            className: s,
            children: x
                ? g
                : (0, n.jsx)(v.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, n.jsx)(m.DUT, { onClick: t, style: { cursor: "pointer" }, children: g });
                      },
                  }),
        });
    },
    Z = (e) => {
        let { isReducedMotion: t, className: i } = e,
            r = (0, n.jsx)("div", {
                className: H.CTAButton,
                children: (0, n.jsx)(c.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: m.tvc,
                    text: w.intl.string(w.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            s = (0, n.jsx)("div", {
                className: a()({ [H.premiumCardHover]: !t }),
                children: (0, n.jsx)(k, {
                    className: a()(H.applicationHomeCard, H.narrow),
                    ctaButton: r,
                    isApplicationHome: !0,
                }),
            });
        return (0, n.jsx)(v.A, {
            subscriptionTier: L.pe.TIER_2,
            initialPlanId: L.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, n.jsx)("div", {
                    className: i,
                    children: (0, n.jsx)(m.DUT, { onClick: t, style: { cursor: "pointer" }, children: s }),
                });
            },
        });
    };
function F(e) {
    let { innerRef: t, className: i } = e,
        { analyticsLocations: r } = (0, g.Ay)(C.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, M.pw)(t),
        c = (0, o.bG)([x.A], () => x.A.useReducedMotion),
        d = (0, A.PA)();
    return (0, n.jsx)(g.f5, {
        value: r,
        children: (0, n.jsxs)("div", {
            className: a()(H.premiumCardsContainer, i),
            children: [
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: H.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: s,
                    className: H.premiumCards,
                    children: [
                        (0, n.jsx)(B, {
                            subscriptionTier: L.pe.TIER_0,
                            isReducedMotion: c,
                            className: H.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(B, {
                            subscriptionTier: L.pe.TIER_2,
                            isReducedMotion: c,
                            className: H.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(Z, { isReducedMotion: c, className: H.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
