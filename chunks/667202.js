n.d(t, { I: () => p });
var r = n(255367);
n(73800);
var i = n(257465),
    a = n(369585),
    o = n(530392),
    s = n(37148);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    var { size: t = 'md', gradientColor: n = 'purple', image: l, title: u, headerBody: _, actionBarLeading: p, actions: h, children: m } = e,
        g = f(e, ['size', 'gradientColor', 'image', 'title', 'headerBody', 'actionBarLeading', 'actions', 'children']);
    return (0, r.jsxs)(
        i.IX,
        d(c({}, g), {
            size: t,
            paddingSize: 'lg',
            children: [
                (0, r.jsx)(s.x, {
                    gradientColor: n,
                    image: l,
                    title: u,
                    titleTextVariant: 'heading-xl/semibold',
                    body: _,
                    alignCenter: !0
                }),
                (0, r.jsx)(o.h, { children: m }),
                (0, r.jsx)(a.G, {
                    leading: p,
                    actions: h,
                    actionsFullWidth: null == p
                })
            ]
        })
    );
}
