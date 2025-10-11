n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(636977),
    s = n(481060),
    c = n(456100),
    u = n(930446),
    d = n(31569),
    p = n(258971),
    f = n(164991),
    h = n(859921),
    g = n(220068),
    m = n(626135),
    b = n(836768),
    _ = n(766219),
    O = n(749681),
    E = n(49898),
    v = n(981631),
    y = n(46140),
    I = n(388032),
    C = n(933767);
function S(e) {
    let { tab: t } = e,
        { enabled: n } = c.c.useExperiment({ location: "GlobalDiscoverySidebar" }, { autoTrackExposure: !0 }),
        l = b.Z.useField("selectedTab"),
        I = i.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case E.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(s.QTo, { color: "currentColor" });
                        case E.GlobalDiscoveryTab.APPS:
                            return t
                                ? (0, r.jsx)(s.iWm, { color: "currentColor" })
                                : (0, r.jsx)(s.jje, { color: "currentColor" });
                        case E.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(s.qDn, { color: "currentColor" });
                    }
                })(t, n),
            [t, n],
        ),
        S = i.useMemo(() => (0, _.s)(t), [t]),
        T = l === t,
        N = i.useCallback(() => {
            switch (t) {
                case E.GlobalDiscoveryTab.QUESTS:
                    return (
                        T && g.Z.resetState(),
                        m.default.track(v.rMx.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, u.Gy)().uuid }),
                        (0, O.transitionToGlobalDiscovery)({
                            tab: E.GlobalDiscoveryTab.QUESTS,
                            location: y.dr.DISCOVERY_SIDEBAR,
                            questContent: o.j.DISCOVERY_SIDEBAR,
                        })
                    );
                case E.GlobalDiscoveryTab.APPS:
                    if (!T)
                        return (0, O.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: p.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    d.Z.resetState(), (0, O.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case E.GlobalDiscoveryTab.SERVERS:
                    if (!T) return (0, O.transitionToGlobalDiscovery)({ tab: t });
                    f.Z.resetState(), h.Z.resetState();
                    return;
                default:
                    return (0, O.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, T]);
    return (0, r.jsxs)(s.P3F, {
        onClick: N,
        className: a()(C.navItem, { [C.selected]: T }),
        children: [
            (0, r.jsx)("div", {
                className: C.navItemIcon,
                children: I,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "none",
                children: S,
            }),
        ],
    });
}
let T = function () {
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            (0, r.jsx)("div", {
                className: C.header,
                children: (0, r.jsx)(s.Heading, {
                    variant: "text-lg/semibold",
                    children: I.intl.string(I.t["1KqYnp"]),
                }),
            }),
            (0, r.jsx)("nav", {
                className: C.nav,
                children: E.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(S, { tab: e }, e)),
            }),
        ],
    });
};
