n.d(t, { y: () => E });
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
let f = ['#7fb134', '#bcef42', '#f0f0f0'],
    p = ['#816bee', '#b79cf8'],
    _ = [0.1, 0.6, 0.95],
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
            base: 8,
            tint: 1
        }
    ],
    m = [0.1, 0.3],
    g = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 6,
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
                        d: 'M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 1h-2v1h2V1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 13H1v1h2v-1Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 14H1v1h3v-1Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 8h-1v2h1V8Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 1H6v1h6V1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 2H6v1h6V2Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 14H5v1h5v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 2h-1v1h1V2Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 3H5v1h1V3ZM13 3h-1v1h1V3Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 6H1v2h1V6Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z',
                        fill: v[1]
                    })
                ]
            })
        );
    };
