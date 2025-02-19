t.d(n, { Z: () => d });
var a = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    o = t(481060),
    l = t(511281);
function d(e) {
    var { className: n, color: t } = e,
        r = (function (e, n) {
            if (null == e) return {};
            var t,
                a,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) (t = i[a]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['className', 'color']);
    return (0, a.jsx)(
        o.Text,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    a = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    a.forEach(function (n) {
                        var a;
                        (a = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = a);
                    });
            }
            return e;
        })(
            {
                className: i()({ [l.text]: null == t }, n),
                color: t
            },
            r
        )
    );
}
