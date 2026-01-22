n.d(t, { N: () => b }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(830215),
    l = n(854378),
    c = n(976860),
    u = n(954571),
    d = n(652215),
    f = n(985018);
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { token: t, onClose: n } = e,
        [a, s] = i.useState("loading");
    i.useEffect(() => {
        u.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
    }, [t]);
    let p = i.useCallback(async () => {
        try {
            if (null == t) {
                s("error"),
                    u.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_modal",
                        error_reason: "missing_token",
                        error_message: "No token provided",
                    });
                return;
            }
            s("loading"),
                u.default.track(d.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                await o.A.oneTimeLogin(t),
                s("success"),
                u.default.track(d.HAw.LOGIN_SUCCESSFUL, {
                    source: "web_modal",
                    login_method: "one_time_login",
                });
        } catch (t) {
            s("error");
            let e = t instanceof Error ? t.message : "Login failed";
            u.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
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
        u.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: a }), null == n || n();
    }, [n, a]);
    switch (
        (i.useEffect(() => {
            "success" === a && (null == n || n(), (0, c.pX)(d.BVt.ME));
        }, [a, n]),
        a)
    ) {
        case "loading":
        case "success":
            return {
                title: f.intl.string(f.t.W9uNdG),
                body: (0, r.jsx)(l.CK, {}),
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
    let { title: t, subtitle: n, body: i, actions: s } = g(e);
    return (0, r.jsxs)(
        a.dWK,
        m(_({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: "sm",
            children: [
                (0, r.jsx)(a.rQ0, {
                    title: null != t ? t : "",
                    subtitle: n,
                }),
                (0, r.jsx)(a.cwr, { children: i }),
                (0, r.jsx)(a.H7u, {
                    actions: null != s ? s : [],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    );
}
function b(e) {
    (0, s.mMO)(() => Promise.resolve((t) => (0, r.jsx)(E, _({}, t, e))));
}
