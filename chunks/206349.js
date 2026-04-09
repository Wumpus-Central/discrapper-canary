n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(923408),
    u = n(73825),
    m = n(323082),
    g = n(160946),
    _ = n(178929),
    x = n(859241),
    A = n(295405),
    h = n(166403),
    p = n(767692),
    T = n(196199),
    f = n(652215),
    S = n(724227);
function b() {
    let e = (0, _.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            m.hP(), m.$o(), (0, c.CD)(), (0, u.zS)(null, null, f.tF5.DISCOVERY), (0, c.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, r.cf)([h.A], () => ({
            hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
            premiumSubscription: h.A.getPremiumTypeSubscription(),
        })),
        l = (0, g.Y)(),
        b = (0, r.bG)([A.A], () => A.A.hasFetchedPaymentSources),
        E = (0, r.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
    return t && l && b && !E
        ? (0, i.jsxs)("div", {
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
          })
        : (0, i.jsx)("div", { className: a()(S.kL, S.Lq), children: (0, i.jsx)(o.y$y, {}) });
}
