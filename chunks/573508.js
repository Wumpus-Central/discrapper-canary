g.d(v, { i: () => Q });
var B = g(255367);
g(73800);
var t = g(331595),
    f = g(84502);
let C = ['#4a8359', '#7fb134', '#bcef42', '#f0f0f0'],
    e = [0.1, 0.2, 0.6, 0.9],
    r = [
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
    Q = (A) => {
        var v,
            g,
            { width: Q = 24, height: w = 24, primaryTintColor: h } = A,
            n = (function (A, v) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: D } = (0, f.s)({
            primaryBaseColors: C,
            primaryTintColor: h,
            primaryTintLuminances: e,
            primaryLuminanceWeights: r
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
            })({}, (0, t.Z)(n))),
            (g = g =
                {
                    width: Q,
                    height: w,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M15 2V1H9v1H3v5H1v5h12V7h2V2Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 13v-1H5v1h6Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 2V1H9v1h6ZM9 3V2H5v1h4Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M16 1h-1v6h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 9H2v6h1V9Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 8v1h1V8H3Z',
                            fill: D[0]
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
