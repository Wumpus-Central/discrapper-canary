g.d(t, { w: () => l });
var v = g(255367);
g(73800);
var e = g(331595),
    r = g(84502);
let f = ['#35363a', '#57595f', '#d8d8d8'],
    B = ['#847d8b', '#d1cdd5', '#f0f0f0'],
    h = [0.05, 0.2, 0.95],
    n = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    C = [0.2, 0.5, 0.95],
    w = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 3,
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
                            d: 'M13 3V2h-2v1h-1V2H9V1H7v1H6v1H5V2H3v1H2v4h2v1h1V7h6v1h1V7h2V3h-1Z',
                            fill: a[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 9V8h-4V7H6v1H2v1H1v3h1v1h4v1h1v1h2v-1h1v-1h4v-1h1V9h-1Z',
                            fill: s[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1ZM10 1H9v1h1V1ZM13 1h-2v1h2V1ZM14 2h-1v1h1V2ZM11 2h-1v1h1V2ZM6 2H5v1h1V2ZM5 1H3v1h2V1ZM2 3H1v4h1V3ZM3 2H2v1h1V2ZM2 8H1v1h1V8ZM1 9H0v3h1V9ZM2 12H1v1h1v-1ZM6 13H2v1h4v-1ZM7 14H6v1h1v-1ZM9 15H7v1h2v-1ZM10 14H9v1h1v-1ZM14 13h-4v1h4v-1ZM15 12h-1v1h1v-1ZM16 9h-1v3h1V9ZM15 8h-1v1h1V8ZM15 3h-1v4h1V3ZM5 8H4v1h1V8ZM6 7H5v1h1V7ZM10 6H6v1h4V6ZM11 7h-1v1h1V7ZM12 8h-1v1h1V8ZM13 7h-1v1h2V7h-1ZM3 7H2v1h2V7H3Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 11H1v1h1v-1ZM3 12H2v1h1v-1ZM7 13H6v1h1v-1ZM10 13H9v1h1v-1ZM9 14H7v1h2v-1ZM14 12h-1v1h1v-1ZM15 9h-1v3h1V9Z',
                            fill: s[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 6H2v1h1V6ZM5 7H4v1h1V7ZM12 7h-1v1h1V7ZM6 6H5v1h1V6ZM11 6h-1v1h1V6Z',
                            fill: a[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 7h-1v1h1V7ZM10 5H6v1h4V5ZM14 4h-1v3h1V4Z',
                            fill: a[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 4H3v1h1V4ZM3 3H2v1h1V3ZM5 2H3v1h2V2ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM10 2H9v1h1V2ZM13 2h-2v1h2V2ZM14 3h-1v1h1V3Z',
                            fill: a[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 9H1v1h1V9ZM3 8H2v1h1V8ZM6 8H5v1h1V8ZM10 7H6v1h4V7ZM12 9h-1v1h1V9ZM14 8h-2v1h2V8Z',
                            fill: s[2]
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
