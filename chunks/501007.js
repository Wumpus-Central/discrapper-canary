r.d(t, {
    Lg: () => z,
    NB: () => er,
    Nz: () => q,
    ZP: () => Q,
    jP: () => et,
    nH: () => K,
    pw: () => ee,
});
var n,
    i = r(627968);
r(64700);
var l = r(503698),
    a = r.n(l),
    s = r(311907),
    o = r(582754),
    c = r(397927),
    u = r(736653),
    d = r(793574),
    m = r(688810),
    p = r(953143),
    g = r(773669),
    x = r(287809),
    C = r(166403),
    f = r(224016),
    T = r(217392),
    h = r(60490),
    v = r(560138),
    j = r(40185),
    I = r(526292),
    y = r(552736),
    b = r(1878),
    P = r(422936),
    A = r(234419),
    _ = r(396375),
    R = r(511484),
    O = r(231265),
    N = r(795269),
    E = r(349563),
    M = r(90526),
    w = r(300542),
    L = r(4382),
    S = r(284951),
    H = r(788868),
    U = r(838541),
    D = r(519412),
    G = r(985018),
    k = r(855135),
    V = r(639179),
    B = r(122402),
    Z = r(793481),
    F = r(497451);

function J(e) {
    let {
        Icon: t,
        text: r,
        isNew: n = !1,
        className: l,
        textVariant: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(l, {
            [k.featureItem]: u,
            [k.featureItemApplicationHome]: u && o,
        }),
        children: [
            (0, i.jsx)(t, {
                className: u ? V.hi : V.Kk,
                color: "currentColor",
            }),
            (0, i.jsx)(c.Text, {
                variant: null != s ? s : "text-md/normal",
                color: u || o ? "currentColor" : "always-white",
                children: r,
            }),
            n
                ? (0, i.jsx)(p.A, {
                      className: V.OC,
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: k.tier2ApplicationHomeSubheader,
                    children: G.intl.string(D.default.ItfIa5),
                }),
            L.PV.map((e, r) => {
                let { Icon: n, getText: l } = e;
                return (0, i.jsx)(
                    J,
                    {
                        Icon: n,
                        text: l(),
                        enablePremiumBrandRefresh: !0,
                        isApplicationHome: t,
                    },
                    r,
                );
            }),
        ],
    });
}

