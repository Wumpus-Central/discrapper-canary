n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(325767);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var { width: t = 10, height: n = 10, color: o = 'currentColor' } = e,
        s = c(e, ['width', 'height', 'color']);
    return (0, r.jsxs)(
        'svg',
        l(a({}, (0, i.Z)(s)), {
            width: t,
            height: n,
            viewBox: '0 0 17 22',
            fill: o,
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
                (0, r.jsxs)('g', {
                    filter: 'url(#filter0_d_1296_1706)',
                    children: [
                        (0, r.jsx)('path', {
                            opacity: '0.55',
                            d: 'M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            opacity: '0.8',
                            d: 'M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z',
                            fill: 'white'
                        })
                    ]
                }),
                (0, r.jsx)('defs', {
                    children: (0, r.jsxs)('filter', {
                        id: 'filter0_d_1296_1706',
                        x: '-3.5',
                        y: '-1',
                        width: '24',
                        height: '24',
                        filterUnits: 'userSpaceOnUse',
                        'color-interpolation-filters': 'sRGB',
                        children: [
                            (0, r.jsx)('feFlood', {
                                'flood-opacity': '0',
                                result: 'BackgroundImageFix'
                            }),
                            (0, r.jsx)('feColorMatrix', {
                                in: 'SourceAlpha',
                                type: 'matrix',
                                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                result: 'hardAlpha'
                            }),
                            (0, r.jsx)('feOffset', { dy: '1' }),
                            (0, r.jsx)('feGaussianBlur', { stdDeviation: '2' }),
                            (0, r.jsx)('feColorMatrix', {
                                type: 'matrix',
                                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'
                            }),
                            (0, r.jsx)('feBlend', {
                                mode: 'normal',
                                in2: 'BackgroundImageFix',
                                result: 'effect1_dropShadow_1296_1706'
                            }),
                            (0, r.jsx)('feBlend', {
                                mode: 'normal',
                                in: 'SourceGraphic',
                                in2: 'effect1_dropShadow_1296_1706',
                                result: 'shape'
                            })
                        ]
                    })
                })
            ]
        })
    );
}
