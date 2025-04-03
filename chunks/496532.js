r.d(t, { _: () => f });
var n = r(200651);
r(192379);
var h = r(331595),
    v = r(249849);
let i = ['#be0351', '#ff2c52', '#f0f0f0'],
    l = ['#4282d8', '#47baff', '#f0f0f0'],
    o = [0.1, 0.25, 1],
    a = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    s = [0.1, 0.25, 1],
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
            base: 2,
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
                            d: 'M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z',
                            fill: b[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 0v1h2V0H7Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1v1h2V1H7Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 6v1h2V6H7Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 4H5v1h1V4ZM7 3H6v1h1V3Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 9v1h2V9H7Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 10H6v1h1v-1Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 4H7v1h1V4Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 5H9v1h1V5ZM11 4h-1v1h1V4Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 7h-1v2h1V7Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z',
                            fill: '#C7C7C7'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 9h1V7H1v2Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 9h1V7H6v2Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z',
                            fill: '#fff'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 10V9H5v1h1ZM5 11v-1H4v1h1Z',
                            fill: '#707070'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z',
                            fill: '#000'
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
