(n.d(t, { Z: () => O }), n(388685), n(49124));
var i = n(255367),
    r = n(73800),
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
    f = n(494620),
    b = n(399970),
    x = n(726985),
    _ = n(981631),
    E = n(388032),
    j = n(40713);
function C(e) {
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
function O() {
    let [e] = r.useState(() => p.ZP.getEnableHardwareAcceleration()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        O = (0, s.e7)([m.Z], () => m.Z.testModeApplicationId),
        S = (0, s.e7)([g.ZP], () => g.ZP.showPlayAgain),
        v = r.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        T = r.useCallback((e) => {
            e ? (0, l.h7j)((e) => (0, i.jsx)(b.Z, C({}, e))) : a.mc();
        }, []),
        N = r.useCallback((e) => {
            (0, c.BV)(e, o.Z.USER_SETTINGS);
        }, []),
        I = r.useCallback((e) => {
            (0, l.h7j)((t) => {
                var n, r;
                let s = e ? E.intl.format(E.t.LYXRxM, {}) : E.intl.format(E.t.uDP3Ky, {});
                return (0, i.jsx)(
                    l.ConfirmModal,
                    ((n = C(
                        {
                            header: E.intl.string(E.t.aqpAvr),
                            confirmText: E.intl.string(E.t.vT7ckp),
                            cancelText: E.intl.string(E.t['ETE/oK']),
                            onConfirm: () => p.ZP.setEnableHardwareAcceleration(e)
                        },
                        t
                    )),
                    (r = r =
                        {
                            children: (0, i.jsx)(l.Text, {
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
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: E.intl.string(E.t['8/udY2']),
        children: [
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: n,
                    onChange: h.Sb.updateSetting,
                    note: E.intl.format(E.t['CY6q/f'], { apiDocsUrl: _.EYA.API_DOCS }),
                    children: E.intl.string(E.t.ObIb1d)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.j7V, {
                    className: e ? '' : j.formSwitchExtension,
                    value: e,
                    onChange: I,
                    note: E.intl.string(E.t.Afc7l5),
                    hideBorder: !e,
                    children: E.intl.string(E.t['eOC/Fx'])
                })
            }),
            !e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            look: f.z.WARNING,
                            children: E.intl.string(E.t.j7S6IS)
                        }),
                        (0, i.jsx)(l.$i$, { className: j.infoBoxDivider })
                    ]
                }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.j7V, {
                    value: !t,
                    onChange: v,
                    note: E.intl.string(E.t['8mYp39']),
                    children: E.intl.string(E.t.fi3UQE)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: null != O,
                    note: E.intl.string(E.t['52hMnJ']),
                    onChange: T,
                    children: E.intl.string(E.t.erOqlp)
                })
            }),
            (0, i.jsx)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(l.j7V, {
                    value: S,
                    note: E.intl.string(E.t['B/qU4O']),
                    onChange: N,
                    children: E.intl.string(E.t.qDZryM)
                })
            }),
            (0, i.jsxs)(u.F, {
                setting: x.s6.SETTINGS_ADVANCED_CF_WARP,
                children: [
                    (0, i.jsx)(l.j7V, {
                        value: y,
                        note: 'Enable WARP Proxy Connection',
                        onChange: R,
                        children: 'Enable WARP'
                    }),
                    A ? (0, i.jsx)(l.$jN, {}) : null,
                    (0, i.jsx)(l.Text, {
                        variant: 'code',
                        children: P.map((e, t) => (0, i.jsx)('div', { children: JSON.stringify(e) }, t))
                    })
                ]
            })
        ]
    });
}
