n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(9161),
    a = n(456644),
    s = n(527790),
    o = n(248930);
function l(e) {
    let { location: t, user: n, currentUser: l, ...u } = e,
        { recentActivityTabEnabled: c } = (0, r.O)({ location: t }),
        { recentActivityEnabled: d } = (0, a.i)({ location: t });
    return (c || d) && n.id !== l.id && !n.bot
        ? (0, i.jsx)(o.Z, {
              user: n,
              ...u
          })
        : (0, i.jsx)(s.Z, {
              user: n,
              ...u
          });
}
