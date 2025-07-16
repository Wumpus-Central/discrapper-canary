v.d(g, { L: () => n });
var t = v(255367);
v(73800);
var B = v(331595),
    e = v(84502);
let f = ['#008456', '#6BE473'],
    r = [0.2, 0.5],
    C = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    h = ['#FFB84B', '#FFE361'],
    w = [0.4, 0.8],
    Q = [
        {
            base: 5,
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
            primaryTintLuminances: r,
            primaryLuminanceWeights: C,
            secondaryBaseColors: h,
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
                            d: 'M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 3V2H10V3H13Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 7V6H10V7H13Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 6V3H13V6H14Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M10 6V3H9V6H10Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6 3V2H3V3H6Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6 7V6H3V7H6Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7 6V3H6V6H7Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 6V3H2V6H3Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z',
                            fill: M[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 13H4V14H12V13Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 13V12H12V13H13Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4 13V12H3.00001V13H4Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 13V12H13V13H14Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3.00002 13V12H2.00001V13H3.00002Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M15 11H14V12H15V11Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 11H1V12H2V11Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 14V13H12V14H14Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 3V2H7V3H9Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 2V1L9 1V2H13Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7 2V1L3 1V2H7Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4 14V13H2V14H4Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M15 12H14V13H15V12Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 2H13V3H14V2Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 2H2V3H3V2Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 12H1V13H2V12Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 14H4V15H12V14Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M16 12V6.99998H15V12H16Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M15 7V3H14V7H15Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 7L2 3H1L1 7H2Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M1 12L1 6.99998H0L0 12H1Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 6V3H10V6H13Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6 6V3H3V6H6Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 9H3V10H13V9Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 8H13V9H14V8Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7 7H6V8H7V7Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M10 7H9V8H10V7Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 8H2V9H3V8Z',
                            fill: 'black'
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
