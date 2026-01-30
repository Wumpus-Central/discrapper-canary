n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(73825),
    _ = n(974544),
    p = n(107834),
    m = n(793574),
    g = n(688810),
    A = n(86379),
    f = n(160946),
    b = n(459793),
    h = n(726649),
    E = n(611924),
    O = n(351906),
    C = n(287809),
    x = n(295405),
    S = n(166403),
    T = n(954571),
    I = n(474090),
    y = n(560138),
    N = n(694080),
    j = n(170887),
    v = n(553081),
    P = n(422936),
    R = n(234419),
    D = n(558533),
    L = n(788868),
    w = n(652215),
    M = n(615434);
let G = function (e) {
    let { entrypoint: t = L.Mf.UserSettings } = e;
    (0, E.P)(h.b);
    let n = (0, A.H)(),
        { sourceAnalyticsLocations: l, analyticsLocations: G } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        U = (0, a.bG)([S.A], () => S.A.hasFetchedSubscriptions()),
        k = (0, a.bG)([x.A], () => x.A.hasFetchedPaymentSources),
        B = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        H = null == B ? void 0 : B.id,
        V = (0, R.V)(),
        F = (0, P.O)(),
        Y = (0, f.Y)(L.T7),
        [W, K] = i.useState(!0),
        z = i.useRef(0),
        Z = (0, I.YE)(B, L.PremiumTypes.TIER_2),
        X = (0, j.A)({
            location: "PremiumHomePage",
        }),
        q = (0, a.bG)([y.A], () => y.A.hasFetched);
    i.useEffect(() => {
        q || d.xG();
    }, [q]),
        i.useEffect(() => {
            c.h.wait(async () => {
                let e = Date.now();
                await Promise.all([d.hP(), d.$o(), (0, u.zS)(null, null, w.tF5.DISCOVERY)]),
                    (z.current = Date.now() - e),
                    K(!1);
            });
        }, []),
        i.useEffect(() => {
            W ||
                T.default.track(w.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: l,
                    load_duration_ms: z.current,
                });
        }, [l, W]),
        i.useEffect(() => {
            n && (null != V || null != F) && (0, N.u1)(V, F);
        }, [n, V, F]);
    let J = (0, a.bG)([O.A], () => O.A.enabled),
        Q = t === L.Mf.ApplicationStoreHome,
        $ = J
            ? (0, r.jsx)(_.A, {})
            : n
              ? (0, r.jsx)(b.uK, {})
              : Q && Z
                ? (0, r.jsx)(g.f5, {
                      value: G,
                      children: (0, r.jsx)(v.A, {
                          userId: H,
                      }),
                  })
                : U && Y && k
                  ? null
                  : (0, r.jsx)("div", {
                        className: s()(M.kL, M.Lq),
                        children: (0, r.jsx)(o.y$y, {}),
                    });
    return null != $
        ? (0, r.jsxs)(r.Fragment, {
              children: [Q && (0, r.jsx)(p.A, {}), $],
          })
        : (0, r.jsxs)(g.f5, {
              value: G,
              children: [
                  Q && !X && (0, r.jsx)(p.A, {}),
                  (0, r.jsx)(D.A, {
                      entrypoint: t,
                  }),
              ],
          });
};
