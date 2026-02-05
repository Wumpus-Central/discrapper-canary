n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    h = n(73825),
    A = n(160946),
    g = n(859241),
    m = n(295405),
    p = n(166403),
    _ = n(653183),
    x = n(652215),
    f = n(417711);
function E() {
    l.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, h.zS)(null, null, x.tF5.DISCOVERY), (0, u.tO)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, r.cf)([p.A], () => ({
            hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
            premiumSubscription: p.A.getPremiumTypeSubscription(),
        })),
        n = (0, A.Y)(),
        s = (0, r.bG)([m.A], () => m.A.hasFetchedPaymentSources),
        E = (0, r.bG)([g.A], () => g.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && s && !E
        ? (0, i.jsxs)("div", {
              className: f.kL,
              children: [
                  (0, i.jsx)("div", { className: f.Tp }),
                  (0, i.jsx)("div", { className: f.Qs, children: (0, i.jsx)(_.A, { premiumSubscription: t }) }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(f.kL, f.Lq), children: (0, i.jsx)(o.y$y, {}) });
}
