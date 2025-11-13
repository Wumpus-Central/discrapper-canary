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
        { loading: O, note: m } = (0, a.Z)(b),
        h = !O && null != m && m.length > 0,
        p = f === d.IlC.POPOUT || f === d.IlC.OVERLAY,
        { analyticsLocations: P } = (0, r.ZP)();
    return b === o.default.getId() || s.Z.hidePersonalInformation || p
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "note",
              label: O ? g.intl.string(g.t["WLKx/9"]) : h ? g.intl.string(g.t.sHHsOM) : g.intl.string(g.t.Dglxrf),
              subtext: g.intl.string(g.t.r1BOdd),
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: n.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: t,
                      channelId: Z,
                      sourceAnalyticsLocations: P,
                      appContext: f,
                  });
              },
          });
}
