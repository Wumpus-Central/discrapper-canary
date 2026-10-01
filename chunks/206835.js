i.d(t, { A: () => a });
var E = i(582128),
    _ = i(159001),
    l = i(591179),
    d = i(780964),
    n = i(287809),
    s = i(507553);
i(652215);
var o = i(355097);
function a() {
    let {
            guild: e,
            scrollPosition: t,
            analyticsLocations: a,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = (0, l.X)("useOpenProfileSettings");
    return (0, E.useCallback)(() => {
        if (r) {
            let t = n.default.getCurrentUser();
            if (null != t) {
                let { openUserProfileModal: E } = i(402860);
                E({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: a });
                return;
            }
        }
        (null != e && (0, _.V2)(e.id),
            s.A.setState({ subsection: null != e ? o.Eq.GUILD : o.Eq.USER_PROFILE, scrollPosition: t }));
        {
            let { openUserSettings: e } = i(766075);
            e(d.X.PROFILE_PANEL, { analyticsLocations: a });
        }
    }, [e, t, a, r]);
}
i(836602);
