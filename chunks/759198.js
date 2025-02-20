n.d(e, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(511281);
function u(t) {
    var { className: e, color: n } = t,
        r = (function (t, e) {
            if (null == t) return {};
            var n,
                i,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(t);
                    for (i = 0; i < a.length; i++) (n = a[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (i = 0; i < a.length; i++) (n = a[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            }
            return r;
        })(t, ['className', 'color']);
    return (0, i.jsx)(
        l.Text,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    i.forEach(function (e) {
                        var i;
                        (i = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = i);
                    });
            }
            return t;
        })(
            {
                className: a()({ [o.text]: null == n }, e),
                color: n
            },
            r
        )
    );
}
