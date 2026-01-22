n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(696292),
    o = n(397927),
    c = n(881615),
    u = n(416730),
    d = n(310419),
    p = n(282026),
    f = n(601193),
    h = n(631001),
    A = n(954571),
    g = n(726845),
    m = n(285395),
    b = n(837057),
    _ = n(488995),
    E = n(652215),
    O = n(654487),
    y = n(985018),
    I = n(169653);
function v(e) {
    let { tab: t } = e,
        n = g.A.useField("selectedTab"),
        l = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case _.GlobalDiscoveryTab.SERVERS:
                            return (0, r.jsx)(o.RR9, { color: "currentColor" });
                        case _.GlobalDiscoveryTab.APPS:
                            return (0, r.jsx)(o.k9F, { color: "currentColor" });
                        case _.GlobalDiscoveryTab.QUESTS:
                            return (0, r.jsx)(o.r2v, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        y = i.useMemo(() => (0, m.t)(t), [t]),
        v = n === t,
        S = i.useCallback(() => {
            switch (t) {
                case _.GlobalDiscoveryTab.QUESTS:
                    return (
                        v && h.A.resetState(),
                        A.default.track(E.HAw.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, c.sN)().uuid }),
                        (0, b.transitionToGlobalDiscovery)({
                            tab: _.GlobalDiscoveryTab.QUESTS,
                            location: O.rE.DISCOVERY_SIDEBAR,
                            questContent: s.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case _.GlobalDiscoveryTab.APPS:
                    if (!v)
                        return (0, b.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: d.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    u.A.resetState(), (0, b.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case _.GlobalDiscoveryTab.SERVERS:
                    if (!v) return (0, b.transitionToGlobalDiscovery)({ tab: t });
                    p.A.resetState(), f.A.resetState();
                    return;
                default:
                    return (0, b.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, v]);
    return (0, r.jsxs)(o.DUT, {
        onClick: S,
        className: a()(I.pc, { [I.wH]: v }),
        children: [
            (0, r.jsx)("div", {
                className: I.wz,
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
        className: I.kL,
        children: [
            (0, r.jsx)("div", {
                className: I.wx,
                children: (0, r.jsx)(o.Heading, {
                    variant: "text-lg/semibold",
                    children: y.intl.string(y.t["1KqYnl"]),
                }),
            }),
            (0, r.jsx)("nav", {
                className: I.C$,
                children: _.GLOBAL_DISCOVERY_TABS.map((e) => (0, r.jsx)(v, { tab: e }, e)),
            }),
        ],
    });
};
