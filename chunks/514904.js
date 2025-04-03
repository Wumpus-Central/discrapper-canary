r.d(t, { U: () => f });
var n = r(200651);
r(192379);
var h = r(331595),
    v = r(249849);
let i = ['#3f581a', '#7fb134', '#bcef42', '#f0f0f0'],
    l = ['#008456', '#6be473', '#f0f0f0'],
    o = [0.05, 0.35, 0.7, 1],
    a = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    s = [0.15, 0.6, 1],
    c = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    f = (e) => {
        var t,
            r,
            { width: f = 24, height: p = 24, primaryTintColor: Z, secondaryTintColor: u } = e,
            M = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    h = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            h = {},
                            v = Object.keys(e);
                        for (n = 0; n < v.length; n++) (r = v[n]), t.indexOf(r) >= 0 || (h[r] = e[r]);
                        return h;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < v.length; n++) (r = v[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (h[r] = e[r]);
                }
                return h;
            })(e, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: d, secondaryColorsTransformed: b } = (0, v.s)({
            primaryBaseColors: i,
            primaryTintColor: Z,
            primaryTintLuminances: o,
            primaryLuminanceWeights: a,
            secondaryBaseColors: l,
            secondaryTintColor: u,
            secondaryTintLuminances: s,
            secondaryLuminanceWeights: c
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
            })({}, (0, h.Z)(M))),
            (r = r =
                {
                    width: f,
                    height: p,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M9 1H7v4h2V1ZM11 7V6h-1V5H6v1H5v1H1v2h4v1h1v1h1v4h2v-4h1v-1h1V9h4V7h-4Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 1H7v1h2V1Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 3H7v1h2V3ZM9 4H7v1h2V4Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 12H7v1h2v-1Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 14H7v1h2v-1ZM9 11H7v1h2v-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 6H7v1h2V6ZM9 9H7v1h2V9ZM10 7H9v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 7h-1v2h1V7Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 7H6v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 6H5v2h1V6Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 1H2v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 1v1H2v1H1v1h3V1H3Z',
                            fill: b[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 1H3v1h1V1ZM3 2H2v1h1V2Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 3H1v1h3V3Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 12v3h1v-1h1v-1h1v-1h-3ZM1 12v1h1v1h1v1h1v-3H1Z',
                            fill: b[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 12H1v1h3v-1Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 13v2h1v-2H3Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 3V2h-1V1h-1v3h3V3h-1Z',
                            fill: b[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 1h-1v1h1V1Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 7h-1v1h1V7Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 8h-3v1h3V8Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 3h-3v1h3V3Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 2H1v1h1V2ZM7 1H6v4h1V1ZM10 1H9v4h1V1ZM16 7h-1v2h1V7ZM15 6h-4v1h4V6ZM15 9h-4v1h4V9ZM1 7H0v2h1V7ZM5 6H1v1h4V6Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 7H1v2h1V8h2V7Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 8H3v1h1V8ZM5 7H4v2h1V7Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 7H4v2h1V7Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 10H6v1h4v-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 5H6v1h4V5Z',
                            fill: d[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10h-1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 9h-1v1h1V9Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 15h-1v1h1v-1ZM14 14h-1v1h1v-1ZM15 13h-1v1h1v-1ZM16 12h-1v1h1v-1ZM9 15H7v1h2v-1ZM3 14H2v1h1v-1ZM2 13H1v1h1v-1ZM7 11H6v4h1v-4ZM10 11H9v4h1v-4ZM4 4H1v1h4V1H4v3ZM12 4V1h-1v4h4V4h-3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 11v1h3v3h1v-4H1ZM11 11v4h1v-3h3v-1h-4ZM1 12H0v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 14h-1v1h1v-1ZM14 13h-1v1h1v-1ZM15 12h-1v1h1v-1Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 12h-1v1h1v-1Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 7H7v2h2V7Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 4H7v1h2V4ZM9 11H7v1h2v-1ZM12 7h-1v2h1V7Z',
                            fill: d[0]
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
