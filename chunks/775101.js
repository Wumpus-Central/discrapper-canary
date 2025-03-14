n.d(t, { F: () => h });
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
let f = ['#57595f', '#847d8b', '#d1cdd5'],
    _ = [0, 0.12, 0.6],
    p = [
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
    h = (e) => {
        var { width: t = 24, height: n = 24, primaryTintColor: a } = e,
            l = u(e, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: d } = (0, o.s)({
            primaryBaseColors: f,
            primaryTintColor: a,
            primaryTintLuminances: _,
            primaryLuminanceWeights: p
        });
        return (0, r.jsxs)(
            'svg',
            c(s({}, (0, i.Z)(l)), {
                width: t,
                height: n,
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z',
                        fill: d[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 8H5v2h2V8Z',
                        fill: d[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 7H9v3h3V7Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 8h-2v2h2V8Z',
                        fill: d[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M1 4H0v6h1V4Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 4H1v6h1V4Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 10.01h1v-6h-1v6Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 0v1h8V0H4Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 15v1h6v-1H5Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 14v1h6v-1H5Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z',
                        fill: d[0]
                    })
                ]
            })
        );
    };
