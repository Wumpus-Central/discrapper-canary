t.d(r, { Lg: () => W, Nz: () => K, ZP: () => q, nH: () => Y, pw: () => Z, qu: () => $ });
var n,
    i = t(477900);
t(582128);
var l = t(503698),
    a = t.n(l),
    s = t(17928),
    o = t(462887),
    c = t(834730),
    d = t(144165),
    u = t(140735),
    m = t(707554),
    x = t(736653),
    p = t(793574),
    h = t(688810),
    g = t(904788),
    f = t(773669),
    j = t(287809),
    T = t(166403),
    E = t(224016),
    I = t(217392),
    A = t(526292),
    v = t(552736),
    N = t(1878),
    R = t(286320),
    _ = t(724651),
    P = t(732280),
    M = t(511484),
    C = t(774774),
    y = t(349563),
    b = t(976333),
    O = t(934500),
    S = t(291029),
    U = t(222719),
    D = t(202541),
    G = t(838541),
    k = t(148155),
    L = t(375708),
    B = t(145359),
    H = t(174788),
    w = t(793481),
    F = t(497451);
function V(e) {
    let {
        Icon: r,
        text: t,
        isNew: n = !1,
        className: l,
        textVariant: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(l, { [H.featureItem]: d, [H.featureItemApplicationHome]: d && o }),
        children: [
            (0, i.jsx)(r, { className: d ? B.hi : B.Kk, color: "currentColor" }),
            (0, i.jsx)(c.E, {
                variant: s ?? "text-md/normal",
                color: d || o ? "currentColor" : "text-overlay-light",
                children: t,
            }),
            n
                ? (0, i.jsx)(g.A, {
                      className: B.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function W(e) {
    let { isApplicationHome: r, textVariant: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r &&
                (0, i.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: H.tier2ApplicationHomeSubheader,
                    children: L.intl.string(k.default.ItfIa5),
                }),
            O.PV.map((e, n) => {
                let { Icon: l, getText: a } = e;
                return (0, i.jsx)(
                    V,
                    { Icon: l, text: a(), textVariant: t, enablePremiumBrandRefresh: !0, isApplicationHome: r },
                    n,
                );
            }),
        ],
    });
}
function Y(e) {
    let { isApplicationHome: r, enablePremiumBrandRefresh: t, textVariant: n } = e,
        l = r && !t ? S.I4 : S.fB;
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, l) => {
            let { Icon: a, getText: s } = e;
            return (0, i.jsx)(
                V,
                {
                    Icon: a,
                    text: s(),
                    className: r && !t ? B.dT : B.HW,
                    textVariant: n ?? (r && !t ? "text-sm/normal" : void 0),
                    enablePremiumBrandRefresh: t,
                    isApplicationHome: r,
                },
                l,
            );
        }),
    });
}
function z(e) {
    let { showWumpus: r, ctaButton: t, showYearlyPrice: n, className: l, isGift: o = !1, priceOptions: c } = e,
        x = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        p = (0, s.bG)([j.default], () => j.default.getCurrentUser()),
        h = (0, P.V)(),
        g = h?.subscriptionTrial?.skuId,
        f = !!x?.hasActiveTrial,
        E = f ? p?.premiumType : null,
        A = null != g || f,
        v = (0, C.Lj)(E, g);
    return (0, i.jsxs)("div", {
        className: a()(B.Vd, B.Nr, l, { [B.vt]: !o && A, [B.lr]: !o && A }),
        children: [
            !o &&
                null != v &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C.e4, { text: v, className: B.LW, colorOptions: C.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: B.o4 }),
                    ],
                }),
            r
                ? (0, i.jsx)("div", {
                      className: B.wp,
                      children: (0, i.jsx)(d._, {
                          src: w,
                          alt: L.intl.string(L.t["02VBaY"]),
                          mediaLayoutType: G.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: B.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(u.A, { children: (0, i.jsx)(m.H, { children: L.intl.string(L.t["t9uG/o"]) }) }),
                            (0, i.jsx)(I.A, { className: a()(B.DD, B.ZD) }),
                            (0, i.jsx)(U.A, {
                                isGift: o,
                                premiumTier: D.PremiumTypes.TIER_0,
                                offerType: D.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: g === D.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(Y, {}) }),
                ],
            }),
            o || g !== D.pe.TIER_0 ? null : (0, i.jsx)(y.Wy, { tier: D.PremiumTypes.TIER_0 }),
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
function q(e) {
    let {
            featureSet: r = 0,
            isModal: t = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: d,
            textVariant: u,
        } = e,
        m = (0, s.bG)([f.default], () => f.default.locale),
        x = (0, R.b)(),
        p = !l && t && !n && x.length > 0,
        h = 3 === r || (0 === r && l && o),
        g = (function () {
            switch (r) {
                case 3:
                    return S.z9;
                case 1:
                    return S.ku;
                case 2:
                    return S.Qi;
                case 4:
                    return O.ro;
                case 5:
                    return O.xs;
                default:
                    return S.Oc;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h &&
                (0, i.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: l ? H.tier2ApplicationHomeSubheader : B.RQ,
                    children: L.intl.string(L.t.AozD3Q),
                }),
            g.map((e, t) => {
                let { Icon: n, getText: s } = e;
                return (0, i.jsx)(
                    V,
                    {
                        Icon: n,
                        text: s(m),
                        className: a()(3 === r ? B.dT : B.HW, 0 === t ? d : void 0),
                        textVariant: u ?? (3 === r ? "text-sm/normal" : void 0),
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: l,
                    },
                    t,
                );
            }),
            p && (3 === r || 0 === r) && (0, i.jsx)(b.A, {}),
        ],
    });
}
function J(e) {
    let {
            showWumpus: r,
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: l = 0,
            className: c,
            isGift: p = !1,
            isModal: h = !1,
            priceOptions: g,
            showPromotionalGiftBanner: f = !1,
        } = e,
        I = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        R = (0, s.bG)([j.default], () => j.default.getCurrentUser()),
        b = (0, P.V)(),
        O = b?.subscriptionTrial?.skuId,
        S = I?.hasActiveTrial ? R?.premiumType : null,
        k = (0, A.ar)(),
        H = (0, _.O)(),
        w = (0, A.k5)(),
        V = null != O || null != S ? D.Vk.PREMIUM_TRIAL : null != H || w ? D.Vk.PREMIUM_DISCOUNT : null,
        W = !p && k,
        Y = (0, v.A)()?.planSelection,
        z = Y?.getBackgroundImageUrl?.(),
        K = Y?.getCardImageUrl?.(),
        J = (0, o.q)((0, x.Ay)()),
        Z = J ? C.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : C.at.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, C.rm)(w, S, H, b, O),
        Q = W && !J ? B.on : void 0;
    return (0, i.jsxs)("div", {
        className: a()(B.Nr, B.hA, c, { [B.J5]: W, [B.lr]: W, [B.jx]: f, [B.ud]: f && null != K }),
        children: [
            f && null !== K && (0, i.jsx)("img", { className: B.Cr, alt: "", src: K }),
            f && null !== z && (0, i.jsx)("img", { className: B.gx, alt: "", src: z }),
            !p &&
                null != $ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C.e4, { text: $, className: B.LW, colorOptions: Z }),
                        (0, i.jsx)("div", { className: Q }),
                    ],
                }),
            r
                ? (0, i.jsx)("div", {
                      className: B.wp,
                      children: (0, i.jsx)(d._, {
                          src: F,
                          alt: L.intl.string(L.t.XP8vWR),
                          mediaLayoutType: G.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: B.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(u.A, { children: (0, i.jsx)(m.H, { children: L.intl.string(L.t.lG6a5x) }) }),
                            (0, i.jsx)(E.A, { className: a()(B.DD, B.$l) }),
                            (0, i.jsx)(U.A, {
                                isGift: p,
                                premiumTier: D.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: O === D.pe.TIER_2 || (0, M.U9)(H, D.pe.TIER_2),
                                showYearlyPrice: n,
                                priceOptions: g,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(q, { featureSet: l, isModal: h, isGift: p }) }),
                ],
            }),
            p || (O !== D.pe.TIER_2 && null == H) ? null : (0, i.jsx)(y.Wy, { tier: D.PremiumTypes.TIER_2 }),
            t,
            f && (0, i.jsx)(N.K, {}),
        ],
    });
}
function Z(e) {
    return (r) => {
        null != e && ("function" == typeof e ? e(r) : e.hasOwnProperty("current") && (e.current = r));
    };
}
function $(e) {
    let { innerRef: r, className: t, tier0CTAButton: n, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, h.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD),
        o = Z(r);
    return (0, i.jsx)(h.f5, {
        value: s,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: a()(B.Zo, t),
            children: [
                (0, i.jsx)(z, { showWumpus: !0, ctaButton: n }),
                (0, i.jsx)(J, { showWumpus: !0, ctaButton: l }),
            ],
        }),
    });
}
