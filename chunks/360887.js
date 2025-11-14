n.d(t, { Z: () => y }), n(35282), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    s = n(593473),
    l = n(843611),
    a = n(873546),
    o = n(481060),
    c = n(893776),
    u = n(388905),
    d = n(872549),
    h = n(703656),
    g = n(314897),
    m = n(594174),
    p = n(626135),
    f = n(361207),
    _ = n(358085),
    x = n(954824),
    E = n(981631),
    v = n(186901),
    j = n(388032);
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
function I(e) {
    let { match: t, location: l } = e,
        o = (0, s.parse)(l.search).token,
        [d, I] = i.useState("loading"),
        y = i.useRef(!1),
        S = i.useCallback(async (e) => {
            try {
                if (g.default.isAuthenticated()) return void I("already_logged_in");
                p.default.track(E.rMx.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                    await c.Z.oneTimeLogin(e),
                    I("login_success"),
                    p.default.track(E.rMx.LOGIN_SUCCESSFUL, {
                        source: "web_page",
                        login_method: "one_time_login",
                    }),
                    n.g.location.assign(E.Z5c.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                p.default.track(E.rMx.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    I("error");
            }
        }, []),
        N = i.useCallback((e) => {
            var t;
            let n = null != (t = g.default.getFingerprint()) ? t : g.default.getId(),
                r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
            x.Z.launch(r, (e) => {
                e
                    ? (p.default.track(E.rMx.DEEP_LINK_CLICKED, {
                          source: "web_page",
                          destination: "discord://login/one-time",
                          deep_link_provider: "protocol",
                          fingerprint: n,
                      }),
                      I("app_launched"))
                    : I("app_launch_not_supported");
            });
        }, []),
        O = i.useCallback(
            (e) => {
                var t;
                let r = null != (t = g.default.getFingerprint()) ? t : g.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 536285))
                    .then((t) => {
                        let { default: n } = t;
                        n.request(E.Etm.DEEP_LINK, {
                            type: v.jE.ONE_TIME_LOGIN,
                            params: {
                                token: e,
                                fingerprint: r,
                            },
                        })
                            .then((t) => {
                                null != t && t
                                    ? (p.default.track(E.rMx.DEEP_LINK_CLICKED, {
                                          source: "web_page",
                                          destination: "one_time_login_modal",
                                          deep_link_provider: "rpc",
                                          fingerprint: r,
                                      }),
                                      I("app_launched"))
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
                t = a.tq ? "mobile" : a.Em ? "tablet" : (0, _.isDesktop)() ? "desktop_app" : "web";
            if (
                (p.default.track(E.rMx.ONE_TIME_LOGIN_PAGE_VIEWED, {
                    has_token: e,
                    device_type: t,
                }),
                !e)
            )
                return void I("error");
            if (a.tq || a.Em) {
                var n, r;
                let e = null == (n = p.default.getSuperProperties()) ? void 0 : n.os,
                    i = new URL(l.pathname + l.search, window.location.origin),
                    s = (0, f.Gn)("one_time_login", e, i),
                    a = null != (r = g.default.getFingerprint()) ? r : g.default.getId();
                p.default.track(E.rMx.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_redirect",
                    device_type: t,
                    platform: e,
                }),
                    p.default.track(E.rMx.DEEP_LINK_CLICKED, {
                        source: "web_page",
                        destination: "mobile_app",
                        deep_link_provider: "mobile_redirect",
                        fingerprint: a,
                    }),
                    (window.location.href = s);
                return;
            }
            if ((0, _.isDesktop)()) return void S(o);
            y.current || ((y.current = !0), I("rpc_attempting"), O(o));
        }, [o, l, S, O]),
        a.tq || a.Em || (0, h.DB)())
    )
        return null;
    if ("app_launched" === d)
        return (0, r.jsx)(b, {
            title: j.intl.string(j.t.RvUUOy),
            subtitle: j.intl.string(j.t["5/lR0g"]),
            buttonText: j.intl.string(j.t["2ixEBi"]),
            buttonOnClick: () => {
                p.default.track(E.rMx.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: d }), S(o);
            },
        });
    if ("app_launch_not_supported" === d)
        return (0, r.jsx)(b, {
            title: j.intl.string(j.t.qq4tjT),
            subtitle: j.intl.string(j.t.CVxYRo),
            buttonText: j.intl.string(j.t["2ixEBi"]),
            buttonOnClick: () => S(o),
        });
    if ("error" === d) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(b, {
            title: j.intl.string(j.t.RtCSr1),
            subtitle: j.intl.string(j.t["S+YjYJ"]),
            buttonText: j.intl.string(j.t.j3cG2p),
            buttonOnClick: () => {
                p.default.track(E.rMx.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                    (0, h.uL)(E.Z5c.LOGIN);
            },
        });
    }
    if ("already_logged_in" === d) {
        var C, T;
        return (0, r.jsx)(b, {
            title: j.intl.string(j.t.MKW8z2),
            subtitle: j.intl.formatToPlainString(j.t.YOeM7B, {
                username:
                    null != (T = null == (C = m.default.getCurrentUser()) ? void 0 : C.username) ? T : "current user",
            }),
            buttonText: j.intl.string(j.t["3PatSz"]),
            buttonOnClick: () => (0, h.uL)(E.Z5c.ME),
        });
    }
    return (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
}
let y = function (e) {
    let { enabled: t } = (0, d.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              I,
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
        : (0, r.jsx)(l.l_, { to: E.Z5c.LOGIN });
};
