n.d(t, {
    A: () => O,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(554146),
    s = n(192308),
    o = n(882997),
    l = n(826673),
    c = n(430452),
    u = n(954571),
    d = n(605497),
    f = n(544105),
    p = n(652215),
    _ = n(985018);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
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
            if (c.A.getMode() !== p.TBI.PUSH_TO_TALK || (0, l.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [p.fg2.XBOX]: _.intl.string(_.t.bVZ7vy),
                [p.fg2.PLAYSTATION]: _.intl.string(_.t["6iqUsf"]),
                [p.fg2.PLAYSTATION_STAGING]: _.intl.string(_.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, l.Dr)(a.M.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          o = (e) =>
                              (0, r.jsx)(
                                  i.Modal,
                                  E(m({}, e), {
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
                      (0, s.hasModalOpen)(y)
                          ? (0, s.updateModal)(y, (e) => o(e))
                          : (0, s.openModalLazy)(async () => (e) => o(e), {
                                modalKey: y,
                            });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: a, reconnectPlatformType: l } = e,
                c = (0, r.jsx)(d.P, {
                    body: n,
                    errorCodeMessage: a,
                    dismissCallback: () => (0, s.closeModal)(b),
                });

            function h() {
                null != l &&
                    ((0, o.A)({
                        platformType: l,
                    }),
                    u.default.track(p.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: f.yM,
                        current_step: "desktop oauth",
                        platform_type: l,
                    }));
            }
            let g = (e) =>
                (0, r.jsx)(
                    i.Modal,
                    E(m({}, e), {
                        title: t,
                        actions: [
                            {
                                text: _.intl.string(_.t.BddRzS),
                                onClick: h,
                            },
                        ],
                        children: c,
                    }),
                );
            (0, s.hasModalOpen)(b)
                ? (0, s.updateModal)(b, (e) => g(e))
                : (0, s.openModalLazy)(async () => (e) => g(e), {
                      modalKey: b,
                  });
        },
    };
