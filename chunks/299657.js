n.d(t, { Z: () => V }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(570140),
    u = n(355467),
    m = n(179360),
    g = n(821849),
    p = n(497321),
    h = n(100527),
    f = n(906732),
    b = n(211242),
    N = n(15640),
    x = n(89057),
    _ = n(605236),
    E = n(433811),
    j = n(214852),
    O = n(621853),
    C = n(484459),
    S = n(246946),
    v = n(594174),
    T = n(78839),
    I = n(626135),
    y = n(111361),
    A = n(357355),
    P = n(937579),
    R = n(91802),
    D = n(104494),
    Z = n(639119),
    w = n(943180),
    k = n(2359),
    W = n(132547),
    L = n(474936),
    B = n(981631),
    M = n(921944),
    U = n(126867);
let V = function (e) {
    let { entrypoint: t = L.EZ.UserSettings } = e;
    (0, j.z)(E.X);
    let n = (0, b.Q)(),
        { sourceAnalyticsLocations: s, analyticsLocations: V } = (0, f.ZP)(h.Z.PREMIUM_MARKETING),
        G = (0, l.e7)([T.ZP], () => T.ZP.hasFetchedSubscriptions()),
        F = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        H = null == F ? void 0 : F.id,
        z = (0, Z.N)(),
        Y = (0, D.Ng)(),
        K = (0, N.V)(),
        [q, X] = i.useState(!0),
        J = i.useRef(0),
        Q = (0, y.M5)(F, L.p9.TIER_2);
    !0 !== (0, _.wE)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE) && (0, _.EW)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE, { dismissAction: M.L.TAKE_ACTION }), !0 !== (0, _.wE)(o.z.PERMADECOS_NITRO_TAB_NEW_BADGE) && (0, _.EW)(o.z.PERMADECOS_NITRO_TAB_NEW_BADGE, { dismissAction: M.L.TAKE_ACTION });
    let $ = (0, R.n)(),
        ee = null == $ ? void 0 : $.countryCode,
        { enabled: et } = (0, w.D)(),
        en = (0, l.e7)([O.Z], () => (null != F ? O.Z.getUserProfile(F.id) : null)),
        er = (0, l.e7)([A.Z], () => A.Z.hasFetched);
    return (i.useEffect(() => {
        er || u.MH();
    }, [er]),
    i.useEffect(() => {
        d.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([u.jg(), (0, m.X8)(), u.tZ(), (0, g.Y2)(ee, null, B.JjL.DISCOVERY), null != H && et && Q && (0, C.Z)(H)]), (J.current = Date.now() - e), X(!1);
        });
    }, [ee, H, et, Q]),
    i.useEffect(() => {
        n && (null != z || null != Y) && (0, P.a)(z, Y);
    }, [n, z, Y]),
    i.useEffect(() => {
        q ||
            I.default.track(B.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: s,
                load_duration_ms: J.current
            });
    }, [s, q]),
    (0, l.e7)([S.Z], () => S.Z.enabled))
        ? (0, r.jsx)(p.Z, {})
        : n
          ? (0, r.jsx)(x.c8, {})
          : t === L.EZ.ApplicationStoreHome && Q
            ? et && null == en
                ? (0, r.jsx)('div', {
                      className: a()(U.container, U.loading),
                      children: (0, r.jsx)(c.$jN, {})
                  })
                : (0, r.jsx)(f.Gt, {
                      value: V,
                      children: (0, r.jsx)(W.Z, {})
                  })
            : G && K && !q
              ? (0, r.jsx)(f.Gt, {
                    value: V,
                    children: (0, r.jsx)(k.Z, { entrypoint: t })
                })
              : (0, r.jsx)('div', {
                    className: a()(U.container, U.loading),
                    children: (0, r.jsx)(c.$jN, {})
                });
};
