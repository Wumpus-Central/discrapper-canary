t.d(e, { Q: () => f });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#be0351', '#ff2c52', '#f0f0f0'],
    s = ['#4282d8', '#47baff', '#f0f0f0'],
    a = [0.1, 0.25, 1],
    o = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    g = [0.1, 0.25, 1],
    v = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    f = (A) => {
        var e,
            t,
            { width: f = 24, height: c = 24, primaryTintColor: h, secondaryTintColor: u } = A,
            E = (function (A, e) {
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
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: d, secondaryColorsTransformed: C } = (0, l.s)({
            primaryBaseColors: i,
            primaryTintColor: h,
            primaryTintLuminances: a,
            primaryLuminanceWeights: o,
            secondaryBaseColors: s,
            secondaryTintColor: u,
            secondaryTintLuminances: g,
            secondaryLuminanceWeights: v
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
            })({}, (0, r.Z)(E))),
            (t = t =
                {
                    width: f,
                    height: c,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z',
                            fill: C[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 0v1h2V0H7Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1v1h2V1H7Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 6v1h2V6H7Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 4H5v1h1V4ZM7 3H6v1h1V3Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 9v1h2V9H7Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 10H6v1h1v-1Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 4H7v1h1V4Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 5H9v1h1V5ZM11 4h-1v1h1V4Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 7h-1v2h1V7Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 9h1V7H1v2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 9h1V7H6v2Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 10V9H5v1h1ZM5 11v-1H4v1h1Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z',
                            fill: '#000'
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
