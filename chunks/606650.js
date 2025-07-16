v.d(g, { w: () => n });
var t = v(255367);
v(73800);
var B = v(331595),
    e = v(84502);
let f = ['#35363a', '#57595f', '#d8d8d8'],
    r = ['#847d8b', '#d1cdd5', '#f0f0f0'],
    C = [0.05, 0.2, 0.95],
    h = [
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
    w = [0.2, 0.5, 0.95],
    Q = [
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
    n = (A) => {
        var g,
            v,
            { width: n = 24, height: D = 24, primaryTintColor: o, secondaryTintColor: l } = A,
            i = (function (A, g) {
                if (null == A) return {};
                var v,
                    t,
                    B = (function (A, g) {
                        if (null == A) return {};
                        var v,
                            t,
                            B = {},
                            e = Object.keys(A);
                        for (t = 0; t < e.length; t++) ((v = e[t]), g.indexOf(v) >= 0 || (B[v] = A[v]));
                        return B;
                    })(A, g);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(A);
                    for (t = 0; t < e.length; t++) ((v = e[t]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (B[v] = A[v]));
                }
                return B;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: s, secondaryColorsTransformed: M } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: o,
            primaryTintLuminances: C,
            primaryLuminanceWeights: h,
            secondaryBaseColors: r,
            secondaryTintColor: l,
            secondaryTintLuminances: w,
            secondaryLuminanceWeights: Q
        });
        return (0, t.jsxs)(
            'svg',
            ((g = (function (A) {
                for (var g = 1; g < arguments.length; g++) {
                    var v = null != arguments[g] ? arguments[g] : {},
                        t = Object.keys(v);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(v).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(v, A).enumerable;
                            })
                        )),
                        t.forEach(function (g) {
                            var t;
                            ((t = v[g]),
                                g in A
                                    ? Object.defineProperty(A, g, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[g] = t));
                        }));
                }
                return A;
            })({}, (0, B.Z)(i))),
            (v = v =
                {
                    width: n,
                    height: D,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, t.jsx)('path', {
                            d: 'M13 3V2h-2v1h-1V2H9V1H7v1H6v1H5V2H3v1H2v4h2v1h1V7h6v1h1V7h2V3h-1Z',
                            fill: M[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 9V8h-4V7H6v1H2v1H1v3h1v1h4v1h1v1h2v-1h1v-1h4v-1h1V9h-1Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1ZM10 1H9v1h1V1ZM13 1h-2v1h2V1ZM14 2h-1v1h1V2ZM11 2h-1v1h1V2ZM6 2H5v1h1V2ZM5 1H3v1h2V1ZM2 3H1v4h1V3ZM3 2H2v1h1V2ZM2 8H1v1h1V8ZM1 9H0v3h1V9ZM2 12H1v1h1v-1ZM6 13H2v1h4v-1ZM7 14H6v1h1v-1ZM9 15H7v1h2v-1ZM10 14H9v1h1v-1ZM14 13h-4v1h4v-1ZM15 12h-1v1h1v-1ZM16 9h-1v3h1V9ZM15 8h-1v1h1V8ZM15 3h-1v4h1V3ZM5 8H4v1h1V8ZM6 7H5v1h1V7ZM10 6H6v1h4V6ZM11 7h-1v1h1V7ZM12 8h-1v1h1V8ZM13 7h-1v1h2V7h-1ZM3 7H2v1h2V7H3Z',
                            fill: '#000'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 11H1v1h1v-1ZM3 12H2v1h1v-1ZM7 13H6v1h1v-1ZM10 13H9v1h1v-1ZM9 14H7v1h2v-1ZM14 12h-1v1h1v-1ZM15 9h-1v3h1V9Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 6H2v1h1V6ZM5 7H4v1h1V7ZM12 7h-1v1h1V7ZM6 6H5v1h1V6ZM11 6h-1v1h1V6Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 7h-1v1h1V7ZM10 5H6v1h4V5ZM14 4h-1v3h1V4Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4 4H3v1h1V4ZM3 3H2v1h1V3ZM5 2H3v1h2V2ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM10 2H9v1h1V2ZM13 2h-2v1h2V2ZM14 3h-1v1h1V3Z',
                            fill: M[2]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 9H1v1h1V9ZM3 8H2v1h1V8ZM6 8H5v1h1V8ZM10 7H6v1h4V7ZM12 9h-1v1h1V9ZM14 8h-2v1h2V8Z',
                            fill: s[2]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                : (function (A, g) {
                      var v = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var t = Object.getOwnPropertySymbols(A);
                          v.push.apply(v, t);
                      }
                      return v;
                  })(Object(v)).forEach(function (A) {
                      Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                  }),
            g)
        );
    };
