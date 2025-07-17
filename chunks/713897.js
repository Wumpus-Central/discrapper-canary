g.d(t, { S: () => l });
var v = g(255367);
g(73800);
var e = g(331595),
    r = g(84502);
let f = ['#ff1c90', '#ff7fc0', '#ffa5d3', '#f0f0f0'],
    B = ['#816bee', '#b79cf8', '#cdbafa', '#f0f0f0'],
    h = [0.1, 0.3, 0.5, 0.9],
    n = [
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
    C = [0.1, 0.3, 0.5, 0.9],
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
    l = (A) => {
        var t,
            g,
            { width: l = 24, height: Q = 24, primaryTintColor: i, secondaryTintColor: H } = A,
            o = (function (A, t) {
                if (null == A) return {};
                var g,
                    v,
                    e = (function (A, t) {
                        if (null == A) return {};
                        var g,
                            v,
                            e = {},
                            r = Object.keys(A);
                        for (v = 0; v < r.length; v++) ((g = r[v]), t.indexOf(g) >= 0 || (e[g] = A[g]));
                        return e;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(A);
                    for (v = 0; v < r.length; v++) ((g = r[v]), !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g]));
                }
                return e;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, r.s)({
            primaryBaseColors: f,
            primaryTintColor: i,
            primaryTintLuminances: h,
            primaryLuminanceWeights: n,
            secondaryBaseColors: B,
            secondaryTintColor: H,
            secondaryTintLuminances: C,
            secondaryLuminanceWeights: w
        });
        return (0, v.jsxs)(
            'svg',
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var g = null != arguments[t] ? arguments[t] : {},
                        v = Object.keys(g);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (v = v.concat(
                            Object.getOwnPropertySymbols(g).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(g, A).enumerable;
                            })
                        )),
                        v.forEach(function (t) {
                            var v;
                            ((v = g[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: v,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[t] = v));
                        }));
                }
                return A;
            })({}, (0, e.Z)(o))),
            (g = g =
                {
                    width: l,
                    height: Q,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z',
                            fill: a[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z',
                            fill: s[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z',
                            fill: s[3]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 12H4v1h1v-1Z',
                            fill: s[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z',
                            fill: s[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z',
                            fill: a[3]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z',
                            fill: s[3]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 12v-2H1v2h1Z',
                            fill: s[3]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: a[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 3H5v3h1V3Z',
                            fill: s[3]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                            fill: a[0]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
                : (function (A, t) {
                      var g = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var v = Object.getOwnPropertySymbols(A);
                          g.push.apply(g, v);
                      }
                      return g;
                  })(Object(g)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(g, A));
                  }),
            t)
        );
    };
