n.d(t, {
    ZP: () => R,
    fD: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    l = n(401430),
    c = n(100527),
    u = n(415439),
    d = n(947851),
    f = n(921801),
    p = n(695103),
    _ = n(998502),
    m = n(740492),
    h = n(695346),
    g = n(494620),
    E = n(399970),
    b = n(273313),
    y = n(726985),
    O = n(981631),
    v = n(388032);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = "AppHardwareAcceleration";
function N() {
    if ((0, d.Y)("DesktopNativeUtils")) {
        let e = o.K.get(C);
        if ("boolean" == typeof e) return e;
    }
    return _.ZP.getEnableHardwareAcceleration();
}
function P(e) {
    (0, d.Y)("DesktopNativeUtils")
        ? (o.K.set(C, e), _.ZP.setEnableHardwareAcceleration(!0))
        : _.ZP.setEnableHardwareAcceleration(e);
}
function R() {
    let [e] = i.useState(() => N()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        o = (0, a.e7)([p.Z], () => p.Z.testModeApplicationId),
        d = (0, a.e7)([m.ZP], () => m.ZP.showPlayAgain),
        _ = i.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        S = i.useCallback((e) => {
            e ? (0, s.h7j)((e) => (0, r.jsx)(E.Z, I({}, e))) : l.mc();
        }, []),
        T = i.useCallback((e) => {
            (0, u.BV)(e, c.Z.USER_SETTINGS);
        }, []),
        C = i.useCallback((e) => {
            (0, s.h7j)((t) => {
                let n = e ? v.intl.format(v.t.LYXRxL, {}) : v.intl.format(v.t.uDP3Kz, {});
                return (0, r.jsx)(
                    s.ConfirmModal,
                    A(
                        I(
                            {
                                header: v.intl.string(v.t.aqpAvn),
                                confirmText: v.intl.string(v.t.vT7ckk),
                                cancelText: v.intl.string(v.t["ETE/oC"]),
                                onConfirm: () => P(e),
                            },
                            t,
                        ),
                        {
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: n,
                            }),
                        },
                    ),
                );
            });
        }, []);
    return (0, r.jsx)(b.Z, {
        title: v.intl.string(v.t["8/udY0"]),
        children: (0, r.jsxs)(s.Kqy, {
            gap: 16,
            children: [
                (0, r.jsxs)(f.F, {
                    setting: y.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: v.intl.string(v.t.ObIb1Q),
                            description: v.intl.format(v.t["CY6q/Q"], { apiDocsUrl: O.EYA.API_DOCS }),
                            checked: n,
                            onChange: h.Sb.updateSetting,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsx)(f.F, {
                    setting: y.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.rsf, {
                                label: v.intl.string(v.t["eOC/F2"]),
                                description: v.intl.string(v.t.Afc7l6),
                                checked: e,
                                onChange: C,
                            }),
                            !e &&
                                (0, r.jsx)(g.Z, {
                                    look: g.z.WARNING,
                                    children: v.intl.string(v.t.j7S6IX),
                                }),
                            (0, r.jsx)(s.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(f.F, {
                    setting: y.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: v.intl.string(v.t.fi3UQN),
                            description: v.intl.string(v.t["8mYp37"]),
                            checked: !t,
                            onChange: _,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: y.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: v.intl.string(v.t.erOqlh),
                            description: v.intl.string(v.t["52hMnD"]),
                            checked: null != o,
                            onChange: S,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: y.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: v.intl.string(v.t.qDZryG),
                            description: v.intl.string(v.t["B/qU4K"]),
                            checked: d,
                            onChange: T,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
            ],
        }),
    });
}
