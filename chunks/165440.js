g.d(t, { T: () => n });
var v = g(255367);
g(73800);
var e = g(331595),
    r = g(84502);
let f = ['#4282D8', '#00BBFF'],
    B = [0.15, 0.42],
    h = [
        {
            base: 7,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    n = (A) => {
        var t,
            g,
            { width: n = 24, height: C = 24, primaryTintColor: w } = A,
            l = (function (A, t) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: Q } = (0, r.s)({
            primaryBaseColors: f,
            primaryTintColor: w,
            primaryTintLuminances: B,
            primaryLuminanceWeights: h
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
            })({}, (0, e.Z)(l))),
            (g = g =
                {
                    width: n,
                    height: C,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M12 2H4V3H3V4H2V5H1V8H2V9H3V10H4V11H5V12H6V13H7V14H9V13H10V12H11V11H12V10H13V9H14V8H15V5H14V4H13V3H12V2Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M8 13H7V14H8V13Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 12H6V13H7V12Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 11H5V12H6V11Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 10H4V11H5V10Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 9H3V10H4V9Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 8H2V9H3V8Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 7H1V8H2V7Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 3H3V4H4V3Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 4H2V5H3V4Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 7.00001V8.00001H11V9.00001H9.99997V10H8.99997V11H7.99997V13H8.99997V12H9.99997V11H11V10H12V9.00001H13V8.00001H14V7.00001H12Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            opacity: '0.5',
                            d: 'M4 7.00001V8.00001H5V9.00001H6V10H7V11H8V13H7V12H6V11H5V10H4V9.00001H3V8.00001H2V7.00001H4Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 5H1V7.00001H2V5Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 2V3L12 3V2L4 2Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7.99802 6.99598V10.996H6.99802V9.99598H5.99802V8.99598H4.99802V7.99598H3.99802V6.99598H7.99802Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7.99802 6.99598H11.998V5.99598H10.998V4.99598H9.99802V3.99598H8.99802V2.99598H7.99802V6.99598Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            opacity: '0.5',
                            d: 'M14.998 4.99598V6.99598H11.998V2.99598H12.998V3.99598H13.998V4.99598H14.998Z',
                            fill: 'white'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3.99997 3.00001V6.00001H4.99997V5.00001H5.99997V4.00001H6.99997V3.00001H3.99997Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 4H1V5H2V4Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 8H1V9H2V8Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 9H2V10H3V9Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 10H3V11H4V10Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 11H4V12H5V11Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 12H5V13H6V12Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 13H6V14H7V13Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 3H2V4H3V3Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 2H3V3H4V2Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 5H15V4H14V5Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 9H15V8H14V9Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M13 10H14V9H13V10Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 11H13V10H12V11Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 12H12V11H11V12Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 13H11V12H10V13Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 14H10V13H9V14Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M13 4H14V3H13V4Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 3H13V2L12 2V3Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 5H0V8H1V5Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M16 5H15V8H16V5Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 14V15H9V14H7Z',
                            fill: 'black'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 1V2L12 2V1L4 1Z',
                            fill: 'black'
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
