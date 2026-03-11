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
    g = n(107834),
    A = n(793574),
    m = n(688810),
    h = n(86379),
    p = n(160946),
    x = n(459793),
    E = n(726649),
    T = n(611924),
    S = n(351906),
    C = n(287809),
    I = n(295405),
    f = n(166403),
    b = n(954571),
    N = n(474090),
    v = n(560138),
    O = n(694080),
    j = n(553081),
    R = n(422936),
    y = n(234419),
    P = n(558533),
    L = n(788868),
    D = n(652215),
    G = n(615434);
let M = function (e) {
    let { entrypoint: t = L.Mf.UserSettings } = e;
    (0, T.P)(E.b);
    let n = (0, h.H)(),
        { sourceAnalyticsLocations: l, analyticsLocations: M } = (0, m.Ay)(A.A.PREMIUM_MARKETING),
        U = (0, r.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
        k = (0, r.bG)([I.A], () => I.A.hasFetchedPaymentSources),
        V = (0, r.bG)([C.default], () => C.default.getCurrentUser()),
        w = V?.id,
        H = (0, y.V)(),
        B = (0, R.O)(),
        F = (0, p.Y)(L.T7),
        [Y, z] = s.useState(!0),
        X = s.useRef(0),
        W = (0, N.YE)(V, L.PremiumTypes.TIER_2),
        K = (0, r.bG)([v.A], () => v.A.hasFetched);
    s.useEffect(() => {
        K || c.xG();
    }, [K]),
        s.useEffect(() => {
            d.h.wait(async () => {
                let e = Date.now();
                await Promise.all([c.hP(), c.$o(), (0, u.zS)(null, null, D.tF5.DISCOVERY)]),
                    (X.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        s.useEffect(() => {
            Y ||
                b.default.track(D.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: X.current,
                });
        }, [l, Y]),
        s.useEffect(() => {
            n && (null != H || null != B) && (0, O.u1)(H, B);
        }, [n, H, B]);
    let Z = (0, r.bG)([S.A], () => S.A.enabled),
        q = t === L.Mf.ApplicationStoreHome,
        J = Z
            ? (0, i.jsx)(_.A, {})
            : n
              ? (0, i.jsx)(x.uK, {})
              : q && W
                ? (0, i.jsx)(m.f5, { value: M, children: (0, i.jsx)(j.A, { userId: w }) })
                : U && F && k
                  ? null
                  : (0, i.jsx)("div", { className: a()(G.kL, G.Lq), children: (0, i.jsx)(o.y$y, {}) });
    return null != J
        ? (0, i.jsxs)(i.Fragment, { children: [q && (0, i.jsx)(g.A, {}), J] })
        : (0, i.jsx)(m.f5, { value: M, children: (0, i.jsx)(P.A, { entrypoint: t }) });
};
