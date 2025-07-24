t.d(e, { L: () => v });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#008456', '#6BE473'],
    s = [0.2, 0.5],
    a = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    o = ['#FFB84B', '#FFE361'],
    g = [0.4, 0.8],
    f = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    v = (A) => {
        var e,
            t,
            { width: v = 24, height: c = 24, primaryTintColor: h, secondaryTintColor: E } = A,
            u = (function (A, e) {
                if (null == A) return {};
                var t,
                    n,
                    r = (function (A, e) {
                        if (null == A) return {};
                        var t,
                            n,
                            r = {},
                            l = Object.keys(A);
                        for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                        return r;
                    })(A, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
                }
                return r;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: d, secondaryColorsTransformed: C } = (0, l.s)({
            primaryBaseColors: i,
            primaryTintColor: h,
            primaryTintLuminances: s,
            primaryLuminanceWeights: a,
            secondaryBaseColors: o,
            secondaryTintColor: E,
            secondaryTintLuminances: g,
            secondaryLuminanceWeights: f
        });
        return (0, n.jsxs)(
            'svg',
            ((e = (function (A) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(t, A).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n;
                            ((n = t[e]),
                                e in A
                                    ? Object.defineProperty(A, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[e] = n));
                        }));
                }
                return A;
            })({}, (0, r.Z)(u))),
            (t = t =
                {
                    width: v,
                    height: c,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 3V2H10V3H13Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 7V6H10V7H13Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 6V3H13V6H14Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 6V3H9V6H10Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 3V2H3V3H6Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 7V6H3V7H6Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 6V3H6V6H7Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 6V3H2V6H3Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z',
                            fill: C[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 13H4V14H12V13Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 13V12H12V13H13Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 13V12H3.00001V13H4Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 13V12H13V13H14Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3.00002 13V12H2.00001V13H3.00002Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 11H14V12H15V11Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 11H1V12H2V11Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 14V13H12V14H14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 3V2H7V3H9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 2V1L9 1V2H13Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 2V1L3 1V2H7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 14V13H2V14H4Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 12H14V13H15V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 2H13V3H14V2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 2H2V3H3V2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 12H1V13H2V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 14H4V15H12V14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 12V6.99998H15V12H16Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 7V3H14V7H15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 7L2 3H1L1 7H2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 12L1 6.99998H0L0 12H1Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 6V3H10V6H13Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 6V3H3V6H6Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 9H3V10H13V9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 8H13V9H14V8Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 7H6V8H7V7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 7H9V8H10V7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 8H2V9H3V8Z',
                            fill: 'black'
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (A, e) {
                      var t = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(A);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (A) {
                      Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
                  }),
            e)
        );
    };
