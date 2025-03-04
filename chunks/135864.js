n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(636977),
    s = n(481060),
    c = n(31569),
    u = n(258971),
    d = n(164991),
    p = n(859921),
    h = n(220068),
    f = n(836768),
    g = n(766219),
    m = n(749681),
    b = n(49898),
    _ = n(46140),
    E = n(388032),
    O = n(721394);
function N(e) {
    let { tab: t } = e,
        n = f.Z.useField('selectedTab'),
        l = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case b.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(s.QTo, { color: 'currentColor' });
                        case b.GlobalDiscoveryTab.APPS:
                            return (0, r.jsx)(s.jje, { color: 'currentColor' });
                        case b.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(s.qDn, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        E = i.useMemo(() => (0, g.s)(t), [t]),
        N = n === t,
        v = i.useCallback(() => {
            switch (t) {
                case b.GlobalDiscoveryTab.QUESTS:
                    return (
                        N && h.Z.resetState(),
                        (0, m.transitionToGlobalDiscovery)({
                            tab: b.GlobalDiscoveryTab.QUESTS,
                            location: _.dr.DISCOVERY_SIDEBAR,
                            questContent: a.j.DISCOVERY_SIDEBAR
                        })
                    );
                case b.GlobalDiscoveryTab.APPS:
                    if (!N)
                        return (0, m.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: u.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0
                            }
                        });
                    c.Z.resetState(), (0, m.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case b.GlobalDiscoveryTab.SERVERS:
                    if (!N) return (0, m.transitionToGlobalDiscovery)({ tab: t });
                    d.Z.resetState(), p.Z.resetState();
                    return;
                default:
                    return (0, m.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, N]);
    return (0, r.jsxs)(s.P3F, {
        onClick: v,
        className: o()(O.navItem, { [O.selected]: N }),
        children: [
            (0, r.jsx)('div', {
                className: O.navItemIcon,
                children: l
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: E
            })
        ]
    });
}
let v = function () {
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsx)('div', {
                className: O.header,
                children: (0, r.jsx)(s.X6q, {
                    variant: 'text-lg/semibold',
                    children: E.NW.string(E.t['1KqYnp'])
                })
            }),
            (0, r.jsx)('nav', {
                className: O.nav,
                children: b.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(N, { tab: e }, e))
            })
        ]
    });
};
