i.d(n, { Z: () => c });
var r = i(200651);
i(192379);
var s = i(442837),
    d = i(481060),
    t = i(493683),
    a = i(592125),
    l = i(594174),
    o = i(388032);
function c(e, n) {
    var i;
    let c = (0, s.e7)([l.default], () => l.default.getCurrentUser(), []),
        u = (0, s.e7)([a.Z], () => a.Z.getChannel(n), [n]);
    return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null === (i = u.recipients) || void 0 === i ? void 0 : i.includes(e))
        ? null
        : (0, r.jsx)(d.sNh, {
              id: 'remove',
              label: o.intl.string(o.t.n5zMIy),
              action: () => t.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
