E.d(e, { A: () => r });
var _ = E(582128),
    i = E(159001),
    l = E(591179),
    d = E(780964),
    n = E(287809),
    o = E(507553);
E(652215);
var s = E(355097);
function r() {
    let {
            guild: t,
            scrollPosition: e,
            analyticsLocations: r,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = (0, l.X)("useOpenProfileSettings");
    return (0, _.useCallback)(() => {
        if (a) {
            let e = n.default.getCurrentUser();
            if (null != e) {
                let { openUserProfileModal: _ } = E(402860);
                _({ userId: e.id, guildId: t?.id, sourceAnalyticsLocations: r });
                return;
            }
        }
        (null != t && (0, i.V2)(t.id),
            o.A.setState({ subsection: null != t ? s.Eq.GUILD : s.Eq.USER_PROFILE, scrollPosition: e }));
        {
            let { openUserSettings: t } = E(766075);
            t(d.X.PROFILE_PANEL, { analyticsLocations: r });
        }
    }, [t, e, r, a]);
}
E(836602);
