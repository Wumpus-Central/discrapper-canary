v.d(g, { L: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#7fb134', '#bcef42', '#f0f0f0'],
    r = ['#816bee', '#b79cf8'],
    C = [0.1, 0.6, 0.95],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    n = [0.1, 0.3],
    w = [
        {
            base: 8,
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
                            d: 'M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 1h-2v1h2V1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 13H1v1h2v-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 14H1v1h3v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 8h-1v2h1V8Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 1H6v1h6V1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 2H6v1h6V2Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 14H5v1h5v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 2h-1v1h1V2Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 3H5v1h1V3ZM13 3h-1v1h1V3Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 6H1v2h1V6Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z',
                            fill: a[1]
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
