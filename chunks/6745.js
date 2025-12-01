n.d(t, { D: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(507274),
    l = n(838331),
    c = n(938922);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var {
            children: t,
            placeholder: n,
            value: a,
            onChange: u,
            onClose: f,
            className: m,
            multiSelect: h,
            emptyStateText: g,
            emptyStateHeader: E,
            onQueryChange: b,
        } = e,
        y = _(e, [
            "children",
            "placeholder",
            "value",
            "onChange",
            "onClose",
            "className",
            "multiSelect",
            "emptyStateText",
            "emptyStateHeader",
            "onQueryChange",
        ]);
    let O = i.useCallback(
        (e) => {
            u(e), h || null == f || f();
        },
        [u, f, h],
    );
    return (0, r.jsx)(s.V, {
        className: o()(c.container, c.scroller, m),
        children: (0, r.jsx)(
            l.hQ,
            p(d({}, y), {
                value: a,
                multiSelect: h,
                onChange: O,
                placeholder: n,
                children: t,
                listClassName: c.list,
                emptyStateText: g,
                emptyStateHeader: E,
                onQueryChange: b,
            }),
        ),
    });
}
