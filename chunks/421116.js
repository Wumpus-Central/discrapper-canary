n.d(t, { A: () => V }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(775602),
    _ = n(793574),
    g = n(688810),
    A = n(726649),
    m = n(611924),
    h = n(649032),
    p = n(26508),
    x = n(166403),
    E = n(954571),
    T = n(927578),
    S = n(40185),
    C = n(994763),
    I = n(130946),
    f = n(407775),
    b = n(817267),
    N = n(736455),
    v = n(509388),
    O = n(400292),
    j = n(536195),
    R = n(577174),
    y = n(127493),
    P = n(23003),
    L = n(16019),
    D = n(768229),
    G = n(788868),
    M = n(652215),
    U = n(818348),
    k = n(511030);
let V = () => {
    let e = (0, r.zy)();
    (0, m.P)(A.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        V = s.useRef(null),
        w = s.useRef(null),
        H = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [B, F] = s.useState(!1),
        [Y, z] = s.useState(!1),
        [X, W] = s.useState(!1),
        [K, Z] = s.useState(!1),
        q = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        J = null != q ? (0, T.EL)(q) : null,
        Q = null != J ? T.Ay.getSkuIdForPlan(J.planId) : null,
        $ = null !== Q && Q !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
        ee = (0, S.cg)(),
        { analyticsLocations: et } = (0, g.Ay)(_.A.PREMIUM_MARKETING);
    s.useEffect(() => {
        Z(!0);
    }, []);
    let en = (0, p.DK)(h.W.NITRO, "PremiumMarketingHome"),
        ei = s.useMemo(() => !!en && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, en]);
    (0, C.z)(P.NI.ORB_REWARDS, ei);
    let es = [N.k.HOME, N.k.WHATS_NEW, N.k.BEST_OF_NITRO, N.k.PLANS, N.k.COMPARE],
        { navBarSections: el, activeSectionId: ea } = (0, D.o)(es),
        { home: er, whatsNew: eo, bestOfNitro: ed, plans: ec, compare: eu } = el,
        e_ = (0, i.jsxs)("div", {
            className: a()(k.kL, k.Gd, k.iI, { [k.Hq]: !H }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(b.A, { className: k.yH }),
                (0, i.jsx)(R.A, { navBarSections: el, activeSectionId: ea }),
                (0, i.jsxs)("div", {
                    className: k.Qr,
                    children: [
                        (0, i.jsx)("div", {
                            className: k.qY,
                            ref: er.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: l,
                                onChange: (e) => F(e),
                                threshold: 0,
                                active: !0,
                                children: (0, i.jsx)(L.A, {
                                    ref: l,
                                    subscriptionTier: $,
                                    isEligibleForBogoPromotion: ee,
                                }),
                            }),
                        }),
                        ee &&
                            (0, i.jsx)("div", {
                                className: k.Hz,
                                children: (0, i.jsx)(I.A, { variant: I.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, i.jsx)("div", {
                            className: k.So,
                            ref: eo.ref,
                            children: (0, i.jsx)(y.Ct, { shouldLoadVideo: K, isReducedMotion: H }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.KQ,
                            ref: ed.ref,
                            children: (0, i.jsx)(y.oO, { shouldLoadVideo: K, isReducedMotion: H }),
                        }),
                        (0, i.jsx)("div", {
                            className: k.s5,
                            ref: ec.ref,
                            children: (0, i.jsx)(d.L, {
                                innerRef: n,
                                onChange: (e) => z(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, i.jsx)(f.hy, { innerRef: n }),
                            }),
                        }),
                        (0, i.jsx)("div", { className: k.aC, ref: eu.ref, children: (0, i.jsx)(j.A, {}) }),
                    ],
                }),
                (0, i.jsx)(d.L, {
                    innerRef: V,
                    onChange: (e) => {
                        e &&
                            !X &&
                            (E.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: et }),
                            W(!0));
                    },
                    children: (0, i.jsx)("div", { ref: V, className: k._Z }),
                }),
                (0, i.jsx)(v.A, { ref: w }),
                (0, i.jsx)(O.A, { isVisible: !B && !Y && K, subscriptionTier: $, isEligibleForBogoPromotion: ee }),
                (0, i.jsx)(b.A, { className: k.MF }),
            ],
        });
    return (0, i.jsx)(c.NPJ, {
        theme: U.NJ.DARKER,
        children: (e) => (0, i.jsx)(c.GtU, { className: a()(k.XG, e), ref: t, children: e_ }),
    });
};
