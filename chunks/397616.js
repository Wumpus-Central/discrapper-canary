t.d(n, { Z: () => u });
var i = t(200651);
t(192379);
var r = t(442837),
    a = t(481060),
    l = t(493683),
    s = t(592125),
    o = t(594174),
    d = t(388032);
function u(e, n) {
    var t;
    let u = (0, r.e7)([o.default], () => o.default.getCurrentUser(), []),
        c = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == u || !c.isOwner(u.id) || !(null === (t = c.recipients) || void 0 === t ? void 0 : t.includes(e))
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'remove',
              label: d.intl.string(d.t.n5zMIy),
              action: () => l.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
