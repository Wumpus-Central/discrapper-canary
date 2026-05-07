r.d(t, { jP: () => ei, Rf: () => $, oK: () => X, r6: () => ee, MR: () => Q });
var i,
    n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(17928),
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
    j = r(367319),
    A = r(877624),
    R = r(834730),
    _ = r(937008),
    E = r(807098),
    v = r(374200),
    P = r(380619),
    N = r(375708),
    C = r(756974);
function y() {
    let { claimableRewards: e } = (0, _.Pv)(),
        t = (0, o.bG)([v.A], () => {
            let e = v.A.getMarketingComponentByType(A.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, E.T)(t?.bannerAsset),
        i = (0, E.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let a = (0, P.gc)(r),
        s = t?.gradient,
        l =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, P.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        c = (0, P.x)(a, l);
    return (0, n.jsxs)("div", {
        className: C.kL,
        style: c,
        children: [
            (0, n.jsxs)("div", {
                className: C.V_,
                children: [
                    (0, n.jsx)(R.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: N.intl.string(N.t.OEtqpm),
                    }),
                    (0, n.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: N.intl.formatToPlainString(N.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i && (0, n.jsx)("img", { alt: "gift promotion reward", src: i, className: C.my }),
        ],
    });
}
var M = r(422936),
    b = r(234419),
    S = r(39423),
    U = r(783420),
    w = r(204413),
    L = r(511484),
    O = r(774774),
    G = r(289873),
    D = r(97352),
    H = r(927578),
    k = r(788868),
    F = r(378874);
let V = function (e) {
    let { isGift: t = !1, priceOptions: r } = e,
        i = (0, o.bG)([D.A], () => D.A.get(k.gD.PREMIUM_GROUP_MONTH)),
        a = (0, d.q)((0, x.Ay)());
    if (null == i) return (0, n.jsx)(G.y, { type: G.y.Type.PULSING_ELLIPSIS, className: F.xB });
    let s = (0, H.sS)(i, r, !1, t),
        l = k.WT.MONTH;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(R.E, {
                variant: "heading-xxl/extrabold",
                color: a ? "text-strong" : "always-white",
                tag: "span",
                children: s,
            }),
            (0, n.jsxs)(R.E, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, H.FJ)(l)],
            }),
        ],
    });
};
var B = r(795269),
    Z = r(860839),
    W = r(222719),
    J = r(466919),
    K = r(115599),
    z = r(232266),
    Y = r(243002),
    q = r(241988);
function Q(e) {
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
        h = (0, b.V)(),
        j = h?.subscription_trial?.sku_id,
        A = p?.hasActiveTrial ? T?.premiumType : null,
        R = (0, O.Lj)(A, j),
        _ = null != R,
        E = (0, d.q)((0, x.Ay)()),
        v = g ? N.intl.string(N.t.tUbSDK) : N.intl.string(N.t["t9uG/o"]),
        P = (0, n.jsxs)(n.Fragment, {
            children: [
                _ && (0, n.jsx)(B.R, { text: R, className: K.pill }),
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: E ? "text-strong" : "always-white",
                    className: K.cardTitle,
                    children: v,
                }),
                (0, n.jsx)(W.A, {
                    isGift: a,
                    premiumTier: k.PremiumTypes.TIER_0,
                    offerType: k.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: j === k.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: c,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: K.priceHeader,
                }),
                (0, n.jsx)("hr", { className: K.divider }),
                (0, n.jsx)(Z.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: m }),
                t,
            ],
        });
    return (0, n.jsx)(u.h, {
        color: "nitro-green",
        className: s()(K.card, K.tier0, i, { [K.pillMargin]: !m && _ }),
        children: P,
    });
}
var $ =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function X(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = Z.Nz.DEFAULT,
            className: a,
            isGift: c = !1,
            isModal: m = !1,
            priceOptions: g,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: T = "inCard",
            isApplicationHome: h = !1,
            showWumpus: A = !0,
            showPill: R = !0,
        } = e,
        _ = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        v = (0, b.V)(),
        P = v?.subscription_trial?.sku_id,
        C = _?.hasActiveTrial ? E?.premiumType : null,
        S = (0, M.O)(),
        U = (0, j.k5)(),
        w = null != P || null != C ? k.Vk.PREMIUM_TRIAL : null != S || U ? k.Vk.PREMIUM_DISCOUNT : null,
        G = (0, d.q)((0, x.Ay)()),
        D = (0, O.rm)(U, C, S, v, P);
    return (0, n.jsxs)(u.h, {
        color: "nitro-pink",
        className: s()(K.card, a, { [K.withGiftBanner]: p }),
        children: [
            A &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("img", { src: Y, alt: "", className: s()(K.bigCloud, K[T]) }),
                                (0, n.jsx)("img", { src: z, alt: "", className: s()(K.smallCloud, K[T]) }),
                                (0, n.jsx)("img", { src: q, alt: "", className: s()(K.wumpus, K[T]) }),
                            ],
                        }),
                    {},
                ),
            R && (0, n.jsx)(B.R, { text: D ?? N.intl.string(N.t["6bEcYr"]), className: K.pill }),
            (0, n.jsx)(l.D, {
                variant: "display-md",
                color: G ? "text-strong" : "always-white",
                className: K.cardTitle,
                children: N.intl.string(N.t.lG6a5x),
            }),
            (0, n.jsx)(W.A, {
                isGift: c,
                premiumTier: k.PremiumTypes.TIER_2,
                offerType: w,
                offerTierMatchesCard: P === k.pe.TIER_2 || (0, L.U9)(S, k.pe.TIER_2),
                showYearlyPrice: r,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: K.priceHeader,
            }),
            (0, n.jsx)("hr", { className: K.divider }),
            (0, n.jsx)(Z.ZP, {
                featureSet: i,
                isModal: m,
                isGift: c,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: h,
                firstFeatureItemClassName:
                    "inCard" === T || "giftSelectionModal" === T ? K.firstFeatureItemContainer : void 0,
            }),
            t,
            p && (0, n.jsx)(y, {}),
        ],
    });
}
function ee(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: a } = e,
        o = (0, d.q)((0, x.Ay)());
    return (0, n.jsxs)("div", {
        className: s()(K.card, K.borderGradient, t),
        children: [
            (0, n.jsxs)("div", {
                className: K.cardHeader,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "display-md",
                        color: o ? "text-strong" : "always-white",
                        className: K.cardTitle,
                        children: N.intl.string(J.default.eSKiXk),
                    }),
                    (0, n.jsx)(B.R, { text: N.intl.string(N.t.oW0eUd), className: K.betaPill }),
                ],
            }),
            (0, n.jsx)(V, { priceOptions: a }),
            (0, n.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: N.intl.string(J.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: K.divider }),
            (0, n.jsx)(Z.Lg, { isApplicationHome: i }),
            r,
        ],
    });
}
let et = (e) => {
        let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: a, narrowLayout: l } = e,
            o = t === k.pe.TIER_2,
            { subscribeButtonProps: d, subscriptionTier: u } = (0, w.$)({
                subscriptionTier: t,
                variantOverride: o ? "expressive" : "secondary",
            }),
            { disabled: g } = d,
            x = (0, n.jsx)("div", {
                className: K.CTAButton,
                children: (0, n.jsx)(c.$, { size: "md", fullWidth: !0, ...d, disabled: g }),
            }),
            p = (0, n.jsx)("div", {
                className: s()({ [K.premiumCardHover]: !r }),
                children: (0, n.jsx)(o ? X : Q, {
                    className: s()(K.applicationHomeCard, { [K.narrow]: l }),
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
                : (0, n.jsx)(U.A, {
                      subscriptionTier: u,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, n.jsx)(m.D, { onClick: t, style: { cursor: "pointer" }, children: p });
                      },
                  }),
        });
    },
    er = (e) => {
        let { isReducedMotion: t, className: r } = e,
            i = (0, n.jsx)("div", {
                className: K.CTAButton,
                children: (0, n.jsx)(c.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: g.t,
                    text: N.intl.string(N.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            a = (0, n.jsx)("div", {
                className: s()({ [K.premiumCardHover]: !t }),
                children: (0, n.jsx)(ee, {
                    className: s()(K.applicationHomeCard, K.narrow),
                    ctaButton: i,
                    isApplicationHome: !0,
                }),
            });
        return (0, n.jsx)(U.A, {
            subscriptionTier: k.pe.TIER_2,
            initialPlanId: k.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, n.jsx)("div", {
                    className: r,
                    children: (0, n.jsx)(m.D, { onClick: t, style: { cursor: "pointer" }, children: a }),
                });
            },
        });
    };
function ei(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, h.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        a = (0, Z.pw)(t),
        c = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        d = (0, S.PA)();
    return (0, n.jsx)(h.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(K.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: K.premiumCardsHeader,
                    children: N.intl.string(N.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: a,
                    className: K.premiumCards,
                    children: [
                        (0, n.jsx)(et, {
                            subscriptionTier: k.pe.TIER_0,
                            isReducedMotion: c,
                            className: K.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(et, {
                            subscriptionTier: k.pe.TIER_2,
                            isReducedMotion: c,
                            className: K.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(er, { isReducedMotion: c, className: K.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
