n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(843472),
    a = n(969043),
    o = n(406704),
    u = n(576705),
    c = n(287809),
    d = n(143413),
    E = n(145530),
    A = n(652215),
    f = n(985018);
function m(e, t) {
    let n = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        m = (0, o.Id)(t),
        D = (0, l.bG)([u.A], () => u.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
        { firstMessage: g } = (0, l.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
        p = D || (null != n && e.canDeleteOwnMessage(n.id));
    return e.state === A.cmJ.SENDING ||
        !p ||
        A.MRS.UNDELETABLE.has(e.type) ||
        !m ||
        (t.isModeratorReportChannel() && (e.id === (null == g ? void 0 : g.id) || (0, d.A)(e)))
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "delete",
              label: f.intl.string(f.t.xwMqD7),
              action: function (n) {
                  e.state === A.cmJ.SEND_FAILED
                      ? s.A.deleteMessage(t.id, e.id, !0)
                      : n.shiftKey
                        ? s.A.deleteMessage(t.id, e.id)
                        : E.A.confirmDelete(t, e, !0);
              },
              color: "danger",
              icon: r.ucK,
          });
}
