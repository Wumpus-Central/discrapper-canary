t.d(e, { k: () => o });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#FFB84B', '#FFE361'],
    s = [0.5, 0.77],
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
            { width: o = 24, height: g = 24, primaryTintColor: v } = A,
            f = (function (A, e) {
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
            primaryTintColor: v,
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
            })({}, (0, r.Z)(f))),
            (t = t =
                {
                    width: o,
                    height: g,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z',
                            fill: c[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 15H1.99999V16H14V15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z',
                            fill: c[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0.999996 15H2V14H0.999996L0.999996 15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0.999996 9H2V8H0.999996L0.999996 9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1.99999 9H2.99999V8H1.99999V9Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2.99999 8H3.99999V7H2.99999V8Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3.99999 7H4.99999V6H3.99999V7Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 7H12V6H11V7Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99999 12H9.99999V8H8.99999V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5.99999 12H6.99999L6.99999 8H5.99999V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 10H15V9H14V10Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1.99999 8H2.99999V7H1.99999V8Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2.99999 7H3.99999V6H2.99999V7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2.99999 3H3.99999V2L2.99999 2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3.99999 2L6.99999 2V1L3.99999 1V2Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99999 12H6.99999V13H8.99999V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99999 7H6.99999V8H8.99999V7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99999 8H6.99999V12H8.99999V8Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 14V12H1V14H2Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 14V12H14V14H15Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1.99999 15L14 15V13L1.99999 13V15Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0 14H1L1 9H0L0 14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 14H14V15H15V14Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 8H14V9H15V8Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 7H13V8H14V7Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 6H12V7H13V6Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 2H12V3H13V2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 3V2L4.00002 2V3L12 3Z',
                            fill: c[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 4V6H11V4H5Z',
                            fill: '#AD7A60'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 9H15V14H16V9Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99999 8H6.99999V9H8.99999V8Z',
                            fill: 'white'
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
