n.d(t, {
    ZP: () => S,
    eH: () => P,
    wY: () => _
});
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(493773),
    s = n(377171),
    c = n(432877),
    u = n(605236),
    d = n(243778),
    f = n(726521),
    g = n(993706),
    m = n(982168),
    p = n(216572),
    b = n(914010),
    h = n(594174),
    O = n(970257),
    E = n(921944),
    y = n(388032),
    v = n(463959);
function S(e) {
    let t = (0, r.e7)([b.Z], () => b.Z.getGuildId()),
        n = (0, p.Q_)(t);
    return (0, O.a4)(e)
        ? (0, i.jsx)(a.sNh, {
              id: 'report',
              label: n ? y.intl.string(y.t.n5EBAA) : y.intl.string(y.t.GwbdGR),
              action: () => (0, f.ak)(e, 'web_message_context_menu'),
              icon: n ? a.gw7 : a.U65,
              color: 'danger'
          })
        : null;
}
function j() {
    return (0, i.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, i.jsx)(a.IGR, {
                      color: s.Z.BG_BRAND,
                      text: y.intl.string(y.t.y2b7CA)
                  })
                : (0, i.jsx)(a.U65, {
                      color: 'currentColor',
                      size: 'refresh_sm'
                  });
        }
    });
}
function _(e) {
    let t = (0, r.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, m.sP)(e);
    return ((0, o.zq)(() => {
        n && (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: E.L.AUTO_DISMISS });
    }),
    n)
        ? (0, i.jsx)(a.sNh, {
              id: 'report-to-mod',
              label: t ? y.intl.string(v.default['8wsdnp']) : y.intl.string(v.default['1D+vq6']),
              action: () => {
                  (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: E.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, i.jsx)(j, {}),
              disabled: t
          })
        : null;
}
function P(e) {
    let t = (0, r.e7)([c.ZP], () => c.ZP.get('iar_testing')),
        n = (0, r.e7)([h.default], () => h.default.getCurrentUser());
    return (0, O.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, f.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
