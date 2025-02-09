n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, _, p;
                let m = t.tab;
                switch ((u.Z.setState({ selectedTab: m }), m)) {
                    case d.GlobalDiscoveryTab.SERVERS:
                        let v = t.selectedServersTab;
                        return (
                            null != v
                                ? c.Z.setState({
                                      selectedTab: v,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : A.Qq.UNKNOWN
                                  })
                                : c.Z.setState({ entrypoint: null !== (_ = t.entrypoint) && void 0 !== _ ? _ : A.Qq.UNKNOWN }),
                            (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case d.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, a.PM)(),
                                { guildId: c, entrypoint: o } = t.newSessionState;
                            if (
                                (l.z8.setState({
                                    sessionId: n,
                                    guildId: null != c ? c : null,
                                    entrypoint: o,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                s.default.track(T.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == o ? void 0 : o.name,
                                    session_id: n,
                                    guild_id: c,
                                    user_id: null === (p = r.default.getCurrentUser()) || void 0 === p ? void 0 : p.id
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
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case l.m_.CATEGORY:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case l.m_.SEARCH:
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
                            if (t.section === E.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, E.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, i.uL)(T.Z5c.GLOBAL_DISCOVERY_APPS);
                    case d.GlobalDiscoveryTab.QUESTS:
                        return (0, o.navigateToQuestHome)(t.location, t.questContent, t.questId);
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(m));
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
    a = n(726115),
    c = n(859921),
    o = n(341907),
    i = n(703656),
    r = n(594174),
    s = n(626135),
    u = n(836768),
    d = n(49898),
    T = n(981631),
    E = n(979007),
    A = n(128449);
