r.d(t, { MR: () => D, Rf: () => H, jP: () => J, oK: () => k, r6: () => F });
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
    h = r(166403),
    I = r(526292),
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
    S = r(518582),
    w = r(985018),
    U = r(345905),
    L = r(232266),
    O = r(243002),
    G = r(241988);
function D(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: a = !1,
            priceOptions: c,
            isApplicationHome: x = !1,
            useShortTitle: g = !1,
        } = e,
        T = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        I = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        f = (0, A.V)(),
        j = f?.subscription_trial?.sku_id,
        v = T?.hasActiveTrial ? I?.premiumType : null,
        R = (0, N.Lj)(v, j),
        _ = null != R,
        P = (0, d.qB)((0, m.Ay)()),
        y = g ? w.intl.string(w.t.tUbSDK) : w.intl.string(w.t["t9uG/o"]),
        S = (0, n.jsxs)(n.Fragment, {
            children: [
                _ && (0, n.jsx)(C.R, { text: R, className: U.pill }),
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: P ? "text-strong" : "always-white",
                    className: U.cardTitle,
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
                    headerClassName: U.priceHeader,
                }),
                (0, n.jsx)("hr", { className: U.divider }),
                (0, n.jsx)(E.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: x }),
                t,
            ],
        });
    return (0, n.jsx)(u.hLv, {
        color: "nitro-green",
        className: s()(U.card, U.tier0, i, { [U.pillMargin]: !x && _ }),
        children: S,
    });
}
var H =
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
        S = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        D = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        H = (0, A.V)(),
        k = H?.subscription_trial?.sku_id,
        F = S?.hasActiveTrial ? D?.premiumType : null,
        B = (0, j.O)(),
        V = (0, I.k5)(),
        J = null != k || null != F ? b.Vk.PREMIUM_TRIAL : null != B || V ? b.Vk.PREMIUM_DISCOUNT : null,
        Z = (0, d.qB)((0, m.Ay)()),
        W = (0, N.rm)(V, F, B, H, k);
    return (0, n.jsxs)(u.hLv, {
        color: "nitro-pink",
        className: s()(U.card, a, { [U.withGiftBanner]: T }),
        children: [
            _ &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: O, alt: "", className: s()(U.bigCloud, U[v]) }),
                                (0, n.jsx)("img", { src: L, alt: "", className: s()(U.smallCloud, U[v]) }),
                                (0, n.jsx)("img", { src: G, alt: "", className: s()(U.wumpus, U[v]) }),
                            ],
                        }),
                    {},
                ),
            y && (0, n.jsx)(C.R, { text: W ?? w.intl.string(w.t["6bEcYr"]), className: U.pill }),
            (0, n.jsx)(l.D, {
                variant: "display-md",
                color: Z ? "text-strong" : "always-white",
                className: U.cardTitle,
                children: w.intl.string(w.t.lG6a5x),
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
                headerClassName: U.priceHeader,
            }),
            (0, n.jsx)("hr", { className: U.divider }),
            (0, n.jsx)(E.ZP, {
                featureSet: i,
                isModal: x,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: R,
                firstFeatureItemClassName:
                    "inCard" === v || "giftSelectionModal" === v ? U.firstFeatureItemContainer : void 0,
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
        className: s()(U.card, U.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: U.cardHeader,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: U.cardTitle,
                        children: w.intl.string(S.default.eSKiXk),
                    }),
                    (0, n.jsx)(C.R, { text: w.intl.string(w.t.oW0eUd), className: U.betaPill }),
                ],
            }),
            (0, n.jsx)(y.A, { priceOptions: a }),
            (0, n.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: w.intl.string(S.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: U.divider }),
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
                className: U.CTAButton,
                children: (0, n.jsx)(c.$nd, { size: "md", fullWidth: !0, ...d, disabled: x }),
            }),
            T = (0, n.jsx)("div", {
                className: s()({ [U.premiumCardHover]: !r }),
                children: (0, n.jsx)(o ? k : D, {
                    className: s()(U.applicationHomeCard, { [U.narrow]: l }),
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
                className: U.CTAButton,
                children: (0, n.jsx)(c.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: u.tvc,
                    text: w.intl.string(w.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, n.jsx)("div", {
                className: s()({ [U.premiumCardHover]: !t }),
                children: (0, n.jsx)(F, {
                    className: s()(U.applicationHomeCard, U.narrow),
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
            className: s()(U.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: U.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: a,
                    className: U.premiumCards,
                    children: [
                        (0, n.jsx)(B, {
                            subscriptionTier: b.pe.TIER_0,
                            isReducedMotion: c,
                            className: U.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(B, {
                            subscriptionTier: b.pe.TIER_2,
                            isReducedMotion: c,
                            className: U.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(V, { isReducedMotion: c, className: U.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
