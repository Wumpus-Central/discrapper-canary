n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    r = n(512969),
    a = n(442837),
    s = n(252618),
    o = n(353926),
    c = n(319443),
    d = n(106075),
    u = n(121711),
    h = n(823379),
    m = n(571457),
    p = n(836768),
    g = n(766219),
    _ = n(49898),
    f = n(846880);
let E = function () {
    let e = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        t = p.Z.useField('selectedTab'),
        n = (function (e) {
            switch (e) {
                case _.GlobalDiscoveryTab.SERVERS:
                    return (0, i.jsx)(d.Z, {});
                case _.GlobalDiscoveryTab.APPS:
                    return (0, i.jsx)(c.default, {});
                case _.GlobalDiscoveryTab.QUESTS:
                    return (0, i.jsx)(u.Z, {});
                default:
                    (0, h.vE)(e);
            }
        })(t),
        E = (0, r.TH)();
    return (
        l.useEffect(() => {
            let e = E.pathname,
                t = (0, g.I)(e);
            t !== p.Z.getField('selectedTab') && p.Z.setState({ selectedTab: t });
        }, [E.pathname]),
        l.useEffect(() => {
            e && (0, m.RI)({ selectedTab: t });
        }, [t, e]),
        (0, i.jsxs)('section', {
            className: f.container,
            children: [(0, i.jsx)(s.yY, { location: (0, g.s)(t) }), (0, i.jsx)('div', { className: f.dragRegion }), n]
        })
    );
};
