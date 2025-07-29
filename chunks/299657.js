(n.d(t, { Z: () => k }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(821849),
    m = n(497321),
    p = n(632257),
    g = n(100527),
    h = n(906732),
    f = n(211242),
    b = n(15640),
    x = n(89057),
    _ = n(433811),
    j = n(214852),
    E = n(246946),
    O = n(594174),
    C = n(78839),
    v = n(626135),
    S = n(111361),
    T = n(357355),
    N = n(937579),
    I = n(220654),
    y = n(104494),
    A = n(639119),
    P = n(2359),
    R = n(132547),
    D = n(474936),
    Z = n(981631),
    w = n(126867);
let k = function (e) {
    let { entrypoint: t = D.EZ.UserSettings } = e;
    (0, j.z)(_.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: k } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        L = (0, l.e7)([C.Z], () => C.Z.hasFetchedSubscriptions()),
        B = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        M = null == B ? void 0 : B.id,
        U = (0, A.N)(),
        V = (0, y.Ng)(),
        G = (0, b.V)(),
        [F, H] = r.useState(!0),
        z = r.useRef(0),
        W = (0, S.M5)(B, D.p9.TIER_2),
        Y = (0, I.Z)({ location: 'PremiumMarketingPage' }),
        K = (0, l.e7)([T.Z], () => T.Z.hasFetched);
    (r.useEffect(() => {
        K || d.MH();
    }, [K]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                (await Promise.all([d.jg(), d.tZ(), (0, u.Y2)(null, null, Z.JjL.DISCOVERY)]), (z.current = Date.now() - e), H(!1));
            });
        }, []),
        r.useEffect(() => {
            n && (null != U || null != V) && (0, N.a)(U, V);
        }, [n, U, V]),
        r.useEffect(() => {
            F ||
                v.default.track(Z.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: z.current
                });
        }, [s, F]));
    let q = (0, l.e7)([E.Z], () => E.Z.enabled),
        X = t === D.EZ.ApplicationStoreHome,
        J = q
            ? (0, i.jsx)(m.Z, {})
            : n
              ? (0, i.jsx)(x.c8, {})
              : X && W
                ? (0, i.jsx)(h.Gt, {
                      value: k,
                      children: (0, i.jsx)(R.Z, { userId: M })
                  })
                : L && G && !F
                  ? null
                  : (0, i.jsx)('div', {
                        className: a()(w.container, w.loading),
                        children: (0, i.jsx)(o.$jN, {})
                    });
    return null != J
        ? (0, i.jsxs)(i.Fragment, {
              children: [X && (0, i.jsx)(p.Z, {}), J]
          })
        : (0, i.jsxs)(h.Gt, {
              value: k,
              children: [X && !Y && (0, i.jsx)(p.Z, {}), (0, i.jsx)(P.Z, { entrypoint: t })]
          });
};
