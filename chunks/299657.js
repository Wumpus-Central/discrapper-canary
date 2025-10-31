n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(355467),
    d = n(821849),
    f = n(497321),
    _ = n(632257),
    p = n(100527),
    h = n(906732),
    m = n(211242),
    g = n(15640),
    E = n(89057),
    b = n(433811),
    y = n(214852),
    O = n(246946),
    v = n(594174),
    I = n(853872),
    T = n(78839),
    S = n(626135),
    A = n(111361),
    C = n(357355),
    N = n(937579),
    R = n(283066),
    P = n(104494),
    w = n(639119),
    D = n(2359),
    x = n(132547),
    L = n(474936),
    M = n(981631),
    j = n(166893);
let k = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, y.z)(b.X);
    let n = (0, m.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: k } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
        U = (0, s.e7)([T.Z], () => T.Z.hasFetchedSubscriptions()),
        G = (0, s.e7)([I.Z], () => I.Z.hasFetchedPaymentSources),
        B = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        Z = null == B ? void 0 : B.id,
        F = (0, w.N)(),
        V = (0, P.Ng)(),
        H = (0, g.V)(L.nS),
        [Y, W] = i.useState(!0),
        K = i.useRef(0),
        z = (0, A.M5)(B, L.PremiumTypes.TIER_2),
        q = (0, R.Z)({ location: "PremiumMarketingPage" }),
        X = (0, s.e7)([C.Z], () => C.Z.hasFetched);
    i.useEffect(() => {
        X || u.MH();
    }, [X]),
        i.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([u.jg(), u.tZ(), (0, d.Y2)(null, null, M.JjL.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    W(!1);
            });
        }, []),
        i.useEffect(() => {
            Y ||
                S.default.track(M.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: K.current,
                });
        }, [a, Y]),
        i.useEffect(() => {
            n && (null != F || null != V) && (0, N.ab)(F, V);
        }, [n, F, V]);
    let Q = (0, s.e7)([O.Z], () => O.Z.enabled),
        J = t === L.EZ.ApplicationStoreHome,
        $ = Q
            ? (0, r.jsx)(f.Z, {})
            : n
              ? (0, r.jsx)(E.c8, {})
              : J && z
                ? (0, r.jsx)(h.Gt, {
                      value: k,
                      children: (0, r.jsx)(x.Z, { userId: Z }),
                  })
                : U && H && G
                  ? null
                  : (0, r.jsx)("div", {
                        className: o()(j.container, j.loading),
                        children: (0, r.jsx)(l.$jN, {}),
                    });
    return null != $
        ? (0, r.jsxs)(r.Fragment, {
              children: [J && (0, r.jsx)(_.Z, {}), $],
          })
        : (0, r.jsxs)(h.Gt, {
              value: k,
              children: [J && !q && (0, r.jsx)(_.Z, {}), (0, r.jsx)(D.Z, { entrypoint: t })],
          });
};
