n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, g, m;
                let b = t.tab;
                switch ((u.Z.setState({ selectedTab: b }), b)) {
                    case d.GlobalDiscoveryTab.SERVERS:
                        let y = t.selectedServersTab;
                        return (
                            null != y
                                ? l.Z.setState({
                                      selectedTab: y,
                                      entrypoint: null != (n = t.entrypoint) ? n : f.Qq.UNKNOWN
                                  })
                                : l.Z.setState({ entrypoint: null != (g = t.entrypoint) ? g : f.Qq.UNKNOWN }),
                            (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case d.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, i.PM)(),
                                { guildId: l, entrypoint: o } = t.newSessionState;
                            if (
                                (r.z8.setState({
                                    sessionId: n,
                                    guildId: null != l ? l : null,
                                    entrypoint: o,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                c.default.track(p.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == o ? void 0 : o.name,
                                    session_id: n,
                                    guild_id: l,
                                    user_id: null == (m = s.default.getCurrentUser()) ? void 0 : m.id
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = r.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case r.m_.APPLICATION:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case r.m_.CATEGORY:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case r.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        query: null != (t = e.query) ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: d.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === h.GlobalDiscoveryAppsSections.STORE)
                                if (null != t.skuId) return (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                else return (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, h.GlobalDiscoveryAppsSections.STORE));
                            return (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, a.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
                    case d.GlobalDiscoveryTab.QUESTS:
                        return (0, o.navigateToQuestHome)({
                            fromContent: t.questContent,
                            questId: t.questId
                        });
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(b));
                }
            }
    }),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(415506);
var r = n(258971),
    i = n(726115),
    l = n(859921),
    o = n(341907),
    a = n(703656),
    s = n(594174),
    c = n(626135),
    u = n(836768),
    d = n(49898),
    p = n(981631),
    h = n(979007),
    f = n(128449);
