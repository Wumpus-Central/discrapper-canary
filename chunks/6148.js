n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(904245),
    r = n(665906),
    o = n(314897),
    d = n(418476),
    c = n(388032);
function u(e, t) {
    let n = (0, l.e7)([o.default], () => o.default.getId()),
        u = (0, r.$R)(t),
        g = (0, r.Gu)(t);
    return (0, d.Z)(e, n) && u && !g
        ? (0, i.jsx)(a.sNh, {
              id: 'edit',
              label: c.intl.string(c.t.fsBWmZ),
              action: () => s.Z.startEditMessage(t.id, e.id, e.content),
              icon: a.vdY
          })
        : null;
}
