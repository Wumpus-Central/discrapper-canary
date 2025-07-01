g.d(v, { h: () => Q });
var B = g(255367);
g(73800);
var t = g(331595),
    f = g(84502);
let C = ['#ff1b90', '#ff7fc0', '#f0f0f0'],
    e = [0.2, 0.52, 1],
    r = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
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
                            d: 'M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            opacity: '.6',
                            d: 'M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z',
                            fill: D[2]
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
