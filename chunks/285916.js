t.d(e, { W: () => o });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#008456', '#6BE473'],
    s = [0.17, 0.6],
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
    o = (A) => {
        var e,
            t,
            { width: o = 24, height: g = 24, primaryTintColor: f } = A,
            v = (function (A, e) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: c } = (0, l.s)({
            primaryBaseColors: i,
            primaryTintColor: f,
            primaryTintLuminances: s,
            primaryLuminanceWeights: a
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
            })({}, (0, r.Z)(v))),
            (t = t =
                {
                    width: o,
                    height: g,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M16 11.9295V9H15V11.9295H16Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 12V9H15V12H16Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 7L1 4H0L0 7H1Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z',
                            fill: c[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 12H14V13H15V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 9H12V10H13V9Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 8H8V9H12V8Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 3H2V4H5V3Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 9H6V10H7V9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 6H7V7H8V6Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 5H7V6H8V5Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 10H6V11H7V10Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 9H5V10H6V9Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 6H8V7H9V6Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 3H1V4H2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 4H1V5H2V4Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 3V7H15V3H13Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 1V3H11V1L9 1Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 13V15H11V13H9Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z',
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
