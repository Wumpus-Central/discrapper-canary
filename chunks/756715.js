n.r(t), n.d(t, { Anchor: () => v }), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(532712),
    l = n(1561),
    c = n(84735),
    u = n(335854),
    d = n(645499),
    f = n(353836);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    var { href: t, onClick: n, className: o, children: p, rel: h, target: E, useDefaultUnderlineStyles: v = !0, title: b, style: y, focusProps: O } = e,
        S = g(e, ['href', 'onClick', 'className', 'children', 'rel', 'target', 'useDefaultUnderlineStyles', 'title', 'style', 'focusProps']);
    null != t && null == n && (n = u.X.getDefaultLinkInterceptor(t));
    let I = i.useContext(s.g),
        T = {
            className: a()(f.anchor, { [f.anchorUnderlineOnHover]: v }, o),
            href: t,
            onClick: n,
            rel: null != h ? h : void 0,
            target: null != E ? E : void 0,
            title: null != b ? b : void 0,
            style: null != y ? y : void 0
        };
    return (null == t || (0, d.B)(t) || ((T.rel = 'noreferrer noopener'), (T.target = '_blank')), I && delete T.href, null != n)
        ? (0, r.jsx)(
              l.P,
              m(_({ tag: 'a' }, S, T), {
                  onClick: n,
                  focusProps: O,
                  children: p
              })
          )
        : (0, r.jsx)(c.t, m(_({}, O), { children: (0, r.jsx)('a', m(_({}, S, T), { children: p })) }));
}
