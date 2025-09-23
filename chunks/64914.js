n.d(t, {
    ZP: () => D,
    fD: () => P,
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
    I = n(388032),
    T = n(247595);
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
function A(e) {
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
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = "AppHardwareAcceleration";
function P() {
    if ((0, f.Y)("DesktopNativeUtils")) {
        let e = o.K.get(R);
        if ("boolean" == typeof e) return e;
    }
    return h.ZP.getEnableHardwareAcceleration();
}
function w(e) {
    (0, f.Y)("DesktopNativeUtils")
        ? (o.K.set(R, e), h.ZP.setEnableHardwareAcceleration(!0))
        : h.ZP.setEnableHardwareAcceleration(e);
}
function D() {
    let [e] = i.useState(() => P()),
        t = g.bm.useSetting(),
        n = g.Sb.useSetting(),
        o = (0, a.e7)([p.Z], () => p.Z.testModeApplicationId),
        f = (0, a.e7)([m.ZP], () => m.ZP.showPlayAgain),
        h = i.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        S = i.useCallback((e) => {
            e ? (0, s.h7j)((e) => (0, r.jsx)(b.Z, A({}, e))) : l.mc();
        }, []),
        C = i.useCallback((e) => {
            (0, u.BV)(e, c.Z.USER_SETTINGS);
        }, []),
        R = i.useCallback((e) => {
            (0, s.h7j)((t) => {
                let n = e ? I.intl.format(I.t.LYXRxM, {}) : I.intl.format(I.t.uDP3Ky, {});
                return (0, r.jsx)(
                    s.ConfirmModal,
                    N(
                        A(
                            {
                                header: I.intl.string(I.t.aqpAvr),
                                confirmText: I.intl.string(I.t.vT7ckp),
                                cancelText: I.intl.string(I.t["ETE/oK"]),
                                onConfirm: () => w(e),
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
            warpEnabled: D,
            warpConnecting: x,
            warpLog: L,
        } = (0, a.cj)([d.Z], () => ({
            warpEnabled: d.Z.enabled,
            warpConnecting: d.Z.connecting,
            warpLog: d.Z.log,
        })),
        j = i.useCallback((e) => {
            e ? d.Z.connect() : d.Z.disconnect();
        }, []);
    return (0, r.jsxs)(y.Z, {
        title: I.intl.string(I.t["8/udY2"]),
        children: [
            (0, r.jsx)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, r.jsx)(s.j7V, {
                    value: n,
                    onChange: g.Sb.updateSetting,
                    note: I.intl.format(I.t["CY6q/f"], { apiDocsUrl: v.EYA.API_DOCS }),
                    children: I.intl.string(I.t.ObIb1d),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsx)(s.j7V, {
                    className: e ? "" : T.formSwitchExtension,
                    value: e,
                    onChange: R,
                    note: I.intl.string(I.t.Afc7l5),
                    hideBorder: !e,
                    children: I.intl.string(I.t["eOC/Fx"]),
                }),
            }),
            !e &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.Z, {
                            look: E.z.WARNING,
                            children: I.intl.string(I.t.j7S6IS),
                        }),
                        (0, r.jsx)(s.$i$, { className: T.infoBoxDivider }),
                    ],
                }),
            (0, r.jsx)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, r.jsx)(s.j7V, {
                    value: !t,
                    onChange: h,
                    note: I.intl.string(I.t["8mYp39"]),
                    children: I.intl.string(I.t.fi3UQE),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, r.jsx)(s.j7V, {
                    value: null != o,
                    note: I.intl.string(I.t["52hMnJ"]),
                    onChange: S,
                    children: I.intl.string(I.t.erOqlp),
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, r.jsx)(s.j7V, {
                    value: f,
                    note: I.intl.string(I.t["B/qU4O"]),
                    onChange: C,
                    children: I.intl.string(I.t.qDZryM),
                }),
            }),
            (0, r.jsxs)(_.F, {
                setting: O.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: D,
                        note: "Enable WARP Proxy Connection",
                        onChange: j,
                        children: "Enable WARP",
                    }),
                    x ? (0, r.jsx)(s.$jN, {}) : null,
                    (0, r.jsx)(s.Text, {
                        variant: "code",
                        children: L.map((e, t) => (0, r.jsx)("div", { children: JSON.stringify(e) }, t)),
                    }),
                ],
            }),
        ],
    });
}
