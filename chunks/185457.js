n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(906732),
    a = n(531301),
    o = n(171368),
    s = n(314897),
    u = n(246946),
    d = n(981631),
    c = n(228168),
    g = n(388032);
function f(e) {
    let { user: t, guildId: n, channelId: f, context: b } = e,
        { id: Z } = t,
        { loading: m, note: v } = (0, a.Z)(Z),
        p = !m && null != v && v.length > 0,
        O = b === d.IlC.POPOUT || b === d.IlC.OVERLAY,
        { analyticsLocations: h } = (0, r.ZP)();
    return Z === s.default.getId() || u.Z.hidePersonalInformation || O
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'note',
              label: m ? g.intl.string(g.t['WLKx//']) : p ? g.intl.string(g.t['gs+qcH']) : g.intl.string(g.t['1ZZttr']),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: t.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: n,
                      channelId: f,
                      sourceAnalyticsLocations: h,
                      appContext: b
                  });
              }
          });
}
