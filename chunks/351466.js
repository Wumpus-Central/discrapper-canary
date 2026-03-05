n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(311907),
    s = n(726249),
    o = n(49463),
    d = n(122204),
    c = n(301503),
    u = n(570763),
    A = n(403362),
    h = n(533129),
    _ = n(726845),
    m = n(285395),
    g = n(488995),
    p = n(935266);
let E = function () {
    let e = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
        t = _.A.useField("selectedTab"),
        n = (function (e) {
            switch (e) {
                case g.GlobalDiscoveryTab.SERVERS:
                    return (0, i.jsx)(c.A, {});
                case g.GlobalDiscoveryTab.APPS:
                    return (0, i.jsx)(d.default, {});
                case g.GlobalDiscoveryTab.QUESTS:
                    return (0, i.jsx)(u.A, { topLevelRoute: !1 });
                default:
                    (0, A.xb)(e);
            }
        })(t),
        E = (0, l.zy)();
    return (
        r.useEffect(() => {
            let e = E.pathname,
                t = (0, m.j)(e);
            t !== _.A.getField("selectedTab") && _.A.setState({ selectedTab: t });
        }, [E.pathname]),
        r.useEffect(() => {
            e && (0, h.tx)({ selectedTab: t });
        }, [t, e]),
        (0, i.jsxs)("section", {
            className: p.k,
            children: [(0, i.jsx)(s.HI, { location: (0, m.t)(t) }), (0, i.jsx)("div", { className: p.T }), n],
        })
    );
};
