t.d(n, {
    Z: function () {
        return c;
    },
    e: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(432877),
    o = t(726521),
    s = t(594174),
    u = t(970257),
    d = t(388032);
function c(e) {
    return (0, u.a4)(e)
        ? (0, i.jsx)(r.MenuItem, {
              id: 'report',
              label: d.intl.string(d.t.GwbdGR),
              action: () => (0, o.ak)(e, 'web_message_context_menu'),
              icon: r.FlagIcon,
              color: 'danger'
          })
        : null;
}
function g(e) {
    let n = (0, l.e7)([a.ZP], () => a.ZP.get('iar_testing')),
        t = (0, l.e7)([s.default], () => s.default.getCurrentUser());
    return (0, u.a4)(e) && null != t && t.isStaff() && n
        ? (0, i.jsx)(r.MenuItem, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, o.Jw)(e, 'web_message_context_menu'),
              icon: r.FlagIcon,
              color: 'danger'
          })
        : null;
}
