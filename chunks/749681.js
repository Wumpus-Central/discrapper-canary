r.r(t),
    r.d(t, {
        transitionToGlobalDiscovery: () =>
            function e(t) {
                var r, m, b;
                let S = t.tab;
                switch ((u.Z.setState({ selectedTab: S }), S)) {
                    case d.GlobalDiscoveryTab.SERVERS:
                        let O = t.selectedServersTab;
                        return (
                            null != O
                                ? l.Z.setState({
                                      selectedTab: O,
                                      entrypoint: null != (r = t.entrypoint) ? r : y.Qq.UNKNOWN,
                                  })
                                : l.Z.setState({ entrypoint: null != (m = t.entrypoint) ? m : y.Qq.UNKNOWN }),
                            (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                        );
                    case d.GlobalDiscoveryTab.APPS:
                        if (null != t.newSessionState) {
                            let r = (0, a.PM)(),
                                { guildId: l, entrypoint: i } = t.newSessionState;
                            if (
                                (n.z8.setState({
                                    sessionId: r,
                                    guildId: null != l ? l : null,
                                    entrypoint: i,
                                    trackedOpenedFromExternalEntrypoint: !1,
                                }),
                                c.default.track(p.rMx.APP_DIRECTORY_OPENED, {
                                    source: null == i ? void 0 : i.name,
                                    session_id: r,
                                    guild_id: l,
                                    user_id: null == (b = s.default.getCurrentUser()) ? void 0 : b.id,
                                }),
                                t.newSessionState.restorePreviousView)
                            )
                                return e(
                                    (function () {
                                        let { lastItem: e } = n.aQ.getState();
                                        if (null != e)
                                            switch (e.type) {
                                                case n.m_.APPLICATION:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        applicationId: e.applicationId,
                                                        section: e.section,
                                                    };
                                                case n.m_.CATEGORY:
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        categoryId: Number(e.categoryId),
                                                    };
                                                case n.m_.SEARCH:
                                                    var t;
                                                    return {
                                                        tab: d.GlobalDiscoveryTab.APPS,
                                                        query: null != (t = e.query) ? t : "",
                                                        page: e.page,
                                                        categoryId:
                                                            null != e.categoryId ? Number(e.categoryId) : void 0,
                                                    };
                                            }
                                        return { tab: d.GlobalDiscoveryTab.APPS };
                                    })(),
                                );
                        }
                        if (null != t.applicationId) {
                            if (t.section === f.GlobalDiscoveryAppsSections.STORE)
                                if (null != t.skuId)
                                    return (0, o.uL)(
                                        p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                                    );
                                else
                                    return (0, o.uL)(
                                        p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t.applicationId,
                                            f.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                        }
                        if (null != t.query) {
                            let e = new URLSearchParams();
                            return (
                                "" !== t.query && e.set("q", t.query),
                                null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                                null != t.page && e.set("page", t.page.toString()),
                                (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
                            );
                        }
                        if (null != t.categoryId)
                            return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                        else return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
                    case d.GlobalDiscoveryTab.QUESTS:
                        return (0, i.navigateToQuestHome)({
                            fromContent: t.questContent,
                            questId: t.questId,
                        });
                    default:
                        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(S));
                }
            },
    }),
    r(65234),
    r(111804),
    r(490233),
    r(97749),
    r(388685),
    r(415506);
var n = r(258971),
    a = r(726115),
    l = r(859921),
    i = r(110560),
    o = r(703656),
    s = r(594174),
    c = r(626135),
    u = r(836768),
    d = r(49898),
    p = r(981631),
    f = r(979007),
    y = r(128449);
