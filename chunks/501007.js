r.d(t, { Lg: () => B, NB: () => q, Nz: () => J, ZP: () => Z, nH: () => V, pw: () => Y });
var n,
    i = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(311907),
    o = r(582754),
    c = r(397927),
    d = r(736653),
    m = r(793574),
    u = r(688810),
    T = r(953143),
    g = r(773669),
    I = r(287809),
    x = r(166403),
    p = r(224016),
    _ = r(217392);
r(60490);
var f = r(560138),
    A = r(40185),
    h = r(526292),
    N = r(552736),
    E = r(1878),
    R = r(422936),
    j = r(234419);
r(396375);
var v = r(511484),
    P = r(231265),
    S = r(795269),
    b = r(349563),
    y = r(90526),
    M = r(300542),
    U = r(4382),
    L = r(284951),
    G = r(788868),
    C = r(838541),
    O = r(518582),
    D = r(985018),
    w = r(10273),
    F = r(345905);
r(122402);
var H = r(793481),
    K = r(497451);
function k(e) {
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
        className: s()(a, { [w.featureItem]: d, [w.featureItemApplicationHome]: d && o }),
        children: [
            (0, i.jsx)(t, { className: d ? F.hi : F.Kk, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
                variant: l ?? "text-md/normal",
                color: d || o ? "currentColor" : "always-white",
                children: r,
            }),
            n
                ? (0, i.jsx)(T.A, {
                      className: F.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function B(e) {
    let { isApplicationHome: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: w.tier2ApplicationHomeSubheader,
                    children: D.intl.string(O.default.ItfIa5),
                }),
            U.PV.map((e, r) => {
                let { Icon: n, getText: a } = e;
                return (0, i.jsx)(k, { Icon: n, text: a(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, r);
            }),
        ],
    });
}
function V(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        n = t && !r ? L.I4 : L.fB;
    return (0, i.jsx)(i.Fragment, {
        children: n.map((e, n) => {
            let { Icon: a, getText: s } = e;
            return (0, i.jsx)(
                k,
                {
                    Icon: a,
                    text: s(),
                    className: t && !r ? F.dT : F.HW,
                    textVariant: t && !r ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: r,
                    isApplicationHome: t,
                },
                n,
            );
        }),
    });
}
function W(e) {
    let { showWumpus: t, ctaButton: r, showYearlyPrice: n, className: a, isGift: o = !1, priceOptions: d } = e,
        m = (0, l.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        u = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        T = (0, j.V)(),
        g = T?.subscription_trial?.sku_id,
        p = !!m?.hasActiveTrial,
        f = p ? u?.premiumType : null,
        A = null != g || p,
        h = (0, S.Lj)(f, g);
    return (0, i.jsxs)("div", {
        className: s()(F.Vd, F.Nr, a, { [F.vt]: !o && A, [F.lr]: !o && A }),
        children: [
            !o &&
                null != h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.R, { text: h, className: F.LW, colorOptions: S.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: F.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: F.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: H,
                          mediaLayoutType: C.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: F.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(_.A, { className: s()(F.DD, F.ZD) }),
                            (0, i.jsx)(y.A, {
                                isGift: o,
                                premiumTier: G.PremiumTypes.TIER_0,
                                offerType: G.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: g === G.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(V, {}) }),
                ],
            }),
            o || g !== G.pe.TIER_0 ? null : (0, i.jsx)(b.Wy, { tier: G.PremiumTypes.TIER_0 }),
            r,
        ],
    });
}
var J =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);
function Z(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: a = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: d,
        } = e,
        m = (0, l.bG)([g.default], () => g.default.locale),
        u = (0, l.bG)([f.A], () => f.A.affinities),
        T = !a && r && !n && u.length > 0,
        I = 3 === t || (0 === t && a && o),
        x = (() => {
            switch (t) {
                case 3:
                    return L.z9;
                case 1:
                    return L.ku;
                case 2:
                    return L.Qi;
                case 4:
                    return U.ro;
                case 5:
                    return U.xs;
                default:
                    return L.Oc;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: a ? w.tier2ApplicationHomeSubheader : F.RQ,
                    children: D.intl.string(D.t.AozD3Q),
                }),
            x.map((e, r) => {
                let { Icon: n, getText: l } = e;
                return (0, i.jsx)(
                    k,
                    {
                        Icon: n,
                        text: l(m),
                        className: s()(3 === t ? F.dT : F.HW, 0 === r ? d : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: a,
                    },
                    r,
                );
            }),
            T && (3 === t || 0 === t) && (0, i.jsx)(M.A, {}),
        ],
    });
}
function z(e) {
    let {
            showWumpus: t,
            ctaButton: r,
            showYearlyPrice: n,
            featureSet: a = 0,
            className: m,
            isGift: u = !1,
            isModal: T = !1,
            priceOptions: g,
            showPromotionalGiftBanner: _ = !1,
        } = e,
        f = (0, l.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        M = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        U = (0, j.V)(),
        L = U?.subscription_trial?.sku_id,
        O = f?.hasActiveTrial ? M?.premiumType : null,
        D = (0, h.ar)(),
        w = (0, R.O)(),
        H = (0, h.k5)(),
        k = null != L || null != O ? G.Vk.PREMIUM_TRIAL : null != w || H ? G.Vk.PREMIUM_DISCOUNT : null,
        B = (0, A.cg)(),
        V = !u && D,
        W = (0, N.A)()?.planSelection,
        J = W?.getBackgroundImageUrl?.(),
        z = W?.getCardImageUrl?.(),
        Y = (0, P._)(),
        q = (0, o.qB)((0, d.Ay)()),
        Q = q ? S.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : S.at.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, S.rm)(H, O, w, U, L),
        X = V && !q ? F.on : void 0;
    return (0, i.jsxs)("div", {
        className: s()(F.Nr, F.hA, m, { [F.J5]: V, [F.lr]: V, [F.jx]: _, [F.ud]: _ && null != z }),
        children: [
            _ && null !== z && (0, i.jsx)("img", { className: F.Cr, alt: "", src: z }),
            _ && null !== J && (0, i.jsx)("img", { className: F.gx, alt: "", src: J }),
            !u &&
                null != $ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.R, { text: $, className: F.LW, colorOptions: Q }),
                        (0, i.jsx)("div", { className: X }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: F.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: K,
                          mediaLayoutType: C.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: F.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(p.A, { className: s()(F.DD, F.$l) }),
                            !u &&
                                L !== G.pe.TIER_2 &&
                                B &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: F.zu,
                                        children: Y,
                                    }),
                                }),
                            (0, i.jsx)(y.A, {
                                isGift: u,
                                premiumTier: G.PremiumTypes.TIER_2,
                                offerType: k,
                                offerTierMatchesCard: L === G.pe.TIER_2 || (0, v.U9)(w, G.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: g,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(Z, { featureSet: a, isModal: T, isGift: u }) }),
                ],
            }),
            u || (L !== G.pe.TIER_2 && null == w) ? null : (0, i.jsx)(b.Wy, { tier: G.PremiumTypes.TIER_2 }),
            r,
            _ && (0, i.jsx)(E.K, {}),
        ],
    });
}
let Y = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function q(e) {
    let { innerRef: t, className: r, tier0CTAButton: n, tier2CTAButton: a } = e,
        { analyticsLocations: l } = (0, u.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD),
        o = Y(t);
    return (0, i.jsx)(u.f5, {
        value: l,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: s()(F.Zo, r),
            children: [
                (0, i.jsx)(W, { showWumpus: !0, ctaButton: n }),
                (0, i.jsx)(z, { showWumpus: !0, ctaButton: a }),
            ],
        }),
    });
}
