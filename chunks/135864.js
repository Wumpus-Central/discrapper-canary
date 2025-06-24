n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(636977),
    s = n(481060),
    c = n(456100),
    u = n(930446),
    d = n(31569),
    p = n(258971),
    h = n(164991),
    f = n(859921),
    g = n(220068),
    m = n(626135),
    b = n(836768),
    _ = n(766219),
    E = n(749681),
    O = n(49898),
    y = n(981631),
    I = n(46140),
    v = n(388032),
    C = n(444657);
function S(e) {
    let { tab: t } = e,
        { enabled: n } = c.c.useExperiment({ location: 'GlobalDiscoverySidebar' }, { autoTrackExposure: !0 }),
        l = b.Z.useField('selectedTab'),
        v = i.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case O.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(s.QTo, { color: 'currentColor' });
                        case O.GlobalDiscoveryTab.APPS:
                            return t ? (0, r.jsx)(s.iWm, { color: 'currentColor' }) : (0, r.jsx)(s.jje, { color: 'currentColor' });
                        case O.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(s.qDn, { color: 'currentColor' });
                    }
                })(t, n),
            [t, n]
        ),
        S = i.useMemo(() => (0, _.s)(t), [t]),
        N = l === t,
        T = i.useCallback(() => {
            switch (t) {
                case O.GlobalDiscoveryTab.QUESTS:
                    return (
                        N && g.Z.resetState(),
                        m.default.track(y.rMx.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, u.Gy)().uuid }),
                        (0, E.transitionToGlobalDiscovery)({
                            tab: O.GlobalDiscoveryTab.QUESTS,
                            location: I.dr.DISCOVERY_SIDEBAR,
                            questContent: o.j.DISCOVERY_SIDEBAR
                        })
                    );
                case O.GlobalDiscoveryTab.APPS:
                    if (!N)
                        return (0, E.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: p.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0
                            }
                        });
                    d.Z.resetState(), (0, E.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case O.GlobalDiscoveryTab.SERVERS:
                    if (!N) return (0, E.transitionToGlobalDiscovery)({ tab: t });
                    h.Z.resetState(), f.Z.resetState();
                    return;
                default:
                    return (0, E.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, N]);
    return (0, r.jsxs)(s.P3F, {
        onClick: T,
        className: a()(C.navItem, { [C.selected]: N }),
        children: [
            (0, r.jsx)('div', {
                className: C.navItemIcon,
                children: v
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: S
            })
        ]
    });
}
let N = function () {
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsx)('div', {
                className: C.header,
                children: (0, r.jsx)(s.X6q, {
                    variant: 'text-lg/semibold',
                    children: v.intl.string(v.t['1KqYnp'])
                })
            }),
            (0, r.jsx)('nav', {
                className: C.nav,
                children: O.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(S, { tab: e }, e))
            })
        ]
    });
};
