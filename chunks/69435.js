n.d(t, {
    Ay: () => C,
    DS: () => T,
    yW: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(506774),
    o = n(314116),
    l = n(397927),
    c = n(271866),
    u = n(724122),
    d = n(195043),
    f = n(147964),
    p = n(837921),
    _ = n(253932),
    h = n(801264),
    m = n(912615),
    g = n(790174),
    E = n(531525),
    b = n(652215),
    y = n(985018);
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
                O(e, t, n[t]);
            });
    }
    return e;
}
let v = "AppHardwareAcceleration";
function S() {
    if ((0, u.W)("DesktopNativeUtils")) {
        let e = s.w.get(v);
        if ("boolean" == typeof e) return e;
    }
    return p.Ay.getEnableHardwareAcceleration();
}
function I(e) {
    (0, u.W)("DesktopNativeUtils")
        ? (s.w.set(v, e), p.Ay.setEnableHardwareAcceleration(!0))
        : p.Ay.setEnableHardwareAcceleration(e);
}
function T() {
    let [e] = i.useState(() => S()),
        t = i.useCallback((e) => {
            let t = e ? y.intl.format(y.t.LYXRxL, {}) : y.intl.format(y.t.uDP3Kz, {});
            (0, o.A)({
                title: y.intl.string(y.t.aqpAvn),
                subtitle: t,
                confirmText: y.intl.string(y.t.vT7ckk),
                onConfirm: () => I(e),
            });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.dOG, {
                label: y.intl.string(y.t["eOC/F2"]),
                description: y.intl.string(y.t.Afc7l6),
                checked: e,
                onChange: t,
            }),
            !e &&
                (0, r.jsx)(h.A, {
                    look: h.k.WARNING,
                    children: y.intl.string(y.t.j7S6IX),
                }),
        ],
    });
}
function C() {
    let e = _.l_.useSetting(),
        t = _.Q_.useSetting(),
        n = (0, a.bG)([f.A], () => f.A.testModeApplicationId),
        s = i.useCallback((e) => {
            _.l_.updateSetting(!e);
        }, []),
        o = i.useCallback((e) => {
            e ? (0, l.qfG)((e) => (0, r.jsx)(m.A, A({}, e))) : c.cL();
        }, []);
    return (0, r.jsx)(g.A, {
        title: y.intl.string(y.t["8/udY0"]),
        children: (0, r.jsxs)(l.BJc, {
            gap: 16,
            children: [
                (0, r.jsxs)(d.x, {
                    setting: E.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, r.jsx)(l.dOG, {
                            label: y.intl.string(y.t.ObIb1Q),
                            description: y.intl.format(y.t["CY6q/Q"], { apiDocsUrl: b.X7G.API_DOCS }),
                            checked: t,
                            onChange: _.Q_.updateSetting,
                        }),
                        (0, r.jsx)(l.cGx, {}),
                    ],
                }),
                (0, r.jsx)(d.x, {
                    setting: E.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)(l.BJc, {
                        gap: 16,
                        children: [(0, r.jsx)(T, {}), (0, r.jsx)(l.cGx, {})],
                    }),
                }),
                (0, r.jsxs)(d.x, {
                    setting: E.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, r.jsx)(l.dOG, {
                            label: y.intl.string(y.t.fi3UQN),
                            description: y.intl.string(y.t["8mYp37"]),
                            checked: !e,
                            onChange: s,
                        }),
                        (0, r.jsx)(l.cGx, {}),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: E.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, r.jsx)(l.dOG, {
                            label: y.intl.string(y.t.erOqlh),
                            description: y.intl.string(y.t["52hMnD"]),
                            checked: null != n,
                            onChange: o,
                        }),
                        (0, r.jsx)(l.cGx, {}),
                    ],
                }),
            ],
        }),
    });
}
