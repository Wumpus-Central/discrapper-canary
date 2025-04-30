v.d(g, { G: () => h });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#ba3500', '#fd6214', '#f0f0f0'],
    r = [0.1, 0.3, 1],
    C = [
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
                            d: 'M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            opacity: '.5',
                            d: 'M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 1v3h1V1h-1Z',
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
