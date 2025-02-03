n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, I, T;
                let A = t.tab;
                switch ((_.Z.setState({ selectedTab: A }), A)) {
                    case c.GlobalDiscoveryTab.SERVERS:
                        let C = t.selectedServersTab;
                        return (
                            null != C
                                ? a.Z.setState({
                                      selectedTab: C,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : S.Qq.UNKNOWN
                                  })
                                : a.Z.setState({ entrypoint: null !== (I = t.entrypoint) && void 0 !== I ? I : S.Qq.UNKNOWN }),
                            (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case c.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, i.PM)(),
                                { guildId: a, entrypoint: r } = t.newSessionState;
                            if (
                                (l.z8.setState({
                                    sessionId: n,
                                    guildId: null != a ? a : null,
                                    entrypoint: r,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == r ? void 0 : r.name,
                                    session_id: n,
                                    guild_id: a,
                                    user_id: null === (T = E.default.getCurrentUser()) || void 0 === T ? void 0 : T.id
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = l.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case l.m_.APPLICATION:
                                                    return {
                                                        tab: c.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case l.m_.CATEGORY:
                                                    return {
                                                        tab: c.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case l.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: c.GlobalDiscoveryTab.APPS,
                                                        query: null !== (t = e.query) && void 0 !== t ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: c.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === s.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, s.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
                    case c.GlobalDiscoveryTab.QUESTS:
                        return (0, r.navigateToQuestHome)(t.location, t.questContent, t.questId);
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
var l = n(258971),
    i = n(726115),
    a = n(859921),
    r = n(341907),
    o = n(703656),
    E = n(594174),
    u = n(626135),
    _ = n(836768),
    c = n(49898),
    d = n(981631),
    s = n(979007),
    S = n(128449);
