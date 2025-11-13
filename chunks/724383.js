n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(442837),
    s = n(252618),
    o = n(353926),
    c = n(319443),
    u = n(106075),
    d = n(121711),
    p = n(823379),
    f = n(571457),
    h = n(836768),
    g = n(766219),
    m = n(49898),
    _ = n(775491);
let b = function () {
    let e = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        t = h.Z.useField("selectedTab"),
        n = (function (e) {
            switch (e) {
                case m.GlobalDiscoveryTab.SERVERS:
                    return (0, r.jsx)(u.Z, {});
                case m.GlobalDiscoveryTab.APPS:
                    return (0, r.jsx)(c.default, {});
                case m.GlobalDiscoveryTab.QUESTS:
                    return (0, r.jsx)(d.Z, { topLevelRoute: !1 });
                default:
                    (0, p.vE)(e);
            }
        })(t),
        b = (0, l.TH)();
    return (
        i.useEffect(() => {
            let e = b.pathname,
                t = (0, g.I)(e);
            t !== h.Z.getField("selectedTab") && h.Z.setState({ selectedTab: t });
        }, [b.pathname]),
        i.useEffect(() => {
            e && (0, f.RI)({ selectedTab: t });
        }, [t, e]),
        (0, r.jsxs)("section", {
            className: _.container,
            children: [(0, r.jsx)(s.yY, { location: (0, g.s)(t) }), (0, r.jsx)("div", { className: _.dragRegion }), n],
        })
    );
};
