n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(904245),
    o = n(665906),
    s = n(314897),
    c = n(418476),
    u = n(388032);
function d(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getId()),
        d = (0, o.$R)(t),
        f = (0, o.Gu)(t);
    return (0, c.Z)(e, n) && d && !f
        ? (0, r.jsx)(l.sNh, {
              id: 'edit',
              label: u.NW.string(u.t.fsBWmZ),
              action: () => a.Z.startEditMessage(t.id, e.id, e.content),
              icon: l.vdY
          })
        : null;
}
