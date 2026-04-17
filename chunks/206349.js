n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(923408),
    u = n(73825),
    m = n(323082),
    g = n(160946),
    _ = n(178929),
    x = n(859241),
    h = n(295405),
    A = n(166403),
    p = n(767692),
    T = n(196199),
    f = n(652215),
    S = n(752606);
function E() {
    let e = (0, _.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            m.hP(), m.$o(), (0, c.CD)(), (0, u.zS)(null, null, f.tF5.DISCOVERY), (0, c.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, a.cf)([A.A], () => ({
            hasFetchedSubscriptions: A.A.hasFetchedSubscriptions(),
            premiumSubscription: A.A.getPremiumTypeSubscription(),
        })),
        l = (0, g.Y)(),
        E = (0, a.bG)([h.A], () => h.A.hasFetchedPaymentSources),
        b = (0, a.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts),
        C = !t || !l || !E || b,
        [v, N] = s.useState(!1);
    return (C || v || N(!0), C && !v)
        ? (0, i.jsx)("div", { className: r()(S.kL, S.Lq), children: (0, i.jsx)(o.y$y, {}) })
        : (0, i.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, i.jsx)("div", { className: S.Tp }),
                  (0, i.jsx)("div", {
                      className: S.Qs,
                      children: e
                          ? (0, i.jsx)(T.A, { premiumSubscription: n })
                          : (0, i.jsx)(p.A, { premiumSubscription: n }),
                  }),
              ],
          });
}
