n.d(t, { Z: () => T });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(636977),
    o = n(481060),
    c = n(132871),
    d = n(147890),
    u = n(31569),
    h = n(164991),
    m = n(859921),
    p = n(220068),
    g = n(836768),
    _ = n(766219),
    f = n(749681),
    E = n(49898),
    I = n(46140),
    C = n(388032),
    v = n(729922);
function N(e) {
    let { tab: t } = e,
        n = g.Z.useField('selectedTab'),
        r = l.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.QTo, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(o.jje, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(o.qDn, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        C = l.useMemo(() => (0, _.s)(t), [t]),
        N = n === t,
        T = l.useCallback(() => {
            switch (t) {
                case E.GlobalDiscoveryTab.QUESTS:
                    return (
                        N && p.Z.resetState(),
                        (0, f.transitionToGlobalDiscovery)({
                            tab: E.GlobalDiscoveryTab.QUESTS,
                            location: I.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR
                        })
                    );
                case E.GlobalDiscoveryTab.APPS:
                    if (!N)
                        return (0, d.dx)({
                            restorePreviousView: !0,
                            entrypoint: { name: c.n3.GLOBAL_DISCOVERY_SIDEBAR }
                        });
                    u.Z.resetState(), (0, f.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case E.GlobalDiscoveryTab.SERVERS:
                    if (!N) return (0, f.transitionToGlobalDiscovery)({ tab: t });
                    h.Z.resetState(), m.Z.resetState();
                    return;
                default:
                    return (0, f.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, N]);
    return (0, i.jsxs)(o.P3F, {
        onClick: T,
        className: a()(v.navItem, { [v.selected]: N }),
        children: [
            (0, i.jsx)('div', {
                className: v.navItemIcon,
                children: r
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: C
            })
        ]
    });
}
let T = function () {
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', {
                className: v.header,
                children: (0, i.jsx)(o.X6q, {
                    variant: 'text-lg/semibold',
                    children: C.intl.string(C.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: v.nav,
                children: E.GLOBAL_DISCOVERY_TABS.map((e) => (0, i.jsx)(N, { tab: e }, e))
            })
        ]
    });
};
