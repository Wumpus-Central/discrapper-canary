t.d(e, { G: () => o });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#ba3500', '#fd6214', '#f0f0f0'],
    s = [0.1, 0.3, 1],
    a = [
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
    o = (A) => {
        var e,
            t,
            { width: o = 24, height: g = 24, primaryTintColor: f } = A,
            c = (function (A, e) {
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
        let { primaryColorsTransformed: v } = (0, l.s)({
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
            })({}, (0, r.Z)(c))),
            (t = t =
                {
                    width: o,
                    height: g,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z',
                            fill: v[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z',
                            fill: v[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z',
                            fill: v[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: v[1]
                        }),
                        (0, n.jsx)('path', {
                            opacity: '.5',
                            d: 'M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z',
                            fill: v[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z',
                            fill: v[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z',
                            fill: v[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 1v3h1V1h-1Z',
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
