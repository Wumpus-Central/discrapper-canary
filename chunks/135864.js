n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(636977),
    s = n(481060),
    c = n(132871),
    u = n(147890),
    d = n(31569),
    p = n(164991),
    h = n(859921),
    f = n(220068),
    g = n(836768),
    m = n(766219),
    b = n(749681),
    _ = n(49898),
    E = n(46140),
    O = n(388032),
    N = n(934493);
function v(e) {
    let { tab: t } = e,
        n = g.Z.useField('selectedTab'),
        l = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case _.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(s.QTo, { color: 'currentColor' });
                        case _.GlobalDiscoveryTab.APPS:
                            return (0, r.jsx)(s.jje, { color: 'currentColor' });
                        case _.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(s.qDn, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        O = i.useMemo(() => (0, m.s)(t), [t]),
        v = n === t,
        y = i.useCallback(() => {
            switch (t) {
                case _.GlobalDiscoveryTab.QUESTS:
                    return (
                        v && f.Z.resetState(),
                        (0, b.transitionToGlobalDiscovery)({
                            tab: _.GlobalDiscoveryTab.QUESTS,
                            location: E.dr.DISCOVERY_SIDEBAR,
                            questContent: a.j.DISCOVERY_SIDEBAR
                        })
                    );
                case _.GlobalDiscoveryTab.APPS:
                    if (!v)
                        return (0, u.dx)({
                            restorePreviousView: !0,
                            entrypoint: { name: c.n3.GLOBAL_DISCOVERY_SIDEBAR }
                        });
                    d.Z.resetState(), (0, b.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case _.GlobalDiscoveryTab.SERVERS:
                    if (!v) return (0, b.transitionToGlobalDiscovery)({ tab: t });
                    p.Z.resetState(), h.Z.resetState();
                    return;
                default:
                    return (0, b.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, v]);
    return (0, r.jsxs)(s.P3F, {
        onClick: y,
        className: o()(N.navItem, { [N.selected]: v }),
        children: [
            (0, r.jsx)('div', {
                className: N.navItemIcon,
                children: l
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: O
            })
        ]
    });
}
let y = function () {
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
                children: _.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(v, { tab: e }, e))
            })
        ]
    });
};
