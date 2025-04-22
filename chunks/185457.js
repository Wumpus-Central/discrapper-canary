n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(906732),
    a = n(531301),
    s = n(171368),
    u = n(314897),
    d = n(246946),
    c = n(626135),
    f = n(981631),
    Z = n(228168),
    b = n(388032);
function g(e) {
    let { user: t, guildId: n, channelId: g, context: O } = e,
        { id: v } = t,
        { loading: p, note: j } = (0, a.Z)(v),
        m = !p && null != j && j.length > 0,
        h = O === f.IlC.POPOUT || O === f.IlC.OVERLAY,
        y = l.useContext(c.AnalyticsContext),
        { analyticsLocations: P } = (0, o.ZP)();
    return v === u.default.getId() || d.Z.hidePersonalInformation || h
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'note',
              label: p ? b.intl.string(b.t['WLKx//']) : m ? b.intl.string(b.t['gs+qcH']) : b.intl.string(b.t['1ZZttr']),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: n,
                      channelId: g,
                      sourceAnalyticsLocations: P,
                      analyticsLocation: y.location,
                      appContext: O
                  });
              }
          });
}
