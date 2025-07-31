(n.d(t, { Z: () => L }), n(388685));
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
    C = n(853872),
    v = n(78839),
    S = n(626135),
    T = n(111361),
    N = n(357355),
    I = n(937579),
    y = n(220654),
    A = n(104494),
    P = n(639119),
    R = n(2359),
    D = n(132547),
    Z = n(474936),
    w = n(981631),
    k = n(126867);
let L = function (e) {
    let { entrypoint: t = Z.EZ.UserSettings } = e;
    (0, j.z)(_.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: L } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        B = (0, l.e7)([v.Z], () => v.Z.hasFetchedSubscriptions()),
        M = (0, l.e7)([C.Z], () => C.Z.hasFetchedPaymentSources),
        U = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        V = null == U ? void 0 : U.id,
        G = (0, P.N)(),
        F = (0, A.Ng)(),
        H = (0, b.V)(Z.nS),
        [z, W] = r.useState(!0),
        Y = r.useRef(0),
        K = (0, T.M5)(U, Z.p9.TIER_2),
        q = (0, y.Z)({ location: 'PremiumMarketingPage' }),
        X = (0, l.e7)([N.Z], () => N.Z.hasFetched);
    (r.useEffect(() => {
        X || d.MH();
    }, [X]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                (await Promise.all([d.jg(), d.tZ(), (0, u.Y2)(null, null, w.JjL.DISCOVERY)]), (Y.current = Date.now() - e), W(!1));
            });
        }, []),
        r.useEffect(() => {
            z ||
                S.default.track(w.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: Y.current
                });
        }, [s, z]),
        r.useEffect(() => {
            n && (null != G || null != F) && (0, I.a)(G, F);
        }, [n, G, F]));
    let J = (0, l.e7)([E.Z], () => E.Z.enabled),
        Q = t === Z.EZ.ApplicationStoreHome,
        $ = J
            ? (0, i.jsx)(m.Z, {})
            : n
              ? (0, i.jsx)(x.c8, {})
              : Q && K
                ? (0, i.jsx)(h.Gt, {
                      value: L,
                      children: (0, i.jsx)(D.Z, { userId: V })
                  })
                : B && H && M
                  ? null
                  : (0, i.jsx)('div', {
                        className: a()(k.container, k.loading),
                        children: (0, i.jsx)(o.$jN, {})
                    });
    return null != $
        ? (0, i.jsxs)(i.Fragment, {
              children: [Q && (0, i.jsx)(p.Z, {}), $]
          })
        : (0, i.jsxs)(h.Gt, {
              value: L,
              children: [Q && !q && (0, i.jsx)(p.Z, {}), (0, i.jsx)(R.Z, { entrypoint: t })]
          });
};
