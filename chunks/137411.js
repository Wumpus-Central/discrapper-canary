r.d(t, { y: () => u });
var n = r(200651);
r(192379);
var i = r(331595),
    s = r(249849);
let o = ['#7fb134', '#bcef42', '#f0f0f0'],
    l = ['#816bee', '#b79cf8'],
    a = [0.1, 0.6, 0.95],
    c = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    h = [0.1, 0.3],
    v = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 6,
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
                            d: 'M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z',
                            fill: Z[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 1h-2v1h2V1Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 13H1v1h2v-1Z',
                            fill: Z[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 14H1v1h3v-1Z',
                            fill: Z[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 8h-1v2h1V8Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 1H6v1h6V1Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 2H6v1h6V2Z',
                            fill: M[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 14H5v1h5v-1Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 2h-1v1h1V2Z',
                            fill: Z[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 3H5v1h1V3ZM13 3h-1v1h1V3Z',
                            fill: M[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 6H1v2h1V6Z',
                            fill: Z[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z',
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
