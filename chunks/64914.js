n.d(t, {
    ZP: () => w,
    fD: () => R,
}),
    n(388685),
    n(49124);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    l = n(401430),
    c = n(100527),
    u = n(415439),
    d = n(956097),
    f = n(947851),
    _ = n(921801),
    p = n(695103),
    h = n(998502),
    m = n(740492),
    g = n(695346),
    E = n(494620),
    b = n(399970),
    y = n(273313),
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
    if ((0, f.Y)("DesktopNativeUtils")) {
        let e = o.K.get(N);
        if ("boolean" == typeof e) return e;
    }
    return h.ZP.getEnableHardwareAcceleration();
}
function P(e) {
    (0, f.Y)("DesktopNativeUtils")
        ? (o.K.set(N, e), h.ZP.setEnableHardwareAcceleration(!0))
        : h.ZP.setEnableHardwareAcceleration(e);
}
function w() {
    let [e] = i.useState(() => R()),
        t = g.bm.useSetting(),
        n = g.Sb.useSetting(),
        o = (0, a.e7)([p.Z], () => p.Z.testModeApplicationId),
        f = (0, a.e7)([m.ZP], () => m.ZP.showPlayAgain),
        h = i.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        T = i.useCallback((e) => {
            e ? (0, s.h7j)((e) => (0, r.jsx)(b.Z, S({}, e))) : l.mc();
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
        }, []),
        {
            warpEnabled: w,
            warpConnecting: D,
            warpLog: x,
        } = (0, a.cj)([d.Z], () => ({
            warpEnabled: d.Z.enabled,
            warpConnecting: d.Z.connecting,
            warpLog: d.Z.log,
        })),
        L = i.useCallback((e) => {
            e ? d.Z.connect() : d.Z.disconnect();
        }, []);
    return (0, r.jsx)(y.Z, {
        title: I.intl.string(I.t["8/udY0"]),
        children: (0, r.jsxs)(s.Kqy, {
            gap: 16,
            children: [
                (0, r.jsxs)(_.F, {
                    setting: O.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.ObIb1Q),
                            description: I.intl.format(I.t["CY6q/Q"], { apiDocsUrl: v.EYA.API_DOCS }),
                            checked: n,
                            onChange: g.Sb.updateSetting,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsx)(_.F, {
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
                                (0, r.jsx)(E.Z, {
                                    look: E.z.WARNING,
                                    children: I.intl.string(I.t.j7S6IX),
                                }),
                            (0, r.jsx)(s.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(_.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.fi3UQN),
                            description: I.intl.string(I.t["8mYp37"]),
                            checked: !t,
                            onChange: h,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsxs)(_.F, {
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
                (0, r.jsxs)(_.F, {
                    setting: O.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t.qDZryG),
                            description: I.intl.string(I.t["B/qU4K"]),
                            checked: f,
                            onChange: A,
                        }),
                        (0, r.jsx)(s.izJ, {}),
                    ],
                }),
                (0, r.jsx)(_.F, {
                    setting: O.s6.SETTINGS_ADVANCED_CF_WARP,
                    children: (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.rsf, {
                                label: "Enable WARP",
                                description: "Enable WARP Proxy Connection",
                                checked: w,
                                onChange: L,
                            }),
                            D ? (0, r.jsx)(s.$jN, {}) : null,
                            (0, r.jsx)(s.Text, {
                                variant: "code",
                                children: x.map((e, t) => (0, r.jsx)("div", { children: JSON.stringify(e) }, t)),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
