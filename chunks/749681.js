n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var n, _, E;
                let I = t.tab;
                switch ((s.Z.setState({ selectedTab: I }), I)) {
                    case p.GlobalDiscoveryTab.SERVERS:
                        let y = t.selectedServersTab;
                        return (
                            null != y
                                ? l.Z.setState({
                                      selectedTab: y,
                                      entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : O.Qq.UNKNOWN
                                  })
                                : l.Z.setState({ entrypoint: null !== (_ = t.entrypoint) && void 0 !== _ ? _ : O.Qq.UNKNOWN }),
                            (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case p.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let n = (0, r.PM)(),
                                { guildId: l, entrypoint: o } = t.newSessionState;
                            if (
                                (a.z8.setState({
                                    sessionId: n,
                                    guildId: null != l ? l : null,
                                    entrypoint: o,
                                    trackedOpenedFromExternalEntrypoint: !1
                                }),
                                u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == o ? void 0 : o.name,
                                    session_id: n,
                                    guild_id: l,
                                    user_id: null === (E = c.default.getCurrentUser()) || void 0 === E ? void 0 : E.id
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
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section
                                                    };
                                                case a.m_.CATEGORY:
                                                    return {
                                                        tab: p.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId)
                                                    };
                                                case a.m_.SEARCH:
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
                            if (t.section === S.GlobalDiscoveryAppsSections.STORE) {
                                if (null != t.skuId) return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                                return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, S.GlobalDiscoveryAppsSections.STORE));
                            }
                            return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return '' !== t.query && e.set('q', t.query), null != t.categoryId && e.set('category_id', t.categoryId.toString()), null != t.page && e.set('page', t.page.toString()), (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() });
                        }
                        if (null != t.categoryId) return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
                    case p.GlobalDiscoveryTab.QUESTS:
                        return (0, o.navigateToQuestHome)(t.location, t.questContent, t.questId);
                    default:
                        throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(I));
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
    r = n(726115),
    l = n(859921),
    o = n(341907),
    i = n(703656),
    c = n(594174),
    u = n(626135),
    s = n(836768),
    p = n(49898),
    d = n(981631),
    S = n(979007),
    O = n(128449);
