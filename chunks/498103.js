g.d(t, { T: () => l });
var v = g(255367);
g(73800);
var e = g(331595),
    r = g(84502);
let f = ['#be0351', '#ff2c52'],
    B = ['#ffb84b', '#ffe361'],
    h = [0.12, 0.25],
    n = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    C = [0.4, 0.8],
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
                            d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                            fill: a[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z',
                            fill: s[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 0H4v1h8V0Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 7V3H1v6h2V7H2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 3h-1v6h1V3Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            opacity: '.5',
                            d: 'M15 6h-1v2h1V6Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 10H5v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z',
                            fill: a[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 12H4v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 9H2v1h2V9ZM14 9h-2v1h2V9Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M8 6H6v2h2V6Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            opacity: '.5',
                            d: 'M8 7H6v1h2V7Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 8H6v1h4V8Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 9H6v1h4V9Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 2H1v1h1V2Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 3H4v1h1V3Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z',
                            fill: '#000'
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
