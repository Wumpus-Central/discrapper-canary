n.d(t, { A: () => D });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(696292),
    o = n(664121),
    d = n(323384),
    u = n(577473),
    c = n(939249),
    A = n(834730),
    h = n(534514),
    _ = n(881615),
    E = n(416730),
    p = n(310419),
    m = n(282026),
    g = n(601193),
    I = n(631001),
    C = n(954571),
    f = n(726845),
    T = n(285395),
    S = n(837057),
    N = n(488995),
    O = n(652215),
    L = n(654487),
    y = n(985018),
    v = n(525748);
function b(e) {
    let { tab: t } = e,
        n = f.A.useField("selectedTab"),
        a = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case N.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.R, { color: "currentColor" });
                        case N.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(d.k, { color: "currentColor" });
                        case N.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(u.r, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        h = r.useMemo(() => (0, T.t)(t), [t]),
        y = n === t,
        b = r.useCallback(() => {
            switch (t) {
                case N.GlobalDiscoveryTab.QUESTS:
                    return (
                        y && I.A.resetState(),
                        C.default.track(O.HAw.DISCOVERY_QUEST_TAB_CLICKED, { client_ad_session_id: (0, _.sN)().uuid }),
                        (0, S.transitionToGlobalDiscovery)({
                            tab: N.GlobalDiscoveryTab.QUESTS,
                            location: L.rE.DISCOVERY_SIDEBAR,
                            questContent: s.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case N.GlobalDiscoveryTab.APPS:
                    if (!y)
                        return (0, S.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: p.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    E.A.resetState(), (0, S.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case N.GlobalDiscoveryTab.SERVERS:
                    if (!y) return (0, S.transitionToGlobalDiscovery)({ tab: t });
                    m.A.resetState(), g.A.resetState();
                    return;
                default:
                    return (0, S.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, y]);
    return (0, i.jsxs)(c.D, {
        onClick: b,
        className: l()(v.pc, { [v.wH]: y }),
        children: [
            (0, i.jsx)("div", { className: v.wz, children: a }),
            (0, i.jsx)(A.E, { variant: "text-md/medium", color: "none", children: h }),
        ],
    });
}
let D = function () {
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsx)("div", {
                className: v.wx,
                children: (0, i.jsx)(h.D, { variant: "text-lg/semibold", children: y.intl.string(y.t["1KqYnl"]) }),
            }),
            (0, i.jsx)("nav", {
                className: v.C$,
                children: N.GLOBAL_DISCOVERY_TABS.map((e) => (0, i.jsx)(b, { tab: e }, e)),
            }),
        ],
    });
};
