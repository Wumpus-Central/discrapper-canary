s.d(t, { A: () => F }), s(323874), s(14289), s(35956);
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(873263),
    o = s(311907),
    c = s(230109),
    d = s(43990),
    m = s(599319),
    u = s(775602),
    _ = s(793574),
    x = s(688810),
    p = s(726649),
    g = s(611924),
    h = s(245853),
    f = s(649032),
    C = s(26508),
    b = s(166403),
    j = s(954571),
    A = s(927578),
    N = s(40185),
    I = s(994763),
    T = s(130946),
    v = s(501007),
    E = s(817267),
    R = s(736455),
    M = s(400292),
    S = s(536195),
    y = s(388116),
    P = s(577174),
    k = s(127493),
    B = s(23003),
    w = s(16019),
    G = s(768229),
    O = s(788868),
    D = s(652215),
    L = s(654487),
    H = s(818348),
    U = s(808557);
let F = () => {
    let e = (0, l.zy)();
    (0, g.P)(p.b);
    let t = a.useRef(null),
        s = a.useRef(null),
        i = a.useRef(null),
        F = a.useRef(null),
        W = a.useRef(null),
        z = a.useRef(null),
        V = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [K, Q] = a.useState(V);
    a.useEffect(() => {
        if (V) return void Q(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && Q(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [V]);
    let [Z, Y] = a.useState(!1),
        [J, X] = a.useState(!1),
        [q, $] = a.useState(!1),
        [ee, et] = a.useState(!1),
        es = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        er = null != es ? (0, A.EL)(es) : null,
        ea = null != er ? A.Ay.getSkuIdForPlan(er.planId) : null,
        ei = null !== ea && ea !== O.pe.TIER_2 ? O.pe.TIER_2 : null,
        en = (0, N.cg)(),
        { analyticsLocations: el } = (0, x.Ay)(_.A.PREMIUM_MARKETING);
    a.useEffect(() => {
        et(!0);
    }, []);
    let eo = (0, C.DK)(f.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: ec } = (0, h.Dl)(L.rE.NITRO_HOME_MARKETING),
        ed = a.useMemo(
            () => !!eo && !!ec && "orbs" === new URLSearchParams(e.search).get("section"),
            [e.search, eo, ec],
        );
    (0, I.z)(B.NI.COMBINED_ORBS, ed);
    let em = [R.k.HOME, R.k.WHATS_NEW, R.k.BEST_OF_NITRO, R.k.PLANS, R.k.COMPARE],
        { navBarSections: eu, activeSectionId: e_ } = (0, G.o)(em),
        { home: ex, whatsNew: ep, bestOfNitro: eg, plans: eh, compare: ef } = eu,
        eC = (0, r.jsxs)("div", {
            ref: s,
            className: n()(U.kL, U.Gd, U.iI, { [U.Hq]: !V }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(E.A, { className: U.yH }),
                (0, r.jsx)(P.A, { navBarSections: eu, activeSectionId: e_, isAnimationComplete: K }),
                (0, r.jsxs)("div", {
                    className: U.Qr,
                    children: [
                        (0, r.jsx)("div", {
                            className: U.qY,
                            ref: ex.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: F,
                                onChange: (e) => Y(e),
                                threshold: 0,
                                active: !0,
                                children: (0, r.jsx)(w.A, {
                                    ref: F,
                                    subscriptionTier: ei,
                                    isEligibleForBogoPromotion: en,
                                }),
                            }),
                        }),
                        en &&
                            (0, r.jsx)("div", {
                                className: U.Hz,
                                children: (0, r.jsx)(T.A, { variant: T.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: U.So,
                            ref: ep.ref,
                            children: (0, r.jsx)(k.Ct, { shouldLoadVideo: ee, isReducedMotion: V }),
                        }),
                        (0, r.jsx)("div", {
                            className: U.KQ,
                            ref: eg.ref,
                            children: (0, r.jsx)(k.oO, { shouldLoadVideo: ee, isReducedMotion: V }),
                        }),
                        (0, r.jsx)("div", {
                            className: U.s5,
                            ref: eh.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: i,
                                onChange: (e) => X(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, r.jsx)(v.jP, { innerRef: i }),
                            }),
                        }),
                        (0, r.jsx)("div", { className: U.aC, ref: ef.ref, children: (0, r.jsx)(S.A, {}) }),
                    ],
                }),
                (0, r.jsx)(c.L, {
                    innerRef: W,
                    onChange: (e) => {
                        e &&
                            !q &&
                            (j.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: el }),
                            $(!0));
                    },
                    children: (0, r.jsx)("div", { ref: W, className: U._Z }),
                }),
                (0, r.jsx)(y.A, { ref: z }),
                (0, r.jsx)(M.A, { isVisible: !Z && !J && ee, subscriptionTier: ei, isEligibleForBogoPromotion: en }),
                (0, r.jsx)(E.A, { className: U.MF }),
            ],
        });
    return (0, r.jsx)(d.N, {
        theme: H.NJ.DARKER,
        children: (e) => (0, r.jsx)(m.Gt, { className: n()(U.XG, e), ref: t, children: eC }),
    });
};
