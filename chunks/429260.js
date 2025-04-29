n.d(t, {
    ZP: () => g,
    eH: () => h,
    wY: () => m
});
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(432877),
    o = n(726521),
    s = n(982168),
    c = n(594174),
    u = n(970257),
    d = n(388032),
    f = n(776571);
function g(e) {
    return (0, u.a4)(e)
        ? (0, i.jsx)(l.sNh, {
              id: 'report',
              label: d.intl.string(d.t.GwbdGR),
              action: () => (0, o.ak)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
function m(e) {
    return (0, s.sP)(e)
        ? (0, i.jsx)(l.sNh, {
              id: 'report-to-mod',
              label: d.intl.string(f.default['1D+vq6']),
              action: () => (0, o.tV)(e),
              icon: l._XJ
          })
        : null;
}
function h(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.get('iar_testing')),
        n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
    return (0, u.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(l.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, o.Jw)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
