n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(493683),
    s = n(592125),
    a = n(594174),
    d = n(388032);
function c(e, t) {
    var n;
    let c = (0, r.e7)([a.default], () => a.default.getCurrentUser(), []),
        u = (0, r.e7)([s.Z], () => s.Z.getChannel(t), [t]);
    return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (n = u.recipients) ? void 0 : n.includes(e))
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'remove',
              label: d.intl.string(d.t.n5zMIy),
              action: () => o.Z.removeRecipient(t, e),
              color: 'danger'
          });
}
