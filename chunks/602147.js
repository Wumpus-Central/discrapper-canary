n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(636977),
    o = n(481060),
    s = n(571457),
    a = n(836768),
    c = n(749681),
    u = n(258971),
    d = n(603592),
    h = n(49898),
    p = n(128449),
    f = n(46140),
    g = n(388032);
let m = i.forwardRef(function (e, t) {
    let { selected: n, onClick: m, questId: b, className: _ } = e,
        y = i.useCallback(() => {
            (0, s.k5)({ source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== b ? h.GlobalDiscoveryTab.QUESTS : a.Z.getField('selectedTab');
            switch (e) {
                case h.GlobalDiscoveryTab.QUESTS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: h.GlobalDiscoveryTab.QUESTS,
                        location: f.dr.DISCOVERY_COMPASS,
                        questContent: l.j.DISCOVERY_COMPASS,
                        questId: b
                    });
                case h.GlobalDiscoveryTab.SERVERS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: h.GlobalDiscoveryTab.SERVERS,
                        entrypoint: p.Qq.GUILDS_BAR
                    });
                case h.GlobalDiscoveryTab.APPS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: h.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: u.xF.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0
                        }
                    });
                default:
                    return (0, c.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [b]);
    return (0, r.jsx)(d.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: _,
        onClick: () => {
            y(), void 0 !== m && m();
        },
        selected: n,
        tooltip: g.intl.string(g.t['4nEZLi']),
        icon: o.Jmo
    });
});
