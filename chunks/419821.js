n.d(t, { u: () => y });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(594174),
    u = n(933970),
    d = n(340453),
    f = n(292352),
    _ = n(597754),
    p = n(388032),
    h = n(823074);
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
function g(e) {
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
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { user: t } = e,
        a = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        m = i.useCallback(() => {
            o()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("50872").then(n.bind(n, 442673));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                currentUser: a,
                                otherUser: t,
                            }),
                        );
                });
        }, [a, t]);
    return (0, r.jsxs)("div", {
        className: h.container,
        children: [
            (0, r.jsx)("div", {
                className: h.details,
                children: (0, r.jsx)(d.Z, {
                    otherUser: t,
                    status: f.ne.ACTIVE,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.actions,
                children: (0, r.jsx)(u.Z, {
                    icon: l.Dio,
                    tooltip: p.intl.string(_.default.l20ZZp),
                    onClick: m,
                }),
            }),
        ],
    });
}
