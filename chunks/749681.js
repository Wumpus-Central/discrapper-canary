n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: function () {
            return function e(t) {
                var n, A, O;
                let E = t.tab;
                switch ((s.Z.setState({ selectedTab: E }), E)) {
                    case p.GlobalDiscoveryTab.SERVERS:
                        let _ = t.selectedServersTab;
                        return (
                            null != _
                                ? i.Z.setState({
                                      selectedTab: _,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : d.Qq.UNKNOWN
                                  })
                                : i.Z.setState({ entrypoint: null !== (A = t.entrypoint) && void 0 !== A ? A : d.Qq.UNKNOWN }),
                            (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case p.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, o.PM)(),
                                { guildId: i, entrypoint: l } = t.newSessionState;
                            if (
                                (r.z8.setState({
                                    sessionId: n,
                                    guildId: null != i ? i : null,
                                    entrypoint: l,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                u.default.track(S.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == l ? void 0 : l.name,
                                    session_id: n,
                                    guild_id: i,
                                    user_id: null === (O = a.default.getCurrentUser()) || void 0 === O ? void 0 : O.id
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
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case r.m_.CATEGORY:
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case r.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        query: null !== (t = e.query) && void 0 !== t ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: p.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === I.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, I.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        } else if (null != t.categoryId) return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS);
                    case p.GlobalDiscoveryTab.QUESTS:
                        return (0, l.navigateToQuestHome)(t.location, t.questContent, t.questId);
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(E));
                }
            };
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var r = n(258971),
    o = n(726115),
    i = n(859921),
    l = n(341907),
    c = n(703656),
    a = n(594174),
    u = n(626135),
    s = n(836768),
    p = n(49898),
    S = n(981631),
    I = n(979007),
    d = n(128449);
