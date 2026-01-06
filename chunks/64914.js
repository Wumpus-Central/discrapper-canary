n.d(t, {
    Am: () => C,
    ZP: () => A,
    fD: () => I,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(433517),
    s = n(248514),
    l = n(481060),
    c = n(401430),
    u = n(947851),
    d = n(921801),
    f = n(695103),
    p = n(998502),
    _ = n(695346),
    m = n(494620),
    h = n(399970),
    g = n(273313),
    E = n(726985),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let S = "AppHardwareAcceleration";
function I() {
    if ((0, u.Y)("DesktopNativeUtils")) {
        let e = o.K.get(S);
        if ("boolean" == typeof e) return e;
    }
    return p.ZP.getEnableHardwareAcceleration();
}
function T(e) {
    (0, u.Y)("DesktopNativeUtils")
        ? (o.K.set(S, e), p.ZP.setEnableHardwareAcceleration(!0))
        : p.ZP.setEnableHardwareAcceleration(e);
}
function C() {
    let [e] = i.useState(() => I()),
        t = i.useCallback((e) => {
            let t = e ? y.intl.format(y.t.LYXRxL, {}) : y.intl.format(y.t.uDP3Kz, {});
            (0, s.Z)({
                title: y.intl.string(y.t.aqpAvn),
                subtitle: t,
                confirmText: y.intl.string(y.t.vT7ckk),
                onConfirm: () => T(e),
            });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: y.intl.string(y.t["eOC/F2"]),
                description: y.intl.string(y.t.Afc7l6),
                checked: e,
                onChange: t,
            }),
            !e &&
                (0, r.jsx)(m.Z, {
                    look: m.z.WARNING,
                    children: y.intl.string(y.t.j7S6IX),
                }),
        ],
    });
}
function A() {
    let e = _.bm.useSetting(),
        t = _.Sb.useSetting(),
        n = (0, a.e7)([f.Z], () => f.Z.testModeApplicationId),
        o = i.useCallback((e) => {
            _.bm.updateSetting(!e);
        }, []),
        s = i.useCallback((e) => {
            e ? (0, l.h7j)((e) => (0, r.jsx)(h.Z, v({}, e))) : c.mc();
        }, []);
    return (0, r.jsx)(g.Z, {
        title: y.intl.string(y.t["8/udY0"]),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, r.jsxs)(d.F, {
                    setting: E.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: y.intl.string(y.t.ObIb1Q),
                            description: y.intl.format(y.t["CY6q/Q"], { apiDocsUrl: b.EYA.API_DOCS }),
                            checked: t,
                            onChange: _.Sb.updateSetting,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
                (0, r.jsx)(d.F, {
                    setting: E.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)(l.Kqy, {
                        gap: 16,
                        children: [(0, r.jsx)(C, {}), (0, r.jsx)(l.izJ, {})],
                    }),
                }),
                (0, r.jsxs)(d.F, {
                    setting: E.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: y.intl.string(y.t.fi3UQN),
                            description: y.intl.string(y.t["8mYp37"]),
                            checked: !e,
                            onChange: o,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: E.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: y.intl.string(y.t.erOqlh),
                            description: y.intl.string(y.t["52hMnD"]),
                            checked: null != n,
                            onChange: s,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
            ],
        }),
    });
}
