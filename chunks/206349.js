n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    m = n(73825),
    _ = n(160946),
    g = n(178929),
    x = n(859241),
    A = n(295405),
    h = n(166403),
    p = n(767692),
    f = n(196199),
    T = n(652215),
    S = n(896645);
function E() {
    let e = (0, g.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, m.zS)(null, null, T.tF5.DISCOVERY), (0, u.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, r.cf)([h.A], () => ({
            hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
            premiumSubscription: h.A.getPremiumTypeSubscription(),
        })),
        l = (0, _.Y)(),
        E = (0, r.bG)([A.A], () => A.A.hasFetchedPaymentSources),
        b = (0, r.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
    return t && l && E && !b
        ? (0, i.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, i.jsx)("div", { className: S.Tp }),
                  (0, i.jsx)("div", {
                      className: S.Qs,
                      children: e
                          ? (0, i.jsx)(f.A, { premiumSubscription: n })
                          : (0, i.jsx)(p.A, { premiumSubscription: n }),
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(S.kL, S.Lq), children: (0, i.jsx)(o.y$y, {}) });
}
