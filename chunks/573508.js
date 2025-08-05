e.d(t, { i: () => l });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ['#4a8359', '#7fb134', '#bcef42', '#f0f0f0'],
    f = [0.1, 0.2, 0.6, 0.9],
    B = [
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
    l = (A) => {
        var t,
            e,
            { width: l = 24, height: h = 24, primaryTintColor: i } = A,
            o = (function (A, t) {
                if (null == A) return {};
                var e,
                    r,
                    g = (function (A, t) {
                        if (null == A) return {};
                        var e,
                            r,
                            g = {},
                            v = Object.keys(A);
                        for (r = 0; r < v.length; r++) ((e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]));
                        return g;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(A);
                    for (r = 0; r < v.length; r++) ((e = v[r]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]));
                }
                return g;
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: C } = (0, v.s)({
            primaryBaseColors: n,
            primaryTintColor: i,
            primaryTintLuminances: f,
            primaryLuminanceWeights: B
        });
        return (0, r.jsxs)(
            'svg',
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(e);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[t] = r));
                        }));
                }
                return A;
            })({}, (0, g.Z)(o))),
            (e = e =
                {
                    width: l,
                    height: h,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, r.jsx)('path', {
                            d: 'M15 2V1H9v1H3v5H1v5h12V7h2V2Z',
                            fill: C[2]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M11 13v-1H5v1h6Z',
                            fill: C[1]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M15 2V1H9v1h6ZM9 3V2H5v1h4Z',
                            fill: '#fff'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z',
                            fill: C[1]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M16 1h-1v6h1V1Z',
                            fill: '#000'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 9H2v6h1V9Z',
                            fill: C[0]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z',
                            fill: '#fff'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z',
                            fill: C[0]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: '#fff'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 8v1h1V8H3Z',
                            fill: C[0]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (A, t) {
                      var e = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(A);
                          e.push.apply(e, r);
                      }
                      return e;
                  })(Object(e)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(e, A));
                  }),
            t)
        );
    };
