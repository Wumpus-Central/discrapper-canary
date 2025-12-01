n.r(t),
    n.d(t, { transitionToGlobalDiscovery: () => m }),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(415506);
var r = n(258971),
    i = n(726115),
    a = n(859921),
    o = n(110560),
    s = n(703656),
    l = n(594174),
    c = n(626135),
    u = n(836768),
    d = n(49898),
    f = n(981631),
    p = n(979007),
    _ = n(128449);
function m(e) {
    var t, n, g;
    let E = e.tab;
    switch ((u.Z.setState({ selectedTab: E }), E)) {
        case d.GlobalDiscoveryTab.SERVERS:
            let b = e.selectedServersTab;
            return (
                null != b
                    ? a.Z.setState({
                          selectedTab: b,
                          entrypoint: null != (t = e.entrypoint) ? t : _.Qq.UNKNOWN,
                      })
                    : a.Z.setState({ entrypoint: null != (n = e.entrypoint) ? n : _.Qq.UNKNOWN }),
                (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
        case d.GlobalDiscoveryTab.APPS:
            if (null != e.newSessionState) {
                let t = (0, i.PM)(),
                    { guildId: n, entrypoint: a } = e.newSessionState;
                if (
                    (r.z8.setState({
                        sessionId: t,
                        guildId: null != n ? n : null,
                        entrypoint: a,
                        trackedOpenedFromExternalEntrypoint: !1,
                    }),
                    c.default.track(f.rMx.APP_DIRECTORY_OPENED, {
                        source: null == a ? void 0 : a.name,
                        session_id: t,
                        guild_id: n,
                        user_id: null == (g = l.default.getCurrentUser()) ? void 0 : g.id,
                    }),
                    e.newSessionState.restorePreviousView)
                )
                    return m(h());
            }
            if (null != e.applicationId) {
                if (e.section === p.GlobalDiscoveryAppsSections.STORE)
                    if (null != e.skuId)
                        return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
                    else
                        return (0, s.uL)(
                            f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                e.applicationId,
                                p.GlobalDiscoveryAppsSections.STORE,
                            ),
                        );
                return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            }
            if (null != e.query) {
                let t = new URLSearchParams();
                return (
                    "" !== e.query && t.set("q", e.query),
                    null != e.categoryId && t.set("category_id", e.categoryId.toString()),
                    null != e.page && t.set("page", e.page.toString()),
                    (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() })
                );
            }
            if (null != e.categoryId) return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS);
        case d.GlobalDiscoveryTab.QUESTS:
            return (0, o.navigateToQuestHome)({
                fromContent: e.questContent,
                questId: e.questId,
                forceDiscoveryQuestHomeRoute: !0,
            });
        default:
            throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(E));
    }
}
function h() {
    let { lastItem: e } = r.aQ.getState();
    if (null != e)
        switch (e.type) {
            case r.m_.APPLICATION:
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    applicationId: e.applicationId,
                    section: e.section,
                };
            case r.m_.CATEGORY:
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    categoryId: Number(e.categoryId),
                };
            case r.m_.SEARCH:
                var t;
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    query: null != (t = e.query) ? t : "",
                    page: e.page,
                    categoryId: null != e.categoryId ? Number(e.categoryId) : void 0,
                };
        }
    return { tab: d.GlobalDiscoveryTab.APPS };
}
