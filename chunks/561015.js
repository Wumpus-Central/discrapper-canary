n.d(t, { j: () => E });
var r = n(200651);
n(192379);
var i = n(331595),
    o = n(249849);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = ['#ff1c90', '#ff7fc0', '#ffa5d3', '#f0f0f0'],
    _ = ['#816bee', '#b79cf8', '#cdbafa', '#f0f0f0'],
    p = [0.1, 0.3, 0.5, 0.9],
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
    m = [0.1, 0.3, 0.5, 0.9],
    g = [
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
    E = (e) => {
        var { width: t = 24, height: n = 24, primaryTintColor: a, secondaryTintColor: l } = e,
            d = u(e, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: E, secondaryColorsTransformed: v } = (0, o.s)({
            primaryBaseColors: f,
            primaryTintColor: a,
            primaryTintLuminances: p,
            primaryLuminanceWeights: h,
            secondaryBaseColors: _,
            secondaryTintColor: l,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: g
        });
        return (0, r.jsxs)(
            'svg',
            c(s({}, (0, i.Z)(d)), {
                width: t,
                height: n,
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 0H7v1h2V0ZM7 1H6v1h1V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 12H4v1h1v-1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z',
                        fill: v[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 12v-2H1v2h1Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M11 3h-1v1h1V3Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 3H5v3h1V3Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                        fill: v[0]
                    })
                ]
            })
        );
    };
