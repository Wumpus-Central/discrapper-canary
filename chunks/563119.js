n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(704215),
    o = n(952265),
    s = n(231757),
    l = n(266454),
    c = n(131951),
    u = n(626135),
    d = n(542238),
    f = n(927923),
    p = n(981631),
    _ = n(388032);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
let b = "game_console_alert_modal",
    y = "game_console_ptt_alert_modal",
    O = {
        maybeShowPTTAlert(e) {
            if (c.Z.getMode() !== p.pM4.PUSH_TO_TALK || (0, l.zu)(a.z.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [p.ABu.XBOX]: _.intl.string(_.t.bVZ7vy),
                [p.ABu.PLAYSTATION]: _.intl.string(_.t["6iqUsf"]),
                [p.ABu.PLAYSTATION_STAGING]: _.intl.string(_.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, l.Q3)(a.z.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          s = (e) =>
                              (0, r.jsx)(
                                  i.Modal,
                                  E(h({}, e), {
                                      title: t,
                                      subtitle: _.intl.string(_.t.bL21zs),
                                      actions: [
                                          {
                                              text: _.intl.string(_.t.BddRzS),
                                              onClick: n,
                                          },
                                      ],
                                  }),
                              );
                      (0, o.hasModalOpen)(y)
                          ? (0, o.updateModal)(y, (e) => s(e))
                          : (0, o.openModalLazy)(async () => (e) => s(e), { modalKey: y });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: a, reconnectPlatformType: l } = e,
                c = (0, r.jsx)(d.t, {
                    body: n,
                    errorCodeMessage: a,
                    dismissCallback: () => (0, o.closeModal)(b),
                });
            function m() {
                null != l &&
                    ((0, s.Z)({ platformType: l }),
                    u.default.track(p.rMx.ACCOUNT_LINK_STEP, {
                        previous_step: f.Lw,
                        current_step: "desktop oauth",
                        platform_type: l,
                    }));
            }
            let g = (e) =>
                (0, r.jsx)(
                    i.Modal,
                    E(h({}, e), {
                        title: t,
                        actions: [
                            {
                                text: _.intl.string(_.t.BddRzS),
                                onClick: m,
                            },
                        ],
                        children: c,
                    }),
                );
            (0, o.hasModalOpen)(b)
                ? (0, o.updateModal)(b, (e) => g(e))
                : (0, o.openModalLazy)(async () => (e) => g(e), { modalKey: b });
        },
    };
