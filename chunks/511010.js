a.d(e, { Z: () => p });
var c = a(200651),
    d = a(192379),
    s = a(120356),
    n = a.n(s),
    f = a(661824),
    i = a(30804);
let o = d.forwardRef(function (t, e) {
        var a,
            d,
            { className: s, isBeforeGroup: o = !1 } = t,
            p = (function (t, e) {
                if (null == t) return {};
                var a,
                    c,
                    d = (function (t, e) {
                        if (null == t) return {};
                        var a,
                            c,
                            d = {},
                            s = Object.keys(t);
                        for (c = 0; c < s.length; c++) (a = s[c]), e.indexOf(a) >= 0 || (d[a] = t[a]);
                        return d;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (c = 0; c < s.length; c++) (a = s[c]), !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (d[a] = t[a]);
                }
                return d;
            })(t, ['className', 'isBeforeGroup']);
        let { children: r } = p;
        return (0, c.jsx)(
            f.Z,
            ((a = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        c = Object.keys(a);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (c = c.concat(
                            Object.getOwnPropertySymbols(a).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(a, t).enumerable;
                            })
                        )),
                        c.forEach(function (e) {
                            var c;
                            (c = a[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: c,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (t[e] = c);
                        });
                }
                return t;
            })({}, p)),
            (d = d =
                {
                    ref: e,
                    role: 'separator',
                    'aria-label': 'string' == typeof r ? r : void 0,
                    className: n()(s, {
                        [i.divider]: !0,
                        [i.hasContent]: null != r,
                        [i.beforeGroup]: o
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(d))
                : (function (t, e) {
                      var a = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var c = Object.getOwnPropertySymbols(t);
                          a.push.apply(a, c);
                      }
                      return a;
                  })(Object(d)).forEach(function (t) {
                      Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(d, t));
                  }),
            a)
        );
    }),
    p = d.memo(o);
