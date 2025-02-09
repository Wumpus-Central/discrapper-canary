n.d(t, {
    T: () => h,
    Z: () => p
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(432877),
    l = n(726521),
    u = n(87620),
    c = n(314897),
    d = n(594174),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { user: t, guildId: n, color: o, onAction: d, location: p = s.Z.CONTEXT_MENU, appContext: h } = e,
        m = (0, u.oV)(p),
        g = (0, r.e7)([c.default], () => c.default.getId() === t.id);
    return !m || g || t.isNonUserBot()
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'report-user',
              color: o,
              label: _.intl.string(_.t.A1MM3N),
              action: () => (0, l.pX)(t, n === f.ME ? void 0 : n, d, h)
          });
}
function h(e) {
    let { user: t, guildId: n, color: s, onAction: u, appContext: c } = e,
        _ = (0, r.e7)([o.ZP], () => o.ZP.get('iar_testing')),
        p = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return null != p && (t.id === p.id || t.isNonUserBot() || !p.isStaff() || !_)
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'staff-test-report-user',
              color: s,
              label: '[STAFF] Test Profile Report',
              action: () => (0, l.I6)(t, n === f.ME ? void 0 : n, u, c)
          });
}
