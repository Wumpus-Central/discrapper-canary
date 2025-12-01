n.d(t, { C: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(821541),
    l = n(777207),
    c = n(963115),
    u = n(712542);
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
    var { children: t, label: n, description: a } = e,
        d = m(e, ["children", "label", "description"]);
    let { spacing: p } = i.useContext(c.q),
        h = i.useId(),
        g = null != a && "" !== a;
    return (0, r.jsxs)(
        "fieldset",
        _(f({}, d), {
            className: o()(u.fieldset, d.className),
            "aria-describedby": g ? h : void 0,
            children: [
                null != n
                    ? (0, r.jsx)(l.x, {
                          tag: "legend",
                          variant: "text-lg/medium",
                          color: "header-primary",
                          className: u.legend,
                          children: n,
                      })
                    : null,
                g
                    ? (0, r.jsx)(l.x, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: u.description,
                          id: h,
                          children: a,
                      })
                    : null,
                (0, r.jsx)(s.K, {
                    direction: "vertical",
                    gap: p,
                    children: t,
                }),
            ],
        }),
    );
}
