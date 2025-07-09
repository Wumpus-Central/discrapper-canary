(n.d(t, { Z: () => U }), n(388685));
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
    R = n(91802),
    D = n(104494),
    Z = n(639119),
    w = n(2359),
    k = n(132547),
    L = n(474936),
    B = n(981631),
    M = n(126867);
let U = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, E.z)(j.X);
    let n = (0, b.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: U } = (0, f.ZP)(h.Z.PREMIUM_MARKETING),
        V = (0, l.e7)([T.Z], () => T.Z.hasFetchedSubscriptions()),
        G = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
        F = null == G ? void 0 : G.id,
        H = (0, Z.N)(),
        z = (0, D.Ng)(),
        W = (0, x.V)(),
        [Y, K] = r.useState(!0),
        q = r.useRef(0),
        X = (0, I.M5)(G, L.p9.TIER_2),
        Q = (0, R.n)(),
        J = null == Q ? void 0 : Q.countryCode,
        $ = (0, P.Z)({ location: 'PremiumMarketingPage' }),
        ee = (0, l.e7)([O.Z], () => (null != G ? O.Z.getUserProfile(G.id) : null)),
        et = (0, l.e7)([y.Z], () => y.Z.hasFetched);
    (r.useEffect(() => {
        et || d.MH();
    }, [et]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                (await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(J, null, B.JjL.DISCOVERY), null != F && X && (0, C.Z)(F)]), (q.current = Date.now() - e), K(!1));
            });
        }, [J, F, X]),
        r.useEffect(() => {
            n && (null != H || null != z) && (0, A.a)(H, z);
        }, [n, H, z]),
        r.useEffect(() => {
            Y ||
                N.default.track(B.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: q.current
                });
        }, [s, Y]));
    let en = (0, l.e7)([v.Z], () => v.Z.enabled),
        ei = t === L.EZ.ApplicationStoreHome,
        er = en
            ? (0, i.jsx)(p.Z, {})
            : n
              ? (0, i.jsx)(_.c8, {})
              : ei && X
                ? null == ee
                    ? (0, i.jsx)('div', {
                          className: a()(M.container, M.loading),
                          children: (0, i.jsx)(o.$jN, {})
                      })
                    : (0, i.jsx)(f.Gt, {
                          value: U,
                          children: (0, i.jsx)(k.Z, {})
                      })
                : V && W && !Y
                  ? null
                  : (0, i.jsx)('div', {
                        className: a()(M.container, M.loading),
                        children: (0, i.jsx)(o.$jN, {})
                    });
    return null != er
        ? (0, i.jsxs)(i.Fragment, {
              children: [ei && (0, i.jsx)(g.Z, {}), er]
          })
        : (0, i.jsxs)(f.Gt, {
              value: U,
              children: [ei && !$ && (0, i.jsx)(g.Z, {}), (0, i.jsx)(w.Z, { entrypoint: t })]
          });
};
