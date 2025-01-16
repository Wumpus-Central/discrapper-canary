t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(493683),
    o = t(592125),
    d = t(594174),
    u = t(388032);
function s(n, e) {
    var t;
    let s = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
        c = (0, r.e7)([o.Z], () => o.Z.getChannel(e), [e]);
    return null == c || c.isOwner(n) || null == s || !c.isOwner(s.id) || !(null === (t = c.recipients) || void 0 === t ? void 0 : t.includes(n))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'remove',
              label: u.intl.string(u.t.n5zMIy),
              action: () => a.Z.removeRecipient(e, n),
              color: 'danger'
          });
}
