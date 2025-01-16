var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(132871),
    d = n(147890),
    u = n(926061),
    h = n(31569),
    m = n(164991),
    p = n(859921),
    g = n(220068),
    f = n(836768),
    _ = n(766219),
    E = n(749681),
    I = n(49898),
    C = n(46140),
    N = n(388032),
    v = n(729922);
function S(e) {
    let { tab: t } = e,
        n = f.Z.useField('selectedTab'),
        l = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case I.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case I.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case I.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        u = r.useMemo(() => (0, _.s)(t), [t]),
        N = n === t,
        S = r.useCallback(() => {
            switch (t) {
                case I.GlobalDiscoveryTab.QUESTS:
                    return (
                        N && g.Z.resetState(),
                        (0, E.transitionToGlobalDiscovery)({
                            tab: I.GlobalDiscoveryTab.QUESTS,
                            location: C.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR
                        })
                    );
                case I.GlobalDiscoveryTab.APPS:
                    if (!N)
                        return (0, d.goToAppDirectory)({
                            restorePreviousView: !0,
                            entrypoint: { name: c.ApplicationDirectoryEntrypointNames.GLOBAL_DISCOVERY_SIDEBAR }
                        });
                    h.Z.resetState(), (0, E.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case I.GlobalDiscoveryTab.SERVERS:
                    if (!N) return (0, E.transitionToGlobalDiscovery)({ tab: t });
                    m.Z.resetState(), p.Z.resetState();
                    return;
                default:
                    return (0, E.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, N]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: S,
        className: a()(v.navItem, { [v.selected]: N }),
        children: [
            (0, i.jsx)('div', {
                className: v.navItemIcon,
                children: l
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: u
            })
        ]
    });
}
t.Z = function () {
    let e = (0, u.YP)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', {
                className: v.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: N.intl.string(N.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: v.nav,
                children: I.GLOBAL_DISCOVERY_TABS.map((t) => (t !== I.GlobalDiscoveryTab.APPS || e ? (0, i.jsx)(S, { tab: t }, t) : null))
            })
        ]
    });
};
