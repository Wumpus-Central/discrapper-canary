n.d(t, { Z: () => G }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(570140),
    u = n(355467),
    m = n(179360),
    p = n(821849),
    g = n(497321),
    h = n(100527),
    f = n(906732),
    b = n(211242),
    _ = n(15640),
    x = n(89057),
    E = n(605236),
    j = n(433811),
    C = n(214852),
    O = n(621853),
    S = n(484459),
    v = n(246946),
    T = n(594174),
    I = n(78839),
    N = n(626135),
    y = n(111361),
    A = n(357355),
    P = n(937579),
    R = n(91802),
    D = n(104494),
    Z = n(639119),
    w = n(943180),
    k = n(2359),
    L = n(132547),
    B = n(474936),
    M = n(981631),
    U = n(921944),
    V = n(126867);
let G = function (e) {
    let { entrypoint: t = B.EZ.UserSettings } = e;
    (0, C.z)(j.X);
    let n = (0, b.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: G } = (0, f.ZP)(h.Z.PREMIUM_MARKETING),
        F = (0, a.e7)([I.ZP], () => I.ZP.hasFetchedSubscriptions()),
        H = (0, a.e7)([T.default], () => T.default.getCurrentUser()),
        z = null == H ? void 0 : H.id,
        W = (0, Z.N)(),
        Y = (0, D.Ng)(),
        K = (0, _.V)(),
        [q, X] = r.useState(!0),
        Q = r.useRef(0),
        J = (0, y.M5)(H, B.p9.TIER_2);
    !0 !== (0, E.wE)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE) && (0, E.EW)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE, { dismissAction: U.L.TAKE_ACTION });
    let $ = (0, R.n)(),
        ee = null == $ ? void 0 : $.countryCode,
        { enabled: et } = (0, w.D)(),
        en = (0, a.e7)([O.Z], () => (null != H ? O.Z.getUserProfile(H.id) : null)),
        ei = (0, a.e7)([A.Z], () => A.Z.hasFetched);
    return (r.useEffect(() => {
        ei || u.MH();
    }, [ei]),
    r.useEffect(() => {
        d.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([u.jg(), (0, m.X8)(), u.tZ(), (0, p.Y2)(ee, null, M.JjL.DISCOVERY), null != z && et && J && (0, S.Z)(z)]), (Q.current = Date.now() - e), X(!1);
        });
    }, [ee, z, et, J]),
    r.useEffect(() => {
        n && (null != W || null != Y) && (0, P.a)(W, Y);
    }, [n, W, Y]),
    r.useEffect(() => {
        q ||
            N.default.track(M.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: s,
                load_duration_ms: Q.current
            });
    }, [s, q]),
    (0, a.e7)([v.Z], () => v.Z.enabled))
        ? (0, i.jsx)(g.Z, {})
        : n
          ? (0, i.jsx)(x.c8, {})
          : t === B.EZ.ApplicationStoreHome && J
            ? et && null == en
                ? (0, i.jsx)('div', {
                      className: l()(V.container, V.loading),
                      children: (0, i.jsx)(c.$jN, {})
                  })
                : (0, i.jsx)(f.Gt, {
                      value: G,
                      children: (0, i.jsx)(L.Z, {})
                  })
            : F && K && !q
              ? (0, i.jsx)(f.Gt, {
                    value: G,
                    children: (0, i.jsx)(k.Z, { entrypoint: t })
                })
              : (0, i.jsx)('div', {
                    className: l()(V.container, V.loading),
                    children: (0, i.jsx)(c.$jN, {})
                });
};
