n.d(t, {
    ZP: () => y,
    eH: () => j,
    wY: () => v
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
    g = n(982168),
    m = n(594174),
    h = n(970257),
    b = n(921944),
    p = n(388032),
    O = n(776571);
function y(e) {
    return (0, h.a4)(e)
        ? (0, i.jsx)(a.sNh, {
              id: 'report',
              label: p.intl.string(p.t.GwbdGR),
              action: () => (0, f.ak)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
function E() {
    return (0, i.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, i.jsx)(a.IGR, {
                      color: s.Z.BG_BRAND,
                      text: p.intl.string(p.t.y2b7CA)
                  })
                : (0, i.jsx)(a._XJ, {
                      color: 'currentColor',
                      size: 'refresh_sm'
                  });
        }
    });
}
function v(e) {
    return ((0, o.zq)(() => {
        (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: b.L.AUTO_DISMISS });
    }),
    (0, g.sP)(e))
        ? (0, i.jsx)(a.sNh, {
              id: 'report-to-mod',
              label: p.intl.string(O.default['1D+vq6']),
              action: () => {
                  (0, u.EW)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: b.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, i.jsx)(E, {})
          })
        : null;
}
function j(e) {
    let t = (0, r.e7)([c.ZP], () => c.ZP.get('iar_testing')),
        n = (0, r.e7)([m.default], () => m.default.getCurrentUser());
    return (0, h.a4)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(a.sNh, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, f.Jw)(e, 'web_message_context_menu'),
              icon: a.U65,
              color: 'danger'
          })
        : null;
}
