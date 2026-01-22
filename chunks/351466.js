n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(311907),
    s = n(726249),
    o = n(49463),
    c = n(122204),
    u = n(301503),
    d = n(570763),
    p = n(403362),
    f = n(533129),
    h = n(726845),
    A = n(285395),
    g = n(488995),
    m = n(34352);
let b = function () {
    let e = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
        t = h.A.useField("selectedTab"),
        n = (function (e) {
            switch (e) {
                case g.GlobalDiscoveryTab.SERVERS:
                    return (0, r.jsx)(u.A, {});
                case g.GlobalDiscoveryTab.APPS:
                    return (0, r.jsx)(c.default, {});
                case g.GlobalDiscoveryTab.QUESTS:
                    return (0, r.jsx)(d.A, { topLevelRoute: !1 });
                default:
                    (0, p.xb)(e);
            }
        })(t),
        b = (0, l.zy)();
    return (
        i.useEffect(() => {
            let e = b.pathname,
                t = (0, A.j)(e);
            t !== h.A.getField("selectedTab") && h.A.setState({ selectedTab: t });
        }, [b.pathname]),
        i.useEffect(() => {
            e && (0, f.tx)({ selectedTab: t });
        }, [t, e]),
        (0, r.jsxs)("section", {
            className: m.k,
            children: [(0, r.jsx)(s.HI, { location: (0, A.t)(t) }), (0, r.jsx)("div", { className: m.T }), n],
        })
    );
};
