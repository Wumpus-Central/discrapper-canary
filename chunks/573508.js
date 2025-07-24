t.d(e, { i: () => o });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#4a8359', '#7fb134', '#bcef42', '#f0f0f0'],
    s = [0.1, 0.2, 0.6, 0.9],
    a = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 10,
            tint: 1
        }
    ],
    o = (A) => {
        var e,
            t,
            { width: o = 24, height: g = 24, primaryTintColor: f } = A,
            v = (function (A, e) {
                if (null == A) return {};
                var t,
                    n,
                    r = (function (A, e) {
                        if (null == A) return {};
                        var t,
                            n,
                            r = {},
                            l = Object.keys(A);
                        for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                        return r;
                    })(A, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
                }
                return r;
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: c } = (0, l.s)({
            primaryBaseColors: i,
            primaryTintColor: f,
            primaryTintLuminances: s,
            primaryLuminanceWeights: a
        });
        return (0, n.jsxs)(
            'svg',
            ((e = (function (A) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(t, A).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n;
                            ((n = t[e]),
                                e in A
                                    ? Object.defineProperty(A, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[e] = n));
                        }));
                }
                return A;
            })({}, (0, r.Z)(v))),
            (t = t =
                {
                    width: o,
                    height: g,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M15 2V1H9v1H3v5H1v5h12V7h2V2Z',
                            fill: c[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 13v-1H5v1h6Z',
                            fill: c[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 2V1H9v1h6ZM9 3V2H5v1h4Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z',
                            fill: c[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 1h-1v6h1V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 9H2v6h1V9Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 8v1h1V8H3Z',
                            fill: c[0]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (A, e) {
                      var t = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(A);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (A) {
                      Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
                  }),
            e)
        );
    };
