r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(9161),
    s = r(456644),
    o = r(769140),
    l = r(382425);
function u(e) {
    let { location: n, profileGuildId: r, user: u, currentUser: c, ...d } = e,
        { recentActivityTabEnabled: f } = (0, a.O)({ location: n }),
        { recentActivityEnabled: _ } = (0, s.i)({ location: n }),
        h = f || _;
    return u.id !== c.id && h
        ? (0, i.jsx)(l.Z, {
              currentUser: c,
              user: u,
              profileGuildId: r,
              ...d
          })
        : (0, i.jsx)(o.Z, {
              currentUser: c,
              user: u,
              ...d
          });
}
