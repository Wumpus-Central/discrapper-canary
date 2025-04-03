n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, p, b;
                let f = t.tab;
                switch ((d.Z.setState({ selectedTab: f }), f)) {
                    case u.GlobalDiscoveryTab.SERVERS:
                        let _ = t.selectedServersTab;
                        return (
                            null != _
                                ? l.Z.setState({
                                      selectedTab: _,
                                      entrypoint: null != (n = t.entrypoint) ? n : h.Qq.UNKNOWN
                                  })
                                : l.Z.setState({ entrypoint: null != (p = t.entrypoint) ? p : h.Qq.UNKNOWN }),
                            (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case u.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, a.PM)(),
                                { guildId: l, entrypoint: i } = t.newSessionState;
                            if (
                                (r.z8.setState({
                                    sessionId: n,
                                    guildId: null != l ? l : null,
                                    entrypoint: i,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                c.default.track(m.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == i ? void 0 : i.name,
                                    session_id: n,
                                    guild_id: l,
                                    user_id: null == (b = s.default.getCurrentUser()) ? void 0 : b.id
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
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case r.m_.CATEGORY:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case r.m_.SEARCH:
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
                                if (null != t.skuId) return (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                else return (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, x.GlobalDiscoveryAppsSections.STORE));
                            return (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, o.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS);
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
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var r = n(258971),
    a = n(726115),
    l = n(859921),
    i = n(341907),
    o = n(703656),
    s = n(594174),
    c = n(626135),
    d = n(836768),
    u = n(49898),
    m = n(981631),
    x = n(979007),
    h = n(128449);
