n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, f, h;
                let g = t.tab;
                switch ((_.Z.setState({ selectedTab: g }), g)) {
                    case d.GlobalDiscoveryTab.SERVERS:
                        let m = t.selectedServersTab;
                        return (
                            null != m
                                ? o.Z.setState({
                                      selectedTab: m,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : b.Qq.UNKNOWN
                                  })
                                : o.Z.setState({ entrypoint: null !== (f = t.entrypoint) && void 0 !== f ? f : b.Qq.UNKNOWN }),
                            (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case d.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, i.PM)(),
                                { guildId: o, entrypoint: r } = t.newSessionState;
                            if (
                                (a.z8.setState({
                                    sessionId: n,
                                    guildId: null != o ? o : null,
                                    entrypoint: r,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                s.default.track(u.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == r ? void 0 : r.name,
                                    session_id: n,
                                    guild_id: o,
                                    user_id: null === (h = c.default.getCurrentUser()) || void 0 === h ? void 0 : h.id
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = a.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case a.m_.APPLICATION:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case a.m_.CATEGORY:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case a.m_.SEARCH:
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
                            if (t.section === p.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, p.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS);
                    case d.GlobalDiscoveryTab.QUESTS:
                        return (0, r.navigateToQuestHome)({
                            fromContent: t.questContent,
                            questId: t.questId
                        });
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(g));
                }
            }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var a = n(258971),
    i = n(726115),
    o = n(859921),
    r = n(341907),
    l = n(703656),
    c = n(594174),
    s = n(626135),
    _ = n(836768),
    d = n(49898),
    u = n(981631),
    p = n(979007),
    b = n(128449);
