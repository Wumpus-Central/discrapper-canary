n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(73392),
    c = n(291594),
    u = n(959);
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
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { user: t, text: n, channel: a, textClassName: d, onPopoutClosed: p, enableDisplayNameStyles: h = !1 } = e,
        m = i.useMemo(() => [t], [t]),
        g = i.useRef(null),
        E = (0, l.a)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles });
    return (0, r.jsx)(u.A, {
        targetElementRef: g,
        participants: m,
        channel: a,
        onPopoutClosed: p,
        children: (e) =>
            (0, r.jsx)(
                c.A,
                _(f({}, e), {
                    tag: "span",
                    children: (0, r.jsx)(o.EYj, {
                        ref: g,
                        className: h ? s()(d, E) : d,
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        scaleFontToUserSetting: !0,
                        children: n,
                    }),
                }),
            ),
    });
}
