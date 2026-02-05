n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    r = n(612630),
    d = n(657331),
    o = n(961350),
    s = n(351906),
    u = n(652215),
    c = n(518477),
    A = n(985018);
function g(e) {
    let { user: t, guildId: n, channelId: g, context: m } = e,
        { id: b } = t,
        { loading: E, note: f } = (0, r.A)(b),
        h = !E && null != f && f.length > 0,
        x = m === u.BRT.POPOUT || m === u.BRT.OVERLAY,
        { analyticsLocations: M } = (0, a.Ay)();
    return b === o.default.getId() || s.A.hidePersonalInformation || x
        ? null
        : (0, l.jsx)(i.Drp, {
              id: "note",
              label: E ? A.intl.string(A.t["WLKx/9"]) : h ? A.intl.string(A.t.sHHsOM) : A.intl.string(A.t.Dglxrf),
              subtext: A.intl.string(A.t.r1BOdd),
              action: () => {
                  (0, d.openUserProfileModal)({
                      userId: t.id,
                      tabSection: c.RP.USER_INFO,
                      scrollTarget: c.bk.NOTE,
                      guildId: n,
                      channelId: g,
                      sourceAnalyticsLocations: M,
                      appContext: m,
                  });
              },
          });
}
