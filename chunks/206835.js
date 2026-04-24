"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(159001),
    a = n(591179),
    l = n(780964),
    s = n(287809),
    o = n(507553);
n(652215);
var c = n(355097);
function u() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: u,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        d = (0, a.X)("useOpenProfileSettings");
    return (0, r.useCallback)(() => {
        if (d) {
            let t = s.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: r } = n(975732);
                r({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: u });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = n(858897);
            o.A.setState({ subsection: null != e ? c.Eq.GUILD : c.Eq.USER_PROFILE, scrollPosition: t }),
                r(l.X.PROFILE_PANEL, { analyticsLocations: u });
        }
    }, [e, t, u, d]);
}
n(836602), n(628965);
