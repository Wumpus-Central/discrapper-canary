(n.d(t, { Z: () => B }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(497321),
    p = n(100527),
    h = n(906732),
    f = n(211242),
    b = n(15640),
    _ = n(89057),
    x = n(433811),
    E = n(214852),
    j = n(621853),
    C = n(484459),
    O = n(246946),
    S = n(594174),
    v = n(78839),
    T = n(626135),
    I = n(111361),
    N = n(357355),
    y = n(937579),
    A = n(91802),
    P = n(104494),
    R = n(639119),
    D = n(2359),
    Z = n(132547),
    w = n(474936),
    k = n(981631),
    L = n(126867);
let B = function (e) {
    let { entrypoint: t = w.EZ.UserSettings } = e;
    (0, E.z)(x.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: B } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
        M = (0, a.e7)([v.ZP], () => v.ZP.hasFetchedSubscriptions()),
        U = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        V = null == U ? void 0 : U.id,
        G = (0, R.N)(),
        F = (0, P.Ng)(),
        H = (0, b.V)(),
        [z, Y] = r.useState(!0),
        W = r.useRef(0),
        K = (0, I.M5)(U, w.p9.TIER_2),
        q = (0, A.n)(),
        X = null == q ? void 0 : q.countryCode,
        J = (0, a.e7)([j.Z], () => (null != U ? j.Z.getUserProfile(U.id) : null)),
        Q = (0, a.e7)([N.Z], () => N.Z.hasFetched);
    return (r.useEffect(() => {
        Q || d.MH();
    }, [Q]),
    r.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            (await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(X, null, k.JjL.DISCOVERY), null != V && K && (0, C.Z)(V)]), (W.current = Date.now() - e), Y(!1));
        });
    }, [X, V, K]),
    r.useEffect(() => {
        n && (null != G || null != F) && (0, y.a)(G, F);
    }, [n, G, F]),
    r.useEffect(() => {
        z ||
            T.default.track(k.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: s,
                load_duration_ms: W.current
            });
    }, [s, z]),
    (0, a.e7)([O.Z], () => O.Z.enabled))
        ? (0, i.jsx)(g.Z, {})
        : n
          ? (0, i.jsx)(_.c8, {})
          : t === w.EZ.ApplicationStoreHome && K
            ? null == J
                ? (0, i.jsx)('div', {
                      className: l()(L.container, L.loading),
                      children: (0, i.jsx)(o.$jN, {})
                  })
                : (0, i.jsx)(h.Gt, {
                      value: B,
                      children: (0, i.jsx)(Z.Z, {})
                  })
            : M && H && !z
              ? (0, i.jsx)(h.Gt, {
                    value: B,
                    children: (0, i.jsx)(D.Z, { entrypoint: t })
                })
              : (0, i.jsx)('div', {
                    className: l()(L.container, L.loading),
                    children: (0, i.jsx)(o.$jN, {})
                });
};
