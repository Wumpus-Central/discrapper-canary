n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    r = n(843472),
    a = n(969043),
    c = n(406704),
    o = n(576705),
    d = n(287809),
    u = n(143413),
    A = n(145530),
    E = n(652215),
    m = n(985018);
function f(e, t) {
    let n = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        f = (0, c.Id)(t),
        g = (0, l.bG)([o.A], () => o.A.can(E.xBc.MANAGE_MESSAGES, t), [t]),
        { firstMessage: p } = (0, l.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
        D = g || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === E.cmJ.SENDING ||
        !D ||
        E.MRS.UNDELETABLE.has(e.type) ||
        !f ||
        (t.isModeratorReportChannel() && (e.id === p?.id || (0, u.A)(e)))
        ? null
        : (0, i.jsx)(s.Drp, {
              id: "delete",
              label: m.intl.string(m.t.xwMqD7),
              action: function (n) {
                  e.state === E.cmJ.SEND_FAILED
                      ? r.A.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? r.A.deleteMessage(t.id, e.id)
                        : A.A.confirmDelete(t, e, !0);
              },
              color: "danger",
              leadingAccessory: { type: "icon", icon: s.ucK },
              icon: s.ucK,
          });
}
