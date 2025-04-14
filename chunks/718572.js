e.d(t, { o: () => f });
var v = e(200651);
e(192379);
var r = e(331595),
    n = e(249849);
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
    Z = [
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
    f = (h) => {
        var t,
            e,
            { width: f = 24, height: M = 24, primaryTintColor: c, secondaryTintColor: p } = h,
            H = (function (h, t) {
                if (null == h) return {};
                var e,
                    v,
                    r = (function (h, t) {
                        if (null == h) return {};
                        var e,
                            v,
                            r = {},
                            n = Object.keys(h);
                        for (v = 0; v < n.length; v++) (e = n[v]), t.indexOf(e) >= 0 || (r[e] = h[e]);
                        return r;
                    })(h, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(h);
                    for (v = 0; v < n.length; v++) (e = n[v]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(h, e) && (r[e] = h[e]);
                }
                return r;
            })(h, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: V, secondaryColorsTransformed: b } = (0, n.s)({
            primaryBaseColors: i,
            primaryTintColor: c,
            primaryTintLuminances: o,
            primaryLuminanceWeights: a,
            secondaryBaseColors: l,
            secondaryTintColor: p,
            secondaryTintLuminances: s,
            secondaryLuminanceWeights: Z
        });
        return (0, v.jsxs)(
            'svg',
            ((t = (function (h) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        v = Object.keys(e);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (v = v.concat(
                            Object.getOwnPropertySymbols(e).filter(function (h) {
                                return Object.getOwnPropertyDescriptor(e, h).enumerable;
                            })
                        )),
                        v.forEach(function (t) {
                            var v;
                            (v = e[t]),
                                t in h
                                    ? Object.defineProperty(h, t, {
                                          value: v,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (h[t] = v);
                        });
                }
                return h;
            })({}, (0, r.Z)(H))),
            (e = e =
                {
                    width: f,
                    height: M,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z',
                            fill: b[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z',
                            fill: V[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z',
                            fill: V[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 1h-1v4h1V1Z',
                            fill: b[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z',
                            fill: b[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 7H6v1h1V7Z',
                            fill: b[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z',
                            fill: V[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z',
                            fill: b[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z',
                            fill: b[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: V[2]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (h, t) {
                      var e = Object.keys(h);
                      if (Object.getOwnPropertySymbols) {
                          var v = Object.getOwnPropertySymbols(h);
                          e.push.apply(e, v);
                      }
                      return e;
                  })(Object(e)).forEach(function (h) {
                      Object.defineProperty(t, h, Object.getOwnPropertyDescriptor(e, h));
                  }),
            t)
        );
    };
