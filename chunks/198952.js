n.d(t, {
    Z: () => h,
    r: () => m,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(518950),
    o = n(998502),
    s = n(225753),
    l = n(388032),
    c = n(574999);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = o.ZP.getEnableHardwareAcceleration() ? i.Xo$ : i.qEK,
    m = (e) => {
        let { user: t, avatarSize: n = i.EFr.SIZE_48 } = e,
            {
                avatarSrc: o,
                avatarDecorationSrc: c,
                eventHandlers: u,
            } = (0, a.Z)({
                userId: null == t ? void 0 : t.id,
                size: n,
            });
        return (0, r.jsx)(
            "div",
            p(d({}, u), {
                children: (0, r.jsx)(_, {
                    src: o,
                    avatarDecoration: c,
                    size: n,
                    "aria-label": l.intl.formatToPlainString(s.default.kFj4h1, { name: t.username }),
                }),
            }),
        );
    },
    h = (e) => {
        let { currentUser: t, otherUser: n, children: i } = e;
        return (0, r.jsx)("div", {
            className: c.avatarPairContainer,
            children: (0, r.jsxs)("div", {
                className: c.avatarPair,
                children: [(0, r.jsx)(m, { user: t }), i, (0, r.jsx)(m, { user: n })],
            }),
        });
    };
