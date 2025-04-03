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
    E1: () => u,
    HE: () => f,
    SJ: () => _,
    X7: () => c,
    dp: () => l,
    f7: () => d,
    xV: () => s
});
var s = (function (e) {
        return (e[(e.BACKGROUND = 0)] = 'BACKGROUND'), e;
    })({}),
    l = (function (e) {
        return (e[(e.OPTION_1 = 0)] = 'OPTION_1'), (e[(e.OPTION_2 = 1)] = 'OPTION_2'), (e[(e.OPTION_3 = 2)] = 'OPTION_3'), (e[(e.OPTION_4 = 3)] = 'OPTION_4'), (e[(e.OPTION_7 = 7)] = 'OPTION_7'), (e[(e.OPTION_8 = 8)] = 'OPTION_8'), (e[(e.OPTION_9 = 9)] = 'OPTION_9'), (e[(e.OPTION_10 = 10)] = 'OPTION_10'), e;
    })({});
let c = [7, 8, 9, 10],
    u = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => a(i({}, e), { [t]: n }), {}),
    d = 'blur',
    f = {
        width: 1280,
        height: 720
    },
    _ = 10485760;
