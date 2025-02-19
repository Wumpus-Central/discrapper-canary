n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(906732),
    a = n(748545),
    u = n(531301),
    s = n(171368),
    c = n(314897),
    d = n(246946),
    f = n(626135),
    g = n(981631),
    b = n(228168),
    Z = n(388032);
function v(e) {
    let { user: t, guildId: n, channelId: v, context: p } = e,
        { id: N } = t,
        { loading: O, note: m } = (0, u.Z)(N),
        y = !O && null != m && m.length > 0,
        h = p === g.IlC.POPOUT || p === g.IlC.OVERLAY,
        j = l.useContext(f.AnalyticsContext),
        { analyticsLocations: P } = (0, o.ZP)(),
        W = (0, a.kc)({ location: 'useAddNoteItem' });
    return N === c.default.getId() || d.Z.hidePersonalInformation || h
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'note',
              label: O ? Z.NW.string(Z.t['WLKx//']) : y ? (W ? Z.NW.string(Z.t['gs+qcH']) : Z.NW.string(Z.t.sHHsOD)) : W ? Z.NW.string(Z.t['1ZZttr']) : Z.NW.string(Z.t.Dglxra),
              action: () => {
                  (0, s.openUserProfileModal)({
                      userId: t.id,
                      section: b.oh.USER_INFO,
                      subsection: b.Tb.NOTE,
                      guildId: n,
                      channelId: v,
                      sourceAnalyticsLocations: P,
                      analyticsLocation: j.location,
                      appContext: p
                  });
              }
          });
}
