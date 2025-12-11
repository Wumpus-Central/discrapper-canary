n.d(t, {
    Am: () => P,
    ZP: () => R,
    fD: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(433517),
    s = n(248514),
    l = n(481060),
    c = n(401430),
    u = n(100527),
    d = n(415439),
    f = n(947851),
    p = n(921801),
    _ = n(695103),
    m = n(998502),
    h = n(740492),
    g = n(695346),
    E = n(494620),
    b = n(399970),
    y = n(273313),
    O = n(726985),
    v = n(981631),
    S = n(388032);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let C = "AppHardwareAcceleration";
function A() {
    if ((0, f.Y)("DesktopNativeUtils")) {
        let e = o.K.get(C);
        if ("boolean" == typeof e) return e;
    }
    return m.ZP.getEnableHardwareAcceleration();
}
function N(e) {
    (0, f.Y)("DesktopNativeUtils")
        ? (o.K.set(C, e), m.ZP.setEnableHardwareAcceleration(!0))
        : m.ZP.setEnableHardwareAcceleration(e);
}
function P() {
    let [e] = i.useState(() => A()),
        t = i.useCallback((e) => {
            let t = e ? S.intl.format(S.t.LYXRxL, {}) : S.intl.format(S.t.uDP3Kz, {});
            (0, s.Z)({
                title: S.intl.string(S.t.aqpAvn),
                subtitle: t,
                confirmText: S.intl.string(S.t.vT7ckk),
                onConfirm: () => N(e),
            });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: S.intl.string(S.t["eOC/F2"]),
                description: S.intl.string(S.t.Afc7l6),
                checked: e,
                onChange: t,
            }),
            !e &&
                (0, r.jsx)(E.Z, {
                    look: E.z.WARNING,
                    children: S.intl.string(S.t.j7S6IX),
                }),
        ],
    });
}
function R() {
    let e = g.bm.useSetting(),
        t = g.Sb.useSetting(),
        n = (0, a.e7)([_.Z], () => _.Z.testModeApplicationId),
        o = (0, a.e7)([h.ZP], () => h.ZP.showPlayAgain),
        s = i.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        f = i.useCallback((e) => {
            e ? (0, l.h7j)((e) => (0, r.jsx)(b.Z, T({}, e))) : c.mc();
        }, []),
        m = i.useCallback((e) => {
            (0, d.BV)(e, u.Z.USER_SETTINGS);
        }, []);
    return (0, r.jsx)(y.Z, {
        title: S.intl.string(S.t["8/udY0"]),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, r.jsxs)(p.F, {
                    setting: O.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: S.intl.string(S.t.ObIb1Q),
                            description: S.intl.format(S.t["CY6q/Q"], { apiDocsUrl: v.EYA.API_DOCS }),
                            checked: t,
                            onChange: g.Sb.updateSetting,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
                (0, r.jsx)(p.F, {
                    setting: O.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)(l.Kqy, {
                        gap: 16,
                        children: [(0, r.jsx)(P, {}), (0, r.jsx)(l.izJ, {})],
                    }),
                }),
                (0, r.jsxs)(p.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: S.intl.string(S.t.fi3UQN),
                            description: S.intl.string(S.t["8mYp37"]),
                            checked: !e,
                            onChange: s,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(p.F, {
                    setting: O.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: S.intl.string(S.t.erOqlh),
                            description: S.intl.string(S.t["52hMnD"]),
                            checked: null != n,
                            onChange: f,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(p.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: S.intl.string(S.t.qDZryG),
                            description: S.intl.string(S.t["B/qU4K"]),
                            checked: o,
                            onChange: m,
                        }),
                        (0, r.jsx)(l.izJ, {}),
                    ],
                }),
            ],
        }),
    });
}
