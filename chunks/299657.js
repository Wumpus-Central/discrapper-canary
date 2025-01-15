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
    _ = n(15640),
    E = n(89057),
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
    R = n(471309),
    P = n(91802),
    y = n(104494),
    B = n(639119),
    D = n(2359),
    Z = n(132547),
    L = n(474936),
    M = n(981631),
    k = n(881507);
t.Z = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, T.z)(C.X);
    let n = (0, f.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: w } = (0, x.ZP)(p.Z.PREMIUM_MARKETING),
        U = (0, l.e7)([N.ZP], () => N.ZP.hasFetchedSubscriptions()),
        F = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        V = null == F ? void 0 : F.id,
        G = (0, B.N)(),
        H = (0, y.Ng)(),
        Y = (0, _.V)(),
        [W, z] = r.useState(!0),
        K = r.useRef(0),
        q = (0, A.M5)(F, L.p9.TIER_2),
        Q = (0, P.n)(),
        X = null == Q ? void 0 : Q.countryCode,
        { enabled: J } = (0, R.Z)(),
        $ = (0, l.e7)([S.Z], () => (null != F ? S.Z.getUserProfile(F.id) : null)),
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
    if (n) return (0, i.jsx)(E.c8, {});
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
    return U && Y && !W
        ? (0, i.jsx)(x.Gt, {
              value: w,
              children: (0, i.jsx)(D.Z, { entrypoint: t })
          })
        : (0, i.jsx)('div', {
              className: a()(k.container, k.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
};
