e.d(t, { F: () => a });
var v = e(200651);
e(192379);
var r = e(331595),
    n = e(249849);
let i = ['#57595f', '#847d8b', '#d1cdd5'],
    l = [0, 0.12, 0.6],
    o = [
        {
            base: 10,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    a = (h) => {
        var t,
            e,
            { width: a = 24, height: s = 24, primaryTintColor: Z } = h,
            f = (function (h, t) {
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
            })(h, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: M } = (0, n.s)({
            primaryBaseColors: i,
            primaryTintColor: Z,
            primaryTintLuminances: l,
            primaryLuminanceWeights: o
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
            })({}, (0, r.Z)(f))),
            (e = e =
                {
                    width: a,
                    height: s,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 8H5v2h2V8Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 7H9v3h3V7Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 8h-2v2h2V8Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 4H0v6h1V4Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 4H1v6h1V4Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 10.01h1v-6h-1v6Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 0v1h8V0H4Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 15v1h6v-1H5Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 14v1h6v-1H5Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z',
                            fill: M[0]
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
