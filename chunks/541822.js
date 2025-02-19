t.d(r, { Z: () => c }), t(47120);
var n = t(200651),
    l = t(192379),
    s = t(557533),
    o = t.n(s),
    a = t(349361),
    i = t(169235);
function c(e) {
    var r,
        t,
        { children: s, gradientClassName: c } = e,
        d = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                l = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        l = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ['children', 'gradientClassName']);
    let u = l.useRef(null),
        [m, x] = l.useState(!0),
        f = () => {
            var e;
            (null === (e = u.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? x(!1) : x(!0);
        };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(
                a.h2,
                ((r = (function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            n.forEach(function (r) {
                                var n;
                                (n = t[r]),
                                    r in e
                                        ? Object.defineProperty(e, r, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[r] = n);
                            });
                    }
                    return e;
                })({ fade: !0 }, d)),
                (t = t =
                    {
                        ref: (e) => {
                            null != e && ((u.current = e), f());
                        },
                        onScroll: f,
                        children: s
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                    : (function (e, r) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, n);
                          }
                          return t;
                      })(Object(t)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                      }),
                r)
            ),
            (0, n.jsx)('div', {
                className: o()(i.containerScrollGradient, c),
                'data-shown': m
            })
        ]
    });
}
