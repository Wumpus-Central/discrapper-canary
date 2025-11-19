n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(518950),
    o = n(998502),
    s = n(631885),
    l = n(329242),
    c = n(390493);
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
function _(e, t) {
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
let p = o.ZP.getEnableHardwareAcceleration() ? i.Xo$ : i.qEK;
function h(e) {
    let { otherUser: t, status: n } = e,
        o = (0, s.j_)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: f,
            eventHandlers: h,
        } = (0, a.Z)({
            userId: t.id,
            size: i.EFr.SIZE_40,
            animateOnHover: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                "div",
                _(d({}, h), {
                    children: (0, r.jsx)(p, {
                        className: c.avatar,
                        src: u,
                        avatarDecoration: f,
                        size: i.EFr.SIZE_40,
                        "aria-label": t.username,
                    }),
                }),
            ),
            (0, r.jsxs)("div", {
                className: c.userPreview,
                children: [
                    (0, r.jsx)("div", {
                        className: c.userContainerWithTimestamp,
                        children: (0, r.jsx)(l.Z, { user: t }),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-xs/normal",
                        children: o,
                    }),
                ],
            }),
        ],
    });
}
