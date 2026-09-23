r.d(t, { Lg: () => W, Nz: () => Z, ZP: () => q, nH: () => z, pw: () => J, qu: () => $ });
var n,
    i = r(477900);
r(582128);
var l = r(503698),
    a = r.n(l),
    s = r(17928),
    o = r(462887),
    u = r(834730),
    c = r(144165),
    d = r(140735),
    m = r(707554),
    x = r(736653),
    p = r(793574),
    h = r(688810),
    f = r(904788),
    g = r(773669),
    A = r(287809),
    j = r(166403),
    E = r(224016),
    T = r(217392),
    I = r(526292),
    v = r(552736),
    R = r(1878),
    N = r(286320),
    P = r(724651),
    _ = r(732280),
    M = r(511484),
    y = r(774774),
    C = r(349563),
    S = r(976333),
    b = r(934500),
    O = r(291029),
    G = r(222719),
    L = r(202541),
    U = r(838541),
    D = r(148155),
    w = r(375708),
    k = r(145359),
    B = r(174788),
    F = r(793481),
    H = r(497451);
function V(e) {
    let {
        Icon: t,
        text: r,
        isNew: n = !1,
        className: l,
        textVariant: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(l, { [B.featureItem]: c, [B.featureItemApplicationHome]: c && o }),
        children: [
            (0, i.jsx)(t, { className: c ? k.hi : k.Kk, color: "currentColor" }),
            (0, i.jsx)(u.E, {
                variant: s ?? "text-md/normal",
                color: c || o ? "currentColor" : "text-overlay-light",
                children: r,
            }),
            n
                ? (0, i.jsx)(f.A, {
                      className: k.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function W(e) {
    let { isApplicationHome: t, textVariant: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: B.tier2ApplicationHomeSubheader,
                    children: w.intl.string(D.default.ItfIa5),
                }),
            b.PV.map((e, n) => {
                let { Icon: l, getText: a } = e;
                return (0, i.jsx)(
                    V,
                    { Icon: l, text: a(), textVariant: r, enablePremiumBrandRefresh: !0, isApplicationHome: t },
                    n,
                );
            }),
        ],
    });
}
function z(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r, textVariant: n } = e,
        l = t && !r ? O.I4 : O.fB;
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, l) => {
            let { Icon: a, getText: s } = e;
            return (0, i.jsx)(
                V,
                {
                    Icon: a,
                    text: s(),
                    className: t && !r ? k.dT : k.HW,
                    textVariant: n ?? (t && !r ? "text-sm/normal" : void 0),
                    enablePremiumBrandRefresh: r,
                    isApplicationHome: t,
                },
                l,
            );
        }),
    });
}
function Y(e) {
    let { showWumpus: t, ctaButton: r, showYearlyPrice: n, className: l, isGift: o = !1, priceOptions: u } = e,
        x = (0, s.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        p = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, _.V)(),
        f = h?.subscriptionTrial?.skuId,
        g = !!x?.hasActiveTrial,
        E = g ? p?.premiumType : null,
        I = null != f || g,
        v = (0, y.Lj)(E, f);
    return (0, i.jsxs)("div", {
        className: a()(k.Vd, k.Nr, l, { [k.vt]: !o && I, [k.lr]: !o && I }),
        children: [
            !o &&
                null != v &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(y.e4, { text: v, className: k.LW, colorOptions: y.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: k.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: k.wp,
                      children: (0, i.jsx)(c._, {
                          src: F,
                          alt: w.intl.string(w.t["02VBaY"]),
                          mediaLayoutType: U.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(m.H, { children: w.intl.string(w.t["t9uG/o"]) }) }),
                            (0, i.jsx)(T.A, { className: a()(k.DD, k.ZD) }),
                            (0, i.jsx)(G.A, {
                                isGift: o,
                                premiumTier: L.PremiumTypes.TIER_0,
                                offerType: L.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === L.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: u,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(z, {}) }),
                ],
            }),
            o || f !== L.pe.TIER_0 ? null : (0, i.jsx)(C.Wy, { tier: L.PremiumTypes.TIER_0 }),
            r,
        ],
    });
}
var Z =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);
function q(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: c,
            textVariant: d,
        } = e,
        m = (0, s.bG)([g.default], () => g.default.locale),
        x = (0, N.b)(),
        p = !l && r && !n && x.length > 0,
        h = 3 === t || (0 === t && l && o),
        f = (function () {
            switch (t) {
                case 3:
                    return O.z9;
                case 1:
                    return O.ku;
                case 2:
                    return O.Qi;
                case 4:
                    return b.ro;
                case 5:
                    return b.xs;
                default:
                    return O.Oc;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: l ? B.tier2ApplicationHomeSubheader : k.RQ,
                    children: w.intl.string(w.t.AozD3Q),
                }),
            f.map((e, r) => {
                let { Icon: n, getText: s } = e;
                return (0, i.jsx)(
                    V,
                    {
                        Icon: n,
                        text: s(m),
                        className: a()(3 === t ? k.dT : k.HW, 0 === r ? c : void 0),
                        textVariant: d ?? (3 === t ? "text-sm/normal" : void 0),
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: l,
                    },
                    r,
                );
            }),
            p && (3 === t || 0 === t) && (0, i.jsx)(S.A, {}),
        ],
    });
}
function K(e) {
    let {
            showWumpus: t,
            ctaButton: r,
            showYearlyPrice: n,
            featureSet: l = 0,
            className: u,
            isGift: p = !1,
            isModal: h = !1,
            priceOptions: f,
            showPromotionalGiftBanner: g = !1,
        } = e,
        T = (0, s.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        N = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        S = (0, _.V)(),
        b = S?.subscriptionTrial?.skuId,
        O = T?.hasActiveTrial ? N?.premiumType : null,
        D = (0, I.ar)(),
        B = (0, P.O)(),
        F = (0, I.k5)(),
        V = null != b || null != O ? L.Vk.PREMIUM_TRIAL : null != B || F ? L.Vk.PREMIUM_DISCOUNT : null,
        W = !p && D,
        z = (0, v.A)()?.planSelection,
        Y = z?.getBackgroundImageUrl?.(),
        Z = z?.getCardImageUrl?.(),
        K = (0, o.q)((0, x.Ay)()),
        J = K ? y.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : y.at.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, y.rm)(F, O, B, S, b),
        X = W && !K ? k.on : void 0;
    return (0, i.jsxs)("div", {
        className: a()(k.Nr, k.hA, u, { [k.J5]: W, [k.lr]: W, [k.jx]: g, [k.ud]: g && null != Z }),
        children: [
            g && null !== Z && (0, i.jsx)("img", { className: k.Cr, alt: "", src: Z }),
            g && null !== Y && (0, i.jsx)("img", { className: k.gx, alt: "", src: Y }),
            !p &&
                null != $ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(y.e4, { text: $, className: k.LW, colorOptions: J }),
                        (0, i.jsx)("div", { className: X }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: k.wp,
                      children: (0, i.jsx)(c._, {
                          src: H,
                          alt: w.intl.string(w.t.XP8vWR),
                          mediaLayoutType: U.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(m.H, { children: w.intl.string(w.t.lG6a5x) }) }),
                            (0, i.jsx)(E.A, { className: a()(k.DD, k.$l) }),
                            (0, i.jsx)(G.A, {
                                isGift: p,
                                premiumTier: L.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: b === L.pe.TIER_2 || (0, M.U9)(B, L.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: f,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(q, { featureSet: l, isModal: h, isGift: p }) }),
                ],
            }),
            p || (b !== L.pe.TIER_2 && null == B) ? null : (0, i.jsx)(C.Wy, { tier: L.PremiumTypes.TIER_2 }),
            r,
            g && (0, i.jsx)(R.K, {}),
        ],
    });
}
function J(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function $(e) {
    let { innerRef: t, className: r, tier0CTAButton: n, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, h.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD),
        o = J(t);
    return (0, i.jsx)(h.f5, {
        value: s,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: a()(k.Zo, r),
            children: [
                (0, i.jsx)(Y, { showWumpus: !0, ctaButton: n }),
                (0, i.jsx)(K, { showWumpus: !0, ctaButton: l }),
            ],
        }),
    });
}
