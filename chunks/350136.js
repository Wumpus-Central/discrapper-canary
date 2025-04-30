v.d(g, { A: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#816bee', '#b79cf8', '#f0f0f0'],
    r = ['#6c9ca6', '#9af4dc', '#f0f0f0'],
    C = [0.07, 0.35, 1],
    h = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    n = [0.2, 0.75, 1],
    w = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 6,
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
                            d: 'M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 10v4h1v1h3v-1h1v-4H4Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 5H8v1h1V5Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 2H7v1h1V2ZM12 1H8v1h4V1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 5H9v1h5V5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 4V3h-1v1H9v1h5v1h1V4h-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 11H4v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 6v1H3v1h5V6H7Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 7v1H3v1h5V7H7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 8H2v1h1V8ZM2 9H1v1h1V9Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 9H3v1h5V9Z',
                            fill: a[2]
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
