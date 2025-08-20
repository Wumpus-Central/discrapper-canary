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
    y = n(726985),
    O = n(981631),
    v = n(388032),
    I = n(692278);
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
                let n = e ? v.intl.format(v.t.LYXRxM, {}) : v.intl.format(v.t.uDP3Ky, {});
                return (0, r.jsx)(
                    s.ConfirmModal,
                    C(
                        S(
                            {
                                header: v.intl.string(v.t.aqpAvr),
                                confirmText: v.intl.string(v.t.vT7ckp),
                                cancelText: v.intl.string(v.t["ETE/oK"]),
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
    return (0, r.jsxs)(s.hjN, {
        tag: s.RB0.H1,
        title: v.intl.string(v.t["8/udY2"]),
        children: [
            (0, r.jsx)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, r.jsx)(s.j7V, {
                    value: n,
                    onChange: g.Sb.updateSetting,
                    note: v.intl.format(v.t["CY6q/f"], { apiDocsUrl: O.EYA.API_DOCS }),
                    children: v.intl.string(v.t.ObIb1d),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsx)(s.j7V, {
                    className: e ? "" : I.formSwitchExtension,
                    value: e,
                    onChange: N,
                    note: v.intl.string(v.t.Afc7l5),
                    hideBorder: !e,
                    children: v.intl.string(v.t["eOC/Fx"]),
                }),
            }),
            !e &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.Z, {
                            look: E.z.WARNING,
                            children: v.intl.string(v.t.j7S6IS),
                        }),
                        (0, r.jsx)(s.$i$, { className: I.infoBoxDivider }),
                    ],
                }),
            (0, r.jsx)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, r.jsx)(s.j7V, {
                    value: !t,
                    onChange: h,
                    note: v.intl.string(v.t["8mYp39"]),
                    children: v.intl.string(v.t.fi3UQE),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, r.jsx)(s.j7V, {
                    value: null != o,
                    note: v.intl.string(v.t["52hMnJ"]),
                    onChange: T,
                    children: v.intl.string(v.t.erOqlp),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, r.jsx)(s.j7V, {
                    value: f,
                    note: v.intl.string(v.t["B/qU4O"]),
                    onChange: A,
                    children: v.intl.string(v.t.qDZryM),
                }),
            }),
            (0, r.jsxs)(_.F, {
                setting: y.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: w,
                        note: "Enable WARP Proxy Connection",
                        onChange: L,
                        children: "Enable WARP",
                    }),
                    D ? (0, r.jsx)(s.$jN, {}) : null,
                    (0, r.jsx)(s.Text, {
                        variant: "code",
                        children: x.map((e, t) => (0, r.jsx)("div", { children: JSON.stringify(e) }, t)),
                    }),
                ],
            }),
        ],
    });
}
