n.d(t, { Y: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(893776),
    c = n(388905),
    u = n(703656),
    d = n(314897),
    f = n(981631),
    _ = n(388032);
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
function g(e, t) {
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
function E(e) {
    let { token: t, onClose: n } = e,
        [a, s] = i.useState("loading"),
        p = (0, o.e7)([d.default], () => d.default.isAuthenticated()),
        h = i.useCallback(async () => {
            try {
                if (null == t) return void s("error");
                s("loading"), await l.Z.oneTimeLogin(t), s("success");
            } catch (e) {
                s("error");
            }
        }, [t]);
    i.useEffect(() => {
        if (p) return void s("success");
        h();
    }, [h, p]);
    let m = i.useCallback(() => {
        null == n || n();
    }, [n]);
    switch (
        (i.useEffect(() => {
            "success" === a && (null == n || n(), (0, u.uL)(f.Z5c.ME));
        }, [a, n]),
        a)
    ) {
        case "loading":
        case "success":
            return {
                title: _.intl.string(_.t.W9uNdG),
                body: (0, r.jsx)(c.Hh, {}),
            };
        case "error":
            return {
                title: _.intl.string(_.t.RtCSr1),
                subtitle: _.intl.string(_.t["S+YjYJ"]),
                actions: [
                    {
                        onClick: m,
                        text: _.intl.string(_.t["ETE/oC"]),
                    },
                ],
            };
        default:
            return {};
    }
}
function b(e) {
    let { title: t, subtitle: n, body: i, actions: o } = E(e);
    return (0, r.jsxs)(
        a.IX,
        g(h({}, e), {
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
function y(e) {
    (0, s.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(b, h({}, t, e))));
}
