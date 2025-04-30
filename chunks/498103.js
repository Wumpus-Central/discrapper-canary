v.d(g, { T: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#be0351', '#ff2c52'],
    r = ['#ffb84b', '#ffe361'],
    C = [0.12, 0.25],
    h = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    n = [0.4, 0.8],
    w = [
        {
            base: 5,
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
                            d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 0H4v1h8V0Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 7V3H1v6h2V7H2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 3h-1v6h1V3Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            opacity: '.5',
                            d: 'M15 6h-1v2h1V6Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 10H5v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 12H4v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 9H2v1h2V9ZM14 9h-2v1h2V9Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 6H6v2h2V6Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            opacity: '.5',
                            d: 'M8 7H6v1h2V7Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 8H6v1h4V8Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 9H6v1h4V9Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 2H1v1h1V2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 3H4v1h1V3Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z',
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
