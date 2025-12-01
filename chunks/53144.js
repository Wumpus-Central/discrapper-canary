n.d(t, { Y: () => b }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(893776),
    l = n(388905),
    c = n(703656),
    u = n(626135),
    d = n(981631),
    f = n(388032);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { token: t, onClose: n } = e,
        [a, o] = i.useState("loading");
    i.useEffect(() => {
        u.default.track(d.rMx.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
    }, [t]);
    let p = i.useCallback(async () => {
        try {
            if (null == t) {
                o("error"),
                    u.default.track(d.rMx.ONE_TIME_LOGIN_ERROR, {
                        source: "web_modal",
                        error_reason: "missing_token",
                        error_message: "No token provided",
                    });
                return;
            }
            o("loading"),
                u.default.track(d.rMx.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                await s.Z.oneTimeLogin(t),
                o("success"),
                u.default.track(d.rMx.LOGIN_SUCCESSFUL, {
                    source: "web_modal",
                    login_method: "one_time_login",
                });
        } catch (t) {
            o("error");
            let e = t instanceof Error ? t.message : "Login failed";
            u.default.track(d.rMx.ONE_TIME_LOGIN_ERROR, {
                source: "web_modal",
                error_reason: "api_error",
                error_message: e,
            });
        }
    }, [t]);
    i.useEffect(() => {
        p();
    }, [p]);
    let _ = i.useCallback(() => {
        u.default.track(d.rMx.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: a }), null == n || n();
    }, [n, a]);
    switch (
        (i.useEffect(() => {
            "success" === a && (null == n || n(), (0, c.uL)(d.Z5c.ME));
        }, [a, n]),
        a)
    ) {
        case "loading":
        case "success":
            return {
                title: f.intl.string(f.t.W9uNdG),
                body: (0, r.jsx)(l.Hh, {}),
            };
        case "error":
            return {
                title: f.intl.string(f.t.RtCSr1),
                subtitle: f.intl.string(f.t["S+YjYJ"]),
                actions: [
                    {
                        onClick: _,
                        text: f.intl.string(f.t["ETE/oC"]),
                    },
                ],
            };
        default:
            return {};
    }
}
function E(e) {
    let { title: t, subtitle: n, body: i, actions: o } = g(e);
    return (0, r.jsxs)(
        a.IX,
        h(_({}, e), {
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
function b(e) {
    (0, o.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(E, _({}, t, e))));
}
