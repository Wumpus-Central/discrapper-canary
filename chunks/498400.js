n.d(t, { A: () => w }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(873263),
    o = n(311907),
    d = n(397927),
    c = n(73153),
    u = n(73825),
    m = n(974544),
    g = n(107834),
    _ = n(793574),
    x = n(688810),
    h = n(323082),
    A = n(86379),
    p = n(160946),
    T = n(459793),
    f = n(726649),
    S = n(611924),
    E = n(532794),
    b = n(976860),
    C = n(351906),
    v = n(287809),
    N = n(295405),
    I = n(166403),
    j = n(954571),
    y = n(474090),
    O = n(694080),
    R = n(553081),
    L = n(848245),
    P = n(422936),
    D = n(234419),
    G = n(558533),
    M = n(788868),
    U = n(652215),
    k = n(972119);
let w = function (e) {
    let { entrypoint: t = M.Mf.UserSettings } = e;
    (0, S.P)(f.b);
    let n = (0, A.Hp)(),
        { sourceAnalyticsLocations: l, analyticsLocations: w } = (0, x.Ay)(_.A.PREMIUM_MARKETING),
        V = (0, o.bG)([I.A], () => I.A.hasFetchedSubscriptions()),
        B = (0, o.bG)([N.A], () => N.A.hasFetchedPaymentSources),
        F = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        H = F?.id,
        z = (0, D.V)(),
        Y = (0, P.O)(),
        X = (0, p.Y)(M.T7),
        [K, W] = s.useState(!0),
        Z = s.useRef(0),
        q = (0, y.YE)(F, M.PremiumTypes.TIER_2);
    (0, L.b)(),
        s.useEffect(() => {
            c.h.wait(async () => {
                let e = Date.now();
                await Promise.all([h.hP(), h.$o(), (0, u.zS)(null, null, U.tF5.DISCOVERY)]),
                    (Z.current = Date.now() - e),
                    W(!1);
            });
        }, []),
        s.useEffect(() => {
            K ||
                j.default.track(U.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: Z.current,
                });
        }, [l, K]),
        s.useEffect(() => {
            n && (null != z || null != Y) && (0, O.u1)(z, Y);
        }, [n, z, Y]);
    let Q = (0, a.zy)(),
        J = s.useRef(!1),
        $ = V && B && X;
    s.useEffect(() => {
        if (J.current || !$) return;
        let e = new URLSearchParams(Q.search).get("checkout");
        if (null == e) return;
        let t = { nitro_basic: M.pe.TIER_0, nitro: M.pe.TIER_2 }[e];
        null != t &&
            ((J.current = !0),
            (0, b.bG)(U.BVt.APPLICATION_STORE),
            (0, E.A)({ subscriptionTier: t, analyticsLocations: w }));
    }, [$, Q.search, w]);
    let ee = (0, o.bG)([C.A], () => C.A.enabled),
        et = t === M.Mf.ApplicationStoreHome,
        en = ee
            ? (0, i.jsx)(m.A, {})
            : n
              ? (0, i.jsx)(T.uK, {})
              : et && q
                ? (0, i.jsx)(x.f5, { value: w, children: (0, i.jsx)(R.Ay, { userId: H }) })
                : V && X && B
                  ? null
                  : (0, i.jsx)("div", { className: r()(k.kL, k.Lq), children: (0, i.jsx)(d.y$y, {}) });
    return null != en
        ? (0, i.jsxs)(i.Fragment, { children: [et && (0, i.jsx)(g.A, {}), en] })
        : (0, i.jsx)(x.f5, { value: w, children: (0, i.jsx)(G.A, { entrypoint: t }) });
};
