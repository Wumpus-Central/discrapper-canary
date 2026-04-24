n.d(t, { A: () => d });
var a = n(64700),
    i = n(159001),
    l = n(591179),
    r = n(780964),
    o = n(287809),
    s = n(507553);
n(652215);
var c = n(355097);
function d() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: d,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, l.X)("useOpenProfileSettings");
    return (0, a.useCallback)(() => {
        if (u) {
            let t = o.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: a } = n(975732);
                a({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: d });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: a } = n(858897);
            s.A.setState({ subsection: null != e ? c.Eq.GUILD : c.Eq.USER_PROFILE, scrollPosition: t }),
                a(r.X.PROFILE_PANEL, { analyticsLocations: d });
        }
    }, [e, t, d, u]);
}
n(836602), n(628965);
