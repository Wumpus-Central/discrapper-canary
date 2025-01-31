n.d(e, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    d = n(906732),
    r = n(531301),
    o = n(171368),
    s = n(314897),
    u = n(246946),
    c = n(626135),
    g = n(981631),
    Z = n(228168),
    f = n(388032);
function v(t) {
    let { user: e, guildId: n, channelId: v, context: b } = t,
        { id: h } = e,
        { loading: m, note: x } = (0, r.Z)(h),
        I = !m && null != x && x.length > 0,
        U = b === g.IlC.POPOUT,
        _ = l.useContext(c.AnalyticsContext),
        { analyticsLocations: p } = (0, d.ZP)();
    return h === s.default.getId() || u.Z.hidePersonalInformation || U
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'note',
              label: m ? f.intl.string(f.t['WLKx//']) : I ? f.intl.string(f.t.sHHsOD) : f.intl.string(f.t.Dglxra),
              action: () => {
                  (0, o.openUserProfileModal)({
                      userId: e.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: n,
                      channelId: v,
                      sourceAnalyticsLocations: p,
                      analyticsLocation: _.location
                  });
              }
          });
}
