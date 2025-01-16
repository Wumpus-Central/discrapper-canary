var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(252618),
    s = n(926061),
    o = n(319443),
    c = n(8991),
    d = n(106075),
    u = n(121711),
    h = n(823379),
    m = n(571457),
    p = n(836768),
    g = n(766219),
    f = n(49898),
    _ = n(156212);
t.Z = function () {
    let e = (0, s.YP)({ location: 'DiscoveryUISelectedTab' }),
        t = p.Z.useField('selectedTab'),
        n = (function (e) {
            switch (e) {
                case f.GlobalDiscoveryTab.SERVERS:
                    return (0, i.jsx)(d.Z, {});
                case f.GlobalDiscoveryTab.APPS:
                    return (0, i.jsx)(o.default, {});
                case f.GlobalDiscoveryTab.QUESTS:
                    return (0, i.jsx)(u.Z, {});
                default:
                    (0, h.vE)(e);
            }
        })(t),
        E = (0, l.TH)(),
        I = !e && t === f.GlobalDiscoveryTab.APPS;
    return (r.useEffect(() => {
        let e = E.pathname,
            t = (0, g.I)(e);
        t !== p.Z.getField('selectedTab') && p.Z.setState({ selectedTab: t });
    }, [e, E.pathname]),
    r.useEffect(() => {
        I || (0, m.RI)({ selectedTab: t });
    }, [I, t]),
    I)
        ? (0, i.jsx)(c.p, {})
        : (0, i.jsxs)('section', {
              className: _.container,
              children: [(0, i.jsx)(a.yY, { location: (0, g.s)(t) }), (0, i.jsx)('div', { className: _.dragRegion }), n]
          });
};
