n.d(t, { I: () => p });
var r = n(54381);
n(473749);
var i = n(987153),
    a = n(144771),
    o = n(166935),
    s = n(575118);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var {
            size: t = "md",
            gradientColor: n = "purple",
            graphic: l,
            badge: u,
            title: _,
            subtitle: p,
            actionBarInput: h,
            actions: m,
            children: g,
        } = e,
        E = f(e, [
            "size",
            "gradientColor",
            "graphic",
            "badge",
            "title",
            "subtitle",
            "actionBarInput",
            "actions",
            "children",
        ]);
    return (0, r.jsxs)(
        i.I,
        d(c({}, E), {
            size: t,
            paddingSize: "lg",
            children: [
                (0, r.jsx)(s.x, {
                    gradientColor: n,
                    graphic: l,
                    badge: u,
                    title: _,
                    titleTextVariant: "heading-xl/semibold",
                    subtitle: p,
                    alignCenter: !0,
                }),
                (0, r.jsx)(o.f, { children: g }),
                (0, r.jsx)(a.G, {
                    leading: h,
                    actions: m,
                    actionsFullWidth: null == h,
                }),
            ],
        }),
    );
}
