g.d(v, { N: () => n });
var B = g(255367);
g(73800);
var t = g(331595),
    f = g(84502);
let C = ['#ff1c90', '#ff7fc0', '#f0f0f0'],
    e = ['#008456', '#6be473', '#f0f0f0'],
    r = [0.1, 0.45, 1],
    Q = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    w = [0.1, 0.35, 1],
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
                        for (B = 0; B < f.length; B++) ((g = f[B]), v.indexOf(g) >= 0 || (t[g] = A[g]));
                        return t;
                    })(A, v);
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(A);
                    for (B = 0; B < f.length; B++) ((g = f[B]), !(v.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (t[g] = A[g]));
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
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (B = B.concat(
                            Object.getOwnPropertySymbols(g).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(g, A).enumerable;
                            })
                        )),
                        B.forEach(function (v) {
                            var B;
                            ((B = g[v]),
                                v in A
                                    ? Object.defineProperty(A, v, {
                                          value: B,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[v] = B));
                        }));
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
                            d: 'M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z',
                            fill: s[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM5 0H2v1h3V0ZM14 0h-3v1h3V0ZM15 1h-1v1h1V1ZM16 2h-1v4h1V2ZM10 1H9v1h1v2h1V1h-1ZM5 1v3h1V2h1V1H5ZM2 1H1v1h1V1ZM1 2H0v4h1V2ZM2 6H1v1h1V6ZM4 7H2v1h2V7ZM14 7h-2v1h2V7ZM15 6h-1v1h1V6ZM12 9V8h-1v2h4V9h-3ZM4 8v1H1v1h4V8H4ZM1 10H0v4h1v-4ZM2 14H1v1h1v-1ZM14 15H2v1h12v-1ZM15 14h-1v1h1v-1ZM16 10h-1v4h1v-4ZM6 10H5v1h1v-1ZM7 11H6v1h1v-1ZM10 11H9v1h1v-1ZM11 10h-1v1h1v-1ZM9 12H7v1h2v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z',
                            fill: i[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z',
                            fill: i[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z',
                            fill: s[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z',
                            fill: i[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z',
                            fill: s[2]
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
