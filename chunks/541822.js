(n.d(e, { Z: () => s }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(349361),
    u = n(806726);
function s(t) {
    var e,
        n,
        { children: l, gradientClassName: s } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var n,
                i,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(t);
                    for (i = 0; i < l.length; i++) ((n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]));
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
            }
            return r;
        })(t, ['children', 'gradientClassName']);
    let d = r.useRef(null),
        [p, f] = r.useState(!0),
        S = () => {
            var t;
            (null == (t = d.current) ? void 0 : t.isScrolledToBottom()) === !0 ? f(!1) : f(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                a.h2,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                ((i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i));
                            }));
                    }
                    return t;
                })({ fade: !0 }, c)),
                (n = n =
                    {
                        ref: (t) => {
                            null != t && ((d.current = t), S());
                        },
                        onScroll: S,
                        children: l
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e)
            ),
            (0, i.jsx)('div', {
                className: o()(u.containerScrollGradient, s),
                'data-shown': p
            })
        ]
    });
}
