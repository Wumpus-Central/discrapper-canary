n.d(t, {
    A: () => m,
    H: () => h,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(854627),
    s = n(837921),
    o = n(842130),
    l = n(985018),
    c = n(241938);

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
let _ = s.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF,
    h = (e) => {
        let { user: t, avatarSize: n = i._3J.SIZE_48 } = e,
            {
                avatarSrc: s,
                avatarDecorationSrc: c,
                eventHandlers: u,
            } = (0, a.A)({
                userId: null == t ? void 0 : t.id,
                size: n,
            });
        return (0, r.jsx)(
            "div",
            p(d({}, u), {
                children: (0, r.jsx)(_, {
                    src: s,
                    avatarDecoration: c,
                    size: n,
                    "aria-label": l.intl.formatToPlainString(o.default.kFj4h1, {
                        name: t.username,
                    }),
                }),
            }),
        );
    },
    m = (e) => {
        let { currentUser: t, otherUser: n, children: i } = e;
        return (0, r.jsx)("div", {
            className: c.b,
            children: (0, r.jsxs)("div", {
                className: c.M,
                children: [
                    (0, r.jsx)(h, {
                        user: t,
                    }),
                    i,
                    (0, r.jsx)(h, {
                        user: n,
                    }),
                ],
            }),
        });
    };
