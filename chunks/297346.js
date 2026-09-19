n.d(t, { qu: () => eR, Nz: () => eE, pw: () => ev, ZP: () => eP, Lg: () => ef, nH: () => eh });
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
    I = n(688810),
    f = n(904788),
    h = n(773669),
    p = n(287809),
    E = n(166403),
    P = n(224016),
    j = n(217392),
    v = n(526292),
    R = n(778712),
    A = n(775602),
    _ = n(951305),
    M = n(380619),
    N = n(298305),
    S = n(420754);
function y() {
    let e = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        { claimableRewards: t } = (0, _.Pv)(),
        n;
    if (null == n || null == t || 0 === t.length) return null;
    let r = (0, M.gc)(n.getBannerImageUrl?.()),
        i = (0, M.K5)(n.gradientConfig, { defaultAngle: 180 });
    return (0, l.jsxs)("div", {
        className: S.us,
        style: r ?? i,
        children: [
            (0, l.jsxs)("div", {
                className: S.ZR,
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
                className: S.my,
                children: (0, l.jsx)(N.A, {
                    maxRewardImageSrc: n.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: R._3.SIZE_80,
                }),
            }),
        ],
    });
}
var C = n(286320),
    L = n(724651),
    U = n(732280),
    b = n(511484),
    G = n(774774),
    k = n(349563),
    O = n(97808),
    w = n(854627),
    D = n(375708),
    F = n(896423);
function H() {
    let e = (0, C.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, w.A)({ userId: t?.id, size: R._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let s = i.useMemo(
        () =>
            e.length >= 2
                ? D.intl.formatToPlainString(D.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? D.intl.formatToPlainString(D.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, l.jsxs)("div", {
              className: F.kL,
              children: [
                  (0, l.jsx)(O.eu, {
                      className: F.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: R._3.SIZE_24,
                      ...r,
                  }),
                  (0, l.jsx)(u.E, {
                      className: F.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: s,
                  }),
              ],
          });
}
var Z = n(214947),
    B = n(403581),
    V = n(104510),
    W = n(22231),
    J = n(95635),
    Y = n(343032),
    z = n(460905),
    K = n(183623),
    Q = n(861004),
    q = n(158045),
    X = n(202541),
    $ = n(88001),
    ee = n(148155);
let et = [
        { Icon: Z.$, getText: () => D.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: $.aw }) },
        { Icon: B.t, getText: () => D.intl.string(ee.default.woz1Kg) },
        { Icon: V._, getText: () => D.intl.string(ee.default.QnbVrt) },
        { Icon: W.PencilIcon, getText: () => D.intl.string(ee.default["409DEa"]) },
    ],
    en = [
        { Icon: Z.$, getText: () => D.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: $.aw }) },
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.i, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: K.F, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: V._, getText: () => D.intl.formatToPlainString(ee.default.HVCRVf, { numBoosts: X.M4 }) },
        { Icon: Q.c, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    er = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.i, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: K.F, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.c, getText: () => D.intl.string(D.t.CNIZfy) },
    ];
var el = n(118751),
    ei = n(933832);
let ea = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.kpMomJ) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.zTk8Ul) },
    ],
    es = [
        {
            Icon: V._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return D.intl.formatToPlainString(D.t["T9RTr/"], {
                    numBoosts: X.M4,
                    percentageOff: (0, el.l9)(e, X.oX / 100),
                });
            },
        },
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: K.F, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.c, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    eo = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: K.F, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.c, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    ec = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: K.F, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: V._, getText: () => D.intl.string(D.t.cdfuUU) },
        { Icon: Q.c, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    eu = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.Uukj4o) },
    ],
    ed = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: z.n, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: B.t, getText: () => D.intl.string(D.t["8ukxAW"]) },
    ];
var em = n(222719),
    eg = n(838541),
    ex = n(145359),
    eT = n(174788);
