t.d(e, { T: () => v });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#be0351', '#ff2c52'],
    s = ['#ffb84b', '#ffe361'],
    a = [0.12, 0.25],
    o = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    g = [0.4, 0.8],
    f = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
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
                            d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                            fill: C[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 0H4v1h8V0Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 7V3H1v6h2V7H2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 3h-1v6h1V3Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            opacity: '.5',
                            d: 'M15 6h-1v2h1V6Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 10H5v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 12H4v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 9H2v1h2V9ZM14 9h-2v1h2V9Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 6H6v2h2V6Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            opacity: '.5',
                            d: 'M8 7H6v1h2V7Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 8H6v1h4V8Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 9H6v1h4V9Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 2H1v1h1V2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 3H4v1h1V3Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z',
                            fill: '#000'
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
