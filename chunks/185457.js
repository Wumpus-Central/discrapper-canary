n.d(t, { Z: () => Z });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(906732),
    o = n(531301),
    s = n(171368),
    u = n(314897),
    c = n(246946),
    d = n(626135),
    g = n(981631),
    f = n(228168),
    b = n(388032);
function Z(e) {
    let { user: t, guildId: n, channelId: Z, context: N } = e,
        { id: m } = t,
        { loading: v, note: p } = (0, o.Z)(m),
        O = !v && null != p && p.length > 0,
        h = N === g.IlC.POPOUT || N === g.IlC.OVERLAY,
        j = l.useContext(d.AnalyticsContext),
        { analyticsLocations: x } = (0, a.ZP)();
    return m === u.default.getId() || c.Z.hidePersonalInformation || h
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'note',
              label: v ? b.NW.string(b.t['WLKx//']) : O ? b.NW.string(b.t['gs+qcH']) : b.NW.string(b.t['1ZZttr']),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: f.oh.USER_INFO,
                      subsection: f.Tb.NOTE,
                      guildId: n,
                      channelId: Z,
                      sourceAnalyticsLocations: x,
                      analyticsLocation: j.location,
                      appContext: N
                  });
              }
          });
}
