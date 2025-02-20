n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, E, m;
                let A = t.tab;
                switch ((u.Z.setState({ selectedTab: A }), A)) {
                    case d.GlobalDiscoveryTab.SERVERS:
                        let v = t.selectedServersTab;
                        return (
                            null != v
                                ? l.Z.setState({
                                      selectedTab: v,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : T.Qq.UNKNOWN
                                  })
                                : l.Z.setState({ entrypoint: null !== (E = t.entrypoint) && void 0 !== E ? E : T.Qq.UNKNOWN }),
                            (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case d.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, c.PM)(),
                                { guildId: l, entrypoint: a } = t.newSessionState;
                            if (
                                (r.z8.setState({
                                    sessionId: n,
                                    guildId: null != l ? l : null,
                                    entrypoint: a,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                s.default.track(p.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == a ? void 0 : a.name,
                                    session_id: n,
                                    guild_id: l,
                                    user_id: null === (m = i.default.getCurrentUser()) || void 0 === m ? void 0 : m.id
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
                                                        query: null !== (t = e.query) && void 0 !== t ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: d.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === O.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, O.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
                    case d.GlobalDiscoveryTab.QUESTS:
                        return (0, a.navigateToQuestHome)({
                            fromContent: t.questContent,
                            questId: t.questId
                        });
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(A));
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
    c = n(726115),
    l = n(859921),
    a = n(341907),
    o = n(703656),
    i = n(594174),
    s = n(626135),
    u = n(836768),
    d = n(49898),
    p = n(981631),
    O = n(979007),
    T = n(128449);
