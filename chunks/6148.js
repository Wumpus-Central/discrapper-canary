n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(904245),
    a = n(665906),
    s = n(314897),
    c = n(418476),
    u = n(388032);
function d(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getId()),
        d = (0, a.$R)(t),
        f = (0, a.Gu)(t);
    return (0, c.Z)(e, n) && d && !f
        ? (0, r.jsx)(l.sNh, {
              id: "edit",
              label: u.intl.string(u.t.fsBWmS),
              action: () => o.Z.startEditMessageRecord(t.id, e),
              icon: l.vdY,
          })
        : null;
}
