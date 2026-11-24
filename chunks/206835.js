var n = i(582128),
    u = i(159001),
    l = i(591179),
    s = i(780964),
    r = i(287809),
    d = i(729934);
i(652215);
var a = i(355097);
(i(836602),
    i.d(
        t,
        {},
        {
            A: function () {
                let {
                        guild: e,
                        scrollPosition: t,
                        initialTab: o,
                        analyticsLocations: c,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    f = (0, l.X)("useOpenProfileSettings");
                return (0, n.useCallback)(() => {
                    if (f) {
                        let t = r.default.getCurrentUser();
                        if (null != t) {
                            let { openUserProfileModal: n } = i(100663);
                            n({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: c });
                            return;
                        }
                    }
                    (null != e && (0, u.V2)(e.id),
                        d.A.setState({ subsection: null != e ? a.Eq.GUILD : a.Eq.USER_PROFILE, scrollPosition: t }));
                    {
                        let { openUserSettings: e } = i(766075);
                        e(s.X.PROFILE_PANEL, { analyticsLocations: c });
                    }
                }, [e, t, o, c, f]);
            },
        },
    ));
