n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(456644),
    a = n(527790),
    s = n(248930);
function o(e) {
    let { location: t, user: n, currentUser: o, ...l } = e,
        { recentActivityEnabled: u } = (0, r.i)({ location: t });
    return u && n.id !== o.id && !n.bot
        ? (0, i.jsx)(s.Z, {
              user: n,
              ...l
          })
        : (0, i.jsx)(a.Z, {
              user: n,
              ...l
          });
}
