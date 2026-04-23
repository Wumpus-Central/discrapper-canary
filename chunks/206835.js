n.d(t, { A: () => d });
var r = n(64700),
    i = n(159001),
    a = n(591179),
    l = n(780964),
    s = n(287809),
    c = n(507553);
n(652215);
var o = n(355097);
function d() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: d,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, a.X)("useOpenProfileSettings");
    return (0, r.useCallback)(() => {
        if (u) {
            let t = s.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: r } = n(657331);
                r({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: d });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = n(858897);
            c.A.setState({ subsection: null != e ? o.Eq.GUILD : o.Eq.USER_PROFILE, scrollPosition: t }),
                r(l.X.PROFILE_PANEL, { analyticsLocations: d });
        }
    }, [e, t, d, u]);
}
n(836602), n(628965);
