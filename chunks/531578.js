n.d(t, {
    FB: () => u,
    aZ: () => l,
    b5: () => d,
    iF: () => c,
    nw: () => r.LX,
    rN: () => f,
    uf: () => _
});
var r = n(524437);
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
var l = (function (e) {
    return (e.BAD = 'bad'), (e.NEUTRAL = 'neutral'), (e.GOOD = 'good'), e;
})({});
let c = 1024;
var u = (function (e) {
    return (e.AV = 'AV'), (e.SOCIAL = 'SOCIAL'), e;
})({});
let d = [r.LX.VIDEO_BACKGROUND, r.LX.STREAM, r.LX.ACTIVITY, r.LX.VOICE_FILTER, r.LX.VOICE, r.LX.IN_APP_REPORTS, r.LX.USER_DM_MUTE, r.LX.BLOCK_USER].reduce((e, t, n) => s(o({}, e), { [t]: n }), {}),
    f = ['bad', 'neutral', 'good'],
    _ = 8640000000000000;
