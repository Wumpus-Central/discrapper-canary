n.d(t, { Z: () => B }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(232567),
    p = n(497321),
    h = n(100527),
    f = n(906732),
    b = n(211242),
    N = n(15640),
    x = n(89057),
    _ = n(433811),
    E = n(214852),
    j = n(621853),
    C = n(246946),
    O = n(594174),
    v = n(78839),
    S = n(626135),
    T = n(111361),
    I = n(357355),
    y = n(937579),
    A = n(91802),
    P = n(104494),
    R = n(639119),
    D = n(943180),
    Z = n(2359),
    w = n(132547),
    k = n(474936),
    W = n(981631),
    L = n(153438);
let B = function (e) {
    let { entrypoint: t = k.EZ.UserSettings } = e;
    (0, E.z)(_.X);
    let n = (0, b.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: B } = (0, f.ZP)(h.Z.PREMIUM_MARKETING),
        M = (0, l.e7)([v.ZP], () => v.ZP.hasFetchedSubscriptions()),
        U = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        V = null == U ? void 0 : U.id,
        G = (0, R.N)(),
        F = (0, P.Ng)(),
        H = (0, N.V)(),
        [z, Y] = i.useState(!0),
        K = i.useRef(0),
        q = (0, T.M5)(U, k.p9.TIER_2),
        X = (0, A.n)(),
        J = null == X ? void 0 : X.countryCode,
        { enabled: Q } = (0, D.D)(),
        $ = (0, l.e7)([j.Z], () => (null != U ? j.Z.getUserProfile(U.id) : null)),
        ee = (0, l.e7)([I.Z], () => I.Z.hasFetched);
    return (i.useEffect(() => {
        ee || d.MH();
    }, [ee]),
    i.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(J, null, W.JjL.DISCOVERY), null != V && Q && q && (0, g.In)(V)]), (K.current = Date.now() - e), Y(!1);
        });
    }, [J, V, Q, q]),
    i.useEffect(() => {
        n && (null != G || null != F) && (0, y.a)(G, F);
    }, [n, G, F]),
    i.useEffect(() => {
        z ||
            S.default.track(W.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: s,
                load_duration_ms: K.current
            });
    }, [s, z]),
    (0, l.e7)([C.Z], () => C.Z.enabled))
        ? (0, r.jsx)(p.Z, {})
        : n
          ? (0, r.jsx)(x.c8, {})
          : t === k.EZ.ApplicationStoreHome && q
            ? Q && null == $
                ? (0, r.jsx)('div', {
                      className: a()(L.container, L.loading),
                      children: (0, r.jsx)(o.$jN, {})
                  })
                : (0, r.jsx)(f.Gt, {
                      value: B,
                      children: (0, r.jsx)(w.Z, {})
                  })
            : M && H && !z
              ? (0, r.jsx)(f.Gt, {
                    value: B,
                    children: (0, r.jsx)(Z.Z, { entrypoint: t })
                })
              : (0, r.jsx)('div', {
                    className: a()(L.container, L.loading),
                    children: (0, r.jsx)(o.$jN, {})
                });
};
