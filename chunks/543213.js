t.d(r, { Lg: () => W, Nz: () => K, ZP: () => J, nH: () => Y, pw: () => q, qu: () => Z });
var n,
    l = t(477900);
t(582128);
var i = t(503698),
    a = t.n(i),
    s = t(17928),
    c = t(462887),
    u = t(834730),
    o = t(144165),
    d = t(140735),
    m = t(707554),
    p = t(736653),
    x = t(793574),
    h = t(688810),
    A = t(904788),
    T = t(773669),
    I = t(287809),
    E = t(166403),
    f = t(224016),
    g = t(217392),
    R = t(526292),
    _ = t(552736),
    j = t(1878),
    v = t(286320),
    N = t(724651),
    M = t(732280),
    P = t(511484),
    y = t(774774),
    O = t(349563),
    C = t(976333),
    U = t(934500),
    L = t(291029),
    b = t(222719),
    D = t(202541),
    S = t(838541),
    G = t(222065),
    H = t(105292),
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
        textVariant: s,
        isApplicationHome: c,
        enablePremiumBrandRefresh: o,
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(i, { [F.featureItem]: o, [F.featureItemApplicationHome]: o && c }),
        children: [
            (0, l.jsx)(r, { className: o ? k.hi : k.Kk, color: "currentColor" }),
            (0, l.jsx)(u.E, {
                variant: s ?? "text-md/normal",
                color: o || c ? "currentColor" : "text-overlay-light",
                children: t,
            }),
            n ? (0, l.jsx)(A.A, { className: k.OC, forceUseColorForSparkles: !0, variant: "inverted" }) : null,
        ],
    });
}
function W(e) {
    let { isApplicationHome: r, textVariant: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            r &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: F.tier2ApplicationHomeSubheader,
                    children: H.intl.string(G.default.ItfIa5),
                }),
            U.PV.map((e, n) => {
                let { Icon: i, getText: a } = e;
                return (0, l.jsx)(
                    V,
                    { Icon: i, text: a(), textVariant: t, enablePremiumBrandRefresh: !0, isApplicationHome: r },
                    n,
                );
            }),
        ],
    });
}
function Y(e) {
    let { isApplicationHome: r, enablePremiumBrandRefresh: t, textVariant: n } = e,
        i = r && !t ? L.I4 : L.fB;
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: s } = e;
            return (0, l.jsx)(
                V,
                {
                    Icon: a,
                    text: s(),
                    className: r && !t ? k.dT : k.HW,
                    textVariant: n ?? (r && !t ? "text-sm/normal" : void 0),
                    enablePremiumBrandRefresh: t,
                    isApplicationHome: r,
                },
                i,
            );
        }),
    });
}
function z(e) {
    let { showWumpus: r, ctaButton: t, showYearlyPrice: n, className: i, isGift: c = !1, priceOptions: u } = e,
        p = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        h = (0, M.V)(),
        A = h?.subscriptionTrial?.skuId,
        T = !!p?.hasActiveTrial,
        f = T ? x?.premiumType : null,
        R = null != A || T,
        _ = (0, y.Lj)(f, A);
    return (0, l.jsxs)("div", {
        className: a()(k.Vd, k.Nr, i, { [k.vt]: !c && R, [k.lr]: !c && R }),
        children: [
            !c &&
                null != _ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: _, className: k.LW, colorOptions: y.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: k.o4 }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: k.wp,
                      children: (0, l.jsx)(o._, {
                          src: B,
                          alt: H.intl.string(H.t["02VBaY"]),
                          mediaLayoutType: S.dG.RESPONSIVE,
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
                            (0, l.jsx)(g.A, { className: a()(k.DD, k.ZD) }),
                            (0, l.jsx)(b.A, {
                                isGift: c,
                                premiumTier: D.PremiumTypes.TIER_0,
                                offerType: D.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: A === D.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: u,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(Y, {}) }),
                ],
            }),
            c || A !== D.pe.TIER_0 ? null : (0, l.jsx)(O.Wy, { tier: D.PremiumTypes.TIER_0 }),
            t,
        ],
    });
}
var K =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);
function J(e) {
    let {
            featureSet: r = 0,
            isModal: t = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: i = !1,
            isApplicationHome: c = !1,
            firstFeatureItemClassName: o,
            textVariant: d,
        } = e,
        m = (0, s.bG)([T.default], () => T.default.locale),
        p = (0, v.b)(),
        x = !i && t && !n && p.length > 0,
        h = 3 === r || (0 === r && i && c),
        A = (function () {
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
                    variant: "text-sm/bold",
                    className: i ? F.tier2ApplicationHomeSubheader : k.RQ,
                    children: H.intl.string(H.t.AozD3Q),
                }),
            A.map((e, t) => {
                let { Icon: n, getText: s } = e;
                return (0, l.jsx)(
                    V,
                    {
                        Icon: n,
                        text: s(m),
                        className: a()(3 === r ? k.dT : k.HW, 0 === t ? o : void 0),
                        textVariant: d ?? (3 === r ? "text-sm/normal" : void 0),
                        isApplicationHome: c,
                        enablePremiumBrandRefresh: i,
                    },
                    t,
                );
            }),
            x && (3 === r || 0 === r) && (0, l.jsx)(C.A, {}),
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
            priceOptions: A,
            showPromotionalGiftBanner: T = !1,
        } = e,
        g = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        v = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        C = (0, M.V)(),
        U = C?.subscriptionTrial?.skuId,
        L = g?.hasActiveTrial ? v?.premiumType : null,
        G = (0, R.ar)(),
        F = (0, N.O)(),
        B = (0, R.k5)(),
        V = null != U || null != L ? D.Vk.PREMIUM_TRIAL : null != F || B ? D.Vk.PREMIUM_DISCOUNT : null,
        W = !x && G,
        Y = (0, _.A)()?.planSelection,
        z = Y?.getBackgroundImageUrl?.(),
        K = Y?.getCardImageUrl?.(),
        Q = (0, c.q)((0, p.Ay)()),
        q = Q ? y.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : y.at.PREMIUM_TIER_2_WHITE_FILL,
        Z = (0, y.rm)(B, L, F, C, U),
        $ = W && !Q ? k.on : void 0;
    return (0, l.jsxs)("div", {
        className: a()(k.Nr, k.hA, u, { [k.J5]: W, [k.lr]: W, [k.jx]: T, [k.ud]: T && null != K }),
        children: [
            T && null !== K && (0, l.jsx)("img", { className: k.Cr, alt: "", src: K }),
            T && null !== z && (0, l.jsx)("img", { className: k.gx, alt: "", src: z }),
            !x &&
                null != Z &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.e4, { text: Z, className: k.LW, colorOptions: q }),
                        (0, l.jsx)("div", { className: $ }),
                    ],
                }),
            r
                ? (0, l.jsx)("div", {
                      className: k.wp,
                      children: (0, l.jsx)(o._, {
                          src: w,
                          alt: H.intl.string(H.t.XP8vWR),
                          mediaLayoutType: S.dG.RESPONSIVE,
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
                            (0, l.jsx)(f.A, { className: a()(k.DD, k.$l) }),
                            (0, l.jsx)(b.A, {
                                isGift: x,
                                premiumTier: D.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: U === D.pe.TIER_2 || (0, P.U9)(F, D.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: A,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(J, { featureSet: i, isModal: h, isGift: x }) }),
                ],
            }),
            x || (U !== D.pe.TIER_2 && null == F) ? null : (0, l.jsx)(O.Wy, { tier: D.PremiumTypes.TIER_2 }),
            t,
            T && (0, l.jsx)(j.K, {}),
        ],
    });
}
function q(e) {
    return (r) => {
        null != e && ("function" == typeof e ? e(r) : e.hasOwnProperty("current") && (e.current = r));
    };
}
function Z(e) {
    let { innerRef: r, className: t, tier0CTAButton: n, tier2CTAButton: i } = e,
        { analyticsLocations: s } = (0, h.Ay)(x.A.PREMIUM_MARKETING_TIER_CARD),
        c = q(r);
    return (0, l.jsx)(h.f5, {
        value: s,
        children: (0, l.jsxs)("div", {
            ref: c,
            className: a()(k.Zo, t),
            children: [
                (0, l.jsx)(z, { showWumpus: !0, ctaButton: n }),
                (0, l.jsx)(Q, { showWumpus: !0, ctaButton: i }),
            ],
        }),
    });
}
