"use strict";
a.d(t, { A: () => d });
var r = a(64700),
    i = a(159001),
    n = a(591179),
    l = a(780964),
    s = a(287809),
    o = a(507553);
a(652215);
var c = a(355097);
function d() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: d,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, n.X)("useOpenProfileSettings");
    return (0, r.useCallback)(() => {
        if (u) {
            let t = s.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: r } = a(657331);
                r({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: d });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = a(858897);
            o.A.setState({ subsection: null != e ? c.Eq.GUILD : c.Eq.USER_PROFILE, scrollPosition: t }),
                r(l.X.PROFILE_PANEL, { analyticsLocations: d });
        }
    }, [e, t, d, u]);
}
a(836602), a(628965);
