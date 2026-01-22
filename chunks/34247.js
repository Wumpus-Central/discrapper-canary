n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(696292),
    a = n(397927),
    s = n(533129),
    o = n(726845),
    c = n(837057),
    u = n(310419),
    d = n(606256),
    f = n(488995),
    p = n(324580),
    h = n(654487),
    b = n(985018);
let g = l.forwardRef(function (e, t) {
    let { selected: n, onClick: g, questId: m, className: A } = e,
        y = l.useCallback(() => {
            (0, s.WL)({
                source: f.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON,
            });
            let e = void 0 !== m ? f.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
            switch (e) {
                case f.GlobalDiscoveryTab.QUESTS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.QUESTS,
                        location: h.rE.DISCOVERY_COMPASS,
                        questContent: i.u.DISCOVERY_COMPASS,
                        questId: m,
                    });
                case f.GlobalDiscoveryTab.SERVERS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.SERVERS,
                        entrypoint: p.J8.GUILDS_BAR,
                    });
                case f.GlobalDiscoveryTab.APPS:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: f.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.GLOBAL_DISCOVERY_BUTTON,
                            },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, c.transitionToGlobalDiscovery)({
                        tab: e,
                    });
            }
        }, [m]);
    return (0, r.jsx)(d.A, {
        id: "guild-discover-button",
        ref: t,
        className: A,
        onClick: () => {
            y(), void 0 !== g && g();
        },
        selected: n,
        tooltip: b.intl.string(b.t["4nEZLk"]),
        icon: a.QGJ,
    });
});
