n.d(e, { default: () => s });
var l = n(255367),
    a = n(503817),
    r = n(211065),
    i = n(66630);
function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                ((l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = l));
            }));
    }
    return t;
}
function s(t) {
    var { location: e } = t,
        n = (function (t, e) {
            if (null == t) return {};
            var n,
                l,
                a = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        l,
                        a = {},
                        r = Object.keys(t);
                    for (l = 0; l < r.length; l++) ((n = r[l]), e.indexOf(n) >= 0 || (a[n] = t[n]));
                    return a;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (l = 0; l < r.length; l++) ((n = r[l]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
            }
            return a;
        })(t, ['location']);
    return (0, a.D)({ location: e }) ? (0, l.jsx)(i.Z, o({}, n)) : (0, l.jsx)(r.Z, o({}, n));
}
