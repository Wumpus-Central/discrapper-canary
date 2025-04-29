n.d(t, {
    Qi: () => E,
    R9: () => y,
    l_: () => g,
    t: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(780384),
    s = n(410030),
    l = n(325767),
    c = n(474936),
    u = n(655132);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = 'premium_new_tier_2_gradient',
    E = 'premium_old_tier_2_gradient';
function b(e) {
    let { tier: t = c.p9.TIER_2 } = e,
        n = (0, s.ZP)(),
        i = (0, a.ap)(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(u.rimGlowVertical, {
                                [u.rimGlowVerticalTier0]: t === c.p9.TIER_0,
                                [u.rimGlowVerticalTier2]: t === c.p9.TIER_2
                            })
                        }),
                        (0, r.jsx)(y, { foreground: u.buttonSparkleStar1 })
                    ]
                }),
            (0, r.jsx)(y, { foreground: u.buttonSparkleStar2 }),
            (0, r.jsx)(y, { foreground: u.buttonSparkleStar3 }),
            (0, r.jsx)(y, { foreground: u.buttonSparkleStar4 }),
            (0, r.jsx)(y, { foreground: u.buttonSparkleStar5 })
        ]
    });
}
function y(e) {
    var { width: t = 14, height: n = 13, color: i = 'white', foreground: o } = e,
        a = h(e, ['width', 'height', 'color', 'foreground']);
    return (0, r.jsxs)(
        'svg',
        p(f({}, (0, l.Z)(f({}, a))), {
            preserveAspectRatio: 'none',
            width: t,
            height: n,
            viewBox: '0 0 14 13',
            className: o,
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
                (0, r.jsxs)('defs', {
                    children: [
                        (0, r.jsxs)('linearGradient', {
                            id: g,
                            x1: '0%',
                            y1: '0%',
                            x2: '100%',
                            y2: '0%',
                            children: [
                                (0, r.jsx)('stop', {
                                    offset: '0%',
                                    stopColor: '#8547C6'
                                }),
                                (0, r.jsx)('stop', {
                                    offset: '50%',
                                    stopColor: '#B845C1'
                                }),
                                (0, r.jsx)('stop', {
                                    offset: '100%',
                                    stopColor: '#AB5D8A'
                                })
                            ]
                        }),
                        (0, r.jsxs)('linearGradient', {
                            id: E,
                            x1: '0%',
                            y1: '0%',
                            x2: '100%',
                            y2: '0%',
                            children: [
                                (0, r.jsx)('stop', {
                                    offset: '0%',
                                    stopColor: '#B473F5'
                                }),
                                (0, r.jsx)('stop', {
                                    offset: '100%',
                                    stopColor: '#E292AA'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('path', {
                    d: 'M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z',
                    fill: i
                })
            ]
        })
    );
}
