var E = i(582128),
    _ = i(159001),
    l = i(591179),
    d = i(780964),
    n = i(287809),
    s = i(729934);
i(652215);
var o = i(355097);
(i(836602),
    i.d(
        t,
        {},
        {
            A: function () {
                let {
                        guild: e,
                        scrollPosition: t,
                        initialTab: a,
                        analyticsLocations: r,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    u = (0, l.X)("useOpenProfileSettings");
                return (0, E.useCallback)(() => {
                    if (u) {
                        let t = n.default.getCurrentUser();
                        if (null != t) {
                            let { openUserProfileModal: E } = i(702476);
                            E({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: r });
                            return;
                        }
                    }
                    (null != e && (0, _.V2)(e.id),
                        s.A.setState({ subsection: null != e ? o.Eq.GUILD : o.Eq.USER_PROFILE, scrollPosition: t }));
                    {
                        let { openUserSettings: e } = i(766075);
                        e(d.X.PROFILE_PANEL, { analyticsLocations: r });
                    }
                }, [e, t, a, r, u]);
            },
        },
    ));
