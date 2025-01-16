n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(15640),
    h = n(314684),
    p = n(899667),
    x = n(853872),
    f = n(78839),
    _ = n(783739),
    E = n(981631),
    C = n(688738);
function T() {
    r.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, E.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, l.cj)([f.ZP], () => ({
            hasFetchedSubscriptions: f.ZP.hasFetchedSubscriptions(),
            premiumSubscription: f.ZP.getPremiumTypeSubscription()
        })),
        n = (0, g.V)(),
        s = (0, l.e7)([x.Z], () => x.Z.hasFetchedPaymentSources),
        T = (0, l.e7)([p.Z], () => p.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, h.JR)(), e && n && s && !T)
        ? (0, i.jsxs)('div', {
              className: C.container,
              children: [
                  (0, i.jsx)('div', { className: C.background }),
                  (0, i.jsx)('div', {
                      className: C.content,
                      children: (0, i.jsx)(_.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: a()(C.container, C.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
}
