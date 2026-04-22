n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(289873),
    d = n(73153),
    u = n(923408),
    c = n(73825),
    g = n(323082),
    m = n(160946),
    _ = n(178929),
    A = n(859241),
    h = n(295405),
    p = n(166403),
    x = n(767692),
    E = n(196199),
    T = n(652215),
    S = n(752606);
function f() {
    let e = (0, _.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            g.hP(), g.$o(), (0, u.CD)(), (0, c.zS)(null, null, T.tF5.DISCOVERY), (0, u.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, r.cf)([p.A], () => ({
            hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
            premiumSubscription: p.A.getPremiumTypeSubscription(),
        })),
        l = (0, m.Y)(),
        f = (0, r.bG)([h.A], () => h.A.hasFetchedPaymentSources),
        b = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts),
        C = !t || !l || !f || b,
        [v, N] = s.useState(!1);
    return (C || v || N(!0), C && !v)
        ? (0, i.jsx)("div", { className: a()(S.kL, S.Lq), children: (0, i.jsx)(o.y, {}) })
        : (0, i.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, i.jsx)("div", { className: S.Tp }),
                  (0, i.jsx)("div", {
                      className: S.Qs,
                      children: e
                          ? (0, i.jsx)(E.A, { premiumSubscription: n })
                          : (0, i.jsx)(x.A, { premiumSubscription: n }),
                  }),
              ],
          });
}
