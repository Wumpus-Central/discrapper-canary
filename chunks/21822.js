t.d(e, { h: () => v });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#705224', '#F6A830'],
    s = ['#FFE880'],
    a = [0.05, 0.4],
    o = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    g = [0.8],
    f = [
        {
            base: 6,
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
            primaryTintLuminances: a,
            primaryLuminanceWeights: o,
            secondaryBaseColors: s,
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
                            d: 'M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 12H8V14H9V12Z',
                            fill: '#FF1C90'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 2.00002V1.00002L3 1.00002V2.00002H5Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 5H6V2L4 2L4 5Z',
                            fill: '#FF7FC0'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 4H10V2H8V4Z',
                            fill: '#FF7FC0'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 12V15H11V12H9Z',
                            fill: '#FF7FC0'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 8V9H13V10H15V8H12Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 1.00002H8V2.00002H9V1.00002Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 1.00002H9V2.00002H10V1.00002Z',
                            fill: '#FF7FC0'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 6.00002H11V7.00002H12V6.00002Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 14H1V15H9V14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 14L1 4.00002H0L0 14H1Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 2.00002H1V4.00002H2V2.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 2.00002H3V5.00002H4V2.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 16V15H9V16H11Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 9H7V6H6V9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 1.00002H2V2.00002H3V1.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 1.00002H7V2.00002H8V1.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 5.00002H2V6.00002H3V5.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 5.00002H11V6.00002H12V5.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z',
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
