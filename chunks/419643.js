r.d(t, { S: () => Z });
var n = r(200651),
    h = r(192379),
    v = r(772848),
    i = r(331595),
    l = r(249849);
let o = ['#be0351', '#ff2c52', '#f0f0f0'],
    a = ['#ffb84b', '#ffe361', '#f0f0f0'],
    s = [0.3, 0.4, 1],
    c = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    f = [0.3, 0.5, 1],
    p = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    Z = (e) => {
        var t,
            r,
            { width: Z = 24, height: u = 24, primaryTintColor: M, secondaryTintColor: d } = e,
            b = (function (e, t) {
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
        let H = h.useMemo(() => 'badge-force-gradient-'.concat((0, v.Z)()), []),
            { primaryColorsTransformed: y, secondaryColorsTransformed: V } = (0, l.s)({
                primaryBaseColors: o,
                primaryTintColor: M,
                primaryTintLuminances: s,
                primaryLuminanceWeights: c,
                secondaryBaseColors: a,
                secondaryTintColor: d,
                secondaryTintLuminances: f,
                secondaryLuminanceWeights: p
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
                    width: Z,
                    height: u,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1H4v1h3V1ZM11 2H7v1h4V2Z',
                            fill: V[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 3h-4v1h4V3Z',
                            fill: y[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 15H4v1h3v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z',
                            fill: V[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 14H4v1h3v-1Z',
                            fill: V[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 14H7v1h4v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: V[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 5H1v2h1V5ZM6 5H5v2h1V5Z',
                            fill: V[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 3H4v2h1V3Z',
                            fill: V[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 2H3v1h1V2Z',
                            fill: V[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z',
                            fill: V[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: 'url(#'.concat(H, ')')
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z',
                            fill: y[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z',
                            fill: y[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z',
                            fill: V[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 4h-1v1h1V4ZM10 6H9v1h1V6Z',
                            fill: y[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('defs', {
                            children: (0, n.jsxs)('radialGradient', {
                                id: H,
                                cx: '0.75',
                                cy: '0.5',
                                r: '1',
                                fx: '0.75',
                                fy: '0.5',
                                children: [
                                    (0, n.jsx)('stop', {
                                        stopColor: y[1],
                                        offset: '30%'
                                    }),
                                    (0, n.jsx)('stop', {
                                        stopColor: V[1],
                                        offset: '70%'
                                    })
                                ]
                            })
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
