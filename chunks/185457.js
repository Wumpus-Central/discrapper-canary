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
        { loading: N, note: h } = (0, a.Z)(m),
        j = !N && null != h && h.length > 0,
        E = O === f.IlC.POPOUT || O === f.IlC.OVERLAY,
        v = i.useContext(c.AnalyticsContext),
        { analyticsLocations: p } = (0, o.ZP)();
    return m === u.default.getId() || d.Z.hidePersonalInformation || E
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'note',
              label: N ? Z.NW.string(Z.t['WLKx//']) : j ? Z.NW.string(Z.t['gs+qcH']) : Z.NW.string(Z.t['1ZZttr']),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: g.oh.USER_INFO,
                      subsection: g.Tb.NOTE,
                      guildId: n,
                      channelId: b,
                      sourceAnalyticsLocations: p,
                      analyticsLocation: v.location,
                      appContext: O
                  });
              }
          });
}
