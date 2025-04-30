t.d(n, { Z: () => d });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(493683),
    a = t(592125),
    s = t(594174),
    c = t(388032);
function d(e, n) {
    var t;
    let d = (0, i.e7)([s.default], () => s.default.getCurrentUser(), []),
        u = (0, i.e7)([a.Z], () => a.Z.getChannel(n), [n]);
    return null == u || u.isOwner(e) || null == d || !u.isOwner(d.id) || !(null == (t = u.recipients) ? void 0 : t.includes(e))
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'remove',
              label: c.intl.string(c.t.n5zMIy),
              action: () => o.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
