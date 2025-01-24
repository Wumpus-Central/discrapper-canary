t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(906732),
    u = t(531301),
    o = t(171368),
    d = t(314897),
    s = t(246946),
    c = t(626135),
    Z = t(981631),
    f = t(228168),
    m = t(388032);
function g(e) {
    let { user: n, guildId: t, channelId: g, context: M } = e,
        { id: x } = n,
        { loading: h, note: v } = (0, u.Z)(x),
        p = !h && null != v && v.length > 0,
        b = M === Z.IlC.POPOUT,
        I = i.useContext(c.AnalyticsContext),
        { analyticsLocations: C } = (0, a.ZP)();
    return x === d.default.getId() || s.Z.hidePersonalInformation || b
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'note',
              label: h ? m.intl.string(m.t['WLKx//']) : p ? m.intl.string(m.t.sHHsOD) : m.intl.string(m.t.Dglxra),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: n.id,
                      section: f.oh.USER_INFO,
                      subsection: f.Tb.NOTE,
                      guildId: t,
                      channelId: g,
                      sourceAnalyticsLocations: C,
                      analyticsLocation: I.location
                  });
              }
          });
}
