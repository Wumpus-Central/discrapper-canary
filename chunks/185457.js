n.d(t, { Z: () => f });
var l = n(255367);
n(73800);
var i = n(481060),
    r = n(906732),
    o = n(531301),
    a = n(892001),
    s = n(314897),
    u = n(246946),
    d = n(981631),
    c = n(228168),
    g = n(388032);
function f(e) {
    let { user: t, guildId: n, channelId: f, context: Z } = e,
        { id: b } = t,
        { loading: O, note: m } = (0, o.Z)(b),
        h = !O && null != m && m.length > 0,
        j = Z === d.IlC.POPOUT || Z === d.IlC.OVERLAY,
        { analyticsLocations: v } = (0, r.ZP)();
    return b === s.default.getId() || u.Z.hidePersonalInformation || j
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'note',
              label: O ? g.intl.string(g.t['WLKx//']) : h ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              subtext: g.intl.string(g.t.r1BOdX),
              action: () => {
                  (0, a.openUserProfileModal)({
                      userId: t.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: n,
                      channelId: f,
                      sourceAnalyticsLocations: v,
                      appContext: Z
                  });
              }
          });
}
