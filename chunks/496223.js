e.d(t, { j: () => f });
var v = e(200651);
e(192379);
var r = e(331595),
    n = e(249849);
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
    Z = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
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
                            d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                            fill: b[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z',
                            fill: V[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 0H4v1h8V0Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 7V3H1v6h2V7H2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 3h-1v6h1V3Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            opacity: '.5',
                            d: 'M15 6h-1v2h1V6Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 10H5v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z',
                            fill: b[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 12H4v2h1v-2Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 9H2v1h2V9ZM14 9h-2v1h2V9Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M8 6H6v2h2V6Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            opacity: '.5',
                            d: 'M8 7H6v1h2V7Z',
                            fill: V[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 8H6v1h4V8Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 9H6v1h4V9Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 2H1v1h1V2Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 3H4v1h1V3Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z',
                            fill: '#000'
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
