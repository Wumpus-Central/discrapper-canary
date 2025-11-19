n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(355467),
    d = n(179360),
    f = n(821849),
    _ = n(15640),
    p = n(899667),
    h = n(853872),
    m = n(78839),
    g = n(783739),
    E = n(981631),
    b = n(850213);
function y() {
    i.useEffect(() => {
        c.Z.wait(() => {
            u.jg(), u.tZ(), (0, d.X8)(), (0, f.Y2)(null, null, E.JjL.DISCOVERY), (0, d.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, s.cj)([m.Z], () => ({
            hasFetchedSubscriptions: m.Z.hasFetchedSubscriptions(),
            premiumSubscription: m.Z.getPremiumTypeSubscription(),
        })),
        n = (0, _.V)(),
        a = (0, s.e7)([h.Z], () => h.Z.hasFetchedPaymentSources),
        y = (0, s.e7)([p.Z], () => p.Z.isFetchingCurrentUserAppliedBoosts);
    return e && n && a && !y
        ? (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)("div", { className: b.background }),
                  (0, r.jsx)("div", {
                      className: b.content,
                      children: (0, r.jsx)(g.Z, { premiumSubscription: t }),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: o()(b.container, b.loading),
              children: (0, r.jsx)(l.$jN, {}),
          });
}
