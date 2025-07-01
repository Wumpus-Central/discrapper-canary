(n.d(t, {
    Z: () => g,
    f: () => m
}),
    n(781311));
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(111028),
    o = n(652853),
    s = n(228168),
    l = n(227832);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function h(e) {
    var { text: t, onClick: n, component: c } = e,
        d = _(e, ['text', 'onClick', 'component']);
    let { themeType: p } = (0, o.z)(),
        h = 'string' == typeof t ? t.trim() : t;
    if (null == h || '' === h) return null;
    let m = () => (p === s.lY.MODAL || p === s.lY.MODAL_V2 ? (0, r.jsx)(c, f(u({ color: 'text-default' }, d), { children: h })) : (0, r.jsx)(c, f(u({ color: 'text-default' }, d), { children: (0, r.jsx)(a.Z, { children: h }) })));
    return null != n
        ? (0, r.jsx)(i.P3F, {
              onClick: (e) => {
                  (e.stopPropagation(), n(e));
              },
              className: l.clickableText,
              children: m()
          })
        : m();
}
function m(e) {
    return (0, r.jsx)(h, u({ component: i.X6q }, e));
}
function g(e) {
    return (0, r.jsx)(h, u({ component: i.Text }, e));
}
