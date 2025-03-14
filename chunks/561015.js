r.d(t, { j: () => u });
var n = r(200651);
r(192379);
var l = r(331595),
    i = r(249849);
let a = ['#ff1c90', '#ff7fc0', '#ffa5d3', '#f0f0f0'],
    o = ['#816bee', '#b79cf8', '#cdbafa', '#f0f0f0'],
    s = [0.1, 0.3, 0.5, 0.9],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    c = [0.1, 0.3, 0.5, 0.9],
    v = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    u = (e) => {
        var t,
            r,
            { width: u = 24, height: d = 24, primaryTintColor: E, secondaryTintColor: f } = e,
            p = (function (e, t) {
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
            })(e, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: M, secondaryColorsTransformed: _ } = (0, i.s)({
            primaryBaseColors: a,
            primaryTintColor: E,
            primaryTintLuminances: s,
            primaryLuminanceWeights: h,
            secondaryBaseColors: o,
            secondaryTintColor: f,
            secondaryTintLuminances: c,
            secondaryLuminanceWeights: v
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
            })({}, (0, l.Z)(p))),
            (r = r =
                {
                    width: u,
                    height: d,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z',
                            fill: _[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z',
                            fill: M[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z',
                            fill: M[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 12H4v1h1v-1Z',
                            fill: M[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z',
                            fill: M[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z',
                            fill: M[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z',
                            fill: _[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z',
                            fill: M[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 12v-2H1v2h1Z',
                            fill: M[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: _[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 3H5v3h1V3Z',
                            fill: M[3]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z',
                            fill: _[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                            fill: _[0]
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
