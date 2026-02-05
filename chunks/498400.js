n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(73825),
    _ = n(974544),
    m = n(107834),
    A = n(793574),
    g = n(688810),
    E = n(86379),
    h = n(160946),
    p = n(459793),
    C = n(726649),
    x = n(611924),
    T = n(351906),
    I = n(287809),
    S = n(295405),
    f = n(166403),
    N = n(954571),
    b = n(474090),
    R = n(560138),
    v = n(694080),
    O = n(170887),
    j = n(553081),
    P = n(422936),
    y = n(234419),
    L = n(558533),
    D = n(788868),
    M = n(652215),
    G = n(615434);
let U = function (e) {
    let { entrypoint: t = D.Mf.UserSettings } = e;
    (0, x.P)(C.b);
    let n = (0, E.H)(),
        { sourceAnalyticsLocations: r, analyticsLocations: U } = (0, g.Ay)(A.A.PREMIUM_MARKETING),
        k = (0, l.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
        B = (0, l.bG)([S.A], () => S.A.hasFetchedPaymentSources),
        w = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        H = w?.id,
        V = (0, y.V)(),
        F = (0, P.O)(),
        Y = (0, h.Y)(D.T7),
        [W, z] = s.useState(!0),
        K = s.useRef(0),
        Z = (0, b.YE)(w, D.PremiumTypes.TIER_2),
        X = (0, O.A)({ location: "PremiumHomePage" }),
        q = (0, l.bG)([R.A], () => R.A.hasFetched);
    s.useEffect(() => {
        q || d.xG();
    }, [q]),
        s.useEffect(() => {
            c.h.wait(async () => {
                let e = Date.now();
                await Promise.all([d.hP(), d.$o(), (0, u.zS)(null, null, M.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        s.useEffect(() => {
            W ||
                N.default.track(M.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: K.current,
                });
        }, [r, W]),
        s.useEffect(() => {
            n && (null != V || null != F) && (0, v.u1)(V, F);
        }, [n, V, F]);
    let J = (0, l.bG)([T.A], () => T.A.enabled),
        Q = t === D.Mf.ApplicationStoreHome,
        $ = J
            ? (0, i.jsx)(_.A, {})
            : n
              ? (0, i.jsx)(p.uK, {})
              : Q && Z
                ? (0, i.jsx)(g.f5, { value: U, children: (0, i.jsx)(j.A, { userId: H }) })
                : k && Y && B
                  ? null
                  : (0, i.jsx)("div", { className: a()(G.kL, G.Lq), children: (0, i.jsx)(o.y$y, {}) });
    return null != $
        ? (0, i.jsxs)(i.Fragment, { children: [Q && (0, i.jsx)(m.A, {}), $] })
        : (0, i.jsxs)(g.f5, {
              value: U,
              children: [Q && !X && (0, i.jsx)(m.A, {}), (0, i.jsx)(L.A, { entrypoint: t })],
          });
};
