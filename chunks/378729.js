n.d(t, {
    Vn: () => d,
    e8: () => u,
});
var r = n(600975),
    i = n(428835);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
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
function l(e, t) {
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
let c = (0, r.C)({
        id: "2025-11_game_update_notification",
        kind: "user",
        label: "Game Update Notification",
        defaultConfig: { showToggle: !1 },
        treatments: [
            {
                id: 1,
                label: "User can receive game update notifications. Show settings toggle.",
                config: { showToggle: !0 },
            },
        ],
    }),
    u = (e) => (0, i.u5)(c, l(s({}, e), { autoTrackExposure: !1 })),
    d = (e) => (0, i.P2)(c, l(s({}, e), { autoTrackExposure: !1 })).showToggle;
