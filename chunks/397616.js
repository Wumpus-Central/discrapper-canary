n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(493683),
    s = n(592125),
    a = n(594174),
    d = n(388032);
function c(e, t) {
    var n;
    let c = (0, i.e7)([a.default], () => a.default.getCurrentUser(), []),
        u = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]);
    return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (n = u.recipients) ? void 0 : n.includes(e))
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'remove',
              label: d.NW.string(d.t.n5zMIy),
              action: () => l.Z.removeRecipient(t, e),
              color: 'danger'
          });
}
