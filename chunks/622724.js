n.d(t, {
    T: () => h,
    Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(100527),
    s = n(432877),
    l = n(726521),
    c = n(87620),
    u = n(314897),
    d = n(594174),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { user: t, guildId: n, color: s, onAction: d, location: p = a.Z.CONTEXT_MENU, appContext: h } = e,
        m = (0, c.oV)(p),
        g = (0, i.e7)([u.default], () => u.default.getId() === t.id);
    return !m || g || t.isNonUserBot()
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'report-user',
              color: s,
              label: _.NW.string(_.t.A1MM3N),
              action: () => (0, l.pX)(t, n === f.ME ? void 0 : n, d, h)
          });
}
function h(e) {
    let { user: t, guildId: n, color: a, onAction: c, appContext: u } = e,
        _ = (0, i.e7)([s.ZP], () => s.ZP.get('iar_testing')),
        p = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return null != p && (t.id === p.id || t.isNonUserBot() || !p.isStaff() || !_)
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'staff-test-report-user',
              color: a,
              label: '[STAFF] Test Profile Report',
              action: () => (0, l.I6)(t, n === f.ME ? void 0 : n, c, u)
          });
}
