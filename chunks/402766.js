n.d(t, { Z: () => c }), n(411104);
var r = n(200651);
n(192379);
var i = n(67523),
    s = n(865267),
    a = n(125664),
    l = n(981631);
function o(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e) {
    var { tier: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['tier']);
    switch (t) {
        case l.Eu4.TIER_1:
            return (0, r.jsx)(i.Z, o({}, n));
        case l.Eu4.TIER_2:
            return (0, r.jsx)(s.Z, o({}, n));
        case l.Eu4.TIER_3:
            return (0, r.jsx)(a.Z, o({}, n));
        case l.Eu4.NONE:
            return null;
        default:
            throw Error('Not a valid tier type');
    }
}
