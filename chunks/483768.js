var t = e(477900);
e(582128);
var c = e(855986),
    o = e(477782),
    r = e(241326),
    a = e(138399),
    s = e(969043),
    l = e(406704),
    d = e(576705),
    A = e(287809),
    u = e(143413),
    p = e(145530),
    E = e(652215),
    I = e(792996);
e.d(
    i,
    {},
    {
        A: function (n, i) {
            let e = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
                y = (0, l.Id)(i),
                g = (0, c.bG)([d.A], () => d.A.can(E.xBc.MANAGE_MESSAGES, i), [i]),
                { firstMessage: D } = (0, c.bG)([s.A], () => s.A.getMessage(i.id), [i.id]),
                f = g || (null != e && n.canDeleteOwnMessage(e.id));
            return n.state === E.cmJ.SENDING ||
                !f ||
                (n.type === E.lAJ.AUTO_MODERATION_ACTION && !g) ||
                E.MRS.UNDELETABLE.has(n.type) ||
                !y ||
                (i.isModeratorReportChannel() && (n.id === D?.id || (0, u.A)(n)))
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "delete",
                      label: I.intl.string(I.t.xwMqD7),
                      action: function (e) {
                          n.state === E.cmJ.SEND_FAILED
                              ? a.A.deleteMessage(i.id, n.id, !0)
                              : e.shiftKey
                                ? a.A.deleteMessage(i.id, n.id)
                                : p.A.confirmDelete(i, n, !0);
                      },
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: r.TrashIcon },
                      icon: r.TrashIcon,
                  });
        },
    },
);
