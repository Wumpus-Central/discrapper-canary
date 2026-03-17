n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    _ = n(73825),
    m = n(160946),
    g = n(178929),
    A = n(859241),
    h = n(295405),
    x = n(166403),
    p = n(653183),
    T = n(843838),
    E = n(652215),
    S = n(417711);
function C() {
    let e = (0, g.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, _.zS)(null, null, E.tF5.DISCOVERY), (0, u.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, r.cf)([x.A], () => ({
            hasFetchedSubscriptions: x.A.hasFetchedSubscriptions(),
            premiumSubscription: x.A.getPremiumTypeSubscription(),
        })),
        l = (0, m.Y)(),
        C = (0, r.bG)([h.A], () => h.A.hasFetchedPaymentSources),
        f = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts);
    return t && l && C && !f
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
