r.d(n, { Z: () => c });
var t = r(255367);
r(73800);
var i = r(442837),
    s = r(481060),
    o = r(493683),
    l = r(592125),
    a = r(594174),
    d = r(388032);
function c(e, n) {
    var r;
    let c = (0, i.e7)([a.default], () => a.default.getCurrentUser(), []),
        u = (0, i.e7)([l.Z], () => l.Z.getChannel(n), [n]);
    return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (r = u.recipients) ? void 0 : r.includes(e))
        ? null
        : (0, t.jsx)(s.sNh, {
              id: 'remove',
              label: d.intl.string(d.t.n5zMIy),
              action: () => o.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
