function r(e, t, n) {
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, {
    aZ: () => s,
    b5: () => u,
    iF: () => l,
    nw: () => c,
    rN: () => d
});
var s = (function (e) {
    return (e.BAD = 'bad'), (e.NEUTRAL = 'neutral'), (e.GOOD = 'good'), e;
})({});
let l = 1024;
var c = (function (e) {
    return (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), (e.VIDEO_BACKGROUND = 'VOICE_BACKGROUND'), (e.ACTIVITY = 'ACTIVITY'), (e.IN_APP_REPORTS = 'IN_APP_REPORTS'), (e.USER_DM_MUTE = 'USER_DM_MUTE'), (e.BLOCK_USER = 'BLOCK_USER'), (e.VOICE_FILTER = 'VOICE_FILTER'), e;
})({});
let u = ['VOICE_BACKGROUND', 'STREAM', 'ACTIVITY', 'VOICE_FILTER', 'VOICE', 'IN_APP_REPORTS', 'USER_DM_MUTE', 'BLOCK_USER'].reduce((e, t, n) => a(i({}, e), { [t]: n }), {}),
    d = ['bad', 'neutral', 'good'];
