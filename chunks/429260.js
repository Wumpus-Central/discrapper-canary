n.d(t, {
    ZP: () => m,
    eH: () => b,
    wY: () => h
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(432877),
    o = n(726521),
    s = n(501517),
    c = n(982168),
    u = n(594174),
    d = n(970257),
    f = n(388032),
    g = n(776571);
function m(e) {
    return (0, d.a4)(e)
        ? (0, i.jsx)(l.sNh, {
              id: 'report',
              label: f.intl.string(f.t.GwbdGR),
              action: () => (0, o.ak)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
function h(e) {
    return (0, c.s)(e)
        ? (0, i.jsx)(l.sNh, {
              id: 'report-to-mod',
              label: f.intl.string(g.default['1D+vq6']),
              action: () => s.Z.reportMessageToMods(e.channel_id, e.id, 'Harrassment'),
              icon: l._XJ
          })
        : null;
}
function b(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.get('iar_testing')),
        n = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return (0, d.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(l.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, o.Jw)(e, 'web_message_context_menu'),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
