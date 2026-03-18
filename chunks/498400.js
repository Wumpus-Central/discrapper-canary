n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(73825),
    _ = n(974544),
    m = n(107834),
    g = n(793574),
    A = n(688810),
    x = n(86379),
    h = n(160946),
    p = n(459793),
    T = n(726649),
    E = n(611924),
    S = n(351906),
    C = n(287809),
    f = n(295405),
    b = n(166403),
    N = n(954571),
    I = n(474090),
    v = n(560138),
    j = n(694080),
    y = n(553081),
    R = n(422936),
    O = n(234419),
    D = n(558533),
    L = n(788868),
    P = n(652215),
    G = n(615434);
let M = function (e) {
    let { entrypoint: t = L.Mf.UserSettings } = e;
    (0, E.P)(T.b);
    let n = (0, x.Hp)(),
        { sourceAnalyticsLocations: l, analyticsLocations: M } = (0, A.Ay)(g.A.PREMIUM_MARKETING),
        U = (0, r.bG)([b.A], () => b.A.hasFetchedSubscriptions()),
        k = (0, r.bG)([f.A], () => f.A.hasFetchedPaymentSources),
        V = (0, r.bG)([C.default], () => C.default.getCurrentUser()),
        w = V?.id,
        B = (0, O.V)(),
        H = (0, R.O)(),
        F = (0, h.Y)(L.T7),
        [Y, z] = s.useState(!0),
        X = s.useRef(0),
        W = (0, I.YE)(V, L.PremiumTypes.TIER_2),
        K = (0, r.bG)([v.A], () => v.A.hasFetched);
    s.useEffect(() => {
        K || c.xG();
    }, [K]),
        s.useEffect(() => {
            d.h.wait(async () => {
                let e = Date.now();
                await Promise.all([c.hP(), c.$o(), (0, u.zS)(null, null, P.tF5.DISCOVERY)]),
                    (X.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        s.useEffect(() => {
            Y ||
                N.default.track(P.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: X.current,
                });
        }, [l, Y]),
        s.useEffect(() => {
            n && (null != B || null != H) && (0, j.u1)(B, H);
        }, [n, B, H]);
    let Z = (0, r.bG)([S.A], () => S.A.enabled),
        q = t === L.Mf.ApplicationStoreHome,
        J = Z
            ? (0, i.jsx)(_.A, {})
            : n
              ? (0, i.jsx)(p.uK, {})
              : q && W
                ? (0, i.jsx)(A.f5, { value: M, children: (0, i.jsx)(y.A, { userId: w }) })
                : U && F && k
                  ? null
                  : (0, i.jsx)("div", { className: a()(G.kL, G.Lq), children: (0, i.jsx)(o.y$y, {}) });
    return null != J
        ? (0, i.jsxs)(i.Fragment, { children: [q && (0, i.jsx)(m.A, {}), J] })
        : (0, i.jsx)(A.f5, { value: M, children: (0, i.jsx)(D.A, { entrypoint: t }) });
};
