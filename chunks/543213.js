var n,
    l = t(477900);
t(582128);
var i = t(503698),
    s = t.n(i),
    a = t(855986),
    c = t(462887),
    o = t(834730),
    u = t(251843),
    d = t(140735),
    m = t(707554),
    p = t(736653),
    x = t(793574),
    h = t(688810),
    A = t(536071),
    T = t(773669),
    I = t(287809),
    E = t(166403),
    f = t(224016),
    g = t(217392),
    R = t(526292),
    j = t(552736),
    _ = t(1878),
    v = t(589152),
    N = t(423814),
    M = t(77528),
    P = t(511484),
    y = t(774774),
    b = t(349563),
    O = t(976333),
    U = t(934500),
    C = t(291029),
    L = t(222719),
    D = t(682901),
    S = t(838541),
    G = t(107198),
    H = t(792996),
    k = t(145359),
    F = t(174788),
    B = t(793481),
    w = t(497451);
function V(e) {
    let {
        Icon: r,
        text: t,
        isNew: n = !1,
        className: i,
        textVariant: a,
        isApplicationHome: c,
        enablePremiumBrandRefresh: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(i, { [F.featureItem]: u, [F.featureItemApplicationHome]: u && c }),
        children: [
            (0, l.jsx)(r, { className: u ? k.hi : k.Kk, color: "currentColor" }),
            (0, l.jsx)(o.E, {
                variant: a ?? "body-md/normal",
                color: u || c ? "currentColor" : "text-overlay-light",
                children: t,
            }),
            n ? (0, l.jsx)(A.A, { className: k.OC, forceUseColorForSparkles: !0, variant: "inverted" }) : null,
        ],
    });
}
function W(e) {
    let { isApplicationHome: r, enablePremiumBrandRefresh: t, textVariant: n } = e,
        i = r && !t ? C.I4 : C.fB;
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, i) => {
            let { Icon: s, getText: a } = e;
            return (0, l.jsx)(
                V,
                {
                    Icon: s,
                    text: a(),
                    className: r && !t ? k.dT : k.HW,
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
    let { showWumpus: r, ctaButton: t, showYearlyPrice: n, className: i, isGift: c = !1, priceOptions: o } = e,
        p = (0, a.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        h = (0, M.V)(),
        A = h?.subscriptionTrial?.skuId,
        T = !!p?.hasActiveTrial,
        f = T ? x?.premiumType : null,
        R = null != A || T,
        j = (0, y.Lj)(f, A);
    return (0, l.jsxs)("div", {
        className: s()(k.Vd, k.Nr, i, { [k.vt]: !c && R, [k.lr]: !c && R }),
        children: [
            !c &&
                null != j &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: j, className: k.LW, colorOptions: y.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: k.o4 }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: k.wp,
                      children: (0, l.jsx)(u._, {
                          src: B,
                          alt: H.intl.string(H.t["02VBaY"]),
                          mediaLayoutType: S.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(d.A, { children: (0, l.jsx)(m.H, { children: H.intl.string(H.t["t9uG/o"]) }) }),
                            (0, l.jsx)(g.A, { className: s()(k.DD, k.ZD) }),
                            (0, l.jsx)(L.A, {
                                isGift: c,
                                premiumTier: D.PremiumTypes.TIER_0,
                                offerType: D.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: A === D.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: o,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(W, {}) }),
                ],
            }),
            c || A !== D.pe.TIER_0 ? null : (0, l.jsx)(b.Wy, { tier: D.PremiumTypes.TIER_0 }),
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
            firstFeatureItemClassName: u,
            textVariant: d,
        } = e,
        m = (0, a.bG)([T.default], () => T.default.locale),
        p = (0, v.b)(),
        x = !i && t && !n && p.length > 0,
        h = 3 === r || (0 === r && i && c),
        A = (function () {
            switch (r) {
                case 3:
                    return C.z9;
                case 1:
                    return C.ku;
                case 2:
                    return C.Qi;
                case 4:
                    return U.ro;
                case 5:
                    return U.xs;
                default:
                    return C.Oc;
            }
        })();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsx)(o.E, {
                    variant: "body-sm/semibold",
                    className: i ? F.tier2ApplicationHomeSubheader : k.RQ,
                    children: H.intl.string(H.t.AozD3Q),
                }),
            A.map((e, t) => {
                let { Icon: n, getText: a } = e;
                return (0, l.jsx)(
                    V,
                    {
                        Icon: n,
                        text: a(m),
                        className: s()(3 === r ? k.dT : k.HW, 0 === t ? u : void 0),
                        textVariant: d ?? (3 === r ? "body-sm/normal" : void 0),
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
            className: o,
            isGift: x = !1,
            isModal: h = !1,
            priceOptions: A,
            showPromotionalGiftBanner: T = !1,
        } = e,
        g = (0, a.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        v = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        O = (0, M.V)(),
        U = O?.subscriptionTrial?.skuId,
        C = g?.hasActiveTrial ? v?.premiumType : null,
        G = (0, R.ar)(),
        F = (0, N.O)(),
        B = (0, R.k5)(),
        V = null != U || null != C ? D.Vk.PREMIUM_TRIAL : null != F || B ? D.Vk.PREMIUM_DISCOUNT : null,
        W = !x && G,
        Y = (0, j.A)()?.planSelection,
        z = Y?.getBackgroundImageUrl?.(),
        Q = Y?.getCardImageUrl?.(),
        J = (0, c.q)((0, p.Ay)()),
        Z = J ? y.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : y.at.PREMIUM_TIER_2_WHITE_FILL,
        q = (0, y.rm)(B, C, F, O, U),
        X = W && !J ? k.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(k.Nr, k.hA, o, { [k.J5]: W, [k.lr]: W, [k.jx]: T, [k.ud]: T && null != Q }),
        children: [
            T && null !== Q && (0, l.jsx)("img", { className: k.Cr, alt: "", src: Q }),
            T && null !== z && (0, l.jsx)("img", { className: k.gx, alt: "", src: z }),
            !x &&
                null != q &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: q, className: k.LW, colorOptions: Z }),
                        (0, l.jsx)("div", { className: X }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: k.wp,
                      children: (0, l.jsx)(u._, {
                          src: w,
                          alt: H.intl.string(H.t.XP8vWR),
                          mediaLayoutType: S.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(d.A, { children: (0, l.jsx)(m.H, { children: H.intl.string(H.t.lG6a5x) }) }),
                            (0, l.jsx)(f.A, { className: s()(k.DD, k.$l) }),
                            (0, l.jsx)(L.A, {
                                isGift: x,
                                premiumTier: D.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: U === D.pe.TIER_2 || (0, P.U9)(F, D.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: A,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(K, { featureSet: i, isModal: h, isGift: x }) }),
                ],
            }),
            x || (U !== D.pe.TIER_2 && null == F) ? null : (0, l.jsx)(b.Wy, { tier: D.PremiumTypes.TIER_2 }),
            t,
            T && (0, l.jsx)(_.K, {}),
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
                        (0, l.jsx)(o.E, {
                            variant: "body-sm/semibold",
                            className: F.tier2ApplicationHomeSubheader,
                            children: H.intl.string(G.default.ItfIa5),
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
                    className: s()(k.Zo, t),
                    children: [
                        (0, l.jsx)(Y, { showWumpus: !0, ctaButton: n }),
                        (0, l.jsx)(Q, { showWumpus: !0, ctaButton: i }),
                    ],
                }),
            });
        },
    },
);
