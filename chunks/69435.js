n.d(t, {
    A: () => O,
    D: () => b,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(314116),
    a = n(397927),
    o = n(271866),
    c = n(195043),
    d = n(147964),
    u = n(837921),
    g = n(253932),
    h = n(801264),
    x = n(912615),
    A = n(790174),
    p = n(531525),
    m = n(652215),
    j = n(985018);

function b() {
    let [e] = s.useState(() => u.Ay.getEnableHardwareAcceleration()),
        t = s.useCallback((e) => {
            let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
            (0, r.A)({
                title: j.intl.string(j.t.aqpAvn),
                subtitle: t,
                confirmText: j.intl.string(j.t.vT7ckk),
                onConfirm: () => u.Ay.setEnableHardwareAcceleration(e),
            });
        }, []);
    return (0, i.jsxs)(a.BJc, {
        children: [
            (0, i.jsx)(a.dOG, {
                label: j.intl.string(j.t["eOC/F2"]),
                description: j.intl.string(j.t.Afc7l6),
                checked: e,
                onChange: t,
            }),
            !e &&
                (0, i.jsx)(h.A, {
                    look: h.k.WARNING,
                    children: j.intl.string(j.t.j7S6IX),
                }),
        ],
    });
}

function O() {
    let e = g.l_.useSetting(),
        t = g.Q_.useSetting(),
        n = (0, l.bG)([d.A], () => d.A.testModeApplicationId),
        r = s.useCallback((e) => {
            g.l_.updateSetting(!e);
        }, []),
        u = s.useCallback((e) => {
            e
                ? (0, a.qfG)((e) =>
                      (0, i.jsx)(
                          x.A,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })({}, e),
                      ),
                  )
                : o.cL();
        }, []);
    return (0, i.jsx)(A.A, {
        title: j.intl.string(j.t["8/udY0"]),
        children: (0, i.jsxs)(a.BJc, {
            gap: 16,
            children: [
                (0, i.jsxs)(c.x, {
                    setting: p.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                    children: [
                        (0, i.jsx)(a.dOG, {
                            label: j.intl.string(j.t.ObIb1Q),
                            description: j.intl.format(j.t["CY6q/Q"], {
                                apiDocsUrl: m.X7G.API_DOCS,
                            }),
                            checked: t,
                            onChange: g.Q_.updateSetting,
                        }),
                        (0, i.jsx)(a.cGx, {}),
                    ],
                }),
                (0, i.jsx)(c.x, {
                    setting: p.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                    children: (0, i.jsxs)(a.BJc, {
                        gap: 16,
                        children: [(0, i.jsx)(b, {}), (0, i.jsx)(a.cGx, {})],
                    }),
                }),
                (0, i.jsxs)(c.x, {
                    setting: p.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                    children: [
                        (0, i.jsx)(a.dOG, {
                            label: j.intl.string(j.t.fi3UQN),
                            description: j.intl.string(j.t["8mYp37"]),
                            checked: !e,
                            onChange: r,
                        }),
                        (0, i.jsx)(a.cGx, {}),
                    ],
                }),
                (0, i.jsxs)(c.x, {
                    setting: p.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                    children: [
                        (0, i.jsx)(a.dOG, {
                            label: j.intl.string(j.t.erOqlh),
                            description: j.intl.string(j.t["52hMnD"]),
                            checked: null != n,
                            onChange: u,
                        }),
                        (0, i.jsx)(a.cGx, {}),
                    ],
                }),
            ],
        }),
    });
}
