l.d(n, { A: () => g });
var t = l(627968);
l(64700);
var i = l(477782),
    r = l(688810),
    a = l(612630),
    d = l(657331),
    s = l(961350),
    o = l(351906),
    u = l(652215),
    c = l(518477),
    A = l(985018);
function g(e) {
    let { user: n, guildId: l, channelId: g, context: b } = e,
        { id: m } = n,
        { loading: x, note: f } = (0, a.A)(m),
        h = !x && null != f && f.length > 0,
        E = b === u.BRT.POPOUT || b === u.BRT.OVERLAY,
        { analyticsLocations: C } = (0, r.Ay)();
    return m === s.default.getId() || o.A.hidePersonalInformation || E
        ? null
        : (0, t.jsx)(i.Dr, {
              id: "note",
              label: x ? A.intl.string(A.t["WLKx/9"]) : h ? A.intl.string(A.t.sHHsOM) : A.intl.string(A.t.Dglxrf),
              subtext: A.intl.string(A.t.r1BOdd),
              action: () => {
                  (0, d.openUserProfileModal)({
                      userId: n.id,
                      tabSection: c.RP.USER_INFO,
                      scrollTarget: c.bk.NOTE,
                      guildId: l,
                      channelId: g,
                      sourceAnalyticsLocations: C,
                      appContext: b,
                  });
              },
          });
}
