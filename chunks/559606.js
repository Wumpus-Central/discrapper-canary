r.d(t, { Lg: () => V, Nz: () => W, ZP: () => z, nH: () => J, pw: () => K, qu: () => q });
var n,
    i = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(311907),
    o = r(582754),
    c = r(397927),
    d = r(736653),
    u = r(793574),
    m = r(688810),
    x = r(953143),
    g = r(773669),
    T = r(287809),
    p = r(166403),
    I = r(224016),
    h = r(217392),
    f = r(40185),
    j = r(526292),
    A = r(552736),
    v = r(1878),
    R = r(848245),
    _ = r(422936),
    P = r(234419),
    N = r(511484),
    E = r(774774),
    y = r(231265),
    C = r(349563),
    M = r(90526),
    b = r(300542),
    S = r(4382),
    U = r(284951),
    w = r(788868),
    L = r(838541),
    O = r(466919),
    G = r(985018),
    H = r(923883),
    D = r(79304),
    k = r(793481),
    F = r(497451);
function B(e) {
    let {
        Icon: t,
        text: r,
        isNew: n = !1,
        className: a,
        textVariant: l,
        isApplicationHome: o,
        enablePremiumBrandRefresh: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(a, { [D.featureItem]: d, [D.featureItemApplicationHome]: d && o }),
        children: [
            (0, i.jsx)(t, { className: d ? H.hi : H.Kk, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
                variant: l ?? "text-md/normal",
                color: d || o ? "currentColor" : "always-white",
                children: r,
            }),
            n
                ? (0, i.jsx)(x.A, {
                      className: H.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function V(e) {
    let { isApplicationHome: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: D.tier2ApplicationHomeSubheader,
                    children: G.intl.string(O.default.ItfIa5),
                }),
            S.PV.map((e, r) => {
                let { Icon: n, getText: a } = e;
                return (0, i.jsx)(B, { Icon: n, text: a(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, r);
            }),
        ],
    });
}
function J(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        n = t && !r ? U.I4 : U.fB;
    return (0, i.jsx)(i.Fragment, {
        children: n.map((e, n) => {
            let { Icon: a, getText: s } = e;
            return (0, i.jsx)(
                B,
                {
                    Icon: a,
                    text: s(),
                    className: t && !r ? H.dT : H.HW,
                    textVariant: t && !r ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: r,
                    isApplicationHome: t,
                },
                n,
            );
        }),
    });
}
function Z(e) {
    let { showWumpus: t, ctaButton: r, showYearlyPrice: n, className: a, isGift: o = !1, priceOptions: d } = e,
        u = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        m = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        x = (0, P.V)(),
        g = x?.subscription_trial?.sku_id,
        I = !!u?.hasActiveTrial,
        f = I ? m?.premiumType : null,
        j = null != g || I,
        A = (0, E.Lj)(f, g);
    return (0, i.jsxs)("div", {
        className: s()(H.Vd, H.Nr, a, { [H.vt]: !o && j, [H.lr]: !o && j }),
        children: [
            !o &&
                null != A &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(E.e4, { text: A, className: H.LW, colorOptions: E.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: H.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: H.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: k,
                          mediaLayoutType: L.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(h.A, { className: s()(H.DD, H.ZD) }),
                            (0, i.jsx)(M.A, {
                                isGift: o,
                                premiumTier: w.PremiumTypes.TIER_0,
                                offerType: w.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: g === w.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(J, {}) }),
                ],
            }),
            o || g !== w.pe.TIER_0 ? null : (0, i.jsx)(C.Wy, { tier: w.PremiumTypes.TIER_0 }),
            r,
        ],
    });
}
var W =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);
function z(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: a = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: d,
        } = e,
        u = (0, l.bG)([g.default], () => g.default.locale),
        m = (0, R.b)(),
        x = !a && r && !n && m.length > 0,
        T = 3 === t || (0 === t && a && o),
        p = (() => {
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            T &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: a ? D.tier2ApplicationHomeSubheader : H.RQ,
                    children: G.intl.string(G.t.AozD3Q),
                }),
            p.map((e, r) => {
                let { Icon: n, getText: l } = e;
                return (0, i.jsx)(
                    B,
                    {
                        Icon: n,
                        text: l(u),
                        className: s()(3 === t ? H.dT : H.HW, 0 === r ? d : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: a,
                    },
                    r,
                );
            }),
            x && (3 === t || 0 === t) && (0, i.jsx)(b.A, {}),
        ],
    });
}
function Y(e) {
    let {
            showWumpus: t,
            ctaButton: r,
            showYearlyPrice: n,
            featureSet: a = 0,
            className: u,
            isGift: m = !1,
            isModal: x = !1,
            priceOptions: g,
            showPromotionalGiftBanner: h = !1,
        } = e,
        R = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        b = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        S = (0, P.V)(),
        U = S?.subscription_trial?.sku_id,
        O = R?.hasActiveTrial ? b?.premiumType : null,
        G = (0, j.ar)(),
        D = (0, _.O)(),
        k = (0, j.k5)(),
        B = null != U || null != O ? w.Vk.PREMIUM_TRIAL : null != D || k ? w.Vk.PREMIUM_DISCOUNT : null,
        V = (0, f.cg)(),
        J = !m && G,
        Z = (0, A.A)()?.planSelection,
        W = Z?.getBackgroundImageUrl?.(),
        Y = Z?.getCardImageUrl?.(),
        K = (0, y._)(),
        q = (0, o.qB)((0, d.Ay)()),
        Q = q ? E.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : E.at.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, E.rm)(k, O, D, S, U),
        X = J && !q ? H.on : void 0;
    return (0, i.jsxs)("div", {
        className: s()(H.Nr, H.hA, u, { [H.J5]: J, [H.lr]: J, [H.jx]: h, [H.ud]: h && null != Y }),
        children: [
            h && null !== Y && (0, i.jsx)("img", { className: H.Cr, alt: "", src: Y }),
            h && null !== W && (0, i.jsx)("img", { className: H.gx, alt: "", src: W }),
            !m &&
                null != $ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(E.e4, { text: $, className: H.LW, colorOptions: Q }),
                        (0, i.jsx)("div", { className: X }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: H.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: F,
                          mediaLayoutType: L.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(I.A, { className: s()(H.DD, H.$l) }),
                            !m &&
                                U !== w.pe.TIER_2 &&
                                V &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: H.zu,
                                        children: K,
                                    }),
                                }),
                            (0, i.jsx)(M.A, {
                                isGift: m,
                                premiumTier: w.PremiumTypes.TIER_2,
                                offerType: B,
                                offerTierMatchesCard: U === w.pe.TIER_2 || (0, N.U9)(D, w.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: g,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(z, { featureSet: a, isModal: x, isGift: m }) }),
                ],
            }),
            m || (U !== w.pe.TIER_2 && null == D) ? null : (0, i.jsx)(C.Wy, { tier: w.PremiumTypes.TIER_2 }),
            r,
            h && (0, i.jsx)(v.K, {}),
        ],
    });
}
let K = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function q(e) {
    let { innerRef: t, className: r, tier0CTAButton: n, tier2CTAButton: a } = e,
        { analyticsLocations: l } = (0, m.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD),
        o = K(t);
    return (0, i.jsx)(m.f5, {
        value: l,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: s()(H.Zo, r),
            children: [
                (0, i.jsx)(Z, { showWumpus: !0, ctaButton: n }),
                (0, i.jsx)(Y, { showWumpus: !0, ctaButton: a }),
            ],
        }),
    });
}
