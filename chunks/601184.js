n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    s = n(904245),
    a = n(257559),
    o = n(665906),
    c = n(496675),
    d = n(594174),
    u = n(981631),
    g = n(388032);
function h(e, t) {
    let n = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        h = (0, o.$R)(t),
        f = (0, l.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_MESSAGES, t), [t]) || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === u.yb.SENDING || !f || u.V$x.UNDELETABLE.has(e.type) || !h
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'delete',
              label: g.intl.string(g.t.xwMqDw),
              action: function (n) {
                  e.state === u.yb.SEND_FAILED ? s.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? s.Z.deleteMessage(t.id, e.id) : a.Z.confirmDelete(t, e, !0);
              },
              color: 'danger',
              icon: r.XHJ
          });
}
