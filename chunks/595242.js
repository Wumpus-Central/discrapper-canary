n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(15640),
    p = n(314684),
    h = n(899667),
    f = n(853872),
    b = n(78839),
    N = n(783739),
    x = n(981631),
    _ = n(248023);
function E() {
    i.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, x.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, l.cj)([b.ZP], () => ({
            hasFetchedSubscriptions: b.ZP.hasFetchedSubscriptions(),
            premiumSubscription: b.ZP.getPremiumTypeSubscription()
        })),
        n = (0, g.V)(),
        s = (0, l.e7)([f.Z], () => f.Z.hasFetchedPaymentSources),
        E = (0, l.e7)([h.Z], () => h.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, p.JR)(), e && n && s && !E)
        ? (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)('div', { className: _.background }),
                  (0, r.jsx)('div', {
                      className: _.content,
                      children: (0, r.jsx)(N.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, r.jsx)('div', {
              className: a()(_.container, _.loading),
              children: (0, r.jsx)(o.$jN, {})
          });
}
