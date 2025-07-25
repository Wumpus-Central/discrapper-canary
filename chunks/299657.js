(n.d(t, { Z: () => M }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    p = n(497321),
    g = n(632257),
    h = n(100527),
    f = n(906732),
    b = n(211242),
    x = n(15640),
    _ = n(89057),
    j = n(433811),
    E = n(214852),
    O = n(621853),
    C = n(484459),
    v = n(246946),
    S = n(594174),
    T = n(78839),
    N = n(626135),
    I = n(111361),
    y = n(357355),
    A = n(937579),
    P = n(220654),
    R = n(104494),
    D = n(639119),
    Z = n(2359),
    w = n(132547),
    k = n(474936),
    L = n(981631),
    B = n(126867);
let M = function (e) {
    let { entrypoint: t = k.EZ.UserSettings } = e;
    (0, E.z)(j.X);
    let n = (0, b.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: M } = (0, f.ZP)(h.Z.PREMIUM_MARKETING),
        U = (0, l.e7)([T.Z], () => T.Z.hasFetchedSubscriptions()),
        V = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
        G = null == V ? void 0 : V.id,
        F = (0, D.N)(),
        H = (0, R.Ng)(),
        z = (0, x.V)(),
        [W, Y] = r.useState(!0),
        K = r.useRef(0),
        q = (0, I.M5)(V, k.p9.TIER_2),
        X = (0, P.Z)({ location: 'PremiumMarketingPage' }),
        J = (0, l.e7)([O.Z], () => (null != V ? O.Z.getUserProfile(V.id) : null)),
        Q = (0, l.e7)([y.Z], () => y.Z.hasFetched);
    (r.useEffect(() => {
        Q || d.MH();
    }, [Q]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                (await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(null, null, L.JjL.DISCOVERY), null != G && q && (0, C.Z)(G)]), (K.current = Date.now() - e), Y(!1));
            });
        }, [G, q]),
        r.useEffect(() => {
            n && (null != F || null != H) && (0, A.a)(F, H);
        }, [n, F, H]),
        r.useEffect(() => {
            W ||
                N.default.track(L.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: K.current
                });
        }, [s, W]));
    let $ = (0, l.e7)([v.Z], () => v.Z.enabled),
        ee = t === k.EZ.ApplicationStoreHome,
        et = $
            ? (0, i.jsx)(p.Z, {})
            : n
              ? (0, i.jsx)(_.c8, {})
              : ee && q
                ? null == J
                    ? (0, i.jsx)('div', {
                          className: a()(B.container, B.loading),
                          children: (0, i.jsx)(o.$jN, {})
                      })
                    : (0, i.jsx)(f.Gt, {
                          value: M,
                          children: (0, i.jsx)(w.Z, {})
                      })
                : U && z && !W
                  ? null
                  : (0, i.jsx)('div', {
                        className: a()(B.container, B.loading),
                        children: (0, i.jsx)(o.$jN, {})
                    });
    return null != et
        ? (0, i.jsxs)(i.Fragment, {
              children: [ee && (0, i.jsx)(g.Z, {}), et]
          })
        : (0, i.jsxs)(f.Gt, {
              value: M,
              children: [ee && !X && (0, i.jsx)(g.Z, {}), (0, i.jsx)(Z.Z, { entrypoint: t })]
          });
};
