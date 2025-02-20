n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(636977),
    o = n(481060),
    a = n(132871),
    s = n(147890),
    c = n(571457),
    u = n(836768),
    d = n(749681),
    p = n(603592),
    h = n(49898),
    f = n(128449),
    g = n(46140),
    m = n(388032);
let b = i.forwardRef(function (e, t) {
    let { selected: n, onClick: b, questId: v, className: y } = e,
        _ = i.useCallback(() => {
            (0, c.k5)({ source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== v ? h.GlobalDiscoveryTab.QUESTS : u.Z.getField('selectedTab');
            switch (e) {
                case h.GlobalDiscoveryTab.QUESTS:
                    return (0, d.transitionToGlobalDiscovery)({
                        tab: h.GlobalDiscoveryTab.QUESTS,
                        location: g.dr.DISCOVERY_COMPASS,
                        questContent: l.j.DISCOVERY_COMPASS,
                        questId: v
                    });
                case h.GlobalDiscoveryTab.SERVERS:
                    return (0, d.transitionToGlobalDiscovery)({
                        tab: h.GlobalDiscoveryTab.SERVERS,
                        entrypoint: f.Qq.GUILDS_BAR
                    });
                case h.GlobalDiscoveryTab.APPS:
                    return (0, s.dx)({
                        restorePreviousView: !0,
                        entrypoint: { name: a.n3.GLOBAL_DISCOVERY_BUTTON }
                    });
                default:
                    return (0, d.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [v]);
    return (0, r.jsx)(p.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: y,
        onClick: () => {
            _(), void 0 !== b && b();
        },
        selected: n,
        tooltip: m.NW.string(m.t['4nEZLi']),
        icon: o.Jmo
    });
});
