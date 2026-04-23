r.d(t, { MR: () => k, Rf: () => F, jP: () => J, oK: () => V, r6: () => B });
var i,
    n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(311907),
    c = r(821609),
    d = r(462887),
    u = r(315629),
    m = r(939249),
    g = r(403581),
    x = r(736653),
    p = r(775602),
    T = r(793574),
    h = r(688810),
    I = r(287809),
    f = r(166403),
    j = r(526292),
    A = r(932003),
    v = r(422936),
    R = r(234419),
    _ = r(612669),
    E = r(783420),
    P = r(204413),
    N = r(511484),
    C = r(774774),
    y = r(559606),
    M = r(257284),
    b = r(795269),
    w = r(90526),
    S = r(788868),
    U = r(466919),
    L = r(985018),
    O = r(79304),
    G = r(232266),
    D = r(243002),
    H = r(241988);
function k(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: a = !1,
            priceOptions: c,
            isApplicationHome: m = !1,
            useShortTitle: g = !1,
        } = e,
        p = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        T = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        h = (0, R.V)(),
        j = h?.subscription_trial?.sku_id,
        A = p?.hasActiveTrial ? T?.premiumType : null,
        v = (0, C.Lj)(A, j),
        _ = null != v,
        E = (0, d.q)((0, x.Ay)()),
        P = g ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]),
        N = (0, n.jsxs)(n.Fragment, {
            children: [
                _ && (0, n.jsx)(b.R, { text: v, className: O.pill }),
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: E ? "text-strong" : "always-white",
                    className: O.cardTitle,
                    children: P,
                }),
                (0, n.jsx)(w.A, {
                    isGift: a,
                    premiumTier: S.PremiumTypes.TIER_0,
                    offerType: S.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === S.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: c,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: O.priceHeader,
                }),
                (0, n.jsx)("hr", { className: O.divider }),
                (0, n.jsx)(y.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: m }),
                t,
            ],
        });
    return (0, n.jsx)(u.h, {
        color: "nitro-green",
        className: s()(O.card, O.tier0, i, { [O.pillMargin]: !m && _ }),
        children: N,
    });
}
var F =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function V(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = y.Nz.DEFAULT,
            className: a,
            isGift: c = !1,
            isModal: m = !1,
            priceOptions: g,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: T = "inCard",
            isApplicationHome: h = !1,
            showWumpus: _ = !0,
            showPill: E = !0,
        } = e,
        P = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        M = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        U = (0, R.V)(),
        k = U?.subscription_trial?.sku_id,
        F = P?.hasActiveTrial ? M?.premiumType : null,
        V = (0, v.O)(),
        B = (0, j.k5)(),
        Z = null != k || null != F ? S.Vk.PREMIUM_TRIAL : null != V || B ? S.Vk.PREMIUM_DISCOUNT : null,
        W = (0, d.q)((0, x.Ay)()),
        J = (0, C.rm)(B, F, V, U, k);
    return (0, n.jsxs)(u.h, {
        color: "nitro-pink",
        className: s()(O.card, a, { [O.withGiftBanner]: p }),
        children: [
            _ &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: D, alt: "", className: s()(O.bigCloud, O[T]) }),
                                (0, n.jsx)("img", { src: G, alt: "", className: s()(O.smallCloud, O[T]) }),
                                (0, n.jsx)("img", { src: H, alt: "", className: s()(O.wumpus, O[T]) }),
                            ],
                        }),
                    {},
                ),
            E && (0, n.jsx)(b.R, { text: J ?? L.intl.string(L.t["6bEcYr"]), className: O.pill }),
            (0, n.jsx)(l.D, {
                variant: "display-md",
                color: W ? "text-strong" : "always-white",
                className: O.cardTitle,
                children: L.intl.string(L.t.lG6a5x),
            }),
            (0, n.jsx)(w.A, {
                isGift: c,
                premiumTier: S.PremiumTypes.TIER_2,
                offerType: Z,
                offerTierMatchesCard: k === S.pe.TIER_2 || (0, N.U9)(V, S.pe.TIER_2),
                showYearlyPrice: r,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: O.priceHeader,
            }),
            (0, n.jsx)("hr", { className: O.divider }),
            (0, n.jsx)(y.ZP, {
                featureSet: i,
                isModal: m,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: h,
                firstFeatureItemClassName:
                    "inCard" === T || "giftSelectionModal" === T ? O.firstFeatureItemContainer : void 0,
            }),
            t,
            p && (0, n.jsx)(A.b, {}),
        ],
    });
}
function B(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: a } = e,
        o = (0, d.q)((0, x.Ay)());
    return (0, n.jsxs)("div", {
        className: s()(O.card, O.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: O.cardHeader,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: O.cardTitle,
                        children: L.intl.string(U.default.eSKiXk),
                    }),
                    (0, n.jsx)(b.R, { text: L.intl.string(L.t.oW0eUd), className: O.betaPill }),
                ],
            }),
            (0, n.jsx)(M.A, { priceOptions: a }),
            (0, n.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: L.intl.string(U.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: O.divider }),
            (0, n.jsx)(y.Lg, { isApplicationHome: i }),
            r,
        ],
    });
}
let Z = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: a, narrowLayout: l } = e,
            o = t === S.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: u } = (0, P.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: g } = d,
            x = (0, n.jsx)("div", {
                className: O.CTAButton,
                children: (0, n.jsx)(c.$, { size: "md", fullWidth: !0, ...d, disabled: g }),
            }),
            p = (0, n.jsx)("div", {
                className: s()({ [O.premiumCardHover]: !r }),
                children: (0, n.jsx)(o ? V : k, {
                    className: s()(O.applicationHomeCard, { [O.narrow]: l }),
                    ctaButton: x,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, n.jsx)("div", {
            className: a,
            children: g
                ? p
                : (0, n.jsx)(E.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, n.jsx)(m.D, { onClick: t, style: { cursor: "pointer" }, children: p });
                      },
                  }),
        });
    },
    W = (e) => {
        let { isReducedMotion: t, className: r } = e,
            i = (0, n.jsx)("div", {
                className: O.CTAButton,
                children: (0, n.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: g.t,
                    text: L.intl.string(L.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, n.jsx)("div", {
                className: s()({ [O.premiumCardHover]: !t }),
                children: (0, n.jsx)(B, {
                    className: s()(O.applicationHomeCard, O.narrow),
                    ctaButton: i,
                    isApplicationHome: !0,
                }),
            });
        return (0, n.jsx)(E.A, {
            subscriptionTier: S.pe.TIER_2,
            initialPlanId: S.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, n.jsx)("div", {
                    className: r,
                    children: (0, n.jsx)(m.D, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function J(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, h.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, y.pw)(t),
        c = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        d = (0, _.PA)();
    return (0, n.jsx)(h.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(O.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: O.premiumCardsHeader,
                    children: L.intl.string(L.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: a,
                    className: O.premiumCards,
                    children: [
                        (0, n.jsx)(Z, {
                            subscriptionTier: S.pe.TIER_0,
                            isReducedMotion: c,
                            className: O.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(Z, {
                            subscriptionTier: S.pe.TIER_2,
                            isReducedMotion: c,
                            className: O.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(W, { isReducedMotion: c, className: O.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
