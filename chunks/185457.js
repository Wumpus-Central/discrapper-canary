n.d(t, { Z: () => Z });
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
function Z(e) {
    let { user: t, guildId: n, channelId: Z, context: f } = e,
        { id: b } = t,
        { loading: m, note: O } = (0, o.Z)(b),
        h = !m && null != O && O.length > 0,
        E = f === d.IlC.POPOUT || f === d.IlC.OVERLAY,
        { analyticsLocations: j } = (0, r.ZP)();
    return b === s.default.getId() || u.Z.hidePersonalInformation || E
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'note',
              label: m ? g.intl.string(g.t['WLKx//']) : h ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              subtext: g.intl.string(g.t.r1BOdX),
              action: () => {
                  (0, a.openUserProfileModal)({
                      userId: t.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: n,
                      channelId: Z,
                      sourceAnalyticsLocations: j,
                      appContext: f
                  });
              }
          });
}
