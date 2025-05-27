g.d(v, { A: () => n });
var B = g(255367);
g(73800);
var t = g(331595),
    f = g(84502);
let C = ['#816bee', '#b79cf8', '#f0f0f0'],
    e = ['#6c9ca6', '#9af4dc', '#f0f0f0'],
    r = [0.07, 0.35, 1],
    Q = [
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
    w = [0.2, 0.75, 1],
    h = [
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
    n = (A) => {
        var v,
            g,
            { width: n = 24, height: D = 24, primaryTintColor: o, secondaryTintColor: M } = A,
            E = (function (A, v) {
                if (null == A) return {};
                var g,
                    B,
                    t = (function (A, v) {
                        if (null == A) return {};
                        var g,
                            B,
                            t = {},
                            f = Object.keys(A);
                        for (B = 0; B < f.length; B++) (g = f[B]), v.indexOf(g) >= 0 || (t[g] = A[g]);
                        return t;
                    })(A, v);
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(A);
                    for (B = 0; B < f.length; B++) (g = f[B]), !(v.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (t[g] = A[g]);
                }
                return t;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: s, secondaryColorsTransformed: i } = (0, f.s)({
            primaryBaseColors: C,
            primaryTintColor: o,
            primaryTintLuminances: r,
            primaryLuminanceWeights: Q,
            secondaryBaseColors: e,
            secondaryTintColor: M,
            secondaryTintLuminances: w,
            secondaryLuminanceWeights: h
        });
        return (0, B.jsxs)(
            'svg',
            ((v = (function (A) {
                for (var v = 1; v < arguments.length; v++) {
                    var g = null != arguments[v] ? arguments[v] : {},
                        B = Object.keys(g);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (B = B.concat(
                            Object.getOwnPropertySymbols(g).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(g, A).enumerable;
                            })
                        )),
                        B.forEach(function (v) {
                            var B;
                            (B = g[v]),
                                v in A
                                    ? Object.defineProperty(A, v, {
                                          value: B,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[v] = B);
                        });
                }
                return A;
            })({}, (0, t.Z)(E))),
            (g = g =
                {
                    width: n,
                    height: D,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z',
                            fill: s[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z',
                            fill: i[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 10v4h1v1h3v-1h1v-4H4Z',
                            fill: i[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z',
                            fill: i[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z',
                            fill: i[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 5H8v1h1V5Z',
                            fill: s[0]
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
                            fill: s[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 2H7v1h1V2ZM12 1H8v1h4V1Z',
                            fill: s[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 5H9v1h5V5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 4V3h-1v1H9v1h5v1h1V4h-1Z',
                            fill: s[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 11H4v1h1v-1Z',
                            fill: i[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 6v1H3v1h5V6H7Z',
                            fill: s[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 7v1H3v1h5V7H7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 8H2v1h1V8ZM2 9H1v1h1V9Z',
                            fill: s[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z',
                            fill: i[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z',
                            fill: i[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z',
                            fill: i[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 9H3v1h5V9Z',
                            fill: i[2]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(g))
                : (function (A, v) {
                      var g = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var B = Object.getOwnPropertySymbols(A);
                          g.push.apply(g, B);
                      }
                      return g;
                  })(Object(g)).forEach(function (A) {
                      Object.defineProperty(v, A, Object.getOwnPropertyDescriptor(g, A));
                  }),
            v)
        );
    };
