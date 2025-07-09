n.d(t, { Z: () => j });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
    x = n(981631),
    _ = n(117527);
function j() {
    r.useEffect(() => {
        c.Z.wait(() => {
            (d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, x.JjL.DISCOVERY), (0, u.tH)(!0));
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, l.cj)([f.Z], () => ({
            hasFetchedSubscriptions: f.Z.hasFetchedSubscriptions(),
            premiumSubscription: f.Z.getPremiumTypeSubscription()
        })),
        n = (0, p.V)(),
        s = (0, l.e7)([h.Z], () => h.Z.hasFetchedPaymentSources),
        j = (0, l.e7)([g.Z], () => g.Z.isFetchingCurrentUserAppliedBoosts);
    return e && n && s && !j
        ? (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)('div', { className: _.background }),
                  (0, i.jsx)('div', {
                      className: _.content,
                      children: (0, i.jsx)(b.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: a()(_.container, _.loading),
              children: (0, i.jsx)(o.$jN, {})
          });
}
