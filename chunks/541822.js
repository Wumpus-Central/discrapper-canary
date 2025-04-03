n.d(t, { Z: () => s }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(557533),
    o = n.n(i),
    a = n(349361),
    u = n(806726);
function s(e) {
    var t,
        n,
        { children: i, gradientClassName: s } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['children', 'gradientClassName']);
    let d = l.useRef(null),
        [p, f] = l.useState(!0),
        b = () => {
            var e;
            (null == (e = d.current) ? void 0 : e.isScrolledToBottom()) === !0 ? f(!1) : f(!0);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                a.h2,
                ((t = (function (e) {
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
                })({ fade: !0 }, c)),
                (n = n =
                    {
                        ref: (e) => {
                            null != e && ((d.current = e), b());
                        },
                        onScroll: b,
                        children: i
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            ),
            (0, r.jsx)('div', {
                className: o()(u.containerScrollGradient, s),
                'data-shown': p
            })
        ]
    });
}
