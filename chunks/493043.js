n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(9161),
    a = n(456644),
    s = n(769140),
    o = n(382425);
function l(e) {
    let { location: t, profileGuildId: n, user: l, currentUser: u, ...c } = e,
        { recentActivityTabEnabled: d } = (0, r.O)({ location: t }),
        { recentActivityEnabled: f } = (0, a.i)({ location: t }),
        _ = d || f;
    return l.id !== u.id && _
        ? (0, i.jsx)(o.Z, {
              currentUser: u,
              user: l,
              profileGuildId: n,
              ...c
          })
        : (0, i.jsx)(s.Z, {
              currentUser: u,
              user: l,
              ...c
          });
}
