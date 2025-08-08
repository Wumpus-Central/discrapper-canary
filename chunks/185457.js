n.d(t, { Z: () => b });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(906732),
    o = n(531301),
    a = n(892001),
    s = n(314897),
    d = n(246946),
    u = n(981631),
    c = n(228168),
    f = n(388032);
function b(e) {
    let { user: t, guildId: n, channelId: b, context: g } = e,
        { id: Z } = t,
        { loading: O, note: v } = (0, o.Z)(Z),
        p = !O && null != v && v.length > 0,
        j = g === u.IlC.POPOUT || g === u.IlC.OVERLAY,
        { analyticsLocations: m } = (0, r.ZP)();
    return Z === s.default.getId() || d.Z.hidePersonalInformation || j
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "note",
              label: O ? f.intl.string(f.t["WLKx//"]) : p ? f.intl.string(f.t.sHHsOD) : f.intl.string(f.t.Dglxra),
              subtext: f.intl.string(f.t.r1BOdX),
              action: () => {
                  (0, a.openUserProfileModal)({
                      userId: t.id,
                      section: c.oh.USER_INFO,
                      subsection: c.Tb.NOTE,
                      guildId: n,
                      channelId: b,
                      sourceAnalyticsLocations: m,
                      appContext: g,
                  });
              },
          });
}
