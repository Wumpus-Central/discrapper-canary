n.d(e, { default: () => s });
var l = n(255367),
    r = n(503817),
    a = n(211065),
    i = n(66630);
function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function s(t) {
    var { location: e } = t,
        n = (function (t, e) {
            if (null == t) return {};
            var n,
                l,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.keys(t);
                    for (l = 0; l < a.length; l++) (n = a[l]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (l = 0; l < a.length; l++) (n = a[l]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            }
            return r;
        })(t, ['location']);
    return (0, r.D)({ location: e }) ? (0, l.jsx)(i.Z, o({}, n)) : (0, l.jsx)(a.Z, o({}, n));
}
