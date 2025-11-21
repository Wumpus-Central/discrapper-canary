n.d(t, { Z: () => I }), n(35282), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    s = n(593473),
    l = n(828700),
    a = n(873546),
    o = n(481060),
    c = n(893776),
    u = n(388905),
    d = n(872549),
    h = n(703656),
    g = n(314897),
    m = n(626135),
    p = n(358085),
    f = n(954824),
    _ = n(259706),
    x = n(981631),
    E = n(186901),
    v = n(388032);
let j = (e) => {
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
function b(e) {
    let { match: t, location: l } = e,
        o = (0, s.parse)(l.search).token,
        [d, b] = i.useState("loading"),
        I = i.useRef(!1),
        y = i.useCallback(async (e) => {
            try {
                m.default.track(x.rMx.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                    await c.Z.oneTimeLogin(e),
                    b("login_success"),
                    m.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                        source: "web_page",
                        login_method: "one_time_login",
                    }),
                    n.g.location.assign(x.Z5c.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                m.default.track(x.rMx.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    b("error");
            }
        }, []),
        N = i.useCallback((e) => {
            var t;
            let n = null != (t = g.default.getFingerprint()) ? t : g.default.getId(),
                r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
            f.Z.launch(r, (e) => {
                e
                    ? (m.default.track(x.rMx.DEEP_LINK_CLICKED, {
                          source: "web_page",
                          destination: "discord://login/one-time",
                          deep_link_provider: "protocol",
                          fingerprint: n,
                      }),
                      b("app_launched"))
                    : b("app_launch_not_supported");
            });
        }, []),
        S = i.useCallback(
            (e) => {
                var t;
                let r = null != (t = g.default.getFingerprint()) ? t : g.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 536285))
                    .then((t) => {
                        let { default: n } = t;
                        n.request(x.Etm.DEEP_LINK, {
                            type: E.jE.ONE_TIME_LOGIN,
                            params: {
                                token: e,
                                fingerprint: r,
                            },
                        })
                            .then((t) => {
                                null != t && t
                                    ? (m.default.track(x.rMx.DEEP_LINK_CLICKED, {
                                          source: "web_page",
                                          destination: "one_time_login_modal",
                                          deep_link_provider: "rpc",
                                          fingerprint: r,
                                      }),
                                      b("app_launched"))
                                    : N(e);
                            })
                            .catch(() => {
                                N(e);
                            })
                            .then(() => n.disconnect());
                    });
            },
            [N],
        );
    if (
        (i.useEffect(() => {
            let e = null != o && "string" == typeof o,
                t = a.tq ? "mobile" : a.Em ? "tablet" : (0, p.isDesktop)() ? "desktop_app" : "web";
            if (
                (m.default.track(x.rMx.ONE_TIME_LOGIN_PAGE_VIEWED, {
                    has_token: e,
                    device_type: t,
                }),
                !e)
            )
                return void b("error");
            if (a.tq || a.Em) {
                var n;
                let e = null == (n = m.default.getSuperProperties()) ? void 0 : n.os;
                m.default.track(x.rMx.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e,
                });
                return;
            }
            if ((0, p.isDesktop)()) return void y(o);
            I.current || ((I.current = !0), b("rpc_attempting"), S(o));
        }, [o, l, y, S]),
        a.tq || a.Em)
    ) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(_.e, {
            token: o,
            hasError: "error" === d,
            errorReason: e,
        });
    }
    if ((0, h.DB)()) return null;
    if ("app_launched" === d)
        return (0, r.jsx)(j, {
            title: v.intl.string(v.t.RvUUOy),
            subtitle: v.intl.string(v.t["5/lR0g"]),
            buttonText: v.intl.string(v.t["2ixEBi"]),
            buttonOnClick: () => {
                m.default.track(x.rMx.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: d }), y(o);
            },
        });
    if ("app_launch_not_supported" === d)
        return (0, r.jsx)(j, {
            title: v.intl.string(v.t.qq4tjT),
            subtitle: v.intl.string(v.t.CVxYRo),
            buttonText: v.intl.string(v.t["2ixEBi"]),
            buttonOnClick: () => y(o),
        });
    if ("error" === d) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(j, {
            title: v.intl.string(v.t.RtCSr1),
            subtitle: v.intl.string(v.t["S+YjYJ"]),
            buttonText: v.intl.string(v.t.j3cG2p),
            buttonOnClick: () => {
                m.default.track(x.rMx.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                    (0, h.uL)(x.Z5c.LOGIN);
            },
        });
    }
    return (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
}
let I = function (e) {
    let { enabled: t } = (0, d.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              b,
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
        : (0, r.jsx)(l.l_, { to: x.Z5c.LOGIN });
};
