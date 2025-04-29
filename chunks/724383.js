n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(442837),
    o = n(252618),
    s = n(353926),
    c = n(319443),
    u = n(106075),
    d = n(121711),
    p = n(823379),
    h = n(571457),
    f = n(836768),
    g = n(766219),
    m = n(49898),
    b = n(450833);
let _ = function () {
    let e = (0, a.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        t = f.Z.useField('selectedTab'),
        n = (function (e) {
            switch (e) {
                case m.GlobalDiscoveryTab.SERVERS:
                    return (0, r.jsx)(u.Z, {});
                case m.GlobalDiscoveryTab.APPS:
                    return (0, r.jsx)(c.default, {});
                case m.GlobalDiscoveryTab.QUESTS:
                    return (0, r.jsx)(d.Z, {});
                default:
                    (0, p.vE)(e);
            }
        })(t),
        _ = (0, l.TH)();
    return (
        i.useEffect(() => {
            let e = _.pathname,
                t = (0, g.I)(e);
            t !== f.Z.getField('selectedTab') && f.Z.setState({ selectedTab: t });
        }, [_.pathname]),
        i.useEffect(() => {
            e && (0, h.RI)({ selectedTab: t });
        }, [t, e]),
        (0, r.jsxs)('section', {
            className: b.container,
            children: [(0, r.jsx)(o.yY, { location: (0, g.s)(t) }), (0, r.jsx)('div', { className: b.dragRegion }), n]
        })
    );
};
