n.d(t, { Z: () => E });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    p = n(15640),
    g = n(899667),
    h = n(853872),
    f = n(78839),
    b = n(783739),
    _ = n(981631),
    x = n(117527);
function E() {
    r.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, _.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, a.cj)([f.ZP], () => ({
            hasFetchedSubscriptions: f.ZP.hasFetchedSubscriptions(),
            premiumSubscription: f.ZP.getPremiumTypeSubscription()
        })),
        n = (0, p.V)(),
        s = (0, a.e7)([h.Z], () => h.Z.hasFetchedPaymentSources),
        E = (0, a.e7)([g.Z], () => g.Z.isFetchingCurrentUserAppliedBoosts);
    return e && n && s && !E
        ? (0, i.jsxs)('div', {
              className: x.container,
              children: [
                  (0, i.jsx)('div', { className: x.background }),
                  (0, i.jsx)('div', {
                      className: x.content,
                      children: (0, i.jsx)(b.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: l()(x.container, x.loading),
              children: (0, i.jsx)(o.$jN, {})
          });
}
