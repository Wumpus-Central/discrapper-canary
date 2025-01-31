n.d(t, { Z: () => T });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    h = n(15640),
    g = n(314684),
    _ = n(899667),
    x = n(853872),
    p = n(78839),
    E = n(783739),
    C = n(981631),
    f = n(688738);
function T() {
    s.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, C.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, a.cj)([p.ZP], () => ({
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions(),
            premiumSubscription: p.ZP.getPremiumTypeSubscription()
        })),
        n = (0, h.V)(),
        r = (0, a.e7)([x.Z], () => x.Z.hasFetchedPaymentSources),
        T = (0, a.e7)([_.Z], () => _.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, g.JR)(), e && n && r && !T)
        ? (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)('div', { className: f.background }),
                  (0, i.jsx)('div', {
                      className: f.content,
                      children: (0, i.jsx)(E.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: l()(f.container, f.loading),
              children: (0, i.jsx)(o.$jN, {})
          });
}
