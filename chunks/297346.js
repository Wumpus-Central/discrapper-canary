n.d(t, { qu: () => eN, Nz: () => eE, pw: () => ev, ZP: () => ej, Lg: () => eI, nH: () => ef });
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
    h = n(793574),
    p = n(688810),
    I = n(904788),
    f = n(773669),
    T = n(287809),
    E = n(166403),
    j = n(224016),
    A = n(217392),
    v = n(526292),
    N = n(778712),
    C = n(775602),
    y = n(951305),
    _ = n(380619),
    R = n(298305),
    P = n(420754);
function S() {
    let e = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        { claimableRewards: t } = (0, y.Pv)(),
        n;
    if (null == n || null == t || 0 === t.length) return null;
    let r = (0, _.gc)(n.getBannerImageUrl?.()),
        i = (0, _.K5)(n.gradientConfig, { defaultAngle: 180 });
    return (0, l.jsxs)("div", {
        className: P.us,
        style: r ?? i,
        children: [
            (0, l.jsxs)("div", {
                className: P.ZR,
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
                className: P.my,
                children: (0, l.jsx)(R.A, {
                    maxRewardImageSrc: n.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: N._3.SIZE_80,
                }),
            }),
        ],
    });
}
var L = n(286320),
    M = n(724651),
    b = n(732280),
    U = n(511484),
    G = n(774774),
    F = n(349563),
    D = n(97808),
    w = n(854627),
    O = n(375708),
    k = n(896423);
function B() {
    let e = (0, L.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, w.A)({ userId: t?.id, size: N._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let s = i.useMemo(
        () =>
            e.length >= 2
                ? O.intl.formatToPlainString(O.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? O.intl.formatToPlainString(O.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, l.jsxs)("div", {
              className: k.kL,
              children: [
                  (0, l.jsx)(D.eu, {
                      className: k.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: N._3.SIZE_24,
                      ...r,
                  }),
                  (0, l.jsx)(u.E, {
                      className: k.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: s,
                  }),
              ],
          });
}
var H = n(214947),
    V = n(403581),
    W = n(104510),
    Z = n(22231),
    J = n(95635),
    K = n(343032),
    Y = n(460905),
    z = n(183623),
    Q = n(861004),
    q = n(158045),
    X = n(202541),
    $ = n(88001),
    ee = n(148155);
let et = [
        { Icon: H.$, getText: () => O.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: $.aw }) },
        { Icon: V.t, getText: () => O.intl.string(ee.default.woz1Kg) },
        { Icon: W._, getText: () => O.intl.string(ee.default.QnbVrt) },
        { Icon: Z.PencilIcon, getText: () => O.intl.string(ee.default["409DEa"]) },
    ],
    en = [
        { Icon: H.$, getText: () => O.intl.formatToPlainString(ee.default.eP3Ar7, { totalSeats: $.aw }) },
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.i, getText: () => O.intl.string(O.t["taMwg/"]) },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: z.F, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: W._, getText: () => O.intl.formatToPlainString(ee.default.HVCRVf, { numBoosts: X.M4 }) },
        { Icon: Q.c, getText: () => O.intl.string(O.t.CNIZfy) },
    ],
    er = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.i, getText: () => O.intl.string(O.t["taMwg/"]) },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: z.F, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: Q.c, getText: () => O.intl.string(O.t.CNIZfy) },
    ];
var el = n(118751),
    ei = n(933832);
