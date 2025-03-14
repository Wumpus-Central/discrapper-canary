r.d(t, { $: () => h });
var n = r(200651);
r(192379);
var l = r(331595),
    i = r(249849);
let a = ['#ffb84b', '#ffe361', '#f0f0f0'],
    o = [0.15, 0.5, 0.9],
    s = [
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
    h = (e) => {
        var t,
            r,
            { width: h = 24, height: c = 24, primaryTintColor: v } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: d } = (0, i.s)({
            primaryBaseColors: a,
            primaryTintColor: v,
            primaryTintLuminances: o,
            primaryLuminanceWeights: s
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
            })({}, (0, l.Z)(u))),
            (r = r =
                {
                    width: h,
                    height: c,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 7H0v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 7H1v2h1V7Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 7h-1v1h1V7Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 2H9v1h1V2Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 1h-3v1h3V1Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 2h-1v1h1V2Z',
                            fill: d[1]
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
