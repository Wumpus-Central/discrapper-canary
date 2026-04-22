r.d(t, { Lg: () => Z, Nz: () => K, ZP: () => z, nH: () => W, pw: () => q, qu: () => Q });
var i,
    n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(311907),
    o = r(462887),
    c = r(834730),
    d = r(673698),
    u = r(736653),
    m = r(793574),
    g = r(688810),
    x = r(953143),
    p = r(773669),
    T = r(287809),
    h = r(166403),
    I = r(224016),
    f = r(217392),
    j = r(40185),
    A = r(526292),
    v = r(552736),
    R = r(1878),
    _ = r(848245),
    E = r(422936),
    P = r(234419),
    N = r(511484),
    C = r(774774),
    y = r(231265),
    M = r(349563),
    b = r(90526),
    w = r(300542),
    S = r(4382),
    U = r(284951),
    L = r(788868),
    O = r(838541),
    G = r(963458),
    D = r(985018),
    H = r(687595),
    k = r(666952),
    F = r(793481),
    V = r(497451);
function B(e) {
    let {
        Icon: t,
        text: r,
        isNew: i = !1,
        className: a,
        textVariant: l,
        isApplicationHome: o,
        enablePremiumBrandRefresh: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(a, { [k.featureItem]: d, [k.featureItemApplicationHome]: d && o }),
        children: [
            (0, n.jsx)(t, { className: d ? H.hi : H.Kk, color: "currentColor" }),
            (0, n.jsx)(c.E, {
                variant: l ?? "text-md/normal",
                color: d || o ? "currentColor" : "always-white",
                children: r,
            }),
            i
                ? (0, n.jsx)(x.A, {
                      className: H.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function Z(e) {
    let { isApplicationHome: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t &&
                (0, n.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: k.tier2ApplicationHomeSubheader,
                    children: D.intl.string(G.default.ItfIa5),
                }),
            S.PV.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, n.jsx)(B, { Icon: i, text: a(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, r);
            }),
        ],
    });
}
function W(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        i = t && !r ? U.I4 : U.fB;
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: s } = e;
            return (0, n.jsx)(
                B,
                {
                    Icon: a,
                    text: s(),
                    className: t && !r ? H.dT : H.HW,
                    textVariant: t && !r ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: r,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function J(e) {
    let { showWumpus: t, ctaButton: r, showYearlyPrice: i, className: a, isGift: o = !1, priceOptions: c } = e,
        u = (0, l.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        m = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, P.V)(),
        x = g?.subscription_trial?.sku_id,
        p = !!u?.hasActiveTrial,
        I = p ? m?.premiumType : null,
        j = null != x || p,
        A = (0, C.Lj)(I, x);
    return (0, n.jsxs)("div", {
        className: s()(H.Vd, H.Nr, a, { [H.vt]: !o && j, [H.lr]: !o && j }),
        children: [
            !o &&
                null != A &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(C.e4, { text: A, className: H.LW, colorOptions: C.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, n.jsx)("div", { className: H.o4 }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: H.wp,
                      children: (0, n.jsx)(d._, {
                          src: F,
                          mediaLayoutType: O.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(f.A, { className: s()(H.DD, H.ZD) }),
                            (0, n.jsx)(b.A, {
                                isGift: o,
                                premiumTier: L.PremiumTypes.TIER_0,
                                offerType: L.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: x === L.pe.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(W, {}) }),
                ],
            }),
            o || x !== L.pe.TIER_0 ? null : (0, n.jsx)(M.Wy, { tier: L.PremiumTypes.TIER_0 }),
            r,
        ],
    });
}
var K =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.BOOSTING = 1)] = "BOOSTING"),
    (i[(i.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (i[(i.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (i[(i.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (i[(i.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    i);
function z(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: i = !1,
            enablePremiumBrandRefresh: a = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: d,
        } = e,
        u = (0, l.bG)([p.default], () => p.default.locale),
        m = (0, _.b)(),
        g = !a && r && !i && m.length > 0,
        x = 3 === t || (0 === t && a && o),
        T = (() => {
            switch (t) {
                case 3:
                    return U.z9;
                case 1:
                    return U.ku;
                case 2:
                    return U.Qi;
                case 4:
                    return S.ro;
                case 5:
                    return S.xs;
                default:
                    return U.Oc;
            }
        })();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x &&
                (0, n.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: a ? k.tier2ApplicationHomeSubheader : H.RQ,
                    children: D.intl.string(D.t.AozD3Q),
                }),
            T.map((e, r) => {
                let { Icon: i, getText: l } = e;
                return (0, n.jsx)(
                    B,
                    {
                        Icon: i,
                        text: l(u),
                        className: s()(3 === t ? H.dT : H.HW, 0 === r ? d : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: a,
                    },
                    r,
                );
            }),
            g && (3 === t || 0 === t) && (0, n.jsx)(w.A, {}),
        ],
    });
}
function Y(e) {
    let {
            showWumpus: t,
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: a = 0,
            className: m,
            isGift: g = !1,
            isModal: x = !1,
            priceOptions: p,
            showPromotionalGiftBanner: f = !1,
        } = e,
        _ = (0, l.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        w = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        S = (0, P.V)(),
        U = S?.subscription_trial?.sku_id,
        G = _?.hasActiveTrial ? w?.premiumType : null,
        D = (0, A.ar)(),
        k = (0, E.O)(),
        F = (0, A.k5)(),
        B = null != U || null != G ? L.Vk.PREMIUM_TRIAL : null != k || F ? L.Vk.PREMIUM_DISCOUNT : null,
        Z = (0, j.cg)(),
        W = !g && D,
        J = (0, v.A)()?.planSelection,
        K = J?.getBackgroundImageUrl?.(),
        Y = J?.getCardImageUrl?.(),
        q = (0, y._)(),
        Q = (0, o.q)((0, u.Ay)()),
        $ = Q ? C.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : C.at.PREMIUM_TIER_2_WHITE_FILL,
        X = (0, C.rm)(F, G, k, S, U),
        ee = W && !Q ? H.on : void 0;
    return (0, n.jsxs)("div", {
        className: s()(H.Nr, H.hA, m, { [H.J5]: W, [H.lr]: W, [H.jx]: f, [H.ud]: f && null != Y }),
        children: [
            f && null !== Y && (0, n.jsx)("img", { className: H.Cr, alt: "", src: Y }),
            f && null !== K && (0, n.jsx)("img", { className: H.gx, alt: "", src: K }),
            !g &&
                null != X &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(C.e4, { text: X, className: H.LW, colorOptions: $ }),
                        (0, n.jsx)("div", { className: ee }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: H.wp,
                      children: (0, n.jsx)(d._, {
                          src: V,
                          mediaLayoutType: O.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(I.A, { className: s()(H.DD, H.$l) }),
                            !g &&
                                U !== L.pe.TIER_2 &&
                                Z &&
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(c.E, {
                                        variant: "text-xs/bold",
                                        className: H.zu,
                                        children: q,
                                    }),
                                }),
                            (0, n.jsx)(b.A, {
                                isGift: g,
                                premiumTier: L.PremiumTypes.TIER_2,
                                offerType: B,
                                offerTierMatchesCard: U === L.pe.TIER_2 || (0, N.U9)(k, L.pe.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(z, { featureSet: a, isModal: x, isGift: g }) }),
                ],
            }),
            g || (U !== L.pe.TIER_2 && null == k) ? null : (0, n.jsx)(M.Wy, { tier: L.PremiumTypes.TIER_2 }),
            r,
            f && (0, n.jsx)(R.K, {}),
        ],
    });
}
let q = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function Q(e) {
    let { innerRef: t, className: r, tier0CTAButton: i, tier2CTAButton: a } = e,
        { analyticsLocations: l } = (0, g.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD),
        o = q(t);
    return (0, n.jsx)(g.f5, {
        value: l,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: s()(H.Zo, r),
            children: [
                (0, n.jsx)(J, { showWumpus: !0, ctaButton: i }),
                (0, n.jsx)(Y, { showWumpus: !0, ctaButton: a }),
            ],
        }),
    });
}
