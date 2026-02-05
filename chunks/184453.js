n.d(t, { A: () => x });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(696292),
    o = n(397927),
    d = n(881615),
    c = n(416730),
    u = n(310419),
    A = n(282026),
    h = n(601193),
    _ = n(631001),
    m = n(954571),
    p = n(726845),
    g = n(285395),
    E = n(837057),
    f = n(488995),
    I = n(652215),
    C = n(654487),
    N = n(985018),
    T = n(169653);
function S(e) {
    let { tab: t } = e,
        n = p.A.useField("selectedTab"),
        a = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case f.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.RR9, { color: "currentColor" });
                        case f.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(o.k9F, { color: "currentColor" });
                        case f.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(o.r2v, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        N = r.useMemo(() => (0, g.t)(t), [t]),
        S = n === t,
        x = r.useCallback(() => {
            switch (t) {
                case f.GlobalDiscoveryTab.QUESTS:
                    return (
                        S && _.A.resetState(),
                        m.default.track(I.HAw.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, d.sN)().uuid }),
                        (0, E.transitionToGlobalDiscovery)({
                            tab: f.GlobalDiscoveryTab.QUESTS,
                            location: C.rE.DISCOVERY_SIDEBAR,
                            questContent: s.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case f.GlobalDiscoveryTab.APPS:
                    if (!S)
                        return (0, E.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: u.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    c.A.resetState(), (0, E.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case f.GlobalDiscoveryTab.SERVERS:
                    if (!S) return (0, E.transitionToGlobalDiscovery)({ tab: t });
                    A.A.resetState(), h.A.resetState();
                    return;
                default:
                    return (0, E.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, S]);
    return (0, i.jsxs)(o.DUT, {
        onClick: x,
        className: l()(T.pc, { [T.wH]: S }),
        children: [
            (0, i.jsx)("div", { className: T.wz, children: a }),
            (0, i.jsx)(o.Text, { variant: "text-md/medium", color: "none", children: N }),
        ],
    });
}
let x = function () {
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsx)("div", {
                className: T.wx,
                children: (0, i.jsx)(o.Heading, {
                    variant: "text-lg/semibold",
                    children: N.intl.string(N.t["1KqYnl"]),
                }),
            }),
            (0, i.jsx)("nav", {
                className: T.C$,
                children: f.GLOBAL_DISCOVERY_TABS.map((e) => (0, i.jsx)(S, { tab: e }, e)),
            }),
        ],
    });
};
