n.d(t, { qu: () => eA, Nz: () => ej, pw: () => ev, ZP: () => eE, Lg: () => eI, nH: () => eh });
var r,
    l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(17928),
    c = n(462887),
    u = n(834730),
    d = n(144165),
    m = n(140735),
    g = n(707554),
    x = n(736653),
    T = n(793574),
    p = n(688810),
    I = n(904788),
    h = n(773669),
    f = n(287809),
    j = n(166403),
    E = n(224016),
    P = n(217392),
    v = n(526292),
    A = n(778712),
    R = n(775602),
    _ = n(951305),
    N = n(810498),
    y = n(298305),
    C = n(420754);
function M() {
    let e = (0, o.bG)([R.Ay], () => R.Ay.useReducedMotion),
        { claimableRewards: t } = (0, _.Pv)(),
        n;
    if (null == n || null == t || 0 === t.length) return null;
    let r = (0, N.gc)(n.getBannerImageUrl?.()),
        i = (0, N.K5)(n.gradientConfig, { defaultAngle: 180 });
    return (0, l.jsxs)("div", {
        className: C.us,
        style: r ?? i,
        children: [
            (0, l.jsxs)("div", {
                className: C.ZR,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-overlay-light",
                        children: n.heading(),
                    }),
                    null != n.subheading &&
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: n.subheading(t.length),
                        }),
                ],
            }),
            (0, l.jsx)("div", {
                className: C.my,
                children: (0, l.jsx)(y.A, {
                    maxRewardImageSrc: n.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: A._3.SIZE_80,
                }),
            }),
        ],
    });
}
var b = n(286320),
    L = n(724651),
    U = n(732280),
    S = n(511484),
    k = n(774774),
    O = n(349563),
    G = n(97808),
    w = n(854627),
    F = n(375708),
    D = n(896423);
function B() {
    let e = (0, b.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, w.A)({ userId: t?.id, size: A._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let s = i.useMemo(
        () =>
            e.length >= 2
                ? F.intl.formatToPlainString(F.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? F.intl.formatToPlainString(F.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, l.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, l.jsx)(G.eu, {
                      className: D.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: A._3.SIZE_24,
                      ...r,
                  }),
                  (0, l.jsx)(u.E, {
                      className: D.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: s,
                  }),
              ],
          });
}
var H = n(214947),
    V = n(403581),
    Z = n(104510),
    W = n(22231),
    J = n(95635),
    K = n(343032),
    Y = n(460905),
    z = n(183623),
    Q = n(861004),
    q = n(158045),
    $ = n(202541),
    X = n(88001),
    ee = n(259589);
let et = [
        { Icon: H.$, getText: () => F.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: X.aw }) },
        { Icon: V.t, getText: () => F.intl.string(ee.default.woz1Kg) },
        { Icon: Z._, getText: () => F.intl.string(ee.default.QnbVrt) },
        { Icon: W.PencilIcon, getText: () => F.intl.string(ee.default["409DEa"]) },
    ],
    en = [
        { Icon: H.$, getText: () => F.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: X.aw }) },
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.i, getText: () => F.intl.string(F.t["taMwg/"]) },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: z.F, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: Z._, getText: () => F.intl.formatToPlainString(ee.default.HVCRVf, { numBoosts: $.M4 }) },
        { Icon: Q.c, getText: () => F.intl.string(F.t.CNIZfy) },
    ],
    er = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.i, getText: () => F.intl.string(F.t["taMwg/"]) },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: z.F, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: Q.c, getText: () => F.intl.string(F.t.CNIZfy) },
    ];
var el = n(118751),
    ei = n(933832);
