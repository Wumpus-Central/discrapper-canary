r.d(t, { o: () => f });
var n = r(200651);
r(192379);
var h = r(331595),
    v = r(249849);
let i = ['#ffb84b', '#ffe361', '#f0f0f0'],
    l = ['#847d8b', '#d1cdd5', '#f0f0f0'],
    o = [0.1, 0.4, 0.7],
    a = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    s = [0.3, 0.9, 1],
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
                            d: 'M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z',
                            fill: b[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 1h-1v4h1V1Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 7H6v1h1V7Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z',
                            fill: b[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z',
                            fill: b[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: d[2]
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
