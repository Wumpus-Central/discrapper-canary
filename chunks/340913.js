n.d(t, {
    A: () => c,
});
var r = n(945810);

function i(e, t, n) {
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

function a(e) {
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
                i(e, t, n[t]);
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

function o(e, t) {
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
let l = {
        showPTTJoinTooltip: !1,
        showPTTIconIndicator: !1,
        showPTTNoKeybindWarning: !1,
        showPTTSpeakingIndicator: !1,
    },
    c = (0, r.mj)({
        name: "2025-12-09-ptt-education",
        kind: "user",
        defaultConfig: l,
        variations: {
            1: o(a({}, l), {
                showPTTJoinTooltip: !0,
                showPTTNoKeybindWarning: !0,
                showPTTSpeakingIndicator: !0,
            }),
            2: o(a({}, l), {
                showPTTIconIndicator: !0,
            }),
        },
    });
