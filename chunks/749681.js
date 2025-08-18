t.r(n),
    t.d(n, {
        transitionToGlobalDiscovery: () =>
            function e(n) {
                var t, C, x;
                let b = n.tab;
                switch ((d.Z.setState({ selectedTab: b }), b)) {
                    case u.GlobalDiscoveryTab.SERVERS:
                        let _ = n.selectedServersTab;
                        return (
                            null != _
                                ? a.Z.setState({
                                      selectedTab: _,
                                      entrypoint: null != (t = n.entrypoint) ? t : m.Qq.UNKNOWN,
                                  })
                                : a.Z.setState({ entrypoint: null != (C = n.entrypoint) ? C : m.Qq.UNKNOWN }),
                            (0, l.uL)(h.Z5c.GLOBAL_DISCOVERY_SERVERS, n.extra)
                        );
                    case u.GlobalDiscoveryTab.APPS:
                        if (null != n.newSessionState) {
                            let t = (0, o.PM)(),
                                { guildId: a, entrypoint: i } = n.newSessionState;
                            if (
                                (c.z8.setState({
                                    sessionId: t,
                                    guildId: null != a ? a : null,
                                    entrypoint: i,
                                    trackedOpenedFromExternalEntrypoint: !1,
                                }),
                                s.default.track(h.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == i ? void 0 : i.name,
                                    session_id: t,
                                    guild_id: a,
                                    user_id: null == (x = r.default.getCurrentUser()) ? void 0 : x.id,
                                }),
                                n.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = c.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case c.m_.APPLICATION:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section,
                                                    };
                                                case c.m_.CATEGORY:
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId),
                                                    };
                                                case c.m_.SEARCH:
                                                    var n;
                                                    return {
                                                        tab: u.GlobalDiscoveryTab.APPS,
                                                        query: null != (n = e.query) ? n : "",
                                                        page: e.page,
                                                        categoryId:
                                                            null != e.categoryId ? Number(e.categoryId) : void 0,
                                                    };
                                            }
                                        return { tab: u.GlobalDiscoveryTab.APPS };
                                    })(),
                                );
                        }
                        if (null != n.applicationId) {
                            if (n.section === p.GlobalDiscoveryAppsSections.STORE)
                                if (null != n.skuId)
                                    return (0, l.uL)(
                                        h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n.applicationId, n.skuId),
                                    );
                                else
                                    return (0, l.uL)(
                                        h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            n.applicationId,
                                            p.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            return (0, l.uL)(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(n.applicationId));
                        }
                        if (null != n.query) {
                            let e = new URLSearchParams();
                            return (
                                "" !== n.query && e.set("q", n.query),
                                null != n.categoryId && e.set("category_id", n.categoryId.toString()),
                                null != n.page && e.set("page", n.page.toString()),
                                (0, l.uL)(h.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
                            );
                        }
                        if (null != n.categoryId)
                            return (0, l.uL)(h.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(n.categoryId.toString()));
                        else return (0, l.uL)(h.Z5c.GLOBAL_DISCOVERY_APPS);
                    case u.GlobalDiscoveryTab.QUESTS:
                        return (0, i.navigateToQuestHome)({
                            fromContent: n.questContent,
                            questId: n.questId,
                        });
                    default:
                        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(b));
                }
            },
    }),
    t(65234),
    t(111804),
    t(490233),
    t(97749),
    t(388685),
    t(415506);
var c = t(258971),
    o = t(726115),
    a = t(859921),
    i = t(110560),
    l = t(703656),
    r = t(594174),
    s = t(626135),
    d = t(836768),
    u = t(49898),
    h = t(981631),
    p = t(979007),
    m = t(128449);
