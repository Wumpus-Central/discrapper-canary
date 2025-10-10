t.d(n, { Z: () => Z });
var l = t(951288);
t(647438);
var i = t(481060),
    r = t(906732),
    a = t(531301),
    u = t(892001),
    o = t(314897),
    s = t(246946),
    d = t(981631),
    c = t(228168),
    g = t(388032);
function Z(e) {
    let { user: n, guildId: t, channelId: Z, context: f } = e,
        { id: b } = n,
        { loading: m, note: O } = (0, a.Z)(b),
        p = !m && null != O && O.length > 0,
        h = f === d.IlC.POPOUT || f === d.IlC.OVERLAY,
        { analyticsLocations: j } = (0, r.ZP)();
    return b === o.default.getId() || s.Z.hidePersonalInformation || h
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "note",
              label: m ? g.intl.string(g.t["WLKx//"]) : p ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              subtext: g.intl.string(g.t.r1BOdX),
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: n.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: t,
                      channelId: Z,
                      sourceAnalyticsLocations: j,
                      appContext: f,
                  });
              },
          });
}
