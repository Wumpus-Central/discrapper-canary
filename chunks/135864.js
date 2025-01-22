var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(132871),
    d = n(147890),
    u = n(31569),
    h = n(164991),
    m = n(859921),
    p = n(220068),
    g = n(836768),
    f = n(766219),
    _ = n(749681),
    E = n(49898),
    I = n(46140),
    C = n(388032),
    N = n(729922);
function v(e) {
    let { tab: t } = e,
        n = g.Z.useField('selectedTab'),
        l = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        C = r.useMemo(() => (0, f.s)(t), [t]),
        v = n === t,
        S = r.useCallback(() => {
            switch (t) {
                case E.GlobalDiscoveryTab.QUESTS:
                    return (
                        v && p.Z.resetState(),
                        (0, _.transitionToGlobalDiscovery)({
                            tab: E.GlobalDiscoveryTab.QUESTS,
                            location: I.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR
                        })
                    );
                case E.GlobalDiscoveryTab.APPS:
                    if (!v)
                        return (0, d.dx)({
                            restorePreviousView: !0,
                            entrypoint: { name: c.n3.GLOBAL_DISCOVERY_SIDEBAR }
                        });
                    u.Z.resetState(), (0, _.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case E.GlobalDiscoveryTab.SERVERS:
                    if (!v) return (0, _.transitionToGlobalDiscovery)({ tab: t });
                    h.Z.resetState(), m.Z.resetState();
                    return;
                default:
                    return (0, _.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, v]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: S,
        className: a()(N.navItem, { [N.selected]: v }),
        children: [
            (0, i.jsx)('div', {
                className: N.navItemIcon,
                children: l
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: C
            })
        ]
    });
}
t.Z = function () {
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsx)('div', {
                className: N.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: C.intl.string(C.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: N.nav,
                children: E.GLOBAL_DISCOVERY_TABS.map((e) => (0, i.jsx)(v, { tab: e }, e))
            })
        ]
    });
};
