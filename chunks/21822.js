v.d(g, { h: () => n });
var t = v(255367);
v(73800);
var B = v(331595),
    e = v(84502);
let f = ['#705224', '#F6A830'],
    r = ['#FFE880'],
    C = [0.05, 0.4],
    h = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    w = [0.8],
    Q = [
        {
            base: 6,
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
                            d: 'M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z',
                            fill: M[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 12H8V14H9V12Z',
                            fill: '#FF1C90'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5 2.00002V1.00002L3 1.00002V2.00002H5Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4 5H6V2L4 2L4 5Z',
                            fill: '#FF7FC0'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8 4H10V2H8V4Z',
                            fill: '#FF7FC0'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 12V15H11V12H9Z',
                            fill: '#FF7FC0'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 8V9H13V10H15V8H12Z',
                            fill: s[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 1.00002H8V2.00002H9V1.00002Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M10 1.00002H9V2.00002H10V1.00002Z',
                            fill: '#FF7FC0'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 6.00002H11V7.00002H12V6.00002Z',
                            fill: s[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 14H1V15H9V14Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M1 14L1 4.00002H0L0 14H1Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 2.00002H1V4.00002H2V2.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4 2.00002H3V5.00002H4V2.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M11 16V15H9V16H11Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6 9H7V6H6V9Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 1.00002H2V2.00002H3V1.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8 1.00002H7V2.00002H8V1.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M3 5.00002H2V6.00002H3V5.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 5.00002H11V6.00002H12V5.00002Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z',
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
