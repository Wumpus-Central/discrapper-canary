n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, f, T;
                let p = t.tab;
                switch ((d.Z.setState({ selectedTab: p }), p)) {
                    case u.GlobalDiscoveryTab.SERVERS:
                        let S = t.selectedServersTab;
                        return (
                            null != S
                                ? a.Z.setState({
                                      selectedTab: S,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : I.Qq.UNKNOWN
                                  })
                                : a.Z.setState({ entrypoint: null !== (f = t.entrypoint) && void 0 !== f ? f : I.Qq.UNKNOWN }),
                            (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case u.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, o.PM)(),
                                { guildId: a, entrypoint: l } = t.newSessionState;
                            if (
                                (i.z8.setState({
                                    sessionId: n,
                                    guildId: null != a ? a : null,
                                    entrypoint: l,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                _.default.track(s.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == l ? void 0 : l.name,
                                    session_id: n,
                                    guild_id: a,
                                    user_id: null === (T = c.default.getCurrentUser()) || void 0 === T ? void 0 : T.id
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = i.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case i.m_.APPLICATION:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case i.m_.CATEGORY:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case i.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        query: null !== (t = e.query) && void 0 !== t ? t : '',
                                                        page: e.page,
                                                        categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                                    };
                                            }
                                        return { tab: u.GlobalDiscoveryTab.APPS };
                                    })()
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === E.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, E.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_APPS);
                    case u.GlobalDiscoveryTab.QUESTS:
                        return (0, l.navigateToQuestHome)(t.location, t.questContent, t.questId);
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(p));
                }
            }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var i = n(258971),
    o = n(726115),
    a = n(859921),
    l = n(341907),
    r = n(703656),
    c = n(594174),
    _ = n(626135),
    d = n(836768),
    u = n(49898),
    s = n(981631),
    E = n(979007),
    I = n(128449);
