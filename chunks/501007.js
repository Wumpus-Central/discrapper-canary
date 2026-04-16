r.d(t, { MR: () => H, Rf: () => D, jP: () => J, oK: () => k, r6: () => F });
var i,
    n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(311907),
    c = r(732955),
    d = r(582754),
    u = r(397927),
    m = r(736653),
    x = r(775602),
    g = r(793574),
    T = r(688810),
    p = r(287809),
    I = r(166403),
    h = r(526292),
    f = r(932003),
    j = r(422936),
    A = r(234419),
    v = r(612669),
    R = r(783420),
    _ = r(204413),
    P = r(511484),
    N = r(774774),
    E = r(559606),
    y = r(257284),
    C = r(795269),
    M = r(90526),
    b = r(788868),
    S = r(466919),
    U = r(985018),
    w = r(79304),
    L = r(232266),
    O = r(243002),
    G = r(241988);
function H(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: a = !1,
            priceOptions: c,
            isApplicationHome: x = !1,
            useShortTitle: g = !1,
        } = e,
        T = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        h = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        f = (0, A.V)(),
        j = f?.subscription_trial?.sku_id,
        v = T?.hasActiveTrial ? h?.premiumType : null,
        R = (0, N.Lj)(v, j),
        _ = null != R,
        P = (0, d.qB)((0, m.Ay)()),
        y = g ? U.intl.string(U.t.tUbSDK) : U.intl.string(U.t["t9uG/o"]),
        S = (0, n.jsxs)(n.Fragment, {
            children: [
                _ && (0, n.jsx)(C.R, { text: R, className: w.pill }),
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "always-white",
                    className: w.cardTitle,
                    children: y,
                }),
                (0, n.jsx)(M.A, {
                    isGift: a,
                    premiumTier: b.PremiumTypes.TIER_0,
                    offerType: b.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === b.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: c,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: w.priceHeader,
                }),
                (0, n.jsx)("hr", { className: w.divider }),
                (0, n.jsx)(E.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: x }),
                t,
            ],
        });
    return (0, n.jsx)(u.hLv, {
        color: "nitro-green",
        className: s()(w.card, w.tier0, i, { [w.pillMargin]: !x && _ }),
        children: S,
    });
}
var D =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function k(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = E.Nz.DEFAULT,
            className: a,
            isGift: c = !1,
            isModal: x = !1,
            priceOptions: g,
            showPromotionalGiftBanner: T = !1,
            wumpusPosition: v = "inCard",
            isApplicationHome: R = !1,
            showWumpus: _ = !0,
            showPill: y = !0,
        } = e,
        S = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        H = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        D = (0, A.V)(),
        k = D?.subscription_trial?.sku_id,
        F = S?.hasActiveTrial ? H?.premiumType : null,
        B = (0, j.O)(),
        V = (0, h.k5)(),
        J = null != k || null != F ? b.Vk.PREMIUM_TRIAL : null != B || V ? b.Vk.PREMIUM_DISCOUNT : null,
        Z = (0, d.qB)((0, m.Ay)()),
        W = (0, N.rm)(V, F, B, D, k);
    return (0, n.jsxs)(u.hLv, {
        color: "nitro-pink",
        className: s()(w.card, a, { [w.withGiftBanner]: T }),
        children: [
            _ &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: O, alt: "", className: s()(w.bigCloud, w[v]) }),
                                (0, n.jsx)("img", { src: L, alt: "", className: s()(w.smallCloud, w[v]) }),
                                (0, n.jsx)("img", { src: G, alt: "", className: s()(w.wumpus, w[v]) }),
                            ],
                        }),
                    {},
                ),
            y && (0, n.jsx)(C.R, { text: W ?? U.intl.string(U.t["6bEcYr"]), className: w.pill }),
            (0, n.jsx)(l.D, {
                variant: "display-md",
                color: Z ? "text-strong" : "always-white",
                className: w.cardTitle,
                children: U.intl.string(U.t.lG6a5x),
            }),
            (0, n.jsx)(M.A, {
                isGift: c,
                premiumTier: b.PremiumTypes.TIER_2,
                offerType: J,
                offerTierMatchesCard: k === b.pe.TIER_2 || (0, P.U9)(B, b.pe.TIER_2),
                showYearlyPrice: r,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: w.priceHeader,
            }),
            (0, n.jsx)("hr", { className: w.divider }),
            (0, n.jsx)(E.ZP, {
                featureSet: i,
                isModal: x,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: R,
                firstFeatureItemClassName:
                    "inCard" === v || "giftSelectionModal" === v ? w.firstFeatureItemContainer : void 0,
            }),
            t,
            T && (0, n.jsx)(f.b, {}),
        ],
    });
}
function F(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: a } = e,
        o = (0, d.qB)((0, m.Ay)());
    return (0, n.jsxs)("div", {
        className: s()(w.card, w.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: w.cardHeader,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: w.cardTitle,
                        children: U.intl.string(S.default.eSKiXk),
                    }),
                    (0, n.jsx)(C.R, { text: U.intl.string(U.t.oW0eUd), className: w.betaPill }),
                ],
            }),
            (0, n.jsx)(y.A, { priceOptions: a }),
            (0, n.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: U.intl.string(S.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: w.divider }),
            (0, n.jsx)(E.Lg, { isApplicationHome: i }),
            r,
        ],
    });
}
let B = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: a, narrowLayout: l } = e,
            o = t === b.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: m } = (0, _.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: x } = d,
            g = (0, n.jsx)("div", {
                className: w.CTAButton,
                children: (0, n.jsx)(c.$nd, { size: "md", fullWidth: !0, ...d, disabled: x }),
            }),
            T = (0, n.jsx)("div", {
                className: s()({ [w.premiumCardHover]: !r }),
                children: (0, n.jsx)(o ? k : H, {
                    className: s()(w.applicationHomeCard, { [w.narrow]: l }),
                    ctaButton: g,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, n.jsx)("div", {
            className: a,
            children: x
                ? T
                : (0, n.jsx)(R.A, {
                      subscriptionTier: m,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, n.jsx)(u.DUT, { onClick: t, style: { cursor: "pointer" }, children: T });
                      },
                  }),
        });
    },
    V = (e) => {
        let { isReducedMotion: t, className: r } = e,
            i = (0, n.jsx)("div", {
                className: w.CTAButton,
                children: (0, n.jsx)(c.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: u.tvc,
                    text: U.intl.string(U.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, n.jsx)("div", {
                className: s()({ [w.premiumCardHover]: !t }),
                children: (0, n.jsx)(F, {
                    className: s()(w.applicationHomeCard, w.narrow),
                    ctaButton: i,
                    isApplicationHome: !0,
                }),
            });
        return (0, n.jsx)(R.A, {
            subscriptionTier: b.pe.TIER_2,
            initialPlanId: b.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, n.jsx)("div", {
                    className: r,
                    children: (0, n.jsx)(u.DUT, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function J(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, T.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, E.pw)(t),
        c = (0, o.bG)([x.A], () => x.A.useReducedMotion),
        d = (0, v.PA)();
    return (0, n.jsx)(T.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(w.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: w.premiumCardsHeader,
                    children: U.intl.string(U.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: a,
                    className: w.premiumCards,
                    children: [
                        (0, n.jsx)(B, {
                            subscriptionTier: b.pe.TIER_0,
                            isReducedMotion: c,
                            className: w.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(B, {
                            subscriptionTier: b.pe.TIER_2,
                            isReducedMotion: c,
                            className: w.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(V, { isReducedMotion: c, className: w.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
