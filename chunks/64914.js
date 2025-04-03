n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(401430),
    o = n(100527),
    c = n(415439),
    d = n(921801),
    u = n(695103),
    m = n(998502),
    g = n(740492),
    p = n(695346),
    h = n(399970),
    f = n(726985),
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
function _() {
    let [e] = i.useState(() => m.ZP.getEnableHardwareAcceleration()),
        t = p.bm.useSetting(),
        n = p.Sb.useSetting(),
        _ = (0, s.e7)([u.Z], () => u.Z.testModeApplicationId),
        E = (0, s.e7)([g.ZP], () => g.ZP.showPlayAgain),
        j = i.useCallback((e) => {
            p.bm.updateSetting(!e);
        }, []),
        O = i.useCallback((e) => {
            e ? (0, a.h7j)((e) => (0, r.jsx)(h.Z, x({}, e))) : l.mc();
        }, []),
        C = i.useCallback((e) => {
            (0, c.BV)(e, o.Z.USER_SETTINGS);
        }, []),
        S = i.useCallback((e) => {
            (0, a.h7j)((t) => {
                var n, i;
                return (0, r.jsx)(
                    a.ConfirmModal,
                    ((n = x(
                        {
                            header: N.NW.string(N.t.aqpAvr),
                            confirmText: N.NW.string(N.t.BddRzc),
                            cancelText: N.NW.string(N.t['ETE/oK']),
                            onConfirm: () => m.ZP.setEnableHardwareAcceleration(e)
                        },
                        t
                    )),
                    (i = i =
                        {
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: N.NW.string(N.t.uDP3Ky)
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
        }, []);
    return (0, r.jsxs)(a.hjN, {
        tag: a.RB0.H1,
        title: N.NW.string(N.t['8/udY2']),
        children: [
            (0, r.jsx)(d.F, {
                setting: f.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, r.jsx)(a.j7V, {
                    value: n,
                    onChange: p.Sb.updateSetting,
                    note: N.NW.format(N.t['CY6q/f'], { apiDocsUrl: b.EYA.API_DOCS }),
                    children: N.NW.string(N.t.ObIb1d)
                })
            }),
            (0, r.jsx)(d.F, {
                setting: f.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsx)(a.j7V, {
                    value: e,
                    onChange: S,
                    note: N.NW.string(N.t.Afc7l5),
                    children: N.NW.string(N.t['eOC/Fx'])
                })
            }),
            (0, r.jsx)(d.F, {
                setting: f.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, r.jsx)(a.j7V, {
                    value: !t,
                    onChange: j,
                    note: N.NW.string(N.t['8mYp39']),
                    children: N.NW.string(N.t.fi3UQE)
                })
            }),
            (0, r.jsx)(d.F, {
                setting: f.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, r.jsx)(a.j7V, {
                    value: null != _,
                    note: N.NW.string(N.t['52hMnJ']),
                    onChange: O,
                    children: N.NW.string(N.t.erOqlp)
                })
            }),
            (0, r.jsx)(d.F, {
                setting: f.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, r.jsx)(a.j7V, {
                    value: E,
                    note: N.NW.string(N.t['B/qU4O']),
                    onChange: C,
                    children: N.NW.string(N.t.qDZryM)
                })
            })
        ]
    });
}