let ea = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => O.intl.string(O.t.kpMomJ) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: ei.CheckmarkLargeIcon, getText: () => O.intl.string(O.t.zTk8Ul) },
    ],
    es = [
        {
            Icon: W._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return O.intl.formatToPlainString(O.t["T9RTr/"], {
                    numBoosts: X.M4,
                    percentageOff: (0, el.l9)(e, X.oX / 100),
                });
            },
        },
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: z.F, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: Q.c, getText: () => O.intl.string(O.t.CNIZfy) },
    ],
    eo = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: K.i, getText: () => O.intl.string(O.t["taMwg/"]) },
        { Icon: z.F, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: Q.c, getText: () => O.intl.string(O.t.CNIZfy) },
    ],
    ec = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: K.i, getText: () => O.intl.string(O.t["taMwg/"]) },
        { Icon: z.F, getText: () => O.intl.string(O.t.W180bY) },
        { Icon: W._, getText: () => O.intl.string(O.t.cdfuUU) },
        { Icon: Q.c, getText: () => O.intl.string(O.t.CNIZfy) },
    ],
    eu = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => O.intl.string(O.t.KjrZ8Z) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => O.intl.string(O.t.Uukj4o) },
    ],
    ed = [
        {
            Icon: J.UploadIcon,
            getText: () =>
                O.intl.formatToPlainString(O.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => O.intl.string(O.t.KjrZ8Z) },
        { Icon: K.i, getText: () => O.intl.string(O.t["taMwg/"]) },
        { Icon: V.t, getText: () => O.intl.string(O.t["8ukxAW"]) },
    ];
var em = n(222719),
    eg = n(838541),
    ex = n(145359),
    eh = n(174788);
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
        className: s()(i, { [eh.featureItem]: c, [eh.featureItemApplicationHome]: c && o }),
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
                    className: eh.tier2ApplicationHomeSubheader,
                    children: O.intl.string(ee.default.ItfIa5),
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
function ef(e) {
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
function eT(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: c } = e,
        u = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        h = (0, b.V)(),
        p = h?.subscriptionTrial?.skuId,
        I = !!u?.hasActiveTrial,
        f = I ? x?.premiumType : null,
        j = null != p || I,
        v = (0, G.Lj)(f, p);
    return (0, l.jsxs)("div", {
        className: s()(ex.Vd, ex.Nr, i, { [ex.vt]: !a && j, [ex.lr]: !a && j }),
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
                          alt: O.intl.string(O.t["02VBaY"]),
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
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: O.intl.string(O.t["t9uG/o"]) }) }),
                            (0, l.jsx)(A.A, { className: s()(ex.DD, ex.ZD) }),
                            (0, l.jsx)(em.A, {
                                isGift: a,
                                premiumTier: X.PremiumTypes.TIER_0,
                                offerType: X.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: p === X.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(ef, {}) }),
                ],
            }),
            a || p !== X.pe.TIER_0 ? null : (0, l.jsx)(F.Wy, { tier: X.PremiumTypes.TIER_0 }),
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
function ej(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: i = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: c,
            textVariant: d,
        } = e,
        m = (0, o.bG)([f.default], () => f.default.locale),
        g = (0, L.b)(),
        x = !i && n && !r && g.length > 0,
        h = 3 === t || (0 === t && i && a),
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
            h &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: i ? eh.tier2ApplicationHomeSubheader : ex.RQ,
                    children: O.intl.string(O.t.AozD3Q),
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
function eA(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: i = 0,
            className: a,
            isGift: u = !1,
            isModal: h = !1,
            priceOptions: p,
            showPromotionalGiftBanner: I = !1,
        } = e,
        f = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        A = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        N = (0, b.V)(),
        C = N?.subscriptionTrial?.skuId,
        y = f?.hasActiveTrial ? A?.premiumType : null,
        _ = (0, v.ar)(),
        R = (0, M.O)(),
        P = (0, v.k5)(),
        L = null != C || null != y ? X.Vk.PREMIUM_TRIAL : null != R || P ? X.Vk.PREMIUM_DISCOUNT : null,
        D = !u && _,
        w,
        k = w?.getBackgroundImageUrl?.(),
        B = w?.getCardImageUrl?.(),
        H = (0, c.q)((0, x.Ay)()),
        V = H ? G.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : G.at.PREMIUM_TIER_2_WHITE_FILL,
        W = (0, G.rm)(P, y, R, N, C),
        Z = D && !H ? ex.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(ex.Nr, ex.hA, a, { [ex.J5]: D, [ex.lr]: D, [ex.jx]: I, [ex.ud]: I && null != B }),
        children: [
            I && null !== B && (0, l.jsx)("img", { className: ex.Cr, alt: "", src: B }),
            I && null !== k && (0, l.jsx)("img", { className: ex.gx, alt: "", src: k }),
            !u &&
                null != W &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.e4, { text: W, className: ex.LW, colorOptions: V }),
                        (0, l.jsx)("div", { className: Z }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ex.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: O.intl.string(O.t.XP8vWR),
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
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: O.intl.string(O.t.lG6a5x) }) }),
                            (0, l.jsx)(j.A, { className: s()(ex.DD, ex.$l) }),
                            (0, l.jsx)(em.A, {
                                isGift: u,
                                premiumTier: X.PremiumTypes.TIER_2,
                                offerType: L,
                                offerTierMatchesCard: C === X.pe.TIER_2 || (0, U.U9)(R, X.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(ej, { featureSet: i, isModal: h, isGift: u }) }),
                ],
            }),
            u || (C !== X.pe.TIER_2 && null == R) ? null : (0, l.jsx)(F.Wy, { tier: X.PremiumTypes.TIER_2 }),
            n,
            I && (0, l.jsx)(S, {}),
        ],
    });
}
function ev(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function eN(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: i } = e,
        { analyticsLocations: a } = (0, p.Ay)(h.A.PREMIUM_MARKETING_TIER_CARD),
        o = ev(t);
    return (0, l.jsx)(p.f5, {
        value: a,
        children: (0, l.jsxs)("div", {
            ref: o,
            className: s()(ex.Zo, n),
            children: [
                (0, l.jsx)(eT, { showWumpus: !0, ctaButton: r }),
                (0, l.jsx)(eA, { showWumpus: !0, ctaButton: i }),
            ],
        }),
    });
}
