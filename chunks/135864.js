n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(636977),
    s = n(481060),
    c = n(456100),
    u = n(31569),
    d = n(258971),
    p = n(164991),
    h = n(859921),
    f = n(220068),
    g = n(836768),
    m = n(766219),
    b = n(749681),
    _ = n(49898),
    E = n(46140),
    O = n(388032),
    N = n(444657);
function y(e) {
    let { tab: t } = e,
        { enabled: n } = c.c.useExperiment({ location: 'GlobalDiscoverySidebar' }, { autoTrackExposure: !0 }),
        l = g.Z.useField('selectedTab'),
        O = i.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case _.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(s.QTo, { color: 'currentColor' });
                        case _.GlobalDiscoveryTab.APPS:
                            return t ? (0, r.jsx)(s.iWm, { color: 'currentColor' }) : (0, r.jsx)(s.jje, { color: 'currentColor' });
                        case _.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(s.qDn, { color: 'currentColor' });
                    }
                })(t, n),
            [t, n]
        ),
        y = i.useMemo(() => (0, m.s)(t), [t]),
        I = l === t,
        v = i.useCallback(() => {
            switch (t) {
                case _.GlobalDiscoveryTab.QUESTS:
                    return (
                        I && f.Z.resetState(),
                        (0, b.transitionToGlobalDiscovery)({
                            tab: _.GlobalDiscoveryTab.QUESTS,
                            location: E.dr.DISCOVERY_SIDEBAR,
                            questContent: o.j.DISCOVERY_SIDEBAR
                        })
                    );
                case _.GlobalDiscoveryTab.APPS:
                    if (!I)
                        return (0, b.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: d.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0
                            }
                        });
                    u.Z.resetState(), (0, b.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case _.GlobalDiscoveryTab.SERVERS:
                    if (!I) return (0, b.transitionToGlobalDiscovery)({ tab: t });
                    p.Z.resetState(), h.Z.resetState();
                    return;
                default:
                    return (0, b.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, I]);
    return (0, r.jsxs)(s.P3F, {
        onClick: v,
        className: a()(N.navItem, { [N.selected]: I }),
        children: [
            (0, r.jsx)('div', {
                className: N.navItemIcon,
                children: O
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: y
            })
        ]
    });
}
let I = function () {
    return (0, r.jsxs)('div', {
        className: N.container,
        children: [
            (0, r.jsx)('div', {
                className: N.header,
                children: (0, r.jsx)(s.X6q, {
                    variant: 'text-lg/semibold',
                    children: O.NW.string(O.t['1KqYnp'])
                })
            }),
            (0, r.jsx)('nav', {
                className: N.nav,
                children: _.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(y, { tab: e }, e))
            })
        ]
    });
};
