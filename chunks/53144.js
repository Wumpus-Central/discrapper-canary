n.d(t, { Y: () => g }), n(388685), n(415506), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(481060),
    s = n(388905),
    l = n(703656),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { token: t, onClose: n } = e,
        [a, d] = i.useState("loading"),
        [f, _] = i.useState(null),
        p = i.useCallback(async () => {
            try {
                if (null == t) {
                    d("error"), _("Invalid login link - missing token");
                    return;
                }
                d("loading"),
                    await new Promise((e, n) => {
                        setTimeout(() => {
                            "test-fail" === t ? n(Error("Invalid token")) : e(!0);
                        }, 2000);
                    }),
                    d("success"),
                    setTimeout(() => {
                        null == n || n(), (0, l.uL)(c.Z5c.ME);
                    }, 1500);
            } catch (e) {
                d("error"), _(e instanceof Error ? e.message : "Login failed");
            }
        }, [t, n]);
    i.useEffect(() => {
        p();
    }, [p]);
    let h = i.useCallback(() => {
            p();
        }, [p]),
        m = i.useCallback(() => {
            null == n || n();
        }, [n]),
        g = [];
    switch (a) {
        case "loading":
            return {
                title: "Logging you in...",
                subtitle: "Please wait while we process your one-time login.",
                body: (0, r.jsx)(s.Hh, {}),
            };
        case "success":
            return {
                title: "Login Successful!",
                subtitle: "Welcome back! Taking you to Discord...",
                body: (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: "\u2713 Successfully logged in with your one-time link",
                }),
            };
        case "error":
            return (
                g.push(
                    {
                        variant: "secondary",
                        onClick: m,
                        text: u.intl.string(u.t["ETE/oK"]),
                    },
                    {
                        onClick: h,
                        text: "Try Again",
                    },
                ),
                {
                    title: "Login Failed",
                    subtitle: null != f ? f : "Something went wrong. Please try again.",
                    body: (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-danger",
                        children:
                            null != f
                                ? f
                                : "Unable to log you in with this link. It may have expired or been used already.",
                    }),
                    actions: g,
                }
            );
        default:
            return {};
    }
}
function m(e) {
    let { title: t, subtitle: n, body: i, actions: o } = h(e);
    return (0, r.jsxs)(
        a.IX,
        p(f({}, e), {
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
function g(e) {
    (0, o.ZDy)(() =>
        Promise.resolve((t) =>
            (0, r.jsx)(
                m,
                p(f({}, t, e), {
                    onClose: () => {
                        var n;
                        null == (n = e.onClose) || n.call(e), t.onClose();
                    },
                }),
            ),
        ),
    );
}
