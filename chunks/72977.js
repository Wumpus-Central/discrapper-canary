e.d(t, { e: () => a });
var v = e(200651);
e(192379);
var r = e(331595),
    n = e(249849);
let i = ['#ba3500', '#fd6214', '#f0f0f0'],
    l = [0.1, 0.3, 1],
    o = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 3,
            tint: 1
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
                            d: 'M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 4v1h1V4H5Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            opacity: '.5',
                            d: 'M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 1v3h1V1h-1Z',
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
