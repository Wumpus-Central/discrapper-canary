v.d(g, { Q: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#be0351', '#ff2c52', '#f0f0f0'],
    r = ['#4282d8', '#47baff', '#f0f0f0'],
    C = [0.1, 0.25, 1],
    h = [
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
    n = [0.1, 0.25, 1],
    w = [
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
    Q = (A) => {
        var g,
            v,
            { width: Q = 24, height: D = 24, primaryTintColor: o, secondaryTintColor: s } = A,
            i = (function (A, g) {
                if (null == A) return {};
                var v,
                    B,
                    t = (function (A, g) {
                        if (null == A) return {};
                        var v,
                            B,
                            t = {},
                            e = Object.keys(A);
                        for (B = 0; B < e.length; B++) (v = e[B]), g.indexOf(v) >= 0 || (t[v] = A[v]);
                        return t;
                    })(A, g);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(A);
                    for (B = 0; B < e.length; B++) (v = e[B]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (t[v] = A[v]);
                }
                return t;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: M, secondaryColorsTransformed: a } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: o,
            primaryTintLuminances: C,
            primaryLuminanceWeights: h,
            secondaryBaseColors: r,
            secondaryTintColor: s,
            secondaryTintLuminances: n,
            secondaryLuminanceWeights: w
        });
        return (0, B.jsxs)(
            'svg',
            ((g = (function (A) {
                for (var g = 1; g < arguments.length; g++) {
                    var v = null != arguments[g] ? arguments[g] : {},
                        B = Object.keys(v);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (B = B.concat(
                            Object.getOwnPropertySymbols(v).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(v, A).enumerable;
                            })
                        )),
                        B.forEach(function (g) {
                            var B;
                            (B = v[g]),
                                g in A
                                    ? Object.defineProperty(A, g, {
                                          value: B,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[g] = B);
                        });
                }
                return A;
            })({}, (0, t.Z)(i))),
            (v = v =
                {
                    width: Q,
                    height: D,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 0v1h2V0H7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 1v1h2V1H7Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 6v1h2V6H7Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 4H5v1h1V4ZM7 3H6v1h1V3Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 9v1h2V9H7Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 10H6v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 4H7v1h1V4Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 5H9v1h1V5ZM11 4h-1v1h1V4Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 7h-1v2h1V7Z',
                            fill: '#707070'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z',
                            fill: '#707070'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 9h1V7H1v2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 9h1V7H6v2Z',
                            fill: '#707070'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 10V9H5v1h1ZM5 11v-1H4v1h1Z',
                            fill: '#707070'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z',
                            fill: '#000'
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                : (function (A, g) {
                      var v = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var B = Object.getOwnPropertySymbols(A);
                          v.push.apply(v, B);
                      }
                      return v;
                  })(Object(v)).forEach(function (A) {
                      Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                  }),
            g)
        );
    };
