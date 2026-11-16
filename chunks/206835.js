var E = i(582128),
    n = i(159001),
    _ = i(591179),
    d = i(780964),
    l = i(287809),
    a = i(729934);
i(652215);
var s = i(355097);
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
                        analyticsLocations: r,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    u = (0, _.X)("useOpenProfileSettings");
                return (0, E.useCallback)(() => {
                    if (u) {
                        let t = l.default.getCurrentUser();
                        if (null != t) {
                            let { openUserProfileModal: E } = i(702476);
                            E({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: r });
                            return;
                        }
                    }
                    (null != e && (0, n.V2)(e.id),
                        a.A.setState({
                            subsection: null != e ? s.Eq.GUILD : s.Eq.USER_PROFILE,
                            scrollPosition: t,
                            editingTab: o ?? "main",
                        }));
                    {
                        let { openUserSettings: e } = i(766075);
                        e(d.X.PROFILE_PANEL, { analyticsLocations: r });
                    }
                }, [e, t, o, r, u]);
            },
        },
    ));
