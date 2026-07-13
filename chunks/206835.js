"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(159001),
    a = n(591179),
    s = n(780964),
    l = n(287809),
    o = n(507553);
n(652215);
var d = n(355097);
function c() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, a.X)("useOpenProfileSettings");
    return (0, i.useCallback)(() => {
        if (u) {
            let t = l.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: i } = n(975732);
                i({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: c });
                return;
            }
        }
        null != e && (0, r.V2)(e.id),
            o.A.setState({ subsection: null != e ? d.Eq.GUILD : d.Eq.USER_PROFILE, scrollPosition: t });
        {
            let { openUserSettings: e } = n(766075);
            e(s.X.PROFILE_PANEL, { analyticsLocations: c });
        }
    }, [e, t, c, u]);
}
n(836602);
