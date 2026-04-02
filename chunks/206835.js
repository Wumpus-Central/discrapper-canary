"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(159001),
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
            analyticsLocation: c,
            analyticsLocations: d,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        _ = (0, s.X)("useOpenProfileSettings");
    return (0, r.useCallback)(() => {
        if (_) {
            let t = o.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: r } = n(657331);
                r({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: d });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = n(840065);
            l.A.setState({ subsection: null != e ? u.Eq.GUILD : u.Eq.USER_PROFILE, scrollPosition: t }),
                r(a.X.PROFILE_PANEL, { analyticsLocation: c, analyticsLocations: d });
        }
    }, [e, t, c, d, _]);
}
n(836602), n(628965);
