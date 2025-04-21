n.d(t, { Z: () => b });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    o = n(906732),
    a = n(531301),
    s = n(171368),
    u = n(314897),
    d = n(246946),
    c = n(626135),
    f = n(981631),
    g = n(228168),
    Z = n(388032);
function b(e) {
    let { user: t, guildId: n, channelId: b, context: O } = e,
        { id: m } = t,
        { loading: h, note: j } = (0, a.Z)(m),
        E = !h && null != j && j.length > 0,
        v = O === f.IlC.POPOUT || O === f.IlC.OVERLAY,
        p = i.useContext(c.AnalyticsContext),
        { analyticsLocations: P } = (0, o.ZP)();
    return m === u.default.getId() || d.Z.hidePersonalInformation || v
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'note',
              label: h ? Z.intl.string(Z.t['WLKx//']) : E ? Z.intl.string(Z.t['gs+qcH']) : Z.intl.string(Z.t['1ZZttr']),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: g.oh.USER_INFO,
                      subsection: g.Tb.NOTE,
                      guildId: n,
                      channelId: b,
                      sourceAnalyticsLocations: P,
                      analyticsLocation: p.location,
                      appContext: O
                  });
              }
          });
}
