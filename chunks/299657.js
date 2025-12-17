n.d(t, { Z: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(355467),
    d = n(821849),
    f = n(497321),
    p = n(632257),
    _ = n(100527),
    m = n(906732),
    h = n(211242),
    g = n(15640),
    E = n(89057),
    b = n(433811),
    y = n(214852),
    O = n(246946),
    v = n(594174),
    S = n(853872),
    I = n(78839),
    T = n(626135),
    C = n(111361),
    A = n(357355),
    N = n(937579),
    P = n(283066),
    R = n(622909),
    w = n(639119),
    D = n(2359),
    x = n(132547),
    L = n(474936),
    j = n(981631),
    M = n(350549);
let k = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, y.z)(b.X);
    let n = (0, h.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: k } = (0, m.ZP)(_.Z.PREMIUM_MARKETING),
        U = (0, s.e7)([I.Z], () => I.Z.hasFetchedSubscriptions()),
        G = (0, s.e7)([S.Z], () => S.Z.hasFetchedPaymentSources),
        Z = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        F = null == Z ? void 0 : Z.id,
        B = (0, w.N)(),
        V = (0, R.N)(),
        H = (0, g.V)(L.nS),
        [Y, W] = i.useState(!0),
        K = i.useRef(0),
        z = (0, C.M5)(Z, L.PremiumTypes.TIER_2),
        q = (0, P.Z)({ location: "PremiumMarketingPage" }),
        Q = (0, s.e7)([A.Z], () => A.Z.hasFetched);
    i.useEffect(() => {
        Q || u.MH();
    }, [Q]),
        i.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([u.jg(), u.tZ(), (0, d.Y2)(null, null, j.JjL.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    W(!1);
            });
        }, []),
        i.useEffect(() => {
            Y ||
                T.default.track(j.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: K.current,
                });
        }, [a, Y]),
        i.useEffect(() => {
            n && (null != B || null != V) && (0, N.ab)(B, V);
        }, [n, B, V]);
    let X = (0, s.e7)([O.Z], () => O.Z.enabled),
        J = t === L.EZ.ApplicationStoreHome,
        $ = X
            ? (0, r.jsx)(f.Z, {})
            : n
              ? (0, r.jsx)(E.c8, {})
              : J && z
                ? (0, r.jsx)(m.Gt, {
                      value: k,
                      children: (0, r.jsx)(x.Z, { userId: F }),
                  })
                : U && H && G
                  ? null
                  : (0, r.jsx)("div", {
                        className: o()(M.container, M.loading),
                        children: (0, r.jsx)(l.$jN, {}),
                    });
    return null != $
        ? (0, r.jsxs)(r.Fragment, {
              children: [J && (0, r.jsx)(p.Z, {}), $],
          })
        : (0, r.jsxs)(m.Gt, {
              value: k,
              children: [J && !q && (0, r.jsx)(p.Z, {}), (0, r.jsx)(D.Z, { entrypoint: t })],
          });
};
