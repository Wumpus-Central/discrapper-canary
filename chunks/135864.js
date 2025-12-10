n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(930446),
    u = n(31569),
    d = n(258971),
    p = n(164991),
    f = n(859921),
    g = n(283833),
    h = n(626135),
    m = n(836768),
    _ = n(766219),
    b = n(749681),
    E = n(49898),
    O = n(981631),
    v = n(324805),
    y = n(388032),
    I = n(933767);
function C(e) {
    let { tab: t } = e,
        n = m.Z.useField("selectedTab"),
        l = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(o.QTo, { color: "currentColor" });
                        case E.GlobalDiscoveryTab.APPS:
                            return (0, r.jsx)(o.jje, { color: "currentColor" });
                        case E.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(o.qDn, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        y = i.useMemo(() => (0, _.s)(t), [t]),
        C = n === t,
        S = i.useCallback(() => {
            switch (t) {
                case E.GlobalDiscoveryTab.QUESTS:
                    return (
                        C && g.Z.resetState(),
                        h.default.track(O.rMx.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, c.Gy)().uuid }),
                        (0, b.transitionToGlobalDiscovery)({
                            tab: E.GlobalDiscoveryTab.QUESTS,
                            location: v.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR,
                        })
                    );
                case E.GlobalDiscoveryTab.APPS:
                    if (!C)
                        return (0, b.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: d.xF.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    u.Z.resetState(), (0, b.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case E.GlobalDiscoveryTab.SERVERS:
                    if (!C) return (0, b.transitionToGlobalDiscovery)({ tab: t });
                    p.Z.resetState(), f.Z.resetState();
                    return;
                default:
                    return (0, b.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, C]);
    return (0, r.jsxs)(o.P3F, {
        onClick: S,
        className: a()(I.navItem, { [I.selected]: C }),
        children: [
            (0, r.jsx)("div", {
                className: I.navItemIcon,
                children: l,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "none",
                children: y,
            }),
        ],
    });
}
let S = function () {
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            (0, r.jsx)("div", {
                className: I.header,
                children: (0, r.jsx)(o.Heading, {
                    variant: "text-lg/semibold",
                    children: y.intl.string(y.t["1KqYnl"]),
                }),
            }),
            (0, r.jsx)("nav", {
                className: I.nav,
                children: E.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(C, { tab: e }, e)),
            }),
        ],
    });
};
