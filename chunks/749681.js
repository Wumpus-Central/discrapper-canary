n.r(e),
    n.d(e, {
        transitionToGlobalDiscovery: function () {
            return function t(e) {
                var n, I, _;
                let E = e.tab;
                switch ((s.Z.setState({ selectedTab: E }), E)) {
                    case p.GlobalDiscoveryTab.SERVERS:
                        let P = e.selectedServersTab;
                        return (
                            null != P
                                ? o.Z.setState({
                                      selectedTab: P,
                                      entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : O.Qq.UNKNOWN
                                  })
                                : o.Z.setState({ entrypoint: null !== (I = e.entrypoint) && void 0 !== I ? I : O.Qq.UNKNOWN }),
                            (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
                        );
                    case p.GlobalDiscoveryTab.APPS:
                        if (null != e.newSessionState) {
                            let n = (0, l.PM)(),
                                { guildId: o, entrypoint: a } = e.newSessionState;
                            if (
                                (r.z8.setState({
                                    sessionId: n,
                                    guildId: null != o ? o : null,
                                    entrypoint: a,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == a ? void 0 : a.name,
                                    session_id: n,
                                    guild_id: o,
                                    user_id: null === (_ = c.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id
                                }),
                                e.newSessionState.restorePreviousView)
                            )
                                return t(
                                    (function () {
                                        let { lastItem: t } = r.aQ.getState();
                                        if (null != t)
                                            switch (t.type) {
                                                case r.m_.APPLICATION:
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        applicationId: t.applicationId,
                                                        section: t.section
                                                    };
                                                case r.m_.CATEGORY:
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(t.categoryId)
                                                    };
                                                case r.m_.SEARCH:
                                                    var e;
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        query: null !== (e = t.query) && void 0 !== e ? e : '',
                                                        page: t.page,
                                                        categoryId: null != t.categoryId ? Number(t.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: p.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != e.applicationId) {
                            if (e.section === S.GlobalDiscoveryAppsSections.STORE) {
                                if (null != e.skuId) return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
                                return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(e.applicationId, S.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
                        }
                        if (null != e.query) {
                            let t = new URLSearchParams();
                            return '' !== e.query && t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
                        } else if (null != e.categoryId) return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
                        else return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
                    case p.GlobalDiscoveryTab.QUESTS:
                        return (0, a.navigateToQuestHome)(e.location, e.questContent, e.questId);
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
    l = n(726115),
    o = n(859921),
    a = n(341907),
    i = n(703656),
    c = n(594174),
    u = n(626135),
    s = n(836768),
    p = n(49898),
    d = n(981631),
    S = n(979007),
    O = n(128449);
