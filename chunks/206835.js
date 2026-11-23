var n = t(582128),
    u = t(159001),
    l = t(591179),
    s = t(780964),
    r = t(287809),
    a = t(729934);
t(652215);
var d = t(355097);
(t(836602),
    t.d(
        i,
        {},
        {
            A: function () {
                let {
                        guild: e,
                        scrollPosition: i,
                        initialTab: o,
                        analyticsLocations: c,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    f = (0, l.X)("useOpenProfileSettings");
                return (0, n.useCallback)(() => {
                    if (f) {
                        let i = r.default.getCurrentUser();
                        if (null != i) {
                            let { openUserProfileModal: n } = t(100663);
                            n({ userId: i.id, guildId: e?.id, sourceAnalyticsLocations: c });
                            return;
                        }
                    }
                    (null != e && (0, u.V2)(e.id),
                        a.A.setState({
                            subsection: null != e ? d.Eq.GUILD : d.Eq.USER_PROFILE,
                            scrollPosition: i,
                            editingTab: o ?? "main",
                        }));
                    {
                        let { openUserSettings: e } = t(766075);
                        e(s.X.PROFILE_PANEL, { analyticsLocations: c });
                    }
                }, [e, i, o, c, f]);
            },
        },
    ));
