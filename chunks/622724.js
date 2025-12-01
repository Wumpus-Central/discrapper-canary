n.d(t, {
    T: () => m,
    Z: () => _,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(432877),
    l = n(726521),
    c = n(87620),
    u = n(314897),
    d = n(594174),
    f = n(981631),
    p = n(388032);
function _(e) {
    let { user: t, guildId: n, color: s, onAction: d, location: _ = o.Z.CONTEXT_MENU, appContext: m } = e,
        h = (0, c.oV)(_),
        g = (0, i.e7)([u.default], () => u.default.getId() === t.id);
    return !h || g || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "report-user",
              color: s,
              label: p.intl.string(p.t.A1MM3D),
              action: () => (0, l.pX)(t, n === f.ME ? void 0 : n, d, m),
          });
}
function m(e) {
    let { user: t, guildId: n, color: o, onAction: c, appContext: u } = e,
        p = (0, i.e7)([s.ZP], () => s.ZP.get("iar_testing")),
        _ = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return null != _ && (t.id === _.id || t.isNonUserBot() || !_.isStaff() || !p)
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "staff-test-report-user",
              color: o,
              label: "[STAFF] Test Profile Report",
              action: () => (0, l.I6)(t, n === f.ME ? void 0 : n, c, u),
          });
}
