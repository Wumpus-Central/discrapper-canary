(n.d(t, {
    B: () => y,
    G: () => b
}),
    n(856094));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(178940),
    l = n(680018),
    c = n(374415),
    u = n(185033),
    d = n(388032),
    f = n(946598);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function b(e) {
    let { leading: t, actions: n = [], actionsFullWidth: i = !1 } = e;
    if (null == t && n.length < 1) return null;
    let o = ['primary', 'critical-primary', 'expressive'],
        s = n.findLastIndex((e) => null != e.variant && o.includes(e.variant));
    return (0, r.jsxs)('footer', {
        className: a()(f.actionBar, f.section),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: f.actionBarLeading,
                    children: t
                }),
            (0, r.jsx)('div', {
                className: a()(f.actionBarTrailing, { [f.actionBarTrailingFullWidth]: i }),
                children: (0, r.jsx)(c.h, {
                    fullWidth: i,
                    children:
                        null == n
                            ? void 0
                            : n.map((e, t) => {
                                  var n;
                                  return (0, r.jsx)(l.z, p({ autoFocus: null != (n = e.autoFocus) ? n : s === t }, e), t);
                              })
                })
            })
        ]
    });
}
function y(e) {
    var { text: t } = e,
        n = g(e, ['text']);
    return (0, r.jsx)(
        s.X,
        m(p({}, n), {
            children: (0, r.jsx)(o.xv, {
                variant: 'text-sm/normal',
                children: null != t ? t : d.intl.string(u.default.m3Vfcn)
            })
        })
    );
}
