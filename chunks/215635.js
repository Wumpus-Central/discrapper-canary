r.d(t, { O: () => u });
var n = r(200651);
r(192379);
var i = r(331595),
    s = r(249849);
let o = ['#ffb84b', '#ffe361', '#f0f0f0'],
    l = ['#ba3500', '#fd6214', '#f0f0f0'],
    a = [0.07, 0.45, 1],
    c = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    h = [0.1, 0.4, 1],
    v = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 1,
            tint: 2
        },
        {
            base: 4,
            tint: 1
        }
    ],
    u = (e) => {
        var t,
            r,
            { width: u = 24, height: f = 24, primaryTintColor: p, secondaryTintColor: d } = e,
            b = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(e, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: Z, secondaryColorsTransformed: M } = (0, s.s)({
            primaryBaseColors: o,
            primaryTintColor: p,
            primaryTintLuminances: a,
            primaryLuminanceWeights: c,
            secondaryBaseColors: l,
            secondaryTintColor: d,
            secondaryTintLuminances: h,
            secondaryLuminanceWeights: v
        });
        return (0, n.jsxs)(
            'svg',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, (0, i.Z)(b))),
            (r = r =
                {
                    width: u,
                    height: f,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z',
                            fill: Z[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 1H1v1h9V1Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z',
                            fill: M[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 5h-3v1h3V5Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 2h-1v3h1V2Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 6h-1v6h1V6Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 6h-1v6h1V6Z',
                            fill: Z[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 4h-1v1h1V4Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 13H6v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z',
                            fill: Z[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 12H7v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 7H4v1h1V7ZM6 6H5v1h1V6Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 5H6v1h1V5ZM8 4H7v1h1V4Z',
                            fill: Z[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 2h-3v3h3V2Z',
                            fill: M[1]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        );
    };
