n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(704215),
    a = n(952265),
    o = n(82659),
    s = n(231757),
    l = n(266454),
    c = n(131951),
    u = n(626135),
    d = n(542238),
    _ = n(927923),
    f = n(981631),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 'game_console_alert_modal',
    y = 'game_console_ptt_alert_modal',
    O = {
        maybeShowPTTAlert(e) {
            if (c.Z.getMode() !== f.pM4.PUSH_TO_TALK || (0, l.zu)(i.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                [f.ABu.XBOX]: p.intl.string(p.t.bVZ7v7),
                [f.ABu.PLAYSTATION]: p.intl.string(p.t['6iqUsb']),
                [f.ABu.PLAYSTATION_STAGING]: p.intl.string(p.t['6iqUsb'])
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              ((0, l.Q3)(i.z.CONSOLE_PTT_DISABLE_ALERT), e());
                          },
                          s = (e) =>
                              (0, r.jsx)(
                                  o.Modal,
                                  E(m({}, e), {
                                      title: t,
                                      subtitle: p.intl.string(p.t.bL21zs),
                                      actions: [
                                          {
                                              text: p.intl.string(p.t.BddRzc),
                                              onClick: n
                                          }
                                      ]
                                  })
                              );
                      (0, a.nf)(y) ? (0, a.o)(y, (e) => s(e)) : (0, a.ZD)(async () => (e) => s(e), { modalKey: y });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: i, reconnectPlatformType: l } = e,
                c = (0, r.jsx)(d.t, {
                    body: n,
                    errorCodeMessage: i,
                    dismissCallback: () => (0, a.Mr)(b)
                });
            function h() {
                null != l &&
                    ((0, s.Z)({ platformType: l }),
                    u.default.track(f.rMx.ACCOUNT_LINK_STEP, {
                        previous_step: _.Lw,
                        current_step: 'desktop oauth',
                        platform_type: l
                    }));
            }
            let g = (e) =>
                (0, r.jsx)(
                    o.Modal,
                    E(m({}, e), {
                        title: t,
                        actions: [
                            {
                                text: p.intl.string(p.t.BddRzc),
                                onClick: h
                            }
                        ],
                        children: c
                    })
                );
            (0, a.nf)(b) ? (0, a.o)(b, (e) => g(e)) : (0, a.ZD)(async () => (e) => g(e), { modalKey: b });
        }
    };
