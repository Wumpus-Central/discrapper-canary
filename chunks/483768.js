n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(477782),
    r = n(241326),
    a = n(843472),
    c = n(969043),
    o = n(406704),
    d = n(576705),
    u = n(287809),
    E = n(143413),
    A = n(145530),
    m = n(652215),
    g = n(985018);
function p(e, t) {
    let n = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        p = (0, o.Id)(t),
        f = (0, s.bG)([d.A], () => d.A.can(m.xBc.MANAGE_MESSAGES, t), [t]),
        { firstMessage: h } = (0, s.bG)([c.A], () => c.A.getMessage(t.id), [t.id]),
        D = f || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === m.cmJ.SENDING ||
        !D ||
        m.MRS.UNDELETABLE.has(e.type) ||
        !p ||
        (t.isModeratorReportChannel() && (e.id === h?.id || (0, E.A)(e)))
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "delete",
              label: g.intl.string(g.t.xwMqD7),
              action: function (n) {
                  e.state === m.cmJ.SEND_FAILED
                      ? a.A.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? a.A.deleteMessage(t.id, e.id)
                        : A.A.confirmDelete(t, e, !0);
              },
              color: "danger",
              leadingAccessory: { type: "icon", icon: r.u },
              icon: r.u,
          });
}
