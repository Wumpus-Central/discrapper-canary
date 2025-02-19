n.d(t, { Z: () => c });
var r = n(818083);
function i(e, t, n) {
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
function o(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = {
        gamma: -1,
        attenuationRange: 50,
        boostRange: 6
    },
    c = (0, r.B)({
        kind: 'user',
        id: '2025-01_perceptual_volume_function',
        label: 'Perceptual volume function adjustment',
        defaultConfig: l,
        treatments: [
            {
                id: 1,
                label: 'Use gamma 2.8',
                config: s(o({}, l), { gamma: 2.8 })
            },
            {
                id: 2,
                label: 'Use gamma ~1.7 (50% = -10dB, 25% = -20dB)',
                config: s(o({}, l), { gamma: 1.66096404744368 })
            },
            {
                id: 3,
                label: 'Use gamma 2.6',
                config: s(o({}, l), { gamma: 2.6 })
            },
            {
                id: 4,
                label: 'Use gamma 3.0',
                config: s(o({}, l), { gamma: 3 })
            },
            {
                id: 5,
                label: 'Use gamma 2.0',
                config: s(o({}, l), { gamma: 2 })
            },
            {
                id: 6,
                label: 'Use gamma 4.0',
                config: s(o({}, l), { gamma: 4 })
            }
        ]
    });
