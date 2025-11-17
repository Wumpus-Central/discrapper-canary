n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(636977),
    o = n(481060),
    a = n(571457),
    s = n(836768),
    c = n(749681),
    u = n(258971),
    d = n(603592),
    p = n(49898),
    f = n(128449),
    h = n(46140),
    g = n(388032);
let m = i.forwardRef(function (e, t) {
    let { selected: n, onClick: m, questId: b, className: _ } = e,
        y = i.useCallback(() => {
            (0, a.k5)({ source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== b ? p.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
            switch (e) {
                case p.GlobalDiscoveryTab.QUESTS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.QUESTS,
                        location: h.dr.DISCOVERY_COMPASS,
                        questContent: l.j.DISCOVERY_COMPASS,
                        questId: b,
                    });
                case p.GlobalDiscoveryTab.SERVERS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.SERVERS,
                        entrypoint: f.Qq.GUILDS_BAR,
                    });
                case p.GlobalDiscoveryTab.APPS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: u.xF.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, c.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [b]);
    return (0, r.jsx)(d.Z, {
        id: "guild-discover-button",
        ref: t,
        className: _,
        onClick: () => {
            y(), void 0 !== m && m();
        },
        selected: n,
        tooltip: g.intl.string(g.t["4nEZLk"]),
        icon: o.Jmo,
    });
});
