e.d(n, { Z: () => v });
var i = e(200651),
    l = e(192379),
    a = e(481060),
    o = e(906732),
    d = e(531301),
    r = e(171368),
    s = e(314897),
    u = e(246946),
    c = e(626135),
    g = e(981631),
    Z = e(228168),
    f = e(388032);
function v(t) {
    let { user: n, guildId: e, channelId: v, context: b } = t,
        { id: h } = n,
        { loading: m, note: x } = (0, d.Z)(h),
        p = !m && null != x && x.length > 0,
        I = b === g.IlC.POPOUT || b === g.IlC.OVERLAY,
        _ = l.useContext(c.AnalyticsContext),
        { analyticsLocations: A } = (0, o.ZP)();
    return h === s.default.getId() || u.Z.hidePersonalInformation || I
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'note',
              label: m ? f.intl.string(f.t['WLKx//']) : p ? f.intl.string(f.t.sHHsOD) : f.intl.string(f.t.Dglxra),
              action: () => {
                  (0, r.openUserProfileModal)({
                      userId: n.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: e,
                      channelId: v,
                      sourceAnalyticsLocations: A,
                      analyticsLocation: _.location,
                      appContext: b
                  });
              }
          });
}
