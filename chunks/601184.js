n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(904245),
    r = n(257559),
    o = n(665906),
    d = n(496675),
    c = n(594174),
    u = n(981631),
    g = n(388032);
function f(e, t) {
    let n = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, o.$R)(t),
        m = (0, l.e7)([d.Z], () => d.Z.can(u.Plq.MANAGE_MESSAGES, t), [t]) || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === u.yb.SENDING || !m || u.V$x.UNDELETABLE.has(e.type) || !f
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'delete',
              label: g.intl.string(g.t.xwMqDw),
              action: function (n) {
                  e.state === u.yb.SEND_FAILED ? s.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? s.Z.deleteMessage(t.id, e.id) : r.Z.confirmDelete(t, e, !0);
              },
              color: 'danger',
              icon: a.XHJ
          });
}
