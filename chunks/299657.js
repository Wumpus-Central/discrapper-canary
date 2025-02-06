n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    h = n(232567),
    g = n(497321),
    _ = n(100527),
    x = n(906732),
    p = n(211242),
    E = n(15640),
    C = n(89057),
    f = n(433811),
    T = n(214852),
    N = n(621853),
    I = n(246946),
    S = n(594174),
    b = n(78839),
    v = n(626135),
    j = n(111361),
    A = n(357355),
    O = n(937579),
    R = n(91802),
    P = n(104494),
    D = n(639119),
    Z = n(943180),
    y = n(2359),
    k = n(132547),
    L = n(474936),
    B = n(981631),
    M = n(579521);
let w = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, T.z)(f.X);
    let n = (0, p.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: w } = (0, x.ZP)(_.Z.PREMIUM_MARKETING),
        V = (0, a.e7)([b.ZP], () => b.ZP.hasFetchedSubscriptions()),
        U = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        G = null == U ? void 0 : U.id,
        F = (0, D.N)(),
        H = (0, P.Ng)(),
        z = (0, E.V)(),
        [Y, W] = s.useState(!0),
        K = s.useRef(0),
        X = (0, j.M5)(U, L.p9.TIER_2),
        q = (0, R.n)(),
        J = null == q ? void 0 : q.countryCode,
        { enabled: Q } = (0, Z.D)(),
        $ = (0, a.e7)([N.Z], () => (null != U ? N.Z.getUserProfile(U.id) : null)),
        ee = (0, a.e7)([A.Z], () => A.Z.hasFetched);
    return (s.useEffect(() => {
        ee || d.MH();
    }, [ee]),
    s.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, m.Y2)(J, null, B.JjL.DISCOVERY), null != G && Q && X && (0, h.In)(G)]), (K.current = Date.now() - e), W(!1);
        });
    }, [J, G, Q, X]),
    s.useEffect(() => {
        n && (null != F || null != H) && (0, O.a)(F, H);
    }, [n, F, H]),
    s.useEffect(() => {
        Y ||
            v.default.track(B.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: r,
                load_duration_ms: K.current
            });
    }, [r, Y]),
    (0, a.e7)([I.Z], () => I.Z.enabled))
        ? (0, i.jsx)(g.Z, {})
        : n
          ? (0, i.jsx)(C.c8, {})
          : t === L.EZ.ApplicationStoreHome && X
            ? Q && null == $
                ? (0, i.jsx)('div', {
                      className: l()(M.container, M.loading),
                      children: (0, i.jsx)(o.$jN, {})
                  })
                : (0, i.jsx)(x.Gt, {
                      value: w,
                      children: (0, i.jsx)(k.Z, {})
                  })
            : V && z && !Y
              ? (0, i.jsx)(x.Gt, {
                    value: w,
                    children: (0, i.jsx)(y.Z, { entrypoint: t })
                })
              : (0, i.jsx)('div', {
                    className: l()(M.container, M.loading),
                    children: (0, i.jsx)(o.$jN, {})
                });
};
