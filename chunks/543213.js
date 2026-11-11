var n,
    l = t(477900);
t(582128);
var i = t(503698),
    s = t.n(i),
    a = t(855986),
    c = t(462887),
    u = t(834730),
    o = t(251843),
    m = t(140735),
    d = t(707554),
    p = t(736653),
    x = t(793574),
    h = t(688810),
    T = t(536071),
    I = t(773669),
    A = t(287809),
    E = t(166403),
    f = t(224016),
    g = t(217392),
    j = t(526292),
    R = t(552736),
    _ = t(1878),
    v = t(589152),
    N = t(423814),
    M = t(77528),
    P = t(511484),
    y = t(774774),
    b = t(349563),
    O = t(976333),
    U = t(934500),
    L = t(291029),
    C = t(222719),
    D = t(682901),
    S = t(838541),
    H = t(107198),
    k = t(792996),
    F = t(367740),
    G = t(174788),
    w = t(793481),
    B = t(497451);
function V(e) {
    let {
        Icon: r,
        text: t,
        isNew: n = !1,
        className: i,
        textVariant: a,
        isApplicationHome: c,
        enablePremiumBrandRefresh: o,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(i, { [G.featureItem]: o, [G.featureItemApplicationHome]: o && c }),
        children: [
            (0, l.jsx)(r, { className: o ? F.hi : F.Kk, color: "currentColor" }),
            (0, l.jsx)(u.E, {
                variant: a ?? "body-md/normal",
                color: o || c ? "currentColor" : "text-overlay-light",
                children: t,
            }),
            n ? (0, l.jsx)(T.A, { className: F.OC, forceUseColorForSparkles: !0, variant: "inverted" }) : null,
        ],
    });
}
function W(e) {
    let { isApplicationHome: r, enablePremiumBrandRefresh: t, textVariant: n } = e,
        i = r && !t ? L.I4 : L.fB;
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, i) => {
            let { Icon: s, getText: a } = e;
            return (0, l.jsx)(
                V,
                {
                    Icon: s,
                    text: a(),
                    className: r && !t ? F.dT : F.HW,
                    textVariant: n ?? (r && !t ? "body-sm/normal" : void 0),
                    enablePremiumBrandRefresh: t,
                    isApplicationHome: r,
                },
                i,
            );
        }),
    });
}
function Y(e) {
    let { showWumpus: r, ctaButton: t, showYearlyPrice: n, className: i, isGift: c = !1, priceOptions: u } = e,
        p = (0, a.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, M.V)(),
        T = h?.subscriptionTrial?.skuId,
        I = !!p?.hasActiveTrial,
        f = I ? x?.premiumType : null,
        j = null != T || I,
        R = (0, y.Lj)(f, T);
    return (0, l.jsxs)("div", {
        className: s()(F.Vd, F.Nr, i, { [F.vt]: !c && j, [F.lr]: !c && j }),
        children: [
            !c &&
                null != R &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: R, className: F.LW, colorOptions: y.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: F.o4 }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: F.wp,
                      children: (0, l.jsx)(o._, {
                          src: w,
                          alt: k.intl.string(k.t["02VBaY"]),
                          mediaLayoutType: S.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: F.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(d.H, { children: k.intl.string(k.t["t9uG/o"]) }) }),
                            (0, l.jsx)(g.A, { className: s()(F.DD, F.ZD) }),
                            (0, l.jsx)(C.A, {
                                isGift: c,
                                premiumTier: D.PremiumTypes.TIER_0,
                                offerType: D.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: T === D.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: u,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(W, {}) }),
                ],
            }),
            c || T !== D.pe.TIER_0 ? null : (0, l.jsx)(b.Wy, { tier: D.PremiumTypes.TIER_0 }),
            t,
        ],
    });
}
var z =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);
function K(e) {
    let {
            featureSet: r = 0,
            isModal: t = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: i = !1,
            isApplicationHome: c = !1,
            firstFeatureItemClassName: o,
            textVariant: m,
        } = e,
        d = (0, a.bG)([I.default], () => I.default.locale),
        p = (0, v.b)(),
        x = !i && t && !n && p.length > 0,
        h = 3 === r || (0 === r && i && c),
        T = (function () {
            switch (r) {
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
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsx)(u.E, {
                    variant: "body-sm/semibold",
                    className: i ? G.tier2ApplicationHomeSubheader : F.RQ,
                    children: k.intl.string(k.t.AozD3Q),
                }),
            T.map((e, t) => {
                let { Icon: n, getText: a } = e;
                return (0, l.jsx)(
                    V,
                    {
                        Icon: n,
                        text: a(d),
                        className: s()(3 === r ? F.dT : F.HW, 0 === t ? o : void 0),
                        textVariant: m ?? (3 === r ? "body-sm/normal" : void 0),
                        isApplicationHome: c,
                        enablePremiumBrandRefresh: i,
                    },
                    t,
                );
            }),
            x && (3 === r || 0 === r) && (0, l.jsx)(O.A, {}),
        ],
    });
}
function Q(e) {
    let {
            showWumpus: r,
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: i = 0,
            className: u,
            isGift: x = !1,
            isModal: h = !1,
            priceOptions: T,
            showPromotionalGiftBanner: I = !1,
        } = e,
        g = (0, a.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        v = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        O = (0, M.V)(),
        U = O?.subscriptionTrial?.skuId,
        L = g?.hasActiveTrial ? v?.premiumType : null,
        H = (0, j.ar)(),
        G = (0, N.O)(),
        w = (0, j.k5)(),
        V = null != U || null != L ? D.Vk.PREMIUM_TRIAL : null != G || w ? D.Vk.PREMIUM_DISCOUNT : null,
        W = !x && H,
        Y = (0, R.A)()?.planSelection,
        z = Y?.getBackgroundImageUrl?.(),
        Q = Y?.getCardImageUrl?.(),
        J = (0, c.q)((0, p.Ay)()),
        Z = J ? y.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : y.at.PREMIUM_TIER_2_WHITE_FILL,
        q = (0, y.rm)(w, L, G, O, U),
        X = W && !J ? F.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(F.Nr, F.hA, u, { [F.J5]: W, [F.lr]: W, [F.jx]: I, [F.ud]: I && null != Q }),
        children: [
            I && null !== Q && (0, l.jsx)("img", { className: F.Cr, alt: "", src: Q }),
            I && null !== z && (0, l.jsx)("img", { className: F.gx, alt: "", src: z }),
            !x &&
                null != q &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: q, className: F.LW, colorOptions: Z }),
                        (0, l.jsx)("div", { className: X }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: F.wp,
                      children: (0, l.jsx)(o._, {
                          src: B,
                          alt: k.intl.string(k.t.XP8vWR),
                          mediaLayoutType: S.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: F.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(d.H, { children: k.intl.string(k.t.lG6a5x) }) }),
                            (0, l.jsx)(f.A, { className: s()(F.DD, F.$l) }),
                            (0, l.jsx)(C.A, {
                                isGift: x,
                                premiumTier: D.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: U === D.pe.TIER_2 || (0, P.U9)(G, D.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: T,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(K, { featureSet: i, isModal: h, isGift: x }) }),
                ],
            }),
            x || (U !== D.pe.TIER_2 && null == G) ? null : (0, l.jsx)(b.Wy, { tier: D.PremiumTypes.TIER_2 }),
            t,
            I && (0, l.jsx)(_.K, {}),
        ],
    });
}
function J(e) {
    return (r) => {
        null != e && ("function" == typeof e ? e(r) : e.hasOwnProperty("current") && (e.current = r));
    };
}
t.d(
    r,
    {},
    {
        Lg: function (e) {
            let { isApplicationHome: r, textVariant: t } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    r &&
                        (0, l.jsx)(u.E, {
                            variant: "body-sm/semibold",
                            className: G.tier2ApplicationHomeSubheader,
                            children: k.intl.string(H.default.ItfIa5),
                        }),
                    U.PV.map((e, n) => {
                        let { Icon: i, getText: s } = e;
                        return (0, l.jsx)(
                            V,
                            { Icon: i, text: s(), textVariant: t, enablePremiumBrandRefresh: !0, isApplicationHome: r },
                            n,
                        );
                    }),
                ],
            });
        },
        Nz: z,
        ZP: K,
        nH: W,
        pw: J,
        qu: function (e) {
            let { innerRef: r, className: t, tier0CTAButton: n, tier2CTAButton: i } = e,
                { analyticsLocations: a } = (0, h.Ay)(x.A.PREMIUM_MARKETING_TIER_CARD),
                c = J(r);
            return (0, l.jsx)(h.f5, {
                value: a,
                children: (0, l.jsxs)("div", {
                    ref: c,
                    className: s()(F.Zo, t),
                    children: [
                        (0, l.jsx)(Y, { showWumpus: !0, ctaButton: n }),
                        (0, l.jsx)(Q, { showWumpus: !0, ctaButton: i }),
                    ],
                }),
            });
        },
    },
);
