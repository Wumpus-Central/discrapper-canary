n.d(t, { Z: () => M }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    p = n(497321),
    g = n(100527),
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
    D = n(943180),
    Z = n(2359),
    w = n(132547),
    k = n(474936),
    L = n(981631),
    B = n(126867);
let M = function (e) {
    let { entrypoint: t = k.EZ.UserSettings } = e;
    (0, E.z)(x.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: M } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        U = (0, a.e7)([v.ZP], () => v.ZP.hasFetchedSubscriptions()),
        V = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        G = null == V ? void 0 : V.id,
        F = (0, R.N)(),
        H = (0, P.Ng)(),
        z = (0, b.V)(),
        [W, Y] = r.useState(!0),
        K = r.useRef(0),
        q = (0, I.M5)(V, k.p9.TIER_2),
        X = (0, A.n)(),
        Q = null == X ? void 0 : X.countryCode,
        { enabled: J } = (0, D.D)(),
        $ = (0, a.e7)([j.Z], () => (null != V ? j.Z.getUserProfile(V.id) : null)),
        ee = (0, a.e7)([N.Z], () => N.Z.hasFetched);
    return (r.useEffect(() => {
        ee || d.MH();
    }, [ee]),
    r.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(Q, null, L.JjL.DISCOVERY), null != G && J && q && (0, C.Z)(G)]), (K.current = Date.now() - e), Y(!1);
        });
    }, [Q, G, J, q]),
    r.useEffect(() => {
        n && (null != F || null != H) && (0, y.a)(F, H);
    }, [n, F, H]),
    r.useEffect(() => {
        W ||
            T.default.track(L.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: s,
                load_duration_ms: K.current
            });
    }, [s, W]),
    (0, a.e7)([O.Z], () => O.Z.enabled))
        ? (0, i.jsx)(p.Z, {})
        : n
          ? (0, i.jsx)(_.c8, {})
          : t === k.EZ.ApplicationStoreHome && q
            ? J && null == $
                ? (0, i.jsx)('div', {
                      className: l()(B.container, B.loading),
                      children: (0, i.jsx)(o.$jN, {})
                  })
                : (0, i.jsx)(h.Gt, {
                      value: M,
                      children: (0, i.jsx)(w.Z, {})
                  })
            : U && z && !W
              ? (0, i.jsx)(h.Gt, {
                    value: M,
                    children: (0, i.jsx)(Z.Z, { entrypoint: t })
                })
              : (0, i.jsx)('div', {
                    className: l()(B.container, B.loading),
                    children: (0, i.jsx)(o.$jN, {})
                });
};
