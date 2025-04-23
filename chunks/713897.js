v.d(g, { S: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#ff1c90', '#ff7fc0', '#ffa5d3', '#f0f0f0'],
    r = ['#816bee', '#b79cf8', '#cdbafa', '#f0f0f0'],
    C = [0.1, 0.3, 0.5, 0.9],
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
            base: 3,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    n = [0.1, 0.3, 0.5, 0.9],
    w = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 4,
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
                            d: 'M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 12H4v1h1v-1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z',
                            fill: a[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 12v-2H1v2h1Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 3H5v3h1V3Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                            fill: a[0]
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
