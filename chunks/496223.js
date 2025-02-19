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
let f = ['#be0351', '#ff2c52'],
    p = ['#ffb84b', '#ffe361'],
    _ = [0.12, 0.25],
    h = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    m = [0.4, 0.8],
    g = [
        {
            base: 5,
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
                        d: 'M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 0H4v1h8V0Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 7V3H1v6h2V7H2Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 3h-1v6h1V3Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        opacity: '.5',
                        d: 'M15 6h-1v2h1V6Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 10H5v2h1v-2Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 12H4v2h1v-2Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 9H2v1h2V9ZM14 9h-2v1h2V9Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8 6H6v2h2V6Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        opacity: '.5',
                        d: 'M8 7H6v1h2V7Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 8H6v1h4V8Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10 9H6v1h4V9Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 2H1v1h1V2Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 3H4v1h1V3Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z',
                        fill: '#000'
                    })
                ]
            })
        );
    };
