n.d(t, {
    ZP: () => j,
    eH: () => P,
    wY: () => _
});
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(493773),
    s = n(377171),
    c = n(432877),
    u = n(605236),
    d = n(243778),
    f = n(726521),
    g = n(993706),
    b = n(982168),
    p = n(216572),
    O = n(914010),
    m = n(594174),
    h = n(970257),
    y = n(921944),
    v = n(388032),
    E = n(776571);
function j(e) {
    let t = (0, i.e7)([O.Z], () => O.Z.getGuildId()),
        n = (0, p.Q_)(t);
    return (0, h.a4)(e)
        ? (0, r.jsx)(a.sNh, {
              id: 'report',
              label: n ? v.intl.string(v.t.n5EBAA) : v.intl.string(v.t.GwbdGR),
              action: () => (0, f.ak)(e, 'web_message_context_menu'),
              icon: n ? a.gw7 : a.U65,
              color: 'danger'
          })
        : null;
}
function S() {
    return (0, r.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(a.IGR, {
                      color: s.Z.BG_BRAND,
                      text: v.intl.string(v.t.y2b7CA)
                  })
                : (0, r.jsx)(a.U65, {
                      color: 'currentColor',
                      size: 'refresh_sm'
                  });
        }
    });
}
function _(e) {
    let t = (0, i.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, b.sP)(e);
    return ((0, o.zq)(() => {
        n && (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: y.L.AUTO_DISMISS });
    }),
    n)
        ? (0, r.jsx)(a.sNh, {
              id: 'report-to-mod',
              label: t ? v.intl.string(E.default['8wsdnp']) : v.intl.string(E.default['1D+vq6']),
              action: () => {
                  (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: y.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, r.jsx)(S, {}),
              disabled: t
          })
        : null;
}
function P(e) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.get('iar_testing')),
        n = (0, i.e7)([m.default], () => m.default.getCurrentUser());
    return (0, h.a4)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, f.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
