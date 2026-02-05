i.d(t, { AP: () => O, KV: () => G, hy: () => B, r6: () => D });
var r = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(534514),
    l = i(311907),
    o = i(732955),
    c = i(582754),
    d = i(397927),
    m = i(736653),
    u = i(775602),
    x = i(793574),
    C = i(688810),
    g = i(287809),
    p = i(166403),
    T = i(526292),
    h = i(932003),
    I = i(422936),
    f = i(234419),
    j = i(612669),
    A = i(783420),
    v = i(204413),
    _ = i(511484),
    R = i(356309),
    N = i(257284),
    P = i(795269),
    M = i(501007),
    E = i(90526),
    y = i(788868),
    L = i(519412),
    b = i(985018),
    w = i(855135),
    H = i(232266),
    S = i(243002),
    U = i(241988);
function O(e) {
    let {
            ctaButton: t,
            showYearlyPrice: i,
            className: n,
            isGift: o = !1,
            priceOptions: u,
            isApplicationHome: x = !1,
            useShortTitle: C = !1,
        } = e,
        T = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        h = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        I = (0, f.V)(),
        j = I?.subscription_trial?.sku_id,
        A = T?.hasActiveTrial ? h?.premiumType : null,
        v = (0, P.Lj)(A, j),
        _ = null != v,
        N = (0, c.qB)((0, m.Ay)()),
        L = C ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t["t9uG/o"]),
        H = (0, r.jsxs)(r.Fragment, {
            children: [
                _ && (0, r.jsx)(R.D, { text: v, className: w.pill }),
                (0, r.jsx)(a.D, {
                    variant: "display-md",
                    color: N ? "text-strong" : "always-white",
                    className: w.cardTitle,
                    children: L,
                }),
                (0, r.jsx)(E.A, {
                    isGift: o,
                    premiumTier: y.PremiumTypes.TIER_0,
                    offerType: y.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === y.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: w.priceHeader,
                }),
                (0, r.jsx)("hr", { className: w.divider }),
                (0, r.jsx)(M.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: x }),
                t,
            ],
        });
    return (0, r.jsx)(d.hLv, {
        color: "nitro-green",
        className: s()(w.card, w.tier0, n, { [w.pillMargin]: !x && _ }),
        children: H,
    });
}
function G(e) {
    let {
            ctaButton: t,
            showYearlyPrice: i,
            featureSet: n = M.Nz.DEFAULT,
            className: o,
            isGift: u = !1,
            isModal: x = !1,
            priceOptions: C,
            showPromotionalGiftBanner: j = !1,
            wumpusPosition: A = "inCard",
            isApplicationHome: v = !1,
            showWumpus: N = !0,
            showPill: L = !0,
        } = e,
        O = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        G = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        D = (0, f.V)(),
        V = D?.subscription_trial?.sku_id,
        k = O?.hasActiveTrial ? G?.premiumType : null,
        B = (0, I.O)(),
        Z = (0, T.k5)(),
        F = null != V || null != k ? y.Vk.PREMIUM_TRIAL : null != B || Z ? y.Vk.PREMIUM_DISCOUNT : null,
        J = (0, c.qB)((0, m.Ay)()),
        z = (0, P.rm)(Z, k, B, D, V);
    return (0, r.jsxs)(d.hLv, {
        color: "nitro-pink",
        className: s()(w.card, o, { [w.withGiftBanner]: j }),
        children: [
            N &&
                (0, r.jsx)(
                    () =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("img", { src: S, alt: "", className: s()(w.bigCloud, w[A]) }),
                                (0, r.jsx)("img", { src: H, alt: "", className: s()(w.smallCloud, w[A]) }),
                                (0, r.jsx)("img", { src: U, alt: "", className: s()(w.wumpus, w[A]) }),
                            ],
                        }),
                    {},
                ),
            L && (0, r.jsx)(R.D, { text: z ?? b.intl.string(b.t["6bEcYr"]), className: w.pill }),
            (0, r.jsx)(a.D, {
                variant: "display-md",
                color: J ? "text-strong" : "always-white",
                className: w.cardTitle,
                children: b.intl.string(b.t.lG6a5x),
            }),
            (0, r.jsx)(E.A, {
                isGift: u,
                premiumTier: y.PremiumTypes.TIER_2,
                offerType: F,
                offerTierMatchesCard: V === y.pe.TIER_2 || (0, _.U9)(B, y.pe.TIER_2),
                showYearlyPrice: i,
                priceOptions: C,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: w.priceHeader,
            }),
            (0, r.jsx)("hr", { className: w.divider }),
            (0, r.jsx)(M.ZP, {
                featureSet: n,
                isModal: x,
                isGift: u,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: v,
                firstFeatureItemClassName: "inCard" === A ? w.firstFeatureItemContainer : void 0,
            }),
            t,
            j && (0, r.jsx)(h.b, {}),
        ],
    });
}
function D(e) {
    let { className: t, ctaButton: i, isApplicationHome: n, priceOptions: l } = e,
        o = (0, c.qB)((0, m.Ay)());
    return (0, r.jsxs)("div", {
        className: s()(w.card, w.borderGradient, t),
        children: [
            (0, r.jsxs)("div", {
                className: w.cardHeader,
                children: [
                    (0, r.jsx)(a.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: w.cardTitle,
                        children: b.intl.string(L.default.eSKiXk),
                    }),
                    (0, r.jsx)(R.D, { text: b.intl.string(b.t.oW0eUd), className: w.betaPill }),
                ],
            }),
            (0, r.jsx)(N.A, { priceOptions: l }),
            (0, r.jsx)(a.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: b.intl.string(L.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", { className: w.divider }),
            (0, r.jsx)(M.Lg, { isApplicationHome: n }),
            i,
        ],
    });
}
let V = (e) => {
        let { subscriptionTier: t, isReducedMotion: i, tierCardProps: n, className: a, narrowLayout: l } = e,
            c = t === y.pe.TIER_2,
            { subscribeButtonProps: m, subscriptionTier: u } = (0, v.$)({
                subscriptionTier: t,
                variantOverride: c ? "expressive" : "secondary",
            }),
            { disabled: x } = m,
            C = (0, r.jsx)("div", {
                className: w.CTAButton,
                children: (0, r.jsx)(o.$nd, { size: "md", fullWidth: !0, ...m, disabled: x }),
            }),
            g = (0, r.jsx)("div", {
                className: s()({ [w.premiumCardHover]: !i }),
                children: (0, r.jsx)(c ? G : O, {
                    className: s()(w.applicationHomeCard, { [w.narrow]: l }),
                    ctaButton: C,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...n,
                }),
            });
        return (0, r.jsx)("div", {
            className: a,
            children: x
                ? g
                : (0, r.jsx)(A.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, r.jsx)(d.DUT, { onClick: t, style: { cursor: "pointer" }, children: g });
                      },
                  }),
        });
    },
    k = (e) => {
        let { isReducedMotion: t, className: i } = e,
            n = (0, r.jsx)("div", {
                className: w.CTAButton,
                children: (0, r.jsx)(o.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: d.tvc,
                    text: b.intl.string(b.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, r.jsx)("div", {
                className: s()({ [w.premiumCardHover]: !t }),
                children: (0, r.jsx)(D, {
                    className: s()(w.applicationHomeCard, w.narrow),
                    ctaButton: n,
                    isApplicationHome: !0,
                }),
            });
        return (0, r.jsx)(A.A, {
            subscriptionTier: y.pe.TIER_2,
            initialPlanId: y.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)("div", {
                    className: i,
                    children: (0, r.jsx)(d.DUT, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function B(e) {
    let { innerRef: t, className: i } = e,
        { analyticsLocations: n } = (0, C.Ay)(x.A.PREMIUM_MARKETING_TIER_CARD),
        o = (0, M.pw)(t),
        c = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        d = (0, j.PA)();
    return (0, r.jsx)(C.f5, {
        value: n,
        children: (0, r.jsxs)("div", {
            className: s()(w.premiumCardsContainer, i),
            children: [
                (0, r.jsx)(a.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: w.premiumCardsHeader,
                    children: b.intl.string(b.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: o,
                    className: w.premiumCards,
                    children: [
                        (0, r.jsx)(V, {
                            subscriptionTier: y.pe.TIER_0,
                            isReducedMotion: c,
                            className: w.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, r.jsx)(V, {
                            subscriptionTier: y.pe.TIER_2,
                            isReducedMotion: c,
                            className: w.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, r.jsx)(k, { isReducedMotion: c, className: w.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
