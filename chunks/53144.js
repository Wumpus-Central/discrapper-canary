n.d(t, { Y: () => O }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(893776),
    c = n(388905),
    u = n(703656),
    d = n(314897),
    f = n(626135),
    _ = n(981631),
    p = n(388032);
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
function b(e) {
    let { token: t, onClose: n } = e,
        [a, s] = i.useState("loading"),
        h = (0, o.e7)([d.default], () => d.default.isAuthenticated());
    i.useEffect(() => {
        f.default.track(_.rMx.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
    }, [t]);
    let m = i.useCallback(async () => {
        try {
            if (null == t) {
                s("error"),
                    f.default.track(_.rMx.ONE_TIME_LOGIN_ERROR, {
                        source: "web_modal",
                        error_reason: "missing_token",
                        error_message: "No token provided",
                    });
                return;
            }
            s("loading"),
                f.default.track(_.rMx.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                await l.Z.oneTimeLogin(t),
                s("success"),
                f.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                    source: "web_modal",
                    login_method: "one_time_login",
                });
        } catch (t) {
            s("error");
            let e = t instanceof Error ? t.message : "Login failed";
            f.default.track(_.rMx.ONE_TIME_LOGIN_ERROR, {
                source: "web_modal",
                error_reason: "api_error",
                error_message: e,
            });
        }
    }, [t]);
    i.useEffect(() => {
        if (h) return void s("success");
        m();
    }, [m, h]);
    let g = i.useCallback(() => {
        f.default.track(_.rMx.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: a }), null == n || n();
    }, [n, a]);
    switch (
        (i.useEffect(() => {
            "success" === a && (null == n || n(), (0, u.uL)(_.Z5c.ME));
        }, [a, n]),
        a)
    ) {
        case "loading":
        case "success":
            return {
                title: p.intl.string(p.t.W9uNdG),
                body: (0, r.jsx)(c.Hh, {}),
            };
        case "error":
            return {
                title: p.intl.string(p.t.RtCSr1),
                subtitle: p.intl.string(p.t["S+YjYJ"]),
                actions: [
                    {
                        onClick: g,
                        text: p.intl.string(p.t["ETE/oC"]),
                    },
                ],
            };
        default:
            return {};
    }
}
function y(e) {
    let { title: t, subtitle: n, body: i, actions: o } = b(e);
    return (0, r.jsxs)(
        a.IX,
        E(m({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: "sm",
            children: [
                (0, r.jsx)(a.xBx, {
                    title: null != t ? t : "",
                    subtitle: n,
                }),
                (0, r.jsx)(a.fef, { children: i }),
                (0, r.jsx)(a.Go$, {
                    actions: null != o ? o : [],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    );
}
function O(e) {
    (0, s.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(y, m({}, t, e))));
}
