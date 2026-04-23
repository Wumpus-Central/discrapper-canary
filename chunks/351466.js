a.r(t), a.d(t, { default: () => f });
var s = a(627968),
    l = a(64700),
    r = a(873263),
    i = a(311907),
    n = a(726249),
    c = a(49463),
    o = a(122204),
    d = a(301503),
    u = a(570763),
    h = a(403362),
    g = a(533129),
    A = a(726845),
    _ = a(285395),
    m = a(488995),
    C = a(649445);
let f = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = A.A.useField("selectedTab"),
        a = (function (e) {
            switch (e) {
                case m.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(d.A, {});
                case m.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(o.default, {});
                case m.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(u.default, { topLevelRoute: !1 });
                default:
                    (0, h.xb)(e);
            }
        })(t),
        f = (0, r.zy)();
    return (
        l.useEffect(() => {
            let e = f.pathname,
                t = (0, _.j)(e);
            t !== A.A.getField("selectedTab") && A.A.setState({ selectedTab: t });
        }, [f.pathname]),
        l.useEffect(() => {
            e && (0, g.tx)({ selectedTab: t });
        }, [t, e]),
        (0, s.jsxs)("section", {
            className: C.k,
            children: [(0, s.jsx)(n.HI, { location: (0, _.t)(t) }), (0, s.jsx)("div", { className: C.T }), a],
        })
    );
};
