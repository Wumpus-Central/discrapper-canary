n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    s = n(904245),
    a = n(257559),
    o = n(660189),
    c = n(665906),
    d = n(496675),
    u = n(594174),
    g = n(901461),
    h = n(981631),
    f = n(388032);
function m(e, t) {
    let n = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, c.$R)(t),
        E = (0, l.e7)([d.Z], () => d.Z.can(h.Plq.MANAGE_MESSAGES, t), [t]),
        { firstMessage: p } = (0, l.e7)([o.Z], () => o.Z.getMessage(t.id), [t.id]),
        v = E || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === h.yb.SENDING || !v || h.V$x.UNDELETABLE.has(e.type) || !m || (t.isModeratorReportChannel() && (e.id === (null == p ? void 0 : p.id) || (0, g.Z)(e)))
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'delete',
              label: f.intl.string(f.t.xwMqDw),
              action: function (n) {
                  e.state === h.yb.SEND_FAILED ? s.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? s.Z.deleteMessage(t.id, e.id) : a.Z.confirmDelete(t, e, !0);
              },
              color: 'danger',
              icon: r.XHJ
          });
}
