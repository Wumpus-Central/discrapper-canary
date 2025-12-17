n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    l = n(636977),
    a = n(481060),
    o = n(571457),
    s = n(836768),
    c = n(749681),
    u = n(258971),
    d = n(603592),
    f = n(49898),
    h = n(128449),
    p = n(324805),
    g = n(388032);
let b = i.forwardRef(function (e, t) {
    let { selected: n, onClick: b, questId: m, className: y } = e,
        O = i.useCallback(() => {
            (0, o.k5)({ source: f.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== m ? f.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
            switch (e) {
                case f.GlobalDiscoveryTab.QUESTS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.QUESTS,
                        location: p.dr.DISCOVERY_COMPASS,
                        questContent: l.j.DISCOVERY_COMPASS,
                        questId: m,
                    });
                case f.GlobalDiscoveryTab.SERVERS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.SERVERS,
                        entrypoint: h.Qq.GUILDS_BAR,
                    });
                case f.GlobalDiscoveryTab.APPS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: u.xF.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, c.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [m]);
    return (0, r.jsx)(d.Z, {
        id: "guild-discover-button",
        ref: t,
        className: y,
        onClick: () => {
            O(), void 0 !== b && b();
        },
        selected: n,
        tooltip: g.intl.string(g.t["4nEZLk"]),
        icon: a.Jmo,
    });
});
