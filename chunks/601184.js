n.d(t, { Z: () => _ });
var i = n(54381);
n(473749);
var l = n(442837),
    s = n(481060),
    r = n(904245),
    a = n(660189),
    o = n(665906),
    u = n(496675),
    c = n(594174),
    d = n(901461),
    E = n(819514),
    f = n(981631),
    m = n(388032);
function _(e, t) {
    let n = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        _ = (0, o.$R)(t),
        g = (0, l.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_MESSAGES, t), [t]),
        { firstMessage: S } = (0, l.e7)([a.Z], () => a.Z.getMessage(t.id), [t.id]),
        N = g || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === f.yb.SENDING ||
        !N ||
        f.V$x.UNDELETABLE.has(e.type) ||
        !_ ||
        (t.isModeratorReportChannel() && (e.id === (null == S ? void 0 : S.id) || (0, d.Z)(e)))
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "delete",
              label: m.intl.string(m.t.xwMqD7),
              action: function (n) {
                  e.state === f.yb.SEND_FAILED
                      ? r.Z.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? r.Z.deleteMessage(t.id, e.id)
                        : E.Z.confirmDelete(t, e, !0);
              },
              color: "danger",
              icon: s.XHJ,
          });
}
