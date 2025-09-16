n.r(t), n.d(t, { Anchor: () => E }), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(1561),
    c = n(335854),
    u = n(645499),
    d = n(656550);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var {
            href: t,
            onClick: n,
            className: a,
            children: f,
            rel: p,
            target: g,
            useDefaultUnderlineStyles: E = !0,
            title: b,
            style: y,
            focusProps: O,
            ref: v,
        } = e,
        I = m(e, [
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
    let T = i.useContext(s.g$b),
        S = {
            className: o()(d.anchor, { [d.anchorUnderlineOnHover]: E }, a),
            href: t,
            onClick: n,
            rel: null != p ? p : void 0,
            target: null != g ? g : void 0,
            title: null != b ? b : void 0,
            style: null != y ? y : void 0,
        };
    return (null == t || (0, u.B)(t) || ((S.rel = "noreferrer noopener"), (S.target = "_blank")),
    T && delete S.href,
    null != n)
        ? (0, r.jsx)(
              l.P,
              h(_({ tag: "a" }, I, S), {
                  onClick: n,
                  focusProps: O,
                  innerRef: v,
                  children: f,
              }),
          )
        : (0, r.jsx)(
              s.tEY,
              h(_({}, O), {
                  children: (0, r.jsx)(
                      "a",
                      h(_({}, I, S), {
                          ref: v,
                          children: f,
                      }),
                  ),
              }),
          );
}