function eI(e) {
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
                ? (0, l.jsx)(f.A, {
                      className: ex.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function ef(e) {
    let { isApplicationHome: t, textVariant: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: eT.tier2ApplicationHomeSubheader,
                    children: D.intl.string(ee.default.ItfIa5),
                }),
            et.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, l.jsx)(
                    eI,
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
                eI,
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
function ep(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: c } = e,
        u = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        T = (0, U.V)(),
        I = T?.subscriptionTrial?.skuId,
        f = !!u?.hasActiveTrial,
        h = f ? x?.premiumType : null,
        P = null != I || f,
        v = (0, G.Lj)(h, I);
    return (0, l.jsxs)("div", {
        className: s()(ex.Vd, ex.Nr, i, { [ex.vt]: !a && P, [ex.lr]: !a && P }),
        children: [
            !a &&
                null != v &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.e4, { text: v, className: ex.LW, colorOptions: G.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: ex.o4 }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ex.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: D.intl.string(D.t["02VBaY"]),
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
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: D.intl.string(D.t["t9uG/o"]) }) }),
                            (0, l.jsx)(j.A, { className: s()(ex.DD, ex.ZD) }),
                            (0, l.jsx)(em.A, {
                                isGift: a,
                                premiumTier: X.PremiumTypes.TIER_0,
                                offerType: X.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: I === X.pe.TIER_0,
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
            a || I !== X.pe.TIER_0 ? null : (0, l.jsx)(k.Wy, { tier: X.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var eE =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function eP(e) {
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
        g = (0, C.b)(),
        x = !i && n && !r && g.length > 0,
        T = 3 === t || (0 === t && i && a),
        I = (function () {
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
                    children: D.intl.string(D.t.AozD3Q),
                }),
            I.map((e, n) => {
                let { Icon: r, getText: o } = e;
                return (0, l.jsx)(
                    eI,
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
            x && (3 === t || 0 === t) && (0, l.jsx)(H, {}),
        ],
    });
}
function ej(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: i = 0,
            className: a,
            isGift: u = !1,
            isModal: T = !1,
            priceOptions: I,
            showPromotionalGiftBanner: f = !1,
        } = e,
        h = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        j = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        R = (0, U.V)(),
        A = R?.subscriptionTrial?.skuId,
        _ = h?.hasActiveTrial ? j?.premiumType : null,
        M = (0, v.ar)(),
        N = (0, L.O)(),
        S = (0, v.k5)(),
        C = null != A || null != _ ? X.Vk.PREMIUM_TRIAL : null != N || S ? X.Vk.PREMIUM_DISCOUNT : null,
        O = !u && M,
        w,
        F = w?.getBackgroundImageUrl?.(),
        H = w?.getCardImageUrl?.(),
        Z = (0, c.q)((0, x.Ay)()),
        B = Z ? G.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : G.at.PREMIUM_TIER_2_WHITE_FILL,
        V = (0, G.rm)(S, _, N, R, A),
        W = O && !Z ? ex.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(ex.Nr, ex.hA, a, { [ex.J5]: O, [ex.lr]: O, [ex.jx]: f, [ex.ud]: f && null != H }),
        children: [
            f && null !== H && (0, l.jsx)("img", { className: ex.Cr, alt: "", src: H }),
            f && null !== F && (0, l.jsx)("img", { className: ex.gx, alt: "", src: F }),
            !u &&
                null != V &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.e4, { text: V, className: ex.LW, colorOptions: B }),
                        (0, l.jsx)("div", { className: W }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ex.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: D.intl.string(D.t.XP8vWR),
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
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: D.intl.string(D.t.lG6a5x) }) }),
                            (0, l.jsx)(P.A, { className: s()(ex.DD, ex.$l) }),
                            (0, l.jsx)(em.A, {
                                isGift: u,
                                premiumTier: X.PremiumTypes.TIER_2,
                                offerType: C,
                                offerTierMatchesCard: A === X.pe.TIER_2 || (0, b.U9)(N, X.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: I,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(eP, { featureSet: i, isModal: T, isGift: u }) }),
                ],
            }),
            u || (A !== X.pe.TIER_2 && null == N) ? null : (0, l.jsx)(k.Wy, { tier: X.PremiumTypes.TIER_2 }),
            n,
            f && (0, l.jsx)(y, {}),
        ],
    });
}
function ev(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function eR(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: i } = e,
        { analyticsLocations: a } = (0, I.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        o = ev(t);
    return (0, l.jsx)(I.f5, {
        value: a,
        children: (0, l.jsxs)("div", {
            ref: o,
            className: s()(ex.Zo, n),
            children: [
                (0, l.jsx)(ep, { showWumpus: !0, ctaButton: r }),
                (0, l.jsx)(ej, { showWumpus: !0, ctaButton: i }),
            ],
        }),
    });
}
