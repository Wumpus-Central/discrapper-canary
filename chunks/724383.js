var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(442837),
    s = n(252618),
    o = n(353926),
    c = n(926061),
    d = n(319443),
    u = n(8991),
    h = n(106075),
    m = n(121711),
    p = n(823379),
    g = n(571457),
    f = n(836768),
    _ = n(766219),
    E = n(49898),
    I = n(156212);
t.Z = function () {
    let e = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        t = (0, c.YP)({ location: 'DiscoveryUISelectedTab' }),
        n = f.Z.useField('selectedTab'),
        C = (function (e) {
            switch (e) {
                case E.GlobalDiscoveryTab.SERVERS:
                    return (0, i.jsx)(h.Z, {});
                case E.GlobalDiscoveryTab.APPS:
                    return (0, i.jsx)(d.default, {});
                case E.GlobalDiscoveryTab.QUESTS:
                    return (0, i.jsx)(m.Z, {});
                default:
                    (0, p.vE)(e);
            }
        })(n),
        N = (0, l.TH)(),
        v = !t && n === E.GlobalDiscoveryTab.APPS;
    return (r.useEffect(() => {
        let e = N.pathname,
            t = (0, _.I)(e);
        t !== f.Z.getField('selectedTab') && f.Z.setState({ selectedTab: t });
    }, [t, N.pathname]),
    r.useEffect(() => {
        !v && e && (0, g.RI)({ selectedTab: n });
    }, [v, n, e]),
    v && e)
        ? (0, i.jsx)(u.p, {})
        : (0, i.jsxs)('section', {
              className: I.container,
              children: [(0, i.jsx)(s.yY, { location: (0, _.s)(n) }), (0, i.jsx)('div', { className: I.dragRegion }), C]
          });
};
