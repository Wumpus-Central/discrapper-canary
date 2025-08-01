(a.r(t),
    a.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var a, h, b;
                let f = t.tab;
                switch ((d.Z.setState({ selectedTab: f }), f)) {
                    case u.GlobalDiscoveryTab.SERVERS:
                        let v = t.selectedServersTab;
                        return (
                            null != v
                                ? l.Z.setState({
                                      selectedTab: v,
                                      entrypoint: null != (a = t.entrypoint) ? a : p.Qq.UNKNOWN
                                  })
                                : l.Z.setState({ entrypoint: null != (h = t.entrypoint) ? h : p.Qq.UNKNOWN }),
                            (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case u.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let a = (0, r.PM)(),
                                { guildId: l, entrypoint: i } = t.newSessionState;
                            if (
                                (n.z8.setState({
                                    sessionId: a,
                                    guildId: null != l ? l : null,
                                    entrypoint: i,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                c.default.track(m.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == i ? void 0 : i.name,
                                    session_id: a,
                                    guild_id: l,
                                    user_id: null == (b = o.default.getCurrentUser()) ? void 0 : b.id
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = n.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case n.m_.APPLICATION:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case n.m_.CATEGORY:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case n.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        query: null != (t = e.query) ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: u.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === x.GlobalDiscoveryAppsSections.STORE)
                                if (null != t.skuId) return (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                else return (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, x.GlobalDiscoveryAppsSections.STORE));
                            return (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return ('' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() }));
                        }
                        if (null != t.categoryId) return (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, s.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS);
                    case u.GlobalDiscoveryTab.QUESTS:
                        return (0, i.navigateToQuestHome)({
                            fromContent: t.questContent,
                            questId: t.questId
                        });
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(f));
                }
            }
    }),
    a(65234),
    a(111804),
    a(490233),
    a(97749),
    a(388685),
    a(415506));
var n = a(258971),
    r = a(726115),
    l = a(859921),
    i = a(110560),
    s = a(703656),
    o = a(594174),
    c = a(626135),
    d = a(836768),
    u = a(49898),
    m = a(981631),
    x = a(979007),
    p = a(128449);
