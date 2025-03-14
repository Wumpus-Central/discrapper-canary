n.d(t, { J: () => E });
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
let f = ['#4282d8', '#47baff', '#b5e3ff', '#f0f0f0'],
    _ = ['#816bee', '#b79cf8', '#f0f0f0'],
    p = [0.1, 0.4, 0.8, 1],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    m = [0.1, 0.5, 1],
    g = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 8,
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
                        d: 'M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 0H1v1h2V0ZM5 1H3v1h2V1ZM4 5H2v1h2V5ZM1 1H0v2h1V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 1H1v2h1V2h1V1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M1 7H0v2h1V7ZM16 1h-1v2h1V1ZM15 3h-1v2h1V3ZM2 3H1v2h1V3ZM6 2H5v2h1V2ZM11 2h-1v2h1V2ZM7 1H6v1h1V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 15v-1h2v-2H4v-1H2v2H1v2h2Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 13H1v1h1v-1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 4H4v1h1V4Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 6H1v1h1V6ZM16 7h-1v2h1V7ZM15 6h-1v1h1V6ZM10 1H9v1h1V1ZM12 4h-1v1h1V4ZM9 0H7v1h2V0Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 1H7v1h2V1ZM9 7H7v2h2V7Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 5H7v1h2V5ZM9 10H7v1h2v-1ZM15 0h-2v1h2V0ZM13 1h-2v1h2V1ZM14 5h-2v1h2V5ZM3 15H1v1h2v-1ZM5 14H3v1h2v-1ZM4 10H2v1h2v-1ZM1 13H0v2h1v-2ZM16 13h-1v2h1v-2ZM15 11h-1v2h1v-2ZM2 11H1v2h1v-2ZM6 12H5v2h1v-2ZM11 12h-1v2h1v-2ZM7 14H6v1h1v-1ZM5 11H4v1h1v-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 9H1v1h1V9ZM5 7H4v2h1V7ZM7 6H5v1h2V6ZM7 9H5v1h2V9ZM12 7h-1v2h1V7ZM11 6H9v1h2V6ZM11 9H9v1h2V9ZM15 9h-1v1h1V9Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 14H9v1h1v-1ZM12 11h-1v1h1v-1ZM9 15H7v1h2v-1ZM15 15h-2v1h2v-1ZM13 14h-2v1h2v-1ZM14 10h-2v1h2v-1Z',
                        fill: '#000'
                    })
                ]
            })
        );
    };
