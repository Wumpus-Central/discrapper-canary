n.r(t), n.d(t, { Anchor: () => g }), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(427398),
    l = n(793030),
    c = n(335854),
    u = n(656550);
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var {
            href: t,
            onClick: n,
            className: a,
            children: d,
            rel: p,
            target: h,
            useDefaultUnderlineStyles: g = !0,
            title: E,
            style: b,
            focusProps: y,
            ref: O,
        } = e,
        v = m(e, [
            "href",
            "onClick",
            "className",
            "children",
            "rel",
            "target",
            "useDefaultUnderlineStyles",
            "title",
            "style",
            "focusProps",
            "ref",
        ]);
    null != t && null == n && (n = c.X.getDefaultLinkInterceptor(t));
    let S = i.useContext(l.g$b),
        I = {
            className: o()(u.anchor, { [u.anchorUnderlineOnHover]: g }, a),
            href: t,
            onClick: n,
            rel: null != p ? p : void 0,
            target: null != h ? h : void 0,
            title: null != E ? E : void 0,
            style: null != b ? b : void 0,
        };
    return (null == t || (0, s.B)(t) || ((I.rel = "noreferrer noopener"), (I.target = "_blank")),
    S && delete I.href,
    null != n)
        ? (0, r.jsx)(
              l.P3F,
              _(f({ tag: "a" }, v, I), {
                  onClick: n,
                  focusProps: y,
                  innerRef: O,
                  children: d,
              }),
          )
        : (0, r.jsx)(
              l.tEY,
              _(f({}, y), {
                  children: (0, r.jsx)(
                      "a",
                      _(f({}, v, I), {
                          ref: O,
                          children: d,
                      }),
                  ),
              }),
          );
}
