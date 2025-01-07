n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    g = n(821849),
    m = n(232567),
    f = n(497321),
    p = n(100527),
    _ = n(906732),
    h = n(211242),
    x = n(15640),
    E = n(89057),
    b = n(464824),
    C = n(214852),
    v = n(621853),
    T = n(246946),
    N = n(594174),
    I = n(78839),
    S = n(626135),
    R = n(111361),
    j = n(357355),
    A = n(937579),
    P = n(471309),
    O = n(91802),
    Z = n(104494),
    M = n(639119),
    B = n(2359),
    y = n(132547),
    w = n(474936),
    k = n(981631),
    L = n(579521);
t.Z = function (e) {
    let { entrypoint: t = w.EZ.UserSettings } = e;
    (0, C.z)(b.X);
    let n = (0, h.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: U } = (0, _.ZP)(p.Z.PREMIUM_MARKETING),
        D = (0, l.e7)([I.ZP], () => I.ZP.hasFetchedSubscriptions()),
        G = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        H = null == G ? void 0 : G.id,
        V = (0, M.N)(),
        F = (0, Z.Ng)(),
        W = (0, x.V)(),
        [z, Y] = r.useState(!0),
        K = r.useRef(0),
        Q = (0, R.M5)(G, w.p9.TIER_2),
        q = (0, O.n)(),
        J = null == q ? void 0 : q.countryCode,
        { enabled: X } = (0, P.Z)(),
        $ = (0, l.e7)([v.Z], () => (null != G ? v.Z.getUserProfile(G.id) : null)),
        ee = (0, l.e7)([j.Z], () => j.Z.hasFetched);
    if (
        (r.useEffect(() => {
            !ee && d.MH();
        }, [ee]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, g.Y2)(J, null, k.JjL.DISCOVERY), null != H && X && Q && (0, m.In)(H)]), (K.current = Date.now() - e), Y(!1);
            });
        }, [J, H, X, Q]),
        r.useEffect(() => {
            n && (null != V || null != F) && (0, A.a)(V, F);
        }, [n, V, F]),
        r.useEffect(() => {
            !z &&
                S.default.track(k.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: K.current
                });
        }, [a, z]),
        (0, l.e7)([T.Z], () => T.Z.enabled))
    )
        return (0, i.jsx)(f.Z, {});
    if (n) return (0, i.jsx)(E.c8, {});
    if (t === w.EZ.ApplicationStoreHome && Q)
        return X && null == $
            ? (0, i.jsx)('div', {
                  className: s()(L.container, L.loading),
                  children: (0, i.jsx)(o.Spinner, {})
              })
            : (0, i.jsx)(_.Gt, {
                  value: U,
                  children: (0, i.jsx)(y.Z, {})
              });
    return D && W && !z
        ? (0, i.jsx)(_.Gt, {
              value: U,
              children: (0, i.jsx)(B.Z, { entrypoint: t })
          })
        : (0, i.jsx)('div', {
              className: s()(L.container, L.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
};
