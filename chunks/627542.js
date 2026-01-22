n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(46713);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = (e) => {
    let { template: t, overrides: n } = e,
        o = (0, a.q)({ overrides: n }),
        l = i.useCallback(
            (e) => {
                let t = (e) => {
                    if ("string" == typeof e) return e;
                    let { block: n } = e,
                        i = u(e, ["block"]),
                        a = o[n];
                    if (null == a) return null;
                    let l = (() => {
                        if ("children" in e) {
                            if (!Array.isArray(e.children) && null != e.children) return t(e.children);
                            if (null != e.children && e.children.length > 0) return e.children.map((e) => t(e));
                        }
                        return null;
                    })();
                    return (0, r.jsx)(a, c(s({}, i), { children: l }), Date.now());
                };
                return t(e);
            },
            [o],
        ),
        d = i.useMemo(() => t.children.map(l), [t, l]);
    return (0, r.jsx)("div", { children: d });
};