function K(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        n = t && !r ? S.I4 : S.fB;
    return (0, i.jsx)(i.Fragment, {
        children: n.map((e, n) => {
            let { Icon: l, getText: a } = e;
            return (0, i.jsx)(
                J,
                {
                    Icon: l,
                    text: a(),
                    className: t && !r ? V.dT : V.HW,
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
    var t;
    let { ctaButton: r, showYearlyPrice: n, className: l, isGift: o = !1, priceOptions: c } = e,
        u = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        d = (0, A.V)(),
        m = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        p = !!(null == u ? void 0 : u.hasActiveTrial),
        g = null != m || p;
    return (0, i.jsxs)("div", {
        className: a()(V.Vd, V.Nr, V.g1, l, {
            [V.vt]: !o && g,
            [V.lr]: !o && g,
        }),
        children: [
            (0, i.jsx)("img", {
                src: B,
                className: V.ci,
                alt: "",
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(h.A, {
                                className: a()(V.DD, V.o6),
                            }),
                            (0, i.jsx)(M.A, {
                                isGift: o,
                                premiumTier: H.PremiumTypes.TIER_0,
                                offerType: H.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === H.pe.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: c,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(K, {
                            isApplicationHome: !0,
                        }),
                    }),
                ],
            }),
            r,
        ],
    });
}

function Y(e) {
    var t;
    let { showWumpus: r, ctaButton: n, showYearlyPrice: l, className: o, isGift: u = !1, priceOptions: d } = e,
        m = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        g = (0, A.V)(),
        f = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        h = !!(null == m ? void 0 : m.hasActiveTrial),
        v = h ? (null == p ? void 0 : p.premiumType) : null,
        j = null != f || h,
        I = (0, N.Lj)(v, f);
    return (0, i.jsxs)("div", {
        className: a()(V.Vd, V.Nr, o, {
            [V.vt]: !u && j,
            [V.lr]: !u && j,
        }),
        children: [
            !u &&
                null != I &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(N.ir, {
                            text: I,
                            className: V.LW,
                            colorOptions: N.at.PREMIUM_TIER_0_WHITE_FILL,
                        }),
                        (0, i.jsx)("div", {
                            className: V.o4,
                        }),
                    ],
                }),
            r
                ? (0, i.jsx)("div", {
                      className: V.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: Z,
                          mediaLayoutType: U.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: V.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(T.A, {
                                className: a()(V.DD, V.ZD),
                            }),
                            (0, i.jsx)(M.A, {
                                isGift: u,
                                premiumTier: H.PremiumTypes.TIER_0,
                                offerType: H.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === H.pe.TIER_0,
                                showYearlyPrice: l,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(K, {}),
                    }),
                ],
            }),
            u || f !== H.pe.TIER_0
                ? null
                : (0, i.jsx)(E.Wy, {
                      tier: H.PremiumTypes.TIER_0,
                  }),
            n,
        ],
    });
}
var q =
    (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
    (n[(n.BOOSTING = 1)] = "BOOSTING"),
    (n[(n.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (n[(n.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (n[(n.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (n[(n.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    n);

function Q(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: n = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: o = !1,
            firstFeatureItemClassName: u,
        } = e,
        d = (0, s.bG)([g.default], () => g.default.locale),
        m = (0, s.bG)([v.A], () => v.A.affinities),
        p = !l && r && !n && m.length > 0,
        x = 3 === t || (0 === t && l && o),
        C = (() => {
            switch (t) {
                case 3:
                    return S.z9;
                case 1:
                    return S.ku;
                case 2:
                    return S.Qi;
                case 4:
                    return L.ro;
                case 5:
                    return L.xs;
                default:
                    return S.Oc;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/bold",
                    className: l ? k.tier2ApplicationHomeSubheader : V.RQ,
                    children: G.intl.string(G.t.AozD3Q),
                }),
            C.map((e, r) => {
                let { Icon: n, getText: s } = e;
                return (0, i.jsx)(
                    J,
                    {
                        Icon: n,
                        text: s(d),
                        className: a()(3 === t ? V.dT : V.HW, 0 === r ? u : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: o,
                        enablePremiumBrandRefresh: l,
                    },
                    r,
                );
            }),
            p && (3 === t || 0 === t) && (0, i.jsx)(w.A, {}),
        ],
    });
}

function $(e) {
    var t, r, n, l;
    let {
            ctaButton: s,
            showYearlyPrice: o,
            featureSet: u = 0,
            className: d,
            isGift: m = !1,
            isModal: p = !1,
            priceOptions: g,
            showPromotionalGiftBanner: x = !1,
        } = e,
        C = (0, A.V)(),
        T = null == C || null == (t = C.subscription_trial) ? void 0 : t.sku_id,
        h = (0, I.ar)(),
        v = (0, P.O)(),
        _ = null != C ? H.Vk.PREMIUM_TRIAL : null != v ? H.Vk.PREMIUM_DISCOUNT : null,
        N = (0, j.cg)(),
        E = !m && h,
        w = null == (r = (0, y.A)()) ? void 0 : r.planSelection,
        L = null == w || null == (n = w.getBackgroundImageUrl) ? void 0 : n.call(w),
        S = null == w || null == (l = w.getCardImageUrl) ? void 0 : l.call(w),
        U = (0, O._)();
    return (0, i.jsxs)("div", {
        className: a()(V.Nr, V.hA, V.aD, d, {
            [V.J5]: E,
            [V.lr]: E,
            [V.jx]: x,
            [V.ud]: x && null != S,
        }),
        children: [
            x &&
                null != S &&
                (0, i.jsx)("img", {
                    className: V.Cr,
                    alt: "",
                    src: S,
                }),
            x &&
                null != L &&
                (0, i.jsx)("img", {
                    className: V.gx,
                    alt: "",
                    src: L,
                }),
            (0, i.jsx)("div", {
                className: V.S9,
            }),
            (0, i.jsx)("img", {
                src: B,
                className: V.ci,
                alt: "",
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(f.A, {
                                className: a()(V.DD, V.cB),
                            }),
                            !m &&
                                T !== H.pe.TIER_2 &&
                                N &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: V.zu,
                                        children: U,
                                    }),
                                }),
                            (0, i.jsx)(M.A, {
                                isGift: m,
                                premiumTier: H.PremiumTypes.TIER_2,
                                offerType: _,
                                offerTierMatchesCard: T === H.pe.TIER_2 || (0, R.U9)(v, H.pe.TIER_2),
                                showYearlyPrice: o,
                                priceOptions: g,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(Q, {
                            featureSet: u,
                            isModal: p,
                            isGift: m,
                            isApplicationHome: !0,
                        }),
                    }),
                ],
            }),
            s,
            x && (0, i.jsx)(b.K, {}),
        ],
    });
}

function X(e) {
    var t, r, n, l;
    let {
            showWumpus: d,
            ctaButton: m,
            showYearlyPrice: p,
            featureSet: g = 0,
            className: T,
            isGift: h = !1,
            isModal: v = !1,
            priceOptions: _,
            showPromotionalGiftBanner: w = !1,
        } = e,
        L = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        S = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        D = (0, A.V)(),
        G = null == D || null == (t = D.subscription_trial) ? void 0 : t.sku_id,
        k = (null == L ? void 0 : L.hasActiveTrial) ? (null == S ? void 0 : S.premiumType) : null,
        B = (0, I.ar)(),
        Z = (0, P.O)(),
        J = (0, I.k5)(),
        z = null != G || null != k ? H.Vk.PREMIUM_TRIAL : null != Z || J ? H.Vk.PREMIUM_DISCOUNT : null,
        K = (0, j.cg)(),
        W = !h && B,
        Y = null == (r = (0, y.A)()) ? void 0 : r.planSelection,
        q = null == Y || null == (n = Y.getBackgroundImageUrl) ? void 0 : n.call(Y),
        $ = null == Y || null == (l = Y.getCardImageUrl) ? void 0 : l.call(Y),
        X = (0, O._)(),
        ee = (0, o.qB)((0, u.Ay)()),
        et = ee ? N.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : N.at.PREMIUM_TIER_2_WHITE_FILL,
        er = (0, N.rm)(J, k, Z, D, G),
        en = W && !ee ? V.on : void 0;
    return (0, i.jsxs)("div", {
        className: a()(V.Nr, V.hA, T, {
            [V.J5]: W,
            [V.lr]: W,
            [V.jx]: w,
            [V.ud]: w && null != $,
        }),
        children: [
            w &&
                null !== $ &&
                (0, i.jsx)("img", {
                    className: V.Cr,
                    alt: "",
                    src: $,
                }),
            w &&
                null !== q &&
                (0, i.jsx)("img", {
                    className: V.gx,
                    alt: "",
                    src: q,
                }),
            !h &&
                null != er &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(N.ir, {
                            text: er,
                            className: V.LW,
                            colorOptions: et,
                        }),
                        (0, i.jsx)("div", {
                            className: en,
                        }),
                    ],
                }),
            d
                ? (0, i.jsx)("div", {
                      className: V.wp,
                      children: (0, i.jsx)(c._V3, {
                          src: F,
                          mediaLayoutType: U.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: V.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(f.A, {
                                className: a()(V.DD, V.$l),
                            }),
                            !h &&
                                G !== H.pe.TIER_2 &&
                                K &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-xs/bold",
                                        className: V.zu,
                                        children: X,
                                    }),
                                }),
                            (0, i.jsx)(M.A, {
                                isGift: h,
                                premiumTier: H.PremiumTypes.TIER_2,
                                offerType: z,
                                offerTierMatchesCard: G === H.pe.TIER_2 || (0, R.U9)(Z, H.pe.TIER_2),
                                showYearlyPrice: p,
                                priceOptions: _,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(Q, {
                            featureSet: g,
                            isModal: v,
                            isGift: h,
                        }),
                    }),
                ],
            }),
            h || (G !== H.pe.TIER_2 && null == Z)
                ? null
                : (0, i.jsx)(E.Wy, {
                      tier: H.PremiumTypes.TIER_2,
                  }),
            m,
            w && (0, i.jsx)(b.K, {}),
        ],
    });
}
let ee = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};

