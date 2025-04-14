e.d(t, { $: () => a });
var v = e(200651);
e(192379);
var r = e(331595),
    n = e(249849);
let i = ['#ffb84b', '#ffe361', '#f0f0f0'],
    l = [0.15, 0.5, 0.9],
    o = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 2
        },
        {
            base: 10,
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
                            d: 'M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 7H0v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 7H1v2h1V7Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 7h-1v1h1V7Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 2H9v1h1V2Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M13 1h-3v1h3V1Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 2h-1v1h1V2Z',
                            fill: M[1]
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
