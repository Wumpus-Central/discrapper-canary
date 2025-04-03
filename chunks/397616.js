t.d(n, { Z: () => u });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(493683),
    a = t(592125),
    s = t(594174),
    c = t(388032);
function u(e, n) {
    var t;
    let u = (0, i.e7)([s.default], () => s.default.getCurrentUser(), []),
        d = (0, i.e7)([a.Z], () => a.Z.getChannel(n), [n]);
    return null == d || d.isOwner(e) || null == u || !d.isOwner(u.id) || !(null == (t = d.recipients) ? void 0 : t.includes(e))
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'remove',
              label: c.NW.string(c.t.n5zMIy),
              action: () => o.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
