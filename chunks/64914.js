n.d(t, { Z: () => C }), n(388685), n(49124);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(401430),
    o = n(100527),
    c = n(415439),
    d = n(956097),
    u = n(921801),
    m = n(695103),
    p = n(998502),
    g = n(740492),
    h = n(695346),
    f = n(399970),
    b = n(726985),
    _ = n(981631),
    x = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C() {
    let [e] = r.useState(() => p.ZP.getEnableHardwareAcceleration()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        C = (0, s.e7)([m.Z], () => m.Z.testModeApplicationId),
        j = (0, s.e7)([g.ZP], () => g.ZP.showPlayAgain),
        O = r.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        S = r.useCallback((e) => {
            e ? (0, l.h7j)((e) => (0, i.jsx)(f.Z, E({}, e))) : a.mc();
        }, []),
        v = r.useCallback((e) => {
            (0, c.BV)(e, o.Z.USER_SETTINGS);
        }, []),
        T = r.useCallback((e) => {
            (0, l.h7j)((t) => {
                var n, r;
                return (0, i.jsx)(
                    l.ConfirmModal,
                    ((n = E(
                        {
                            header: x.intl.string(x.t.aqpAvr),
                            confirmText: x.intl.string(x.t.vT7ckp),
                            cancelText: x.intl.string(x.t['ETE/oK']),
                            onConfirm: () => p.ZP.setEnableHardwareAcceleration(e)
                        },
                        t
                    )),
                    (r = r =
                        {
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: x.intl.format(x.t.uDP3Ky, {})
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n)
                );
            });
        }, []),
        {
            warpEnabled: I,
            warpConnecting: N,
            warpLog: y
        } = (0, s.cj)([d.Z], () => ({
            warpEnabled: d.Z.enabled,
            warpConnecting: d.Z.connecting,
            warpLog: d.Z.log
        })),
        A = r.useCallback((e) => {
            e ? d.Z.connect() : d.Z.disconnect();
        }, []);
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: x.intl.string(x.t['8/udY2']),
        children: [
            (0, i.jsx)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: n,
                    onChange: h.Sb.updateSetting,
                    note: x.intl.format(x.t['CY6q/f'], { apiDocsUrl: _.EYA.API_DOCS }),
                    children: x.intl.string(x.t.ObIb1d)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.j7V, {
                    value: e,
                    onChange: T,
                    note: x.intl.string(x.t.Afc7l5),
                    children: x.intl.string(x.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.j7V, {
                    value: !t,
                    onChange: O,
                    note: x.intl.string(x.t['8mYp39']),
                    children: x.intl.string(x.t.fi3UQE)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: null != C,
                    note: x.intl.string(x.t['52hMnJ']),
                    onChange: S,
                    children: x.intl.string(x.t.erOqlp)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(l.j7V, {
                    value: j,
                    note: x.intl.string(x.t['B/qU4O']),
                    onChange: v,
                    children: x.intl.string(x.t.qDZryM)
                })
            }),
            (0, i.jsxs)(u.F, {
                setting: b.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, i.jsx)(l.j7V, {
                        value: I,
                        note: 'Enable WARP Proxy Connection',
                        onChange: A,
                        children: 'Enable WARP'
                    }),
                    N ? (0, i.jsx)(l.$jN, {}) : null,
                    (0, i.jsx)(l.Text, {
                        variant: 'code',
                        children: y.map((e, t) => (0, i.jsx)('div', { children: JSON.stringify(e) }, t))
                    })
                ]
            })
        ]
    });
}
