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
        N = !p && null != j && j.length > 0,
        m = O === f.IlC.POPOUT || O === f.IlC.OVERLAY,
        h = l.useContext(c.AnalyticsContext),
        { analyticsLocations: y } = (0, o.ZP)();
    return v === u.default.getId() || d.Z.hidePersonalInformation || m
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'note',
              label: p ? b.NW.string(b.t['WLKx//']) : N ? b.NW.string(b.t['gs+qcH']) : b.NW.string(b.t['1ZZttr']),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: n,
                      channelId: g,
                      sourceAnalyticsLocations: y,
                      analyticsLocation: h.location,
                      appContext: O
                  });
              }
          });
}
