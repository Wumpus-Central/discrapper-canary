n.d(t, { A: () => w }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(775602),
    m = n(793574),
    g = n(688810),
    _ = n(726649),
    x = n(611924),
    h = n(649032),
    A = n(26508),
    p = n(166403),
    T = n(954571),
    f = n(927578),
    S = n(40185),
    E = n(994763),
    b = n(130946),
    C = n(501007),
    v = n(817267),
    N = n(736455),
    I = n(400292),
    j = n(536195),
    y = n(388116),
    O = n(577174),
    R = n(127493),
    L = n(23003),
    P = n(16019),
    D = n(768229),
    G = n(788868),
    M = n(652215),
    U = n(818348),
    k = n(808557);
let w = () => {
    let e = (0, a.zy)();
    (0, x.P)(_.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        w = s.useRef(null),
        V = s.useRef(null),
        B = s.useRef(null),
        F = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [H, z] = s.useState(F);
    s.useEffect(() => {
        if (F) return void z(!0);
        let e = n.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && z(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [F]);
    let [Y, X] = s.useState(!1),
        [K, W] = s.useState(!1),
        [Z, q] = s.useState(!1),
        [Q, J] = s.useState(!1),
        $ = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        ee = null != $ ? (0, f.EL)($) : null,
        et = null != ee ? f.Ay.getSkuIdForPlan(ee.planId) : null,
        en = null !== et && et !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
        ei = (0, S.cg)(),
        { analyticsLocations: es } = (0, g.Ay)(m.A.PREMIUM_MARKETING);
    s.useEffect(() => {
        J(!0);
    }, []);
    let el = (0, A.DK)(h.W.NITRO, "PremiumMarketingHome"),
        er = s.useMemo(() => !!el && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, el]);
    (0, E.z)(L.NI.ORB_REWARDS, er);
    let ea = [N.k.HOME, N.k.WHATS_NEW, N.k.BEST_OF_NITRO, N.k.PLANS, N.k.COMPARE],
        { navBarSections: eo, activeSectionId: ed } = (0, D.o)(ea),
        { home: ec, whatsNew: eu, bestOfNitro: em, plans: eg, compare: e_ } = eo,
        ex = (0, i.jsxs)("div", {
            ref: n,
            className: r()(k.kL, k.Gd, k.iI, { [k.Hq]: !F }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(v.A, { className: k.yH }),
                (0, i.jsx)(O.A, { navBarSections: eo, activeSectionId: ed, isAnimationComplete: H }),
                (0, i.jsxs)("div", {
                    className: k.Qr,
                    children: [
                        (0, i.jsx)("div", {
                            className: k.qY,
                            ref: ec.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: w,
                                onChange: (e) => X(e),
                                threshold: 0,
                                active: !0,
                                children: (0, i.jsx)(P.A, {
                                    ref: w,
                                    subscriptionTier: en,
                                    isEligibleForBogoPromotion: ei,
                                }),
                            }),
                        }),
                        ei &&
                            (0, i.jsx)("div", {
                                className: k.Hz,
                                children: (0, i.jsx)(b.A, { variant: b.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, i.jsx)("div", {
                            className: k.So,
                            ref: eu.ref,
                            children: (0, i.jsx)(R.Ct, { shouldLoadVideo: Q, isReducedMotion: F }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.KQ,
                            ref: em.ref,
                            children: (0, i.jsx)(R.oO, { shouldLoadVideo: Q, isReducedMotion: F }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.s5,
                            ref: eg.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: l,
                                onChange: (e) => W(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, i.jsx)(C.jP, { innerRef: l }),
                            }),
                        }),
                        (0, i.jsx)("div", { className: k.aC, ref: e_.ref, children: (0, i.jsx)(j.A, {}) }),
                    ],
                }),
                (0, i.jsx)(d.L, {
                    innerRef: V,
                    onChange: (e) => {
                        e &&
                            !Z &&
                            (T.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: es }),
                            q(!0));
                    },
                    children: (0, i.jsx)("div", { ref: V, className: k._Z }),
                }),
                (0, i.jsx)(y.A, { ref: B }),
                (0, i.jsx)(I.A, { isVisible: !Y && !K && Q, subscriptionTier: en, isEligibleForBogoPromotion: ei }),
                (0, i.jsx)(v.A, { className: k.MF }),
            ],
        });
    return (0, i.jsx)(c.NPJ, {
        theme: U.NJ.DARKER,
        children: (e) => (0, i.jsx)(c.GtU, { className: r()(k.XG, e), ref: t, children: ex }),
    });
};
