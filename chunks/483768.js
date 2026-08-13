e.d(i, { A: () => g });
var t = e(477900);
e(582128);
var c = e(17928),
    r = e(477782),
    a = e(241326),
    o = e(148494),
    s = e(969043),
    l = e(406704),
    d = e(576705),
    A = e(287809),
    u = e(143413),
    p = e(145530),
    E = e(652215),
    y = e(375708);
function g(n, i) {
    let e = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        g = (0, l.Id)(i),
        D = (0, c.bG)([d.A], () => d.A.can(E.xBc.MANAGE_MESSAGES, i), [i]),
        { firstMessage: f } = (0, c.bG)([s.A], () => s.A.getMessage(i.id), [i.id]),
        _ = D || (null != e && n.canDeleteOwnMessage(e.id));
    return n.state === E.cmJ.SENDING ||
        !_ ||
        (n.type === E.lAJ.AUTO_MODERATION_ACTION && !D) ||
        E.MRS.UNDELETABLE.has(n.type) ||
        !g ||
        (i.isModeratorReportChannel() && (n.id === f?.id || (0, u.A)(n)))
        ? null
        : (0, t.jsx)(r.Dr, {
              id: "delete",
              label: y.intl.string(y.t.xwMqD7),
              action: function (e) {
                  n.state === E.cmJ.SEND_FAILED
                      ? o.A.deleteMessage(i.id, n.id, !0)
                      : e.shiftKey
                        ? o.A.deleteMessage(i.id, n.id)
                        : p.A.confirmDelete(i, n, !0);
              },
              color: "danger",
              leadingAccessory: { type: "icon", icon: a.u },
              icon: a.u,
          });
}
