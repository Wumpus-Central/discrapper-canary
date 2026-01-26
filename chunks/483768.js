n.d(t, {
    A: () => m,
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    r = n(843472),
    a = n(969043),
    o = n(406704),
    c = n(576705),
    d = n(287809),
    u = n(143413),
    E = n(145530),
    A = n(652215),
    f = n(985018);

function m(e, t) {
    let n = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        m = (0, o.Id)(t),
        g = (0, l.bG)([c.A], () => c.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
        { firstMessage: p } = (0, l.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
        D = g || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === A.cmJ.SENDING ||
        !D ||
        A.MRS.UNDELETABLE.has(e.type) ||
        !m ||
        (t.isModeratorReportChannel() && (e.id === (null == p ? void 0 : p.id) || (0, u.A)(e)))
        ? null
        : (0, i.jsx)(s.Drp, {
              id: "delete",
              label: f.intl.string(f.t.xwMqD7),
              action: function (n) {
                  e.state === A.cmJ.SEND_FAILED
                      ? r.A.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? r.A.deleteMessage(t.id, e.id)
                        : E.A.confirmDelete(t, e, !0);
              },
              color: "danger",
              leadingAccessory: {
                  type: "icon",
                  icon: s.ucK,
              },
              icon: s.ucK,
          });
}
