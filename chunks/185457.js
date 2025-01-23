t.d(n, {
    Z: function () {
        return m;
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
    g = t(388032);
function m(e) {
    let { user: n, guildId: t, channelId: m, context: M } = e,
        { id: v } = n,
        { loading: x, note: h } = (0, u.Z)(v),
        p = !x && null != h && h.length > 0,
        P = M === Z.IlC.POPOUT,
        C = i.useContext(c.AnalyticsContext),
        { analyticsLocations: I } = (0, a.ZP)();
    return v === d.default.getId() || s.Z.hidePersonalInformation || P
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'note',
              label: x ? g.intl.string(g.t['WLKx//']) : p ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: n.id,
                      section: f.oh.USER_INFO,
                      subsection: f.Tb.NOTE,
                      guildId: t,
                      channelId: m,
                      sourceAnalyticsLocations: I,
                      analyticsLocation: C.location
                  });
              }
          });
}
