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
    k = n(352989);
let w = () => {
    let e = (0, a.zy)();
    (0, x.P)(_.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        w = s.useRef(null),
        V = s.useRef(null),
        B = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [F, H] = s.useState(!1),
        [z, Y] = s.useState(!1),
        [X, K] = s.useState(!1),
        [W, Z] = s.useState(!1),
        q = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        Q = null != q ? (0, f.EL)(q) : null,
        J = null != Q ? f.Ay.getSkuIdForPlan(Q.planId) : null,
        $ = null !== J && J !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
        ee = (0, S.cg)(),
        { analyticsLocations: et } = (0, g.Ay)(m.A.PREMIUM_MARKETING);
    s.useEffect(() => {
        Z(!0);
    }, []);
    let en = (0, A.DK)(h.W.NITRO, "PremiumMarketingHome"),
        ei = s.useMemo(() => !!en && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, en]);
    (0, E.z)(L.NI.ORB_REWARDS, ei);
    let es = [N.k.HOME, N.k.WHATS_NEW, N.k.BEST_OF_NITRO, N.k.PLANS, N.k.COMPARE],
        { navBarSections: el, activeSectionId: er } = (0, D.o)(es),
        { home: ea, whatsNew: eo, bestOfNitro: ed, plans: ec, compare: eu } = el,
        em = (0, i.jsxs)("div", {
            className: r()(k.kL, k.Gd, k.iI, { [k.Hq]: !B }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(v.A, { className: k.yH }),
                (0, i.jsx)(O.A, { navBarSections: el, activeSectionId: er }),
                (0, i.jsxs)("div", {
                    className: k.Qr,
                    children: [
                        (0, i.jsx)("div", {
                            className: k.qY,
                            ref: ea.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: l,
                                onChange: (e) => H(e),
                                threshold: 0,
                                active: !0,
                                children: (0, i.jsx)(P.A, {
                                    ref: l,
                                    subscriptionTier: $,
                                    isEligibleForBogoPromotion: ee,
                                }),
                            }),
                        }),
                        ee &&
                            (0, i.jsx)("div", {
                                className: k.Hz,
                                children: (0, i.jsx)(b.A, { variant: b.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, i.jsx)("div", {
                            className: k.So,
                            ref: eo.ref,
                            children: (0, i.jsx)(R.Ct, { shouldLoadVideo: W, isReducedMotion: B }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.KQ,
                            ref: ed.ref,
                            children: (0, i.jsx)(R.oO, { shouldLoadVideo: W, isReducedMotion: B }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.s5,
                            ref: ec.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: n,
                                onChange: (e) => Y(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, i.jsx)(C.jP, { innerRef: n }),
                            }),
                        }),
                        (0, i.jsx)("div", { className: k.aC, ref: eu.ref, children: (0, i.jsx)(j.A, {}) }),
                    ],
                }),
                (0, i.jsx)(d.L, {
                    innerRef: w,
                    onChange: (e) => {
                        e &&
                            !X &&
                            (T.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: et }),
                            K(!0));
                    },
                    children: (0, i.jsx)("div", { ref: w, className: k._Z }),
                }),
                (0, i.jsx)(y.A, { ref: V }),
                (0, i.jsx)(I.A, { isVisible: !F && !z && W, subscriptionTier: $, isEligibleForBogoPromotion: ee }),
                (0, i.jsx)(v.A, { className: k.MF }),
            ],
        });
    return (0, i.jsx)(c.NPJ, {
        theme: U.NJ.DARKER,
        children: (e) => (0, i.jsx)(c.GtU, { className: r()(k.XG, e), ref: t, children: em }),
    });
};