let ea = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => F.intl.string(F.t.kpMomJ) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: ei.CheckmarkLargeIcon, getText: () => F.intl.string(F.t.zTk8Ul) },
    ],
    es = [
        {
            Icon: Z._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return F.intl.formatToPlainString(F.t["T9RTr/"], {
                    numBoosts: $.M4,
                    percentageOff: (0, el.l9)(e, $.oX / 100),
                });
            },
        },
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: z.F, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: Q.c, getText: () => F.intl.string(F.t.CNIZfy) },
    ],
    eo = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: K.i, getText: () => F.intl.string(F.t["taMwg/"]) },
        { Icon: z.F, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: Q.c, getText: () => F.intl.string(F.t.CNIZfy) },
    ],
    ec = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: K.i, getText: () => F.intl.string(F.t["taMwg/"]) },
        { Icon: z.F, getText: () => F.intl.string(F.t.W180bY) },
        { Icon: Z._, getText: () => F.intl.string(F.t.cdfuUU) },
        { Icon: Q.c, getText: () => F.intl.string(F.t.CNIZfy) },
    ],
    eu = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => F.intl.string(F.t.KjrZ8Z) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => F.intl.string(F.t.Uukj4o) },
    ],
    ed = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                F.intl.formatToPlainString(F.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)($.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => F.intl.string(F.t.KjrZ8Z) },
        { Icon: K.i, getText: () => F.intl.string(F.t["taMwg/"]) },
        { Icon: V.t, getText: () => F.intl.string(F.t["8ukxAW"]) },
    ];
var em = n(222719),
    eg = n(838541),
    ex = n(145359),
    eT = n(174788);
