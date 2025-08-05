n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(904245),
    s = n(665906),
    l = n(314897),
    c = n(418476),
    u = n(388032);
function d(e, t) {
    let n = (0, i.e7)([l.default], () => l.default.getId()),
        d = (0, s.$R)(t),
        f = (0, s.Gu)(t);
    return (0, c.Z)(e, n) && d && !f
        ? (0, r.jsx)(a.sNh, {
              id: 'edit',
              label: u.intl.string(u.t.fsBWmZ),
              action: () => o.Z.startEditMessageRecord(t.id, e),
              icon: a.vdY
          })
        : null;
}
