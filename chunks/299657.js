n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(232567),
    _ = n(497321),
    p = n(100527),
    f = n(906732),
    h = n(211242),
    x = n(15640),
    E = n(89057),
    C = n(433811),
    b = n(214852),
    v = n(621853),
    T = n(246946),
    N = n(594174),
    I = n(78839),
    R = n(626135),
    j = n(111361),
    S = n(357355),
    A = n(937579),
    P = n(91802),
    Z = n(104494),
    w = n(639119),
    M = n(943180),
    B = n(2359),
    y = n(132547),
    k = n(474936),
    O = n(981631),
    L = n(180144);
let D = function (e) {
    let { entrypoint: t = k.EZ.UserSettings } = e;
    (0, b.z)(C.X);
    let n = (0, h.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: D } = (0, f.ZP)(p.Z.PREMIUM_MARKETING),
        U = (0, l.e7)([I.ZP], () => I.ZP.hasFetchedSubscriptions()),
        G = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        V = null == G ? void 0 : G.id,
        H = (0, w.N)(),
        F = (0, Z.Ng)(),
        W = (0, x.V)(),
        [z, Y] = r.useState(!0),
        q = r.useRef(0),
        Q = (0, j.M5)(G, k.p9.TIER_2),
        K = (0, P.n)(),
        X = null == K ? void 0 : K.countryCode,
        { enabled: J } = (0, M.D)(),
        $ = (0, l.e7)([v.Z], () => (null != G ? v.Z.getUserProfile(G.id) : null)),
        ee = (0, l.e7)([S.Z], () => S.Z.hasFetched);
    return (r.useEffect(() => {
        ee || d.MH();
    }, [ee]),
    r.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(X, null, O.JjL.DISCOVERY), null != V && J && Q && (0, g.In)(V)]), (q.current = Date.now() - e), Y(!1);
        });
    }, [X, V, J, Q]),
    r.useEffect(() => {
        n && (null != H || null != F) && (0, A.a)(H, F);
    }, [n, H, F]),
    r.useEffect(() => {
        z ||
            R.default.track(O.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: a,
                load_duration_ms: q.current
            });
    }, [a, z]),
    (0, l.e7)([T.Z], () => T.Z.enabled))
        ? (0, i.jsx)(_.Z, {})
        : n
          ? (0, i.jsx)(E.c8, {})
          : t === k.EZ.ApplicationStoreHome && Q
            ? J && null == $
                ? (0, i.jsx)('div', {
                      className: s()(L.container, L.loading),
                      children: (0, i.jsx)(o.$jN, {})
                  })
                : (0, i.jsx)(f.Gt, {
                      value: D,
                      children: (0, i.jsx)(y.Z, {})
                  })
            : U && W && !z
              ? (0, i.jsx)(f.Gt, {
                    value: D,
                    children: (0, i.jsx)(B.Z, { entrypoint: t })
                })
              : (0, i.jsx)('div', {
                    className: s()(L.container, L.loading),
                    children: (0, i.jsx)(o.$jN, {})
                });
};
