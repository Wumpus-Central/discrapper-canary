r.d(t, { Z: () => u });
var n = r(200651),
    s = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(661824),
    o = r(30804);
let c = s.forwardRef(function (e, t) {
        var r,
            s,
            { className: a, isBeforeGroup: c = !1 } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                }
                return s;
            })(e, ['className', 'isBeforeGroup']);
        let { children: f } = u;
        return (0, n.jsx)(
            l.Z,
            ((r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, u)),
            (s = s =
                {
                    ref: t,
                    role: 'separator',
                    'aria-label': 'string' == typeof f ? f : void 0,
                    className: i()(a, {
                        [o.divider]: !0,
                        [o.hasContent]: null != f,
                        [o.beforeGroup]: c
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(s)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                  }),
            r)
        );
    }),
    u = s.memo(c);
