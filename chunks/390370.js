n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(854627),
    s = n(837921),
    o = n(834981),
    l = n(475833),
    c = n(694164);

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
let _ = s.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF;

function h(e) {
    let { otherUser: t, status: n } = e,
        s = (0, o.XC)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: f,
            eventHandlers: h,
        } = (0, a.A)({
            userId: t.id,
            size: i._3J.SIZE_40,
            animateOnHover: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                "div",
                p(d({}, h), {
                    children: (0, r.jsx)(_, {
                        className: c.my,
                        src: u,
                        avatarDecoration: f,
                        size: i._3J.SIZE_40,
                        "aria-label": t.username,
                    }),
                }),
            ),
            (0, r.jsxs)("div", {
                className: c.yt,
                children: [
                    (0, r.jsx)("div", {
                        className: c.Vx,
                        children: (0, r.jsx)(l.A, {
                            user: t,
                        }),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-xs/normal",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
