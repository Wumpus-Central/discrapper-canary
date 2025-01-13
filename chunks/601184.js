t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(904245),
    o = t(257559),
    s = t(665906),
    u = t(496675),
    d = t(594174),
    c = t(981631),
    g = t(388032);
function m(e, n) {
    let t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        m = (0, s.$R)(n),
        f = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
        h = f || (null != t && e.canDeleteOwnMessage(t.id));
    return e.state === c.yb.SENDING || !h || c.V$x.UNDELETABLE.has(e.type) || !m
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'delete',
              label: g.intl.string(g.t.xwMqDw),
              action: function (t) {
                  e.state === c.yb.SEND_FAILED ? a.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? a.Z.deleteMessage(n.id, e.id) : o.Z.confirmDelete(n, e, !0);
              },
              color: 'danger',
              icon: r.TrashIcon
          });
}
