n.d(t, {
    Z: () => d,
    e: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(432877),
    o = n(726521),
    s = n(594174),
    c = n(970257),
    u = n(388032);
function d(e) {
    return (0, c.a4)(e)
        ? (0, r.jsx)(a.sNh, {
              id: 'report',
              label: u.NW.string(u.t.GwbdGR),
              action: () => (0, o.ak)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
function f(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.get('iar_testing')),
        n = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return (0, c.a4)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, o.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
