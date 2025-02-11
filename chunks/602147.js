n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(481060),
    o = n(132871),
    s = n(147890),
    c = n(571457),
    d = n(836768),
    u = n(749681),
    h = n(603592),
    p = n(49898),
    m = n(128449),
    g = n(46140),
    f = n(388032);
let _ = l.forwardRef(function (e, t) {
    let { selected: n, onClick: _, className: v } = e,
        C = l.useCallback(() => {
            (0, c.k5)({ source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = d.Z.getField('selectedTab');
            switch (e) {
                case p.GlobalDiscoveryTab.QUESTS:
                    return (0, u.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.QUESTS,
                        location: g.dr.DISCOVERY_COMPASS,
                        questContent: r.j.DISCOVERY_COMPASS
                    });
                case p.GlobalDiscoveryTab.SERVERS:
                    return (0, u.transitionToGlobalDiscovery)({
                        tab: p.GlobalDiscoveryTab.SERVERS,
                        entrypoint: m.Qq.GUILDS_BAR
                    });
                case p.GlobalDiscoveryTab.APPS:
                    return (0, s.dx)({
                        restorePreviousView: !0,
                        entrypoint: { name: o.n3.GLOBAL_DISCOVERY_BUTTON }
                    });
                default:
                    return (0, u.transitionToGlobalDiscovery)({ tab: e });
            }
        }, []);
    return (0, i.jsx)(h.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: v,
        onClick: () => {
            C(), void 0 !== _ && _();
        },
        selected: n,
        tooltip: f.intl.string(f.t['4nEZLi']),
        icon: a.Jmo
    });
});
