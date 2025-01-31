n.d(t, {
    Z: () => u,
    e: () => g
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(432877),
    r = n(726521),
    o = n(594174),
    d = n(970257),
    c = n(388032);
function u(e) {
    return (0, d.a4)(e)
        ? (0, i.jsx)(a.sNh, {
              id: 'report',
              label: c.intl.string(c.t.GwbdGR),
              action: () => (0, r.ak)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
function g(e) {
    let t = (0, l.e7)([s.ZP], () => s.ZP.get('iar_testing')),
        n = (0, l.e7)([o.default], () => o.default.getCurrentUser());
    return (0, d.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, r.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
