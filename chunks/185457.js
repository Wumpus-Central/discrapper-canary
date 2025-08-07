t.d(n, { Z: () => Z });
var l = t(255367);
t(73800);
var i = t(481060),
    r = t(906732),
    a = t(531301),
    o = t(892001),
    u = t(314897),
    s = t(246946),
    c = t(981631),
    d = t(228168),
    g = t(388032);
function Z(e) {
    let { user: n, guildId: t, channelId: Z, context: f } = e,
        { id: b } = n,
        { loading: O, note: p } = (0, a.Z)(b),
        m = !O && null != p && p.length > 0,
        h = f === c.IlC.POPOUT || f === c.IlC.OVERLAY,
        { analyticsLocations: j } = (0, r.ZP)();
    return b === u.default.getId() || s.Z.hidePersonalInformation || h
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "note",
              label: O ? g.intl.string(g.t["WLKx//"]) : m ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              subtext: g.intl.string(g.t.r1BOdX),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: n.id,
                      section: d.oh.USER_INFO,
                      subsection: d.Tb.NOTE,
                      guildId: t,
                      channelId: Z,
                      sourceAnalyticsLocations: j,
                      appContext: f,
                  });
              },
          });
}
