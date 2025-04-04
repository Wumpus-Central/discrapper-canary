n.d(t, { X: () => p });
var r = n(200651),
    i = n(192379),
    o = n(803997),
    a = n.n(o),
    s = n(793030),
    l = n(200269),
    c = n(954338);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = i.forwardRef(function (e, t) {
    var { variant: n, className: i } = e,
        o = f(e, ['variant', 'className']);
    let u = (0, l.x)(),
        _ = 'h'.concat(Math.min(u, 6));
    return (0, r.jsx)(
        s.xv,
        d(
            {
                ref: t,
                variant: n,
                tag: _,
                className: a()(c.defaultColor, i)
            },
            u > 6 ? { 'data-excessive-heading-level': u } : {},
            o
        )
    );
});
