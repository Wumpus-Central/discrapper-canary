"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(159001),
    s = n(591179),
    a = n(780964),
    o = n(287809),
    l = n(507553);
n(652215);
var u = n(355097);
function c() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        d = (0, s.X)("useOpenProfileSettings");
    return (0, i.useCallback)(() => {
        if (d) {
            let t = o.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: i } = n(975732);
                i({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: c });
                return;
            }
        }
        null != e && (0, r.V2)(e.id),
            l.A.setState({ subsection: null != e ? u.Eq.GUILD : u.Eq.USER_PROFILE, scrollPosition: t });
        {
            let { openUserSettings: e } = n(766075);
            e(a.X.PROFILE_PANEL, { analyticsLocations: c });
        }
    }, [e, t, c, d]);
}
n(836602);
