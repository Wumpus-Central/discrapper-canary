n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(904245),
    o = n(665906),
    s = n(314897),
    c = n(418476),
    u = n(388032);
function d(e, t) {
    let n = (0, r.e7)([s.default], () => s.default.getId()),
        d = (0, o.$R)(t),
        f = (0, o.Gu)(t);
    return (0, c.Z)(e, n) && d && !f
        ? (0, i.jsx)(l.sNh, {
              id: 'edit',
              label: u.intl.string(u.t.fsBWmZ),
              action: () => a.Z.startEditMessage(t.id, e.id, e.content),
              icon: l.vdY
          })
        : null;
}
