t.d(n, { Z: () => b });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(906732),
    a = t(531301),
    o = t(892001),
    u = t(314897),
    s = t(246946),
    c = t(981631),
    d = t(228168),
    g = t(388032);
function b(e) {
    let { user: n, guildId: t, channelId: b, context: Z } = e,
        { id: f } = n,
        { loading: p, note: O } = (0, a.Z)(f),
        m = !p && null != O && O.length > 0,
        h = Z === c.IlC.POPOUT || Z === c.IlC.OVERLAY,
        { analyticsLocations: j } = (0, r.ZP)();
    return f === u.default.getId() || s.Z.hidePersonalInformation || h
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'note',
              label: p ? g.intl.string(g.t['WLKx//']) : m ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              subtext: g.intl.string(g.t.r1BOdX),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: n.id,
                      section: d.oh.USER_INFO,
                      subsection: d.Tb.NOTE,
                      guildId: t,
                      channelId: b,
                      sourceAnalyticsLocations: j,
                      appContext: Z
                  });
              }
          });
}
