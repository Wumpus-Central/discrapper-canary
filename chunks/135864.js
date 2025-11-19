n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(456100),
    u = n(930446),
    d = n(31569),
    p = n(258971),
    f = n(164991),
    h = n(859921),
    g = n(220068),
    m = n(626135),
    _ = n(836768),
    b = n(766219),
    E = n(749681),
    O = n(49898),
    y = n(981631),
    v = n(46140),
    I = n(388032),
    C = n(933767);
function S(e) {
    let { tab: t } = e,
        { enabled: n } = c.c.useExperiment({ location: "GlobalDiscoverySidebar" }, { autoTrackExposure: !0 }),
        l = _.Z.useField("selectedTab"),
        I = i.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case O.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(o.QTo, { color: "currentColor" });
                        case O.GlobalDiscoveryTab.APPS:
                            return t
                                ? (0, r.jsx)(o.iWm, { color: "currentColor" })
                                : (0, r.jsx)(o.jje, { color: "currentColor" });
                        case O.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(o.qDn, { color: "currentColor" });
                    }
                })(t, n),
            [t, n],
        ),
        S = i.useMemo(() => (0, b.s)(t), [t]),
        T = l === t,
        N = i.useCallback(() => {
            switch (t) {
                case O.GlobalDiscoveryTab.QUESTS:
                    return (
                        T && g.Z.resetState(),
                        m.default.track(y.rMx.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, u.Gy)().uuid }),
                        (0, E.transitionToGlobalDiscovery)({
                            tab: O.GlobalDiscoveryTab.QUESTS,
                            location: v.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR,
                        })
                    );
                case O.GlobalDiscoveryTab.APPS:
                    if (!T)
                        return (0, E.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: p.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    d.Z.resetState(), (0, E.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case O.GlobalDiscoveryTab.SERVERS:
                    if (!T) return (0, E.transitionToGlobalDiscovery)({ tab: t });
                    f.Z.resetState(), h.Z.resetState();
                    return;
                default:
                    return (0, E.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, T]);
    return (0, r.jsxs)(o.P3F, {
        onClick: N,
        className: a()(C.navItem, { [C.selected]: T }),
        children: [
            (0, r.jsx)("div", {
                className: C.navItemIcon,
                children: I,
            }),
            (0, r.jsx)(o.Text, {
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
                children: (0, r.jsx)(o.Heading, {
                    variant: "text-lg/semibold",
                    children: I.intl.string(I.t["1KqYnl"]),
                }),
            }),
            (0, r.jsx)("nav", {
                className: C.nav,
                children: O.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(S, { tab: e }, e)),
            }),
        ],
    });
};
