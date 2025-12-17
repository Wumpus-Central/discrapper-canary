r.d(n, { Z: () => l });
var t = r(54381);
r(473749);
var i = r(442837),
    o = r(481060),
    s = r(493683),
    a = r(592125),
    c = r(594174),
    d = r(388032);
function l(e, n) {
    var r;
    let l = (0, i.e7)([c.default], () => c.default.getCurrentUser(), []),
        u = (0, i.e7)([a.Z], () => a.Z.getChannel(n), [n]);
    return null == u ||
        u.isOwner(e) ||
        null == l ||
        !u.isOwner(l.id) ||
        !(null == (r = u.recipients) ? void 0 : r.includes(e))
        ? null
        : (0, t.jsx)(o.sNh, {
              id: "remove",
              label: d.intl.string(d.t["n5zMI+"]),
              action: () => s.Z.removeRecipient(n, e),
              color: "danger",
          });
}
