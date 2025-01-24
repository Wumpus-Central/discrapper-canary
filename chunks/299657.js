n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(232567),
    h = n(497321),
    p = n(100527),
    x = n(906732),
    f = n(211242),
    E = n(15640),
    _ = n(89057),
    C = n(433811),
    T = n(214852),
    S = n(621853),
    b = n(246946),
    I = n(594174),
    N = n(78839),
    v = n(626135),
    A = n(111361),
    j = n(357355),
    O = n(937579),
    R = n(91802),
    P = n(104494),
    D = n(639119),
    y = n(943180),
    B = n(2359),
    Z = n(132547),
    L = n(474936),
    M = n(981631),
    k = n(579521);
t.Z = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, T.z)(C.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: w } = (0, x.ZP)(p.Z.PREMIUM_MARKETING),
        F = (0, l.e7)([N.ZP], () => N.ZP.hasFetchedSubscriptions()),
        U = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        V = null == U ? void 0 : U.id,
        G = (0, D.N)(),
        H = (0, P.Ng)(),
        Y = (0, E.V)(),
        [W, z] = r.useState(!0),
        K = r.useRef(0),
        q = (0, A.M5)(U, L.p9.TIER_2),
        Q = (0, R.n)(),
        X = null == Q ? void 0 : Q.countryCode,
        { enabled: J } = (0, y.D)(),
        $ = (0, l.e7)([S.Z], () => (null != U ? S.Z.getUserProfile(U.id) : null)),
        ee = (0, l.e7)([j.Z], () => j.Z.hasFetched);
    if (
        (r.useEffect(() => {
            !ee && d.MH();
        }, [ee]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(X, null, M.JjL.DISCOVERY), null != V && J && q && (0, g.In)(V)]), (K.current = Date.now() - e), z(!1);
            });
        }, [X, V, J, q]),
        r.useEffect(() => {
            n && (null != G || null != H) && (0, O.a)(G, H);
        }, [n, G, H]),
        r.useEffect(() => {
            !W &&
                v.default.track(M.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: K.current
                });
        }, [s, W]),
        (0, l.e7)([b.Z], () => b.Z.enabled))
    )
        return (0, i.jsx)(h.Z, {});
    if (n) return (0, i.jsx)(_.c8, {});
    if (t === L.EZ.ApplicationStoreHome && q)
        return J && null == $
            ? (0, i.jsx)('div', {
                  className: a()(k.container, k.loading),
                  children: (0, i.jsx)(o.Spinner, {})
              })
            : (0, i.jsx)(x.Gt, {
                  value: w,
                  children: (0, i.jsx)(Z.Z, {})
              });
    return F && Y && !W
        ? (0, i.jsx)(x.Gt, {
              value: w,
              children: (0, i.jsx)(B.Z, { entrypoint: t })
          })
        : (0, i.jsx)('div', {
              className: a()(k.container, k.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
};
