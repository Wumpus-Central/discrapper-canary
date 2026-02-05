i.d(t, { Lg: () => z, NB: () => ei, Nz: () => q, ZP: () => Q, jP: () => et, nH: () => W, pw: () => ee });
var r,
    n = i(627968);
i(64700);
var s = i(503698),
    a = i.n(s),
    l = i(311907),
    o = i(582754),
    c = i(397927),
    d = i(736653),
    m = i(793574),
    u = i(688810),
    x = i(953143),
    C = i(773669),
    g = i(287809),
    p = i(166403),
    T = i(224016),
    h = i(217392),
    I = i(60490),
    f = i(560138),
    j = i(40185),
    A = i(526292),
    v = i(552736),
    _ = i(1878),
    R = i(422936),
    N = i(234419),
    P = i(396375),
    M = i(511484),
    E = i(231265),
    y = i(795269),
    L = i(349563),
    b = i(90526),
    w = i(300542),
    H = i(4382),
    S = i(284951),
    U = i(788868),
    O = i(838541),
    G = i(519412),
    D = i(985018),
    V = i(855135),
    k = i(639179),
    B = i(122402),
    Z = i(793481),
    F = i(497451);
function J(e) {
    let {
        Icon: t,
        text: i,
        isNew: r = !1,
        className: s,
        textVariant: l,
        isApplicationHome: o,
        enablePremiumBrandRefresh: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: a()(s, { [V.featureItem]: d, [V.featureItemApplicationHome]: d && o }),
        children: [
            (0, n.jsx)(t, { className: d ? k.hi : k.Kk, color: "currentColor" }),
            (0, n.jsx)(c.Text, {
                variant: l ?? "text-md/normal",
                color: d || o ? "currentColor" : "always-white",
                children: i,
            }),
            r
                ? (0, n.jsx)(x.A, {
                      className: k.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function z(e) {
    let { isApplicationHome: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t &&
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: V.tier2ApplicationHomeSubheader,
                    children: D.intl.string(G.default.ItfIa5),
                }),
            H.PV.map((e, i) => {
                let { Icon: r, getText: s } = e;
                return (0, n.jsx)(J, { Icon: r, text: s(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, i);
            }),
        ],
    });
}
function W(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: i } = e,
        r = t && !i ? S.I4 : S.fB;
    return (0, n.jsx)(n.Fragment, {
        children: r.map((e, r) => {
            let { Icon: s, getText: a } = e;
            return (0, n.jsx)(
                J,
                {
                    Icon: s,
                    text: a(),
                    className: t && !i ? k.dT : k.HW,
                    textVariant: t && !i ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: i,
                    isApplicationHome: t,
                },
                r,
            );
        }),
    });
}
function Y(e) {
    let { ctaButton: t, showYearlyPrice: i, className: r, isGift: s = !1, priceOptions: o } = e,
        c = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        d = (0, N.V)(),
        m = d?.subscription_trial?.sku_id,
        u = !!c?.hasActiveTrial,
        x = null != m || u;
    return (0, n.jsxs)("div", {
        className: a()(k.Vd, k.Nr, k.g1, r, { [k.vt]: !s && x, [k.lr]: !s && x }),
        children: [
            (0, n.jsx)("img", { src: B, className: k.ci, alt: "" }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(I.A, { className: a()(k.DD, k.o6) }),
                            (0, n.jsx)(b.A, {
                                isGift: s,
                                premiumTier: U.PremiumTypes.TIER_0,
                                offerType: U.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === U.pe.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(W, { isApplicationHome: !0 }) }),
                ],
            }),
            t,
        ],
    });
}
function K(e) {
    let { showWumpus: t, ctaButton: i, showYearlyPrice: r, className: s, isGift: o = !1, priceOptions: d } = e,
        m = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        u = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        x = (0, N.V)(),
        C = x?.subscription_trial?.sku_id,
        T = !!m?.hasActiveTrial,
        I = T ? u?.premiumType : null,
        f = null != C || T,
        j = (0, y.Lj)(I, C);
    return (0, n.jsxs)("div", {
        className: a()(k.Vd, k.Nr, s, { [k.vt]: !o && f, [k.lr]: !o && f }),
        children: [
            !o &&
                null != j &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(y.R, { text: j, className: k.LW, colorOptions: y.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, n.jsx)("div", { className: k.o4 }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: k.wp,
                      children: (0, n.jsx)(c._V3, {
                          src: Z,
                          mediaLayoutType: O.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(h.A, { className: a()(k.DD, k.ZD) }),
                            (0, n.jsx)(b.A, {
                                isGift: o,
                                premiumTier: U.PremiumTypes.TIER_0,
                                offerType: U.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: C === U.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(W, {}) }),
                ],
            }),
            o || C !== U.pe.TIER_0 ? null : (0, n.jsx)(L.Wy, { tier: U.PremiumTypes.TIER_0 }),
            i,
        ],
    });
}
var q =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function Q(e) {
    let {
            featureSet: t = 0,
            isModal: i = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: s = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: d,
        } = e,
        m = (0, l.bG)([C.default], () => C.default.locale),
        u = (0, l.bG)([f.A], () => f.A.affinities),
        x = !s && i && !r && u.length > 0,
        g = 3 === t || (0 === t && s && o),
        p = (() => {
            switch (t) {
                case 3:
                    return S.z9;
                case 1:
                    return S.ku;
                case 2:
                    return S.Qi;
                case 4:
                    return H.ro;
                case 5:
                    return H.xs;
                default:
                    return S.Oc;
            }
        })();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            g &&
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: s ? V.tier2ApplicationHomeSubheader : k.RQ,
                    children: D.intl.string(D.t.AozD3Q),
                }),
            p.map((e, i) => {
                let { Icon: r, getText: l } = e;
                return (0, n.jsx)(
                    J,
                    {
                        Icon: r,
                        text: l(m),
                        className: a()(3 === t ? k.dT : k.HW, 0 === i ? d : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: s,
                    },
                    i,
                );
            }),
            x && (3 === t || 0 === t) && (0, n.jsx)(w.A, {}),
        ],
    });
}
function $(e) {
    let {
            ctaButton: t,
            showYearlyPrice: i,
            featureSet: r = 0,
            className: s,
            isGift: l = !1,
            isModal: o = !1,
            priceOptions: d,
            showPromotionalGiftBanner: m = !1,
        } = e,
        u = (0, N.V)(),
        x = u?.subscription_trial?.sku_id,
        C = (0, A.ar)(),
        g = (0, R.O)(),
        p = null != u ? U.Vk.PREMIUM_TRIAL : null != g ? U.Vk.PREMIUM_DISCOUNT : null,
        h = (0, j.cg)(),
        I = !l && C,
        f = (0, v.A)()?.planSelection,
        P = f?.getBackgroundImageUrl?.(),
        y = f?.getCardImageUrl?.(),
        L = (0, E._)();
    return (0, n.jsxs)("div", {
        className: a()(k.Nr, k.hA, k.aD, s, { [k.J5]: I, [k.lr]: I, [k.jx]: m, [k.ud]: m && null != y }),
        children: [
            m && null != y && (0, n.jsx)("img", { className: k.Cr, alt: "", src: y }),
            m && null != P && (0, n.jsx)("img", { className: k.gx, alt: "", src: P }),
            (0, n.jsx)("div", { className: k.S9 }),
            (0, n.jsx)("img", { src: B, className: k.ci, alt: "" }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(T.A, { className: a()(k.DD, k.cB) }),
                            !l &&
                                x !== U.pe.TIER_2 &&
                                h &&
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: k.zu,
                                        children: L,
                                    }),
                                }),
                            (0, n.jsx)(b.A, {
                                isGift: l,
                                premiumTier: U.PremiumTypes.TIER_2,
                                offerType: p,
                                offerTierMatchesCard: x === U.pe.TIER_2 || (0, M.U9)(g, U.pe.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: d,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(Q, { featureSet: r, isModal: o, isGift: l, isApplicationHome: !0 }),
                    }),
                ],
            }),
            t,
            m && (0, n.jsx)(_.K, {}),
        ],
    });
}
function X(e) {
    let {
            showWumpus: t,
            ctaButton: i,
            showYearlyPrice: r,
            featureSet: s = 0,
            className: m,
            isGift: u = !1,
            isModal: x = !1,
            priceOptions: C,
            showPromotionalGiftBanner: h = !1,
        } = e,
        I = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        f = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        P = (0, N.V)(),
        w = P?.subscription_trial?.sku_id,
        H = I?.hasActiveTrial ? f?.premiumType : null,
        S = (0, A.ar)(),
        G = (0, R.O)(),
        D = (0, A.k5)(),
        V = null != w || null != H ? U.Vk.PREMIUM_TRIAL : null != G || D ? U.Vk.PREMIUM_DISCOUNT : null,
        B = (0, j.cg)(),
        Z = !u && S,
        J = (0, v.A)()?.planSelection,
        z = J?.getBackgroundImageUrl?.(),
        W = J?.getCardImageUrl?.(),
        Y = (0, E._)(),
        K = (0, o.qB)((0, d.Ay)()),
        q = K ? y.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : y.at.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, y.rm)(D, H, G, P, w),
        X = Z && !K ? k.on : void 0;
    return (0, n.jsxs)("div", {
        className: a()(k.Nr, k.hA, m, { [k.J5]: Z, [k.lr]: Z, [k.jx]: h, [k.ud]: h && null != W }),
        children: [
            h && null !== W && (0, n.jsx)("img", { className: k.Cr, alt: "", src: W }),
            h && null !== z && (0, n.jsx)("img", { className: k.gx, alt: "", src: z }),
            !u &&
                null != $ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(y.R, { text: $, className: k.LW, colorOptions: q }),
                        (0, n.jsx)("div", { className: X }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: k.wp,
                      children: (0, n.jsx)(c._V3, {
                          src: F,
                          mediaLayoutType: O.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(T.A, { className: a()(k.DD, k.$l) }),
                            !u &&
                                w !== U.pe.TIER_2 &&
                                B &&
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: k.zu,
                                        children: Y,
                                    }),
                                }),
                            (0, n.jsx)(b.A, {
                                isGift: u,
                                premiumTier: U.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: w === U.pe.TIER_2 || (0, M.U9)(G, U.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: C,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(Q, { featureSet: s, isModal: x, isGift: u }) }),
                ],
            }),
            u || (w !== U.pe.TIER_2 && null == G) ? null : (0, n.jsx)(L.Wy, { tier: U.PremiumTypes.TIER_2 }),
            i,
            h && (0, n.jsx)(_.K, {}),
        ],
    });
}
let ee = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function et(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: i, className: r } = e,
        { analyticsLocations: s } = (0, u.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD),
        l = ee(t),
        o = (0, n.jsx)(P.A, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: U.pe.TIER_0,
            className: k.Ph,
            textOptions: { textClassName: k.uz },
            buttonShineClassName: k.Qr,
        }),
        d = (0, n.jsx)(P.A, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: U.pe.TIER_2,
            className: k.Ph,
            hasActivePromotion: i,
            textOptions: { textClassName: k.uz },
            buttonShineClassName: k.Qr,
        });
    return (0, n.jsxs)(u.f5, {
        value: s,
        children: [
            (0, n.jsx)(c.Heading, {
                ref: l,
                className: k.CV,
                variant: "display-md",
                color: "text-strong",
                children: D.intl.string(D.t.vLz3Zs),
            }),
            (0, n.jsxs)("div", {
                ref: l,
                className: a()(k.Zo, r),
                children: [(0, n.jsx)(Y, { ctaButton: o }), (0, n.jsx)($, { ctaButton: d, featureSet: 3 })],
            }),
        ],
    });
}
function ei(e) {
    let { innerRef: t, className: i, tier0CTAButton: r, tier2CTAButton: s } = e,
        { analyticsLocations: l } = (0, u.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD),
        o = ee(t);
    return (0, n.jsx)(u.f5, {
        value: l,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: a()(k.Zo, i),
            children: [
                (0, n.jsx)(K, { showWumpus: !0, ctaButton: r }),
                (0, n.jsx)(X, { showWumpus: !0, ctaButton: s }),
            ],
        }),
    });
}
