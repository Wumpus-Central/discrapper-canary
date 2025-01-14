t.d(n, {
    Z: function () {
        return g;
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
    c = t(594174),
    d = t(981631),
    m = t(388032);
function g(e, n) {
    let t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        g = (0, s.$R)(n),
        f = (0, l.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]),
        h = f || (null != t && e.canDeleteOwnMessage(t.id));
    return e.state === d.yb.SENDING || !h || d.V$x.UNDELETABLE.has(e.type) || !g
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'delete',
              label: m.intl.string(m.t.xwMqDw),
              action: function (t) {
                  e.state === d.yb.SEND_FAILED ? a.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? a.Z.deleteMessage(n.id, e.id) : o.Z.confirmDelete(n, e, !0);
              },
              color: 'danger',
              icon: r.TrashIcon
          });
}
