n.d(t, { x: () => E });
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
let f = ['#ba3500', '#fd6214', '#ffb84b', '#f0f0f0'],
    p = ['#35363a', '#57595f', '#d8d8d8'],
    _ = [0.05, 0.15, 0.4, 0.9],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    m = [0.05, 0.3, 0.95],
    g = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 4,
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
            primaryTintLuminances: _,
            primaryLuminanceWeights: h,
            secondaryBaseColors: p,
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
                        d: 'M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 1H9v1h1V1ZM1 7H0v2h1V7Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 7h-1v2h1V7Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 7H1v2h1V7Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 8H3v1h3V8ZM13 8h-3v1h3V8Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 14H7v1h2v-1Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 1H7v1h2V1ZM7 2H6v1h1V1Z',
                        fill: E[3]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 13H9v1h1v-1Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z',
                        fill: E[1]
                    })
                ]
            })
        );
    };
