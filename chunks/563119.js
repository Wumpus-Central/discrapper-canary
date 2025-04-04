n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(704215),
    o = n(952265),
    a = n(468026),
    s = n(231757),
    l = n(605236),
    c = n(131951),
    u = n(626135),
    d = n(542238),
    f = n(927923),
    _ = n(981631),
    p = n(388032),
    h = n(97800);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 'game_console_alert_modal',
    v = 'game_console_ptt_alert_modal',
    O = {
        maybeShowPTTAlert(e) {
            if (c.Z.getMode() !== _.pM4.PUSH_TO_TALK || (0, l.un)(i.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                [_.ABu.XBOX]: p.NW.string(p.t.bVZ7v7),
                [_.ABu.PLAYSTATION]: p.NW.string(p.t['6iqUsb']),
                [_.ABu.PLAYSTATION_STAGING]: p.NW.string(p.t['6iqUsb'])
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, l.EW)(i.z.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          s = (e) =>
                              (0, r.jsx)(
                                  a.default,
                                  b(g({}, e), {
                                      title: t,
                                      body: p.NW.string(p.t.bL21zs),
                                      onConfirm: n,
                                      titleClassName: h.title
                                  })
                              );
                      (0, o.nf)(v) ? (0, o.o)(v, s) : (0, o.h7)(s, { modalKey: v });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: i, reconnectPlatformType: l } = e,
                c = (0, r.jsx)(d.t, {
                    body: n,
                    errorCodeMessage: i,
                    dismissCallback: () => (0, o.Mr)(y)
                });
            function p() {
                null != l &&
                    ((0, s.Z)({ platformType: l }),
                    u.default.track(_.rMx.ACCOUNT_LINK_STEP, {
                        previous_step: f.Lw,
                        current_step: 'desktop oauth',
                        platform_type: l
                    }));
            }
            let h = (e) =>
                (0, r.jsx)(
                    a.default,
                    b(g({}, e), {
                        title: t,
                        body: c,
                        onConfirm: p
                    })
                );
            (0, o.nf)(y) ? (0, o.o)(y, h) : (0, o.h7)(h, { modalKey: y });
        }
    };
