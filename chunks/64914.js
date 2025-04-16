n.d(t, { Z: () => E }), n(388685), n(49124);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(401430),
    o = n(100527),
    c = n(415439),
    d = n(956097),
    u = n(921801),
    m = n(695103),
    g = n(998502),
    p = n(740492),
    h = n(695346),
    f = n(399970),
    _ = n(726985),
    b = n(981631),
    N = n(388032);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E() {
    let [e] = i.useState(() => g.ZP.getEnableHardwareAcceleration()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        E = (0, s.e7)([m.Z], () => m.Z.testModeApplicationId),
        j = (0, s.e7)([p.ZP], () => p.ZP.showPlayAgain),
        C = i.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        O = i.useCallback((e) => {
            e ? (0, a.h7j)((e) => (0, r.jsx)(f.Z, x({}, e))) : l.mc();
        }, []),
        S = i.useCallback((e) => {
            (0, c.BV)(e, o.Z.USER_SETTINGS);
        }, []),
        v = i.useCallback((e) => {
            (0, a.h7j)((t) => {
                var n, i;
                return (0, r.jsx)(
                    a.ConfirmModal,
                    ((n = x(
                        {
                            header: N.NW.string(N.t.aqpAvr),
                            confirmText: N.NW.string(N.t.vT7ckp),
                            cancelText: N.NW.string(N.t['ETE/oK']),
                            onConfirm: () => g.ZP.setEnableHardwareAcceleration(e)
                        },
                        t
                    )),
                    (i = i =
                        {
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: N.NW.format(N.t.uDP3Ky, {})
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            });
        }, []),
        {
            warpEnabled: T,
            warpConnecting: I,
            warpLog: y
        } = (0, s.cj)([d.Z], () => ({
            warpEnabled: d.Z.enabled,
            warpConnecting: d.Z.connecting,
            warpLog: d.Z.log
        })),
        A = i.useCallback((e) => {
            e ? d.Z.connect() : d.Z.disconnect();
        }, []);
    return (0, r.jsxs)(a.hjN, {
        tag: a.RB0.H1,
        title: N.NW.string(N.t['8/udY2']),
        children: [
            (0, r.jsx)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, r.jsx)(a.j7V, {
                    value: n,
                    onChange: h.Sb.updateSetting,
                    note: N.NW.format(N.t['CY6q/f'], { apiDocsUrl: b.EYA.API_DOCS }),
                    children: N.NW.string(N.t.ObIb1d)
                })
            }),
            (0, r.jsx)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsx)(a.j7V, {
                    value: e,
                    onChange: v,
                    note: N.NW.string(N.t.Afc7l5),
                    children: N.NW.string(N.t['eOC/Fx'])
                })
            }),
            (0, r.jsx)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, r.jsx)(a.j7V, {
                    value: !t,
                    onChange: C,
                    note: N.NW.string(N.t['8mYp39']),
                    children: N.NW.string(N.t.fi3UQE)
                })
            }),
            (0, r.jsx)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, r.jsx)(a.j7V, {
                    value: null != E,
                    note: N.NW.string(N.t['52hMnJ']),
                    onChange: O,
                    children: N.NW.string(N.t.erOqlp)
                })
            }),
            (0, r.jsx)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, r.jsx)(a.j7V, {
                    value: j,
                    note: N.NW.string(N.t['B/qU4O']),
                    onChange: S,
                    children: N.NW.string(N.t.qDZryM)
                })
            }),
            (0, r.jsxs)(u.F, {
                setting: _.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, r.jsx)(a.j7V, {
                        value: T,
                        note: 'Enable WARP Proxy Connection',
                        onChange: A,
                        children: 'Enable WARP'
                    }),
                    I ? (0, r.jsx)(a.$jN, {}) : null,
                    (0, r.jsx)(a.Text, {
                        variant: 'code',
                        children: y.map((e, t) => (0, r.jsx)('div', { children: JSON.stringify(e) }, t))
                    })
                ]
            })
        ]
    });
}
