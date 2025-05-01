n.d(t, {
    ZP: () => E,
    eH: () => S,
    wY: () => j
});
var i = n(200651);
n(192379);
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
    p = n(594174),
    b = n(970257),
    h = n(921944),
    O = n(388032),
    y = n(776571);
function E(e) {
    return (0, b.a4)(e)
        ? (0, i.jsx)(a.sNh, {
              id: 'report',
              label: O.intl.string(O.t.GwbdGR),
              action: () => (0, f.ak)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
function v() {
    return (0, i.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, i.jsx)(a.IGR, {
                      color: s.Z.BG_BRAND,
                      text: O.intl.string(O.t.y2b7CA)
                  })
                : (0, i.jsx)(a.U65, {
                      color: 'currentColor',
                      size: 'refresh_sm'
                  });
        }
    });
}
function j(e) {
    let t = (0, r.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, m.sP)(e) && !t;
    return ((0, o.zq)(() => {
        n && (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: h.L.AUTO_DISMISS });
    }),
    n)
        ? (0, i.jsx)(a.sNh, {
              id: 'report-to-mod',
              label: O.intl.string(y.default['1D+vq6']),
              action: () => {
                  (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: h.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, i.jsx)(v, {})
          })
        : null;
}
function S(e) {
    let t = (0, r.e7)([c.ZP], () => c.ZP.get('iar_testing')),
        n = (0, r.e7)([p.default], () => p.default.getCurrentUser());
    return (0, b.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, f.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
