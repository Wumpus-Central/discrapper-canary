n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    r = n(241326),
    a = n(720149),
    o = n(969043),
    c = n(406704),
    d = n(576705),
    g = n(287809),
    u = n(143413),
    A = n(145530),
    h = n(652215),
    E = n(985018);
function m(e, t) {
    let n = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        m = (0, c.Id)(t),
        p = (0, l.bG)([d.A], () => d.A.can(h.xBc.MANAGE_MESSAGES, t), [t]),
        { firstMessage: f } = (0, l.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        I = p || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === h.cmJ.SENDING ||
        !I ||
        h.MRS.UNDELETABLE.has(e.type) ||
        !m ||
        (t.isModeratorReportChannel() && (e.id === f?.id || (0, u.A)(e)))
        ? null
        : (0, i.jsx)(s.Dr, {
              id: "delete",
              label: E.intl.string(E.t.xwMqD7),
              action: function (n) {
                  e.state === h.cmJ.SEND_FAILED
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
