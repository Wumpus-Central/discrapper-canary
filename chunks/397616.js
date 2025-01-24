t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    s = t(493683),
    a = t(592125),
    d = t(594174),
    o = t(388032);
function u(e, n) {
    var t;
    let u = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
        c = (0, r.e7)([a.Z], () => a.Z.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == u || !c.isOwner(u.id) || !(null === (t = c.recipients) || void 0 === t ? void 0 : t.includes(e))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'remove',
              label: o.intl.string(o.t.n5zMIy),
              action: () => s.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
