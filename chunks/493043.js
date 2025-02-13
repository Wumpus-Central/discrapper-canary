n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(456644),
    a = n(769140),
    s = n(382425);
function o(e) {
    let { location: t, profileGuildId: n, user: o, currentUser: l, ...u } = e,
        { recentActivityEnabled: c } = (0, r.i)({ location: t });
    return o.id !== l.id && c
        ? (0, i.jsx)(s.Z, {
              currentUser: l,
              user: o,
              profileGuildId: n,
              ...u
          })
        : (0, i.jsx)(a.Z, {
              currentUser: l,
              user: o,
              ...u
          });
}
