s.d(t, { A: () => L }), s(323874), s(14289), s(35956);
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(873263),
    o = s(311907),
    c = s(289873),
    d = s(73153),
    m = s(73825),
    u = s(974544),
    _ = s(107834),
    x = s(793574),
    p = s(688810),
    g = s(323082),
    h = s(86379),
    f = s(160946),
    C = s(459793),
    b = s(726649),
    j = s(611924),
    A = s(532794),
    N = s(976860),
    I = s(351906),
    T = s(287809),
    v = s(295405),
    E = s(166403),
    R = s(954571),
    M = s(474090),
    S = s(694080),
    y = s(553081),
    P = s(848245),
    k = s(422936),
    B = s(234419),
    w = s(558533),
    G = s(788868),
    O = s(652215),
    D = s(972119);
let L = function (e) {
    let { entrypoint: t = G.Mf.UserSettings } = e;
    (0, j.P)(b.b);
    let s = (0, h.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: L } = (0, p.Ay)(x.A.PREMIUM_MARKETING),
        H = (0, o.bG)([E.A], () => E.A.hasFetchedSubscriptions()),
        U = (0, o.bG)([v.A], () => v.A.hasFetchedPaymentSources),
        F = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        W = F?.id,
        z = (0, B.V)(),
        V = (0, k.O)(),
        K = (0, f.Y)(G.T7),
        [Q, Z] = a.useState(!0),
        Y = a.useRef(0),
        J = (0, M.YE)(F, G.PremiumTypes.TIER_2);
    (0, P.b)(),
        a.useEffect(() => {
            d.h.wait(async () => {
                let e = Date.now();
                await Promise.all([g.hP(), g.$o(), (0, m.zS)(null, null, O.tF5.DISCOVERY)]),
                    (Y.current = Date.now() - e),
                    Z(!1);
            });
        }, []),
        a.useEffect(() => {
            Q ||
                R.default.track(O.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: Y.current,
                });
        }, [i, Q]),
        a.useEffect(() => {
            s && (null != z || null != V) && (0, S.u1)(z, V);
        }, [s, z, V]);
    let X = (0, l.zy)(),
        q = a.useRef(!1),
        $ = H && U && K,
        [ee, et] = a.useState($);
    $ && !ee && et(!0),
        a.useEffect(() => {
            if (q.current || !$) return;
            let e = new URLSearchParams(X.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: G.pe.TIER_0, nitro: G.pe.TIER_2 }[e];
            null != t &&
                ((q.current = !0),
                (0, N.bG)(O.BVt.APPLICATION_STORE),
                (0, A.A)({ subscriptionTier: t, analyticsLocations: L }));
        }, [$, X.search, L]);
    let es = (0, o.bG)([I.A], () => I.A.enabled),
        er = t === G.Mf.ApplicationStoreHome,
        ea = es
            ? (0, r.jsx)(u.A, {})
            : s
              ? (0, r.jsx)(C.uK, {})
              : er && J
                ? (0, r.jsx)(p.f5, { value: L, children: (0, r.jsx)(y.Ay, { userId: W }) })
                : ee
                  ? null
                  : (0, r.jsx)("div", { className: n()(D.kL, D.Lq), children: (0, r.jsx)(c.y, {}) });
    return null != ea
        ? (0, r.jsxs)(r.Fragment, { children: [er && (0, r.jsx)(_.A, {}), ea] })
        : (0, r.jsx)(p.f5, { value: L, children: (0, r.jsx)(w.A, { entrypoint: t }) });
};
