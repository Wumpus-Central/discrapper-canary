n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(904245),
    o = n(257559),
    s = n(665906),
    c = n(496675),
    u = n(594174),
    d = n(981631),
    f = n(388032);
function g(e, t) {
    let n = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, s.$R)(t),
        m = (0, r.e7)([c.Z], () => c.Z.can(d.Plq.MANAGE_MESSAGES, t), [t]) || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === d.yb.SENDING || !m || d.V$x.UNDELETABLE.has(e.type) || !g
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'delete',
              label: f.intl.string(f.t.xwMqDw),
              action: function (n) {
                  e.state === d.yb.SEND_FAILED ? a.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? a.Z.deleteMessage(t.id, e.id) : o.Z.confirmDelete(t, e, !0);
              },
              color: 'danger',
              icon: l.XHJ
          });
}
