n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(904245),
    s = n(257559),
    l = n(660189),
    c = n(665906),
    u = n(496675),
    d = n(594174),
    f = n(901461),
    _ = n(981631),
    p = n(388032);
function h(e, t) {
    let n = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        h = (0, c.$R)(t),
        m = (0, i.e7)([u.Z], () => u.Z.can(_.Plq.MANAGE_MESSAGES, t), [t]);
    function g(n) {
        e.state === _.yb.SEND_FAILED ? o.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? o.Z.deleteMessage(t.id, e.id) : s.Z.confirmDelete(t, e, !0);
    }
    let { firstMessage: E } = (0, i.e7)([l.Z], () => l.Z.getMessage(t.id), [t.id]),
        b = m || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === _.yb.SENDING || !b || _.V$x.UNDELETABLE.has(e.type) || !h || (t.isModeratorReportChannel() && (e.id === (null == E ? void 0 : E.id) || (0, f.Z)(e)))
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'delete',
              label: p.intl.string(p.t.xwMqDw),
              action: g,
              color: 'danger',
              icon: a.XHJ
          });
}
