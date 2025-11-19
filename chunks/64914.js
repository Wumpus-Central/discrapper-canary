n.d(t, {
    ZP: () => D,
    fD: () => R,
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
    _ = n(695103),
    p = n(998502),
    h = n(740492),
    m = n(695346),
    g = n(494620),
    E = n(399970),
    b = n(273313),
    y = n(868802),
    O = n(726985),
    v = n(981631),
    I = n(388032);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = "AppHardwareAcceleration";
function R() {
    if ((0, d.Y)("DesktopNativeUtils")) {
        let e = o.K.get(N);
        if ("boolean" == typeof e) return e;
    }
    return p.ZP.getEnableHardwareAcceleration();
}
function P(e) {
    (0, d.Y)("DesktopNativeUtils")
        ? (o.K.set(N, e), p.ZP.setEnableHardwareAcceleration(!0))
        : p.ZP.setEnableHardwareAcceleration(e);
}
function D() {
    let [e] = i.useState(() => R()),
        t = m.bm.useSetting(),
        n = m.Sb.useSetting(),
        o = (0, a.e7)([_.Z], () => _.Z.testModeApplicationId),
        d = (0, a.e7)([h.ZP], () => h.ZP.showPlayAgain),
        p = i.useCallback((e) => {
            m.bm.updateSetting(!e);
        }, []),
        T = i.useCallback((e) => {
            e ? (0, s.h7j)((e) => (0, r.jsx)(E.Z, S({}, e))) : l.mc();
        }, []),
        A = i.useCallback((e) => {
            (0, u.BV)(e, c.Z.USER_SETTINGS);
        }, []),
        N = i.useCallback((e) => {
            (0, s.h7j)((t) => {
                let n = e ? I.intl.format(I.t.LYXRxL, {}) : I.intl.format(I.t.uDP3Kz, {});
                return (0, r.jsx)(
                    s.ConfirmModal,
                    C(
                        S(
                            {
                                header: I.intl.string(I.t.aqpAvn),
                                confirmText: I.intl.string(I.t.vT7ckk),
                                cancelText: I.intl.string(I.t["ETE/oC"]),
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
        title: I.intl.string(I.t["8/udY0"]),
        children: (0, r.jsxs)(s.Kqy, {
            gap: 16,
            children: [
                (0, r.jsxs)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.ObIb1Q),
                            description: I.intl.format(I.t["CY6q/Q"], { apiDocsUrl: v.EYA.API_DOCS }),
                            checked: n,
                            onChange: m.Sb.updateSetting,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsx)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.rsf, {
                                label: I.intl.string(I.t["eOC/F2"]),
                                description: I.intl.string(I.t.Afc7l6),
                                checked: e,
                                onChange: N,
                            }),
                            !e &&
                                (0, r.jsx)(g.Z, {
                                    look: g.z.WARNING,
                                    children: I.intl.string(I.t.j7S6IX),
                                }),
                            (0, r.jsx)(s.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.fi3UQN),
                            description: I.intl.string(I.t["8mYp37"]),
                            checked: !t,
                            onChange: p,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.erOqlh),
                            description: I.intl.string(I.t["52hMnD"]),
                            checked: null != o,
                            onChange: T,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.qDZryG),
                            description: I.intl.string(I.t["B/qU4K"]),
                            checked: d,
                            onChange: A,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsx)(f.F, {
                    setting: O.s6.SETTINGS_ADVANCED_CF_WARP,
                    children: (0, r.jsx)(s.Kqy, {
                        gap: 16,
                        children: (0, r.jsx)(y.M, {}),
                    }),
                }),
            ],
        }),
    });
}
