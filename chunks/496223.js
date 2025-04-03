r.d(t, { j: () => f });
var n = r(200651);
r(192379);
var h = r(331595),
    v = r(249849);
let i = ['#be0351', '#ff2c52'],
    l = ['#ffb84b', '#ffe361'],
    o = [0.12, 0.25],
    a = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    s = [0.4, 0.8],
    c = [
        {
            base: 5,
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
                            d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                            fill: b[1]
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
                            fill: b[0]
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