function et(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: r, className: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(d.A.PREMIUM_MARKETING_TIER_CARD),
        s = ee(t),
        o = (0, i.jsx)(_.A, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: H.pe.TIER_0,
            className: V.Ph,
            textOptions: {
                textClassName: V.uz,
            },
            buttonShineClassName: V.Qr,
        }),
        u = (0, i.jsx)(_.A, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: H.pe.TIER_2,
            className: V.Ph,
            hasActivePromotion: r,
            textOptions: {
                textClassName: V.uz,
            },
            buttonShineClassName: V.Qr,
        });
    return (0, i.jsxs)(m.f5, {
        value: l,
        children: [
            (0, i.jsx)(c.Heading, {
                ref: s,
                className: V.CV,
                variant: "display-md",
                color: "text-strong",
                children: G.intl.string(G.t.vLz3Zs),
            }),
            (0, i.jsxs)("div", {
                ref: s,
                className: a()(V.Zo, n),
                children: [
                    (0, i.jsx)(W, {
                        ctaButton: o,
                    }),
                    (0, i.jsx)($, {
                        ctaButton: u,
                        featureSet: 3,
                    }),
                ],
            }),
        ],
    });
}

function er(e) {
    let { innerRef: t, className: r, tier0CTAButton: n, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, m.Ay)(d.A.PREMIUM_MARKETING_TIER_CARD),
        o = ee(t);
    return (0, i.jsx)(m.f5, {
        value: s,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: a()(V.Zo, r),
            children: [
                (0, i.jsx)(Y, {
                    showWumpus: !0,
                    ctaButton: n,
                }),
                (0, i.jsx)(X, {
                    showWumpus: !0,
                    ctaButton: l,
                }),
            ],
        }),
    });
}
