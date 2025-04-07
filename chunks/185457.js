t.d(n, { Z: () => f });
var l = t(200651),
    r = t(192379),
    i = t(481060),
    a = t(906732),
    o = t(531301),
    u = t(171368),
    s = t(314897),
    c = t(246946),
    d = t(626135),
    g = t(981631),
    Z = t(228168),
    b = t(388032);
function f(e) {
    let { user: n, guildId: t, channelId: f, context: p } = e,
        { id: O } = n,
        { loading: m, note: N } = (0, o.Z)(O),
        h = !m && null != N && N.length > 0,
        j = p === g.IlC.POPOUT || p === g.IlC.OVERLAY,
        P = r.useContext(d.AnalyticsContext),
        { analyticsLocations: x } = (0, a.ZP)();
    return O === s.default.getId() || c.Z.hidePersonalInformation || j
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'note',
              label: m ? b.NW.string(b.t['WLKx//']) : h ? b.NW.string(b.t['gs+qcH']) : b.NW.string(b.t['1ZZttr']),
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: n.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: t,
                      channelId: f,
                      sourceAnalyticsLocations: x,
                      analyticsLocation: P.location,
                      appContext: p
                  });
              }
          });
}
