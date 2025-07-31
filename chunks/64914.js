(n.d(t, { Z: () => C }), n(388685), n(49124));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(401430),
    o = n(100527),
    c = n(415439),
    d = n(956097),
    u = n(921801),
    m = n(695103),
    p = n(998502),
    g = n(740492),
    h = n(695346),
    f = n(494620),
    b = n(399970),
    x = n(726985),
    _ = n(981631),
    j = n(388032),
    O = n(40713);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function C() {
    let [e] = r.useState(() => p.ZP.getEnableHardwareAcceleration()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        C = (0, s.e7)([m.Z], () => m.Z.testModeApplicationId),
        v = (0, s.e7)([g.ZP], () => g.ZP.showPlayAgain),
        S = r.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        T = r.useCallback((e) => {
            e ? (0, a.h7j)((e) => (0, i.jsx)(b.Z, E({}, e))) : l.mc();
        }, []),
        N = r.useCallback((e) => {
            (0, c.BV)(e, o.Z.USER_SETTINGS);
        }, []),
        I = r.useCallback((e) => {
            (0, a.h7j)((t) => {
                var n, r;
                let s = e ? j.intl.format(j.t.LYXRxM, {}) : j.intl.format(j.t.uDP3Ky, {});
                return (0, i.jsx)(
                    a.ConfirmModal,
                    ((n = E(
                        {
                            header: j.intl.string(j.t.aqpAvr),
                            confirmText: j.intl.string(j.t.vT7ckp),
                            cancelText: j.intl.string(j.t['ETE/oK']),
                            onConfirm: () => p.ZP.setEnableHardwareAcceleration(e)
                        },
                        t
                    )),
                    (r = r =
                        {
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: s
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
            warpEnabled: y,
            warpConnecting: A,
            warpLog: P
        } = (0, s.cj)([d.Z], () => ({
            warpEnabled: d.Z.enabled,
            warpConnecting: d.Z.connecting,
            warpLog: d.Z.log
        })),
        R = r.useCallback((e) => {
            e ? d.Z.connect() : d.Z.disconnect();
        }, []);
    return (0, i.jsxs)(a.hjN, {
        tag: a.RB0.H1,
        title: j.intl.string(j.t['8/udY2']),
        children: [
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(a.j7V, {
                    value: n,
                    onChange: h.Sb.updateSetting,
                    note: j.intl.format(j.t['CY6q/f'], { apiDocsUrl: _.EYA.API_DOCS }),
                    children: j.intl.string(j.t.ObIb1d)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(a.j7V, {
                    className: e ? '' : O.formSwitchExtension,
                    value: e,
                    onChange: I,
                    note: j.intl.string(j.t.Afc7l5),
                    hideBorder: !e,
                    children: j.intl.string(j.t['eOC/Fx'])
                })
            }),
            !e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            look: f.z.WARNING,
                            children: j.intl.string(j.t.j7S6IS)
                        }),
                        (0, i.jsx)(a.$i$, { className: O.infoBoxDivider })
                    ]
                }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(a.j7V, {
                    value: !t,
                    onChange: S,
                    note: j.intl.string(j.t['8mYp39']),
                    children: j.intl.string(j.t.fi3UQE)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(a.j7V, {
                    value: null != C,
                    note: j.intl.string(j.t['52hMnJ']),
                    onChange: T,
                    children: j.intl.string(j.t.erOqlp)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(a.j7V, {
                    value: v,
                    note: j.intl.string(j.t['B/qU4O']),
                    onChange: N,
                    children: j.intl.string(j.t.qDZryM)
                })
            }),
            (0, i.jsxs)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, i.jsx)(a.j7V, {
                        value: y,
                        note: 'Enable WARP Proxy Connection',
                        onChange: R,
                        children: 'Enable WARP'
                    }),
                    A ? (0, i.jsx)(a.$jN, {}) : null,
                    (0, i.jsx)(a.Text, {
                        variant: 'code',
                        children: P.map((e, t) => (0, i.jsx)('div', { children: JSON.stringify(e) }, t))
                    })
                ]
            })
        ]
    });
}
