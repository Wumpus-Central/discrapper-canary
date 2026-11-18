var n = i(582128),
    s = i(159001),
    u = i(591179),
    l = i(780964),
    r = i(287809),
    a = i(729934);
i(652215);
var d = i(355097);
(i(836602),
    i.d(
        t,
        {},
        {
            A: function () {
                let {
                        guild: e,
                        scrollPosition: t,
                        initialTab: c,
                        analyticsLocations: o,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    p = (0, u.X)("useOpenProfileSettings");
                return (0, n.useCallback)(() => {
                    if (p) {
                        let t = r.default.getCurrentUser();
                        if (null != t) {
                            let { openUserProfileModal: n } = i(100663);
                            n({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: o });
                            return;
                        }
                    }
                    (null != e && (0, s.V2)(e.id),
                        a.A.setState({
                            subsection: null != e ? d.Eq.GUILD : d.Eq.USER_PROFILE,
                            scrollPosition: t,
                            editingTab: c ?? "main",
                        }));
                    {
                        let { openUserSettings: e } = i(766075);
                        e(l.X.PROFILE_PANEL, { analyticsLocations: o });
                    }
                }, [e, t, c, o, p]);
            },
        },
    ));
