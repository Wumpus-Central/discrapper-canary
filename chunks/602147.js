var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(481060),
    o = n(132871),
    s = n(147890),
    c = n(571457),
    u = n(836768),
    d = n(749681),
    h = n(603592),
    p = n(49898),
    m = n(128449),
    f = n(46140),
    g = n(388032);
let v = l.forwardRef(function (e, t) {
    let { selected: n, className: v } = e,
        C = l.useCallback(() => {
            (0, c.k5)({ source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = u.Z.getField('selectedTab');
            switch (e) {
                case p.GlobalDiscoveryTab.QUESTS:
                    return (0, d.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.QUESTS,
                        location: f.dr.DISCOVERY_COMPASS,
                        questContent: r.j.DISCOVERY_COMPASS
                    });
                case p.GlobalDiscoveryTab.SERVERS:
                    return (0, d.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.SERVERS,
                        entrypoint: m.Qq.GUILDS_BAR
                    });
                case p.GlobalDiscoveryTab.APPS:
                    return (0, s.goToAppDirectory)({
                        restorePreviousView: !0,
                        entrypoint: { name: o.ApplicationDirectoryEntrypointNames.GLOBAL_DISCOVERY_BUTTON }
                    });
                default:
                    return (0, d.transitionToGlobalDiscovery)({ tab: e });
            }
        }, []);
    return (0, i.jsx)(h.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: v,
        onClick: C,
        selected: n,
        tooltip: g.intl.string(g.t['4nEZLi']),
        icon: a.CompassIcon
    });
});
t.Z = v;