function ep(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: i,
        textVariant: a,
        isApplicationHome: o,
        enablePremiumBrandRefresh: c,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(i, { [eT.featureItem]: c, [eT.featureItemApplicationHome]: c && o }),
        children: [
            (0, l.jsx)(t, { className: c ? ex.hi : ex.Kk, color: "currentColor" }),
            (0, l.jsx)(u.E, {
                variant: a ?? "text-md/normal",
                color: c || o ? "currentColor" : "text-overlay-light",
                children: n,
            }),
            r
                ? (0, l.jsx)(I.A, {
                      className: ex.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function eI(e) {
    let { isApplicationHome: t, textVariant: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: eT.tier2ApplicationHomeSubheader,
                    children: F.intl.string(ee.default.ItfIa5),
                }),
            et.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, l.jsx)(
                    ep,
                    { Icon: i, text: a(), textVariant: n, enablePremiumBrandRefresh: !0, isApplicationHome: t },
                    r,
                );
            }),
        ],
    });
}
function eh(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n, textVariant: r } = e,
        i = t && !n ? eu : ed;
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: s } = e;
            return (0, l.jsx)(
                ep,
                {
                    Icon: a,
                    text: s(),
                    className: t && !n ? ex.dT : ex.HW,
                    textVariant: r ?? (t && !n ? "text-sm/normal" : void 0),
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function ef(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: c } = e,
        u = (0, o.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        T = (0, U.V)(),
        p = T?.subscriptionTrial?.skuId,
        I = !!u?.hasActiveTrial,
        h = I ? x?.premiumType : null,
        E = null != p || I,
        v = (0, k.Lj)(h, p);
    return (0, l.jsxs)("div", {
        className: s()(ex.Vd, ex.Nr, i, { [ex.vt]: !a && E, [ex.lr]: !a && E }),
        children: [
            !a &&
                null != v &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.e4, { text: v, className: ex.LW, colorOptions: k.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: ex.o4 }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ex.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: F.intl.string(F.t["02VBaY"]),
                          mediaLayoutType: eg.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ex.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: F.intl.string(F.t["t9uG/o"]) }) }),
                            (0, l.jsx)(P.A, { className: s()(ex.DD, ex.ZD) }),
                            (0, l.jsx)(em.A, {
                                isGift: a,
                                premiumTier: $.PremiumTypes.TIER_0,
                                offerType: $.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: p === $.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(eh, {}) }),
                ],
            }),
            a || p !== $.pe.TIER_0 ? null : (0, l.jsx)(O.Wy, { tier: $.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var ej =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function eE(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: i = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: c,
            textVariant: d,
        } = e,
        m = (0, o.bG)([h.default], () => h.default.locale),
        g = (0, b.b)(),
        x = !i && n && !r && g.length > 0,
        T = 3 === t || (0 === t && i && a),
        p = (function () {
            switch (t) {
                case 3:
                    return ea;
                case 1:
                    return es;
                case 2:
                    return eo;
                case 4:
                    return en;
                case 5:
                    return er;
                default:
                    return ec;
            }
        })();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            T &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: i ? eT.tier2ApplicationHomeSubheader : ex.RQ,
                    children: F.intl.string(F.t.AozD3Q),
                }),
            p.map((e, n) => {
                let { Icon: r, getText: o } = e;
                return (0, l.jsx)(
                    ep,
                    {
                        Icon: r,
                        text: o(m),
                        className: s()(3 === t ? ex.dT : ex.HW, 0 === n ? c : void 0),
                        textVariant: d ?? (3 === t ? "text-sm/normal" : void 0),
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: i,
                    },
                    n,
                );
            }),
            x && (3 === t || 0 === t) && (0, l.jsx)(B, {}),
        ],
    });
}
function eP(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: i = 0,
            className: a,
            isGift: u = !1,
            isModal: T = !1,
            priceOptions: p,
            showPromotionalGiftBanner: I = !1,
        } = e,
        h = (0, o.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        P = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        A = (0, U.V)(),
        R = A?.subscriptionTrial?.skuId,
        _ = h?.hasActiveTrial ? P?.premiumType : null,
        N = (0, v.ar)(),
        y = (0, L.O)(),
        C = (0, v.k5)(),
        b = null != R || null != _ ? $.Vk.PREMIUM_TRIAL : null != y || C ? $.Vk.PREMIUM_DISCOUNT : null,
        G = !u && N,
        w,
        D = w?.getBackgroundImageUrl?.(),
        B = w?.getCardImageUrl?.(),
        H = (0, c.q)((0, x.Ay)()),
        V = H ? k.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : k.at.PREMIUM_TIER_2_WHITE_FILL,
        Z = (0, k.rm)(C, _, y, A, R),
        W = G && !H ? ex.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(ex.Nr, ex.hA, a, { [ex.J5]: G, [ex.lr]: G, [ex.jx]: I, [ex.ud]: I && null != B }),
        children: [
            I && null !== B && (0, l.jsx)("img", { className: ex.Cr, alt: "", src: B }),
            I && null !== D && (0, l.jsx)("img", { className: ex.gx, alt: "", src: D }),
            !u &&
                null != Z &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.e4, { text: Z, className: ex.LW, colorOptions: V }),
                        (0, l.jsx)("div", { className: W }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ex.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: F.intl.string(F.t.XP8vWR),
                          mediaLayoutType: eg.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ex.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: F.intl.string(F.t.lG6a5x) }) }),
                            (0, l.jsx)(E.A, { className: s()(ex.DD, ex.$l) }),
                            (0, l.jsx)(em.A, {
                                isGift: u,
                                premiumTier: $.PremiumTypes.TIER_2,
                                offerType: b,
                                offerTierMatchesCard: R === $.pe.TIER_2 || (0, S.U9)(y, $.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(eE, { featureSet: i, isModal: T, isGift: u }) }),
                ],
            }),
            u || (R !== $.pe.TIER_2 && null == y) ? null : (0, l.jsx)(O.Wy, { tier: $.PremiumTypes.TIER_2 }),
            n,
            I && (0, l.jsx)(M, {}),
        ],
    });
}
function ev(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function eA(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: i } = e,
        { analyticsLocations: a } = (0, p.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        o = ev(t);
    return (0, l.jsx)(p.f5, {
        value: a,
        children: (0, l.jsxs)("div", {
            ref: o,
            className: s()(ex.Zo, n),
            children: [
                (0, l.jsx)(ef, { showWumpus: !0, ctaButton: r }),
                (0, l.jsx)(eP, { showWumpus: !0, ctaButton: i }),
            ],
        }),
    });
}
