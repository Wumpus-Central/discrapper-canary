n.d(t, { A: () => E, D: () => f });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(314116),
    r = n(397927),
    o = n(271866),
    d = n(195043),
    c = n(147964),
    u = n(837921),
    h = n(253932),
    A = n(801264),
    g = n(912615),
    m = n(790174),
    p = n(531525),
    _ = n(652215),
    x = n(985018);
function f() {
    let [e] = l.useState(() => u.Ay.getEnableHardwareAcceleration()),
        t = l.useCallback((e) => {
            let t = e ? x.intl.format(x.t.LYXRxL, {}) : x.intl.format(x.t.uDP3Kz, {});
            (0, a.A)({
                title: x.intl.string(x.t.aqpAvn),
                subtitle: t,
                confirmText: x.intl.string(x.t.vT7ckk),
                onConfirm: () => u.Ay.setEnableHardwareAcceleration(e),
            });
        }, []);
    return (0, i.jsxs)(r.BJc, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: x.intl.string(x.t["eOC/F2"]),
                description: x.intl.string(x.t.Afc7l6),
                checked: e,
                onChange: t,
            }),
            !e && (0, i.jsx)(A.A, { look: A.k.WARNING, children: x.intl.string(x.t.j7S6IX) }),
        ],
    });
}
function E() {
    let e = h.l_.useSetting(),
        t = h.Q_.useSetting(),
        n = (0, s.bG)([c.A], () => c.A.testModeApplicationId),
        a = l.useCallback((e) => {
            h.l_.updateSetting(!e);
        }, []),
        u = l.useCallback((e) => {
            e ? (0, r.qfG)((e) => (0, i.jsx)(g.A, { ...e })) : o.cL();
        }, []);
    return (0, i.jsx)(m.A, {
        title: x.intl.string(x.t["8/udY0"]),
        children: (0, i.jsxs)(r.BJc, {
            gap: 16,
            children: [
                (0, i.jsxs)(d.x, {
                    setting: p.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, i.jsx)(r.dOG, {
                            label: x.intl.string(x.t.ObIb1Q),
                            description: x.intl.format(x.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
                            checked: t,
                            onChange: h.Q_.updateSetting,
                        }),
                        (0, i.jsx)(r.cGx, {}),
                    ],
                }),
                (0, i.jsx)(d.x, {
                    setting: p.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, i.jsxs)(r.BJc, { gap: 16, children: [(0, i.jsx)(f, {}), (0, i.jsx)(r.cGx, {})] }),
                }),
                (0, i.jsxs)(d.x, {
                    setting: p.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, i.jsx)(r.dOG, {
                            label: x.intl.string(x.t.fi3UQN),
                            description: x.intl.string(x.t["8mYp37"]),
                            checked: !e,
                            onChange: a,
                        }),
                        (0, i.jsx)(r.cGx, {}),
                    ],
                }),
                (0, i.jsxs)(d.x, {
                    setting: p.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, i.jsx)(r.dOG, {
                            label: x.intl.string(x.t.erOqlh),
                            description: x.intl.string(x.t["52hMnD"]),
                            checked: null != n,
                            onChange: u,
                        }),
                        (0, i.jsx)(r.cGx, {}),
                    ],
                }),
            ],
        }),
    });
}
