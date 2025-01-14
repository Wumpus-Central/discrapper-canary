t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(904245),
    o = t(665906),
    s = t(314897),
    u = t(418476),
    c = t(388032);
function d(e, n) {
    let t = (0, l.e7)([s.default], () => s.default.getId()),
        d = (0, o.$R)(n),
        m = (0, o.Gu)(n);
    return (0, u.Z)(e, t) && d && !m
        ? (0, i.jsx)(r.MenuItem, {
              id: 'edit',
              label: c.intl.string(c.t.fsBWmZ),
              action: () => a.Z.startEditMessage(n.id, e.id, e.content),
              icon: r.PencilIcon
          })
        : null;
}
