n.d(t, { Z: () => I }), n(35282), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    s = n(593473),
    a = n(828700),
    l = n(873546),
    o = n(481060),
    c = n(893776),
    u = n(388905),
    d = n(872549),
    h = n(703656),
    f = n(314897),
    g = n(626135),
    m = n(358085),
    p = n(954824),
    x = n(259706),
    _ = n(981631),
    E = n(186901),
    v = n(388032);
let b = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: s } = e;
    return (0, r.jsx)(u.ZP, {
        children: (0, r.jsxs)(o.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    gap: 8,
                    children: [(0, r.jsx)(u.Dx, { children: t }), (0, r.jsx)(u.DK, { children: n })],
                }),
                (0, r.jsx)(o.Button, {
                    onClick: s,
                    text: i,
                    fullWidth: !0,
                }),
            ],
        }),
    });
};
function j(e) {
    let { match: t, location: a } = e,
        o = (0, s.parse)(a.search).token,
        [d, j] = i.useState("loading"),
        I = i.useRef(!1),
        N = i.useCallback(async (e) => {
            try {
                g.default.track(_.rMx.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                    await c.Z.oneTimeLogin(e),
                    j("login_success"),
                    g.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                        source: "web_page",
                        login_method: "one_time_login",
                    }),
                    n.g.location.assign(_.Z5c.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                g.default.track(_.rMx.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    j("error");
            }
        }, []),
        y = i.useCallback((e) => {
            var t;
            let n = null != (t = f.default.getFingerprint()) ? t : f.default.getId(),
                r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
            p.Z.launch(r, (e) => {
                e
                    ? (g.default.track(_.rMx.DEEP_LINK_CLICKED, {
                          source: "web_page",
                          destination: "discord://login/one-time",
                          deep_link_provider: "protocol",
                          fingerprint: n,
                      }),
                      j("app_launched"))
                    : j("app_launch_not_supported");
            });
        }, []),
        S = i.useCallback(
            (e) => {
                var t;
                let r = null != (t = f.default.getFingerprint()) ? t : f.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 536285))
                    .then((t) => {
                        let { default: n } = t;
                        n.request(_.Etm.DEEP_LINK, {
                            type: E.jE.ONE_TIME_LOGIN,
                            params: {
                                token: e,
                                fingerprint: r,
                            },
                        })
                            .then((t) => {
                                null != t && t
                                    ? (g.default.track(_.rMx.DEEP_LINK_CLICKED, {
                                          source: "web_page",
                                          destination: "one_time_login_modal",
                                          deep_link_provider: "rpc",
                                          fingerprint: r,
                                      }),
                                      j("app_launched"))
                                    : y(e);
                            })
                            .catch(() => {
                                y(e);
                            })
                            .then(() => n.disconnect());
                    });
            },
            [y],
        );
    if (
        (i.useEffect(() => {
            let e = null != o && "string" == typeof o,
                t = l.tq ? "mobile" : l.Em ? "tablet" : (0, m.isDesktop)() ? "desktop_app" : "web";
            if (
                (g.default.track(_.rMx.ONE_TIME_LOGIN_PAGE_VIEWED, {
                    has_token: e,
                    device_type: t,
                }),
                !e)
            )
                return void j("error");
            if (l.tq || l.Em) {
                var n;
                let e = null == (n = g.default.getSuperProperties()) ? void 0 : n.os;
                g.default.track(_.rMx.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e,
                });
                return;
            }
            if ((0, m.isDesktop)()) return void N(o);
            I.current || ((I.current = !0), j("rpc_attempting"), S(o));
        }, [o, a, N, S]),
        l.tq || l.Em)
    ) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(x.e, {
            token: o,
            hasError: "error" === d,
            errorReason: e,
        });
    }
    if ((0, h.DB)()) return null;
    if ("app_launched" === d)
        return (0, r.jsx)(b, {
            title: v.intl.string(v.t.RvUUOy),
            subtitle: v.intl.string(v.t["5/lR0g"]),
            buttonText: v.intl.string(v.t["2ixEBi"]),
            buttonOnClick: () => {
                g.default.track(_.rMx.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: d }), N(o);
            },
        });
    if ("app_launch_not_supported" === d)
        return (0, r.jsx)(b, {
            title: v.intl.string(v.t.qq4tjT),
            subtitle: v.intl.string(v.t.CVxYRo),
            buttonText: v.intl.string(v.t["2ixEBi"]),
            buttonOnClick: () => N(o),
        });
    if ("error" === d) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(b, {
            title: v.intl.string(v.t.RtCSr1),
            subtitle: v.intl.string(v.t["S+YjYJ"]),
            buttonText: v.intl.string(v.t.j3cG2p),
            buttonOnClick: () => {
                g.default.track(_.rMx.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                    (0, h.uL)(_.Z5c.LOGIN);
            },
        });
    }
    return (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
}
let I = function (e) {
    let { enabled: t } = (0, d.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              j,
              (function (e) {
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
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e),
          )
        : (0, r.jsx)(a.l_, { to: _.Z5c.LOGIN });
};
