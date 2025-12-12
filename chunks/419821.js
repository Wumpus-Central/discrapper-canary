n.d(t, { u: () => y });
var r = n(54381),
    i = n(473749),
    o = n(512722),
    a = n.n(o),
    s = n(399606),
    l = n(481060),
    c = n(594174),
    u = n(933970),
    d = n(340453),
    f = n(292352),
    p = n(435757),
    _ = n(388032),
    m = n(823074);
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
                h(e, t, n[t]);
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
        o = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        h = i.useCallback(() => {
            a()(void 0 !== o, "User must be logged in to accept a link request"),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("50872").then(n.bind(n, 442673));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                currentUser: o,
                                otherUser: t,
                            }),
                        );
                });
        }, [o, t]);
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)("div", {
                className: m.details,
                children: (0, r.jsx)(d.Z, {
                    otherUser: t,
                    status: f.ne.ACTIVE,
                }),
            }),
            (0, r.jsx)("div", {
                className: m.actions,
                children: (0, r.jsx)(u.Z, {
                    icon: l.Dio,
                    tooltip: _.intl.string(p.default.l20ZZp),
                    onClick: h,
                }),
            }),
        ],
    });
}
