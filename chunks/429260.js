n.d(t, {
    Z: () => d,
    e: () => f
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(432877),
    o = n(726521),
    s = n(594174),
    c = n(970257),
    u = n(388032);
function d(e) {
    return (0, c.a4)(e)
        ? (0, i.jsx)(l.sNh, {
              id: 'report',
              label: u.intl.string(u.t.GwbdGR),
              action: () => (0, o.ak)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
function f(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.get('iar_testing')),
        n = (0, r.e7)([s.default], () => s.default.getCurrentUser());
    return (0, c.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(l.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, o.Jw)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
