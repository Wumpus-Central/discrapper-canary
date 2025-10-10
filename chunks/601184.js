n.d(t, { Z: () => _ });
var i = n(951288);
n(647438);
var l = n(442837),
    s = n(481060),
    r = n(904245),
    a = n(257559),
    o = n(660189),
    u = n(665906),
    c = n(496675),
    d = n(594174),
    E = n(901461),
    f = n(981631),
    m = n(388032);
function _(e, t) {
    let n = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        _ = (0, u.$R)(t),
        g = (0, l.e7)([c.Z], () => c.Z.can(f.Plq.MANAGE_MESSAGES, t), [t]),
        { firstMessage: N } = (0, l.e7)([o.Z], () => o.Z.getMessage(t.id), [t.id]),
        S = g || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === f.yb.SENDING ||
        !S ||
        f.V$x.UNDELETABLE.has(e.type) ||
        !_ ||
        (t.isModeratorReportChannel() && (e.id === (null == N ? void 0 : N.id) || (0, E.Z)(e)))
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "delete",
              label: m.intl.string(m.t.xwMqDw),
              action: function (n) {
                  e.state === f.yb.SEND_FAILED
                      ? r.Z.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? r.Z.deleteMessage(t.id, e.id)
                        : a.Z.confirmDelete(t, e, !0);
              },
              color: "danger",
              icon: s.XHJ,
          });
}
