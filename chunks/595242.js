n.d(t, { Z: () => f });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    h = n(821849),
    m = n(15640),
    g = n(314684),
    x = n(899667),
    _ = n(853872),
    p = n(78839),
    E = n(783739),
    C = n(981631),
    N = n(638164);
function f() {
    s.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, h.Y2)(null, null, C.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, a.cj)([p.ZP], () => ({
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions(),
            premiumSubscription: p.ZP.getPremiumTypeSubscription()
        })),
        n = (0, m.V)(),
        l = (0, a.e7)([_.Z], () => _.Z.hasFetchedPaymentSources),
        f = (0, a.e7)([x.Z], () => x.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, g.JR)(), e && n && l && !f)
        ? (0, i.jsxs)('div', {
              className: N.container,
              children: [
                  (0, i.jsx)('div', { className: N.background }),
                  (0, i.jsx)('div', {
                      className: N.content,
                      children: (0, i.jsx)(E.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: r()(N.container, N.loading),
              children: (0, i.jsx)(o.$jN, {})
          });
}
