l.d(t, { A: () => c });
var s = l(64700),
    i = l(159001),
    u = l(591179),
    n = l(780964),
    r = l(287809),
    d = l(507553);
l(652215);
var a = l(355097);
function c() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = (0, u.X)("useOpenProfileSettings");
    return (0, s.useCallback)(() => {
        if (o) {
            let t = r.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: s } = l(975732);
                s({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: c });
                return;
            }
        }
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: s } = l(858897);
            d.A.setState({ subsection: null != e ? a.Eq.GUILD : a.Eq.USER_PROFILE, scrollPosition: t }),
                s(n.X.PROFILE_PANEL, { analyticsLocations: c });
        }
    }, [e, t, c, o]);
}
l(836602), l(628965);
