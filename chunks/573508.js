v.d(g, { i: () => h });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#4a8359', '#7fb134', '#bcef42', '#f0f0f0'],
    r = [0.1, 0.2, 0.6, 0.9],
    C = [
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
    h = (A) => {
        var g,
            v,
            { width: h = 24, height: n = 24, primaryTintColor: w } = A,
            Q = (function (A, g) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: D } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: w,
            primaryTintLuminances: r,
            primaryLuminanceWeights: C
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
            })({}, (0, t.Z)(Q))),
            (v = v =
                {
                    width: h,
                    height: n,
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
